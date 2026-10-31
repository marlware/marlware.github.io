// Builds the whole site into plain HTML files.
// Run it with: node build.mjs
// The words come from data/projects.mjs and data/posts.mjs.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { projects } from "./data/projects.mjs";
import { posts } from "./data/posts.mjs";

const SITE = "Marl Jonson";
const ORIGIN = "https://marlware.github.io";

const links = [
  ["blog", "/blog/"],
  ["projects", "/projects/"],
  ["github", "https://github.com/marlware"],
  ["linkedin", "https://linkedin.com/in/marl-jonson/"],
];

// These three projects get the whole-system picture as their figure.
const withDiagram = new Set(["margo", "edith", "agnes"]);

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const attr = (s) => esc(s).replace(/"/g, "&quot;");

// In the projects list, the blue link is only the project's name, and the black
// words after it are the rest of the title in sentence case. So
// "Margo – Media Ingest Service" becomes "Margo. Media ingest service."
const keepCase = new Set(["HLS", "Docker", "JavaFX"]);

const sentenceCase = (s) =>
  s
    .split(" ")
    .map((word, i) => (i > 0 && !keepCase.has(word) ? word.toLowerCase() : word))
    .join(" ");

function projectRow(p) {
  const [name, rest] = p.title.split(" – ");

  return `  <li><span class="meta">${esc(p.date)}</span><strong><a href="/projects/${p.slug}/">${esc(name)}</a>.</strong> ${esc(sentenceCase(rest))}.</li>`;
}

function write(path, html) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
}

// The top links. The two that leave this site get a small arrow (↗).
function navAnchor([label, href]) {
  if (!href.startsWith("http")) return `<a href="${href}">${label}</a>`;

  const arrow = `<span class="ext" aria-hidden="true">&#8599;&#xFE0E;</span>`;
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}${arrow}</a>`;
}

function page({ title, description, path, body }) {
  const nav = `<nav>
  ${[["home", "/"], ...links].map(navAnchor).join("\n  ")}
</nav>

`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${attr(description)}">
  <link rel="canonical" href="${ORIGIN}${path}">
  <meta property="og:title" content="${attr(title)}">
  <meta property="og:description" content="${attr(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${ORIGIN}${path}">
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
<main>
<article>
${nav}${body}
</article>
</main>
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
        return `<h2>${esc(first.slice(0, -1))}</h2>\n\n<ul>\n${items}\n</ul>`;
      }

      // "1. First", "2. Second"
      if (lines.every((l) => /^\d+\.\s/.test(l))) {
        const items = lines
          .map((l) => `<li>${esc(l.replace(/^\d+\.\s/, ""))}</li>`)
          .join("\n");
        return `<ol>\n${items}\n</ol>`;
      }

      // "fall 2024" followed by a list of classes
      if (/^(fall|spring|summer|winter) \d{4}$/i.test(first) && rest.length) {
        const items = rest.map((l) => `<li>${esc(l)}</li>`).join("\n");
        return `<h2>${esc(first)}</h2>\n\n<ul>\n${items}\n</ul>`;
      }

      // "Built with: ..."
      if (lines.length === 1 && first.startsWith("Built with:")) {
        return `<p><strong>Built with:</strong>${esc(first.slice("Built with:".length))}</p>`;
      }

      return `<p>${esc(lines.join(" "))}</p>`;
    })
    .join("\n\n");
}

const figure = `<figure>
  <img src="/assets/system.svg" alt="How Margo, Agnes, and Edith connect through Kafka, with the technologies each one uses" width="874" height="1581">
  <figcaption>Margo, Edith, and Agnes, and how they fit together</figcaption>
</figure>`;

// Home
write(
  "index.html",
  page({
    title: `Home · ${SITE}`,
    description:
      "Marl Jonson studies computer science and builds backend systems.",
    path: "/",
    body: `<h1>home</h1>

