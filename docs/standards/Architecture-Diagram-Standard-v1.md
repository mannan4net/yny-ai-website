# Architecture Diagram Standard v1

## Document Information
- Document ID: STD-017
- Category: Architecture
- Version: 1.0.0
- Status: Active
- Owner: Architecture & Design
- Review Cycle: Bi-annually
- Last Updated: 2026-06-29
- Applicable Projects: PAAI, SDLC Factory, AIUniverse, LegalPA, Global Tutor

## 1. Purpose
This standard defines a unified, professional visual language for all architecture diagrams across the YnY AI product ecosystem. By establishing concrete rules for layout, layering, typography, iconography, and color palettes, we ensure that every system representation remains clean, readable, and highly informative for executive stakeholders and technical teams alike.

## 2. Scope
This document governs all logical, physical, and conceptual architecture diagrams created for YnY products. It applies to all diagram formats including static assets (SVG, PNG) and embedded web or presentation graphics.

## 3. Intended Audience
- Chief Information Officer (CIO)
- Chief Technology Officer (CTO)
- Enterprise Architects
- Solution Architects and Lead Engineers
- AI Code Assistants and SDLC Factory Engines

---

## 4. Standard Rules

### 4.1 Diagram Philosophy
Rule ID: ADS-001
Title: Visual Language Unity
Category: Philosophy
Severity: Mandatory
Validation Criteria: Manual Review & Architecture Review

Requirement:
Every YnY architecture diagram must follow a single visual language designed to maximize clarity, logic, and information density. Diagrams must avoid artistic ornamentation, decorations, or styling that does not serve to clarify the underlying technical or business structure.

Rationale:
Inconsistent representations across products increase cognitive load and hinder rapid comprehension. A uniform visual grammar enables architects, developers, and executives to read and understand any product diagram instantly.

Implementation Guidance:
- Design elements must focus purely on mapping relationships, flows, and boundaries.
- Refrain from adding shadows, glow effects, or background textures.
- Ensure every element has a logical purpose. If a shape or color does not represent a boundary, dependency, state, or component type, it must be removed.

---

### 4.2 Executive Architecture vs Technical Architecture
Rule ID: ADS-002
Title: Audience-Specific Level of Detail
Category: Architecture Classification
Severity: Mandatory
Validation Criteria: Architecture Review

Requirement:
Diagrams must be strictly categorized and structured based on their target audience:
1. **Executive Architecture**:
   - Focus: High-level business capabilities, platforms (e.g., PAAI, LegalPA, AIUniverse), external integrations, and key users.
   - Detail: Abstract all minor subcomponents, direct databases, internal microservices, network ports, and routing details.
2. **Technical Architecture**:
   - Focus: Component-level interactions, physical deployments, storage nodes, network boundaries, queues, and protocols.
   - Detail: Explicitly depict database engines, messaging queues, cache instances, specific programming frameworks, security groups, and API gateways.

Rationale:
Executives require context and business impact, whereas engineers and solution architects require detailed implementation layouts. Mixing these levels of detail results in diagrams that are either too cluttered for business reviews or too vague for engineering execution.

Compliant Example:
- An Executive Diagram for LegalPA showing: User -> API Gateway -> LegalPA Core Engine -> External Law Databases.
- A Technical Diagram for LegalPA showing: User Browser -> Cloudflare CDN -> AWS ALB -> Spring Boot Service Cluster -> Redis Cache -> PostgreSQL DB Cluster (Primary/Replica).

---

### 4.3 Layout Rules
Rule ID: ADS-003
Title: Grid-Based Directional Layouts
Category: Layout
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
All diagrams must align to a strict grid system (minimum increment of 8px or 10px). System flow must be organized along a linear progression path:
- **Horizontal Flow (Left-to-Right)**: Used for chronological sequences, pipelines, data ingestion, and business processes.
- **Vertical Flow (Top-to-Bottom)**: Used for structural layering, hierarchy, and request/response inheritance.
- Diagonal connections or non-orthogonal alignments are strictly prohibited.

Rationale:
Grid alignment maintains a neat, organized structure. Linear progressions mimic standard reading patterns, preventing the "spaghetti layout" common in ad-hoc diagrams.

