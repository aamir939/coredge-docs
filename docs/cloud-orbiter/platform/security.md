---
title: Security
sidebar_position: 3
---

# Security

## Zero-Trust Security Model

Cloud Orbiter is built on a **zero-trust security principle** — no action, user, or cluster connection is trusted by default. Every request is authenticated, every action is authorized, and every interaction is logged.

Security is enforced at every layer:
- **Identity Layer** — Authentication via Keycloak with SSO federation
- **Authorization Layer** — RBAC governs every resource operation
- **Network Layer** — Outbound-only agent connections; no inbound firewall rules required
- **Session Layer** — Configurable session limits, concurrent session control, and forced logout
- **Audit Layer** — All API calls are captured in access logs with user identity, IP, timestamp, and endpoint

## Identity & Access Management

### Multi-Tenant Isolation

Each organization (tenant) operates in a fully isolated environment within Cloud Orbiter. Users, groups, roles, and resources are scoped to their tenant and cannot access resources belonging to other tenants.

### User Types

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>User Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Local Users</td><td style={{padding: '3px 12px'}}>Created and managed within Cloud Orbiter. Credentials stored in the platform. Suitable for development environments or isolated deployments.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>External Users</td><td style={{padding: '3px 12px'}}>Authenticated via external IDPs (Okta, Google, Microsoft, or any OpenID Connect provider). Cloud Orbiter creates a local representation of the user after IDP authentication.</td></tr>
  </tbody>
</table>

### RBAC — Role-Based Access Control

Cloud Orbiter provides three pre-defined roles with granular permission sets:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Scope</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Permissions</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Tenant Admin</td><td style={{padding: '3px 12px'}}>Entire tenant</td><td style={{padding: '3px 12px'}}>Full control — user management, group management, IDP configuration, roles, applications, notifications, settings</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Project Admin</td><td style={{padding: '3px 12px'}}>Assigned project(s)</td><td style={{padding: '3px 12px'}}>All operations within project — manage users, assign Project Admins, create/update/delete clusters, deploy applications, manage instances</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Default User</td><td style={{padding: '3px 12px'}}>Assigned project(s)</td><td style={{padding: '3px 12px'}}>Create clusters, list clusters (read-only), access app repositories, view test suites, list backup/recovery, list hosts and groups</td></tr>
  </tbody>
</table>

RBAC is applied at every layer — only authorized users can access or manage specific resources within their assigned tenant and project scope.

## Single Sign-On (SSO) Integration

Cloud Orbiter supports SSO via any OpenID Connect (OIDC)-compatible identity provider. Three providers are pre-integrated:

### Okta Integration

1. Create an Okta account and add a new application
2. In Cloud Orbiter: **Settings → Overview → Security → Identity Provider → + Add Identity Provider**
3. Provide: Client ID, Client Secret, Authorization URL, Token URL
4. Save and test the SSO login flow

### Google Integration

1. Create a Google Cloud project and configure OAuth 2.0 credentials
2. In Cloud Orbiter: **Settings → Overview → Security → Identity Provider → + Add Identity Provider**
3. Provide: Client ID, Client Secret from Google Identity
4. Save and test the SSO login flow

### Microsoft Integration

1. Register an application in Microsoft Azure Active Directory
2. In Cloud Orbiter: **Settings → Overview → Security → Identity Provider → + Add Identity Provider**
3. Provide: Client ID, Client Secret from Azure AD App Registration
4. Save and test the SSO login flow

Once SSO is configured, users authenticate through their corporate identity provider — no separate Cloud Orbiter credentials required.

## Session Management

### Concurrent Session Control

Tenant Administrators can configure concurrent session limits per user:

- **Setting:** Navigate to **Settings → User Session Config**
- **Limit:** Define the maximum number of simultaneous sessions per user

### Session Exceedance Handling

When a user exceeds their session limit, Cloud Orbiter offers two behaviours:

| Option | Behaviour |
|---|---|
| **Terminate Oldest Session** | Automatically terminates the session with the oldest Last Access Time |
| **Deny New Sessions** | Blocks new login attempts until the user frees an existing session |

### Force Logout from All Devices

Users can force-logout all active sessions:
1. Go to **Account Settings**
2. Select **Sign Out of All Devices**

This logs the user out from all devices (mobile, tablet, desktop) simultaneously — useful when unauthorized access is suspected.

## Password Policy

Cloud Orbiter enforces a default password policy. Tenant Administrators can customize these settings:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Requirement</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Minimum Length</td><td style={{padding: '3px 12px'}}>8 characters</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Maximum Length</td><td style={{padding: '3px 12px'}}>32 characters</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Special Characters</td><td style={{padding: '3px 12px'}}>At least 1 (!, @, #, $, %, ^, &, *, ?)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Uppercase Letters</td><td style={{padding: '3px 12px'}}>At least 1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Lowercase Letters</td><td style={{padding: '3px 12px'}}>At least 1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Digits</td><td style={{padding: '3px 12px'}}>At least 1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Password History</td><td style={{padding: '3px 12px'}}>Must not match previous 3 passwords</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Personal Information</td><td style={{padding: '3px 12px'}}>Must not contain email address or User ID</td></tr>
  </tbody>
</table>

## Access Logs & Audit Trail

Cloud Orbiter captures detailed access logs for every tenant:

- **Per-entry data:** User identity, date/time, IP address, HTTP method, API endpoint accessed
- **Access:** Settings → Access Logs (Tenant Admin only)
- **Use cases:** Security auditing, anomaly detection, compliance reporting, incident investigation

Example log entry:

| Time | Username | Operation | IP Address | API |
|---|---|---|---|---|
| &lt;timestamp&gt; | &lt;user-email&gt; | &lt;HTTP method&gt; | &lt;client-ip&gt; | &lt;api-endpoint&gt; |

Regular review of access logs is recommended to detect and resolve potential security threats.
