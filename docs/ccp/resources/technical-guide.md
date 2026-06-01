---
title: Technical Guide
sidebar_position: 2
---

# Cirrus Cloud Platform

## Reference Architecture & Technical Guide

A comprehensive technical reference for an enterprise OpenStack and Kubernetes cloud orchestration platform — covering system design, architecture decisions, operational behaviour, and deployment patterns.

**Version 1.0 | 2026**

---

## 01 Introduction

Cirrus Cloud Platform (CCP) is a cloud self-service portal and orchestration layer that delivers hyperscaler-like consumption patterns over OpenStack and Kubernetes infrastructure. The platform unifies Infrastructure-as-a-Service and Container-as-a-Service into a single portal, REST API, and CLI surface — enabling seamless provisioning, monitoring, governance, and metering of compute, storage, networking, and Kubernetes resources for multi-tenant enterprise, sovereign, and service-provider clouds.

This document presents a reference architecture similar in structure to leading cloud providers, focusing on system design, architectural decisions, and operational behaviour. It is intended for cloud architects, platform engineers, and operators deploying or evaluating CCP as the orchestration layer of a regulated, sovereign, or commercial cloud.

> **KEY INSIGHT**
>
> This guide serves as the definitive technical reference for architects, engineers, and operators deploying or evaluating CCP for production enterprise and sovereign cloud workloads.

---

## 02 Problem Statement

Modern enterprise and sovereign clouds need to deliver:

- Hyperscaler-grade self-service UX over open infrastructure
- Unified IaaS and CaaS lifecycle from one portal and API
- Strong multi-tenant isolation across compute, network, storage, and identity
- Fine-grained quota, role, and audit governance per organisation and project
- Region- and AZ-aware deployment with predictable performance and resilience

> **KEY INSIGHT**
>
> Public clouds have set the bar for self-service speed, multi-tenant governance, and consumption-based metering. OpenStack and Kubernetes deliver the engine but expose operator-oriented surfaces that are fragmented across APIs and lack the consumer-grade UX, quota workflows, and policy guardrails expected by tenant teams. CCP closes this gap.

---

## 03 Design Principles

### 3.1  Hyperscaler-Like Self-Service

Every tenant interaction — virtual machine, volume, cluster, bucket, load balancer, role — is exposed as a single-page, wizard-driven workflow with Card and Table views, search, filters, view preferences, export, and bulk operations. Tenants never need to fall back to native OpenStack or Kubernetes CLIs for routine work.

### 3.2  Unified IaaS and CaaS

A single control plane manages OpenStack-based virtual infrastructure and Kubernetes clusters (both CCP-managed and externally imported), eliminating two-portal sprawl and giving tenants a coherent experience across VMs, volumes, networks, and clusters.

### 3.3  Multi-Tenant Isolation by Design

Isolation is enforced across every layer:

- Organisation (tenant) → Project → User identity hierarchy
- Region and Availability Zone scope on every long-lived resource
- VPC, Subnet, and Security Group network boundaries
- Per-tenant and per-project quotas with administrator-approved increases
- Per-bucket Access Keys with expiry for object storage

### 3.4  Declarative Resource Lifecycle

All resources — VMs, volumes, snapshots, networks, clusters, addons — are modelled declaratively and exposed via REST API for IaC and automation workflows. Kubernetes objects can be created and edited as YAML directly in the portal.

### 3.5  Governance and Metering as First-Class Services

Activity logs, metering, quotas, and quota-request approvals are built-in platform primitives — not afterthoughts — surfaced through dedicated Tenant Admin views.

---

## 04 Reference Architecture

The platform is composed of three primary layers — Access, Control, and Data — connected by authenticated, idempotent APIs.

![Figure 1: CCP Reference Architecture](/img/ccp/technical-guide/image1.png)

*Figure 1: CCP reference architecture — from tenants to OpenStack + Kubernetes infrastructure.*

### 4.1  Access Layer

- Self-service portal (Dashboard, Resources, Tenant Admin)
- REST APIs
- CLI and automation scripts (driven by the REST API)

