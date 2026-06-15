---
title: Architecture
sidebar_position: 2
---

# Architecture

## Architecture Tiers

<div style={{textAlign: "center", margin: "32px auto", maxWidth: "720px"}}>
<svg viewBox="0 0 720 560" width="100%" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, Segoe UI, sans-serif">
  <defs>
    <linearGradient id="archBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0f172a"/>
      <stop offset="100%" stopColor="#1e293b"/>
    </linearGradient>
    <linearGradient id="portalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1d4ed8"/>
      <stop offset="100%" stopColor="#2563eb"/>
    </linearGradient>
    <linearGradient id="iamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#7c3aed"/>
      <stop offset="100%" stopColor="#8b5cf6"/>
    </linearGradient>
    <linearGradient id="orchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0f766e"/>
      <stop offset="100%" stopColor="#0d9488"/>
    </linearGradient>
    <linearGradient id="svcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#b45309"/>
      <stop offset="100%" stopColor="#d97706"/>
    </linearGradient>
    <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#1e3a5f"/>
      <stop offset="100%" stopColor="#1e4976"/>
    </linearGradient>
    <filter id="archShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.4"/>
    </filter>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#475569"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="720" height="560" fill="url(#archBg)" rx="14"/>

  <!-- Title -->
  <text x="360" y="38" textAnchor="middle" fill="#f1f5f9" fontSize="17" fontWeight="700" letterSpacing="0.5">CCP Platform Architecture</text>
  <text x="360" y="56" textAnchor="middle" fill="#94a3b8" fontSize="10.5">Microservices · Kubernetes-native · Multi-AZ · Sovereign-Ready</text>

  <!-- Layer 1: Portal & API -->
  <rect x="36" y="74" width="648" height="74" rx="9" fill="url(#portalGrad)" filter="url(#archShadow)"/>
  <text x="56" y="96" fill="#bfdbfe" fontSize="9.5" fontWeight="600" letterSpacing="1" textAnchor="start">PORTAL &amp; API</text>
  <rect x="56" y="103" width="144" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="128" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">Self-Service Console</text>
  <rect x="210" y="103" width="130" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="275" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">Admin Console</text>
  <rect x="350" y="103" width="130" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="415" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">REST API Gateway</text>
  <rect x="490" y="103" width="178" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="579" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">WebSocket / Notifications</text>

  <line x1="360" y1="148" x2="360" y2="162" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>

  <!-- Layer 2: Identity & Access -->
  <rect x="36" y="162" width="648" height="64" rx="9" fill="url(#iamGrad)" filter="url(#archShadow)"/>
  <text x="56" y="182" fill="#ddd6fe" fontSize="9.5" fontWeight="600" letterSpacing="1">IDENTITY &amp; ACCESS</text>
  <rect x="56" y="189" width="158" height="28" rx="5" fill="#5b21b6" fillOpacity="0.6"/>
  <text x="135" y="207" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="500">Keycloak v24 · SAML 2.0</text>
  <rect x="224" y="189" width="130" height="28" rx="5" fill="#5b21b6" fillOpacity="0.6"/>
  <text x="289" y="207" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="500">OpenFGA · RBAC</text>
  <rect x="364" y="189" width="144" height="28" rx="5" fill="#5b21b6" fillOpacity="0.6"/>
  <text x="436" y="207" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="500">Multi-Tenant IAM</text>
  <rect x="518" y="189" width="150" height="28" rx="5" fill="#5b21b6" fillOpacity="0.6"/>
  <text x="593" y="207" textAnchor="middle" fill="#ede9fe" fontSize="10" fontWeight="500">Kafka · Redis · SocketIO</text>

  <line x1="360" y1="226" x2="360" y2="240" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>

  <!-- Layer 3: Orchestration -->
  <rect x="36" y="240" width="648" height="74" rx="9" fill="url(#orchGrad)" filter="url(#archShadow)"/>
  <text x="56" y="260" fill="#99f6e4" fontSize="9.5" fontWeight="600" letterSpacing="1">ORCHESTRATION</text>
  <rect x="56" y="267" width="192" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="152" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">CCP — Cloud Mgmt Platform</text>
  <text x="152" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">Workflow · Lifecycle · Metering</text>
  <rect x="258" y="267" width="192" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="354" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">CCP — IaaS Orchestrator</text>
  <text x="354" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">OpenStack v2023.2 · MaaS v3.4.9</text>
  <rect x="460" y="267" width="208" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="564" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">Cloud Orbiter — K8s Orchestrator</text>
  <text x="564" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">Cluster Controller · Agent · API</text>

  <line x1="360" y1="314" x2="360" y2="328" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>

  <!-- Layer 4: Managed Services -->
  <rect x="36" y="328" width="648" height="84" rx="9" fill="url(#svcGrad)" filter="url(#archShadow)"/>
  <text x="56" y="348" fill="#fef3c7" fontSize="9.5" fontWeight="600" letterSpacing="1">MANAGED SERVICES</text>
  <rect x="56" y="355" width="92" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="102" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Compute</text>
  <text x="102" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">VM · BMaaS · CaaS</text>
  <rect x="158" y="355" width="92" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="204" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Storage</text>
  <text x="204" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">Block · Object · File</text>
  <rect x="260" y="355" width="92" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="306" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Networking</text>
  <text x="306" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">VPC · LB · VPN · DNS</text>
  <rect x="362" y="355" width="92" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="408" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Database</text>
  <text x="408" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">PgSQL · MongoDB · Redis</text>
  <rect x="464" y="355" width="92" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="510" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Security</text>
  <text x="510" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">mTLS · AES-256 · FW</text>
  <rect x="566" y="355" width="102" height="44" rx="5" fill="#92400e" fillOpacity="0.6"/>
  <text x="617" y="372" textAnchor="middle" fill="#fef9c3" fontSize="9.5" fontWeight="500">Monitoring</text>
  <text x="617" y="385" textAnchor="middle" fill="#fde68a" fontSize="8">Zabbix · Prometheus · Grafana</text>

  <line x1="360" y1="412" x2="360" y2="426" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>

  <!-- Layer 5: Infrastructure -->
  <rect x="36" y="426" width="648" height="64" rx="9" fill="url(#infraGrad)" filter="url(#archShadow)"/>
  <text x="56" y="446" fill="#bae6fd" fontSize="9.5" fontWeight="600" letterSpacing="1">PHYSICAL INFRASTRUCTURE</text>
  <rect x="56" y="453" width="150" height="28" rx="5" fill="#0c2a4a" fillOpacity="0.7"/>
  <text x="131" y="471" textAnchor="middle" fill="#e0f2fe" fontSize="10">Compute Nodes</text>
  <rect x="216" y="453" width="150" height="28" rx="5" fill="#0c2a4a" fillOpacity="0.7"/>
  <text x="291" y="471" textAnchor="middle" fill="#e0f2fe" fontSize="10">Storage Arrays (NetApp)</text>
  <rect x="376" y="453" width="150" height="28" rx="5" fill="#0c2a4a" fillOpacity="0.7"/>
  <text x="451" y="471" textAnchor="middle" fill="#e0f2fe" fontSize="10">Network Fabric</text>
  <rect x="536" y="453" width="148" height="28" rx="5" fill="#0c2a4a" fillOpacity="0.7"/>
  <text x="610" y="471" textAnchor="middle" fill="#e0f2fe" fontSize="10">Multi-AZ · Geo-Replicated</text>

  <text x="360" y="516" textAnchor="middle" fill="#64748b" fontSize="9">50,000 VMs · 200,000 Pods · Active-Passive HA · AES-256 Encryption</text>
  <text x="360" y="530" textAnchor="middle" fill="#475569" fontSize="8.5">CCP v3 · OpenStack 2023.2 · Cloud Orbiter · Veritas NetBackup v10.11.2</text>
