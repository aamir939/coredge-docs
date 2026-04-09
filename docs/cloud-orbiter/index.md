---
title: Cloud Orbiter
sidebar_position: 0
---

# Cloud Orbiter

Cloud Orbiter is Coredge's Universal Application Control Plane — a centralized, enterprise-grade platform for managing the complete lifecycle of Kubernetes clusters, applications, virtual machines, and edge deployments from a single, unified dashboard.

Whether your infrastructure spans public clouds (AWS, Azure, GCP), on-premise data centres, or distributed edge sites, Cloud Orbiter gives IT teams complete control, visibility, and production-scale efficiency — without the complexity of managing each environment independently.

## What It Does

- **Universal Cluster Management** — Deploy, manage, upgrade, and monitor Kubernetes clusters across cloud, on-premise, and edge from one console
- **Multi-Cloud Support** — Native integration with AWS EKS, Azure AKS, and Google GKE for public cloud workloads
- **Edge Computing** — Provision and manage edge Kubernetes clusters at remote, isolated locations with centralized visibility
- **Application Lifecycle Management** — Deploy applications via Helm, GitOps, or container repositories with automated CI/CD
- **Centralized IAM & RBAC** — Zero-trust identity management with multi-tenant isolation, SSO integration (Okta, Google, Microsoft), and role-based access control
- **Observability & Monitoring** — Prometheus-based metrics, access logs, audit trails, and live log streaming
- **Backup & Restore** — Velero-based namespace and workload backup with S3-compatible storage endpoints
- **GitOps Automation** — Git-driven continuous delivery for infrastructure and applications

## Platform Overview

| Capability | Detail |
|---|---|
| Cluster Types | Kubernetes (new + import), Edge, EKS, AKS, GKE, CKP, Brownfield |
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
| **Network Engineers** | Manage edge sites and devices, deploy applications across multiple locations with centralized networking. |
| **IT Executives** | Full visibility, enterprise-grade security, and automated operations improve productivity and reduce costs. |

## Key Capabilities at a Glance

### Cluster Management
Create and manage Kubernetes clusters across any environment. Cloud Orbiter supports new cluster provisioning, brownfield import, edge deployments, and public cloud managed services — all from a single control plane.

### Application Lifecycle
Onboard applications from Helm repositories or Git. Deploy managed and unmanaged instances, track deployment state, and automate rollouts with GitOps-driven continuous delivery.

### Zero-Trust Security
Every action is authenticated and authorized. Centralized RBAC with three pre-defined roles (Tenant Admin, Project Admin, Default User) ensures least-privilege access. SSO integration eliminates credential sprawl.

### Observability Without Compromise
Prometheus-based monitoring tracks node health, CPU/RAM usage, pod capacity, and network I/O. Access logs capture every API call. Live logs stream real-time output from running containers.

### Backup & Disaster Recovery
Velero integration provides namespace-level backup and restore, persistent volume snapshots, and cluster migration capabilities — with configurable S3 storage endpoints.
