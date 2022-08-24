---
title: "Tools, shortcuts and automation"
date: 2020-01-06T11:22:01+02:00
tags: ["tips"]
categories: ["blog", "other"]
layout: post
---

# Tools overview

- [Autohotkey](https://www.autohotkey.com/): open source tool to automate tasks on Windows. I used this to create a shortcut to pause and play audio (mostly for Spotify).

## Command line tools 

- [Saving all file names in a folder](https://dottech.org/158216/how-to-easily-copy-all-names-of-files-in-a-folder-in-windows-guide/): when you want to add a lot of pictures to html/markdown files, it can be a pain in the ass to have to manually add each image. With this, you can paste all of your pictures at once. Afterwards you can format them in one go in Visual Studio Code with multi line editing (you can also use [column-edit](https://stackoverflow.com/questions/50028649/multiline-column-copy-paste-in-vs-code#50029093) for this). Note: only works with cmd, not with Powershell.

![]({{ site.baseurl }}/images/misc/filelist.jpg)
![]({{ site.baseurl }}/images/misc/filelist2.jpg)

## Visual Studio Code
Using (and changing) keyboard shortcuts saves your life. I changed this (mostly here so I don't forget):

![]({{ site.baseurl }}/images/misc/vsc_keys.jpg)

## Image compression
- [Image Magick](https://imagemagick.org): free open source command line tool to resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.
> For Windows, installation via [chocolatey](https://chocolatey.org/packages/imagemagick.app) is easiest (run as administrator: `choco install imagemagick.app`). If it doesn't work (test this by running `magick logo: logo.gif`; this should create a GIF file of the logo in the folder you're in), you probably need `vcomp120.dll` (available [here](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)).

Small overview of common commands:

What it does | Command
--- | ---
adjust extension | magick convert img.jpg img.png
resize | magick convert img.png -resize 50% img.png
quality | magick convert img.png -quality 75% img.png
show information about image | magick identify img.jpg
convert, resize, adjust | magick convert -quality 75% -resize 60% img.jpg img.png
convert all images | magick mogrify -format png *.jpg

- Mogrify overwrites the original image file, whereas, magick writes to a different image file.
- Note to self: cd path-to-directory; magick mogrify -resize "600>" *.JPEG* (or any other image extension) is great