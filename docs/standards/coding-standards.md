# Coding Standards

## Document Information

- Document ID: STD-005
- Category: Foundation
- Version: 1.0.0
- Status: Active
- Owner: Engineering
- Review Cycle: Bi-annually
- Last Updated: 2026-06-28
- Applicable Projects: All

## 1. Purpose
This standard defines how software is implemented across the YnY ecosystem. It translates the enterprise Architecture Principles (STD-004) into practical engineering rules governing every code contribution from both human developers and AI coding assistants. This serves as the single source of truth for engineering practices across all YnY projects.

## 2. Scope
This standard applies to all production software development, covering coding philosophy, code organization, quality, error handling, security, logging, testing, and AI-assisted workflows. It does not govern temporary local scripts that are not committed.

## 3. Intended Audience
- Human Engineers and Code Reviewers
- AI Coding Assistants and AI Agents
- Software Architects

## 4. Guiding Principles

### 4.1 Engineering Philosophy
- **Readability over Cleverness:** Code is read far more often than it is written. Optimize for the reader.
- **Maintainability over Shortcuts:** Design for long-term maintainability rather than short-term convenience.
- **Root-Cause before Workaround:** Prefer diagnosis over speculation. Fix the underlying issue rather than patching the symptom.
- **YnY Engineering Workflow:** Observe &rarr; Understand &rarr; Analyze &rarr; Implement &rarr; Verify. Understand the existing implementation first. Preserve existing architecture whenever possible, and minimize unnecessary changes. Incremental improvements over large rewrites.
- **Business-First Implementation:** Code exists to solve business problems. Avoid unnecessary abstraction and over-engineering.

### 4.2 General Coding Principles
- **SOLID:** Adhere to Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
- **DRY & KISS:** Don't Repeat Yourself, Keep It Simple Stupid.
- **YAGNI:** You Aren't Gonna Need It. Do not write code for speculative future requirements.
- **Composition over Inheritance:** Prefer interface composition to deep class hierarchies.
- **Explicit over Implicit:** Avoid "magic" frameworks or implicit behaviors that hide control flow.
- **Fail Fast:** Validate inputs and system states early. Throw exceptions immediately when an invalid state is encountered.
- **Defensive Programming:** Protect boundaries against invalid data, but trust internal layers once data is validated.

## 5. Standard

### 5.1 Code Organization
- **Package / Module Boundaries:** Adhere strictly to the bounded contexts defined in STD-004.
- **Class Responsibilities:** A class must fulfill a single, well-defined purpose.
- **Interface Usage:** Use interfaces to define contracts between domain boundaries and to support testing (mocking).
- **Controllers:** Controllers must only handle HTTP routing, request/response validation, and delegation.
- **Services:** Contain business orchestration. They must not contain UI or database-specific logic.
- **Entities & DTOs:** Never expose database Entities directly via APIs. Always map to Data Transfer Objects (DTOs).
- **Configuration Classes:** Keep configuration modularized by feature rather than creating a single massive config file.

### 5.2 Code Quality
- **Method & Class Size:** Keep methods short (typically under 20-30 lines) and classes cohesive. If a class requires too many dependencies, it is doing too much.
- **Naming:** Follow STD-003 (Naming Conventions) strictly. Variable names must be descriptive and pronounceable.
- **Comments vs. Self-Documenting Code:** Code must be self-documenting through clear variable and method names. Use comments only to explain *why* something complex was done, never *what* the code does.
- **Dead Code:** Unused variables, methods, and commented-out code must be deleted prior to committing.

### 5.3 Error Handling
- **Exception Hierarchy:** Extend generic runtime exceptions carefully. Create custom exceptions only when specific business error handling is required (e.g., `InsufficientFundsException`).
- **Validation Errors vs API Errors:** Map internal validation or domain exceptions to standard HTTP status codes (e.g., `400 Bad Request`, `404 Not Found`, `409 Conflict`) at the controller layer using centralized exception handlers.
- **User-Facing Messages:** Never expose internal stack traces or sensitive implementation details to the user.
- **Business Rules:** Business rules must never be enforced through generic, untyped exceptions like `java.lang.Exception`.

