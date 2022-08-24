---
title: "Lasercut lace (visual cryptography)"
date: 2020-01-15T10:31:30+02:00
tags: ["experiment", "fashion", "textiles", "cryptography"]
categories: ["blog", "textilelab"]
layout: post
---

# Lasercut lace
I am hiding visually encrypted images in double layered lace. For more information on the process, go to [this page]({{ site.baseurl }}\textilelab\2019\11\01\3d-printing-experiments-on-fabric-(visual-cryptography).html)).

## Process
- Use the python script (described on the page linked to above) on the image you want
> Make sure the output images can be scaled up enough so you can add a grid on top
- Draw a rectangular grid on top of the two output images in Illustrator (click and hold the Line Segment tool and select the Rectangular Grid tool)
> The amount of lines needed is the start size of the output images (amount of pixels horizontally and vertically) minus 1
- Export as PDF to get a clear export (all other options become blurry)
- Make a bitmap of the PDF in Photoshop (threshold 50%) 
- Set the lasercutter to engrave but make sure that the laser actually cuts through the material by decreasing the speed and/or increasing the power

![]({{ site.baseurl }}/images/textilelab/vsc.gif)

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/textilelab/vsc-textile5.jpg)
![]({{ site.baseurl }}/images/textilelab/vsc-textile6.jpg)
</div>

