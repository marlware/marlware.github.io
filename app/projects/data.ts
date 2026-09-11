export const projects = [
  {
    slug: "sunnyside",
    title: "Sunnyside – Healthcare Event Processing",
    status: "2026",
    date: "2026",
    summary: "A healthcare event processing platform that ingests and validates HL7 FHIR data.",
    content: `
      Sunnyside is a healthcare data platform built to handle ingestion and validation of HL7 FHIR messages.

      Key capabilities:
      - HL7 FHIR message parsing and validation
      - Healthcare data normalization
      - Event processing pipeline
      - Data quality monitoring

      Built with: Healthcare Standards, HL7 FHIR, Event Processing
    `,
  },
  {
    slug: "parabench",
    title: "Parabench – Multi-threaded Performance Tool",
    status: "2026",
    date: "2026",
    summary: "A C++ and OpenMP tool that measures and visualizes multi-threaded CPU performance.",
    content: `
      Parabench is a performance measurement and visualization tool for analyzing multi-threaded CPU workloads.

      Capabilities:
      - Parallel matrix math benchmarking
      - Thread performance profiling
      - Real-time performance visualization
      - Scaling analysis across thread counts

      Built with: C++, OpenMP, Performance Analysis
    `,
  },
  {
    slug: "teatime",
    title: "Teatime – HPC Cluster Observability",
    status: "2026",
    date: "2026",
    summary: "An observability stack that visualizes Slurm cluster health and operational metrics.",
    content: `
      Teatime provides comprehensive observability for high-performance computing clusters using Slurm.

      Features:
      - Real-time cluster health visualization
      - Node and job monitoring
      - Performance metrics and alerts
      - Historical trend analysis

      Built with: Observability Stack, Slurm Monitoring
    `,
  },
  {
    slug: "axiom",
    title: "Axiom – Video Streaming Platform",
    status: "2026",
    date: "2026",
    summary: "A distributed streaming platform for reliable, low-latency video playback at scale.",
    content: `
      Axiom is a distributed video streaming platform engineered for high reliability and low latency at scale.

      Key components:
      - Distributed video ingestion and delivery
      - Event-driven service architecture
      - Caching layer for reduced latency
      - Fault-tolerant playback handling

      Built with: Java, AWS, Redis, Apache Kafka, Event-Driven Architecture
    `,
  },
  {
    slug: "theclaw",
    title: "TheClaw – Media Event Pipeline",
    status: "2026",
    date: "2026",
    summary: "A concurrent media event pipeline using Scala 3 and Cats Effect for bounded concurrency and backpressure.",
    content: `
      TheClaw is a high-performance media event processing pipeline built with functional programming principles.

      Architecture:
      - Bounded concurrency for controlled resource usage
      - Backpressure handling to prevent queue overflow
      - Functional event composition with Cats Effect
      - Type-safe pipeline construction

      Built with: Scala 3, Cats Effect, Functional Programming
    `,
  },
  {
    slug: "starcommand",
    title: "StarCommand – Distributed Task Scheduler",
    status: "2026",
    date: "2026",
    summary: "A failure-aware distributed DAG scheduler using Java 21 and gRPC for deadline-constrained tasks.",
    content: `
      StarCommand is a distributed scheduler designed to handle deadline-constrained task execution with built-in failure recovery.

      Core capabilities:
      - Directed acyclic graph (DAG) task scheduling
      - Failure detection and automatic recovery
      - Deadline-aware task prioritization
      - Distributed coordination using gRPC

      Built with: Java 21, gRPC, Protocol Buffers
    `,
  },
  {
    slug: "hamm",
    title: "Hamm – Secure Financial Ledger",
    status: "2026",
    date: "2026",
    summary: "A secure financial ledger API using Spring Boot to handle transactional CRUD workflows with strict role-based access.",
    content: `
      Hamm is a financial ledger API built with Spring Boot for secure transaction management and access control.

      Key features:
      - Transactional CRUD operations for financial records
      - Strict role-based access control (RBAC)
      - Secure API design with authentication and authorization
      - Persistent storage with relational database

      Built with: Java, Spring Boot, Spring Security, PostgreSQL
    `,
  },
  {
    slug: "zinnia",
    title: "Zinnia – Cluster Operations Dashboard",
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
    title: "Pollinate – Distributed Clinical Event Platform",
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
    title: "Crashes – California Car Crash Analysis",
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
    title: "FlowChain – Donation Management Platform",
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
    title: "KU-HAR – Activity Recognition ML",
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
    title: "Listenade – Online Music Magazine",
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
