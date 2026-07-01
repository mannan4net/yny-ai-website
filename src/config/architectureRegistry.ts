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
  title: string;
  category: string;
  description: string;
  
  // Overview - Optional Vision & Mission
  vision?: string;
  mission?: string;
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
    title: "Transform Enterprise Knowledge into Intelligent Action",
    category: "Enterprise AI Operating Platform",
    description: "PAAI (Personal AI Assistance Interface) is an enterprise AI platform that securely connects your organization's documents, applications, databases, APIs, communication channels, and AI models into a single intelligent interface.\n\nRather than replacing existing systems, PAAI becomes the intelligence layer across the enterprise—understanding context, retrieving trusted information, executing business workflows, and providing secure AI assistance tailored to every user, team, and business function.\n\nBuilt on modern AI architecture including Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), enterprise RBAC, vector search, and multi-model AI orchestration, PAAI enables organizations to deploy trusted AI without compromising governance, privacy, or security.",
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
        title: "Unified Enterprise Knowledge",
        description: "Break information silos by securely connecting structured and unstructured enterprise data."
      },
      {
        title: "AI Without Vendor Lock-in",
        description: "Adopt AI technologies confidently while retaining complete flexibility to switch providers whenever business needs evolve."
      },
      {
        title: "Enterprise Security First",
        description: "Every AI response respects organizational RBAC, tenant boundaries, document sensitivity, and enterprise governance policies."
      },
      {
        title: "Faster Decision Making",
        description: "Reduce the time spent searching documents, systems, emails, and reports by delivering contextual answers instantly."
      },
      {
        title: "Lower Operational Costs",
        description: "Automate repetitive information retrieval, knowledge discovery, document search, and workflow execution."
      },
      {
        title: "Future-Proof AI Platform",
        description: "Designed to continuously adopt emerging AI models, enterprise tools, and automation technologies without architectural redesign."
      }
    ],
    capabilities: [
      {
        title: "Enterprise Knowledge Intelligence",
        description: "Supports Enterprise RAG, Semantic Search, Vector Database Integration, Document Chunking, Intelligent Embedding Pipeline, Metadata-Based Filtering, and Context-Aware Responses."
      },
      {
        title: "AI Platform Management",
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
        title: "Intelligent Automation",
        description: "Includes AI Assistants, Workflow Automation, Task Orchestration, Prompt Management, Agent Execution, Enterprise Tool Invocation, and Context Preservation."
      },
      {
        title: "Administration",
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
        title: "Intelligence Layer",
        items: ["Conversation Engine", "Context Management", "Prompt Orchestration", "AI Decision Engine", "Memory Management"]
      },
      {
        title: "AI Platform",
        items: ["AI Provider Management", "LLM Management", "Embedding Services", "Prompt Library", "Model Registry", "AI Configuration", "Usage Analytics"]
      },
      {
        title: "Enterprise Knowledge",
        items: ["RAG Engine", "Vector Store", "Document Repository", "Semantic Search", "Knowledge Graph (Future)", "Metadata Engine"]
      },
      {
        title: "Business Integration",
        items: ["ERP", "CRM", "Finance", "HRMS", "Project Management", "Document Management", "APIs", "Databases", "External MCP Tools"]
      },
      {
        title: "Enterprise Foundation",
        items: ["Authentication", "Authorization", "Multi-Tenancy", "Audit", "Monitoring", "Security", "Configuration", "Observability"]
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
        title: "Future Vision",
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
    title: "SDLC Factory",
    category: "AI Software Engineering Platform",
    description: "SDLC Factory is an enterprise AI platform that transforms the entire Software Development Lifecycle into an intelligent, structured, and repeatable engineering process. It combines AI-assisted requirements engineering, architecture design, data modeling, API design, quality engineering, DevOps automation, governance, and enterprise knowledge management within a unified digital workspace.\n\nRather than replacing engineering teams, SDLC Factory augments architects, analysts, developers, QA engineers, and project managers with AI-driven workflows that accelerate delivery while maintaining enterprise standards, traceability, and architectural integrity.\n\nBuilt using YnY's enterprise engineering methodology, the platform enables organizations to modernize software delivery, improve collaboration, reduce project risk, and establish a scalable foundation for AI-assisted software engineering.",
    vision: "To become the world's most intelligent AI Software Engineering Platform, enabling organizations to design, build, govern, and evolve enterprise software with speed, consistency, and confidence.",
    mission: "Empower engineering teams with AI-driven automation, structured methodologies, reusable knowledge, and enterprise governance to deliver high-quality software faster and more efficiently.",
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
        description: "Product Owners gain a structured environment to transform business ideas into well-defined engineering initiatives. AI assists in capturing business objectives, generating epics and user stories, maintaining requirement traceability, and ensuring alignment between business goals and implementation.",
        benefits: ["Faster project initiation", "Improved requirement clarity", "End-to-end traceability", "Better stakeholder collaboration", "Reduced requirement ambiguity", "Improved delivery predictability"]
      },
      {
        title: "Business Analysts",
        description: "Business Analysts accelerate requirement gathering through AI-assisted discovery, structured templates, domain knowledge, workflow modeling, and automated documentation.",
        benefits: ["Faster requirement elicitation", "Consistent business documentation", "AI-generated user stories", "BPMN workflow creation", "Improved business alignment", "Better requirement quality"]
      },
      {
        title: "Solution Architects",
        description: "Architects can design scalable enterprise solutions using AI-assisted architecture recommendations, reusable design patterns, integration blueprints, and standardized engineering practices.",
        benefits: ["Consistent architecture", "Reusable solution patterns", "Enterprise governance", "Faster solution design", "Improved technology alignment", "Architecture traceability"]
      },
      {
        title: "Development Teams",
        description: "Developers receive structured implementation guidance, API contracts, database models, coding standards, and AI-assisted development support.",
        benefits: ["Reduced development effort", "Improved code consistency", "Faster implementation", "Better documentation", "Reduced technical debt", "Higher productivity"]
      },
      {
        title: "QA Teams",
        description: "Quality engineers generate comprehensive testing strategies directly from requirements, ensuring complete validation and improved software quality.",
        benefits: ["Automated test generation", "Better requirement coverage", "Faster regression planning", "Improved defect prevention", "Requirement traceability", "Higher release confidence"]
      },
      {
        title: "Enterprise Leadership",
        description: "Executives gain visibility across engineering initiatives through governance, delivery metrics, AI insights, and standardized engineering processes.",
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
        title: "Intelligent Engineering Workspace",
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
        title: "Autonomous SDLC Factory",
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
        title: "Enterprise Engineering Ecosystem",
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
    title: "AI Universe",
    category: "Enterprise AI Intelligence Platform",
    description: "Navigate the rapidly evolving AI landscape with confidence. AI Universe transforms thousands of AI models, platforms, frameworks, applications, and vendors into structured, searchable business intelligence—helping organizations discover the right AI solutions, compare technologies, and accelerate adoption.\n\nArtificial Intelligence is evolving faster than most organizations can evaluate it.\n\nEvery week introduces new foundation models, AI applications, open-source frameworks, enterprise platforms, infrastructure providers, and specialized industry solutions. Technology leaders often struggle to distinguish innovation from marketing noise.\n\nAI Universe was created to solve this challenge.\n\nRather than acting as another AI directory, AI Universe serves as an intelligent knowledge platform that continuously organizes the AI ecosystem into meaningful business, technical, and architectural perspectives.\n\nWhether evaluating Generative AI, Machine Learning platforms, Enterprise AI vendors, AI Infrastructure, or industry-specific solutions, AI Universe enables faster discovery, informed comparisons, and better strategic decisions.",
    vision: "Become the trusted intelligence layer for understanding the global AI ecosystem.\n\nAI Universe enables organizations to answer questions such as:\n- Which AI solutions best fit our business?\n- Which vendors dominate a particular domain?\n- How do competing models compare?\n- What technologies are emerging?\n- Which platforms integrate together?\n- What architecture patterns are becoming industry standards?",
    stakeholders: [
      {
        title: "Strategic Technology Evaluation",
        description: "Evaluate AI vendors, models, frameworks, and enterprise platforms using consistent comparison criteria instead of relying on marketing material."
      },
      {
        title: "Faster AI Adoption",
        description: "Reduce weeks of market research into minutes by discovering relevant AI technologies based on business objectives."
      },
      {
        title: "Executive Decision Support",
        description: "Provide CIOs, CTOs, Enterprise Architects, Innovation Teams, and Digital Transformation Leaders with an objective view of the AI ecosystem before making technology investments."
      },
      {
        title: "AI Landscape Visibility",
        description: "Understand how thousands of AI products relate across Foundation Models, AI Applications, AI Infrastructure, AI Frameworks, AI Platforms, AI Services, AI Vendors, and Industry Solutions."
      },
      {
        title: "Continuous Market Intelligence",
        description: "Track emerging technologies, vendor movements, product launches, acquisitions, and innovation trends from a single intelligence platform."
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
        title: "AI Data Collection Layer",
        items: ["AI Vendors", "Research Publications", "Documentation", "Product Releases", "Open Source Projects", "Industry Reports", "Public APIs"]
      },
      {
        title: "Knowledge Processing Layer",
        items: ["Products", "Vendors", "Models", "Categories", "Capabilities", "Industries", "Technologies", "Relationships"]
      },
      {
        title: "Intelligence Engine",
        items: ["AI Classification", "Semantic Search", "Vector Embeddings", "Taxonomy Engine", "Recommendation Models", "Similarity Detection", "Knowledge Graph"]
      },
      {
        title: "Experience Layer",
        items: ["Executive View", "Business Explorer", "Technology Explorer", "AI Architect Workspace", "Research Workspace", "Comparison Workspace"]
      },
      {
        title: "API & Integration Layer",
        items: ["Enterprise Knowledge Platforms", "Internal AI Portals", "Decision Support Systems", "Innovation Platforms", "Learning Platforms", "External AI Applications"]
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
        title: "AI Intelligence Foundation",
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
        title: "AI Knowledge Graph",
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
        title: "AI Recommendation Engine",
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
        title: "AI Market Intelligence",
        status: "Planned",
        items: [
          "Daily AI news intelligence",
          "Vendor monitoring",
          "Product launch tracking",
          "Technology trend analysis",
          "Investment insights",
          "Market movement dashboards"
        ]
      },
      {
        phase: "Phase 5",
        title: "Enterprise Intelligence Platform",
        status: "Planned",
        items: [
          "Transform AI Universe into the world's most comprehensive enterprise AI intelligence platform",
          "Support technology discovery and architecture planning",
          "Support procurement, learning, and research",
          "Enable strategic AI decision-making from a single ecosystem"
        ]
      }
    ],
    maturityStatus: "Phase 2 Current"
  },
  legalpa: {
    slug: "legalpa",
    title: "Legal PA",
    category: "Legal Intelligence Platform",
    description: "Legal PA is an enterprise legal intelligence platform that brings together constitutions, statutes, acts, rules, regulations, judicial decisions, notifications, circulars and legal reference materials into a unified AI-powered knowledge ecosystem.\n\nDesigned for lawyers, law firms, corporate legal departments, compliance teams, government agencies, researchers and students, the platform enables users to discover legal information faster, understand legal relationships, monitor regulatory changes and obtain AI-assisted legal insights while maintaining complete traceability to authoritative legal sources.\n\nBuilt using YnY's enterprise engineering methodology, Legal PA combines semantic search, legal knowledge graphs, intelligent document discovery, citation management and scalable cloud-native architecture into a single platform for modern legal practice.",
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
        description: "Legal PA significantly reduces the time required to locate statutes, judicial precedents and regulatory information.\n\nThe platform intelligently connects related legal provisions, judicial interpretations and historical amendments, enabling lawyers to focus on legal strategy rather than manual research.",
        benefits: ["Faster legal research", "Improved legal accuracy", "AI-assisted case analysis", "Trusted legal references", "Intelligent document discovery", "Better client service"]
      },
      {
        title: "Law Firms",
        description: "Law firms gain a centralized legal knowledge platform that improves collaboration, research consistency and operational efficiency across practice areas.",
        benefits: ["Shared legal knowledge", "Faster case preparation", "Improved research productivity", "Standardized legal references", "Team collaboration", "Knowledge retention"]
      },
      {
        title: "Corporate Legal & Compliance Teams",
        description: "Organizations can continuously monitor legal obligations, regulatory updates and compliance requirements while maintaining access to current legal references.",
        benefits: ["Regulatory visibility", "Compliance monitoring", "Risk reduction", "Faster legal reviews", "Corporate governance support", "Policy alignment"]
      },
      {
        title: "Government & Public Sector",
        description: "Government departments and regulatory bodies can improve access to legislation, policy documents and legal guidance while supporting transparency and digital governance initiatives."
      },
      {
        title: "Students & Researchers",
        description: "Students, universities and researchers receive structured access to legal knowledge, judicial history and AI-assisted legal exploration that supports learning and academic research."
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
        title: "Lawyers",
        description: "Research statutes, judgments and legal precedents within a unified AI-assisted legal workspace.",
        iconName: "scale"
      },
      {
        title: "Law Firms",
        description: "Improve research productivity and standardize legal knowledge across practice teams.",
        iconName: "activity"
      },
      {
        title: "Corporate Legal Teams",
        description: "Track regulatory obligations, perform legal reviews and support compliance initiatives.",
        iconName: "shield"
      },
      {
        title: "Government Departments",
        description: "Provide centralized access to legislation, notifications and policy documents.",
        iconName: "settings"
      },
      {
        title: "Compliance Officers",
        description: "Monitor regulatory changes and assess organizational compliance requirements.",
        iconName: "activity"
      },
      {
        title: "Legal Researchers",
        description: "Explore legal relationships, historical amendments and judicial interpretations using semantic search.",
        iconName: "brain"
      },
      {
        title: "Universities",
        description: "Support legal education through structured legal knowledge, AI-assisted research and authoritative legal references.",
        iconName: "book"
      },
      {
        title: "Citizens",
        description: "Understand laws, legal rights and government regulations through accessible legal information and intelligent search.",
        iconName: "scale"
      }
    ],
    roadmapPhases: [
      {
        phase: "Phase 1",
        title: "Legal Knowledge Foundation",
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
        title: "AI Legal Intelligence",
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
        title: "Enterprise Legal Platform",
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
        title: "Global Legal Intelligence Network",
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
    title: "Global Tutor",
    category: "Learning Ecosystem",
    description: "Global Tutor is an intelligent education platform that connects students, educators, institutions, coaching centers, online academies, educational consultants, and learning partners through a unified digital ecosystem.\n\nRather than functioning as a traditional tutoring marketplace, Global Tutor creates an intelligent education network where learners discover the right educational opportunities, educators build professional digital identities, institutions expand their reach, and AI continuously improves discovery, matching, communication, and learning outcomes.\n\nBuilt using YnY's enterprise engineering methodology, the platform combines marketplace technology, AI-assisted search, verified educator profiles, structured learning pathways, multilingual support, and scalable cloud architecture into a single ecosystem designed for modern education.",
    vision: "To become the world's most intelligent education ecosystem where every learner can discover the right educational opportunity regardless of geography, language, or learning style.",
    mission: "Enable accessible, trustworthy and personalized education by connecting the global education community through intelligent technology.",
    highlights: [
      { title: "AI-powered tutor discovery" },
      { title: "Intelligent student requirement matching" },
      { title: "Global educator marketplace" },
      { title: "Institution onboarding" },
      { title: "Course and program discovery" },
      { title: "Multi-board and curriculum support" },
      { title: "Online and offline learning" },
      { title: "Secure communication" },
      { title: "Digital educator profiles" },
      { title: "Enterprise-grade platform architecture" }
    ],
    stakeholders: [
      {
        title: "Students",
        description: "Students no longer need to search across multiple websites or rely on word-of-mouth recommendations. Global Tutor analyzes learning requirements and intelligently recommends tutors, coaching institutes, courses, and educational services that best match academic goals, budget, preferred language, teaching style, location, and availability.",
        benefits: ["Faster tutor discovery", "Better learning outcomes", "Personalized recommendations", "Transparent educator profiles", "Verified teaching experience", "Simplified communication"]
      },
      {
        title: "Teachers",
        description: "Educators receive a professional digital identity rather than simply appearing in a listing directory. The platform continuously recommends suitable students based on expertise instead of requiring teachers to compete through advertising.",
        benefits: ["Showcase qualifications & certifications", "Manage subjects & boards", "Define availability & language preferences", "Display student reviews", "Build digital portfolios"]
      },
      {
        title: "Educational Institutions",
        description: "Schools, coaching centers, universities and academies can increase visibility, publish programs, attract students, manage inquiries, build institutional profiles, promote courses, and expand internationally."
      },
      {
        title: "Parents",
        description: "Parents gain confidence through verified educator information, structured comparisons, AI recommendations, transparent reviews and simplified communication."
      },
      {
        title: "Education Businesses",
        description: "Educational consultants, counselors, language centers, training institutes, skill providers and learning organizations participate in a shared ecosystem that increases visibility and business growth."
      }
    ],
    capabilities: [
      {
        title: "AI Discovery Engine",
        description: "Supports subject, class, board, curriculum, skill, location, online learning, offline learning, language preferences, and budget preferences search query dimensions."
      },
      {
        title: "Intelligent Marketplace",
        description: "Manages the complete matching lifecycle: Student Requirement → AI Matching → Teacher Interest → Shortlisting → Communication → Enrollment → Learning → Feedback → Long-term Relationship."
      },
      {
        title: "Teacher Management",
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
        title: "Administration Console",
        description: "Centralized panel for user management, identity verification, marketplace moderation, business analytics, reporting, taxonomy control, and AI model monitoring."
      }
    ],
    executiveArchitecture: "/images/architecture/Global_Tutor_Executive_Business_Architecture.png",
    technicalArchitecture: "/images/architecture/Global_Tutor_Technical_Architecture_Diagram.png",
    architectureDescription: "Global Tutor integrates adaptive tutoring agents, availability matching, and automated certifications.",
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
        title: "Teachers",
        description: "Build a professional teaching presence and receive qualified student inquiries.",
        iconName: "activity"
      },
      {
        title: "Parents",
        description: "Find trusted educators with verified credentials and transparent information.",
        iconName: "shield"
      },
      {
        title: "Schools",
        description: "Promote institutional programs and attract prospective students.",
        iconName: "settings"
      },
      {
        title: "Universities",
        description: "Expand global reach through digital discovery and student engagement.",
        iconName: "brain"
      },
      {
        title: "Coaching Centers",
        description: "Generate qualified student leads using AI-assisted matching.",
        iconName: "activity"
      },
      {
        title: "Educational Consultants",
        description: "Offer advisory services through an integrated education marketplace.",
        iconName: "scale"
      },
      {
        title: "Government & NGOs",
        description: "Support education accessibility through centralized educator discovery and digital learning initiatives.",
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
          "Marketplace foundation",
          "Profile management",
          "Administration portal",
          "Authentication",
          "Core APIs"
        ]
      },
      {
        phase: "Phase 2",
        title: "Intelligent Marketplace",
        status: "Current",
        items: [
          "AI-powered recommendations",
          "Requirement marketplace",
          "Intelligent matching",
          "Institution onboarding",
          "Enhanced search",
          "Communication workflows",
          "Analytics dashboards"
        ]
      },
      {
        phase: "Phase 3",
        title: "Learning Ecosystem",
        status: "Planned",
        items: [
          "Course marketplace",
          "Learning pathways",
          "Student progress tracking",
          "AI learning assistant",
          "Digital classrooms",
          "Assessment modules",
          "Certification management"
        ]
      },
      {
        phase: "Phase 4",
        title: "Global Education Network",
        status: "Planned",
        items: [
          "International expansion",
          "Multilingual platform",
          "Cross-border education discovery",
          "Global institution partnerships",
          "AI education advisor",
          "Education intelligence platform",
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
