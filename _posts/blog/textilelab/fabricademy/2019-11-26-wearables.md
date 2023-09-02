---
title: "Fabricademy: wearables"
date: 2019-11-26T22:47:46+02:00
tags: ["lecture", "e-textiles", "electronics"]
toc: true
categories: ["blog", "textilelab", "fabricademy"]
layout: post
---

# Wearables 
_Liza Stark_

This second class on the topic of wearables and e-textiles will provide a more advanced coverage on soft sensors and actuators and programming interactions.

## Notes
The slides can be found [here](https://docs.google.com/presentation/d/1s_StEoFFkxUgGzaQmpCSZWH_IqyVzPo7st1fMzgCEDg/edit#slide=id.g6406fb76bb_0_0). Use the slides as a repository, there's a lot of practical information.

## Why we wear
- expression
- communication
- protection

## Considerations for electronics in fashion
- application
- durability
- wearability
- washability
- power
- circuit layout

## Approaches
Visual:
- LEDs
> Connect LED to Arduino with a 220 Ohm resistor (in parallel only 3 LEDs max. with one resistor) 
- Neopixels
> LED strip, address LEDs individually on a microcontroller (you need a microcontroller, cannot use without; download neopixel library for Arduino). Available as strips/rings/matrices/sewable/regular
- Fiber optics
> Light shines in one end and emerges at the other end, quality of fiber determines brightness. Side emitting fibers are also available. Connections are a bit tricky, see slides for documentation; don't let the light escape at the connection
- Thermochromic ink
> Ink/pigment that reacts to heat (becomes colorless once a certain temperature is reached). Pigments can be mixed with different substrates. To heat the circuit we need a secondary power source because Arduino cannot provide enough. For this we use transistors (drain, source, gate). Keep heating up and cooling down times in mind

Sound:
- Speakers
> Electromagnets: create a fabric speaker. See slides for tutorial on how to make one. You can also make an amp, DFPlayer Mini plays audio files from SD card

Motion: 
- Shape memory alloys (SMAs)
> Flexinol (very difficult to make it work apparently). SMAs when heated go to a specific shape (either trained or untrained; untrained shrinks and trained goes into a shape determined by a heating process). Works best with lightweight materials. Liza uses .008 materials thickness (in inches). Use for folding/curling/smocking. Cannot be soldered directly, use crimp beads are very useful. Use the same heat controlling circuit as the thermochromic inks
- Flip dots
> Magnetic ball/bead with one or two coils


