---
title: Identity & Access
sidebar_position: 5
---

# Identity & Access

**Business Value:** Serve multiple tenants — internal teams or external customers — from shared infrastructure with confidence that each tenant's data, workloads, and resources are completely isolated.

## Six-Role Hierarchy

1. **Platform Super Admin** *(Global)* — Full control over all tenants, infrastructure, and platform configuration

2. **Domain Admin** *(Tenant)* — Full control within their tenant: users, projects, clusters, quotas, networking

3. **Organization Admin** *(Organization)* — Manage projects and users within their organization

4. **Project Admin** *(Project)* — Create/manage clusters, provision bare metal, deploy workloads

5. **Member** *(Project)* — Deploy workloads, submit jobs, view monitoring — operational access

6. **Viewer** *(Project)* — Read-only access to cluster status, dashboards, and resource usage

## Tenant Isolation — Enforced at Every Layer

| Layer | Mechanism | What It Isolates |
|---|---|---|
| **Identity** | Dedicated IAM realm per tenant | Users, roles, sessions, authentication flows |
| **Network (Ethernet)** | VRF + VLAN per tenant via fabric controller | All Ethernet traffic between tenants |
| **Network (InfiniBand)** | Partition Key per tenant via fabric manager | GPU-to-GPU and GPU-to-storage traffic at IB switch hardware level |
| **Storage** | Access Control Map per tenant | Filesystem directory access restricted to tenant's IB IPs |
| **Compute** | K8s namespaces + Slurm accounts | Workload and resource isolation |
| **Billing** | Scoped metering per tenant/project/user | Usage data and billing records |

## Authentication & Token Security

- OAuth2/OpenID Connect with JWT tokens signed using RS256
- Short token TTL to minimize exposure window
- TLS 1.2+ on all communications, mTLS between internal services
- MFA support: TOTP, SMS, email, hardware keys
- LDAP/Active Directory federation for enterprise SSO
- Session management with admin force-logout capability