<div class="flow">
<p>I study computer science in the San Francisco Bay Area. Most of what I build is backend systems. I'm passionate about distributed systems and the JVM umbrella. I like making small but complete versions of real ones to see how they hold up.</p>

<p>Things I'm interested in:</p>

<ul>
  <li><strong>Event-driven systems.</strong> Putting a queue like Kafka between the fast part of a system and the slow, unreliable part. <a href="/projects/etch/">Etch</a> is a notification hub built around that idea.</li>
  <li><strong>Streaming video.</strong> <a href="/projects/margo/">Margo</a>, <a href="/projects/edith/">Edith</a>, and <a href="/projects/agnes/">Agnes</a> together pretend to be a small streaming service, from checking videos to playing ads.</li>
  <li><strong>Media companies.</strong> The big streaming platforms and the conglomerates behind them, like Netflix, Disney+, Paramount+, and NBCUniversal, and the systems that get their shows to millions of people at once.</li>
  <li><strong>Stateful stream processing.</strong> Programs that read a nonstop flow of events and remember what came before. I'm interested in building them on the JVM with Kafka Streams or Flink, and in handling events that show up late.</li>
</ul>

<h2>elsewhere</h2>

<p><a href="https://github.com/marlware" target="_blank" rel="noopener noreferrer">marlware</a> on GitHub; <a href="https://linkedin.com/in/marl-jonson/" target="_blank" rel="noopener noreferrer">marl-jonson</a> on LinkedIn.</p>
</div>`,
  }),
);

// Blog
write(
  "blog/index.html",
  page({
    title: `Blog · ${SITE}`,
    description: "Short posts by Marl Jonson.",
    path: "/blog/",
    body: `<h1>blog</h1>

<ul class="plain">
${posts
  .map(
    (p) =>
      `  <li><div class="row"><strong><a href="/blog/${p.slug}/">${esc(p.title)}</a>.</strong><span class="meta">${esc(p.date)}</span></div></li>`,
  )
  .join("\n")}
</ul>`,
  }),
);

for (const post of posts) {
  write(
    `blog/${post.slug}/index.html`,
    page({
      title: `${post.title} · ${SITE}`,
      description: post.title,
      path: `/blog/${post.slug}/`,
      body: `<h1 class="tight">${esc(post.title)}</h1>
<p class="meta">${esc(post.date)}</p>

<div class="flow">
${renderText(post.content)}
</div>`,
    }),
  );
}

// Projects
write(
  "projects/index.html",
  page({
    title: `Projects · ${SITE}`,
    description: "Projects by Marl Jonson.",
    path: "/projects/",
    body: `<h1>projects</h1>

<ul class="plain">
${projects
  .map(
    (p) =>
      projectRow(p),
  )
  .join("\n")}
</ul>`,
  }),
);

for (const project of projects) {
  const code = project.github
    ? `\n\n<p><strong>Code:</strong> <a href="${project.github}" target="_blank" rel="noopener noreferrer">${esc(project.github.replace("https://", ""))}</a></p>`
    : "";

  write(
    `projects/${project.slug}/index.html`,
    page({
      title: `${project.title} · ${SITE}`,
      description: project.summary,
      path: `/projects/${project.slug}/`,
      body: `<h1 class="tight">${esc(project.title)}</h1>
<p class="meta">${esc(project.date)}</p>

<p class="lead">${esc(project.summary)}</p>

${withDiagram.has(project.slug) ? figure + "\n\n" : ""}<div class="flow">
${renderText(project.content)}${code}
</div>`,
    }),
  );
}

// Not found
write(
  "404.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Not found · ${SITE}</title>
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
<main class="notfound">
  <div>
    <h1>404</h1>
    <p>That page doesn't exist.</p>
    <p><a href="/">Go home</a></p>
  </div>
</main>
</body>
</html>
`,
);

console.log(`Built ${projects.length} projects and ${posts.length} posts.`);
