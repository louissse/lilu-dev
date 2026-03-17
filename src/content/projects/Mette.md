---
order: 2
title: Portfolio website for musician Mette Lethan
subtitle: A fast, responsive portfolio site built to replace an outdated legacy website and make it easy to publish new projects and teaching work.
live: "https://mettelethan.com/"
github: ""
image:
  src: "../../images/projects/mette.png"
  alt: "Mette project screenshot"
tags: ["Astro", "SanityCMS", "Tailwind"]
---

## The problem

Mette Lethan is a musician and teacher. Her old website was built on a legacy framework that hadn't been updated in years, wasn't responsive, and couldn't be maintained without a developer in the loop for every small change. She needed something different: a site she could own without being dependent on a tech company or a WordPress plugin ecosystem that would eventually demand attention.

## The stack

Astro was an easy choice. I had experience with it and it produces fast, lean sites without a lot of ongoing complexity. For content management, we needed something that would let Mette add new projects herself over time, across different categories (music, teaching, collaborations). Sanity CMS fit that well: structured, flexible, and not tied to any particular hosting platform.

## The challenge

The hardest part wasn't technical, it was design. Mette had a clear vision for how she wanted her work to be presented, but that vision didn't map neatly onto a content model flexible enough to handle many different project types. We went back and forth quite a bit. What we landed on was a category-based system: projects live in categories that control which page they appear on, giving her a consistent way to add new work without it becoming unpredictable.

One page also has a custom music player, built in Vanilla JavaScript, so her music plays natively on the site rather than linking out to a streaming platform. Adding new tracks isn't in the CMS yet (it was outside the original scope), but the player itself works well and it was the right call to build it quickly rather than not have it at all.

## Today

The site is live and Mette is using it as her main online presence, adding projects on her own.
