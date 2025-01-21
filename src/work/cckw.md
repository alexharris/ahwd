---
layout: work-full.njk
title: Chen Chen & Kai Williams
tags: 
    - work
    - everything
    - business
    - featured
image: /assets/images/cckw/image-1.jpg
dir: cckw
images:
    - image-1.jpg
    - image-2.jpg
    - image-3.jpg
    - image-4.jpg
    - image-5.jpg
    - image-6.jpg
tech: Wordpress, Shopify
techlist:
    - Wordpress
    - Shopify
    - PHP, JS, CSS
year: 2024
url: https://cckw.us
roles:
    - Web Development
    - E-commerce
    - Ongoing Maintenance    
partners:
    - <a href="https://riaroberts.net/">Ria Roberts</a>
summary: A wordpress site with a flexible content model and integrated Shopify e-commerce.
---

{% twocolumn %}
## Overview
Chen Chen & Kai Williams is a wordpress site with a flexible content model so that content can be easily display across a variety of site sections. Shopify is integrated into the site to allow for the store to be managed in Wordpress with products pulled in from a Shopify backend.

Read more about the process in this [in-depth case study](/blog/cckw).
<!-- split -->
{% endtwocolumn %}

<div class="bg-blue-500 p-4 md:p-16">
{% bigImage '/assets/images/cckw/image-2.jpg' 'A screenshot of the cckw homepage' '' %}
</div>

{% twocolumn %}
<!-- split -->
## Solution
This straight forward and functional website highlights the new product and provides a form to drive sales. The site, which is only a few pages, is built with simple, static HTML, with the form handled by Netlify's form functionality. This makes it dead simple to update and maintain for now, until the company grows into needing something more complex.
{% endtwocolumn %}

{% bigImage '/assets/images/cckw/image-3.jpg' 'a screenshot of some energy industry workers wearing picoyune portable monitors' '' %}

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