</svg>
</div>

## Platform Component Map

| Layer | Components | Technology |
|---|---|---|
| **Portal & API** | Self-Service Console, Admin Console, REST API Gateway, WebSocket notifications | Microservices, Kafka, Redis, SocketIO |
| **Identity & Access** | Authentication, multi-tenant IAM, fine-grained authorization, SAML federation | Keycloak v24.0.5, OpenFGA, SAML 2.0, ADFS / Entra |
| **Orchestration** | Cloud lifecycle management, IaaS provisioning, Kubernetes cluster orchestration | CCP (Cloud Mgmt), OpenStack v2023.2, Cloud Orbiter, MaaS v3.4.9 |
| **Compute** | Virtual machines, Kubernetes clusters, bare metal provisioning, snapshots | Nova (KVM), CKP, MaaS, baremetal-plugin |
| **Storage** | Block volumes, shared file, object buckets, archival, container registry | NetApp v11.9.0, Cinder, Swift/S3, storage-plugin |
| **Networking** | VPC, subnets, security groups, NAT gateway, elastic IPs, load balancers, VPN, DNS | OpenStack Neutron, Zscaler VPN, CheckPoint / Palo Alto |
| **Security** | Firewall rules, SSL certificate management, cyber security requests, RBAC | OpenFGA, mTLS, AES-256, Keycloak realms |
| **Monitoring** | Per-resource metrics, dashboards, alert rules, access logs | Zabbix v7.4.3, Prometheus, Grafana v9.4.3 |
| **Metering & Billing** | Tenant/cell quota management, showback, notional invoicing, quota requests | orbiter-metering microservice, BSS Portal integration |
| **Database** | Platform state, session management, caching, audit store | PostgreSQL 15.7, MongoDB 5.0.3, Redis 7.2.5 / 6.2.5 |
| **Backup** | Incremental and full backup, geo-replication | Veritas NetBackup v10.11.2 |

