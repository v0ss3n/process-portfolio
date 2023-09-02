---
title: "Making a model of the Waag building"
date: 2021-05-11T11:10:23+02:00
tags: ["lasercutting", "3d modeling"]
toc: true
categories: ["blog", "fablab"]
layout: post
---

# Making a model of the Waag building

Waag has been selected by the Dutch ministry for Education, culture and science as the [Future Lab design & technology](https://waag.org/en/article/waag-future-lab-design-and-technology) starting January 2021. This calls for a rethinking of the function and position of the Waag organisation and the Waag building in Amsterdam as a public space. Currently, the fablab, textile lab and wetlab are mostly hidden from view. The only way in and out is via a door hidden in plain sight in one of the towers on the side. Waag should be more visible and accessible to the people of Amsterdam; this model's purpose is to visualize our ideas.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/final1.gif)
![]({{ site.baseurl }}/images/fablab/waag_model/final2.gif)
</div>

Files can be downloaded below. Exploded view of the final model including roof:

![]({{ site.baseurl }}/images/fablab/waag_model/exploded_view.gif)

## Process

- Tracing floor plans

I started out with tracing the floor plans in Illustrator, since then I could easily trace the scanned images. Then I exported the vectors as DXF and imported them in Fusion360. 

![]({{ site.baseurl }}/images/fablab/waag_model/tracing_walls.jpg)

Halfway through working like this I realized that it probably would have been easier to have started in Fusion right away, since we decided to simplify the plans where we could. working with the exported Illustrator file turned into a hot mess of seemingly overlapping lines that ended up being 0,01mm apart, 'perpendicular' corners that were actually 89,97 degrees etc. For the physical model all of these small differences didn't really matter as they would not be visible, but it wasn't a great workflow.

- Lasercutting first floor in cardboard

I first miscalculated and thought it was a scale 1:500 but that would make the Waag very large. It's supposed to be 1:50. We liked the size so we continued with scale in mind. 

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_6863.JPEG)

- Modeling the floors in Fusion360

Ground floor and entresol:
<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/ground_floor.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/entresol.jpg)
</div>

First and second floor:

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/first_floor.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/second_floor.jpg)
</div>

Full model: 

![]({{ site.baseurl }}/images/fablab/waag_model/full_waag.jpg)

Final floors (can be downloaded below):

![]({{ site.baseurl }}/images/fablab/waag_model/floors.jpg)

Before deciding on lasercutting the floors and keeping them as open as possible, I tried out different Slicer options with a previous version of the ground floor.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/fusion1.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/slicer1.jpg)
</div>

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/slicer2.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/slicer3.jpg)
</div>

- Lasercutting the floors in acrylic

Lightburn has the option to delete duplicate lines and to automatically connect open vectors, which is an amazing feature that I think all vector based programs should have (I know Rhino has it, but I mainly use Illustrator which doesn't have it). Lightburn also has lots of import and export options, that you can use to quickly import a file with open vectors and double/triple lines, let Lightburn do it's magic, and then export to your preferred format. When Lightburn doesn't know how to close some shapes, you can also use the Edit Nodes tool to figure out what the issue is. Usually it has to do with vectors overlapping in a way that Lightburn doesn't recognize. Shapes have to be closed if you want to use fill to engrave them. Below the ground floor preview. 

![]({{ site.baseurl }}/images/fablab/waag_model/ground_floor-preview.png)

A tip when lasercutting narrow strips like this is to remove the top layer of protective plastic right after the engraving has finished, to save yourself some time on removing all of the individual pieces of plastic once the outline of the fill has been cut.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_6901.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_6902.JPEG)
</div>

To create the walls, I used the engrave function (fill). I increased the distance between every line to 1/10 of an inch and changed the angle to 45 degrees. Below the first and second floor placement in Lightburn (I cut the first floor twice since I ended up making a mistake that just annoyed me too much). On the right the preview of the second floor. 

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_6934.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7014.JPEG)
</div>

