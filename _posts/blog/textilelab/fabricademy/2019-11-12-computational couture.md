---
title: "Fabricademy: computational couture (grasshopper)"
date: 2019-11-12T14:53:46+02:00
tags: ["lecture", "tutorial", "Grasshopper"]
categories: ["blog", "textilelab", "fabricademy"]
layout: post
---

# Computational Couture
_Aldo Sollazzo_

In this lecture participants will explore computational design methods towards a new reinterpretation of cloths, garments and accessories for fashion design, inspired by a new digital design methodology.

## Rhino 6
If you've never worked with Rhinoceros before (like me) and you dive straight into Grasshopper it's a bit much, so familiarize yourself with the Rhino interface first. Rhino is a command-driven program; the toolbars contain the graphical icons for the commands. [The documentation of Rhino is a great place to start](https://docs.mcneel.com/rhino/6/usersguide/en-us/index.htm).

>NURBS (non-uniform rational B‑splines) are mathematical representations that can accurately model any shape from a simple 2‑D line, circle, arc, or box to the most complex 3‑D free‑form organic surface or solid. Because of their flexibility and accuracy, NURBS models can be used in any process from illustration and animation to manufacturing.

>NURBS geometry is an industry standard for designers who work in 3‑D where forms are free and flowing; where both form and function is important. Rhino is used in marine, aerospace, and automobile interior and exterior design. Makers of household and office appliances, furniture, medical and sports equipment, footwear, and jewelry use Rhino to create free-form shapes.

>NURBS modeling is also widely used by professional animators and graphic artists. The advantage of using NURBS over using polygon modelers is that NURBS surfaces have no facets. The models can be rendered at any resolution. A mesh can be created from the model at any resolution.

## Grasshopper
First: why use grasshopper? What makes parametric design so useful? The video on the left explains this; the video on the right is a good tutorial to start with.

<div class="row-2--video">
    <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RMF9gSSTOts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y66bSN4QFUE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

Download all of the plugin linked to in the second video (in the description). If you don't see them in the grasshopper tab menu, they probably have to be unblocked; to do this for all files at once in the libraries folder you have to open powershell there and use the command: 

```dir -Recurse | Unblock-File```

<div markdown="1" class="row-2">
![unblock]({{ site.baseurl }}/images/fabricademy/grasshopper/unblock.png)
![unblock]({{ site.baseurl }}/images/fabricademy/grasshopper/unblock2.png)
</div>

Brickbox is used to manage Grasshopper snippets, so you can save combinations of blocks to import later in other files. When saving a snippet make sure to double click 'add new brick', check the checkbox and click done (I first thought it didn't work properly but the size of the dialog window is not right).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vgj-j4mZafY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Rightclicking input/output:
- Reverse: reverses order of points > changes direction. You can also use the Reverse List tool

![]({{ site.baseurl }}/images/fabricademy/grasshopper/reverse.png)

- Simplify: simplifies the groups/group names. You can also use the Simplify Tree tool
- Flatten: all the curves go into one group (so instead of polyline curve group 1, 2, 3 you get one group with polyline 1, 2, 3). You can also use the Flatten Tree tool
- Graft: "Graft" and  "Flatten" changes the data structure inside a parameter. Sometimes it is necessary to modify the data structure because the default layout does not result in the desired operations. Imagine you divide 5 closed curves into 10 segments each. The result of this operation is a data structure of 5 lists with 10 items (points) each. If you were to Flatten this structure, you'd end up with a single list containing 50 items. If you were to Graft this structure, you'd end up with 50 lists of one item each. [source](https://www.grasshopper3d.com/notes/index/show?noteKey=What_does_it_mean_to_graft_or_flatten%3F)

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-CCGnGyQK3RA%2FVvdVHvWTf_I%2FAAAAAAAAEGY%2F-_ogYBD4IlcJZ5HC4WVCQpuLANUWtyrRg%2Fs1600%2FTreeExamples.jpg&f=1&nofb=1)

- Expression: for example to invert X

![]({{ site.baseurl }}/images/fabricademy/grasshopper/expressionchange.png)

## Parametric patterns
Using Grasshopper to generate parametric patterns (great for fashion prints and 3d printed fabrics) is magical and the tutorial below is really helpful and beginner friendly.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8aVYz3hZers" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![unblock]({{ site.baseurl }}/images/fabricademy/grasshopper/patternmaking.png)

![unblock]({{ site.baseurl }}/images/fabricademy/grasshopper/grasshopperprint.png)

The final print file (both as Grasshopper file and as .STL) can be found at the bottom of this post. 

## Truchet tiles 
Truchet tiles are great for seemingly organic geometric pattern design.

<div markdown="1" class="row-2">
![](https://upload.wikimedia.org/wikipedia/commons/4/41/Truchet_labyrinth.png)
![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Truchet_base_tiling.svg/800px-Truchet_base_tiling.svg.png)
</div>

In information visualization and graphic design, Truchet tiles are square tiles decorated with patterns that are not rotationally symmetric. When placed in a square tiling of the plane, they can form varied patterns, and the orientation of each tile can be used to visualize information associated with the tile's position within the tiling. [via Wikipedia](https://en.wikipedia.org/wiki/Truchet_tiles)

<iframe width="560" height="315" src="https://www.youtube.com/embed/DIc7a2mectY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Notes
- Rhino records every command you use in the command history window
- Press enter or space and click in the viewport to repeat a command
- Alt + drag to duplicate selection
- Right click + drag to pan
- Use the bottom checkboxes to easily snap to points on model and grid (especially in combination with grid snap/ortho/planar/osnap)
- Properties command tells you more about the state of the object
- [Documentation on Objects](https://docs.mcneel.com/rhino/6/usersguide/en-us/index.htm#html/ch-02_rhinoobjects.htm%3FTocPath%3D_____2)
- Double click Grasshopper canvas to search for keywords
- You can send drawings between Grasshopper and Rhino:

![send drawings]({{ site.baseurl }}/images/fabricademy/grasshopper/senddrawings.png)

- You have to use Bake if you want to change your virtual drawing into something to work with in Rhino. You can do this with Panel Frame or with Weaverbird.

![]({{ site.baseurl }}/images/fabricademy/grasshopper/bakepanelframe.png)

![]({{ site.baseurl }}/images/fabricademy/grasshopper/bakeweaverbird.png)

- Search // to get a panel with information on your block
- Hold shift and drag to connect multiple sliders (or other inputs) to one object
- Right click and drag to move around Grasshopper canvas
- Reparameterize is very useful, this transforms ranges to 0-1 (for example on curves, surfaces etc., check panel):

![]({{ site.baseurl }}/images/fabricademy/grasshopper/reparameterize.png)

- Curved surface division: isotrim; flat surface division: quad/diamond panels

![]({{ site.baseurl }}/images/fabricademy/grasshopper/isotrim.png)

- A mesh has 3 or 4 edges!!! Ctrl + m to preview mesh; use Simple Mesh (Weaverbird) for Brep to Mesh
- Use Explode to turn surfaces into curves/points
- You can refer a Curve/Surface/etc to something on your Rhino canvas with extract parameter

## Links
<https://en.wikipedia.org/wiki/Gallery_of_curves>

## Files
- <a href="{{ site.baseurl }}/files/grasshopperprint.stl" download="{{ site.baseurl }}/files/grasshopperprint.stl">grasshopperprint.stl</a>
- <a href="{{ site.baseurl }}/files/patternmaking.gh" download="{{ site.baseurl }}/files/patternmaking.gh">patternmaking.gh</a>
<!-- - <a href="{{ site.baseurl }}/files/truchet.gh" download="{{ site.baseurl }}/files/truchet.gh">truchet.gh</a> -->