## Key Microservices

- **console** — Self-Service Portal UI; primary user-facing interface for VM, storage, networking, and Kubernetes provisioning
- **admin-console** — Admin Portal UI; operator interface for tenant lifecycle, quota packages, catalogs, and provider management
- **platform** — Core platform APIs; compute, volume, network, and core-mgmt functionalities
- **admin-platform** — Admin platform APIs; manage flavors, images, availability zones, regions, and virtual resource constructs
- **auth** — Keycloak authentication service; identity management and per-tenant realm isolation
- **orbiter-api** — API server for Cloud Orbiter; exposes Kubernetes cluster management and application deployment APIs
- **orbiter-controller** — Backend runtime engine for orbiter-api; handles Kubernetes orchestration logic
- **orbiter-auth** — Authorization gateway for the Cloud Orbiter subsystem
- **orbiter-metering** — Metering, showback, quota management, and licensing
- **orbiter-term** — In-browser terminal; Kubernetes shell access for managed and imported clusters
- **core-mgmt** — Project manager service; organizations, cells, user mappings, and resource hierarchy
- **onboarding** — User and organization onboarding workflows; BSS Portal integration
- **workflow-controller** — Declarative workflow engine; provisioning, lifecycle, and step sequencing
- **notification** — Sends notifications to external platforms — SMS, email (SMTP), webhooks
- **socketio** — Pushes real-time events and notifications to the console UI
- **storage-plugin** — Storage capabilities integration with NetApp backend
- **baremetal-plugin** — Bare metal server management via MaaS backend
- **observability-ui** — Cluster observability UI; exposes CPU, RAM, and cluster metrics
- **OpenFGA** — Fine-grained authorization database; RBAC enforcement at every API boundary
- **kafka** — Internal messaging queue for inter-component communication

## Portal Architecture

CCP is accessed through two complementary portals serving distinct personas:

| Portal | Audience | Primary Functions |
|---|---|---|
| **Self-Service Console** | End users, tenant administrators | Provision VMs, storage, networking, Kubernetes clusters, databases; manage snapshots, quotas, users, and monitoring |
| **Admin Console** | Cloud administrators, platform operators | Manage tenants, quota packages, compute/storage/backup providers, catalogs, regions, availability zones, and platform health |