To determine the outward kerf offset for the leg slots I made a test sheet like this. However setting the kerf offset actually only moved the offset of the final line (you can see this clearly in the preview image but I didn't check that beforehand), and not of the entire fill. Instead I made a few more engraved circles, increased the diameter a little each time and found an extra 0,75mm to work best. 

![]({{ site.baseurl }}/images/fablab/waag_model/kerf_leg.jpg)

- Lasercutting the ceiling and entresol legs

To cut the ceiling legs, I first made a 'mold' to hold the acrylic cilinder in place. Then I measured the exact length I needed them to be and cut that area multiple times until it went all the way through. I secured the cilinders with some tape, and wrapped some clear tape around the area to be cut to minimize the amount of smoke interfering with a clean cut. This ended up not making much of a difference, with or without tape the cuts were pretty clean. The thicker the leg, the more uneven the cut turns out. This is because you can only focus the laser in one spot. You can see lasercut lines and a bit of irregularity below. You can sand it or leave it; here I left it since it was at the bottom of the leg, which fits in the leg slot so you don't see it.

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8575.jpeg)

- Gluing the floors with acetone

Acetone is a very strong solvent that can be used to glue acrylic to acrylic. Steps taken:

1. Clean pieces to be glued together (can be done with acetone as well)
2. Place pieces how you want them to be connected
3. Use a syringe to pour the liquid over the area to be bonded. You should see the acetone flowing between the two parts
4. Make sure to pour enough, and don't move the parts too much afterwards; acetone evaporates quickly
5. Leave it alone for about a day

In the steps specified [here](https://www.technogumbo.com/2011/01/How-to-Glue-or-Bond-Acrylic-Using-Acetone/) it's mentioned that it's easiest to use the two most coarse edges if possible, since that would allow more liquid to fill the area to be bonded. We actually found that it worked way better if the surfaces were as flat as possible, so there was as much connection between the surfaces as possible. You can usually clean acetone residue with alcohol or more acetone. However, if you pour too much acetone (which happened a couple of times), it will destroy the top layer of the material around the bonded area, and you can't really fix that.  

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7028.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7029.JPEG)
</div>


<div class="videowrapper"><div markdown="1" class="row-2--video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/M4_rKfhEJYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="videowrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bq_cvAIlsqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></div>


## Intermediate results
The transparent base allows for drawings and notes underneath to be part of the story, visualizing the ideas for the future lab.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7017.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7020.JPEG)
</div>

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7018.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7019.JPEG)
</div>

- Ground floor inner walls

On the ground floor we wanted We tried bending the walls with pre-engraved cuts, which seemed promising at first. I determined the length and the position to bend in Illustrator using the ground floor plan. The model had to be flipped halfway through lasercutting to cut the corners that had to bend in the other direction.

![]({{ site.baseurl }}/images/fablab/waag_model/bending_walls2.jpg)

However it was pretty hard to get all the different corners to align perfectly and the bent parts ended up breaking easily (also partially because the cuts were deeper than the cuts for the succesful tryouts). We tried fixing it with acetone but the connections were too fragile.

<div class="videowrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rEr_9hNXDic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

I ended up breaking all of the walls that I wanted to bend, so I could try out whether it was possible to glue them together with acetone and a narrow base. This worked out just fine so we went with this option. You can use the LBRN  walls file at the bottom and cut all the way through the acrylic (higher power/lower speed) so you end up with separate walls, place them in the narrow base, tape the whole construction to add some stability and pour acetone between the walls and where the walls and base touch.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/bending_walls1.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/narrow_base.jpg)
</div>

Walls already serving their purpose:

![]({{ site.baseurl }}/images/fablab/waag_model/walls.jpeg)

- Making the square in Illustrator

To place the Waag within it's context on the Nieuwmarkt, we made a scaled square for the model to be placed on. First I investigated the brick pattern and the size and approximate placement of the large 'stripes' on the square:

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7382.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7385.JPEG)
</div>

I then made brushes and patterns in Illustrator of these bricks to cover the square. Of course Illustrator doesn't actually cut out clipping masks, so I had to manually cut the shapes in Lightburn (again the one program that seems to have all of the tools I'm missing in Illustrator). I've added the final LBRN file for the square below.

![]({{ site.baseurl }}/images/fablab/waag_model/plein.jpg)

![]({{ site.baseurl }}/images/fablab/waag_model/plein-bricks.jpg)

- Lasercutting the square

