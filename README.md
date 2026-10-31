# marlware.github.io

Minimalist Personal Website

## What's going on here

This is my personal website, built to look like [newaesthetics.art](https://newaesthetics.art/). It's a plain white page with one centered column of text, the system font, pink headings, and blue links. There's no JavaScript, no dark mode, and no framework. It holds the same blog and projects as marl.dev, as simple HTML pages.

- A home page with a short summary of me, written like the about page on patrickcollison.com
- A blog with three short posts
- A projects list with a page for each project
- A small line of links at the top of every other page
- The Margo, Edith, and Agnes pages show a diagram of how all three fit together

## Why these technologies

- **HTML and CSS** are all a page of text needs
- **Node** builds every page from two data files
- **GitHub Pages** hosts the finished pages for free

```mermaid
flowchart LR
    Data["data files: projects and posts"] --> Build["build.mjs on Node"]
    Build --> HTML["plain HTML pages"]
    HTML --> Pages["GitHub Pages"]
```

## Updating the site

Here's what you'll need.

- Node

Then do these steps.

- Edit `data/projects.mjs` or `data/posts.mjs`
- Run `node build.mjs` to rebuild every page
- Commit the new HTML and push

## Good to know

- The words come from the marl.dev repo, so copy any changes over to the files in `data/`
- `style.css` holds the whole look, and it's under 200 lines
- `assets/system.svg` is a copy of the diagram in the margo repo, so update it here if that one changes
- The site lives at https://marlware.github.io
- GitHub Pages serves the `main` branch, from the root folder
- The empty `.nojekyll` file tells GitHub not to run Jekyll on these pages
- The old contents of this repo are still in the git history
