---
title: "Working with a Printrbot 3d printer"
date: 2020-01-17T11:10:23+02:00
tags: ["3d printing", "printrbot"]
toc: true
categories: ["blog", "fablab"]
layout: post
---

# Printrbot Metal Simple
This printer doesn't have a build-in display like the Prusa and Ultimaker. Printing is done directly from the computer via USB cable. The recommended software for this is [Pronterface](https://www.pronterface.com/), an open source '3D printing host software suite which talks to your printer and handles the printing process'. However you can also print straight from Ultimaker Cura, which is what I did. I would recommend using Pronterface though, since Cura offers limited control over the printer. 

## Adhesion
THe first few tests failed because the print wouldn't adhere to the bed. Initially there was blue painter's tape on the printer but it was dirty so I replaced it with a new layer. This was cheaper tape that was less firm and sticky, so when the bed heated up it curled up a bit at the corners. 

The first try with blue paper tape (the printer went way too fast):

![]({{ site.baseurl }}/images/fablab/printrbot.gif)

The second try with a fresh layer normal (but cheap) painter's tape turned out even worse, with the filament not adhering at all and sticking to the nozzle:

![]({{ site.baseurl }}/images/fablab/printrbot2.jpg)

Glue stick on painter's tape looked promising at first but the print still didn't adhere consistently.

![]({{ site.baseurl }}/images/fablab/printrbot3.jpg)

Finally, using glue stick on painter's tape and lowering the speed (50%) for the first layer as well as adding a brim did the trick. I also decreased the flow, but I should not have done that as you can clearly see the separate layers.

![]({{ site.baseurl }}/images/fablab/printrbot4.jpg)

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/printrbot5.jpg)
![]({{ site.baseurl }}/images/fablab/printrbot6.jpg)
</div>


## Links
- <http://www.printrbottalk.com/wiki/index.php?title=Getting_Started_Guide>