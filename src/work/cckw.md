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
Chen Chen & Kai Williams is a New York design studio that wanted a new site to go along with the release of a line of furniture and lighting. They wanted a robust and modular CMS that was easy to reconfigure to incorporate new products and categories as they were released. They also wanted the ability to incorporate their existing Shopify e-commerce into the site.
<!-- split -->
{% endtwocolumn %}

<div class="bg-blue-500 dark:bg-green-900 p-4 md:p-16">
{% bigImage '/assets/images/cckw/image-2.jpg' 'A screenshot of the cckw homepage' '' %}
</div>

{% twocolumn %}
<!-- split -->
## Solution
Modern Wordpress with Advanced Custom Fields and custom post types provides the robustness and community of Wordpress with the flexibility and content modeling functionality of newer CMSes. Using this, we were able to provide a robust solution to their current content needs, and the flexibility to modify things as needed going forwarded. In addition, we built a custom shopping cart solution based on existing Shopify integration that provides easy and powerful e-commerce functionality.

Take an in-depth look at the decision making process that went into each step of this site build out in this [CCKW case study](/blog/cckw).
{% endtwocolumn %}

{% bigImage '/assets/images/cckw/image-3.jpg' 'The furniture section of the new CCKW site' '' %}

{% bigImage '/assets/images/cckw/image-5.jpg' 'The online shop of the new CCKW site' '' %}


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
