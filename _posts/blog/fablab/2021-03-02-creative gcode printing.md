---
title: "Creative gcode printing"
date: 2021-03-02T10:20:23+02:00
tags: ["3d printing"]
categories: ["blog", "fablab"]
layout: post
---

# Creative gcode printing

M82 ; absolute extrusion mode
G21 ; set units to millimeters
G90 ; use absolute positioning
M82 ; absolute extrusion mode
M104 S220 ; set extruder temp
M109 S220 ; wait for extruder temp
G28 W ; home all without mesh bed level
G80 ; mesh bed leveling
G1 F2100 E-0.8
G1 X100.0 Y100.0 Z10.0
G1 X100.0 Y100.0 Z10.0 E5.0

## Software
- Pronterface (I downloaded it [here](https://kliment.kapsi.fi/printrun/) after spending 2 hours trying to figure out why the precompiled version didn't work and trying to rebuild it )
- Processing

With Pronterface you can send gcode directly to the printer. I tested this out with the following [code](https://gist.github.com/celly/c4ea2ebc2957059c138e) (sending the commands individually to see if it worked).

{% highlight gcode %}
G90                         ; Explicitly force absolute positioning in case it was not reset previously.
G28                         ; Home all axes.
G29                         ; Auto-level the bed.
G0 X0 Y0 Z0.15 F9000        ; Move to the front-left part of the bed.
M109 S{print_temperature}   ; Set and wait for extruder temperature.
G92 E0                      ; Zero the extruder.
G1 X40 E25 F500             ; Extrude a fat line of filament to prime and clean the nozzle.
G92 E0                      ; Zero the extruder.
G1 E-1 F500                 ; Retract 1 mm.
G1 X80 F9000                ; Sweep right to cut any strings.
G1 Z0.3                     ; Raise the tip a little and begin printing.
{% endhighlight %}

## Links
<https://marlinfw.org/docs/gcode/G000-G001.html>
<https://fabacademy.org/2021/labs/agrilab/shared_workshop/CreativeGcode3Dprinting/>
<http://www.codeplastic.com/2017/06/05/g-code-with-processing-part-1/>