This took more than four hours, but it turned out pretty nice. You can see the difference in focus of the laser on one side of the square, since the laser bed isn't perfectly level anymore. After that I used beeswax to finish the wood.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/ezgif-2-972bb8679c4e.gif)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7386.JPEG)
</div>

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7393.JPEG)

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7396.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7399.JPEG)
</div>

The model on the square: 

<div class="videowrapper">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/oB2r9c6gtxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


- Milling the underlayer for the square

This was pretty straightforward; I made a design in Illustrator (file below) that was slightly bigger than the square and added handles. Then I milled it on the Shopbot out of 18mm thick plywood and after that I sanded the wood.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7696.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7698.JPEG)
</div>

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7700.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7701.JPEG)
</div>

<video width="480" height="360" controls muted>
  <source src="{{ site.baseurl }}/images/fablab/waag_model/IMG_7703.MP4" type="video/mp4"></video>

- Modeling the roof in Fusion360

To model the roof, I went back to the official plans of the Waag building to figure out angles and heights. after that I created a new file for the roof since I wanted to keep the parts of the roof separate in the original file. 

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/roof.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/roof2.jpg)
</div>

- Slicing the roof in Slicer for Fusion360

I tried two techniques: interlocked slices and radial slices.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/slicedroof1.jpg)
![]({{ site.baseurl }}/images/fablab/waag_model/slicedroof2.jpg)
</div>

Depending on the dimensions of the material used, I changed the lay-out of the slices. 

![]({{ site.baseurl }}/images/fablab/waag_model/radial_roof_laser1.jpg)

- Lasercutting the roof iterations

First testing in cardboard (3mm thick):
<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7411.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7412.JPEG)
</div>

We decided to continue with the radial sliced model. In next iterations, we got rid of the bottom of the vertical slices, nearly halved the amount of vertical slices necessary and evened out the top of the theatrum.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7604.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7699.JPEG)
</div>

The 3mm acrylic I used ended up being very irregular, with variations in thickness between 2.9 and 4.1mm, which made proper pressfit impossible. I ended up giving all of the pieces an inward offset of 0.2mm, as an estimated average of thickness (so 3.4mm total slot thickness). For most parts this ended up working; a few pieces I had to redo multiple times but in the end it was possible to assemble the roof with just a few critical points where the acrylic cracked.

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_7704.JPEG)

<video width="480" height="360" controls muted>
  <source src="{{ site.baseurl }}/images/fablab/waag_model/IMG_7705.MP4" type="video/mp4"></video>

This was supposed to be the final iteration, but we didn't like the blue hue of this specific acrylic in the end. This was the only 3mm see-through acrylic sheet that we had enough of to make the roof, so we hoped it was going to look nice. It looked good by itself but placed on top of the Waag model it just looked strange (reminded me ), so we decided to order new transparent 3mm sheets. This also gave me the opportunity to improve the model even more. I removed 6 of the vertical slices to make the model even more open and accessible. 

<div markdown="1" class="row-3">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8402.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8403.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8404.JPEG)
</div>

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8449.JPEG)
![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8450.JPEG)
</div>

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8581.JPEG)

## Final model

![]({{ site.baseurl }}/images/fablab/waag_model/IMG_8582.JPEG)

<div class="videowrapper">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y0g3EhM78vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Files

  - <a href="{{ site.baseurl }}/images/fablab/waag_model/square_underlayer.dxf" download="square_underlayer.dxf">Square underlayer DXF</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/floors.pdf" download="floors.pdf">Floors 1:100 scale PDF</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/entresol.pdf" download="entresol.pdf">Entresol 1:100 scale PDF</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/waag_model.step" download="waag_model.step">Waag model STEP</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/waag_model.f3d" download="waag_model.f3d">Waag model F3D</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/waag_model.obj" download="waag_model.obj">Waag model OBJ</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/roof.obj" download="roof.obj">Model of roof only OBJ</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/bending_walls.lbrn" download="bending_walls.lbrn">Bending walls LBRN</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/narrow_base.dxf" download="narrow_base.dxf">Narrow base DXF</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/square.lbrn" download="square.lbrn">Square LBRN</a>
  - <a href="{{ site.baseurl }}/images/fablab/waag_model/all_floors.lbrn" download="ground_floor.lbrn">Ground floor scale 1:50 LBRN</a>