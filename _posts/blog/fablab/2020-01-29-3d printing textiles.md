---
title: "3d printing textiles"
date: 2020-01-29T11:10:23+02:00
tags: ["3d printing", "prusa", "textiles"]
categories: ["blog", "fablab", "textilelab"]
layout: post
---

# 3D printing textiles
Inspired by [Jack Forman's experiments](http://fab.cba.mit.edu/classes/863.19/CBA/people/jack/week-04.html) with spiral vase printing and extrusion multipliers, I wanted to develop my own 3d printed fabrics. I used flexible filament (Flexfill) and generic PLA on a Prusa MK2S (0.8mm nozzle).

<div markdown="1" class="row-3">
![]({{ site.baseurl }}/images/fablab/vase-sliced.png)
![]({{ site.baseurl }}/images/fablab/vase2-sliced.png)
![]({{ site.baseurl }}/images/fablab/vase4-sliced.png)
</div>

## Test 1
I printed [this model of a vase](https://www.thingiverse.com/thing:2237739). The model is quite thick so spiral vase interpreted this as 2 layers. I set the extrusion multiplier on 0.5 but that was too low. For the second test I set it to 1 and I changed the flow on the printer itself. This started with flow at 150, which I changed to 100 after the first 2 layers. Changing it to 75 seemed to be a bit too much, 80 seems to be the minimum to get a loose "woven" result.

![]({{ site.baseurl }}/images/fablab/vase1.gif)

![]({{ site.baseurl }}/images/fablab/vase0.jpg)

## Test 2
After that I used [this vase](https://www.thingiverse.com/thing:2906756). I used generic PLA and playing with the flow setting on the printer. I did set the extrusion multiplier to 1.2 because the filament didn't extrude properly for the first layer.

Z | Flow
--- | ---
Z0 | 95 (base)
Z3 | 70 (speed to 125)
Z11 | 40
Z44 | 25
Z65 | 35

![]({{ site.baseurl }}/images/fablab/vase1.jpg)

## Test 3
Third test using the same model but printing with Flexfill, extrusion multiplier 1 and increased speed on the printer (150%) (enlarged the model slightly).

Z | Flow 
--- | ---
Z0 | 95 (base)
Z8.1 | 75
Z13.6 | 65
Z24.7 | 55
Z37.6 | 150
Z40.9 | 65
Z55.8 | 250
Z59.1 | 60
Z80 | 400
Z82.8 | 200
Z84.4 | 50
Z90.5 | 70

![]({{ site.baseurl }}/images/fablab/vase3.jpg)

## Test 4

Printing [this model](https://www.thingiverse.com/thing:2666281) with Flexfill, extrusion multiplier 1 and increased speed (70mm/s in settings and increased to 145% on the printer).

Z | Flow 
--- | ---
Z0 | 100 (base)
Z3.6 | 90
Z8.8 | 80
Z16.8 | 70
Z20.4 | 75
Z25.6 | 80
Z40.8 | 105
Z52.4 | 125
Z56.8 | 100

![]({{ site.baseurl }}/images/fablab/vase4.jpg)

## Flattening the fabric
Since the 3d printed fabric tends to keep its shape when cut open, I experimented with a heat gun to flatten it, which worked quite okay. When the filament is too thin it tends to disappear quickly so be careful with that and don't apply too much heat.

![]({{ site.baseurl }}/images/fablab/flatten.jpg)

![]({{ site.baseurl }}/images/fablab/flatten2.jpg)

## Links
- <http://fab.cba.mit.edu/classes/863.19/CBA/people/jack/week-04.html>