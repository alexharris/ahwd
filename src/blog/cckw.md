---
layout: post.njk
title: CCKW Post
image: /assets/images/cckw/image-1.jpg
tags:
    - post
---

# The process and decison-making that went into making cckw.us

{% bigImage '/assets/images/cckw/figma-grid.jpg' 'alt text' 'caption' %}

In early 2024, I was hired to build a new site for New York design studio Chen Chen and Kai Williams. They were launching a new line of furniture and lighting and wanted a new site to go along with the launch. Their current site was old and slightly convoluted in how it listed and organized the various categories of CCKW’s work. Designer Ria Roberts had a site design pretty much finished and a clear vision of how the site would function.

The initial pitch had a few general requirements:

> A primary consideration is that I’d like to have a pretty robust and modular CMS.

> The product and category ranges will be expanding in the near future and over time, so the idea is to create a system that allows them to create or modify pages as needed.

> The site also has to solve for a few different business verticals (direct sales, commissions, small objects etc.) that are potentially confusing—as they are on the current site—so it's key to have flexibility based on the needs of each.

Wordpress seems like it might be a fine fit for this: it is robust and easy to create and modify pages. Wordpress, however, has traditionally been a little rigid when it comes to content, not at all flexible as the brief requests. This is due to its origin as a blogging tool, everything is a “post” and posts only had certain additional fields associated with them. These days, though, it is much more flexible with custom post types and the establishment of Advanced Custom Fields as an indispensable plugin for adding fields to those post types.

The final requirement was Shopify integration. While it is possible to directly integrate shopify via an API, it is easier for more straightforward tasks to use a plugin like [ShopWP](https://wordpress.org/plugins/wpshopify/) to more easily integrate Shopify functionality in Wordpress via their simple API.

## Hosting

I have recently been a big fan of hosting Wordpress sites with WPEngine. In my mind it fits right in the goldilocks zone in terms of price, support, developer functionality, etc. Easy.

## The Front End

{% bigImage "/assets/images/cckw/image-7.jpg", "Screenshot of McMaster Carr homepage", "The McMaster Carr homepage" %}

Visually, the new design was fairly simple, inspired by both the CCKW wiki and the holy grail of functional websites, McMaster Carr. For some sites with more “UI elements” I like to use Tailwind, which makes it easier to build a wide variety of components, but for a frontend where most of the complexity is just structural, I find that simple SCSS works well, especially with the advent of “new” css features like grids, flexbox, container queries, etc.


## A Flexible Content Model

{% bigImage "/assets/images/cckw/content-fields.jpg", "Wordpress Admin screenshot", "The content fields on each object" %}

The initial designs were pretty clear about the what the content model of the site would be: four main sections (Furniture, Lighting, Index, Shop) which contain variations of the same single object type. If I were to directly map this model into the Wordpress backend it might consist of four custom post types, one for each section, and include only the fields that are relevant to that post type in the editing page. However, the brief calls for flexibility and indicates that objects might sometimes move between sections (for instance old objects are sometimes moved to the Index).

A more flexible way to do it then is to just have a single custom post type for all of objects (which are 90% the same anyways) and let categories dictate where they show up on the front end. It is easy now to move an item between sections, and who knows maybe someday there will be an object that belongs in two sections at once!

Another aspect of the design is that there is custom data associated with the objects depending on which section they part of. For instance, items in the shop need a buy button, items in the furniture and lighting section’s need to list starting price and lead time, etc. It is easy enough with Advanced Custom Fields to add any and all fields we need, essentially allowing us to layer an advanced content model on top of a basic content type.

With all objects being a single post type, there is the potential for clutter and confusion with an object showing fields that aren’t relevant. For instance, a Furniture object does not need a “buy now” button, even though it currently shows up in the admin interface. There are ways to mitigate this such as using ACF to hide fields based on which categories are selected, or checking at the template level and only displaying fields that are relevant. 

In this instance I opted for maximum flexibility at the cost of a slightly busier administrative interface. All fields are visible, and any field that is filled out will show up on the front end. First of all, there aren’t *that* many fields, and secondly it seems like, at least for the time being, the folks entering site content will only be people who are intimately familiar with the subject matter and will know exactly what information is relevant for each object (and also when, if ever, they want to break their own rules). If it was a site that had more people editing it, it might make sense to add more guard rails to help the user not enter the wrong stuff.

## Wordpress Plugins

Often, advanced functionality in Wordpress is achieved through plugins. For instance, a slideshow or carousel is a common bit of functionality which can be provided by probably hundreds of plugins. Plugins are an easy tool to reach for, and very powerful in many instances. However, there are some less obvious drawbacks which make me cautious to use plugins for functionality which I can implement myself in a reasonable amount of time.

One benefit of not going plugin crazy is a reduction of  admin clutter. Many wordpress sites will slowly build up an insane amount of admin interface cruft which can make it hard to know what to use to do what, where to find anything, etc, especially since plugins tend to use a wide variety of different menu schemes. Also, many plugins are built in a generic way to accommodate a wide variety of use cases, the need to theme them, etc. For a custom site build, things usually need to only be one way and all of additional customization UI is just in the way. 

Another aspect is, of course, a reduction in the amount of updates, upsells, and popups that you have to deal with. Upsells and popups are annoying, but updates can both cause security concerns if they are not applied, and broken functionality when they are applied.

## Shopify Integration

One instance where plugins can be helpful is implementing complicated things like shopify integration. In this case, IO