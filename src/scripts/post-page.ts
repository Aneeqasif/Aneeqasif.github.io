const EXAMPLE_BLOCK_WRAPPER_SELECTOR = ".example-block__wrapper";
const COLLAPSE_BUTTON_SELECTOR = ".foldable-collapse-btn";

let collapseButtonsInitialized = false;
let exampleBlockRefreshQueued = false;
let initialBootCompleted = false;
let firstAstroPageLoadSeen = false;

function updateExampleBlockGradients() {
    const wrappers = document.querySelectorAll<HTMLElement>(EXAMPLE_BLOCK_WRAPPER_SELECTOR);

    wrappers.forEach((wrapper) => {
        const hasVerticalOverflow = wrapper.scrollHeight > wrapper.clientHeight;
        const hasHorizontalOverflow = wrapper.scrollWidth > wrapper.clientWidth;

        if (hasVerticalOverflow) {
            wrapper.classList.add("has-vertical-overflow");
        } else {
            wrapper.classList.remove("has-vertical-overflow");
        }

        const gradientWrapper = wrapper as HTMLElement & {
            _gradientScrollListener?: () => void;
        };

        if (hasHorizontalOverflow) {
            wrapper.classList.add("has-horizontal-overflow");

            let rightGradient = wrapper.querySelector<HTMLElement>(".example-block__gradient-right");
            if (!rightGradient) {
                rightGradient = document.createElement("div");
                rightGradient.className = "example-block__gradient-right";
                wrapper.append(rightGradient);
            }

            const updatePosition = () => {
                if (!rightGradient) return;

                const scrollLeft = wrapper.scrollLeft;
                const viewportWidth = wrapper.clientWidth;
                const gradientWidth = 48;
                const leftPos = scrollLeft + viewportWidth - gradientWidth;

                const scrollbarHeight = wrapper.offsetHeight - wrapper.clientHeight;
                const gradientHeight = wrapper.scrollHeight - scrollbarHeight;

                rightGradient.style.left = `${leftPos}px`;
                rightGradient.style.height = `${gradientHeight}px`;
            };

            updatePosition();

            if (!gradientWrapper._gradientScrollListener) {
                gradientWrapper._gradientScrollListener = updatePosition;
                wrapper.addEventListener("scroll", updatePosition, { passive: true });
            }
        } else {
            wrapper.classList.remove("has-horizontal-overflow");

            const rightGradient = wrapper.querySelector<HTMLElement>(".example-block__gradient-right");
            if (rightGradient) {
                rightGradient.remove();
            }

            if (gradientWrapper._gradientScrollListener) {
                wrapper.removeEventListener("scroll", gradientWrapper._gradientScrollListener);
                delete gradientWrapper._gradientScrollListener;
            }
        }
    });
}

function queueExampleBlockRefresh() {
    if (exampleBlockRefreshQueued) return;
    exampleBlockRefreshQueued = true;

    const flush = () => {
        exampleBlockRefreshQueued = false;
        updateExampleBlockGradients();
    };

    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(flush);
        });
    } else {
        window.setTimeout(flush, 0);
    }
}

function setupFoldableCollapseButtons() {
    if (collapseButtonsInitialized) return;
    collapseButtonsInitialized = true;

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const button = target.closest(COLLAPSE_BUTTON_SELECTOR);
        if (!(button instanceof HTMLButtonElement)) return;

        const details = button.closest("details.foldable-section") as HTMLDetailsElement | null;
        if (!details) return;

        const summary = details.querySelector("summary");
        if (!summary) return;

        event.preventDefault();

        const SCROLL_OFFSET = 0.5;
        const HIGHLIGHT_DURATION = 1000;
        const SCROLL_TO_HEADING = true;
        const SCROLL_DELAY = 270;
        const SCROLL_POSITION_PERCENT = 3;

        const contentHeight = details.scrollHeight - summary.offsetHeight;

        details.removeAttribute("open");
        window.scrollBy(0, -(contentHeight + SCROLL_OFFSET));

        summary.classList.add("collapse-highlight");
        window.setTimeout(() => {
            summary.classList.remove("collapse-highlight");
        }, HIGHLIGHT_DURATION);

        if (SCROLL_TO_HEADING) {
            window.setTimeout(() => {
                const viewportHeight = window.innerHeight;
                const targetOffset = (SCROLL_POSITION_PERCENT / 100) * viewportHeight;
                const summaryRect = summary.getBoundingClientRect();
                const scrollTarget = window.scrollY + summaryRect.top - targetOffset;
                window.scrollTo({ top: scrollTarget, behavior: "smooth" });
            }, SCROLL_DELAY);
        }
    });
}

function initPostFeatures() {
    setupFoldableCollapseButtons();
    queueExampleBlockRefresh();
}

function runInitialBoot() {
    if (initialBootCompleted) return;
    initialBootCompleted = true;
    initPostFeatures();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runInitialBoot, { once: true });
} else {
    runInitialBoot();
}

window.addEventListener("load", queueExampleBlockRefresh);
window.addEventListener("resize", queueExampleBlockRefresh);
document.addEventListener("astro:page-load", () => {
    if (!firstAstroPageLoadSeen) {
        firstAstroPageLoadSeen = true;
        return;
    }

    initPostFeatures();
});
document.addEventListener("swup:contentReplaced", initPostFeatures);
document.addEventListener("swup:content-replaced", initPostFeatures);
document.addEventListener("swup:page:view", initPostFeatures);

export { initPostFeatures, queueExampleBlockRefresh, updateExampleBlockGradients };