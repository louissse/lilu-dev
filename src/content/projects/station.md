---
order: 3
title: Station website rebuild
subtitle: A Webflow rebuild based on Station's updated design, focusing on structure, clarity, and a setup their team could maintain themselves.
live: "https://station.dk/"
github: ""
image:
  src: "../../images/projects/station.png"
  alt: "Station project screenshot"
tags: ["Webflow", "JavaScript"]
---

## The situation

Station is an open student and innovation platform in Denmark. They wanted a refreshed website that presented their activities, programs, and student communities more clearly, and they already had a new design direction ready. My role was to translate it into a solid Webflow build.

## Why Webflow, and why stay in it

Webflow was their existing platform. They were having some frustrations with it and had started considering a switch. After looking at their situation, I recommended staying: the core platform wasn't the problem, and switching would introduce new complexity without solving what was actually bothering them. The better path was to fix the underlying issues and make the system work properly for their team.

## The real problem

The frustration came down to Webflow's class inheritance. When their team tried to make small design changes, like adjusting a text colour, they couldn't predict what else might change on the site. It made them hesitant to touch anything.

The fix was structural: I created a set of dedicated utility classes (for colours and other design properties) based on their design manual. These could be applied to individual elements without triggering unintended changes elsewhere. Combined with a reusable component system and structured CMS collections, the site became predictable to work with.

## Handing it over properly

A clean build isn't enough if the team can't use it confidently. I put together a Notion site with video walkthroughs explaining how to update and maintain the site, covering the patterns that might otherwise be confusing, and written to stay useful as team members change over time.

## Today

The site is live. Station's internal team maintains it themselves.
