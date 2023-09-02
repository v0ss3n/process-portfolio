---
title: "Upgrading a Creality Ender 3"
date: 2021-03-19T10:20:23+02:00
tags: ["3d printing"]
toc: true
categories: ["blog", "fablab"]
layout: post
---

# Upgrading a Creality Ender 3: SKR Mini E3 & BLTouch
Henk installed an SKR Mini E3 V2.0 board with a touchscreen and a BL Touch Z leveling sensor. The kit includes a working build of Marlin 2.0.x firmware for the Creality Ender-3. This comes pre-loaded on the SD card and can be used immediately following installation (it's called FIRMWARE.CUR). After starting up the printer, the BLT's probe goes up (deploys) and down (stows) which is supposed to happen (self test) and lights up red. We also get an info message saying 'Fade Height OFF' which I read online is fine. The touchscreen works fine and the BLT seems to function; however when we go to ABL (auto bed leveling) and start the procedure, an error occurs. It's also not possible to move the Z axis up and down with the move menu, although we can clearly see it's moving up and down just fine when homing the Z axis. When moving the X and Y axis, the distance moved also doesn't seem to be right.

It's recommended to update the [firmware](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/firmware/V2.0), so I'll start with that. I followed the instructions on the Github page:

- Download the desired firmware BIN file to your computer.
- Rename the file to firmware.bin if it differs.
- Copy the file to the SD card included with the board.
- Power on the 3D Printer with the SD card loaded.

 I downloaded the 'firmware-bltouch-for-z-homing.bin' and removed the firmware.cur file just to be sure it wouldn't interfere. What is supposed to happen is that the screen goes blue for about 20 seconds while it's flashing the software, and renames the file to FIRMWARE.CUR; but neither happen. When I tried INIT SD CARD the printer started moving and I encountered a new error with the BLT and a suggestion to restart the machine (was too slow to take a picture of this). However after that the file was renamed to FIRMWARE.CUR. The homing of the X and Y axis still happens with the end stops so I don't think it properly worked.

 I tried starting a test print hoping something would happen but I got an error with the BLT instead (which makes sense).

 Then after following [this](https://www.instructables.com/Install-BL-Touch-on-Ender-3-With-SKR-Board/) tutorial, I disconnected the Z endstop and moved the black and white cable there. After that the Z leveling automatically happens with the BLT and the print head moves to the center, but since the BLTouch was too far away from the bed, the nozzle damaged the bed.

 After moving the BLTouch up Z leveling went fine; however when starting ABL it only worked in the center of the bed, the next corner (left front) produced an error 'Probing Failed'.

## Setting the Z Probe offset
 I could still start prints though since that only used the center bed Z leveling; however it would start printing approximately 12 mm above the bed so I need to set the Z probe offset first. I tried this via the menu. The positive offset seemed to work (the printer started printing higher), but the negative offset (which I needed) didn't change anything so that also wasn't great.

Next I wanted to use [this method](https://blog.gruby.com/2020/01/05/installing-a-bltouch-on-an-ender-3-pro/):

"Basically if I have an object of a known size, i.e. a cube that I use calipers to measure the height, raise the Z axis (using the controls on the printer), put the cube directly under the nozzle and adjust the Z axis so that the nozzle barely touches the cube, I’d know exactly the Z Probe Offset. If the cube is say 15 mm tall and the Z axis shows 15.88 mm, I’d set the Z Probe Offset to be -0.88 mm. So much less guess work in this. Don’t forget to store the settings after setting the Z Probe Offset. Since my settings are pretty good using the Babystep Z (with my firmware options simply called Z Probe Offset), I haven’t actually tried using a cube of known size to set the offset."

However since there's also still the issue of not being able to move the axes properly that didn't help.

My next attempt is connecting the printer via Pronterface to see if I could magically make the axes move properly. Moving 0.1mm and 1mm seemed to be fine, moving 10mm the print head moved about 1.5mm, and moving 100mm the printer just made a skitting sound and the print head didn't move in X or Y direction. The Z axis doesn't move at all. After disconnecting and reconnecting and sending commands in pronterface it did work (for a while) but I have no clue what changed; the Z axis is still not moving though. Homing the axes with the single X, Y and Z axis homing button behaved strangely; after the X and Y axis homed, the print head suddenly started traveling to the right and tried to go through the machine so I quickly turned it off. After that I homed the axes individually and nothing strange happened so I'm just confused since everything that's happening seems so random.

I connected the printer to Pronterface since this is how [this tutorial](https://www.youtube.com/watch?v=y_1Kg45APko) is setting the Z Probe Offset. I saw that they sent an M503 command to get an overview of all of the current settings so I started with that.

So the steps I followed are:
1. M503
2. Home X, Y and Z
3. M851 Z0 (resets Z offset to 0; I checked if it worked with another M503 command)
4. M500 (stores these settings in the EEPROM)
5. M501 (restore settings, set them as active parameters)
6. M503 (displays current active settings)
7. G28 Z (homes Z axis only)
8. G1 F60 Z0 (moves nozzle to current 0.00 Z with 60 as speed): at this point the nozzle is about 3.5mm above the bed (estimated with sliding a 3mm acrylic sheet under the nozzle)
9. M211 S0 (switches off soft endstops, which prevent you from going below the absolute 0)
10. Move the Z axis down with a piece of paper between the nozzle and the bed with very small steps until you can barely move the paper due to the friction. THIS IS THE FIRST TIME THAT I CAN ACTUALLY MOVE THE Z AXIS. For me this was at Z: -3.30mm. Add the thickness of the paper (0.08 in my case), so that makes a Z Probe Offset of -3.38mm.
11. M851 Z -3.38 (sets Z offset to true offset)
12. M211 S1 (turns on soft endstops)
13. M500 (saves these settings to EEPROM)
14. M501 (set EEPROM as active parameters)
15. M503 (check again if everything was properly saved)

I don't know why but now I could move the Z axis with the buttons in Pronterface. Then a bit later it didn't; I could see the Z axis value changing on the touch screen but nothing was actually moving. After following the homing procedure, M500, M501 and M503 it however did move; but Z0 is again floating about 15mm above the bed. When redoing all of the steps above a regular print starts at the correct Z0 again.

ABL still didn't work (same issue as [this person](https://3dprinting.stackexchange.com/questions/15923/ender-3-pro-with-bltouch-partially-completes-abl-sequence-then-locks-up)). I also checked [Reddit](https://www.reddit.com/r/BIGTREETECH/comments/issq6g/trouble_with_skr_mini_e3_v2_and_abl/) and tried to level the bed via the Marlin LCD emulator (if you press the physical button for 3 seconds you can switch modes, more information on that [here](https://crosslink.io/2020/06/12/skr-1-3-1-4-tft35-display-installation-and-marlin-2-0-configuration/)). That also didn't work. 

After printing a test print I wanted to see if ABL magically worked, and it actually did. For the first time it finished the entire bed leveling procedure, leaving me very confused why it works now suddenly. It also is now possible to move all of the axes. 

For the next test print I changed the Z Probe offset to 3.88, since I had to babystep Z to -.50mm because it was still printing in the air; while printing I babystepped to +0.10mm again for the squares in the back of the bed, but that was too much for the squares in the middle and front, so I'm guessing the printer is not using the ABL data. In [this post](https://www.reddit.com/r/BIGTREETECH/comments/issq6g/trouble_with_skr_mini_e3_v2_and_abl/) it's mentioned that you need a G29 (bed leveling/ABL) right after a G28, since G28 clears the mesh. I'm checked this by adding a G29 to the gcode of the test squares.

Startup code from PrusaSlicer:

{% highlight gcode %}

M201 X500 Y500 Z100 E5000 ; sets maximum accelerations, mm/sec^2
M203 X500 Y500 Z10 E60 ; sets maximum feedrates, mm/sec
M204 P500 R1000 T500 ; sets acceleration (P, T) and retract acceleration (R), mm/sec^2
M205 X8.00 Y8.00 Z0.40 E5.00 ; sets the jerk limits, mm/sec
M205 S0 T0 ; sets the minimum extruding and travel feed rate, mm/sec
M107
;TYPE:Custom
G90 ; use absolute coordinates
M83 ; extruder relative mode
M104 S215 ; set extruder temp
M140 S60 ; set bed temp
M190 S60 ; wait for bed temp
M109 S215 ; wait for extruder temp
G28 ; home all
G29 ; newly added bed levelling command
G1 Z2 F240
G1 X2 Y10 F3000
G1 Z0.28 F240
G92 E0
G1 Y190 E15 F1500 ; intro line
G1 X2.3 F5000
G92 E0
G1 Y10 E15 F1200 ; intro line
G92 E0
G21 ; set units to millimeters
G90 ; use absolute coordinates
M83 ; use relative distances for extrusion
; Filament gcode
;LAYER_CHANGE
;Z:0.2
;HEIGHT:0.2
;BEFORE_LAYER_CHANGE
G92 E0
;0.2

{% endhighlight %}

I still babystepped immediately +0.1mm and halfway through to +0.2mm so I decided to change the Z offset to -3.68mm. It did print now so my conclusion is that the G29 is actually necessary. At first I thought that would be another issue to fix but luckily, there is a PrusaSlicer for an Ender 3 with BLTouch installed specifically which does precisely that so for now the BLTouch install is complete.

## Update
So after months of using and struggling with the Ender and babystepping and offsetting the Z axis constantly, it's time for another go at upgrading and troubleshooting. Again I tried updating the firmware with the on-board SD card but again no flashing blue screen; also no change of the name to FIRMWARE.CUR. This time I decided to try it with USB cable using VSC and PlatformIO following [this](https://www.youtube.com/watch?v=GQlAN88ebNM) tutorial.

As a future note to self: in PlatformIO the blue bar has the buttons you need to build!

![skr]({{ site.baseurl }}/images/fablab/ender/build_platformio.jpg)

<!-- to do: add pictures of wiring etc -->

<https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/issues/413>

## Another update
So I've removed the BLTouch and returned to regular bed leveling and now everything is fine. I don't think our BLTouch properly functions.

## Heating issues
After I broke the fan (don't try to put a hex key in a running fan) and replaced it with a brand new one, a new issue arose: "Heating Failed: E1 Printer Halted Please Reset"

difference of about 30 degrees celsius in measuring hot end

removed fan:
measuring 150 > 180 on screen
measuring 120 > 150 on screen
measuring 170 > 200 on screen
measuring 180 > 210 on screen
measuring 185 > 220 on screen
measuring 198 > 230 on screen
measuring 206 > 240 on screen


heated bed:
measuring 67 > 60 on screen

only error when fans are connected

https://forums.creality3dofficial.com/community/troubleshootingprinting-help/heating-failed-e1-printer-halted-please-reset/
https://reprap.org/forum/read.php?262,866341

Checked:
- Thermistor not making good contact with heater block.
- Heating element not firmly attached to control board (loose screws)

- Everything works fine until 220 degrees

## More troubleshooting
- Keep this in mind: in normal print conditions wall thickness should be directly related to the nozzle size, so if you have a 0.4mm nozzle the wall thickness should be a multiple of this: 0.4, 0.8, 1.2 and so forth.


## Links
- <https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/blob/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0/Hardware/BTT%20SKR%20MINI%20E3%20V2.0%20Instruction%20Manual.pdf>
- <https://linsomniac.gitlab.io/post/2020-06-20-ender3-pro-skr-v2_0-bltouch-upgrade/>
- <https://3dprinting.stackexchange.com/questions/10345/bltouch-probing-fails-intermittently>
- <https://kay3d.com/pages/the-correct-way-to-configure-a-bltouch>
- <https://all3dp.com/1/common-3d-printing-problems-troubleshooting-3d-printer-issues>