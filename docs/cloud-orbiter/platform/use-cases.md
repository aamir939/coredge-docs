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
- Deploy applications on CKP clusters with a few clicks
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
- Manage clusters through centralized, outbound-agent connectivity

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
- Cluster networking across on-premise and bare metal environments
- Ingress and service discovery through Cloud Orbiter's centralized ingress capability
- Location tagging for geo-aware cluster placement

## By Use Case

### Enterprise Kubernetes Management with CKP

**Challenge:** Managing Kubernetes clusters across multiple on-premise data centers and bare metal environments from separate consoles leads to operational fragmentation, inconsistent RBAC, and blind spots in monitoring.

**Solution:** Cloud Orbiter with CKP provides a single dashboard for all your Kubernetes infrastructure. Deploy enterprise-grade CKP clusters across on-premise and bare metal environments and manage them from one interface with unified RBAC and observability.

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
| **Telecom** | Distributed cluster management for on-premise workloads |
| **Government & Sovereign Cloud** | Air-gapped or on-premise Kubernetes management with full data sovereignty |
| **Healthcare & Life Sciences** | Compliant, auditable cluster management with strict access controls |
| **Financial Services** | Secure, RBAC-governed Kubernetes operations with audit trails |
| **Retail & E-commerce** | Auto-scaling Kubernetes clusters for seasonal workload spikes |
