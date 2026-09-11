export const projects = [
  {
    slug: "zinnia",
    title: "Zinnia (Cluster Operations Dashboard)",
    status: "July 2026",
    date: "July 5, 2026",
    summary: "A real-time HPC cluster simulator with live monitoring, job scheduling, and operational analytics powered by ASP.NET Core and SignalR.",
    content: `
      Zinnia is a high-performance computing (HPC) cluster operations dashboard built to simulate cluster workloads and visualize system health in real time.

      [solo project]

      Key capabilities:
      - ASP.NET Core Web API simulating HPC cluster nodes, queued workloads, running jobs, failures, and utilization metrics
      - Live operational dashboard powered by SignalR, streaming cluster health, queue length, active jobs, and node status updates
      - Job scheduling workflow modeled with Entity Framework Core and SQL Server, supporting pending, running, completed, and failed state transitions
      - Dockerized backend and React frontend for one-command local deployment of the complete cluster operations simulator

      Built with: C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, SignalR, React, Docker
    `,
  },  
  {
    slug: "pollinate",
    title: "Pollinate (Distributed Clinical Event Platform)",
    status: "July 2026",
    date: "July 5, 2026",
    summary: "A distributed microservices platform simulating medical devices, exchanging HL7 FHIR events through Kafka.",
    content: `
      Pollinate is a distributed event platform simulating medical devices, built around reliable event delivery and observability.

      [solo project]

      Key capabilities:
      - 8 Spring Boot microservices simulating medical devices, exchanging HL7 FHIR events through Apache Kafka
      - Retry queues, dead letter queues, idempotent consumers, and distributed transactions for reliable event delivery
      - REST and gRPC APIs secured with OAuth2, JWT authentication, RBAC, and audit logging
      - Deployed to Kubernetes with Helm, GitHub Actions, OpenTelemetry, Prometheus, and Grafana for CI/CD and observability

      Built with: Java, Spring Boot, Kafka, PostgreSQL, Redis, Docker, Kubernetes, OpenTelemetry, Prometheus
    `,
  },
  {
    slug: "crashes",
    title: "Crashes (California Car Crash Analysis)",
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
    title: "FlowChain (Donation Management Platform)",
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
    title: "KU-HAR (Activity Recognition ML)",
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
    title: "Listenade (Online Music Magazine)",
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
