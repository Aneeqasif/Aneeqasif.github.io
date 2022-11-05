---
title: Superconductivity and Quantum Mechanics at the Macro-Scale
categories: [Condense Mater Physics, SuperConductivity]
tags: [superconductivity]     # TAG names should always be lowercase
math: true

---


## Resistivity
According to good old ohms law we know that

$$ V= IR $$

and dissipation is given as 

$$
P = IV
$$

$$P = I^2R$$

and the Resistance is given as 

$$R = \rho \frac{L}{A}$$

and we will stress on the $\rho$ resistivity later on which is property of material.
we can differentiate b/w different materials w.r.t value of resistivity i-e metals have very high values of resistivity ($10^{-6} \Omega cm$ ) while insulators have high values ($10^{16} \Omega cm$) .

we can have an idea by ratio of a good insulator and conductor

$$\frac{\rho_{teflon}}{\rho_{graphine}}  = 10^{31} $$

we can define **Quanta of resistivity** as

$$\rho_Q = \frac{h^3}{(2\pi)^2 e^4 m_e} = 1.35 \times 10^{4} \Omega cm$$

so insulators are materials that have resistivity very large then this number and inverse for metals.

### Resistivity at Absolute zero
for resistivity of metals
1. $\rho >0$
2. $\delta \rho / \delta t >0$
which means if we keep lowering the temperature the resistivity will decrease and vice versa, but what will happen at absolute zero ? well we can say

$$\overline{KE} \propto T \simeq 0$$ 

but quantum mechanics have a different take on absolute zero , given by uncertainty principal as:

$$m \overline{KE}(\Delta r)^2  > \# h^2$$

where
- m is mass of particle
- $\Delta r$ is the amount of space allowed for motion

as we lower the temperature we reduce the amount of space for particle to move and if it has a finite mass the kinetic energy approaches to a finite minimum saturation value and never goes to zero. In QM we find that 

$$system \rightarrow ground \; state$$

as 

$$T \rightarrow 0$$

and formal statement that corresponds to this is entropy goes to zeros at T approaches 0. 

$$S \rightarrow  0$$

which is not possible by 2nd law of thermodynamics so absolute zero cannot be reach because if entropy always have to increase and S is zero at T=0 then we cannot reduce the temperature of a material where its entropy is even lower. so its totally abstract idea to think of what happen to resistivity at absolute zero.

Kamerlingh-Onnes the father of superconductivity just wanted to see what happened to superconductivity if he drops the temperature of some really pure material to extremely low temperatures i-e, temperature liquid helium. because helium is little different from others due to its small mass 

$$m \overline{KE}(\Delta r)^2  > \# h^2$$

and the fact that kinetic energy times r can never be smaller then a certain number it turns out that helium remains liquid at very very low temperatures.


so Onnes cooled highly purified mercury with liquid helium its resistivity drops to zero.
![resistivity](/img/Superconductivity-and-Quantum-Mechanics-at-the-Macro-Scale/resistivity.png){: .shadow } 

### What is 0 resistivity ?

Zero in science is a very abstract term. what is actually meant by zero resistivity? well we can have a feeling of it by persistent currents. Suppose we have a metal and we drive some current through it my be by rotating it in some magnetic field. When we stop driving it the current does not goes to zero instantaneously but it will take a certain amount of time. This time scale characterize the dissipation and it determines how the entropy of the system is going to increase with time.
so we can ask how fast that current decays , well that time differ for different kind of circuit i-e its
- $\tau = RC$  for capacitive circuits 
- $\tau = R/C$ for purely inductive circuits
thus for the most part 

$$\tau \propto R$$

so in persistent current experiment rather then measuring resistivity we ask *how fast the current decays*
lets imagine we have current going in a ring, which means there will be a certain magnetic flux through the ring. Then we measure the flux through that ring at then leave that ring below $T_c$ critical temperature for a very long time. When we come back and measure the flux from which we will see that there will be no decay in current. So how long we have to wait for that current to decay away? Answer is , life of universe.
so uptill now we know that superconductors:
- $T > T_c$ exist above critical temperature
- show Persistent currents.

## Emergent Phenomenon
> **Emergent Phenomenon** are those which can not be understood by studying any finite number of constituents. it a property that emerges only when number of particles approaches infinity.
{: .prompt-info }

Superconductivity is an emergent phenomena exhibited by electron at very low temperatures. so if we are considering any finite ring in our example then there will not be infinite electrons thus the persistent time will also not be infinite but rather a very long time. the time can be approximated as

$$
\tau \sim \tau_o \; exp [\frac{R}{a}\frac{T_0}{T}]
$$

where 
- R is radius of ring
- a is microscopic length scale , order of radius of the atom
- $T_o$  microscopic energy scale , order of binding energy of hydrogen.
for a 1 mm wide ring with temperature of 1 K.

$$\tau \sim 10^{12}$$

bigger then google i-e, $10^{100}$

## Quantum of flux
we can define quantum of magnetic flux as 

$$\phi_o  = \frac{hc}{e}$$

it has both relativistic and quantum nature.
little -purks et al. showed that in a superconducting ring the flux is quantized and its always integer multiple of **superconducting quantum of flux** 

$$\phi = n  \phi_o^{\ast}$$

which is half of fundamental quantum of flux

$$\phi_o^{\ast} = \phi/2 = \frac{hc}{2e}$$

this 2 is an important clue which is discussed later  
## Josephson Effect
when we put a **constant voltage** across the junction b/w two SC and thin insulator in between it **produce a oscillatory current** in the junction

![](/img/Superconductivity-and-Quantum-Mechanics-at-the-Macro-Scale/josephson.png)

where the frequency of oscillations is given by:

$$ h\nu = 2eV$$

where $V$ is voltage applied across junction.
what this means is every time you put a same voltage across a junction you get exactly the same value of frequency with precision of

$$\frac{\Delta \nu}{\nu} = 10^{-17}$$

indeed a beautiful quantized macroscopic phenomena.
## Types of superconductors
when we try to pass magnetic field through the superconductor it try to repel the B fields because of [[Meisner Effect]] and two types of effects are observed which then further characterize superconductors into type I and type II.
In type-1 SC, after a critical magnetic field the superconducting phenomena stops. 
while in type-2 SC, the magnetic field can pass through the SC, by making small holes *vortices* of normal metal through SC with flux passing through each hole equals to superconducting qunatum of flux and number of holes is directly proportion to magnetic field.