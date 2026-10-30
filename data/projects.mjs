export const projects = [
  {
    slug: "margo",
    title: "Margo – Media Ingest Service",
    status: "Oct 2026",
    date: "Oct 2026",
    github: "https://github.com/marlware/margo",
    summary: "A media ingest service that checks videos before anyone can watch them and announces the approved ones on Kafka.",
    content: `
      Margo stands for Media Asset Routing & Governance Orchestrator. It's the front desk of a small simulated video streaming service, alongside Edith and Agnes.

      What it does:
      - Checks each video for a name, a real length, and a proper playlist file
      - Marks every video APPROVED or REJECTED, with a list of what went wrong
      - Announces the results on a Kafka topic, so Agnes only streams approved videos
      - Shows asset status and validation failures on a React and TypeScript dashboard
      - Handled a stress test of 10,000 videos

      Built with: Java, Spring Boot, Apache Kafka, React, TypeScript, Docker
    `,
  },
  {
    slug: "edith",
    title: "Edith – Ad Decisioning Service",
    status: "Oct 2026",
    date: "Oct 2026",
    github: "https://github.com/marlware/edith",
    summary: "An ad decisioning service that picks an ad for each viewer and counts every ad view with a Flink pipeline.",
    content: `
      Edith stands for Event-Driven Intelligent Targeting Hub. It decides which simulated ad a viewer sees, and keeps count of how often each ad was shown.

      What it does:
      - Picks an ad for each viewer, based on interests stored in Redis
      - Reads ad views from Kafka as Agnes reports them
      - Counts views for each ad with a Scala and Flink job
      - Handled a stress test of 10,000 ad views, and the counts added up exactly

      Built with: Java, Spring Boot, Scala, Apache Kafka, Apache Flink, Redis, Docker
    `,
  },
  {
    slug: "agnes",
    title: "Agnes – HLS Playback Service",
    status: "Oct 2026",
    date: "Oct 2026",
    github: "https://github.com/marlware/agnes",
    summary: "A playback service that streams approved HLS videos, fetches ads from Edith, and reports every ad view.",
    content: `
      Agnes stands for Adaptive Gateway for Networked Edge Streaming. It's the part of the simulated streaming service that viewers actually talk to.

      What it does:
      - Streams real HLS video, made with ffmpeg
      - Only serves videos that Margo approved
      - Asks Edith for an ad before each video
      - Reports finished ads to Kafka, so Edith can count them
      - Includes an Android app that plays the ad, then the video

      Built with: Go, Kotlin, Media3, HLS, Apache Kafka, ffmpeg
    `,
  },
  {
    slug: "etch",
    title: "Etch – Distributed Notification Hub",
    status: "Oct 2026",
    date: "Oct 2026",
    github: "https://github.com/marlware/etch",
    summary: "A distributed notification hub using Apache Kafka to decouple high-volume business orders from notification delivery pipelines.",
    content: `
      Etch separates order processing from notification delivery, so a slow or broken email provider never makes an order fail or makes a customer wait.

      Key ideas:
      - The order service answers right away and publishes an event to Kafka
      - A notification service sends the emails and texts in the background
      - Failed sends retry with exponential backoff
      - Sends that can never succeed go to a dead-letter topic instead of being lost
      - Redis stops duplicate messages when Kafka redelivers an event
      - Five services, each in its own container, set up to deploy to AWS ECS with GitHub Actions

      Built with: Java, Spring Boot, Spring Cloud Gateway, Apache Kafka, MySQL, Redis, Testcontainers, Docker, GitHub Actions, AWS
    `,
  },
  {
    slug: "celia",
    title: "Celia – Multi-threaded Performance Tool",
    status: "Oct 2026",
    date: "Oct 2026",
    github: "https://github.com/marlware/celia",
    summary: "A C++ and OpenMP tool that measures and visualizes multi-threaded CPU performance using parallel matrix math.",
    content: `
      Celia measures how much faster a program gets when it uses more CPU cores. It multiplies large matrices with different thread counts, times every run, and charts the results.

      Capabilities:
      - Parallel matrix multiplication, with the outer loop split across threads by OpenMP
      - Sweeps matrix sizes and thread counts
      - Reports time and GFLOPS, keeping the fastest of several runs
      - Checks the parallel answer against the serial one before timing anything
      - Saves results to CSV and plots them with Python and Matplotlib

      Built with: C++17, OpenMP, CMake, Python, Matplotlib
    `,
  },
  {
    slug: "zinnia",
    title: "Zinnia – Work Order and Asset Management",
    status: "Sep 2026",
    date: "Sep 2026",
    github: "https://github.com/marlware/zinnia",
    summary: "A work order and asset management platform built with an ASP.NET Core backend and a React frontend.",
    content: `
      Zinnia is a work order and asset management platform for teams that keep physical things running, like construction crews, fleet teams, and maintenance teams. It's early. The ASP.NET Core API runs with a health check, API docs, and CORS, and the rest is planned.

      Planned:
      - Work orders you can create, assign, and track
      - An asset catalog across an organization
      - A React and TypeScript frontend with live updates through SignalR
      - Docker, AWS ECS, Terraform, and GitHub Actions

      Built with: C#, ASP.NET Core, Entity Framework Core, PostgreSQL
    `,
  },
  {
    slug: "respiro",
    title: "Respiro – Pulmonary Health Monitoring",
    status: "Sep 2026",
    date: "Sep 2026",
    github: "https://github.com/marlware/respiro",
    summary: "Pulmonary health data made accessible through simple, real-time FHIR monitoring on iOS.",
    content: `
      Respiro is an iPhone app that shows oxygen level and pulse in real time. It keeps the data in HL7 FHIR, the standard format healthcare systems use, so other health tools can understand it. Everything runs on simulated readings.

      Key ideas:
      - A Spring Boot backend makes a simulated SpO2 and pulse reading every 3 seconds
      - Readings are served as FHIR Observations using HAPI FHIR
      - New readings stream to the app with Server-Sent Events
      - A SwiftUI dashboard with a fast UIKit graph
      - Flags oxygen below 90% and supports VoiceOver

      Built with: Java, Spring Boot, HAPI FHIR, Swift, SwiftUI, UIKit, Docker, GitHub Actions
    `,
  },
  {
    slug: "hamm",
    title: "Hamm – Secure Financial Ledger",
    status: "Sep 2026",
    date: "Sep 2026",
    github: "https://github.com/marlware/hamm",
    summary: "A secure financial ledger API using Spring Boot to handle transactional CRUD workflows with strict role-based access.",
    content: `
      Hamm is the money-tracking part of a banking app. It keeps accounts, moves money between them, and records every move with double-entry bookkeeping. It runs on test data only.

      Key features:
      - A double-entry ledger, where every transfer is a debit and a credit
      - Atomic transfers with account locking, so balances stay consistent
      - JWT login with roles for customers, accountants, auditors, and admins
      - Swagger docs, plus tests against a real PostgreSQL with Testcontainers

      Built with: Java, Spring Boot, Spring Security, JWT, Spring Data JPA, PostgreSQL, Docker, GitHub Actions
    `,
  },
  {
    slug: "harbor",
    title: "Harbor – Healthcare Messaging Platform",
    status: "Aug 2026",
    date: "Aug 2026",
    github: "https://github.com/marlware/harbor",
    summary: "An event-driven platform using Spring Boot and Apache Kafka for exchanging HL7 FHIR messages between healthcare services.",
    content: `
      Harbor is the plumbing behind an imaginary hospital. Separate systems for patients, devices, and vital signs share messages, so a heart rate reading can turn into an alert without anyone copying data by hand. It runs on made-up data only.

      Key ideas:
      - Four services for patients, devices, observations, and notifications
      - Services share events over Kafka, shaped like HL7 FHIR
      - Abnormal heart rate, blood pressure, temperature, or oxygen creates an alert
      - Idempotent consumers with retries and dead-letter topics
      - JWT roles and an audit log
      - Docker, Kubernetes manifests, and GitHub Actions CI

      Built with: Java, Spring Boot, Apache Kafka, PostgreSQL, Redis, Docker, Kubernetes, GitHub Actions, HL7 FHIR
    `,
  },
  {
    slug: "protist",
    title: "Protist – Tiny Docker Container",
    status: "Jul 2026",
    date: "Jul 2026",
    github: "https://github.com/marlware/protist",
    summary: "A tiny Docker container for serving HTML and CSS files.",
    content: `
      Protist is a very small web page that runs inside a Docker container. Nginx serves one HTML page and one CSS file, which makes it a good starting point for learning how Docker packages a site.

      Built with: HTML, CSS, Docker, Nginx
    `,
  },
  {
    slug: "dotty",
    title: "Dotty – Dot Product Calculator",
    status: "Jul 2026",
    date: "Jul 2026",
    github: "https://github.com/marlware/dotty",
    summary: "A tiny dot product calculator.",
    content: `
      Dotty is a tiny C++ program for 3D vector math. The dot product tells you how much two arrows point the same way, and the demo uses a flashlight and a wall to show it.

      Key ideas:
      - A Vector3 type with length, normalize, and dot functions
      - A small reusable library, with a separate demo app
      - Built with CMake

      Built with: C++17, CMake
    `,
  },
  {
    slug: "fxcade",
    title: "FXcade – JavaFX Arcade",
    status: "Dec 2025",
    date: "Dec 2025",
    summary: "A Java arcade project built for CS 151.",
    content: `
      FXcade was the second project for CS 151 at SJSU.

      Built with: Java
    `,
  },
  {
    slug: "pps",
    title: "Performative Pop Shop – Inventory Manager",
    status: "Sep 2025",
    date: "Sep 2025",
    summary: "A console-based store inventory manager built with Java.",
    content: `
      Performative Pop Shop is a console-based store inventory manager built for CS 151.

      Built with: Java
    `,
  },
  {
    slug: "listenade",
    title: "Listenade – Music Zine",
    status: "Feb 2025",
    date: "Feb 2025",
    summary: "A music zine with my pop opinions.",
    content: `
      Listenade is a music zine with my pop opinions, at listenade.com.

      Built with: HTML
    `,
  },
];
