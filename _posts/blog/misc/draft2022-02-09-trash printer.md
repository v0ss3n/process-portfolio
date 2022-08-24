---
title: "Trash printer"
date: 2022-02-09T11:10:23+02:00
tags: ["recycling", "3d printing"]
categories: ["blog", "fablab", "misc"]
layout: post
---

## Trash printer
I want to make a printer/extruder/add-on for a printer to print with trash. Possible materials:

- failed prints
- paper pulp
- fabric shreds
- egg shells
- fruit and vegetable skins
- bioplastics (agar/gelatine/etc)

For most of these there are already existing (working) prototypes and even commercial or open source kits available so it's a great starting point. The final prints don't have to be perfectly smooth or consistent, my prints are more on the artistic/experimental side and I like irregularities in the filament. I'll be using my largest nozzle (0.8mm) and use an Ender 3 as a starting point to modify. 

There's multiple ways to approach this project like:
- Shred materials into pellets > turn into filament
    - <https://felfil.com/product-category/filament-extruder/?v=5ea34fa833a1>
- Shred materials into pellets > direct extrusion from pellets 
    - <https://hackaday.com/2019/07/08/no-filament-needed-in-this-direct-extrusion-3d-printer/>
- Mix materials > direct extrusion (like paper pulp <http://www.beerholthuis.com/portfolio/paper-pulp-printer/>)
- Mix pellets with biomaterial (<https://www.youtube.com/watch?v=zTu9zhU3Xck>)

- I'm starting with building a DIY filament extruder following existing tutorials with the intention of adding waste material as additives
- At the same time I'm also looking into biomaterial composites with (shredded) fibers, yarn, paper waste and organic waste, testing them out in a low fidelity way with syringes for baking (with the added fun of different extrusion options for the shape of the 'filament')

Other things I want:
- Live modification of gcode: have a sliced model (spiral vase) and be able to steer X and Y relatively > could also be a formula to change the gcode beforehand since that would be less time consuming and could use gcode analysis to see the result of the glitched model 
- Polar 3d printer: 3d printer with rotating base like a potter's wheel > only Z and X axis traveling (<https://3dwithus.com/sculpto-pro2-review-polar-3d-printing-rotating-build-platform>)

## Filament extrusion system
The following video by Stefen from CNC Kitchen is a great starting point. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/vqWwUx8l_Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

1. To recycle failed prints the parts have to be shredded first. This can be done with a modified paper shredder and/or with an old blender. 
2. Everything has to be 5mm or less so print a sieve with 5mm wide gaps 
3. Dry scraps in food dehydrator at 65 degrees Celsius overnight (12h)
4. Add to extruder. Stefan has the one from Filastruder, I'm gonna follow [this](https://www.instructables.com/Build-your-own-3d-printing-filament-factory-Filame/) instructable to make my own.

### Part list
[Part list sheet here](https://docs.google.com/spreadsheets/d/1evUu-KJix08Q3Fw6RZKEzsngX7D_MVkiGCMUfk6E4gY/edit?usp=sharing)


## Research
- <https://hackaday.io/project/166064-trash-printer-recycled-plastic-3d-print-head>
- <https://felfil.com/product-category/filament-extruder/?v=5ea34fa833a1>
- <https://hackaday.com/2019/07/08/no-filament-needed-in-this-direct-extrusion-3d-printer/>
- <https://pick3dprinter.com/ceramic-3d-printer/>
- <http://www.beerholthuis.com/portfolio/paper-pulp-printer/>
- <https://3dprint.com/56759/diy-filastruder-instructables/>
- <https://www.instructables.com/Build-your-own-3d-printing-filament-factory-Filame/>
- <https://www.youtube.com/watch?v=vqWwUx8l_Io>

Material
- <https://myecopanda.com/biodegradable-plastic-from-banana-peels/>
- <https://www.twopeasandtheirpod.com/homemade-fruit-leather/?utm_campaign=yummly&utm_medium=yummly&utm_source=yummly>
- <https://www.dezeen.com/2022/01/12/peelsphere-youyang-song-leather-alternative-biomaterial-fruit-waste/#>
- <https://www.youtube.com/watch?v=rcieZYwyEiA> > doesn't say what kind of additives are added to mango leather; the dehydrated mango sheets are post-processed by a leather finishing company (a resin coating, applied multiple times and then heated and pressed to combine the layers of coating, then embossed to look like leather)
- <https://docs.google.com/presentation/d/1qTB6AOkPAJf5dy3AoHoL-G6h9LFB6Tie/edit#slide=id.p1>
- <https://docs.google.com/presentation/d/1sy33j7d3Tn5-c8tsYDqNQkYPJCjN2ezH/edit#slide=id.p62> coffee leather bag recipe