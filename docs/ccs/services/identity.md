---
title: Identity & Access Management
sidebar_position: 4
---

# Identity & Access Management

**Business Value:** CCS delivers enterprise-grade, multi-tenant identity and access management as a foundational service — not an add-on. Every tenant gets a dedicated identity domain, every user gets the right level of access and no more, and every action is attributed to an authenticated, authorized identity.

## IAM Architecture

CCS IAM is built on two complementary components:

- **Keycloak v24.0.5** — The authentication engine: manages user identities, sessions, tokens, MFA, and federation with external identity providers
- **OpenFGA** — The authorization engine: evaluates fine-grained role-based access control for every resource operation based on relationship tuples

This separation ensures that authentication (who you are) and authorization (what you can do) are independently scalable, auditable, and maintainable.

## Per-Tenant Keycloak Realm Isolation

The most critical architectural property of CCS IAM is that every tenant gets a **dedicated Keycloak realm** — a completely isolated identity domain.

Unlike platforms that implement multi-tenancy as namespace-level separation within a shared identity store, CCS creates a fully independent Keycloak realm per tenant, with:

- Its own user database and password policies
- Its own role definitions and group memberships
- Its own MFA configuration and authentication flows
- Its own identity federation connections (one tenant can federate with ADFS; another with a different IdP)
- Its own session management and token configuration

A user in Tenant A's realm cannot authenticate against Tenant B's realm under any circumstance — there is no shared identity layer that could create cross-tenant leakage.

## Role-Based Access Control — 18 Pre-Defined Roles

Authorization is enforced through OpenFGA with 18 pre-defined RBAC roles organized across two levels:

### 7 Organization-Level Roles

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Scope</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capabilities</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Platform Super Admin</td><td style={{padding: '3px 12px'}}>Global (all tenants)</td><td style={{padding: '3px 12px'}}>Full platform control — all tenants, infrastructure, configurations, quota management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant Admin</td><td style={{padding: '3px 12px'}}>Tenant</td><td style={{padding: '3px 12px'}}>Full control within tenant — users, cells, quotas, identity settings, service policies</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Organization Admin</td><td style={{padding: '3px 12px'}}>Organization within Tenant</td><td style={{padding: '3px 12px'}}>Manage cells, users, and resource policies within their organization</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cell Admin</td><td style={{padding: '3px 12px'}}>Cell (Project)</td><td style={{padding: '3px 12px'}}>Create and manage resources, invite users, and configure access within a specific cell</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Member</td><td style={{padding: '3px 12px'}}>Cell (Project)</td><td style={{padding: '3px 12px'}}>Deploy and manage workloads, provision resources — full operational access within the cell</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Viewer</td><td style={{padding: '3px 12px'}}>Cell (Project)</td><td style={{padding: '3px 12px'}}>Read-only access to resource status, dashboards, and usage metrics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Billing Admin</td><td style={{padding: '3px 12px'}}>Tenant</td><td style={{padding: '3px 12px'}}>Access metering data, showback reports, and quota management without resource provisioning rights</td></tr>
  </tbody>
</table>

### 11 Service-Specific Roles

Service-specific roles provide granular access to individual service categories, enforcing the principle of least privilege:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service Domain</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Access Scope</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Compute Admin</td><td style={{padding: '3px 12px'}}>Compute (VM, CaaS, BMaaS)</td><td style={{padding: '3px 12px'}}>Provision, manage, and decommission compute resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage Admin</td><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Manage block, object, file, and archival storage resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network Admin</td><td style={{padding: '3px 12px'}}>Networking</td><td style={{padding: '3px 12px'}}>Configure VPCs, load balancers, VPN, firewall, and DNS resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security Admin</td><td style={{padding: '3px 12px'}}>Security Services</td><td style={{padding: '3px 12px'}}>Manage WAF, SIEM, CSPM, HSM, and security policy configuration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database Admin</td><td style={{padding: '3px 12px'}}>Database Services</td><td style={{padding: '3px 12px'}}>Provision and manage DBaaS instances (Oracle, MongoDB, MS SQL, MariaDB)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Monitoring Admin</td><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Configure alarms, notification policies, and access operational dashboards</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup Admin</td><td style={{padding: '3px 12px'}}>Backup Services</td><td style={{padding: '3px 12px'}}>Manage backup policies, schedules, and restoration operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity Admin</td><td style={{padding: '3px 12px'}}>IAM</td><td style={{padding: '3px 12px'}}>Manage users, roles, MFA policies, and federation configuration within the tenant</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Kubernetes Admin</td><td style={{padding: '3px 12px'}}>Container / CaaS</td><td style={{padding: '3px 12px'}}>Full Kubernetes cluster management, application deployment, and namespace administration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Read-Only Operator</td><td style={{padding: '3px 12px'}}>All services</td><td style={{padding: '3px 12px'}}>Read access to all resource states and metrics; no provisioning or configuration rights</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Support Engineer</td><td style={{padding: '3px 12px'}}>Operations</td><td style={{padding: '3px 12px'}}>Operational access for troubleshooting without privilege to modify resources or access data</td></tr>
  </tbody>
