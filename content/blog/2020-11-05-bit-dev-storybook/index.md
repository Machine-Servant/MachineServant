---
date: "2020-11-05"
title: "How We Use bit.dev and Storybook"
author: "Evan Stern"
featuredImage: ./bit-dev.png
tags: ["bit.dev", "Web Development", "Library", "React", "3rd Party", "Storybook", "MachineServant", "Tech"]
keywords: ["Storybook", "StorybookJS", "Component", "Component Library", "storybook.js", "React", "ReactJS", "bit.dev", "machineservant", "bit"]
published: true
---

If you haven't already read [my post about
*Storybook*](https://machineservant.com/blog/2020-11-02-storybook), then go ahead
and read it if you aren't sure what *Storybook* is.

Ready? Great!

# Storybook Recap

Since you've already read my other blog post, I'll be brief:

*Storybook* is a tool that lets you create and manage your component library
in an isolated environment. It's a great way to build such a library because
it makes you start thinking about developing modular and descriptive
components while providing a fantastic playground and documentation site.

# Shortcomings of Storybook

While *Storybook* is very good at what it does, and it performs with
distinction when you add it to a single project as a way to create that
project's library of components, there are areas it falls a bit short.

## Versioning

If you are keeping a component library completely separate from any other
project then you may want a way to keep track of the versions of each of your
components. With Storybook there's not really a way to do that out of the
box. You have to manage package.json files manually and it's very easy for
package interdependencies to become complex and for things to slip.

## Package Management