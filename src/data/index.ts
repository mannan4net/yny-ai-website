import { AIUNIVERSE_URL } from "@/config/constants";

export const productsData = [
  {
    id: 'paai',
    name: 'PAAI',
    tagline: 'The Enterprise Knowledge Operating System — connecting legacy platforms and database records into a single intelligent memory.',
    category: 'Enterprise Knowledge',
    businessProblem: 'Modern organizations operate across dozens of disconnected collaboration platforms, legacy applications, and databases. Information remains fragmented, making it difficult for teams and executives to obtain complete context, monitor priorities, and make timely decisions.',
    solution: 'PAAI establishes a unified Enterprise Knowledge Operating System. By connecting SaaS platforms, legacy databases, and custom workflows into a single contextual memory layer, PAAI enables secure, cross-system retrieval governed by your company’s access controls (RBAC).\n\nInstead of waiting for manual searches, PAAI continuously monitors activities to deliver proactive intelligence. Its flagship feature, the Morning Executive Intelligence Brief, orchestrates data collection across all systems every morning, delivering a personalized summary of priorities, deadlines, and operational risks directly to your email, Teams, or WhatsApp.',
    architectureHighlights: [
      'MCP Connectivity Framework',
      'Enterprise Gateway Support',
      'Multi-Agent Orchestration',
      'Enterprise RBAC Security Model',
      'RAG & Semantic Retrieval Layer',
      'Unified Knowledge Graph'
    ],
    deploymentModel: 'Cloud-hosted SaaS with on-premise and private cloud options',
    capabilities: [
      'Unified Enterprise Intelligence',
      'Executive Decision Support',
      'Voice and Conversational Access',
      'Cross-System Context Awareness',
      'Enterprise Search and Retrieval',
      'Multi-Source Knowledge Intelligence',
      'Agent Workflow Orchestration'
    ],
    benefits: [
      'Faster executive decision-making',
      'Reduced information fragmentation',
      'Improved operational visibility',
      'Enterprise-wide intelligence access',
      'Unified AI experience across systems'
    ],
    targetCustomers: 'Enterprises, government bodies, and large organizations requiring unified system intelligence',
    cta: 'Request Demo',
  },
  {
    id: 'legalpa',
    name: 'LegalPA',
    tagline: 'Constitution to courtroom — all laws in one place',
    category: 'Legal Intelligence',
    businessProblem: "Legal professionals waste critical time navigating India's highly fragmented legal codes. Statutes, central/state regulations, and active case law are spread across dozens of disconnected sources, increasing the risk of missing binding precedents and legislative amendments.",
    solution: 'LegalPA unifies the entire Indian legal corpus into a single, semantic search engine. By automatically building a citation network that maps statutory codes directly to judicial precedents, LegalPA enables law firms and compliance teams to conduct instant research, verify procedural filings, and receive real-time alerts on regulatory changes.',
    architectureHighlights: [
      'Specialized legal ontology and entity recognition',
      'Real-time synchronization with legislative databases',
      'Citation network graph analysis'
    ],
    deploymentModel: 'Secure cloud platform built for legal compliance',
    capabilities: [
      'Comprehensive navigation of full legal codes',
      'Semantic and contextual case law search',
      'Automated court filing and procedural guidance',
      'Real-time tracking of legislative updates',
      'Intelligent precedent and citation analysis'
    ],
    benefits: ['Cut research time drastically', 'Stay current on legal changes', 'Built for solo practitioners and firms', 'India-specific depth'],
    targetCustomers: 'Law firms, solo practitioners, legal departments, compliance teams',
    cta: 'Request Demo',
  },
  {
    id: 'aiuniverse',
    name: 'AIUniverse',
    tagline: 'Strategic AI intelligence and platform research for technology leaders.',
    category: 'AI Intelligence',
    businessProblem: 'The AI landscape evolves faster than enterprise teams can track. Critical research breakthroughs, tool releases, and platform shifts are easily missed, resulting in strategic blind spots and misaligned technology investments.',
    solution: 'AIUniverse automates the tracking of global machine learning breakthroughs and vendor releases. By summarizing research papers, parsing platform capabilities, and delivering daily briefings, it helps technology leaders make informed architecture decisions without research overhead.',
    architectureHighlights: [
      'Automated ingestion of global AI research and news',
      'LLM-driven summarization and relevance scoring',
      'Personalized recommendation engine'
    ],
    deploymentModel: 'Cloud-hosted intelligence dashboard and API',
    capabilities: [
      'Curated daily AI and machine learning briefings',
      'In-depth research and whitepaper summaries',
      'Side-by-side tool and platform comparisons',
      'Macro trend analysis and market forecasting',
      'Domain-specific content curation and alerts'
    ],
    benefits: ['Stay ahead of AI trends', 'Reduce research overhead', 'Make better technology decisions', 'Competitive intelligence'],
    targetCustomers: 'Technology leaders, AI teams, innovation managers, CTOs, product managers',
    cta: 'Launch AIUniverse',
    externalLink: AIUNIVERSE_URL,
  },
  {
    id: 'sdlc-factory',
    name: 'SDLC Factory',
    tagline: 'From business intent to architecture to code — automating governed software delivery assets.',
    category: 'Engineering Execution',
    businessProblem: 'Software initiatives frequently fail due to incomplete requirements, inconsistent system architectures, and manual creation of delivery assets. Organizations struggle to maintain traceability between initial business intent, system designs, and final deployment outcomes.',
    solution: 'SDLC Factory establishes a structured software factory model that translates business requirements directly into architecture blueprints, data models, and user stories. Each asset is traceably linked, creating a continuous, audited chain from concept to production code.\n\nUnlike basic code generators, SDLC Factory structures the entire engineering environment and deployment specification layer. This enables engineering teams to accelerate software delivery while maintaining strict compliance, quality, and architectural consistency.',
    architectureHighlights: [
      'AI-assisted code and architecture generation',
      'Automated CI/CD pipeline instantiation',
      'Integration with modern observability stacks'
    ],
    deploymentModel: 'Integrated with your existing cloud and source control infrastructure',
    capabilities: [
      'Discovery and Context Modeling',
      'Requirements Engineering',
      'BPMN Workflow Generation',
      'Architecture Generation',
      'Data Modeling',
      'QA Artifact Generation',
      'Delivery Governance',
      'Deployment Blueprint Generation'
    ],
    benefits: [
      'Reduced delivery cycle time',
      'Improved requirements quality',
      'Better architecture consistency',
      'Reduced rework',
      'Enhanced governance',
      'Faster project onboarding'
    ],
    targetCustomers: 'Engineering teams, CTOs, product companies, digital transformation programs',
    cta: 'Book a Conversation',
  },
  {
    id: 'global-tutor',
    name: 'Global Tutor',
    tagline: 'AI-powered learning, tutoring, assessment, and skill development platform.',
    category: 'Learning Ecosystem',
    businessProblem: 'Learning remains fragmented across academic institutions, independent educators, organizations, and digital platforms. Learners struggle to discover trusted expertise, while educators lack intelligent tools to deliver personalized, measurable learning experiences at scale.',
    solution: 'Global Tutor establishes an AI-native learning ecosystem that connects learners, educators, institutions, learning resources, and assessments into a unified intelligent platform. It combines tutoring, adaptive learning, AI assistance, assessments, collaboration, and structured learning pathways to personalize education, accelerate skill development, and support lifelong learning across academic, professional, and organizational environments.',
    architectureHighlights: [
      'Interoperable learning ontology and skill mapping',
      'Intelligent tutoring agent and automated assessment grading',
      'Real-time performance metrics and predictive analytics'
    ],
    deploymentModel: 'Cloud-native multi-tenant learning platform with institution and enterprise deployment options.',
    capabilities: [
      'Tutoring and Live Session Orchestration',
      'Automated Assessment & Skill Validation',
      'Adaptive Learning and AI Study Assistance',
      'Multi-Tenant Institution and Class Management',
      'Curriculum & Learning Pathway Management'
    ],
    benefits: [
      'Accelerate skill acquisition at scale',
      'Support consistent learning journeys across institutions and organizations.',
      'Deliver measurable, personalized education'
    ],
    targetCustomers: 'Educational Institutions, Independent Educators, Professional Training Organizations, Corporate Learning & Development, Government Training Programs',
    cta: 'Book a Conversation',
  },
];