Implementation Guidance:
- Snap all shapes to grid vertices.
- Keep system boundaries aligned and balanced.
- Keep similar functional modules at the same horizontal or vertical alignment level.

---

### 4.4 Layer Rules
Rule ID: ADS-004
Title: Logical Architectural Layering
Category: Layering
Severity: Mandatory
Validation Criteria: Architecture Review

Requirement:
Technical diagrams must arrange system elements into four distinct vertical layers from top to bottom:
1. **Client / Interaction Layer (Top)**: User interfaces, mobile applications, browsers, webhooks, and third-party consumers.
2. **Gateway / Interface Layer**: CDN, load balancers, API gateways, and authorization proxies.
3. **Application / Service Layer**: Microservices, domain engines, orchestrators, and core processing logic.
4. **Data & Infrastructure Layer (Bottom)**: Relational databases, NoSQL stores, caches, message brokers, and file servers.

Rationale:
Aligns diagrams with the Clean Architecture and TOGAF layering strategies, enforcing the inward/downward dependency rule.

---

### 4.5 Component Styles
Rule ID: ADS-005
Title: Flat Component Geometry
Category: Styling
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
All component elements must use flat geometric styles:
- **Logical Containers / Systems**: Sharp-cornered rectangles with thin borders (1px to 1.5px).
- **Physical Nodes / Services**: Rectangles with a small corner radius (4px to 8px).
- **External Third-Party Services**: Rectangles with dashed borders.
- **Data Stores**: Standard flat cylinder shapes (flat top and bottom, or standard database cylinders with NO 3D shading or gradients).
- Fills must be 100% solid flat colors.
- Shadows, 3D shapes, glossy highlights, double-borders, and skeuomorphic styling are strictly prohibited.

Rationale:
Flat styling provides a clean, modern aesthetic that remains highly readable at low resolutions and small screen dimensions.

---

### 4.6 Color Palette
Rule ID: ADS-006
Title: Corporate Enterprise Palette
Category: Styling
Severity: Mandatory
Validation Criteria: Color Contrast Check

Requirement:
Diagrams must adhere strictly to the following flat HEX color palette:
- **Background**: Pure White (`#FFFFFF`) or Off-White (`#F8FAFC`).
- **Primary Elements (Borders & Text)**: Deep Navy Blue (`#0F172A`).
- **Secondary Elements (Caches, Queues, Helper Components)**: Slate Gray (`#475569`).
- **Bridges & Gateways (API Gateways, CDN)**: Muted Blue (`#2563EB`).
- **Security / Identity (OAuth, IAM)**: Muted Teal (`#0D9488`).
- **External Integration / Third-Party Nodes**: Muted Violet (`#6D28D9`).
- **Alert / Highlight (Errors, Critical Paths)**: Crimson Red (`#DC2626`).
- **Background Fills (Boxes / Containers)**: Extremely light tint (`#F1F5F9` or `#F8FAFC`).
- Neon, saturated primaries, gradients, and dark-themed backgrounds are prohibited.

Rationale:
A cohesive, high-contrast, limited color palette prevents color fatigue, supports accessibility (color-blindness), and projects a premium brand image.

---

### 4.7 Typography
Rule ID: ADS-007
Title: Unified Sans-Serif Typography
Category: Typography
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
Use a single sans-serif typeface across all diagrams.
- Approved Fonts: **Inter**, **Segoe UI**, **Roboto**, or **Arial**.
- Font Sizes & Styles:
  - **Diagram Title**: 16px - 18px (Bold, Color: `#0F172A`)
  - **Container Group Label**: 12px - 14px (Bold, Color: `#0F172A`)
  - **Component Label**: 10px - 12px (Semibold, Color: `#0F172A`)
  - **Technical Metadata (Port, Engine)**: 8px - 10px (Regular or Italic, Color: `#475569`)
- Minimum contrast ratio between text and background must be 4.5:1.

Rationale:
Ensures legibility on high-resolution screens as well as printed material and presentation slides.

---

### 4.8 Icons
Rule ID: ADS-008
Title: Monochromatic Vector Icons
Category: Iconography
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
- Use monochromatic, flat line-art vector icons inside components.
- Icons must represent the technology stack or cloud vendor standard (AWS, Azure, Google Cloud, Gartner-standard shapes).
- Do not mix icon sets from different vendors in the same diagram unless illustrating a multi-cloud boundary.
- Do not use colored cartoon emojis, clip art, or 3D icons.
- Icon color must be consistent with the component's border color (e.g., `#0F172A` or `#475569`).

