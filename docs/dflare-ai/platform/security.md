---
title: Security & Compliance
sidebar_position: 3
---

# Security & Compliance

## Zero-Trust Security Model

Dflare AI implements defense-in-depth with zero-trust principles — no action is trusted by default, every request is authenticated and authorized at multiple levels:

| Security Layer | Mechanism | Protection |
|---|---|---|
| **Authentication** | OAuth2/JWT via enterprise IAM, RS256, short TTL, MFA | Identity verification for every interaction |
| **Authorization** | RBAC + ABAC via auth service | Role and context validation on every action |
| **Transport** | TLS 1.2+, mTLS between services, HSTS | Encrypted communication, mutual authentication |
| **Network Isolation** | VRF/VLAN (Ethernet), Partition Key (IB) | Hardware-enforced tenant traffic separation |
| **Storage Isolation** | Access Control Map + Partition Key | Two independent layers protecting tenant data |
| **Compute Isolation** | K8s namespaces, Slurm cgroups v2 | Workload-level resource confinement |
| **Audit** | Correlation ID, immutable logs, object storage backup | Full traceability of every action |
| **Firewall** | Perimeter firewall with ACLs | Strict access control at network perimeter |

## Compliance Alignment

| Standard | Control Area | Implementation |
|---|---|---|
| **NIST 800-53 Rev 5** | AC — Access Control | RBAC via IAM, SSO, scoped tokens, tenant realm isolation |
| **NIST 800-53 Rev 5** | AU — Audit | Immutable logs, session tracking, telemetry pipeline |
| **ISO/IEC 27001** | A.9 Access Control | IAM with RBAC, SSO, scoped roles per domain/project/org |
| **ISO/IEC 27001** | A.10 Cryptography | TLS/mTLS, PKI, certificate lifecycle management |
| **HIPAA** | Access Control | IAM, RBAC, ACLs, SSO, scoped tokens per tenant |
| **HIPAA** | Audit Controls | Immutable logs, session playback, telemetry pipeline |

## Data Protection

- All metering and billing data stored in platform-controlled databases with no tenant write access
- Metering data backed up to object storage on a configurable schedule
- HA time-series storage with replication for metrics data
- Object storage lifecycle rules: configurable tiering and retention policies
- Sensitive data anonymized where feasible; compliant with GDPR data minimization principles
