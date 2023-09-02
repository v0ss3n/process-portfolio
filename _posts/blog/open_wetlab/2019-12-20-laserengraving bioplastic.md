---
title: "Laserengraving bioplastic"
date: 2019-12-20T11:10:23+02:00
tags: ["bioplastic", "lasercutting"]
toc: true
categories: ["blog", "wetlab", "fablab"]
layout: post
---

# Laserengraving bioplastic
For laserengraving, you need a bitmap image. I did some tests with different possible settings in Photoshop.

![laserengraving settings]({{ site.baseurl }}/images/wetlab/laserengrave-biofoam1.PNG)

Lasercut settings:
- Cut: speed 50, power 100
- Engrave: speed 500, power 25

Bitmap images settings:

1. Diffusion dither
2. Pattern dither
3. Custom pattern with diagonal stripes

<div markdown="1" class="row-3">
![laserengraving settings]({{ site.baseurl }}/images/wetlab/mom.bmp)
![laserengraving settings]({{ site.baseurl }}/images/wetlab/catmeme2.bmp)
![laserengraving settings]({{ site.baseurl }}/images/wetlab/catmeme.bmp)
</div>

## Process
Thin bioresin: because it was a thin material it was easier to get it to stay flat. The cut settings for this thickness were too powerful, that's why the edge on the right upper side is not completely straight.

<div markdown="1" class="row-2">
![laserengraving]({{ site.baseurl }}/images/wetlab/laserengrave-bioresin3.jpg)
![laserengraving result 1]({{ site.baseurl }}/images/wetlab/laserengrave-bioresin4.jpg)
</div>

Thick bioresin: this is the same material as before but thicker and with more irregularities. I needed to use some weights because it had significant height differences; it was flatter on the bottom of the material so I engraved the image upside down.

<div markdown="1" class="row-2">
![laserengraving]({{ site.baseurl }}/images/wetlab/laserengrave-bioresin1.jpg)
![laserengraving result 2]({{ site.baseurl }}/images/wetlab/laserengrave-bioresin2.jpg)
</div>


Biofoam: the material wasn't completely flat resulting in local color differences. The letters ('ah') were too small and should have stayed fully black instead of dithered.

<div markdown="1" class="row-2">
![laserengraving]({{ site.baseurl }}/images/wetlab/laserengrave-biofoam2.jpg)
![laserengraving result 3]({{ site.baseurl }}/images/wetlab/laserengrave-biofoam3.jpg)
</div>

## Tips
- Use weights and tape to flatten the material
- Try to find an average height of the material in case it's very irregular, and focus the laser at that point
- Exclude text from the dithering process