---
pubDate: 2026-01-18
title: From class components to hooks, clarity and trade-offs
author: Louise Høpfner
description: "Reflecting on the shift from React class components to function components, and the trade-offs between explicit lifecycle clarity and composability."
image:
  url: "/images/notes/react.jpg"
  alt: "#_"
tags:
  - react
  - frontend
  - learning
---

Coming back to React after working with it primarily in the era of class components has been an interesting experience. Revisiting React today highlights both the strengths and the trade-offs that came with the shift to function components and hooks.

With class components, React’s component lifecycle was explicit and easy to reason about. Methods like `componentDidMount()` made it very clear when things would happen, which helped anchor side effects in time and made the mental model straightforward.

With function components and hooks, that explicit lifecycle layer has largely disappeared. In return, it has become much easier to group related logic and extract it into reusable abstractions, such as custom hooks shared across components. Instead of chasing related behavior across multiple lifecycle methods, logic can now live closer together.

The trade-off is that some of the temporal clarity from class components is lost. Hooks don’t remove complexity, they shift it. As a developer, you gain flexibility and composability, but you also take on more responsibility for making timing and side effects clear in your code.
