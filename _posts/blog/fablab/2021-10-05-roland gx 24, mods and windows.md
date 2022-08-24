---
title: "Roland GX-24, mods and Windows"
date: 2021-10-05T11:10:23+02:00
tags: ["vinyl cutting", "mods"]
categories: ["blog", "fablab"]
layout: post
---

# Roland GX-24, mods and Windows (didn't work yet, to be continued)

## mods
Clone [this](https://gitlab.fabcloud.org/pub/project/mods) repository following the steps mentioned in the documentation:
Step 1: Clone the mods repository: git clone https://gitlab.fabcloud.org/pub/project/mods.git

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods.jpg)

Step 2: Run the installation script bash install-mods inside the mods folder

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods2.jpg)

I started in Powershell but then read that that's not recommended (it also didn't work) so I switched to git bash, that also didn't work, so I continued to follow the instructions and first tried to install Windows WSL (windows subsystem for linux) with:
 
```wsl --install```

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods3.jpg)

However I already had it installed (since I used WSL for working with the Slic3r non-planar slicing option); but I got the following error: Windows Subsystem for Linux has no installed distributions.

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods4.jpg)

https://aka.ms/wslstore this link didn't work for me either so I followed solution 3 from this tutorial:
<https://appuals.com/how-to-fix-windows-subsystem-for-linux-has-no-installed-distributions-error/>
Download Ubuntu here:
<https://www.microsoft.com/en-nz/p/ubuntu/9nblggh4msv6?rtc=1#activetab=pivot:overviewtab>

- Don't forget to check for updates if you get any errors (sudo apt upgrade).
- Don't run the installation script as root (sudo).

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods5.jpg)
![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods6.jpg)

Then afterwards you should be able to start mods with bash mods from the mods folder, but when I opened localhost:1234 and the other servers in Chrome, they all said Upgrade required. So I went back to the wiki to try manual installation (<https://gitlab.fabcloud.org/pub/project/mods/-/wikis/Setup/Manual-mods-Setup-(Linux,-Windows-WSL,-macOS)>).

![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods7.jpg)
![roland]({{ site.baseurl }}/images/fablab/modela/roland-mods8.jpg)

## Roland CutStudio plugin
There's lots of negative reviews about this one but I wanted to try it out, but of course you need a license to CutStudio (free with the machine, you can only get this on a cd-rom if you believe the internet). Haven't been able to find one on a non-sketchy website.

## Cutting Master 3 & 4
Programs are made for Graphtec plotters; hoped I would be able to connect the Roland as well but the programs didn't recognize the Roland.

![roland]({{ site.baseurl }}/images/fablab/modela/roland1.jpg)

## Intermediate conclusion
So: nothing still worked and I needed the vinyl cutter so I decided to accept my defeat (for now) and place the vinyl cutter computer back. Here mods (boot computer in Ubuntu) and Illustrator CS5 (boot computer in Windows 7) both work.

## mods on Ubuntu
Mods are separate modules used to control the machines. Together these modules form a program. In this case we are using the modules for the Vinyl Cutter: the Roland 24.

Relevant blocks:
- Read SVG (load the vector file that you want to cut) or read PNG (load black and white PNG in high resolution; jagged lines if dpi is too low)
- Roland GX/GS-24 Relative (you can do a cut test, set image origin, set force and speed)
- WebSocket device (connection)

Speed should be about 2 cm/s

## Vinyl cutting on Windows 7 
Send file to plotter with File > Print (ctrl+p)

Notes:
- Vector stroke thickness should be set to something like 0,01pt, otherwise they will be interpreted as double lines
- Motor error: vinyl roll is probably stuck somewhere
- Set origin on machine before starting
- If shapes aren't being cut (for some reason all L's weren't being cut when I used fill instead of stroke)
- If you have a large file try to split it to avoid wasting material when stuff inevitably goes wrong

## TO DO 
- find port in printer properties and try one more time with Cutting Master 3/4
- try using print from illustrator

## References
<https://gitlab.fabcloud.org/pub/project/mods/-/wikis/Machines/GX-24>
