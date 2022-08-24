---
title: "Working with an Elegoo resin printer"
date: 2021-12-14T10:20:23+02:00
tags: ["3d printing", "resin printing"]
categories: ["blog", "fablab"]
layout: post
---

# Working with an Elegoo resin printer
We have the [Elegoo Mars 3 Ultra 4K mono LCD printer](https://www.elegoo.com/products/elegoo-mars-3-lcd-3d-printer) and the [Elegoo Mercury Plus 2 in 1 washing and curing station 2.0](https://www.elegoo.com/products/washing-and-curing-station-v2-0). It has a 6.6-inch ultra-4K high-resolution monochrome LCD, an upgraded COB UV light source structure, and a new release film 2.0 for printing. For slicing we use [Chitubox Free](https://www.chitubox.com/en/download/chitubox-free).

How to set up the machine:

1. Leveling the build plate: unscrew the two bolts holding the build platform. Turn on the machine and use two sheets of paper (2 pages from the information booklet) to level the bed ([source](https://www.elegoo.com/blogs/3d-printer-user-guide/elegoo-mars-pro-level-the-build-plate)). Press "Tool" > "Manual" > "Home" and wait for the Z axis to go down and stop. Adjust Z axis if there is too much or too little resistance. When tightening the bolts, make sure to first tighten the front bolt and then the right side bolt. You don't have to do this every time, once it's set it should be fine for a while. After leveling is complete, set the current Z axis as the first layer for printing.

    <div markdown="1" class="row-2">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3021.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3022.JPEG)
    </div>
    <div markdown="1" class="row-3">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3024.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3025.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3027.JPEG)
    </div>

2. Put on gloves and a mask!
3. Pour resin in the tray:
    ![]({{ site.baseurl }}/images/fablab/resin_printing/resin_pouring.gif)
    <div markdown="1" class="row-2">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3029.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3030.JPEG)
    </div>

4. Insert USB with your sliced model, press print then the play button:
    <div markdown="1" class="row-3">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3032.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3033.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3034.JPEG)
    </div>

5. Place the mini air purifiers (we have [these](https://www.amazon.com/ELEGOO-Purifier-Activated-Universal-Printer%EF%BC%88Pack/dp/B086277CNQ)) on both sides next to the Z axis; don't forget to turn them on. Then put the lid on the machine.
    <div markdown="1" class="row-2">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3036.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3037.JPEG)
    </div>
    <video width="480" height="300" controls>
    <source src="{{ site.baseurl }}/images/fablab/resin_printing/setting_up_machine.MP4" type="video/mp4">
    </video>
    
6. For the first couple of layers you can't see anything since the print is still submerged in the resin. You can see on the screen what layer is being printed. If you want to check on your model you can pause the print, which will lift the build plate so you can see what's been printed so far.
7. Once the print is done, you can take off the entire build plate including your print and submerge it in alcohol isopropyl in a container for the Mercury Plus. This is to wash everything; the tutorial I'm following says to take off the model before doing this to wash it separately, but submerging everything is the way Henk showed me. With bigger models it's probably best to take the model off first. Place the entire container on the plate of the Mercury, set mode to water rotation (the icon with the two rotating droplets) and set the time to 5 minutes. 
    <div markdown="1" class="row-2">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3041.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3042.JPEG)
    </div>
    <div markdown="1" class="row-3">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/reveal1.gif)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3047.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3048.JPEG)
    </div>

    Removing the print:
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j0kLRpEyT7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

8. After the model has dried it's time to cure the model. For this we also use the Mercury. Set mode to UV (light symbol) and time to 5 minutes.
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3093.JPEG)
9. Pour leftover resin back into the bottle. For pouring the resin you have to use a filter. It's probably going to get messy so put some paper on your working area. 
    <video width="480" height="300" controls>
    <source src="{{ site.baseurl }}/images/fablab/resin_printing/filtering leftover resin.MP4" type="video/mp4">
    </video>
10. Clean the tray with alcohol (wipes work pretty well). You can also cure the material and then peel it off but this is not really recommended I think.
    <div markdown="1" class="row-3">
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3099.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3101.JPEG)
    ![]({{ site.baseurl }}/images/fablab/resin_printing/IMG_3102.JPEG)
    </div>

## Sources
- <https://www.myminifactory.com/blog/beginners-guide-to-3d-printing-featuring-the-elegoo-mars-pro>