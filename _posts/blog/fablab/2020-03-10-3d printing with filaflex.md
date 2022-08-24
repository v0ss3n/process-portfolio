---
title: "3d printing with filaflex"
date: 2020-03-10T11:45:23+02:00
tags: ["3d printing", "ultimaker", "experiment"]
categories: ["blog", "fablab"]
layout: post
---

# 3d printing with Filaflex
> "Filaflex is the original elastic filament for 3d printers, this new revolutionary material is a TPE (thermoplastic elastomer) with a polyurethane base and some additives to make it printable in your 3d printer. Filaflex has an incredible elasticity that allows you to create elastic printed parts for your projects. Now you can create your own shoes or sneakers at home!"

The filament I am using is 2.85mm wide ([this one](https://recreus.com/en/diameter-285/24-16-filaflexnegro285mm11lb-500gr-8435424800165.html#/4-net_weight-500gr/5-diameter-285mm/8-color-black_p_419c)), so I used the Ultimaker 2+ since that's the only printer at Waag right now that works with that filament diameter. I will be printing a glove (more about 3d printed gloves [here]({{ site.baseurl }}/textilelab/fablab/2020/03/06/3d-printed-gloves.html)).

![]({{ site.baseurl }}/images/fablab/glove-3d.png)

## Recommended settings
On the website of the filament these are the recommended print settings:
- Print speed 20mm/s
- Print temperature (240 °C)
- None retractions or low distance (1mm retraction distance and 30mm/s speed)
- Increase the extruder flow if your plastic melt flow is not constant.(105-115%)
- Decrease the pressure of the idler bearing of your extruder in order to avoid filament clogging between the extruder gear and bearing.

Some issues you might run into:
- Filament not sticking to the bed
- Clogging the nozzle
- Filament not extruding
- Not reversing properly

## Starting out
I downloaded the Filaflex slicer software profiles from [here](https://drive.google.com/file/d/1YQOnERsiIFergP-Ei9wYe5UeGZmS30wh/view). I used Cura 4 to slice my models but there are also profiles available for Cura 3, Simplify3D and Slic3r.

![]({{ site.baseurl }}/images/textilelab/3d-glove3.jpg)

The recommended printing speed is 20mm/s but since I am only printing outer walls I chose to set the general printing speed to 38mm/s so the outer wall speed would be close to 20mm/s (they are calculated settings).

![]({{ site.baseurl }}/images/fablab/filaflex-speed.png)


## First and second test
The first two tests started out promising but at some point the material stopped extruding. After the first test I was able to reverse the material (on the Ultimaker this is a process were a motor at the back of the machine starts rotating, pulling the material out of the plastic tube), and insert the material again after which extruding went fine. For the second test I increased the flow with 10%.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/filaflex0.jpg)
![]({{ site.baseurl }}/images/fablab/filaflex1.jpg)
</div>

After the second test I tried to reverse the material but the filament wouldn't budge. I could clearly hear the motor rotate so that wasn't the problem. Trying to pull out the material manually didn't do anything. It was very stuck so I opened the enclosure; this made the issue pretty obvious.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/filaflex2.jpg)
![]({{ site.baseurl }}/images/fablab/filaflex3.jpg)
</div>

I was still using retraction as that was default in the provided print profile, but retraction with flexible filaments is known to be difficult. Once I disabled retraction completely this issue was gone, but it did create another problem (of course). Printing without retraction resulted in a spider web of filament inside and outside of the print. This is something you can fix (somewhat) after printing by cutting the material away and sanding the surfaces, but it's not ideal. If your print is solid you don't have to deal with webbing on the inside, but mine was hollow. This could have been prevented if the model had been sliced as a spiral vase, but for me that didn't work as the sliced model produced some holes (might have to do with my .stl file, although I did try to close the mesh in Meshmixer). Instead I just sliced it without infill and a wall thickness of 1.

![]({{ site.baseurl }}/images/fablab/filaflex4.jpg)

Once the retraction was fixed the biggest issue could be that my print is just one layer thick. I didn't know whether a filament as flexible as this one would collapse or not, so I had to keep a close eye continuously. The first half of the glove printed without any issues but once the the printer started on the fingers you could see the model shaking more. Every time the print head had to travel, the nozzle would pull slightly on the model causing it to shake. Nearing the end of the model I had to stand by to keep the glove steady.

After cutting off the base of the model, the end result is a flexible wearable glove! I kept the strings (for now) as I thought they made the glove look like it came out of the sea.

<iframe width="560" height="315" src="https://www.youtube.com/embed/bIFBjH7_Uq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




