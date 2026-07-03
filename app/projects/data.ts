export const projects = [
  {
    slug: "bloom-filter",
    title: "Bloom Filter, Healthcare Lakehouse",
    status: "July 2026",
    date: "2026",
    summary: "A Spark Structured Streaming pipeline for healthcare data, backed by Delta Lake and exposed through FastAPI.",
    content: `
      Bloom Filter is a healthcare lakehouse pipeline built to ingest, clean, and serve HL7 FHIR data at scale.

      [solo project]

      Key capabilities:
      - Spark Structured Streaming pipeline ingesting HL7 FHIR resources into Bronze, Silver, and Gold Delta Lake tables
      - Reusable PySpark transformations with data quality assertions, deduplication, and incremental Delta Lake merges
      - Healthcare quality and utilization analytics exposed through FastAPI, backed by Delta Lake for sub-second queries
      - Azure infrastructure provisioned with Terraform, automating testing, deployment, and data validation via GitHub Actions

      Built with: Python, PySpark, Spark SQL, Delta Lake, FastAPI, Azure Blob Storage, Docker, Terraform
    `,
  },
  {
    slug: "pollinate",
    title: "Pollinate, Distributed Event Platform",
    status: "July 2026",
    date: "2026",
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
