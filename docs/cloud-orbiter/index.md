---
title: Cloud Orbiter
sidebar_position: 0
---

# Cloud Orbiter

Cloud Orbiter is Coredge's Universal Application Control Plane — a centralized, enterprise-grade platform for managing the complete lifecycle of CKP Kubernetes clusters, applications, and virtual machines from a single, unified dashboard.

Whether your infrastructure spans on-premise data centres or bare metal deployments, Cloud Orbiter gives IT teams complete control, visibility, and production-scale efficiency — without the complexity of managing each environment independently.

## What It Does

- **CKP Cluster Management** — Deploy, manage, upgrade, and monitor CKP (Coredge Kubernetes Platform) clusters across on-premise and bare metal environments from one console
- **Enterprise-Grade Kubernetes** — Native CKP integration delivers CNCF-certified, enterprise-grade Kubernetes with automated lifecycle management
- **Application Lifecycle Management** — Deploy applications via Helm, GitOps, or container repositories with automated CI/CD
- **Centralized IAM & RBAC** — Zero-trust identity management with multi-tenant isolation, SSO integration (Okta, Google, Microsoft), and role-based access control
- **Observability & Monitoring** — Prometheus-based metrics, access logs, audit trails, and live log streaming
- **Backup & Restore** — Velero-based namespace and workload backup with S3-compatible storage endpoints
- **GitOps Automation** — Git-driven continuous delivery for infrastructure and applications

## CKP — Coredge Kubernetes Platform

CKP is Coredge's enterprise-grade Kubernetes distribution, purpose-built for on-premise, bare metal, edge, and IoT deployments. The platform operates across two layers:

**Distribution Layer** — Delivers custom-built Kubernetes packages (kubeadm, kubelet, kubectl) and Coredge-hosted core component images, ensuring consistent and reliable Kubernetes deployments across all environments.

**Management Layer** — Handles cluster lifecycle management through CAPI (Cluster API) with Managed Control Plane, providing automated provisioning, scaling, and upgrades.

| Specification | Details |
|---------------|---------|
| **Kubernetes Versions** | v1.33.7 – v1.35.1 (CNCF Certified) |
| **Operating Systems** | Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9 |
| **Infrastructure Provider** | Orbiter Baremetal (BMS) |
| **Architectures** | AMD64, ARM64 |

## Platform Overview

| Capability | Detail |
|---|---|
| Cluster Type | CKP (Coredge Kubernetes Platform) |
| Identity | Multi-tenant · SSO (Okta, Google, Microsoft) · RBAC |
| Application Delivery | Helm · GitOps · Container Registry · App Repositories |
| Observability | Prometheus · Grafana · Access Logs · Audit Logs · Live Logs |
| Backup | Velero · S3 · Namespace-level · Persistent Volume support |
| VM Management | KubeVirt-based VMs on Kubernetes clusters |
| Security | Zero-Trust · RBAC · Vulnerability Scanning · Session Management |

## Who It's For

| Persona | How Cloud Orbiter Helps |
|---|---|
| **Developers** | Deploy applications on any cluster without managing infrastructure. Pull code from GitHub, patch, and upgrade quickly. |
| **DevOps Teams** | Automate workflows, manage multi-cluster deployments, run vulnerability scans, and monitor with centralized dashboards. |
| **Infrastructure Admins** | Manage VMs, clusters, storage, and networking from a single intuitive dashboard at production scale. |
| **IT Operations & SREs** | Centralized IAM and RBAC ensures only authorized users access infrastructure. Monitoring and alerting reduces incident response time. |
| **Security Engineers** | Vulnerability scanning, centralized IAM, RBAC controls, and audit logs ensure compliance and security. |
| **Network Engineers** | Manage cluster networking and deploy applications across multiple locations with centralized visibility. |
| **IT Executives** | Full visibility, enterprise-grade security, and automated operations improve productivity and reduce costs. |

## Key Capabilities at a Glance

### Cluster Management
Create and manage CKP Kubernetes clusters across on-premise and bare metal environments. Cloud Orbiter provides complete cluster provisioning and lifecycle management from a single control plane.

### Application Lifecycle
Onboard applications from Helm repositories or Git. Deploy managed and unmanaged instances, track deployment state, and automate rollouts with GitOps-driven continuous delivery.

### Zero-Trust Security
Every action is authenticated and authorized. Centralized RBAC with three pre-defined roles (Tenant Admin, Project Admin, Default User) ensures least-privilege access. SSO integration eliminates credential sprawl.

### Observability Without Compromise
Prometheus-based monitoring tracks node health, CPU/RAM usage, pod capacity, and network I/O. Access logs capture every API call. Live logs stream real-time output from running containers.

### Backup & Disaster Recovery
Velero integration provides namespace-level backup and restore, persistent volume snapshots, and cluster migration capabilities — with configurable S3 storage endpoints.
