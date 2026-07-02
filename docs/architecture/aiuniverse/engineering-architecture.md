# AIUniverse — Engineering & Deployment Architecture (L3)

## Document Information
- Document ID: EA-AIUniverse-L3
- Category: Engineering Architecture
- Version: 1.0.0
- Status: Active
- Owner: Lead Engineering Architect
- Review Cycle: Bi-annually
- Last Updated: 2026-06-29

## 1. Purpose
This document provides the concrete engineering blueprint for AIUniverse, mapping the actual containerized services, databases, messaging brokers, cloud networks, ports, and technology stacks.

## 2. Technology Stack & Deployment
- **Core Technology Stack**: Python Scrapy, Neo4j Graph DB, OpenSearch, React D3, Web Crawler
- **Deployment Platform**: Clustered environments (AWS EKS or Docker Swarm) utilizing VPC subnets.
- **Container Runtimes**: Dockerized microservice layers synchronized using secure ingress controllers.
- **Network Gateways**: Nginx, WSO2, or Kong micro-gateways routing inbound API traffic.

## 3. Deployment Topology & Network Subnets
1. **Public DMZ Subnet**: Hosts CDN caches, firewalls, and application load balancers.
2. **Private Application Subnet**: Running microservice pod instances inside secured Kubernetes namespaces.
3. **Private Database Subnet**: Stateful clusters (PostgreSQL, Neo4j, Milvus) locked to internal IP ranges.

## 4. Data & AI Pipelines
- **RAG Architecture**: Contextual index mappings linking PDF parsing pipelines to LLM context endpoints.
- **Messaging Pipelines**: RabbitMQ/Kafka brokers coordinating async event triggers between synthesis engines and storage drivers.

## 5. Engineering Diagram (L3 Visual)
The deployment topology diagram illustrating physical nodes, container instances, port mappings, and communications:

![AIUniverse L3 Diagram](assets/engineering-architecture.svg)

## 6. Acceptance Criteria
- Full coverage of technology stacks, frameworks, and protocols on every component block.
- Naming format follows `Functional Label (Technology/Protocol)` format strictly.

## Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | 2026-06-29 | Architecture | Approved release of Level 3 Engineering Architecture. |