Rationale:
Prevents visual clutter and ensures the iconography feels integrated with the overall diagram style.

---

### 4.9 Arrow and Connector Standards
Rule ID: ADS-009
Title: Orthogonal Connectors and Line Types
Category: Connectors
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
- Connectors must be strictly orthogonal (90-degree angles). No diagonal lines, bezier curves, or hand-drawn connectors.
- **Synchronous / Direct Connections**: Solid line (1.5px thickness) with a solid arrowhead.
- **Asynchronous / Event-Driven Connections**: Dashed line (1.5px thickness) with a solid arrowhead.
- **Logical Groupings / Associations**: Dotted line (1px thickness) with no arrowhead.
- **Bidirectional Flow**: Prohibited. Split bidirectional operations into two distinct, single-directional connectors to clarify flow control.
- Avoid crossing lines. If crossing is mandatory, use an explicit bridge (arc jump) or re-route.

Rationale:
Orthogonal layouts keep diagrams clean and prevent intersecting lines from obscuring connections. Explicit directionality isolates call orders and protocol types.

---

### 4.10 Container Grouping Rules
Rule ID: ADS-010
Title: Explicit Security and System Boundaries
Category: Grouping
Severity: Mandatory
Validation Criteria: Architecture Review

Requirement:
- Containers representing logical boundaries (VPC, Cluster, Subnet, Bounded Context, Security Group) must have visible borders.
- Border style: Thin, dashed, or solid light gray line (`#E2E8F0` or `#CBD5E1`).
- The grouping label must be positioned in the top-left or top-center of the container.
- Container background fill must be exceptionally light (e.g., `#F8FAFC` or `#F1F5F9`) to ensure child components stand out clearly.
- Never nest containers more than three levels deep.

Rationale:
Explicit boundaries clarify where systems sit, how they are isolated, and which protocols govern their networks.

---

### 4.11 Naming Conventions
Rule ID: ADS-012
Title: Standardized Component Labeling
Category: Naming
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
Components must be named using a consistent two-line format:
- **Line 1 (Functional Name)**: Clear, business-oriented name (e.g., `Payment Gateway`, `User Authentication`).
- **Line 2 (Technical Details)**: Technology, framework, or protocol inside parentheses in a smaller font (e.g., `(Spring Boot / REST)`, `(PostgreSQL)`, `(gRPC)`).
- System acronyms (PAAI, LegalPA, etc.) must be capitalized.

Rationale:
Provides immediate understanding of what a component does (business context) and how it does it (technical context).

---

### 4.12 Legend
Rule ID: ADS-013
Title: Mandatory Diagram Legend
Category: Documentation
Severity: Mandatory
Validation Criteria: Static Review

Requirement:
Every architecture diagram must include a standard legend block in the bottom-right or bottom-left corner of the canvas containing:
- **Title**: Diagram Title, Product/System Name, Version, and Date.
- **Colors**: Definition of what color coding represents (e.g., Security, Client, Core).
- **Line Styles**: Definition of line properties (e.g., Synchronous REST, Asynchronous Kafka).
- **System Owner**: The organizational unit responsible for the architecture.

Rationale:
Ensures a diagram can be interpreted independently without requiring external context or verbal explanations.

---

### 4.13 White Space and Alignment Rules
Rule ID: ADS-014
Title: Consistent Spacing Constants
Category: Layout
Severity: Mandatory
Validation Criteria: Manual Review

Requirement:
Diagram elements must preserve consistent spatial ratios:
- **Minimum Component-to-Component Distance**: 24px.
- **Minimum Component-to-Container-Border Padding**: 40px.
- **Minimum Arrow-to-Border Clearance**: 12px.
- Components must be vertically centered or aligned to their top/left edges where applicable.

Rationale:
Adequate white space ensures diagrams are readable at high-level glances and do not appear cramped.

---

### 4.14 SVG Export Guidelines
Rule ID: ADS-015
Title: Clean Vector Serialization
Category: Export
Severity: Recommended
Validation Criteria: Automated Verification