### 4.2  Control Plane

- Workflow Orchestrator
- Compute Manager (virtual machine lifecycle)
- Storage Manager (block, file, object, archival, registry)
- Network Manager (VPC, subnets, security groups, NAT, EIP, load balancers)
- Kubernetes Cluster Manager (managed and imported clusters, addons)
- Identity and Access Service
- Metering and Quota Service
- Monitoring and Alerting Service
- Audit Service (Organization Activity Logs)

### 4.3  Data Plane

- OpenStack-managed compute hosts (KVM hypervisors) running tenant VMs
- Kubernetes worker fleet (managed CCP clusters and imported clusters)
- Block, file, object, and archival storage back-ends
- Container Registry for OCI images
- SDN fabric enforcing VPC, security group, NAT, and load-balancer policy

---

## 05 Control Plane Architecture

The control plane is responsible for orchestration, policy enforcement, and maintaining the desired state of the system. It operates as a set of loosely coupled microservices communicating over authenticated internal APIs (gRPC/REST), designed for idempotency and eventual consistency.

![Figure 2: Control Plane Architecture](/img/ccp/technical-guide/image2.png)

*Figure 2: Control-plane microservices architecture with guarantees and design rationale.*

### Core Components

#### Workflow Engine

Executes declarative workflows for resource provisioning and lifecycle operations. It consumes high-level tenant intents — for example, "create VM", "create cluster", "raise quota request" — and decomposes them into ordered, retriable steps against OpenStack, Kubernetes, and supporting services. Each step is idempotent and emits state transitions to the orchestration store.

#### Compute Manager

Translates VM specifications (network, image, flavor, root volume, additional volumes, firewall rules, key pair, cloud-init) into Nova operations. Handles the full set of CCP lifecycle actions: resize, shutoff, pause, reboot, hard reboot, lock, suspend, snapshot, attach and detach volumes, attach and detach networks and security groups, and console access.

#### Storage Manager

Owns the lifecycle of volumes and their snapshots, file systems with Access Points, object-storage buckets (including versioning, object-lock, replication, and access-key issuance), the Coldline archival tier, and the Container Registry.

#### Network Manager

Programs VPCs, subnets, security groups, NAT gateways, Elastic IPs, and load balancers (Application HTTP/HTTPS and Network TCP/UDP) over the underlying SDN. It enforces L3 segmentation between tenant VPCs and projects and manages certificate lifecycle for application load balancers.

#### Kubernetes Cluster Manager

Provisions managed Kubernetes clusters (with auto-scaling node pools), onboards imported clusters via downloadable bootstrap manifests, installs addons from the Addons marketplace, and exposes a built-in terminal for Kubectl operations against managed and imported clusters.

#### Identity and Access Service

Integrates with enterprise identity providers. Models the Organisation → Project → User hierarchy with System Roles and Custom Roles, scoped at Tenant or Project level. Enforces RBAC at every API boundary.

#### Metering and Quota Service

Aggregates resource consumption signals into per-organisation and per-project meters; enforces quotas (block storage, object storage, load balancers, VMs, file systems and more) with health indicators that move from green at low utilisation to action-required near 100 per cent; routes quota-increase requests — with priority and justification — to administrators for approval or rejection.

#### Audit Service (Organization Activity Logs)

Centralises events — user actions, system tasks, resource creations and modifications — into a searchable, filterable, real-time audit feed at organisation scope.

### Guarantees

- Idempotent operations (safe retries)
- Strong tenant isolation at API layer
- Declarative resource specification produces deterministic resource state
- Per-action authorisation against IAM scope

> **DESIGN RATIONALE**
>
> Microservices enable independent scaling and failure isolation — control plane disruptions don't impact running workloads. Each manager owns a single domain, reducing blast radius during updates or partial failures.

---

## 06 Data Plane Architecture

The data plane executes tenant workloads and handles all compute and data movement. It is optimised for stability, cost-efficiency, and operational predictability.

### Components

