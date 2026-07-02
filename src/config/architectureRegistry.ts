export interface Capability {
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  iconName?: string;
}

export interface Highlight {
  title: string;
  description?: string;
}

export interface StakeholderValue {
  title: string;
  description: string;
  benefits?: string[];
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  status: "Completed" | "Current" | "Planned";
  items: string[];
}

export interface ArchitectureLayer {
  title: string;
  items: string[];
}

export interface ProductConfig {
  slug: string;
  badge?: string;
  title: string;
  classification?: string;
  category: string;
  description: string;
  
  // Overview - Optional Vision & Mission
  vision?: string;
  mission?: string;
  kpis?: { label: string; value: string; description?: string }[];
  highlights?: Highlight[];

  // Business Value
  businessScenarioTitle?: string;
  businessScenarioDesc?: string;
  businessScenarioResult?: string;
  businessScenarioIconName?: string;
  stakeholders?: StakeholderValue[];

  // Capabilities
  capabilities: Capability[];

  // Architecture Diagrams & Layers
  executiveArchitecture: string;
  technicalArchitecture: string;
  architectureDescription: string;
  architectureLayers?: ArchitectureLayer[];

  // Use Cases
  useCases: UseCase[];

  // Roadmap - Simple or Phased
  roadmap?: string[];
  roadmapPhases?: RoadmapPhase[];
  maturityStatus: string;
}