export const teamData = [
  {
    name: 'Abdul Mannan',
    title: 'Founder & Chief Architect',
    initials: 'AM',
    bio: "Founder & Chief Architect of YnY AI. Personally leads the system design and product development of YnY AI's platforms, including PAAI, LegalPA, AIUniverse, SDLC Factory, and Global Tutor. Backed by twenty years of delivering national-scale health exchanges (ABDM), payment reconciliation platforms (ExpertPay), and enterprise platform transformations. Founder-led architecture with trusted implementation partners as required.",
  },
];

export const industriesData = [
  {
    name: 'Healthcare',
    challenges: 'Healthcare organizations struggle with extreme data fragmentation across legacy EMRs and clinical systems. Strict regulatory compliance and privacy mandates slow down innovation, while outdated technology impairs patient care.',
    solutions: 'We build national-scale interoperability platforms and secure data exchanges. Our AI-assisted solutions help normalize clinical data and improve diagnostics while maintaining regulatory compliance.',
    value: 'Improved patient outcomes, seamless operational efficiency, and rock-solid regulatory compliance at scale.',
  },
  {
    name: 'Government',
    challenges: 'Public sector entities face the daunting challenge of operating at massive scale while ensuring airtight security. Outdated infrastructure prevents agile citizen service delivery and limits inter-agency collaboration.',
    solutions: 'We design national-scale architectures and deploy highly secure cloud-native platforms. Our e-governance solutions are built for extreme resilience and widespread citizen accessibility.',
    value: 'Enhanced public service delivery, complete operational transparency, and highly resilient national infrastructure.',
  },
  {
    name: 'Legal',
    challenges: 'The legal sector is overwhelmed by information overload and complex precedent tracking. Navigating decades of statutes and disconnected case law manually creates unacceptable risks and delays.',
    solutions: 'We deploy AI-powered legal intelligence systems driven by advanced semantic search. Our platforms automate case analysis and instantly connect relevant precedents to current filings.',
    value: 'Drastically reduced research time, improved case strategy formulation, and unparalleled legal accuracy.',
  },
  {
    name: 'Banking & FinTech',
    challenges: 'Financial institutions must modernize legacy core systems without disrupting operations. They face relentless pressure to deliver rapid product cycles while constantly defending against sophisticated fraud.',
    solutions: 'We guide core banking modernization and cloud-native transformations. Our intelligent automation and robust data architectures ensure high-velocity delivery in secure environments.',
    value: 'Unprecedented market agility, enhanced security postures, and superior, frictionless customer experiences.',
  },
  {
    name: 'Education',
    challenges: 'Educational institutions struggle to deliver personalized learning experiences to massive student bodies. Heavy administrative overhead and siloed academic resources hinder institutional growth.',
    solutions: 'We architect scalable edtech infrastructure and comprehensive knowledge platforms. Our AI-driven curation systems organize academic content and automate routine administrative workflows.',
    value: 'Better student engagement, significantly reduced administrative burden, and universally accessible knowledge.',
  },
  {
    name: 'Technology',
    challenges: 'Technology companies are bottlenecked by inconsistent delivery velocity and mounting technical debt. Scaling engineering teams rapidly often results in fragmented architectures and brittle deployments.',
    solutions: 'We implement robust platform engineering and DevOps automation practices. Our SDLC acceleration frameworks establish standardized, high-quality development environments across entire organizations.',
    value: 'Faster time to market, unwavering engineering consistency, and highly scalable product delivery pipelines.',
  },
];

