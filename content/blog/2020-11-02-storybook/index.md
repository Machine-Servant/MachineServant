---
date: "2020-11-02"
title: "An Intro to StorybookJS"
author: "Evan Stern"
featuredImage: ./storybook-ui.png
tags: ["Storybook", "Web Development", "Library", "React"]
keywords: ["Storybook", "StorybookJS", "Component", "Component Library", "storybook.js", "React", "ReactJS"]
published: true
---

The new web development paradigm is to develop components that are small,
descriptive, and easily portable. Check out any front-end framework you like:
React, Vue, Angular, etc. and you'll see that they are all geared towards
creating UI components.

UI Components are great because they allow a project to build up a library of
(ideally) easy to use UI elements that can be implemented throughout the
project. This keeps things DRY and helps maintain order within a project.

If you're like me though, managing, maintaining, documenting, distributing,
and testing that component library can become cumbersome. It's all well and
good that you have a fancy "Button" component but there's no good way to see
that component in action other than to import it into a project and start
tinkering. Likewise for development: it's difficult to isolate your component
and test it live without implementing it directly in the project somewhere.

# What is Storybook?

Storybook is a tool for developing components in isolation. It provides a
navigable UI where all your components live and can be organized, viewed, and
altered to some degree.

Think about it as a combination of a development workspace and a
self-documenting component library playground.

# How does Storybook work?

At its core, the main building block of Storybook is something called a
"Story". Stories describe a distinct use case for a component. Generally, all
stories belonging to a component live with that component in a `.stories.js`
(or `.stories.tsx` file if you're using typescript/React) file.