# Repository Structure Standard

## Document Information

- Document ID: STD-002
- Category: Foundation
- Version: 1.0.0
- Status: Active
- Owner: Engineering
- Review Cycle: Bi-annually
- Last Updated: 2026-06-28
- Applicable Projects: All

## 1. Purpose
This standard defines the canonical physical organization of every repository across the YnY ecosystem. By enforcing a predictable and standardized directory structure, we eliminate ambiguity, enforce separation of concerns, and ensure that both human developers and the SDLC Factory automation can seamlessly navigate and manipulate the codebase.

## 2. Scope
This standard applies to all YnY repositories, covering source code, documentation, configuration, infrastructure as code, generated artifacts, and tests. It is mandatory for all existing and future products.

## 3. Intended Audience
- Human Engineers and Architects
- DevOps and Platform Engineers
- AI Coding Assistants and AI Agents
- SDLC Factory Automation Pipelines

## 4. Guiding Principles
- **Predictable Project Organization:** A developer or AI agent should be able to navigate any YnY repository blindly due to structural uniformity.
- **Separation of Concerns:** Application code, infrastructure code, and configuration must remain isolated.
- **AI-Friendly Navigation:** Predictable boundaries allow AI tools to locate context efficiently without scanning the entire workspace.
- **Clean Architecture & DDD:** Physical boundaries must reflect logical domain boundaries.
- **Scalability:** The structure must scale from a microservice to a modular monolith seamlessly.

## 5. Standard

### 5.1 Standard Repository Layout
Every repository must adhere to the following top-level directory structure:
- `/src` - Application source code.
- `/docs` - Documentation, adhering to STD-001.
- `/config` - Environment and application configurations.
- `/infra` - Infrastructure as code (e.g., Terraform, Dockerfiles, Kubernetes manifests).
- `/scripts` - Automation and utility scripts (e.g., CI/CD helpers, local setup).
- `/tests` - Out-of-tree testing (e.g., E2E, performance tests). Unit and integration tests typically live alongside source code.
- `/assets` - Static assets (e.g., images, diagrams, static HTML).
- `/out` (or `/build`) - Build output and generated artifacts.

### 5.2 Module Organization
Modules must be organized by domain (Domain-Driven Design), not by technical layer (e.g., `controllers`, `services`).
- **Backend Modules (Java/Spring Boot):**
  - Group by bounded context: `/src/main/java/com/yny/{domain}/...`
  - *Compliant:* `/src/main/java/com/yny/billing/api`, `/src/main/java/com/yny/billing/domain`
  - *Non-Compliant:* `/src/main/java/com/yny/controllers/BillingController.java`
- **Frontend Modules (React):**
  - Group by feature: `/src/features/{feature-name}/...`
  - Shared UI components live in `/src/components/common/`.
- **Nesting Depth:** Do not exceed 4 levels of package nesting within a domain module to avoid excessive complexity.

### 5.3 Configuration Strategy
- **Environment Configuration:** Non-sensitive environment configs (e.g., `application-dev.yml`) belong in `/config/env/`.
- **Application Configuration:** Framework-specific configs belong in `/src/main/resources/`.
- **Deployment Configuration:** Helm charts or k8s manifests belong in `/infra/k8s/`.
- **Secrets:** Passwords, API keys, and certificates must **NEVER** be committed. Reference them via environment variables or secret managers (e.g., AWS Secrets Manager, HashiCorp Vault).

### 5.4 Generated Content
Generated artifacts must never pollute manually maintained source directories.
- **AI Generated Documents:** Must be placed in the `/docs` structure following STD-001.
- **Generated Source Code:** (e.g., OpenAPI generated clients, jOOQ classes) must output to `/build/generated-src/` or `/target/generated-sources/`. These directories must be added to `.gitignore`.
- **Build Output:** Compiled binaries and bundles belong in `/build/` or `/dist/`.
- **Temporary Files:** Scratchpads and temporary outputs must use `.tmp/` or `/scratch/` (always ignored).

### 5.5 Repository Governance
- **Prohibited Folders:** Avoid vague folders like `/misc`, `/stuff`, or `/old`.
- **Prohibited File Placement:** Source code files (`.java`, `.ts`) must not reside in the repository root. The root is reserved for configuration files (e.g., `pom.xml`, `package.json`, `README.md`).
- **Archive Policy:** Deprecated code should be deleted (relying on Git history), not commented out or moved to an `archive/` folder. Deprecated documentation, however, moves to `/docs/archive/` per STD-001.
- **Documentation Placement:** All project-level documentation belongs in `/docs/projects/`. Do not scatter `README.md` files deeply within source folders unless specifically defining a distinct module.

## 6. Best Practices
- Keep the repository root clean. Ideally, it contains fewer than 10 files (mostly build and CI config).
- Use `.gitignore` exhaustively to prevent `/build`, `/out`, and secrets from leaking into the repository.

## 7. Exceptions
Monorepos may introduce an additional top-level `/packages` or `/apps` directory, within which each sub-project must strictly adhere to the standard layout.

## 8. Related Standards
- [STD-001: Documentation Standard](documentation-standard.md)
- [STD-003: Naming Conventions](naming-conventions.md)

## 9. References
- [Master Documentation Index](../DOCUMENT_INDEX.md)

## 10. Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | 2026-06-28 | Engineering | Initial creation of the Repository Structure Standard. |