- OpenStack-managed KVM hypervisors hosting tenant VMs
- Kubernetes worker nodes (managed CCP clusters and imported clusters)
- Block-storage back-ends serving tiered Cinder-style volumes
- File-storage back-ends exposing managed Access Points
- Object-storage back-ends (S3-API compatible) with versioning, object-lock, and replication
- Coldline archival storage back-end
- Container Registry for OCI images
- SDN fabric for VPC, security-group, load-balancer, and NAT/EIP enforcement

### Execution Model

VMs are scheduled by the underlying Nova scheduler across hypervisor hosts within the selected Availability Zone. Kubernetes workloads (Pods, Jobs, CronJobs, DaemonSets, StatefulSets, ReplicaSets) are scheduled by the cluster's own kube-scheduler. CCP brokers intent and policy; the data plane runs continuously, decoupled from control-plane availability events.

| Guarantee | Mechanism | Benefit |
|-----------|-----------|---------|
| Tenant VM isolation | KVM hypervisor + SDN VPC boundaries | Secure multi-tenancy on shared compute |
| AZ-scoped placement | Nova AZ scheduler | Predictable resilience topology |
| Decoupled execution | Data plane runs independently | Control-plane events don't disrupt workloads |

> **KEY INSIGHT**
>
> CCP brokers intent; the data plane runs continuously. Control-plane maintenance or upgrades have zero impact on running VMs or Kubernetes workloads.

---

## 07 Network Architecture

CCP exposes an AWS/Azure-style virtual network model over the underlying SDN fabric.

![Figure 3: Network Architecture](/img/ccp/technical-guide/image3.png)

*Figure 3: Tenant VPCs with subnets, security groups, NAT/EIP egress, and L4/L7 load balancers.*

### 7.1  VPC Model

Tenants create one or more Virtual Private Clouds per project. Each VPC defines an IPv4 CIDR block and contains one or more subnets with sub-role classification. Subnets are AZ-scoped, enabling resilient multi-AZ deployments. VPCs and subnets are taggable (up to five labels) and have dedicated Overview and Subnets detail tabs.

### 7.2  Security Groups

Stateful network-level firewalls attached to VMs. Each rule specifies protocol, IP version, direction, network address, and ports (predefined or custom). Security groups are the first line of east-west and north-south filtering inside a VPC.

### 7.3  NAT Gateway and Elastic IP

The NAT Gateway provides outbound-only internet access for workloads in private subnets while preventing inbound connections. Elastic IPs are reserved, static, public IPv4 addresses that remain allocated to the tenant until explicitly released — used for fixed ingress endpoints.

### 7.4  Load Balancers

Two L4/L7 modes are supported:

- **Application Load Balancer (HTTP/HTTPS)** — for web and API tiers with health checks, SSL certificate management, and certificate-expiry monitoring
- **Network Load Balancer (TCP/UDP)** — for non-HTTP workloads

Each load balancer is attached to a VPC and VIP subnet. One or more VIPs and Virtual Servers (with backend server groups) are configured per load balancer. The real-time Monitoring panel surfaces system throughput, total virtual servers, server status and availability, certificate expiry, and client/server SSL issues.

| Guarantee | Description |
|-----------|-------------|
| Strict tenant VPC isolation | No cross-VPC routing permitted without explicit peering |
| Stateful east-west filtering | Security groups enforce per-VM inbound/outbound rules |
| Fixed egress and ingress | NAT Gateway + Elastic IP provide predictable addressing |

---

## 08 Storage Architecture

CCP exposes four primary storage modalities plus a container registry. Each is modelled as a first-class resource with snapshots, tagging, and quota tracking where applicable.

![Figure 4: Storage Architecture](/img/ccp/technical-guide/image4.png)

*Figure 4: Five-tier storage architecture with consistent snapshot, tagging, and quota model.*

### 8.1  Block Storage (Volumes)

Tiered, attachable block volumes scoped to a VPC and subnet. Operations include create, extend size, snapshot, attach to VM, manage labels (up to five), and delete. The detail view exposes total size, space used, percentage used, and current state across Overview, Attached Resources, Snapshots, and Monitoring tabs.

