---
title: "Preform notes"
date: 2021-08-10T14:58:46+02:00
tags: ["3d modeling", "3d printing", "Stereolithography"]
toc: true
categories: ["blog", "fablab"]
layout: post
---

# Preform notes

## Stereolithography (SLA) vs Fused Deposit Modeling (FDM) printing
- Preform is the software for Formlab SLA printers
- Design process is different from designing for FDM printing
- Takes way longer than FDM but resolution is much better; there won't be much time difference for 1 vs 5 objects
- Software has a memory of where you've printed on the bed and changes the location each time as bed adhesion decreases
- Resin costs a lot, the tray costs a lot so it's not a great idea to place this printer in an open makerspace
- Can take STL as input (obviously)
- You can't really change much in the software except for moving/rotating/support etc.
- Magic wand: for the best tilting angle & support
- You don't want any parallel surfaces
- Support is cones that get smaller at the top, huge amount of material for bed adhesion and support, but don't try to save material and decrease the support because in the end you can throw out the whole print


## Links
- <https://formlabs.com/blog/fdm-vs-sla-compare-types-of-3d-printers/>