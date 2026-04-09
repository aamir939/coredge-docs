---
title: Use Cases
sidebar_position: 5
---

# Use Cases

## Who Benefits from Cloud Orbiter?

Cloud Orbiter is designed for a wide range of users and organizations that need to manage Kubernetes infrastructure and applications at scale, across multiple environments.

## By Persona

### Developers

Cloud Orbiter lets developers focus on building applications rather than managing infrastructure. Developers can:
- Deploy applications on any cluster — cloud, on-premise, or edge — with a few clicks
- Integrate with popular code repositories like GitHub for automated pull, patch, and upgrade workflows
- Access managed and unmanaged application instances through a centralized dashboard
- Use Helm and GitOps repositories for repeatable, version-controlled deployments

### DevOps Teams

DevOps teams leverage Cloud Orbiter's automation capabilities to:
- Manage multi-cluster deployments from a single control plane
- Run vulnerability scans on cluster workloads
- Monitor application health with Prometheus-based observability
- Automate delivery pipelines with GitOps-driven continuous deployment
- Set up alerting for cluster state changes, deployment failures, and scaling events

### Infrastructure Administrators

Infrastructure admins use Cloud Orbiter to:
- Manage VMs, Kubernetes clusters, and storage from one intuitive dashboard
- Provision clusters automatically without SSH or manual configuration
- Scale clusters up or down on demand
- Perform Day 2 operations — upgrades, scaling, backup, monitoring — at production scale
- Manage edge clusters at remote sites through centralized, outbound-agent connectivity

### IT Operations & SREs

IT Operations and Site Reliability Engineers benefit from:
- Centralized IAM and RBAC ensuring only authorized users access infrastructure
- Real-time monitoring with CPU, memory, node health, and pod capacity metrics
- Access logs capturing every API call for rapid incident investigation
- Backup and restore capabilities for disaster recovery and workload migration

### Security Engineers

Security teams use Cloud Orbiter for:
- Centralized RBAC ensuring least-privilege access across all clusters
- Vulnerability scanning for cluster workloads
- Complete audit trails via access logs (user identity, IP, timestamp, API endpoint)
- SSO integration eliminating credential sprawl across multiple systems
- Session management with configurable concurrent session limits and forced logout

### Network Engineers

Network engineers manage:
- Edge sites and devices with centralized dashboard visibility
- Multi-cloud cluster networking across AWS, Azure, and Google Cloud
- Ingress and service discovery through Cloud Orbiter's centralized ingress capability
- Location tagging for geo-aware cluster placement

## By Use Case

### Multi-Cloud Kubernetes Management

**Challenge:** Managing Kubernetes clusters across AWS EKS, Azure AKS, and Google GKE from separate consoles leads to operational fragmentation, inconsistent RBAC, and blind spots in monitoring.

**Solution:** Cloud Orbiter provides a single dashboard for all public cloud clusters. Onboard your AWS, Azure, and Google Cloud accounts once, then create and manage all clusters — regardless of cloud provider — from one interface with unified RBAC and observability.

### Edge Computing & Distributed Infrastructure

**Challenge:** Managing Kubernetes clusters at remote edge sites with limited connectivity and strict firewall rules is operationally complex.

**Solution:** Cloud Orbiter's outbound agent model enables full cluster lifecycle management without inbound firewall rules. Deploy workloads to edge nodes, upgrade clusters remotely, and monitor performance — all from the central console.

### Brownfield Cluster Consolidation

**Challenge:** Organizations with existing Kubernetes clusters across VMware, OpenShift, EKS-Anywhere, and on-premise need a unified management plane without rebuilding their infrastructure.

**Solution:** Cloud Orbiter's import feature brings any existing Kubernetes cluster — regardless of provider or distribution — under centralized management. Apply Add-on profiles, run health checks, enable backup, and manage applications immediately after import.

### Application Lifecycle Automation

**Challenge:** Deploying and updating applications across multiple clusters manually is error-prone and slow.

**Solution:** Cloud Orbiter's GitOps integration automates application deployment and updates. Define your desired application state in Git, and Cloud Orbiter continuously reconciles cluster state to match — enabling CD pipelines without custom tooling.

### Enterprise Identity & Compliance

**Challenge:** Managing users across multiple Kubernetes clusters with separate credential stores creates security gaps and compliance risk.

**Solution:** Cloud Orbiter centralizes identity with multi-tenant RBAC, SSO federation (Okta, Google, Microsoft), and comprehensive audit logs. A single identity management plane governs access across all clusters, with per-API audit trails for compliance reporting.

## Target Industries

| Industry | Primary Use |
|---|---|
| **Cloud Service Providers** | Multi-tenant Kubernetes-as-a-Service with full isolation, billing, and governance |
| **Enterprise IT** | Internal multi-cluster management with centralized RBAC, monitoring, and self-service provisioning |
| **Telecom / Edge** | Distributed edge cluster management for MEC (Multi-access Edge Computing) workloads |
| **Government & Sovereign Cloud** | Air-gapped or on-premise Kubernetes management with full data sovereignty |
| **Healthcare & Life Sciences** | Compliant, auditable cluster management with strict access controls |
| **Financial Services** | Secure, RBAC-governed Kubernetes operations with audit trails |
| **Retail & E-commerce** | Auto-scaling Kubernetes clusters for seasonal workload spikes |
