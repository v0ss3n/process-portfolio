---
title: "Experimental 3d printing"
date: 2021-08-07T14:58:46+02:00
tags: ["3d printing", "experimental", "wearables"]
toc: true
categories: ["blog", "misc", "fablab"]
layout: post
---

# Experimental 3d printing

## STL to Gcode to STL
I've been working on 3d printable wearables for a while, and I wanted to texturize them. Since I'm not the best 3d modeler out there (especially Blender; I still have to work through many tutorials) I was looking for simple tools to do this for me. The newest update for IdeaMaker has the magical functionality to texturize models with grayscale images. It's very easy to work with; the only drawback is that I personally find the IdeaMaker slicer garbage. I cannot seem to get a spiral vase to print like a spiral vase, there are so many unnecessary travels between layers and it messes up my print every time. Since I do really want to use the texturize option though, I started looking into ways of exporting the texturized model. This wasn't as easy as I had hoped since the texture is only applied to the model after slicing, and when you export the model it just exports the plain model without the texture (it works kind of like a displacement map). 

### IdeaMaker & Voxelize
So I started looking for ways to convert the gcode back to an STL that I could then slice in my preferred slicer (PrusaSlicer is best). Luckily [All3DP wrote an article](https://all3dp.com/2/g-code-to-stl-how-to-convert-g-code-back-to-stl/) about just this. I did have a different workflow that I'll summarize here (including all dead ends). 

![]({{ site.baseurl }}/images/misc/ideamaker.jpg)

1. Import model into IdeaMaker
2. Apply texture (in the middle of the toolbar)
3. Start slicing
4. Export gcode
5. Import gcode in Voxelizer (I didn't have any of the compatible printers so I just clicked some settings, I didn't need them anyway)
6. File > Voxelize (Following their own [tutorial](https://voxelizer.com/knowledge_base/articles/360002963734))
Now a voxel object should appear in the settings tab, however for all gcode files that I've tried it just doesn't work. No object appears, and looking at the gcode preview it looks pretty bad. Can't confirm whether this method actually works. Also the forums are pretty dead so I'm just gonna try something else.

### Applying texture with displacement maps (UV mapping)

1. Photoshop (spoiler alert: don't do UV mapping in Photoshop)
- I found a [great article on grabcad](https://grabcad.com/tutorials/adding-textures-to-3d-models-texture-bump-and-displacement-mapping-how-to-make-photo-realistic-models) that I used to finally learn how to actually texturize my 3d models, since trying to work around my lack of 3d modeling knowledge is not really the way to go. 

![](https://d2t1xqejof9utc.cloudfront.net/pictures/files/158443/original.png?1554386692)
![](https://d2t1xqejof9utc.cloudfront.net/pictures/files/158441/original.png?1554385972)
![](https://d2t1xqejof9utc.cloudfront.net/pictures/files/158445/original.png?1554387092)

- This tutorial is great; however I couldn't get high resolution results with this: <https://grabcad.com/tutorials/how-to-3d-print-full-color-fully-textured-displacement-mapped-parts-using-photoshop>

2. Blender
So with this tutorial I finally figured it out:

<div class="videowrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HmZ6TyHESMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

- Remeshing the Fusion generated STL first in a separate program since the saved mesh is pretty shit (very long triangles, terrible for UV mapping). It's also possible in Blender (as explained [here](https://artisticrender.com/remeshing-in-blender/) but my laptop does NOT like that). I'm using Instant Meshes for this.
- <https://docs.blender.org/manual/en/2.80/modeling/meshes/editing/uv/unwrapping/mapping_types.html>
- YOUR VIEWPOINT IS TAKEN INTO ACCOUNT WHEN MAPPING
- Make a vertex group if you only want to map a specific part and select that group in the Displace modifier

Workflow:
1. Remesh OBJ with Instant Meshes (I used around 100k as target vertex count)
2. Import OBJ into Blender
3. Add Displace modifier
4. New Texture
5. Set coordinates to UV
6. Go to texture properties and open the displacement map
7. Go to UV Editing tab and select the displacement map
8. In edit mode, go to the correct orthogonal view if needed, click 'face select' and press U for UV mapping options
9. Scale and position the projected map as needed (for me it's usually extremely stretched)
10. Add subdivision surface to get the needed detail and place it above the Displace modifier (it's even easier to do this before adding the Displace modifier but my laptop cannot really deal with that)

## Links
- <https://diy3dprinting.blogspot.com/2015/05/how-to-convert-g-code-back-into-stl.html>
- <https://grabcad.com/tutorials/adding-textures-to-3d-models-texture-bump-and-displacement-mapping-how-to-make-photo-realistic-models>
- Displacement mapping is not possible in Fusion360