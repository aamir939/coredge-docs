---
title: Security & Compliance
sidebar_position: 3
---

# Security & Compliance

## Multi-Layered Security Model

CCS implements defense-in-depth with a multi-layered security posture. Every request passes through authentication, authorization, encryption, and audit controls — no action is trusted by default. Security is not an add-on; it is built into every layer of the platform from the IAM engine to the storage tier.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Security Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Mechanism</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Protection</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Authentication</td><td style={{padding: '3px 12px'}}>Keycloak v24.0.5 — OAuth2/OIDC, JWT tokens, MFA</td><td style={{padding: '3px 12px'}}>Identity verification for every user and service interaction</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Authorization</td><td style={{padding: '3px 12px'}}>OpenFGA — 18 pre-defined RBAC roles at Tenant and Cell levels</td><td style={{padding: '3px 12px'}}>Role and context validation on every resource action</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Transport Encryption</td><td style={{padding: '3px 12px'}}>mTLS (Mutual TLS) between all services</td><td style={{padding: '3px 12px'}}>Encrypted communication and mutual service authentication</td></tr>
    <tr><td style={{padding: '3px 12px'}}>At-Rest Encryption</td><td style={{padding: '3px 12px'}}>AES-256 for all stored data</td><td style={{padding: '3px 12px'}}>Data protected against unauthorized physical or logical access</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity Federation</td><td style={{padding: '3px 12px'}}>SAML 2.0 with Microsoft ADFS and Entra</td><td style={{padding: '3px 12px'}}>Seamless SSO with enterprise identity providers; no password replication</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant Isolation</td><td style={{padding: '3px 12px'}}>Per-tenant Keycloak realm</td><td style={{padding: '3px 12px'}}>Complete identity and session isolation between tenants</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network Security</td><td style={{padding: '3px 12px'}}>VPC isolation, Firewall (CheckPoint / Palo Alto), NAT Gateway</td><td style={{padding: '3px 12px'}}>Network-level tenant segregation and perimeter protection</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Audit Logging</td><td style={{padding: '3px 12px'}}>API gateway logs, SIEM integration, centralized log management</td><td style={{padding: '3px 12px'}}>Full traceability of every action; immutable audit trail</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security Services</td><td style={{padding: '3px 12px'}}>WAF, SIEM, CSPM, DDoS protection, Cloud HSM, SSL management</td><td style={{padding: '3px 12px'}}>Perimeter and workload-level threat detection and protection</td></tr>
  </tbody>
</table>

## Identity and Access Management

### Keycloak IAM Engine

CCS uses Keycloak v24.0.5 as its IAM engine. Every tenant gets a dedicated Keycloak realm — a completely isolated identity domain with its own users, roles, authentication flows, and federation configuration.

- **OAuth2 / OpenID Connect:** Industry-standard token-based authentication
- **Multi-Factor Authentication:** TOTP, SMS, email, and hardware key support
- **Session Management:** Admin-forced session termination for security incidents
- **Per-Tenant Realm Isolation:** Users in Tenant A cannot authenticate into Tenant B's realm under any circumstance

### OpenFGA Authorization Engine

Authorization is enforced through OpenFGA, Coredge's fine-grained authorization engine. OpenFGA implements a relationship-based access control (ReBAC) model that evaluates permissions based on roles, relationships, and context — not just flat role assignments.

**18 Pre-Defined RBAC Roles** are organized across two levels:

- **7 Organization-Level Roles** — Control tenant and cell administration, user management, and platform governance
- **11 Service-Specific Roles** — Granular permissions aligned to individual service categories (compute, storage, network, security, monitoring, etc.)

This structure ensures the principle of least privilege: a user with Compute access cannot inadvertently access Security or Database management functions.

### Identity Federation

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Federation Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>SAML 2.0</td><td style={{padding: '3px 12px'}}>Microsoft ADFS, Microsoft Entra</td><td style={{padding: '3px 12px'}}>Enterprise SSO with existing corporate identity providers</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BSS Portal Federation</td><td style={{padding: '3px 12px'}}>ATB BSS Portal</td><td style={{padding: '3px 12px'}}>Customer onboarding, subscription, and identity creation from the billing system</td></tr>
    <tr><td style={{padding: '3px 12px'}}>LDAP / Active Directory</td><td style={{padding: '3px 12px'}}>Microsoft Entra</td><td style={{padding: '3px 12px'}}>Directory-based user management and group synchronization</td></tr>
  </tbody>
</table>

## Encryption

### In-Transit: Mutual TLS (mTLS)

All communication between CCS microservices, between the portal and APIs, and between CCS and integrated infrastructure uses mTLS. This means:

- Both the client and server present valid certificates to each other before any data is exchanged
- No service can impersonate another — every communication channel is mutually authenticated
- All data moving between services is encrypted; there are no plaintext internal channels

### At-Rest: AES-256

All data stored by CCS — platform state in PostgreSQL, event data in MongoDB, session data in Redis — is encrypted at rest using AES-256. This includes backup data stored in geo-replicated object storage.

## Security Services Portfolio

CCS includes a comprehensive set of security services available through the self-service catalogue:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>SIEM</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Security Incident and Event Management — centralized threat detection and response</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Log Monitoring</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Continuous log analysis and anomaly detection across platform and workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CSPM</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Cloud Workload Protection — posture management and configuration compliance</td></tr>
    <tr><td style={{padding: '3px 12px'}}>WAF</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Web Application Firewall — Layer 7 protection for web-facing workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud HSM</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Cloud-based Hardware Security Module for key management and cryptographic operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DDoS Protection</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Volumetric and application-layer DDoS mitigation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>TLS/SSL Certificate Management</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Automated certificate lifecycle — issuance, renewal, revocation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Encryption as a Service</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed encryption for tenant workloads and data</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Digital Forensics</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Forensic analysis capabilities for incident investigation</td></tr>
  </tbody>
</table>

## Compliance Alignment

CCS is designed with compliance requirements of government and regulated industries in mind.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Compliance Area</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCS Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Access Control</td><td style={{padding: '3px 12px'}}>Keycloak IAM with RBAC (OpenFGA), per-tenant realm isolation, least privilege via 18 pre-defined roles</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cryptography</td><td style={{padding: '3px 12px'}}>mTLS in transit, AES-256 at rest, Cloud HSM for key management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Audit & Accountability</td><td style={{padding: '3px 12px'}}>API gateway audit logs, SIEM integration, centralized log management with long-term retention</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity & Authentication</td><td style={{padding: '3px 12px'}}>MFA, SAML 2.0 federation, SSO, session management, short-lived tokens</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Data Sovereignty</td><td style={{padding: '3px 12px'}}>On-premises deployment, local data residency, geo-replicated backups within defined regions</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Workload Protection</td><td style={{padding: '3px 12px'}}>CSPM, WAF, firewall per tenant, per-cell network isolation via VPC</td></tr>
  </tbody>
</table>

## Privileged Access Management

CCS includes Privileged Access Management (PAM) as a foundation service, ensuring that privileged operations — administrative actions on infrastructure, emergency access, break-glass procedures — are controlled, logged, and subject to approval workflows. PAM is delivered as part of the MVP1 Foundation Services catalogue.