### 8.2  Volume Snapshots

Point-in-time copies of volumes. Snapshots can be used to materialise new volumes, enabling clone-and-restore workflows for application portability and disaster recovery rehearsals.

### 8.3  Shared File Storage

Managed file shares with configurable size, Availability Zone, description, and tagging. Access Points define how clients connect — protocol, access type, starting path, and permission profile — and are the unit of mount management. Access Points are editable and deletable independent of the share itself.

### 8.4  Object Storage

S3-API-compatible buckets with:

- Replication policy and Availability Zone selection
- Object versioning
- Object locking with lock-validity (days) for WORM/compliance retention
- Per-bucket Access Keys with expiration and one-time-display secret presentation
- Bucket-level monitoring (growth, request statistics)

### 8.5  Object Storage Archival

Cost-optimised cold storage for backups, disaster-recovery archives, and long-term compliance records. Coldline balances low storage costs with higher retrieval costs, making it suitable for data accessed infrequently but retained for long periods.

### 8.6  Container Registry

Plan-based OCI image registry for storing and distributing container images used by Kubernetes clusters managed or imported through CCP.

| Storage Tier | Use Case | Key Feature |
|---|---|---|
| Block (Volumes) | VM root and data disks | Tiered performance, snapshots |
| Shared File | NFS/CIFS workloads | Access Points, AZ-scoped |
| Object Storage | Unstructured data, backups | S3-compatible, WORM, versioning |
| Coldline Archival | Long-term retention | Low cost, high-durability |
| Container Registry | OCI images | Plan-based, cluster-integrated |

> **KEY INSIGHT**
>
> A consistent snapshot, tagging, and quota model across all storage tiers means tenants use the same mental model whether working with VMs, file shares, or object buckets.

---

## 09 Identity, Access and Multi-Tenancy

### 9.1  Identity Hierarchy

- **Organisation (Tenant)** — top-level container with its own quotas, activity log, and project set
- **Project** — sub-container with its own users, quotas, and resource scope
- **User** — principal that can hold roles at Tenant and/or Project scope

### 9.2  Roles

- **System Roles** — pre-defined roles shipped with the platform
- **Custom Roles** — user-defined roles with granular per-resource and per-action permissions

Roles are assignable at Tenant or Project scope, enabling least-privilege separation between platform operators, project owners, and project members.

### 9.3  Role Lifecycle

The Manage Role flow surfaces a user's current role assignments (with explicit Remove actions), supports assigning new roles via search across System and Custom roles, and clearly indicates the assignment scope. Newly assigned roles may require re-authentication to take effect.

> **KEY INSIGHT**
>
> The Org → Project → User hierarchy mirrors the model used by major public clouds — making CCP immediately familiar to teams migrating from AWS, Azure, or GCP while preserving full on-premises governance control.

---

## 10 Monitoring, Metering and Governance

### 10.1  Monitoring

Per-resource graphical monitoring for VMs, buckets, file systems, and load balancers, alongside aggregated dashboards across CPU, memory, network throughput, storage utilisation, bucket growth and request rates, and load-balancer health. Time-range, metric-type, and resource filters are supported throughout.

### 10.2  Alerts

Configurable alerts modelled as Basic Details, Resource Details, Metrics & Thresholds, and Resource Mapping, with edit and delete actions and a detail overview that exposes the full configuration and resource binding.

### 10.3  Metering

Visual representation of cloud-resource consumption at organisation level, used by tenant administrators to identify usage patterns and optimise allocation and budget.

### 10.4  Quotas

- **Tenant Quota** — service-level usage and utilisation with colour-coded health (green at low utilisation, action-required near 100 per cent)
- **Project Quota** — a subset of tenant quota carved out per project across File Storage, Object Storage, Load Balancers, and other services
- **Quota Requests** — tenant-initiated increase requests with description, priority (High/Medium/Low), requested resources, and tags; routed for administrator approval or rejection