export const servicesData = [
  {
    title: 'Enterprise Architecture Strategy',
    description: 'Blueprints, assessments, and technology roadmaps aligning IT infrastructure with corporate business scale.',
    challenges: 'Organizations struggle with legacy platform fragmentation, technical debt, and misaligned IT investments that stall delivery.',
    approach: 'We conduct rigorous systems reviews and design target-state blueprints to establish durable architectural foundations.',
    outcomes: ['System Modernization Roadmaps', 'Architectural Health Reviews', 'Technical Risk Registers']
  },
  {
    title: 'AI Engineering & RAG Integration',
    description: 'Secure enterprise AI roadmaps, vector retrieval structures (RAG), and data governance frameworks.',
    challenges: 'AI initiatives fail to move beyond prototypes when built on unstructured data without access controls or compliance audit logs.',
    approach: 'We engineer custom LLM sandboxes, retrieval-augmented databases, and security compliance checkpoints.',
    outcomes: ['Secure RAG System Deployments', 'LLM Access Governance Frameworks', 'Context Curation Roadmaps']
  },
  {
    title: 'Cloud Modernization & Platform Engineering',
    description: 'Transitioning systems to secure, cloud-native environments and automating developer infrastructure pipelines.',
    challenges: 'On-premise infrastructure is rigid and database configurations bottleneck developers, slowing software delivery velocity.',
    approach: 'We refactor legacy databases, establish developer self-service portals, and build automated deployment pipelines.',
    outcomes: ['Cloud-Native Database Schema Designs', 'CI/CD Pipeline Automations', 'Observability & Alerting Configurations']
  },
  {
    title: 'Information Architecture & Systems Auditing',
    description: 'High-volume database design, streaming data pipelines, and technical code audits for M&A.',
    challenges: 'Ingesting transactional data at scale is complex, while M&A activity carries high technical debt and security risks.',
    approach: 'We design high-throughput data schemas and conduct deep codebase reviews to evaluate technology risks.',
    outcomes: ['Technical Debt Audits', 'Distributed Data Pipeline Schemas', 'Real-Time Dashboard Blueprints']
  }
];

