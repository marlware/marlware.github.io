// Builds the whole site into plain HTML files.
// Run it with: node build.mjs
// The words come from data/projects.mjs and data/posts.mjs.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { projects } from "./data/projects.mjs";
import { posts } from "./data/posts.mjs";

const SITE = "Marl Jonson";

const menu = [
  ["blog", "/blog/"],
  ["projects", "/projects/"],
  ["github", "https://github.com/marlware"],
  ["linkedin", "https://linkedin.com/in/marl-jonson/"],
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function write(path, html) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
}

function page(title, body) {
  const links = menu
    .map(([label, href]) => `  <li><a href="${href}">${label}</a></li>`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style.css">
  <link rel="icon" href="/favicon.ico">
  <title>${esc(title)}</title>
</head>
<body>
<div id="menu">
<span class="title"><a href="/">marl jonson 🍓</a></span>
<ul>
${links}
</ul>
</div>
<div id="left">&nbsp;</div>
<div id="content">
${body}
</div>
</body>
</html>
`;
}

// Turns the plain text in the data files into paragraphs, lists, and headings.
function renderText(text) {
  const blocks = text
    .split(/\n\s*\n/)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    )
    .filter((lines) => lines.length);

  return blocks
    .map((lines) => {
      const first = lines[0];
      const rest = lines.slice(1);

      // "Key ideas:" followed by "- item" lines
      if (first.endsWith(":") && rest.length && rest.every((l) => l.startsWith("- "))) {
        const items = rest.map((l) => `<li>${esc(l.slice(2))}</li>`).join("\n");
        return `<p>${esc(first)}</p>\n<ul>\n${items}\n</ul>`;
      }

      // "1. First", "2. Second"
      if (lines.every((l) => /^\d+\.\s/.test(l))) {
        const items = lines
          .map((l) => `<li>${esc(l.replace(/^\d+\.\s/, ""))}</li>`)
          .join("\n");
        return `<ol>\n${items}\n</ol>`;
      }

      // "FA.2024" followed by a list of classes
      if (/^[A-Z]{2}\.\d{4}$/.test(first) && rest.length) {
        const items = rest.map((l) => `<li>${esc(l)}</li>`).join("\n");
        return `<h3>${esc(first)}</h3>\n<ul>\n${items}\n</ul>`;
      }

      // "Built with: ..."
      if (lines.length === 1 && first.startsWith("Built with:")) {
        return `<p><b>Built with:</b>${esc(first.slice("Built with:".length))}</p>`;
      }

      return `<p>${esc(lines.join(" "))}</p>`;
    })
    .join("\n\n");
}

// Home
write(
  "index.html",
  page(
    `Home · ${SITE}`,
    `<p>san francisco bay area 💨</p>`,
  ),
);

// Blog
write(
  "blog/index.html",
  page(
    `Blog · ${SITE}`,
    `<h1>Blog</h1>

<ul>
${posts
  .map(
    (p) =>
      `  <li><a href="/blog/${p.slug}/">${esc(p.title)}</a><span class="byline">${esc(p.date)}</span></li>`,
  )
  .join("\n")}
</ul>`,
  ),
);

for (const post of posts) {
  write(
    `blog/${post.slug}/index.html`,
    page(
      `${post.title} · ${SITE}`,
      `<h1>${esc(post.title)}</h1>
<p class="byline">${esc(post.date)}</p>

${renderText(post.content)}`,
    ),
  );
}

// Projects
write(
  "projects/index.html",
  page(
    `Projects · ${SITE}`,
    `<h1>Projects</h1>

<ul>
${projects
  .map(
    (p) =>
      `  <li><a href="/projects/${p.slug}/">${esc(p.title)}</a><span class="byline">${esc(p.date)}</span></li>`,
  )
  .join("\n")}
</ul>`,
  ),
);

for (const project of projects) {
  const code = project.github
    ? `\n\n<p>Code: <a href="${project.github}">${esc(project.github.replace("https://", ""))}</a></p>`
    : "";

  write(
    `projects/${project.slug}/index.html`,
    page(
      `${project.title} · ${SITE}`,
      `<h1>${esc(project.title)}</h1>
<p class="byline">${esc(project.date)}</p>

<p>${esc(project.summary)}</p>

${renderText(project.content)}${code}`,
    ),
  );
}

// Not found
write(
  "404.html",
  page(
    `Not found · ${SITE}`,
    `<h1>Not found</h1>

<p>That page doesn't exist. Try the menu on the right.</p>`,
  ),
);

console.log(`Built ${projects.length} projects and ${posts.length} posts.`);