### 10.5  Audit (Organization Activity Logs)

Centralised, real-time audit feed of resource creations, modifications, and system-initiated tasks. Searchable and filterable, this feed is the canonical source of truth for compliance reviews and incident investigations.

> **KEY INSIGHT**
>
> Real-time observability across compute, network, and storage layers enables proactive capacity management and rapid incident response. Quota workflows with approval chains give administrators blast-radius control before resources are consumed.

---

## 11 Kubernetes Platform Architecture

CCP's Kubernetes plane treats clusters as first-class managed resources alongside VMs and storage.

### 11.1  Managed Cluster Lifecycle

The cluster creation wizard configures name, version, region, networking version, and one or more Node Pools — each with subnet, flavor, desired node count, and auto-scaling maximum. Cluster state is tracked as Connected, Not Connected, or Not Registered.

### 11.2  Imported Cluster Onboarding

External Kubernetes clusters can be onboarded by downloading the install configuration and bootstrap manifest, enabling the proxy, and applying the configuration on the target cluster. Imported clusters expose KubeConfig download, edit, delete, and a built-in Kubectl terminal — identical to the surface offered for managed clusters.

### 11.3  Cluster Surface

Each cluster's detail view exposes Overview, Addons, Logs, Nodes, Namespace, Events, Workloads, Access Control, Service Discovery, and Storage tabs.

### 11.4  Addons Marketplace

Category-based marketplace (for example GPU and GitOps categories) for one-click enablement of cluster addons with namespace targeting and deployment-progress tracking through an Instance State indicator.

### 11.5  Kubernetes Object Coverage

- **Workloads** — Pods, Jobs, CronJobs, DaemonSets, StatefulSets, ReplicaSets, Resource Quotas (form or YAML; clone, edit, download YAML, delete; replica scaling and resource-metric edits)
- **Access Control** — Roles, RoleBindings, ClusterRoles, ClusterRoleBindings, ServiceAccounts
- **Service Discovery** — Services, Ingress, NetworkPolicies, Horizontal Pod Autoscalers, LoadBalancers
- **Storage** — StorageClasses, Secrets, ConfigMaps, PersistentVolumes, PersistentVolumeClaims
- **Namespace** — namespace lifecycle with labels and annotations
- **Logs and Events** — live and audit logs per cluster; event feeds scoped per namespace

> **KEY INSIGHT**
>
> CCP's Kubernetes surface gives operators full cluster lifecycle control — from provisioning and addon management to live log streaming and YAML editing — without leaving the portal.

---

## 12 Security Architecture

CCP enforces defence-in-depth across the platform's layers.

| Layer | Technology | Implementation |
|-------|------------|----------------|
| Identity | RBAC + Custom Roles | Org/Project/User scoping at every API boundary |
| Network | VPC + Security Groups + NAT | Hardware-enforced segmentation |
| Data | Object Lock + Versioning | WORM retention and per-bucket access keys |
| Transport | TLS/SSL | Certificate lifecycle managed per load balancer |
| Audit | Activity Logs | Real-time, searchable, organisation-scoped |

### 12.1  Identity and Access

- Org/Project/User hierarchy with scoped System and Custom roles
- Per-API authorisation
- Per-bucket access keys with expiry and one-time secret display

### 12.2  Network Security

- VPC and Subnet segmentation
- Stateful Security Groups attached per VM
- NAT Gateway with egress-only semantics
- Elastic IPs as managed static ingress endpoints
- TLS/SSL certificate-expiry monitoring on Application Load Balancers

### 12.3  Workload Security

- VM Lock action to prevent conflicting concurrent operations
- Per-VM Key Pair or credential authentication
- Snapshot-based recovery for VMs and volumes

### 12.4  Data Security

- Object Storage versioning
- Object Locking with retention period (WORM) for compliance
- Coldline archival tier for long-term compliance retention
- Per-bucket access-key issuance and expiry

### 12.5  Audit and Governance

- Organization Activity Logs (real-time, searchable, filterable)
- Kubernetes audit and live logs per cluster
- Quota and quota-request approval workflows as blast-radius controls