export const engagementModelsData = [
  {
    title: 'Strategic Advisory',
    description: 'Senior advisors embedded with executive teams to assess technology posture, identify architectural risk, and develop transformation roadmaps aligned to business objectives.'
  },
  {
    title: 'Architecture Assessment',
    description: 'Structured evaluation of existing systems, identifying technical debt, scalability constraints, and architectural gaps. Delivered as a prioritized remediation plan.'
  },
  {
    title: 'Digital Transformation',
    description: 'End-to-end program delivery combining architecture design, platform engineering, change management, and measurable outcome tracking.'
  },
  {
    title: 'Managed Engineering Delivery',
    description: "Staffed, managed engineering resources operating under Abdul Mannan's architectural direction — bringing YnY's engineering standards and architecture discipline to your delivery programs."
  },
  {
    title: 'Product Development',
    description: 'Full-lifecycle product engineering from requirements through architecture, development, QA, and production deployment.'
  },
  {
    title: 'AI Modernization',
    description: 'Rapid identification and implementation of AI use cases across enterprise operations — from knowledge retrieval to intelligent automation and decision support.'
  }
];

export const insightsData = [
  {
    category: 'Artificial Intelligence',
    title: 'Why Most Enterprise AI Initiatives Fail',
    excerpt: 'An analysis of critical bottlenecks in B2B AI adoption. Moving past sandboxed proofs of concept requires aligning LLM capabilities directly with operational compliance and business-value metrics.',
    link: '#'
  },
  {
    category: 'Enterprise Intelligence',
    title: 'Building an Enterprise Personal AI',
    excerpt: 'Architectural blueprints for deploying custom assistants that securely query internal company data, establishing strict user access boundaries within daily communication channels.',
    link: '#'
  },
  {
    category: 'Digital Transformation',
    title: 'Lessons from National-Scale Digital Platforms',
    excerpt: 'Key architectural takeaways from designing national health interoperability registries. Learn to manage federated database standards, multi-agency consensus, and high-volume traffic nodes.',
    link: '#'
  },
  {
    category: 'Software Engineering',
    title: 'The Future of AI-Powered Software Delivery',
    excerpt: 'How automated lifecycle pipelines translate product intent directly into governed code. We explore the transition from manual asset creation to model-driven software generation.',
    link: '#'
  },
  {
    category: 'Enterprise Architecture',
    title: 'Enterprise Architecture in the Age of AI',
    excerpt: 'Treating AI as a foundational infrastructure layer rather than an add-on. Learn to structure data schemas and API pipelines to accommodate rapid model updates without core code debt.',
    link: '#'
  },
  {
    category: 'Technology Integration',
    title: 'MCP, Integration Platforms and Enterprise Intelligence',
    excerpt: 'A deep dive into combining Model Context Protocol (MCP) with legacy enterprise gateways, establishing secure bidirectional data flow for LLM tool calling.',
    link: '#'
  },
  {
    category: 'Regulatory Technology',
    title: 'Designing AI Systems for Regulated Industries',
    excerpt: 'Implementing RAG within highly audited environments. We examine chunk-level access control, data encryption in transit, and immutable audit logs required for sector compliance.',
    link: '#'
  },
  {
    category: 'Executive Decisions',
    title: 'Turning Enterprise Data into Executive Intelligence',
    excerpt: 'Orchestrating disparate transactional events into clean contextual memory. We map the pipeline that compiles activity logs into structured briefings for executive decision-making.',
    link: '#'
  },
  {
    category: 'Enterprise Transformation',
    title: 'From Legacy Systems to AI-Native Enterprises',
    excerpt: 'A migration roadmap for legacy IT infrastructure. Learn how to wrap monolithic core databases in secure API layers to support incremental platform modernization.',
    link: '#'
  }
];