export const architectureRegistry: Record<string, ProductConfig> = {
  paai: {
    slug: "paai",
    badge: "ENTERPRISE PLATFORM",
    title: "PAAI",
    classification: "Enterprise Knowledge Platform",
    category: "Enterprise Knowledge Platform",
    description: "Transform Enterprise Knowledge into Intelligent Action. PAAI (Personal AI Assistance Interface) is an enterprise AI platform that securely connects your organization's documents, applications, databases, APIs, communication channels, and AI models into a single intelligent interface.\n\nRather than replacing existing systems, PAAI becomes the intelligence layer across the enterprise—understanding context, retrieving trusted information, executing business workflows, and providing secure AI assistance tailored to every user, team, and business function.\n\nBuilt on modern AI architecture including Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), enterprise RBAC, vector search, and multi-model AI orchestration, PAAI enables organizations to deploy trusted AI without compromising governance, privacy, or security.",
    kpis: [
      { label: "AI Models Supported", value: "Multi-Model" },
      { label: "Security & Governance", value: "Enterprise RBAC" }
    ],
    businessScenarioTitle: "Your Enterprise. One Intelligent Interface. Unlimited Possibilities.",
    businessScenarioDesc: "Most organizations have invested heavily in ERP, CRM, HRMS, Finance, SharePoint, emails, cloud storage, and countless business applications. Unfortunately, knowledge remains fragmented across systems, making information difficult to discover and business decisions slower than they should be.\n\nPAAI creates a unified enterprise intelligence layer that connects these systems and transforms organizational knowledge into immediate, secure, AI-powered assistance.",
    businessScenarioIconName: "brain",
    highlights: [
      { title: "Enterprise AI Platform", description: "Central AI platform connecting enterprise knowledge, systems, and people." },
      { title: "Secure Knowledge Intelligence", description: "Semantic search and Retrieval-Augmented Generation across enterprise documents with role-based security." },
      { title: "AI Vendor Independent", description: "Support for OpenAI, Ollama, Azure OpenAI, Anthropic, Google Gemini, Mistral and future AI providers through a pluggable architecture." },
      { title: "Enterprise Ready", description: "Built with security, governance, multi-tenancy, auditability, scalability, and compliance from day one." }
    ],
    stakeholders: [
      {
        title: "Executive Leadership",
        description: "Accelerate enterprise decision making by unifying fragmented organizational knowledge into immediate, secure intelligence.",
        benefits: ["Faster decision making", "Unified knowledge visibility", "Reduced operational costs"]
      },
      {
        title: "IT & Security Leadership",
        description: "Adopt future-proof technology without vendor lock-in, ensuring every response respects strict organizational RBAC and governance policies.",
        benefits: ["Vendor independence", "Enterprise security first", "Future-proof architecture"]
      },
      {
        title: "Operations Teams",
        description: "Scale efficiency by automating repetitive information retrieval, workflow execution, and document search.",
        benefits: ["Lower operational costs", "Process automation", "Instant knowledge retrieval"]
      },
      {
        title: "Knowledge Workers",
        description: "Break information silos by securely accessing structured and unstructured enterprise data through a single, compliant interface.",
        benefits: ["Increased productivity", "Contextual assistance", "Seamless tool integration"]
      }
    ],
    capabilities: [
      {
        title: "Enterprise Knowledge Intelligence",
        description: "Supports Enterprise RAG, Semantic Search, Vector Database Integration, Document Chunking, Intelligent Embedding Pipeline, Metadata-Based Filtering, and Context-Aware Responses."
      },
      {
        title: "AI Governance & Operations",
        description: "Supports Multi-Model AI Support, Dynamic AI Provider Configuration, Embedding Model Management, LLM Model Management, AI Vendor Independence, AI Performance Benchmarking, and Cost/Usage Monitoring."
      },
      {
        title: "Enterprise Connectivity",
        description: "Supports MCP Server Integration, REST APIs, Database Connectivity, Email Integration, Microsoft Teams, WhatsApp Business, SharePoint, Google Drive, File Servers, and ERP & CRM Integration."
      },
      {
        title: "Enterprise Security",
        description: "Includes Multi-Tenant Architecture, Role-Based Access Control (RBAC), Document-Level Authorization, Chunk-Level Security, Audit Logging, Secure Credential Management, and Encryption Support."
      },
      {
        title: "Workflow Orchestration",
        description: "Includes AI Assistants, Workflow Automation, Task Orchestration, Prompt Management, Agent Execution, Enterprise Tool Invocation, and Context Preservation."
      },
      {
        title: "Enterprise Administration",
        description: "Includes Tenant Management, User Management, AI Provider Management, Knowledge Base Management, Document Lifecycle, Configuration Management, and Monitoring Dashboard."
      }
    ],
    executiveArchitecture: "/images/architecture/PAAI_Executive_Business_Architecture_Diagram.png",
    technicalArchitecture: "/images/architecture/PAAI_Technical_Architecture_Diagram.png",
    architectureDescription: "PAAI is designed as a modular enterprise AI platform where each capability evolves independently while operating through a unified intelligence layer. This architecture allows organizations to securely integrate business systems, AI services, enterprise knowledge, and automation tools without disrupting existing investments.",
    architectureLayers: [
      {
        title: "Enterprise Channels",
        items: ["Web Portal", "Mobile Applications", "Microsoft Teams", "WhatsApp", "Slack", "Email", "MCP Clients", "Voice Assistants"]
      },
      {
        title: "Business Services",
        items: ["Workflow Orchestration", "ERP Integration", "CRM Integration", "Document Management", "Enterprise Automation"]
      },
      {
        title: "Intelligence Layer",
        items: ["Conversation Engine", "Context Management", "Prompt Orchestration", "RAG Engine", "Semantic Search", "Knowledge Graph"]
      },
      {
        title: "Platform Services",
        items: ["AI Provider Management", "LLM Management", "Embedding Services", "Prompt Library", "Model Registry", "Usage Analytics"]
      },
      {
        title: "Enterprise Foundation",
        items: ["Authentication", "Authorization", "Multi-Tenancy", "Role-Based Access Control", "Audit & Compliance", "Observability"]
      }
    ],
    useCases: [
      {
        title: "Enterprise Knowledge Assistant",
        description: "Employees ask questions in natural language and receive secure, context-aware answers from enterprise knowledge repositories.",
        iconName: "brain"
      },
      {
        title: "Executive AI Assistant",
        description: "Executives receive consolidated business intelligence from finance, operations, projects, and organizational knowledge through conversational interactions.",
        iconName: "activity"
      },
      {
        title: "Customer Service Assistant",
        description: "Support teams access policies, manuals, historical tickets, and knowledge articles instantly while assisting customers.",
        iconName: "shield"
      },
      {
        title: "Operations Command Center",
        description: "Operations teams retrieve SOPs, compliance documentation, incident reports, and operational intelligence using semantic search.",
        iconName: "settings"
      },
      {
        title: "Enterprise Document Intelligence",
        description: "Transform thousands of PDFs, Word documents, emails, contracts, manuals, and reports into an intelligent enterprise knowledge base.",
        iconName: "book"
      },
      {
        title: "AI Across Business Applications",
        description: "Connect ERP, CRM, HRMS, Finance, Procurement, and project management systems into one conversational enterprise interface.",
        iconName: "Network"
      },
      {
        title: "Department-Specific AI Assistants",
        description: "Deploy specialized AI assistants for Finance, HR, Legal, Sales, Operations, Commercial, Procurement, Engineering, and Executive leadership while maintaining centralized governance.",
        iconName: "scale"
      },
      {
        title: "AI-Powered Digital Workplace",
        description: "Provide employees with a single conversational interface for enterprise applications, documentation, workflows, approvals, and organizational knowledge.",
        iconName: "activity"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Foundation Platform",
        status: "Completed",
        items: [
          "Multi-Tenant Platform",
          "Enterprise Authentication",
          "RBAC Framework",
          "Enterprise RAG",
          "Vector Search",
          "MCP Server",
          "AI Provider Framework",
          "Semantic Search",
          "Audit Logging"
        ]
      },
      {
        phase: "Phase 2",
        title: "Enterprise Intelligence",
        status: "Current",
        items: [
          "Advanced Prompt Management",
          "Enterprise Memory",
          "AI Workflow Builder",
          "Document Ingestion Pipeline",
          "Multi-Knowledge Bases",
          "AI Analytics Dashboard",
          "Knowledge Graph Integration"
        ]
      },
      {
        phase: "Phase 3",
        title: "Autonomous Enterprise",
        status: "Planned",
        items: [
          "Multi-Agent Collaboration",
          "AI Business Process Automation",
          "Enterprise Planning Agents",
          "Decision Support Agents",
          "Autonomous Task Execution",
          "Cross-System AI Orchestration",
          "Human-in-the-Loop Governance"
        ]
      },
      {
        phase: "Phase 4",
        title: "Enterprise Intelligence Fabric",
        status: "Planned",
        items: [
          "Comprehensive Enterprise AI Operating Platform",
          "Secure, governed, and intelligent AI for every employee",
          "Enterprise intelligence fabric",
          "Connect knowledge, automation, AI models, and business operations into a unified digital workforce"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  },
  "sdlc-factory": {
    slug: "sdlc-factory",
    badge: "ENTERPRISE PLATFORM",
    title: "SDLC Factory",
    classification: "Enterprise Software Engineering Platform",
    category: "Enterprise Software Engineering Platform",
    description: "SDLC Factory is an enterprise platform that transforms the entire Software Development Lifecycle into an intelligent, structured, and repeatable engineering process. It combines AI-assisted requirements engineering, architecture design, data modeling, API design, quality engineering, DevOps automation, governance, and enterprise knowledge management within a unified digital workspace.\n\nRather than replacing engineering teams, SDLC Factory augments architects, analysts, developers, QA engineers, and project managers with AI-driven workflows that accelerate delivery while maintaining enterprise standards, traceability, and architectural integrity.\n\nBuilt using YnY's enterprise engineering methodology, the platform enables organizations to modernize software delivery, improve collaboration, reduce project risk, and establish a scalable foundation for enterprise software engineering.",
    kpis: [
      { label: "Engineering Governance", value: "End-to-End" },
      { label: "Delivery Speed", value: "Accelerated" }
    ],
    highlights: [
      { title: "AI-assisted requirements engineering" },
      { title: "Intelligent project discovery" },
      { title: "Epic and user story generation" },
      { title: "Requirement Freeze Framework" },
      { title: "BPMN workflow modeling" },
      { title: "Enterprise architecture design" },
      { title: "Data architecture modeling" },
      { title: "API specification generation" },
      { title: "AI-powered code generation" },
      { title: "Test case and QA automation" },
      { title: "DevOps pipeline orchestration" },
      { title: "Enterprise documentation generation" },
      { title: "Knowledge repository" },
      { title: "Governance and compliance" },
      { title: "Multi-agent engineering workspace" }
    ],
    stakeholders: [
      {
        title: "Product Owners",
        description: "Accelerate project initiation and maintain end-to-end traceability, ensuring exact alignment between business goals and implementation outcomes while reducing requirement ambiguity.",
        benefits: ["Faster project initiation", "Improved requirement clarity", "End-to-end traceability", "Better stakeholder collaboration", "Reduced requirement ambiguity", "Improved delivery predictability"]
      },
      {
        title: "Business Analysts",
        description: "Improve requirement quality and standardize business documentation through structured methodologies, workflow modeling, and comprehensive domain analysis.",
        benefits: ["Faster requirement elicitation", "Consistent business documentation", "AI-generated user stories", "BPMN workflow creation", "Improved business alignment", "Better requirement quality"]
      },
      {
        title: "Solution Architects",
        description: "Establish enterprise governance and design scalable solutions using reusable architecture patterns, standardized engineering practices, and integrated architectural blueprints.",
        benefits: ["Consistent architecture", "Reusable solution patterns", "Enterprise governance", "Faster solution design", "Improved technology alignment", "Architecture traceability"]
      },
      {
        title: "Development Teams",
        description: "Reduce technical debt and improve code consistency by adhering to structured implementation guidance, governed API contracts, and established coding standards.",
        benefits: ["Reduced development effort", "Improved code consistency", "Faster implementation", "Better documentation", "Reduced technical debt", "Higher productivity"]
      },
      {
        title: "QA Teams",
        description: "Improve defect prevention and increase release confidence by generating comprehensive testing strategies directly from traced business requirements.",
        benefits: ["Automated test generation", "Better requirement coverage", "Faster regression planning", "Improved defect prevention", "Requirement traceability", "Higher release confidence"]
      },
      {
        title: "Enterprise Leadership",
        description: "Gain portfolio visibility across engineering initiatives, reduce delivery risk, optimize resource utilization, and accelerate digital transformation through standardized governance.",
        benefits: ["Portfolio visibility", "Better governance", "Reduced delivery risk", "Engineering standardization", "Improved resource utilization", "Faster digital transformation"]
      }
    ],
    capabilities: [
      {
        title: "AI Discovery & Project Initialization",
        description: "Supports Project discovery, Vision definition, Scope analysis, Stakeholder identification, Business objective capture, Domain modeling, Project workspace creation, and AI project initialization."
      },
      {
        title: "Requirements Engineering",
        description: "Supports Business requirements, Functional requirements, Non-functional requirements, Epic generation, User story generation, Acceptance criteria, Traceability, and Version management."
      },
      {
        title: "Requirement Freeze Framework",
        description: "Illustrates lifecycle: Discovery → Requirements Engineering → L1 Context Freeze → Epic Decomposition → L2 Epic Freeze → Architecture Design → Development Ready → Governed Delivery."
      },
      {
        title: "Business Process Modeling",
        description: "Includes BPMN workflow generation, Business process visualization, Swimlane diagrams, Approval workflows, Decision modeling, Process optimization, Traceability, and Workflow documentation."
      },
      {
        title: "Enterprise Architecture",
        description: "Includes Business architecture, Application architecture, Solution architecture, Integration architecture, Security architecture, Cloud architecture, Technology selection, and Architecture governance."
      },
      {
        title: "Data Engineering",
        description: "Supports Domain models, Entity modeling, ER diagrams, Database design, Data governance, Master data, Metadata management, and Migration planning."
      },
      {
        title: "API & Integration",
        description: "Supports REST APIs, Event-driven architecture, API contracts, OpenAPI specifications, Integration workflows, Service orchestration, External systems, and API governance."
      },
      {
        title: "AI Engineering Workspace",
        description: "Supports Multi-agent collaboration, Knowledge context, AI engineering assistants, Prompt orchestration, Context management, Engineering recommendations, Documentation generation, and Workspace intelligence."
      },
      {
        title: "Quality Engineering",
        description: "Includes Test strategy, Test case generation, Regression planning, Requirement validation, Automation support, Coverage analysis, Quality metrics, and Release readiness."
      },
      {
        title: "DevOps Automation",
        description: "Includes CI/CD pipeline generation, Deployment workflows, Infrastructure templates, Containerization, Environment management, Release automation, Monitoring integration, and Operational readiness."
      },
      {
        title: "Administration",
        description: "Includes Workspace management, User management, Role-based access, Governance policies, Audit logging, Engineering standards, Analytics, and AI monitoring."
      }
    ],
    executiveArchitecture: "/images/architecture/SDLC_Factory_Executive_Business_Architecture.png",
    technicalArchitecture: "/images/architecture/SDLC_Factory_Technical_Architecture_Diagram.png",
    architectureDescription: "The SDLC Factory architecture connects AI-driven agents, engineering workflows, and governance controls into a scalable enterprise platform.",
    architectureLayers: [
      {
        title: "Experience Layer",
        items: ["Product Owner Workspace", "Business Analyst Workspace", "Architect Workspace", "Developer Workspace", "QA Workspace", "DevOps Workspace", "Executive Dashboard", "Administration Portal"]
      },
      {
        title: "Business Services",
        items: ["Project Service", "Requirements Service", "Epic Management", "User Story Service", "Architecture Service", "Data Modeling Service", "API Service", "Documentation Service", "Workflow Service", "Knowledge Repository", "Governance Service", "Analytics Service"]
      },
      {
        title: "Intelligence Layer",
        items: ["AI Requirement Generation", "AI Architecture Assistant", "AI Documentation Engine", "AI Engineering Agents", "Semantic Knowledge Graph", "Prompt Orchestration", "Recommendation Engine", "Engineering Intelligence"]
      },
      {
        title: "Platform Services",
        items: ["REST APIs", "Authentication", "Authorization", "Audit", "Workflow Engine", "Notification Service", "File Management", "Search Services"]
      },
      {
        title: "Infrastructure",
        items: ["Spring Boot Microservices", "PostgreSQL", "Redis", "Object Storage", "Docker", "Kubernetes Ready", "Kafka", "NGINX", "Cloud Deployment", "Monitoring", "Logging", "Backup & Recovery"]
      }
    ],
    useCases: [
      {
        title: "Enterprise Application Development",
        description: "Accelerate greenfield enterprise software delivery using AI-assisted engineering and standardized delivery practices.",
        iconName: "activity"
      },
      {
        title: "Legacy Modernization",
        description: "Modernize legacy systems through structured discovery, architecture redesign, migration planning, and phased implementation.",
        iconName: "settings"
      },
      {
        title: "Digital Transformation",
        description: "Deliver enterprise digital initiatives with consistent engineering governance, architecture standards, and AI-assisted delivery.",
        iconName: "brain"
      },
      {
        title: "Government Platforms",
        description: "Build secure, scalable, compliant public sector applications with complete requirement traceability and governance.",
        iconName: "shield"
      },
      {
        title: "Banking & Financial Services",
        description: "Design highly regulated financial platforms with standardized architecture, security, compliance, and integration workflows.",
        iconName: "scale"
      },
      {
        title: "Healthcare Systems",
        description: "Accelerate healthcare application delivery while maintaining interoperability, governance, and enterprise architecture standards.",
        iconName: "activity"
      },
      {
        title: "SaaS Product Engineering",
        description: "Support product companies with scalable engineering practices, reusable architectures, and AI-assisted product delivery.",
        iconName: "settings"
      },
      {
        title: "System Integrators",
        description: "Enable consulting firms and delivery partners to standardize engineering methodologies across multiple client engagements.",
        iconName: "brain"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Foundation",
        status: "Completed",
        items: [
          "Project workspace",
          "AI project discovery",
          "Requirements engineering",
          "Epic management",
          "User story generation",
          "Requirement Freeze Framework",
          "BPMN generation",
          "Documentation engine",
          "Core administration"
        ]
      },
      {
        phase: "Phase 2",
        title: "Requirements Intelligence",
        status: "Current",
        items: [
          "AI architecture assistant",
          "Data modeling",
          "API generation",
          "Knowledge repository",
          "AI engineering agents",
          "Engineering dashboards",
          "Governance framework",
          "Multi-agent collaboration"
        ]
      },
      {
        phase: "Phase 3",
        title: "Autonomous Delivery",
        status: "Planned",
        items: [
          "AI solution generation",
          "AI code generation",
          "Automated testing",
          "DevOps automation",
          "Deployment orchestration",
          "Enterprise integrations",
          "Engineering intelligence",
          "Continuous optimization"
        ]
      },
      {
        phase: "Phase 4",
        title: "Software Engineering Ecosystem",
        status: "Planned",
        items: [
          "Self-improving engineering platform",
          "Organization knowledge graph",
          "Cross-project intelligence",
          "Autonomous delivery recommendations",
          "Enterprise AI governance",
          "Industry-specific engineering accelerators",
          "Marketplace of reusable assets",
          "Global engineering collaboration"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  },
  aiuniverse: {
    slug: "aiuniverse",
    badge: "ENTERPRISE PLATFORM",
    title: "AI Universe",
    classification: "Enterprise AI Intelligence Platform",
    category: "Enterprise AI Intelligence Platform",
    description: "Navigate the rapidly evolving AI landscape with confidence. AI Universe transforms thousands of AI models, platforms, frameworks, applications, and vendors into structured, searchable business intelligence—helping organizations discover the right AI solutions, compare technologies, and accelerate adoption.\n\nArtificial Intelligence is evolving faster than most organizations can evaluate it.\n\nEvery week introduces new foundation models, AI applications, open-source frameworks, enterprise platforms, infrastructure providers, and specialized industry solutions. Technology leaders often struggle to distinguish innovation from marketing noise.\n\nAI Universe was created to solve this challenge.\n\nRather than acting as another AI directory, AI Universe serves as an intelligent knowledge platform that continuously organizes the AI ecosystem into meaningful business, technical, and architectural perspectives.\n\nWhether evaluating Generative AI, Machine Learning platforms, Enterprise AI vendors, AI Infrastructure, or industry-specific solutions, AI Universe enables faster discovery, informed comparisons, and better strategic decisions.",
    kpis: [
      { label: "AI Entities Indexed", value: "10,000+" },
      { label: "Market Intelligence", value: "Real-Time" }
    ],
    stakeholders: [
      {
        title: "Enterprise Architects",
        description: "Evaluate AI vendors, models, frameworks, and enterprise platforms using consistent comparison criteria to accelerate safe adoption.",
        benefits: ["Standardized evaluation", "Architecture alignment", "Risk reduction"]
      },
      {
        title: "Innovation Teams",
        description: "Reduce weeks of market research into minutes by discovering relevant AI technologies aligned perfectly with strategic business objectives.",
        benefits: ["Faster technology discovery", "Market visibility", "Accelerated innovation"]
      },
      {
        title: "Executive Leadership",
        description: "Gain an objective, structured view of the AI ecosystem to inform strategic technology investments and enterprise transformation.",
        benefits: ["Objective market intelligence", "Better investment decisions", "Reduced technology risk"]
      },
      {
        title: "Procurement Teams",
        description: "Understand how thousands of AI products relate across vendors and platforms to negotiate better contracts and avoid vendor lock-in.",
        benefits: ["Vendor transparency", "Avoid vendor lock-in", "Better technology overlap visibility"]
      },
      {
        title: "Strategy & Operations",
        description: "Track emerging technologies, vendor movements, product launches, acquisitions, and innovation trends from a single intelligence platform.",
        benefits: ["Continuous market intelligence", "Trend visibility", "Competitive advantage"]
      }
    ],
    capabilities: [
      {
        title: "AI Ecosystem Discovery",
        description: "Explore the complete AI landscape through an organized, searchable knowledge graph instead of disconnected web searches."
      },
      {
        title: "Intelligent Search",
        description: "Find AI technologies using natural language, business objectives, technical capabilities, industries, or architecture patterns."
      },
      {
        title: "AI Vendor Intelligence",
        description: "Discover leading vendors across every AI domain including Foundation Models, Enterprise AI, Agentic AI, AI Infrastructure, AI Security, AI Development Platforms, Data Platforms, Vector Databases, and RAG Platforms."
      },
      {
        title: "AI Product Comparison",
        description: "Compare multiple AI products side-by-side using standardized capability models including Features, Pricing Models, Deployment Options, Supported Models, Enterprise Readiness, Security, Integrations, Licensing, and Use Cases."
      },
      {
        title: "AI Landscape Explorer",
        description: "Navigate AI technologies visually through interconnected ecosystem maps that reveal relationships between vendors, products, technologies, and industries."
      },
      {
        title: "Enterprise AI Recommendations",
        description: "Receive intelligent recommendations based on Business goals, Industry, Organization size, Existing technology stack, Architecture preferences, and Budget considerations."
      },
      {
        title: "Multi-Persona Experience",
        description: "AI Universe delivers tailored experiences for Business Leaders, Enterprise Architects, AI Engineers, Product Teams, Researchers, Educators, Students, and Investors."
      },
      {
        title: "Knowledge Graph Intelligence",
        description: "AI Universe builds relationships between Models, Vendors, Technologies, Industries, Frameworks, Applications, Platforms, and Architecture Patterns, creating a continuously expanding AI knowledge graph."
      }
    ],
    executiveArchitecture: "/images/architecture/AI_Universe_Executive_Business_Architecture.png",
    technicalArchitecture: "/images/architecture/AI_Universe_Technical_Architecture_Diagram.png",
    architectureDescription: "AI Universe is designed as a continuously evolving AI intelligence platform composed of multiple interconnected layers.",
    architectureLayers: [
      {
        title: "Experience Layer",
        items: ["Executive View", "Business Explorer", "Technology Explorer", "AI Architect Workspace", "Research Workspace", "Comparison Workspace"]
      },
      {
        title: "Business Services",
        items: ["Enterprise Knowledge Platforms", "Internal AI Portals", "Decision Support Systems", "Innovation Platforms", "Learning Platforms", "External AI Applications"]
      },
      {
        title: "Intelligence Layer",
        items: ["AI Classification", "Semantic Search", "Vector Embeddings", "Taxonomy Engine", "Recommendation Models", "Similarity Detection", "Knowledge Graph"]
      },
      {
        title: "Knowledge Layer",
        items: ["Products", "Vendors", "Models", "Categories", "Capabilities", "Industries", "Technologies", "Relationships"]
      },
      {
        title: "Infrastructure",
        items: ["AI Vendors", "Research Publications", "Documentation", "Product Releases", "Open Source Projects", "Industry Reports", "Public APIs"]
      }
    ],
    useCases: [
      {
        title: "Enterprise AI Strategy",
        description: "Technology leaders evaluate the AI landscape before selecting enterprise AI platforms.",
        iconName: "brain"
      },
      {
        title: "AI Vendor Shortlisting",
        description: "Procurement teams compare competing vendors using standardized evaluation criteria.",
        iconName: "settings"
      },
      {
        title: "Digital Transformation",
        description: "Organizations identify AI opportunities aligned with strategic business initiatives.",
        iconName: "activity"
      },
      {
        title: "Enterprise Architecture",
        description: "Architecture teams understand how AI technologies integrate into existing enterprise ecosystems.",
        iconName: "shield"
      },
      {
        title: "Innovation Teams",
        description: "Research emerging AI capabilities before launching proof-of-concepts.",
        iconName: "activity"
      },
      {
        title: "Consulting & Advisory",
        description: "Consultants rapidly identify suitable AI solutions for client engagements.",
        iconName: "scale"
      },
      {
        title: "Education & Research",
        description: "Universities and research organizations use AI Universe as a structured learning platform for understanding the evolving AI ecosystem.",
        iconName: "book"
      },
      {
        title: "Investment Intelligence",
        description: "Investors, analysts, and venture teams monitor AI vendors, technology categories, and market movements.",
        iconName: "activity"
      },
      {
        title: "Product Strategy",
        description: "Software companies analyze competing AI capabilities and identify technology opportunities.",
        iconName: "settings"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Foundation",
        status: "Completed",
        items: [
          "AI ecosystem taxonomy",
          "Vendor registry",
          "Product catalog",
          "AI category classification",
          "Enterprise search",
          "Knowledge normalization"
        ]
      },
      {
        phase: "Phase 2",
        title: "Knowledge Intelligence",
        status: "Current",
        items: [
          "Relationship engine",
          "Technology graph",
          "Similar product discovery",
          "Vendor ecosystem mapping",
          "Architecture visualization"
        ]
      },
      {
        phase: "Phase 3",
        title: "Decision Intelligence",
        status: "Planned",
        items: [
          "Personalized recommendations",
          "Enterprise technology matching",
          "AI adoption advisor",
          "Business requirement mapping",
          "Industry-specific recommendations"
        ]
      },
      {
        phase: "Phase 4",
        title: "Global AI Intelligence Network",
        status: "Planned",
        items: [
          "Daily AI news intelligence",
          "Vendor monitoring",
          "Product launch tracking",
          "Technology trend analysis",
          "Investment insights",
          "Market movement dashboards"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  },
  legalpa: {
    slug: "legalpa",
    badge: "ENTERPRISE PLATFORM",
    title: "Legal PA",
    classification: "Enterprise Legal Platform",
    category: "Enterprise Legal Platform",
    description: "Legal PA is an Enterprise Legal Platform designed to modernize legal research, compliance monitoring, and judicial intelligence. It unifies fragmented statutory databases, judicial precedents, and regulatory codes into a single, highly structured legal knowledge graph.\n\nRather than relying on manual keyword searches across disjointed systems, legal professionals can instantly discover relevant statutes, track historical amendments, explore citation networks, and receive intelligent legal summaries.\n\nBuilt on a foundation of semantic search, knowledge graphs, and large language models (LLMs), Legal PA delivers an enterprise-grade legal intelligence layer that ensures precision, trustworthiness, and comprehensive legal insight.",
    kpis: [
      { label: "Search Paradigm", value: "Semantic" },
      { label: "Knowledge Graph", value: "Connected" }
    ],
    vision: "To become the world's most comprehensive AI-powered legal intelligence platform, enabling trusted access to laws, judicial knowledge and legal insights across jurisdictions.",
    mission: "Empower legal professionals, organizations and citizens with intelligent access to reliable legal knowledge through AI-assisted discovery, research and legal intelligence.",
    highlights: [
      { title: "Unified legal knowledge repository" },
      { title: "AI-powered legal search" },
      { title: "Constitution, Acts and Rules library" },
      { title: "Judicial decision intelligence" },
      { title: "Legal citation management" },
      { title: "Cross-reference navigation" },
      { title: "Semantic legal research" },
      { title: "Regulatory monitoring" },
      { title: "Compliance intelligence" },
      { title: "Enterprise-grade legal platform" }
    ],
    stakeholders: [
      {
        title: "Legal Professionals",
        description: "Accelerate legal research and significantly reduce the time required to locate statutes, judicial precedents, and regulatory information. Intelligently connect legal provisions to focus entirely on legal strategy.",
        benefits: ["Faster legal research", "Improved legal accuracy", "AI-assisted case analysis", "Trusted legal references", "Intelligent document discovery", "Better client service"]
      },
      {
        title: "Law Firms",
        description: "Improve collaboration, research consistency, and operational efficiency across practice areas through a centralized enterprise knowledge platform.",
        benefits: ["Shared legal knowledge", "Faster case preparation", "Improved research productivity", "Standardized legal references", "Team collaboration", "Knowledge retention"]
      },
      {
        title: "Corporate Legal Teams",
        description: "Reduce risk and ensure continuous visibility into legal obligations, regulatory updates, and compliance requirements.",
        benefits: ["Regulatory visibility", "Compliance monitoring", "Risk reduction", "Faster legal reviews", "Corporate governance support", "Policy alignment"]
      },
      {
        title: "Government Departments",
        description: "Support transparency and digital governance initiatives by standardizing access to legislation, policy documents, and legal guidance."
      },
      {
        title: "Academic Institutions",
        description: "Accelerate academic research and learning through structured access to legal knowledge, judicial history, and semantic legal exploration."
      }
    ],
    capabilities: [
      {
        title: "Legal Knowledge Repository",
        description: "Supports Constitutions, Acts, Rules, Regulations, Notifications, Circulars, Government Orders, Policies, Legal Manuals, and Practice Guides."
      },
      {
        title: "AI Legal Research",
        description: "Includes natural language search, semantic legal search, citation discovery, related legislation, related judgments, similar legal concepts, AI summaries, and legal interpretation assistance."
      },
      {
        title: "Judicial Intelligence",
        description: "Includes case law search, court hierarchy, citation network, judgment analysis, related precedents, legal principle extraction, and historical decisions."
      },
      {
        title: "Legal Knowledge Graph",
        description: "Illustrates relationships: Constitution → Acts → Rules → Notifications → Judgments → Legal Interpretation → Compliance Guidance → Legal Intelligence."
      },
      {
        title: "Regulatory Monitoring",
        description: "Supports legislative updates, amendment tracking, gazette monitoring, circular updates, notification alerts, compliance changes, and version history."
      },
      {
        title: "Legal Workspace",
        description: "Includes saved research, bookmarks, collections, notes, document comparison, citation management, and research history."
      },
      {
        title: "Administration",
        description: "Includes User Management, Role-based Access, Content Management, Knowledge Taxonomy, AI Configuration, Audit Logs, Usage Analytics, and Platform Monitoring."
      }
    ],
    executiveArchitecture: "/images/architecture/Legal_PA_Executive_Business_Architecture.png",
    technicalArchitecture: "/images/architecture/Legal_PA_Technical_Architecture_Diagram.png",
    architectureDescription: "The Legal PA architecture connects vast statutory databases and judicial precedents into a secure, scalable, and intelligent cloud-native legal platform.",
    architectureLayers: [
      {
        title: "Experience Layer",
        items: ["Lawyer Portal", "Law Firm Portal", "Corporate Legal Portal", "Government Portal", "Research Portal", "Administration Portal"]
      },
      {
        title: "Business Services",
        items: ["Identity Management", "Legal Repository Service", "Search Service", "Knowledge Graph Service", "Citation Service", "AI Intelligence Service", "Notification Service", "Analytics Service"]
      },
      {
        title: "Intelligence Layer",
        items: ["Large Language Models", "Semantic Search", "Legal Knowledge Graph", "Citation Engine", "AI Research Assistant", "Ranking Engine", "Recommendation Engine"]
      },
      {
        title: "Platform Services",
        items: ["REST APIs", "Authentication", "Authorization", "Audit", "Document Storage", "OCR Services", "Workflow Engine", "Notification Framework"]
      },
      {
        title: "Infrastructure",
        items: ["Spring Boot Microservices", "PostgreSQL", "Elasticsearch / OpenSearch", "Redis", "Object Storage", "Docker", "Kubernetes Ready", "Cloud Deployment", "Monitoring", "Logging", "Backup & Disaster Recovery"]
      }
    ],
    useCases: [
      {
        title: "Legal Departments",
        description: "Research statutes, judgments and legal precedents within a unified AI-assisted legal workspace.",
        iconName: "scale"
      },
      {
        title: "Law Firms",
        description: "Improve research productivity and standardize legal knowledge across practice teams.",
        iconName: "activity"
      },
      {
        title: "Corporate Compliance",
        description: "Track regulatory obligations, perform legal reviews and support compliance initiatives.",
        iconName: "shield"
      },
      {
        title: "Government Operations",
        description: "Provide centralized access to legislation, notifications and policy documents.",
        iconName: "settings"
      },
      {
        title: "Risk & Policy Executives",
        description: "Monitor regulatory changes and assess organizational compliance requirements.",
        iconName: "activity"
      },
      {
        title: "Legal Research Units",
        description: "Explore legal relationships, historical amendments and judicial interpretations using semantic search.",
        iconName: "brain"
      },
      {
        title: "Universities",
        description: "Support legal education through structured legal knowledge, AI-assisted research and authoritative legal references.",
        iconName: "book"
      },
      {
        title: "Citizen Services",
        description: "Understand laws, legal rights and government regulations through accessible legal information and intelligent search.",
        iconName: "scale"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Foundation",
        status: "Completed",
        items: [
          "Constitution repository",
          "Acts library",
          "Rules & regulations",
          "Legal document management",
          "Authentication",
          "Administration portal",
          "Search foundation",
          "Core APIs"
        ]
      },
      {
        phase: "Phase 2",
        title: "Semantic Legal Search",
        status: "Current",
        items: [
          "Semantic legal search",
          "AI legal assistant",
          "Citation intelligence",
          "Knowledge graph",
          "Judicial intelligence",
          "Regulatory monitoring",
          "Personalized research workspace",
          "Analytics dashboards"
        ]
      },
      {
        phase: "Phase 3",
        title: "Legal Intelligence",
        status: "Planned",
        items: [
          "Contract intelligence",
          "Compliance management",
          "Legal workflow automation",
          "Document comparison",
          "Enterprise integrations",
          "Collaboration workspace",
          "AI legal drafting assistance"
        ]
      },
      {
        phase: "Phase 4",
        title: "Connected Legal Ecosystem",
        status: "Planned",
        items: [
          "Multi-jurisdiction legal databases",
          "International legal research",
          "Cross-border compliance intelligence",
          "Multilingual legal platform",
          "AI legal advisor",
          "Legal ecosystem partnerships",
          "Global legal knowledge graph"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  },
  "global-tutor": {
    slug: "global-tutor",
    badge: "ENTERPRISE PLATFORM",
    title: "Global Tutor",
    classification: "Enterprise Learning Platform",
    category: "Enterprise Learning Platform",
    description: "Global Tutor is an Enterprise Learning Platform that connects learners, educators, institutions, coaching organizations, and enterprise education programmes through governed knowledge, verified expertise, intelligent discovery, and AI-assisted learning services.\n\nGlobal Tutor is built on the principle that modern education requires governed knowledge, verified expertise, intelligent discovery, and connected learning ecosystems—not isolated tutoring platforms.\n\nBuilt using YnY's enterprise engineering methodology, the platform combines learning orchestration, AI-assisted search, verified educator profiles, structured learning pathways, multilingual support, and scalable cloud architecture into a single ecosystem designed for modern education.",
    kpis: [
      { label: "Verified Faculty", value: "Global Network" },
      { label: "Learning Orchestration", value: "End-to-End" }
    ],
    highlights: [
      { title: "Verified Faculty Network" },
      { title: "Intelligent Learning Network" },
      { title: "Learning Orchestration" },
      { title: "Institution Management" },
      { title: "AI Discovery" },
      { title: "Enterprise Administration" },
      { title: "Education Analytics" },
      { title: "Governed Learning" },
      { title: "Digital Educator Profiles" },
      { title: "Enterprise-grade platform architecture" }
    ],
    stakeholders: [
      {
        title: "Students",
        description: "Accelerate learning outcomes by intelligently matching educational requirements with verified faculty, courses, and educational services globally.",
        benefits: ["Faster faculty discovery", "Better learning outcomes", "Personalized recommendations", "Transparent educator profiles", "Verified teaching experience", "Simplified communication"]
      },
      {
        title: "Teachers",
        description: "Build professional digital portfolios and receive intelligent student matches based on verified expertise and teaching methodology.",
        benefits: ["Showcase qualifications & certifications", "Manage subjects & boards", "Define availability & language preferences", "Display student reviews", "Build digital portfolios"]
      },
      {
        title: "Educational Institutions",
        description: "Increase institutional visibility and streamline student acquisition through an enterprise directory and intelligent inquiry routing."
      },
      {
        title: "Families & Guardians",
        description: "Reduce educational risk and gain confidence through verified educator credentials, AI recommendations, and transparent performance reviews."
      },
      {
        title: "Education Businesses",
        description: "Accelerate business growth by participating in a shared, governed ecosystem that matches educational services with precise learning needs."
      }
    ],
    capabilities: [
      {
        title: "AI Discovery Engine",
        description: "Supports subject, class, board, curriculum, skill, location, online learning, offline learning, language preferences, and budget preferences search query dimensions."
      },
      {
        title: "Learning Orchestration Engine",
        description: "Manages the complete matching lifecycle: Student Requirement → AI Matching → Teacher Interest → Shortlisting → Communication → Enrollment → Learning → Feedback → Long-term Relationship."
      },
      {
        title: "Educator Management",
        description: "End-to-end registration, verification, profile completion, qualification verification, subject/board expertise mapping, availability management, and professional portfolios."
      },
      {
        title: "Student Requirement Management",
        description: "Allows students to publish structured learning requirements (subject, class, board, goals, schedule, budget, language, and mode) for automated AI recommendation routing."
      },
      {
        title: "Institution Directory",
        description: "Dedicated profile portals and query routing engines for Schools, Colleges, Universities, Coaching Centers, Online Academies, Training Institutes, and Skill Centers."
      },
      {
        title: "AI Recommendation Engine",
        description: "Analyzes matching signals: subject expertise, teaching experience, student preferences, geography, language, schedule compatibility, historical success, and platform engagement."
      },
      {
        title: "Communication Platform",
        description: "Streamlined secure environment for inquiry management, real-time messaging, updates notification, interview scheduling, and enrollment workflows."
      },
      {
        title: "Administrative Console",
        description: "Centralized panel for user management, identity verification, learning network moderation, business analytics, reporting, taxonomy control, and AI model monitoring."
      }
    ],
    executiveArchitecture: "/images/architecture/Global_Tutor_Executive_Business_Architecture.png",
    technicalArchitecture: "/images/architecture/Global_Tutor_Technical_Architecture_Diagram.png",
    architectureDescription: "Global Tutor integrates adaptive learning agents, availability matching, and automated certifications.",
    architectureLayers: [
      {
        title: "Experience Layer",
        items: ["Student Portal", "Teacher Portal", "Institution Portal", "Parent Portal", "Administration Portal"]
      },
      {
        title: "Business Services",
        items: ["Identity Management", "Teacher Service", "Student Service", "Institution Service", "Marketplace Service", "Search Service", "Recommendation Engine", "Communication Service", "Analytics Service", "Notification Service"]
      },
      {
        title: "Intelligence Layer",
        items: ["AI Search", "AI Matching", "Recommendation Engine", "Knowledge Graph", "Ranking Engine", "Semantic Search"]
      },
      {
        title: "Platform Services",
        items: ["REST APIs", "Authentication", "Authorization", "Audit", "Media Storage", "Document Management", "Workflow Engine"]
      },
      {
        title: "Infrastructure",
        items: ["Spring Boot Microservices", "PostgreSQL", "Redis", "Object Storage", "Docker", "Kubernetes Ready", "CDN", "Cloud Deployment", "Monitoring", "Logging", "Backup"]
      }
    ],
    useCases: [
      {
        title: "Students",
        description: "Discover the best educator based on learning goals.",
        iconName: "book"
      },
      {
        title: "Independent Faculty",
        description: "Build a verified professional presence and receive qualified inquiries through intelligent matching.",
        iconName: "activity"
      },
      {
        title: "Families & Guardians",
        description: "Find trusted educators with verified credentials, governed learning pathways, and complete learning visibility.",
        iconName: "shield"
      },
      {
        title: "Educational Institutions",
        description: "Promote institutional programs, facilitate institutional collaboration, and expand global reach.",
        iconName: "settings"
      },
      {
        title: "Corporate Learning Teams",
        description: "Orchestrate employee skill development using verified learning pathways and intelligent discovery.",
        iconName: "brain"
      },
      {
        title: "Coaching Organizations",
        description: "Generate qualified inquiries and manage learning delivery using an enterprise education ecosystem.",
        iconName: "activity"
      },
      {
        title: "Government Education Programs",
        description: "Support education accessibility through governed learning platforms and centralized educator discovery.",
        iconName: "shield"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Foundation",
        status: "Completed",
        items: [
          "Teacher onboarding",
          "Student onboarding",
          "Verification workflows",
          "Search engine",
          "Learning network foundation",
          "Profile management",
          "Administration portal",
          "Authentication",
          "Core APIs"
        ]
      },
      {
        phase: "Phase 2",
        title: "Intelligent Learning Network",
        status: "Current",
        items: [
          "AI-powered recommendations",
          "Requirement orchestration",
          "Intelligent matching",
          "Institution onboarding",
          "Enhanced search",
          "Communication workflows",
          "Analytics dashboards"
        ]
      },
      {
        phase: "Phase 3",
        title: "Connected Learning Ecosystem",
        status: "Planned",
        items: [
          "Course marketplace",
          "Learning pathways",
          "Student progress tracking",
          "AI learning assistant",
          "Digital classrooms",
          "Assessment modules",
          "International expansion",
          "Multilingual platform",
          "Cross-border education discovery",
          "Global institution partnerships",
          "Education ecosystem analytics"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  }
};

export function getProductConfig(slug: string): ProductConfig {
  const config = architectureRegistry[slug];
  if (!config) {
    throw new Error(`Product architecture configuration not found for slug: ${slug}`);
  }
  return config;
}