---

## 13 Multi-Tenancy and Isolation Model

Isolation is enforced at every layer of the stack:

![Figure 5: Multi-Tenancy and Isolation Model](/img/ccp/technical-guide/image5.png)

*Figure 5: Organisation → Project → User hierarchy with scoped roles and isolated per-project resources.*

| Layer | Isolation Mechanism |
|-------|-------------------|
| Identity | Org → Project → User hierarchy with scoped roles |
| Compute | AZ-scoped VM placement; KVM hypervisor boundaries |
| Network | VPC per project; Security Groups per VM; NAT/EIP control |
| Storage | Per-project quotas; per-bucket Access Keys with expiry |
| Kubernetes | Namespace isolation; per-cluster RBAC and Access Control |
| Audit | Per-organisation Activity Log; filterable at project scope |

> **DESIGN RATIONALE**
>
> Layered isolation ensures that a misconfiguration at one layer (e.g., an overly permissive security group) does not compromise another (e.g., VPC-level routing remains isolated). No single control failure results in cross-tenant data access.

---

## 14 Deployment Model

CCP is region- and AZ-aware. Every long-lived resource — virtual machine, volume, file system, security group, bucket — is created within a chosen Region and Availability Zone. Multi-AZ deployment patterns are achieved through subnet placement and per-AZ resource selection. The portal exposes a Region Selector at the top of the dashboard, and AZ pickers throughout the resource-creation wizards.

Operational primitives — quotas, activity logs, metering, monitoring — are scoped at organisation and project level and remain consistent across regions, giving administrators a single governance pane regardless of geographic footprint.

| Deployment Dimension | Detail |
|---|---|
| Region awareness | All long-lived resources are Region-scoped |
| AZ awareness | Subnet and resource creation exposes AZ picker |
| Multi-AZ resilience | Achieved through subnet placement across AZs |
| Governance scope | Quotas, logs, metering consistent across all regions |

---

## 15 Differentiators

**Unified IaaS and CaaS Portal.** A single portal and API over OpenStack and Kubernetes — no two-console sprawl.

**Hyperscaler-Style Self-Service UX.** Bulk operations, Card/Table views, export, search, and filters across every resource family — a UX familiar to teams migrating from public clouds.

**Built-In Tenant Governance.** Quotas, quota requests with priority and approval workflows, activity logs, and metering are platform primitives — not integrations.

**Full Kubernetes Object Surface.** Workloads, Access Control, Service Discovery, Storage, Namespaces, Logs, and Events — all manageable from the portal with built-in Kubectl terminal.

**S3-Compatible Object Storage.** Versioning, WORM object lock, replication, archival, and per-bucket access keys — a complete object storage stack with compliance-ready retention.

**Consistent Resource Model.** Labelling/tagging (up to five labels) and snapshot models apply uniformly across VMs, volumes, file shares, and buckets — reducing cognitive overhead for operators.

**In-Portal KubeConfig and Terminal.** Built-in terminal and KubeConfig download for in-portal and off-portal cluster operations — no SSH or external tooling required for routine cluster management.

> **KEY INSIGHT**
>
> CCP uniquely delivers hyperscaler-grade self-service, unified IaaS and CaaS, and built-in tenant governance over open infrastructure — a combination not available from any single open-source tool.

---

## 16 Conclusion

Cirrus Cloud Platform provides a unified orchestration layer for enterprise and sovereign cloud infrastructure, combining cloud-native self-service UX with OpenStack and Kubernetes' operational depth. The architecture enables organisations to deliver IaaS and CaaS at scale while maintaining strict multi-tenant isolation, comprehensive governance, and the operational simplicity expected by modern cloud teams.

> *CCP is not just a portal. It is the operating layer that makes OpenStack and Kubernetes feel like a public cloud — with the governance, compliance, and control that sovereign and enterprise environments demand.*

---

**Version 1.0 | 2026**

---

[Download PDF](/downloads/technical-guides/CCP_Technical_Guide.pdf)
