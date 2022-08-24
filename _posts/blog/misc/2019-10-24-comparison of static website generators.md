---
title: "Comparison of static website generators"
date: 2019-10-24T11:10:23+02:00
tags: ["research"]
categories: ["blog", "other"]
layout: post
---
# Jekyll vs Hugo vs MkDocs 
![]({{ site.baseurl }}/images/misc/staticsitegenerator.jpg)

## Jekyll
- <https://jekyllrb.com/>
- The static site generator that I ended up using. This documentation site is generated with Jekyll using [this theme](https://github.com/b2a3e8/jekyll-theme-console). I had to rename all of my posts, because Jekyll naming conventions indicate that every post has to start with the date. I also had to change some of the way I linked to images because of the baseurl that I used (/documentation) and apparently Jekyll did not like that. It also took me a while before I figured out how to create tags and categories pages, since Hugo generates these automatically. With Jekyll you have to be more specific with what you want to be displayed on a page, but this gives a lot of freedom once you figured out how to use it. I could shape the website exactly how I wanted using a minimal theme and changing the SCSS and layouts slightly. You can also embed HTML into your markdown files (Kramdown processes these for you) and style it using SCSS.

## Hugo
- <https://gohugo.io/>
- This is what I started with, fairly easy to use and very fast, but I spend way too much time trying to find a theme that I liked and that I could also easily adapt to my preferences. I did not want to learn Go or to create a whole new theme, I only wanted to change existing themes. None of the themes had the structure and aesthetic that I wanted for my site so I decided to try MkDocs.

## MkDocs
- <https://www.mkdocs.org/>
- very basic, not many themes available but pretty straightforward. I got it to work quite fast with my existing Hugo project but there are barely any themes available. I used it for about a week because it was clear to use: the folder structure I had was immediately visible in the side menu. After that week I decided this would not work as it was just not aesthetically pleasing and that is quite important to me as a designer, so I switched to Jekyll.