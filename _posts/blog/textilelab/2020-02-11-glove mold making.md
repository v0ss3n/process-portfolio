---
title: "Glove mold making"
date: 2020-02-11T12:47:46+02:00
tags: ["lasercutting", "molding", "fusion360", "tutorial", "lasercutting"]
categories: ["blog", "fablab", "textilelab"]
layout: post
---

# Glove mold making
For the Fabricademy [textiles as scaffold assignment](https://v0ss3n.github.io/documentation/textilelab/fabricademy/2019/11/19/textiles-as-scaffold.html), I made a glove mold with the cnc for a right hand glove, but I also wanted to make a left hand glove. I wanted to use a different technique this time as I wasn't completely satisfied with how it turned out: since it was two parts that weren't exactly each other's halves, exactly aligning the gloves wasn't possible. This time I wanted to make a full 3D model. While milling the previous glove mold, I really liked what the mold looked like after the first run (see below):

![]({{ site.baseurl }}/images/fablab/glove.jpg)

This result can easily be achieved with the slicing and stacking method from the [digital bodies assignment](https://v0ss3n.github.io/documentation/textilelab/fabricademy/2019/10/01/digital-bodies.html), so I mirrored the glove model (without the base) in Fusion360 and exported the left glove model as stl. 

![]({{ site.baseurl }}/images/fablab/glovemold1.jpg)

## Slicing the model
After that I imported the stl in Slicer for Fusion360, specified the cardboard and model size and played around with the stacking angle. Then I exported the plans as dxf, moved around the shapes in Illustrator to save space and closed the polylines in Rhino with the _make2D command in the top view window. This shouldn't have been necessary though as usually the unite lines tool in the lasercut software does the trick. Another option is to export the file to pdf, import in Illustrator and then export the file as either dxf or as ai (CS2). 

![]({{ site.baseurl }}/images/fablab/glovemold2.jpg)

## Lasercutting and assembling
The settings I used for lasercutting the cardboard:

Settings | Power | Speed | Notes
--- | --- | --- | ---
Cut | 100 | 80 | This went really slow and kind of burned the edges
Cut | 100 | 120 | This went fine, it seemed to go 5 times as fast as speed 80 somehow (something weird with exporting maybe?)
Cut | 10 | 400 | For very light engraving
Cut | 20 | 400 | For light engraving

Conclusion: I should have increased the speed way earlier because it took forever to lasercut. Below the result of lasercutting:

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/glovemold3.jpg)
![]({{ site.baseurl }}/images/fablab/glovemold4.jpg)
</div>

![]({{ site.baseurl }}/images/fablab/glovemold5.jpg)

Assembling the model basically consists of glueing the layers in the correct order, which is indicated on all of the separate pieces. 

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/glovemold6.jpg)
![]({{ site.baseurl }}/images/fablab/glovemold7.jpg)
</div>

![]({{ site.baseurl }}/images/fablab/glove.gif)

## Coating
I used the same exterior primer and lacquer ([this one](https://www.gamma.nl/assortiment/gamma-titan-buitenlak-grondverf-750-ml-grijs/p/B108890) and [this one](https://www.gamma.nl/assortiment/gamma-titan-buitenlak-zijdeglans-750-ml-loodgrijs/p/B108844)) as I used for the foam mold for the right hand glove to make it (more) water resistant.

![]({{ site.baseurl }}/images/fablab/gloveleft1.jpg)

![]({{ site.baseurl }}/images/textilelab/glovemold.gif)
