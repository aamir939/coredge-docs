---
title: Data Sheet
sidebar_position: 2
---

# CCP Data Sheet

Enterprise and sovereign cloud deployments demand self-service provisioning, strict multi-tenant isolation, high availability across availability zones, and unified governance over compute, storage, networking, and security. Traditional cloud management tools either lack the depth required for regulated environments or fail to deliver the operational simplicity that modern cloud teams expect.

Cirrus Cloud Platform (CCP) was purpose-built to address this gap — delivering hyper-scaler grade cloud management for sovereign, enterprise, and service provider environments with full lifecycle automation, centralized governance, and a self-service portal that scales to 10,000 VMs and 50,000 pods.

---

## Platform Overview

CCP is an enterprise Cloud Management Platform developed by Coredge, delivering hyper-scaler grade self-service capabilities for IaaS, PaaS, and SaaS workloads. The platform is composed of three primary layers:

- **Access Layer** — Self-Service Portal, Admin Console, REST API Gateway
- **Control Plane** — Workflow Orchestrator, IAM Engine (Keycloak), AuthZ Engine (OpenFGA), Metering & FinOps, Monitoring (Zabbix, Prometheus)
- **Data Plane** — OpenStack IaaS, Cloud Orbiter Kubernetes Orchestrator, NetApp Storage, Bare Metal (MaaS)

CCP organizes resources in a three-level hierarchy: **Tenant** (top-level boundary, one per customer account) → **Cell** (isolated project or environment) → **Resources** (cloud services consumed within a Cell). Quota is enforced at both Tenant and Cell level. Combined with Cirrus Cloud Platform (IaaS Orchestrator) and Cloud Orbiter (Kubernetes Orchestrator), CCP provides a unified platform for internal operations teams and end customers — enabling self-service provisioning, centralized governance, and optimized cloud spend through a single portal.

---

## Industry Use Cases

### Sovereign Cloud for Government

National and government organizations require complete data sovereignty, air-gapped deployment options, and compliance with local data residency regulations. CCP delivers a sovereign cloud platform with per-tenant Keycloak realm isolation, SAML 2.0 federation with Microsoft ADFS and Entra, AES-256 encryption at rest, and mTLS in-transit — purpose-built for critical national infrastructure.

### Enterprise Private Cloud

Large enterprises in regulated industries — finance, healthcare, and energy — need a private cloud with the self-service convenience of a public cloud, without sacrificing control. CCP provides on-demand VM, container, bare metal, storage, and networking provisioning with full RBAC governance, audit trails, and policy-based quota enforcement, all deployed on enterprise-owned infrastructure.

### Managed Cloud Services for Telecom & Service Providers

Telecom operators and managed service providers need a multi-tenant platform to offer cloud services to multiple customers from shared infrastructure. CCP's multi-tenant IAM, metering, showback, and quota management enable providers to deliver IaaS and PaaS as a service — with per-tenant billing, notional invoicing, and full spend visibility — at national scale.

---

## Key Features

### Self-Service Provisioning Portal

A unified self-service portal for end users and administrators to provision and manage the full service portfolio — VMs, containers, bare metal, block/object/file storage, networking, databases, and security services — with no manual intervention from the operations team. Admin Console handles platform-level governance, quota management, and tenant lifecycle.

### Multi-Tenant IAM & RBAC

Keycloak v24.0.5-based identity management with per-tenant realm isolation, SAML 2.0 federation, and 18 pre-defined RBAC roles across Tenant and Cell levels. OpenFGA handles fine-grained authorization at every API boundary. Supports Microsoft ADFS, Microsoft Entra, and any SAML 2.0-compatible enterprise identity provider.

### High Availability Architecture

Active-Passive dual cluster per region — Cluster 1 (primary) in AZ1, Cluster 2 (standby) in AZ2 — with automated GSLB-based failover and 2N+1 quorum detection. PostgreSQL Logical/Streaming Replication and MongoDB Active-Active with change-stream ensure database resilience. Backup runs incrementally every 30 minutes, with full backup every 24 hours and 3-month geo-replicated retention.

### Comprehensive Service Portfolio

CCP delivers a full cloud service portfolio across three delivery phases. MVP1 covers Compute (VM, CaaS, BMaaS), Storage (Block, Object, File), Networking (LB, VPN, Firewall, NAT, VPC), Security (SIEM, CSPM, WAF), Database (Oracle, MongoDB), Monitoring, Foundation services, and Backup. MVP2 and MVP3 extend with Archival Storage, CDN, MS SQL DBaaS, Cloud HSM, DDoS Protection, Kafka-as-a-Service, DRaaS, and BWaaS.

### Metering, FinOps & Quota Management

Built-in metering engine tracks resource consumption at the Tenant and Cell level in real time. Showback reporting, notional invoicing, and policy-based quota enforcement give finance and operations teams complete visibility into cloud spend. Usage data integrates with the BSS Portal (ATB) for customer billing and onboarding.

### Zero Trust Security

Defense-in-depth security model with mTLS encryption in transit, AES-256 encryption at rest, and fine-grained authorization via OpenFGA with 18 pre-defined RBAC roles. Per-tenant Keycloak realm isolation, SAML 2.0 federation, and integration with enterprise identity providers (Microsoft ADFS, Entra, Zscaler VPN) ensure that no action is trusted by default.

---

## Key Benefits

### Automated Lifecycle Management

From tenant onboarding to resource provisioning — fully automated. Self-service portal eliminates manual ticketing and operations team involvement. Provision → operate → monitor → bill without human intervention in the data path.

### Hyper-Scaler Grade Scale

Scales to 10,000 VMs and 50,000 pods on a single platform. Add worker nodes on demand as workloads grow. Horizontally scalable architecture with no rearchitecting required to expand capacity.

### Sovereign & Compliance-Ready

Purpose-built for environments where data sovereignty, regulatory compliance, and audit trails are non-negotiable. Per-tenant isolation at the identity, network, and data layer. Full audit logging across all API actions for compliance reporting.

### Unified Control Plane

A single management plane across all regions and availability zones. No separate consoles for compute, storage, network, or security — all managed through one portal with consistent RBAC and audit trail. Reduces operational complexity and training overhead for cloud operations teams.

### Optimized Cloud Spend

Policy-based quota enforcement at Tenant and Cell level prevents runaway spend. Showback and notional invoicing give finance teams visibility into cost allocation without requiring a separate FinOps tool. Usage data feeds directly into the BSS Portal for automated customer billing.

### Enterprise-Grade Security by Default

mTLS in-transit and AES-256 at-rest are applied platform-wide — not optional add-ons. Zero-trust authorization via OpenFGA ensures least-privilege access at every API boundary. Per-tenant identity realm isolation prevents cross-tenant data leakage even on shared infrastructure.

---

## Contact

For more information or questions about Coredge's Cirrus Cloud Platform:

- **Website:** [https://coredge.io](https://coredge.io)
- **Email:** [info@coredge.io](mailto:info@coredge.io)

---

[Download PDF](/downloads/datasheets/CCP_Datasheet.pdf)
