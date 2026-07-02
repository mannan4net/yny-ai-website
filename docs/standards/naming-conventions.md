# Naming Conventions

## Document Information

- Document ID: STD-003
- Category: Foundation
- Version: 1.0.0
- Status: Active
- Owner: Engineering
- Review Cycle: Bi-annually
- Last Updated: 2026-06-28
- Applicable Projects: All

## 1. Purpose
This standard defines the canonical naming rules across the entire YnY ecosystem. Consistent naming eliminates ambiguity, reduces cognitive load, and enables SDLC Factory automation and AI tools to generate predictable, compliant artifacts.

## 2. Scope
This document covers naming conventions for repositories, folders, source files, Java/Spring Boot constructs, React/Frontend constructs, Databases (PostgreSQL), APIs, documentation, and AI-generated artifacts.

## 3. Intended Audience
- Human Engineers, Frontend Developers, and DBAs
- AI Coding Assistants and Code Generators
- SDLC Factory Automation

## 4. Guiding Principles
- **Consistency & Predictability:** Code and files should read identically regardless of the author.
- **Readability Over Brevity:** Optimize for the reader. `customerBillingAddress` is superior to `custBillAddr`.
- **Domain-Driven Naming:** Use the Ubiquitous Language of the domain. Avoid technical jargon where domain terms exist.
- **No Abbreviations:** Do not abbreviate unless the abbreviation is globally standardized (e.g., `DTO`, `ID`, `URL`).
- **AI & Automation Support:** Predictable naming allows automated tools to link related concepts seamlessly.

## 5. Standard

### 5.1 Repository Naming
- Must use `kebab-case`.
- Must be all lowercase.
- *Compliant:* `yny-billing-service`, `sdlc-factory-ui`
- *Non-Compliant:* `YnY_BillingService`, `SDLC-Factory`

### 5.2 Folder Naming
- **Source Folders:** `kebab-case` for frontend/generic folders. For Java packages, use `lowercase` without hyphens.
- **Documentation & Assets:** `kebab-case`.
- **Configuration:** `kebab-case`.
- *Compliant:* `/user-profile/`, `/docs/api-specs/`

### 5.3 Java Naming (Spring Boot ecosystem)
- **Packages:** `lowercase` without spaces or hyphens. (e.g., `com.yny.billing.invoice`)
- **Classes / Interfaces / Records:** `PascalCase` (UpperCamelCase). (e.g., `InvoiceProcessingService`)
- **Enums:** Class name is `PascalCase`. Enum values are `UPPER_SNAKE_CASE`. (e.g., `enum InvoiceStatus { PAID, PENDING }`)
- **DTOs:** Suffix with `Request` or `Response` or `DTO`. (e.g., `CreateInvoiceRequest`, `InvoiceDTO`)
- **Entities:** Noun representing the domain object, `PascalCase`. Do not suffix with `Entity`. (e.g., `Invoice`)
- **Repositories:** Suffix with `Repository`. (e.g., `InvoiceRepository`)
- **Services:** Suffix with `Service`. (e.g., `InvoiceService`)
- **Controllers:** Suffix with `Controller`. (e.g., `InvoiceController`)
- **Configurations:** Suffix with `Config` or `Configuration`. (e.g., `SecurityConfig`)
- **Exceptions:** Suffix with `Exception`. (e.g., `InvoiceNotFoundException`)

### 5.4 Frontend Naming (React ecosystem)
- **React Components:** `PascalCase`. File names must match the component name. (e.g., `UserProfile.tsx`)
- **Hooks:** Prefix with `use`, `camelCase`. (e.g., `useAuth.ts`)
- **Contexts:** Suffix with `Context`, `PascalCase`. (e.g., `ThemeContext.tsx`)
- **Stores:** Suffix with `Store`, `camelCase`. (e.g., `userStore.ts`)
- **Utilities & Helpers:** `camelCase`. (e.g., `formatDate.ts`)
- **Styles:** Suffix with `.module.css` or `.styles.ts`. (e.g., `UserProfile.module.css`)
- **Assets:** `kebab-case` for image files. (e.g., `hero-background.png`)

### 5.5 Database Naming (PostgreSQL)
- **Schemas:** `snake_case`. (e.g., `billing_schema`)
- **Tables:** `snake_case`, plural nouns. (e.g., `users`, `invoices`)
- **Columns:** `snake_case`. Avoid prefixing with the table name. (e.g., `id`, `created_at`, `total_amount`)
- **Indexes:** `idx_{table_name}_{column_name}`. (e.g., `idx_users_email`)
- **Constraints:**
  - Primary Key: `pk_{table_name}`
  - Foreign Key: `fk_{table_name}_{column_name}`
  - Unique: `uq_{table_name}_{column_name}`
- **Sequences:** `seq_{table_name}`.

### 5.6 API Naming (REST)
- **Endpoints (URLs):** `kebab-case`, plural nouns. (e.g., `/api/v1/user-profiles`)
- **Resources:** Nested resources should reflect hierarchy. (e.g., `/api/v1/users/{user-id}/invoices`)
- **Query Parameters:** `snake_case`. (e.g., `?sort_by=created_at&page_size=20`)
- **Request/Response Fields (JSON):** `camelCase`. (e.g., `{"firstName": "John", "totalAmount": 100.50}`)

### 5.7 Documentation Naming
- **Standards:** `kebab-case`, suffixed with `-standard.md` (unless plural like `-conventions`). (e.g., `security-standard.md`)
- **Project Documents & ADRs:** `kebab-case` with sequential numbering for ADRs. (e.g., `adr-001-database-selection.md`)
- **Release Notes:** `kebab-case` prefixed with version or date. (e.g., `release-1.2.0.md`)
- *Reference:* All standards must be correctly named in the `DOCUMENT_INDEX.md`.

### 5.8 AI Generated Artifact Naming
SDLC Factory and AI Assistants must adhere to these strict predictive rules:
- **Generated Documentation:** Follows 5.7.
- **Generated Code:** Follows 5.3 or 5.4 based on language. Never append `-generated` to the class name; place it in a generated folder (see STD-002).
- **Generated Reports (e.g., test coverage):** `kebab-case` with a timestamp or run ID. (e.g., `coverage-report-20260628.json`)
- **Generated Test Cases:** Append `Test` to the target class name. (e.g., `InvoiceServiceTest.java`)

## 6. Best Practices
- Define automated linters (e.g., Checkstyle, ESLint) to enforce naming conventions in CI/CD pipelines automatically.

## 7. Exceptions
- External library integrations that force a specific naming convention in overriding methods (e.g., legacy SOAP clients).

## 8. Related Standards
- [STD-002: Repository Structure Standard](repository-structure-standard.md)
- [STD-004: Architecture Principles](architecture-principles.md)

## 9. References
- [Master Documentation Index](../DOCUMENT_INDEX.md)

## 10. Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | 2026-06-28 | Engineering | Initial creation of the Naming Conventions standard. |