</table>

## Authentication Mechanisms

### OAuth2 / OpenID Connect

All CCS portal and API authentication uses OAuth2/OIDC, implemented through Keycloak:

- **JWT Tokens:** Short-lived JSON Web Tokens for API authentication
- **Token Refresh:** Seamless token refresh for long-lived sessions without re-authentication
- **PKCE Flow:** Proof Key for Code Exchange for secure browser-based authentication
- **Service-to-Service:** Client credentials flow for microservice-to-microservice authentication

### Multi-Factor Authentication

CCS supports multiple MFA methods through Keycloak's MFA engine:

- **TOTP (Time-based OTP):** Standard authenticator apps (Google Authenticator, Microsoft Authenticator)
- **SMS:** One-time codes delivered via SMS to the user's registered mobile number
- **Email OTP:** One-time codes delivered via email
- **MFA Policy Enforcement:** Administrators can mandate MFA for specific roles (e.g., all Cell Admins must use TOTP)
- **Break-Glass Procedures:** Documented emergency access procedures for MFA device loss

## Identity Federation

### SAML 2.0 Federation

CCS supports SAML 2.0 federation with enterprise identity providers, enabling organizations to use their existing corporate identity infrastructure:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Identity Provider</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Microsoft ADFS</td><td style={{padding: '3px 12px'}}>SAML 2.0</td><td style={{padding: '3px 12px'}}>Enterprise SSO for organizations using on-premises Windows Active Directory</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Microsoft Entra (Azure AD)</td><td style={{padding: '3px 12px'}}>SAML 2.0 / OIDC</td><td style={{padding: '3px 12px'}}>Cloud-based enterprise identity for hybrid organizations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BSS Portal (ATB)</td><td style={{padding: '3px 12px'}}>SAML 2.0 / API</td><td style={{padding: '3px 12px'}}>Customer onboarding and subscription identity from the billing system</td></tr>
  </tbody>
</table>

When a user authenticates via a federated IdP, Keycloak maps the external identity to the appropriate CCS tenant realm and role assignment — without storing the user's credentials in CCS.

## Session Management

- **Session Timeout:** Configurable session idle and absolute timeout per tenant
- **Admin Force Logout:** Platform administrators and tenant admins can force-terminate user sessions immediately (for security incidents or employee departure)
- **Concurrent Session Control:** Optionally limit the number of concurrent sessions per user
- **Session Audit:** All session creation, refresh, and termination events logged with timestamp and IP address

## Privileged Access Management

CCS includes Privileged Access Management (PAM) as a Foundation Service in MVP1:

- **Privileged Session Recording:** Administrative sessions to infrastructure are recorded for audit
- **Just-in-Time Access:** Temporary privilege elevation with automatic expiration
- **Approval Workflows:** High-privilege operations require approval from a second administrator
- **Credential Vaulting:** Privileged credentials stored in encrypted vault; checked out per session, never exposed directly

## Tenant Isolation — Summary

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Isolation Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Mechanism</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>What It Isolates</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Identity</td><td style={{padding: '3px 12px'}}>Dedicated Keycloak realm per tenant</td><td style={{padding: '3px 12px'}}>Users, roles, sessions, authentication flows, federation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Authorization</td><td style={{padding: '3px 12px'}}>OpenFGA with tenant-scoped relationship tuples</td><td style={{padding: '3px 12px'}}>All resource operations — no cross-tenant authorization</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>VPC with tenant-isolated routing (VXLAN/EVPN)</td><td style={{padding: '3px 12px'}}>All network traffic between tenants</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Tenant-scoped storage quotas and access policies</td><td style={{padding: '3px 12px'}}>Storage access — no cross-tenant volume or bucket access</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Compute</td><td style={{padding: '3px 12px'}}>OpenStack tenant isolation, Kubernetes namespaces</td><td style={{padding: '3px 12px'}}>VM and container resource visibility and access</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Metering</td><td style={{padding: '3px 12px'}}>Scoped metering per tenant/cell/user</td><td style={{padding: '3px 12px'}}>Usage data and billing records — no cross-tenant visibility</td></tr>
  </tbody>
</table>
