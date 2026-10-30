# marlware.github.io

Minimalist Personal Website

## What's going on here

This is my personal website, built to look like Patrick Collison's. It's a plain white page with small Helvetica text, a short blue menu on the right, and one narrow column of writing. There's no JavaScript, no dark mode, and no framework. It holds the same blog and projects as marl.dev, as simple HTML pages.

- A home page with just a name and a place
- A blog with three short posts
- A projects list with a page for each project
- A small phone layout that moves the menu to the top

## Why these technologies

- **HTML and CSS** are all a page of text needs
- **Node** builds every page from two data files
- **GitHub Pages** hosts the finished pages for free

Here's how the pieces connect.

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
- `style.css` holds the whole look, and it's about 100 lines
- The site lives at https://marlware.github.io
- GitHub Pages has to be turned on once, under Settings, then Pages, then Deploy from a branch, using `main` and the root folder
- The empty `.nojekyll` file tells GitHub not to run Jekyll on these pages
- The old contents of this repo are still in the git history