Both portals share the same underlying CCP platform, ensuring consistent RBAC enforcement, audit trails, and resource governance across all interactions.

## Infrastructure Specifications

### Compute

| Specification | Detail |
|---|---|
| **VM Hypervisor** | KVM via OpenStack Nova |
| **Bare Metal** | Metal-as-a-Service (MaaS v3.4.9) |
| **Kubernetes** | CKP-managed and externally imported clusters |
| **VM Flavors** | Configurable — tiered compute types with vCPU, RAM, disk, and GPU profiles |
| **Availability Zones** | Multi-AZ placement; AZ-scoped resource scheduling |
| **Maximum VMs** | 50,000 VMs per platform |
| **Maximum Pods** | 200,000 pods per platform |
| **Auto-scaling** | Node pool auto-scaling with configurable min/max node counts |

### Storage

| Storage Tier | Backend | Key Capabilities |
|---|---|---|
| **Block (Volumes)** | NetApp Cinder-style | Tiered performance, extend size, snapshots, VPC-scoped |
| **Shared File** | NetApp NFS/CIFS | Access Points with protocol/permission profiles, AZ-scoped |
| **Object Storage** | S3-API compatible | Versioning, object lock (WORM), replication, per-bucket access keys |
| **Archival (Coldline)** | Cold tier | Low-cost long-term retention, compliance/DR use cases |
| **Container Registry** | OCI-compliant | Plan-based image registry for managed and imported clusters |
| **Volume Snapshots** | Point-in-time | Clone-and-restore workflows, disaster recovery |

### Network

| Component | Technology | Purpose |
|---|---|---|
| **VPC** | OpenStack Neutron + SDN | Tenant-isolated L3 network boundary per project |
| **Subnets** | AZ-scoped CIDR blocks | L2 segmentation within VPC; DHCP-managed |
| **Security Groups** | Stateful firewall | Per-VM inbound/outbound traffic control by protocol, port, and IP |
| **NAT Gateway** | Egress-only gateway | Private subnet internet access without inbound exposure |
| **Elastic IP** | Reserved static public IPv4 | Fixed ingress endpoints for tenant workloads |
| **Load Balancers** | L4 (TCP/UDP) + L7 (HTTP/HTTPS) | Traffic distribution with health checks and SSL certificate management |
| **VPN Gateway** | Site-to-Site + Point-to-Site | Secure on-premises connectivity |
| **DNS Management** | Internal DNS zones | Resource record management per tenant |

### Security

| Layer | Mechanism | Detail |
|---|---|---|
| **Identity** | Keycloak v24 + SAML 2.0 | Per-tenant realm isolation; ADFS and Entra federation |
| **Authorization** | OpenFGA RBAC | Fine-grained per-API authorization; 18 pre-defined roles |
| **Network** | VPC + Security Groups + NAT | Hardware-enforced segmentation; no cross-tenant routing |
| **Data at Rest** | AES-256 | Platform-wide encryption across all storage tiers |
| **Data in Transit** | mTLS | Mutual TLS for all service-to-service communication |
| **Audit** | Organization Activity Logs | Real-time, searchable, organisation-scoped audit feed |
| **Workload** | VM Lock + Key Pair auth | Prevents concurrent conflicting operations; per-VM credentials |

### High Availability

| Component | HA Mechanism |
|---|---|
| **Control Plane** | Active-Passive dual cluster per region — Cluster 1 (AZ1) primary, Cluster 2 (AZ2) standby |
| **Failover** | Automated GSLB-based failover with 2N+1 quorum detection |
| **PostgreSQL** | Logical and Streaming Replication between AZs |
| **MongoDB** | Active-Active with change-stream replication |
| **Redis** | Clustered session and cache replication |
| **Backup — Incremental** | Every 30 minutes, geo-replicated, 3-month retention |
| **Backup — Full** | Every 24 hours, geo-replicated, 3-month retention |