Requirement:
When exporting diagrams to SVG format:
- Embed all custom styles as CSS rules inside a `<style>` block.
- Convert custom typography to vector paths, or use standard fallback fonts (Inter, Segoe UI, Arial) to prevent missing font errors.
- Ensure the root SVG node has a valid `viewBox` attribute.
- Set the background fill of the parent SVG node to `#FFFFFF` or keep it transparent with a defined background container.

Rationale:
SVGs must scale correctly across web engines without breaking typography layouts or clipping edges.

---

### 4.15 PNG Export Guidelines
Rule ID: ADS-016
Title: High-Resolution Raster Outputs
Category: Export
Severity: Mandatory
Validation Criteria: Automated Verification

Requirement:
When exporting diagrams to PNG format:
- Render at a minimum resolution of 300 DPI, or a 2x/3x scale factor relative to the screen dimensions.
- **Never use transparent backgrounds**. All PNG exports must have a solid white background fill (`#FFFFFF`).
- Enable anti-aliasing.

Rationale:
Transparent background PNGs render text illegibly when viewed in dark-themed document viewers, markdown tools, or email clients. Solid white backgrounds guarantee consistent rendering.

---

### 4.16 Website Compatibility Rules
Rule ID: ADS-017
Title: Responsive Web Embedding
Category: Web Compatibility
Severity: Mandatory
Validation Criteria: Automated Verification

Requirement:
Diagrams embedded in web-based document systems, wikis, or HTML pages must:
- Use responsive width CSS rules (`width: 100%; height: auto; max-width: 100%;`).
- Render readable text at a standard zoom of 100% on displays starting at 1024px width.
- Ensure all hyperlink elements embedded in SVG objects use the standard target attribute `target="_blank"`.

Rationale:
Ensures diagram assets display beautifully across diverse laptops, monitors, and web platforms.

---

### 4.17 Presentation Compatibility Rules
Rule ID: ADS-018
Title: Slideshow Optimization (16:9)
Category: Presentation Compatibility
Severity: Recommended
Validation Criteria: Manual Review

Requirement:
Diagrams intended for executive slideshow presentations must:
- Adhere to a strict widescreen 16:9 canvas aspect ratio.
- Increase font sizes by a minimum of 20% relative to standard web diagrams (e.g., minimum 14px for component labels) to ensure legibility when projected.
- Keep the number of visual components on a single slide below 20. If a system exceeds 20 elements, break it into smaller sub-diagrams.

Rationale:
Ensures slides remain visible and legible to stakeholders seated at the back of a physical meeting room or viewing on video conferencing systems.

---

### 4.18 Do's and Don'ts
Rule ID: ADS-019
Title: Architectural Compliance Checklist
Category: Governance
Severity: Mandatory
Validation Criteria: Architecture Review

Requirement:
All diagram proposals must pass the following compliance checklist:

| Category | Do | Don't |
| :--- | :--- | :--- |
| **Aesthetics** | Flat vector styles, solid fills. | Gradients, glossy reflections, 3D elements. |
| **Background** | Pure White (`#FFFFFF`) or Off-White (`#F8FAFC`). | Dark modes, patterned grids, photo backgrounds. |
| **Connectors** | 90-degree orthogonal connectors. | Curved lines, diagonal arrows, hand-drawn lines. |
| **Iconography** | Monochromatic, flat vendor silhouettes. | Colorful emojis, cartoon icons, complex illustrations. |
| **Context** | Dual labels (Functional + Tech). | Internal system codenames without detail. |
| **Verification** | Standard Legend with version & date. | Unlabeled shapes or orphaned lines. |

---

## 5. Related Standards
- [STD-001: Documentation Standard](documentation-standard.md)
- [STD-004: Architecture Principles](architecture-principles.md)
- [STD-016: UI/UX Standards](ui-ux-standards.md)

## 6. References
- [Master Documentation Index](../DOCUMENT_INDEX.md)
- TOGAF 10 Enterprise Architecture Guide
- Microsoft Azure Architecture Center Diagram Guidelines
- AWS Architecture Icons and Diagram Guidelines

## 7. Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | 2026-06-29 | Architecture | Initial creation of the YnY Enterprise Architecture Diagram Standard. |
