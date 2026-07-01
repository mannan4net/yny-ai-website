# [API Specification]

## Document Information

- Document ID: [DOC-ID]
- Project: [Project Name]
- Version: [0.0.0]
- Status: Draft
- Owner: [Engineering Team]
- Review Cycle: Annually
- Last Updated: [YYYY-MM-DD]

## 1. Purpose
[Defines the REST/GraphQL contracts exposed by this service.]

## 2. Base URL & Authentication
- **Base URL:** `[URL]`
- **Auth Scheme:** `[Bearer Token / OAuth2]`

## 3. Endpoints

### 3.1 [Endpoint Name]
- **Method & Path:** `[GET] /api/v1/resource`
- **Description:** `[Purpose]`
- **Request Parameters/Body:**
```json
{ "key": "value" }
```
- **Response Format:**
```json
{ "status": "success" }
```
- **Error Codes:** `[400, 401, 404, 500]`

## Related Standards
- [STD-001: Documentation Standard](../standards/documentation-standard.md)
- [STD-003: Naming Conventions](../standards/naming-conventions.md)
- [STD-006: API Standards](../standards/api-standards.md)

## References
- [DOCUMENT_INDEX](../DOCUMENT_INDEX.md)

## Revision History
| Version | Date | Author | Description |
| ------- | ---- | ------ | ----------- |
| 1.0.0 | [YYYY-MM-DD] | [Author] | Initial Draft |
