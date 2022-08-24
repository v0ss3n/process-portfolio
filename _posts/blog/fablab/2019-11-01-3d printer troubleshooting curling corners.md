---
title: "3d printer troubleshooting: curling corners"
date: 2019-11--1T11:10:23+02:00
tags: ["3d printing", "tevo"]
categories: ["blog", "fablab"]
layout: post
---

## Curling corners on the first layers
Possible causes:
- Too hot or too cold (bed, material, fan)
>> Plastic tends to shrink as it cools from a warm temperature to a cool temperature. The plastic is extruded at a very hot temperature, and if it does not cool quickly, it may change shape over time. Curling can be prevented by rapidly cooling each layer so that it does not have time to deform before it has solidified. 

> Increase fan speed, lower printing temperature, increase bed temperature, add raft etc.

- Bed not level
> Fix this by leveling the bed (use the method above or use the printer's own bed leveling procedure, I am using this last method quite often)

- Nozzle starts too far from the bed
> You can use the Z-Axis offset to make very fine adjustments to your nozzle position. For example, if you enter -0.05mm for the Z-axis G-Code offset, the nozzle will begin printing 0.05mm closer to your build platform. You can also adjust this live or use the first layer calibration setting on the printer itself if that's available. 

- Bed adhesion
> Clean the bed surface, use tape or glue spray

"If your printer does not include a special build platform material to help with adhesion, you still have options! Thankfully, there are several types of tape that stick well to common 3D printing materials. Strips of tape can be applied to the build platform surface and easily removed or replaced if you want to print with a different material. For example, PLA tends to stick well to blue painter’s tape while ABS tends to stick better to Kapton tape (otherwise known as Polyimide film). Many users have also had great success using a temporary glue or spray on the top of their build platforms. Hair spray, glue sticks, and other sticky substances tend to work very well if everything else has failed."

- First layer printing too fast
> If you print the first layer too fast, the plastic may not have time to bond to the build platform. For this reason, it is typically very useful to print the first layer at a slower speed so that the plastic has time to bond to the bed.

First I am trying to fix this by:

- adding a brim
- increase the fan speed (both of them were at 0% but they were both on so I am not sure if this will change anything, I changed them both to 100%, the maximum. I did hear more sound coming from them but I am not sure)
- lower the printing speed for the first layer (100% to 50%)

If I change more settings than this I will not know what actually made the difference, so I will first look at what the result of these changes is. I will compare the Y axis carriage parts for this as I already printed one of these without all of these changed settings. I also leveled the bed because when I started this for the first time, it did not stick to the bed at all so I don't think it's level at all.

References: 
- <https://www.simplify3d.com/support/print-quality-troubleshooting/overheating/>
- <https://www.simplify3d.com/support/print-quality-troubleshooting/not-sticking-to-the-bed/>
- <https://www.simplify3d.com/support/print-quality-troubleshooting/curling-or-rough-corners/>
