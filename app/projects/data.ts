export const projects = [
  {
    slug: "queue-cumber",
    title: "Queue-Cumber, Distributed .NET Health Tech Pipeline",
    status: "TBA",
    date: "2025-2026",
    summary: "A high-throughput health tech pipeline using .NET, ASP.NET Core, and healthcare compliance standards.",
    content: `
      Queue-Cumber is a distributed health tech pipeline engineered to process high volumes of simulated clinical data payloads securely and efficiently.

      Key capabilities:
      - RESTful Web API using ASP.NET Core processing 5,000+ simulated daily clinical payloads
      - HL7 FHIR R4 integration for standardized health record formats
      - 25% query efficiency optimization through asynchronous message queues and repository patterns
      - JWT and role-based access tokens for enterprise security and healthcare compliance

      Built with: C#, ASP.NET Core, Blazor, HL7.FHIR.R4, SQL Server, EF Core, RabbitMQ, Azure
    `,
  },
  {
    slug: "bento-boxed",
    title: "Bento Boxed, Secure Java & Spring Boot FHIR API",
    status: "TBA",
    date: "2025-2026",
    summary: "A secure backend microservice for mapping legacy clinical datasets into compliant FHIR resource endpoints.",
    content: `
      Bento Boxed is a secure backend microservice built with Java and Spring Boot to handle legacy clinical data transformation and compliance.

      Key capabilities:
      - OAuth 2.0 and SMART on FHIR protocols via Spring Security for strict token authentication
      - Relational PostgreSQL schema for complex medical metadata with indexing for low-latency performance
      - Containerized with Docker for deployment
      - Rigorous end-to-end API test suites via Postman to validate edge cases

      Built with: Java, Spring Boot, Spring Security, OAuth 2.0, PostgreSQL, Docker, Postman
    `,
  },
  {
    slug: "mockaron",
    title: "Mockaron, Cross-Platform Clinical Portal",
    status: "TBA",
    date: "2025-2026",
    summary: "A responsive healthcare portal with React web dashboard, Android app, and automated CI testing.",
    content: `
      Mockaron is a cross-platform clinical portal providing secure patient-doctor scheduling and management across web and mobile platforms.

      Key capabilities:
      - React web portal dashboard and native Android app built in Kotlin
      - Node.js backend using MongoDB to manage patient-doctor scheduling and secure user profiles
      - Automated UI testing suite using Appium and Python with 85% code coverage
      - CI workflow via GitHub Actions for automated linting, bundle building, and rapid test sweeps

      Built with: React, Android Studio, Kotlin, Node.js, Express, MongoDB, Appium, GitHub Actions
    `,
  },
  {
    slug: "crashes",
    title: "Big data analysis of 2025 California car crashes",
    status: "May 2026",
    date: "May 2026",
    summary: "A data analysis project that explores crash trends across California in 2025.",
    content: `
      [ with: Gokul Anand, Sajid Kaiser, Fellip Oklas ]
      
      This project analyzes 2025 California car crash data to identify patterns in timing, severity, and contributing factors. The work focuses on transforming raw records into actionable insights for safer planning.

      Research focus:
      - Crash incidence by hour, weekday, and weather conditions
      - Correlations between vehicle type and injury outcomes
      - Regional trends for highway and urban environments

      The goal is to turn large datasets into clear visualizations and recommendations that support public safety decisions.
    `,
  },
  {
    slug: "flowchain",
    title: "FlowChain, three-tier donation management app",
    status: "May 2026",
    date: "May 2026",
    summary: "A donation platform for nonprofits, with donor workflows and campaign tracking.",
    content: `
      [ with: Ryuto Kawabata, Yug More ]

      FlowChain is a three-tier donation management app built for nonprofits and fundraisers. It brings donor data, campaign performance, and approval workflows together in a single system.

      Core components:
      - Donor management with recurring gift support
      - Campaign dashboards for progress and attribution
      - Approval workflows for grant and sponsorship requests

      The app is focused on reducing administrative burden while preserving transparency for finance and program teams.
    `,
  },
  {
    slug: "kuhar",
    title: "AI analysis of KU-HAR human activity recognition data",
    status: "May 2026",
    date: "May 2026",
    summary: "Applying machine learning to the KU-HAR dataset for sensor-based activity recognition.",
    content: `
      [ with: Harshit Jaglan, Thuan Lam, Ynha Nguyen, Thy Tran ]

      This project uses the KU-HAR human activity recognition dataset to train models that classify movements from wearable sensors. It explores preprocessing, feature engineering, and supervised learning techniques.

      Project work:
      - Sensor stream preprocessing and noise reduction
      - Feature extraction across temporal windows
      - Training classifiers for activity labels like walking, sitting, and jogging

      The aim is to build a practical activity recognition pipeline that can be applied to health, fitness, and ambient sensing solutions.
    `,
  },
  {
    slug: "listenade",
    title: "Listenade, online music magazine",
    status: "Feb 2025",
    date: "Feb 2025",
    summary: "An online music magazine focused on artists, culture, and editorial storytelling.",
    content: `
      Listenade is an online music magazine built around editorial storytelling, artist profiles, and curated playlists. The project highlights music culture through thoughtful articles and accessible design.

      Editorial scope:
      - Artist spotlights and album reviews
      - Music technology coverage and industry trends
      - Curated playlists and event previews

      The magazine was designed to feel immersive, editorial-first, and easy to navigate for readers.
    `,
  },
];
