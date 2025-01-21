---
layout: work-full.njk
title: Picoyune
tags: 
    - work
    - business
    - environment
    - everything
    - featured
image: /assets/images/picoyune/image-1.jpg
dir: picoyune
images:
    - image-2.jpg
    - image-3.jpg
    - image-4.jpg
    - image-5.jpg
tech: Static, Netlify
techlist:
    - HTML
    - Tailwind CSS
    - Netlify
year: 2022
roles:
    - Web Development
    - Web Design
    - Ongoing Maintenance
url: https://picoyune.com
summary: A simple hand-crafted static site has helped to drive sales of Picoyune's next generation handheld mercury monitor.
---
{% twocolumn %}
## Overview
Picoyune is a chemical sensors company in Berkeley, CA that hired us to help go to market with their next generation handheld mercury monitor, the MA-1. 

They wanted a straight forward, no muss no fuss site that would let interested customers learn about the MA-1 and easily start the purchase process.
<!-- split -->
{% endtwocolumn %}

<div class="bg-blue-500 p-4 md:p-16">
{% bigImage '/assets/images/picoyune/image-2.jpg' 'A screenshot of the picoyune.com homepage' '' %}
</div>

{% twocolumn %}
<!-- split -->
## Solution
This straight forward and functional website highlights the new product and provides a form to drive sales. The site, which is only a few pages, is built with simple, static HTML, with the form handled by Netlify's form functionality. This makes it dead simple to update and maintain for now, until the company grows into needing something more complex.
{% endtwocolumn %}

{% bigImage '/assets/images/picoyune/image-5.jpg' 'a screenshot of some energy industry workers wearing picoyune portable monitors' '' %}

<div class="offerings-grid block mt-32 mb-16 relative max-md:border-0">
    <div class="border-r top-fade max-sm:hidden"></div>
    <div class="w-full border-r-0 md:border-r pl-4 p-2 text-2xl top-fade relative max-md:hidden">
        <div class="md:absolute left-4 bottom-2 instrument-serif">❋ Roles</div>      
    </div>
    <div class="w-full border-r-0 md:border-r pr-4 p-2 text-2xl top-fade relative max-md:hidden">
        <div class="md:absolute left-4 bottom-2 instrument-serif">❋ Technology</div>  
    </div>
    <div class="top-fade max-sm:hidden max-md:border-0"></div>
    <div class="border-t md:border-y border-r max-md:border-0"></div>
    <div class="border-t md:border-y border-r max-md:border-0">
        <div class="instrument-serif md:hidden">❋ Roles</div>   
        <ul class="pl-10 leading-snug">
            {% for role in roles %}<li>{{role}}</li>{% endfor %}   
        </ul>
    </div>
    <div class="md:border-y md:border-r max-md:border-0">
        <div class="instrument-serif md:hidden">❋ Technology</div>   
        <ul class="pl-10 leading-snug">
            {% for tech in techlist %}<li>{{tech}}</li>{% endfor %}     
        </ul>        
    </div>
    <div class="border-t md:border-y max-md:hidden"></div>
    <div class="border-r bottom-fade max-md:hidden"></div>
    <div class="border-r bottom-fade max-md:hidden"></div>
    <div class="border-r bottom-fade max-md:hidden"></div>
    <div class="bottom-fade max-sm:hidden"></div>        
</div>