### 5.4 Logging
*Reference: Logging Standard*
- **What to Log:** Significant state changes, boundary crossings (e.g., external API calls), and actionable errors.
- **Never Log:** PII, passwords, authentication tokens, or sensitive financial data.
- **Levels:** Use `ERROR` for actionable failures, `WARN` for recoverable issues, `INFO` for lifecycle events, and `DEBUG` for troubleshooting details.
- **Correlation IDs:** Every log entry must include a Correlation ID tying it to the original request for distributed tracing.

### 5.5 Security Awareness
*Reference: Security Standard*
- **Input Validation:** Validate all external inputs immediately at the boundary.
- **Output Encoding:** Encode output to prevent XSS.
- **Secure Defaults:** Prefer secure configurations (e.g., HTTPS, parameterized queries) by default.
- **Secret Management:** Never hardcode secrets. Inject them via environment variables or secure vaults.

### 5.6 Testing Expectations
*Reference: Testing Standard*
- **Unit Testing:** Write fast, deterministic unit tests for business logic. Mock external dependencies.
- **Integration Testing:** Test the integration points (database, API clients) with real or realistically mocked environments (e.g., Testcontainers).
- **Regression Prevention:** Every bug fix must include a test that would have caught the bug.
- **Meaningful Assertions:** Tests must assert exact outcomes, not just verify that code executes without crashing.

### 5.7 AI-Assisted Development
AI tools must integrate safely into the engineering workflow:
- **Understand Before Changing:** AI must understand the existing architecture before proposing modifications.
- **Preserve Boundaries:** AI must respect established module boundaries and dependencies.
- **Modify over Rewrite:** AI must prefer small, surgical modifications over unnecessary rewrites.
- **Explain Assumptions:** AI must explain any assumptions made before implementation.
- **Human Review:** AI-generated code requires strict human review before transitioning to Active.

### 5.8 Technology Guidance (YnY Stack)
These are complementary guidelines that support the YnY stack without making the standard framework-dependent:
- **Java / Spring Boot:** Leverage Constructor Injection over Field Injection (`@Autowired`). Use centralized `@ControllerAdvice` for exception handling.
- **React:** Favor functional components with Hooks. Keep state localized unless global state is strictly required. Use TypeScript for strict type safety.
- **PostgreSQL:** Use migrations (e.g., Flyway, Liquibase). Never alter schemas manually in production.
- **Docker:** Build minimal, secure container images. Do not run processes as `root`.

### 5.9 Coding Anti-Patterns
The following practices are explicitly prohibited:
- **Business Logic in Controllers:** Controllers must be thin.
- **God Classes:** Classes with thousands of lines and multiple responsibilities.
- **Circular Dependencies:** Modules or components depending on each other.
- **Copy-Paste Implementations:** Instead, extract common functionality into a shared abstraction.
- **Magic Numbers:** Hardcoded primitives (e.g., `if (status == 4)`). Use Enums or constants.
- **Premature Optimization:** Do not sacrifice readability for performance unless proven necessary by a profiler.
- **Ignoring Abstractions:** Bypassing established patterns (e.g., writing raw SQL when a Repository pattern is mandated).

## 6. Best Practices

### 6.1 Code Review Checklist
Every Pull Request must satisfy the following checklist before merging:
- [ ] **Architecture:** Respects boundaries, dependencies, and STD-004.
- [ ] **Naming:** Follows STD-003.
- [ ] **Security:** No secrets committed, input validated.
- [ ] **Performance:** No N+1 queries, loops optimized.
- [ ] **Logging:** Errors logged with appropriate context and correlation IDs.
- [ ] **Testing:** Meaningful unit/integration tests added or updated.
- [ ] **Maintainability:** Code is clean, cohesive, and commented only where necessary.
- [ ] **AI Compliance:** AI contributions reviewed for unintended side effects and architectural alignment.
- [ ] **Backward Compatibility:** Database migrations and APIs are backward-compatible.

## 7. Exceptions
In extremely rare, documented cases (e.g., a critical performance bottleneck in a high-frequency trading module), readability may be compromised for raw performance, provided the module is heavily unit-tested and explicitly commented.

## 8. Related Standards
- [STD-002: Repository Structure Standard](repository-structure-standard.md)
- [STD-003: Naming Conventions](naming-conventions.md)
- [STD-004: Architecture Principles](architecture-principles.md)
- Security Standard (TBD)
- Testing Standard (TBD)
- Logging Standard (TBD)

## 9. References
- [Master Documentation Index](../DOCUMENT_INDEX.md)

## 10. Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | 2026-06-28 | Engineering | Initial creation of the Coding Standards. |
