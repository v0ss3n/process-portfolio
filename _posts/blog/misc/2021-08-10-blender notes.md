---
title: "Blender notes"
date: 2021-08-10T14:58:46+02:00
tags: ["3d modeling", "blender"]
categories: ["blog", "misc", "fablab"]
layout: post
---

# Blender notes
- Middle mouse button: orbit
- Shift + middle mouse button: pan
- Scroll: zoom
- 4 windows visible in standard view
- Use numbers (i.e. 01) in the file name while saving and Blender will recognize that with the plus and minus button after that 
- Emulate numpad to control view with the numbers on a laptop without a numpad

![]({{ site.baseurl }}/images/misc/blender/1.jpg)

- G: grab
- R: rotate
- S: scale
- Blender knows where your mouse is (in what window; so make sure you're in the right window)
- Tab to switch between object and edit mode
- H to hide (first select), alt + H to show again
- F3 to search commands; for instance if you mess up the mesh select all vertices & look for 'merge by distance'
- When starting with a plane and adding vertices, when you select 3 or more vertices and press f you turn it into a face
- O: proportional editing, select what you want and click O & you get a circle of influence (change with scroll wheel)

## Modeling a cow workshop
- Start with the image of the front, drag and drop on the correct view, so first press 1 to enter 

![]({{ site.baseurl }}/images/misc/blender/2.jpg)

- Same for right side image (3 for right side)

![]({{ site.baseurl }}/images/misc/blender/3.jpg)

- Begin with rough shapes, then subdivide surfaces and add more and more details. We start with a cube for the body.

![]({{ site.baseurl }}/images/misc/blender/4.jpg)

- Press Z then select the view you want

![]({{ site.baseurl }}/images/misc/blender/5.jpg)

- Edit mode, press 3 then ctrl+r and hover over the edges of the body cube and divide the body in 3 parts. Then same for the front.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/misc/blender/6.jpg)
![]({{ site.baseurl }}/images/misc/blender/7.jpg)
</div>

Select modes: vertex, edge, face.
<div markdown="1" class="row-3">
![]({{ site.baseurl }}/images/misc/blender/8.jpg)
</div>

Select four faces and then press E (extrude) to extrude the legs; continue with head.

![]({{ site.baseurl }}/images/misc/blender/9.jpg)

Then go to object mode, hide the images and add the modifier 'Subdivision Surface'.

![]({{ site.baseurl }}/images/misc/blender/10.jpg)

This is with 3 levels of subdivision:

![]({{ site.baseurl }}/images/misc/blender/10.jpg)

Then right click and shade smooth:

![]({{ site.baseurl }}/images/misc/blender/11.jpg)

Now, we're gonna go back to edit mode and add more realism to the shape.

![]({{ site.baseurl }}/images/misc/blender/12.jpg)

Alt + click on an edge for loop select. Then G > Z (to only move up and down) and move your mouse to move the looped edge (edge loops are very important! Especially in the face, google that). To put the edges on the same height: edit mode, 3, b (box select), select vertices (vertex mode), G > Z > 0 > enter. This is a scale in the Z direction of zero. 

![]({{ site.baseurl }}/images/misc/blender/13.jpg)

Box select + G + middle mouse button: snaps to direction you drag it in. Make the face wider with G > X.

![]({{ site.baseurl }}/images/misc/blender/14.jpg)

Ctrl + R and double click: right in the middle. So with these tools you can already get pretty close to the actual shape of the cow.
Now, we're gonna delete half of the cow for symmetrical editing. Then we're adding a mirror modifier. 

![]({{ site.baseurl }}/images/misc/blender/15.jpg)
![]({{ site.baseurl }}/images/misc/blender/16.jpg)

K: knife, click where you wanna cut, hit enter when you're done.

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/misc/blender/17.jpg)
</div>

Other select options:
C + scroll: make selection brush smaller/larger
Ctrl + right click and drag for lasso

Orbit options:
Select vertex, hit the numpad . (I don't have a numpad so I changed my shortcut to select vertex > ;) to zoom to selected frame.

Extrude/rotate/scale exact amount: E/R/S > type number

Remove unwanted faces:

<div markdown="1" class="row-2">
![]({{ site.baseurl }}/images/misc/blender/19.jpg)
![]({{ site.baseurl }}/images/misc/blender/20.jpg)
</div>

Multiresolution: great for sculpting
![]({{ site.baseurl }}/images/misc/blender/18.jpg)

Sculpt: click and drag, remove: ctrl + click and drag. Smooth brush is a great one.

## Extruding SVGs
1. Import SVG
2. Select all > CTRL + J (join) so separate curve objects become one
3. Scale if necessary
4. Convert to mesh
5. Go to edit mode (tab) > modifiers and select solidify, then apply
6. Then add remesh modifier, I used the following settings:

![]({{ site.baseurl }}/images/misc/blender/blender_remesh.jpg)


## Links
- <http://feadi.de/>: Blender tutorial section
- <https://www.youtube.com/watch?v=7ZDwMzjVBi0>