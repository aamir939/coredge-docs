---
title: Architecture
sidebar_position: 2
---

# Architecture

## Architecture Overview

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
  </defs>

  <!-- Background -->
  <rect width="720" height="560" fill="url(#archBg)" rx="14"/>

  <!-- Title -->
  <text x="360" y="38" textAnchor="middle" fill="#f1f5f9" fontSize="17" fontWeight="700" letterSpacing="0.5">CCS Platform Architecture</text>
  <text x="360" y="56" textAnchor="middle" fill="#94a3b8" fontSize="10.5">Microservices · Kubernetes-native · Multi-AZ</text>

  <!-- ── Layer 1: Portal & API ── -->
  <rect x="36" y="74" width="648" height="74" rx="9" fill="url(#portalGrad)" filter="url(#archShadow)"/>
  <text x="56" y="96" fill="#bfdbfe" fontSize="9.5" fontWeight="600" letterSpacing="1" textAnchor="start">PORTAL &amp; API</text>
  <!-- boxes inside -->
  <rect x="56" y="103" width="144" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="128" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">Self-Service Console</text>
  <rect x="210" y="103" width="130" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="275" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">Admin Console</text>
  <rect x="350" y="103" width="130" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="415" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">REST API Gateway</text>
  <rect x="490" y="103" width="178" height="32" rx="5" fill="#1e40af" fillOpacity="0.6"/>
  <text x="579" y="123" textAnchor="middle" fill="#e0f2fe" fontSize="10" fontWeight="500">WebSocket / Notifications</text>

  <!-- connector arrow -->
  <line x1="360" y1="148" x2="360" y2="162" stroke="#475569" strokeWidth="2" markerEnd="url(#arr)"/>

  <!-- ── Layer 2: Identity & Access ── -->
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

  <line x1="360" y1="226" x2="360" y2="240" stroke="#475569" strokeWidth="2"/>

  <!-- ── Layer 3: Orchestration ── -->
  <rect x="36" y="240" width="648" height="74" rx="9" fill="url(#orchGrad)" filter="url(#archShadow)"/>
  <text x="56" y="260" fill="#99f6e4" fontSize="9.5" fontWeight="600" letterSpacing="1">ORCHESTRATION</text>
  <rect x="56" y="267" width="192" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="152" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">CCS — Cloud Mgmt Platform</text>
  <text x="152" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">Workflow · Lifecycle · Metering</text>
  <rect x="258" y="267" width="192" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="354" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">CCP — IaaS Orchestrator</text>
  <text x="354" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">OpenStack v2023.2 · MaaS v3.4.9</text>
  <rect x="460" y="267" width="208" height="32" rx="5" fill="#115e59" fillOpacity="0.7"/>
  <text x="564" y="283" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">Cloud Orbiter — K8s Orchestrator</text>
  <text x="564" y="295" textAnchor="middle" fill="#99f6e4" fontSize="8.5">Cluster Controller · Agent · API</text>

  <line x1="360" y1="314" x2="360" y2="328" stroke="#475569" strokeWidth="2"/>

  <!-- ── Layer 4: Services ── -->
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

  <line x1="360" y1="412" x2="360" y2="426" stroke="#475569" strokeWidth="2"/>

  <!-- ── Layer 5: Infrastructure ── -->
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

  <!-- Footer legend -->
  <text x="360" y="516" textAnchor="middle" fill="#64748b" fontSize="9">50,000 VMs · 200,000 Pods · Active-Passive HA · AES-256 Encryption</text>
  <text x="360" y="530" textAnchor="middle" fill="#475569" fontSize="8.5">CCS v3 · CCP OpenStack 2023.2 · Cloud Orbiter · Veritas NetBackup v10.11.2</text>

  <!-- Side label -->
  <text x="14" y="290" textAnchor="middle" fill="#475569" fontSize="8.5" transform="rotate(-90,14,290)">DATA FLOW</text>

  <!-- Arrows between layers using simple lines with triangles -->
  <defs>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
      <polygon points="0 0, 7 3.5, 0 7" fill="#475569"/>
    </marker>
  </defs>
  <line x1="360" y1="148" x2="360" y2="162" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>
  <line x1="360" y1="226" x2="360" y2="240" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>
  <line x1="360" y1="314" x2="360" y2="328" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>
  <line x1="360" y1="412" x2="360" y2="426" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)"/>
</svg>
</div>

## Platform Component Map

CCS is a microservices-based Cloud Management Platform deployed on Kubernetes, organized into layered tiers from the user-facing portal down to the physical infrastructure it orchestrates.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Components</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Portal & API</td><td style={{padding: '3px 12px'}}>Self-Service Console, Admin Console, REST API Gateway, WebSocket notifications</td><td style={{padding: '3px 12px'}}>Microservices, Kafka, Redis, SocketIO</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity & Access</td><td style={{padding: '3px 12px'}}>Authentication, authorization, multi-tenant IAM, federation</td><td style={{padding: '3px 12px'}}>Keycloak v24.0.5, OpenFGA, SAML 2.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Orchestration</td><td style={{padding: '3px 12px'}}>Cluster lifecycle, workflow engine, provisioning logic</td><td style={{padding: '3px 12px'}}>Cloud Orbiter (K8s), CCP (OpenStack), MaaS v3.4.9</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Block, object, file, archival storage management</td><td style={{padding: '3px 12px'}}>NetApp v11.9.0, storage-plugin microservice</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Networking</td><td style={{padding: '3px 12px'}}>VPC, LB, VPN, firewall, NAT, DNS, public IP</td><td style={{padding: '3px 12px'}}>OpenStack Neutron, Zscaler VPN, CheckPoint / Palo Alto, TCPWare</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Operational metrics, dashboards, alarms, log analysis</td><td style={{padding: '3px 12px'}}>Zabbix v7.4.3, Prometheus & Grafana v9.4.3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Metering & Billing</td><td style={{padding: '3px 12px'}}>Showback, quota management, usage tracking, licensing</td><td style={{padding: '3px 12px'}}>orbiter-metering microservice</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Platform state storage, session management, caching</td><td style={{padding: '3px 12px'}}>PostgreSQL 15.7, MongoDB 5.0.3, Redis 7.2.5/6.2.5</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup</td><td style={{padding: '3px 12px'}}>Incremental and full backup, geo-replication</td><td style={{padding: '3px 12px'}}>Veritas NetBackup v10.11.2</td></tr>
  </tbody>
</table>

## Core Microservices

CCS is composed of purpose-built microservices communicating through well-defined REST APIs, internal routing, and Kafka message queues.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Microservice</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Functional Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>console</td><td style={{padding: '3px 12px'}}>Self-Service Portal UI — primary user-facing interface for cloud resource provisioning</td></tr>
    <tr><td style={{padding: '3px 12px'}}>admin-console</td><td style={{padding: '3px 12px'}}>Admin Portal UI — platform operator interface for tenant, quota, and infrastructure management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>platform</td><td style={{padding: '3px 12px'}}>Core platform APIs — compute, volume, network, core-mgmt functionalities</td></tr>
    <tr><td style={{padding: '3px 12px'}}>admin-platform</td><td style={{padding: '3px 12px'}}>Admin platform APIs — manage flavors, images, AZs, regions, and virtual resource constructs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>auth</td><td style={{padding: '3px 12px'}}>Keycloak authentication service — identity and multi-tenant IAM</td></tr>
    <tr><td style={{padding: '3px 12px'}}>orbiter-api</td><td style={{padding: '3px 12px'}}>API server for Cloud Orbiter — exposes Kubernetes cluster management APIs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>orbiter-controller</td><td style={{padding: '3px 12px'}}>Backend engine for orbiter-api — runtime controller for Kubernetes orchestration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>orbiter-auth</td><td style={{padding: '3px 12px'}}>Authorization gateway for the Orbiter subsystem</td></tr>
    <tr><td style={{padding: '3px 12px'}}>orbiter-metering</td><td style={{padding: '3px 12px'}}>Metering, showback, quota management, and licensing</td></tr>
    <tr><td style={{padding: '3px 12px'}}>orbiter-term</td><td style={{padding: '3px 12px'}}>Terminal access — Kubernetes-based shell for clusters</td></tr>
    <tr><td style={{padding: '3px 12px'}}>core-mgmt</td><td style={{padding: '3px 12px'}}>Project manager service — organizations, cells, user mappings</td></tr>
    <tr><td style={{padding: '3px 12px'}}>onboarding</td><td style={{padding: '3px 12px'}}>User and organization onboarding workflows</td></tr>
    <tr><td style={{padding: '3px 12px'}}>workflow-controller</td><td style={{padding: '3px 12px'}}>Workflow provider for internal CCS provisioning and lifecycle workflows</td></tr>
    <tr><td style={{padding: '3px 12px'}}>notification</td><td style={{padding: '3px 12px'}}>Sends notifications to external platforms — SMS, email (SMTP), webhooks</td></tr>
    <tr><td style={{padding: '3px 12px'}}>socketio</td><td style={{padding: '3px 12px'}}>Pushes real-time events and notifications to the console UI</td></tr>
    <tr><td style={{padding: '3px 12px'}}>storage-plugin</td><td style={{padding: '3px 12px'}}>Storage capabilities integration — NetApp backend</td></tr>
    <tr><td style={{padding: '3px 12px'}}>baremetal-plugin</td><td style={{padding: '3px 12px'}}>Bare metal server management — MaaS backend integration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>observability-ui</td><td style={{padding: '3px 12px'}}>Cluster observability UI — exposes CPU, RAM, and cluster metrics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>frontend</td><td style={{padding: '3px 12px'}}>Cluster management UI — K8s cluster registration, app deployment, container registry</td></tr>
    <tr><td style={{padding: '3px 12px'}}>ordr_mgmt</td><td style={{padding: '3px 12px'}}>Pushes CRUD events externally for integration and audit purposes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>OpenFGA</td><td style={{padding: '3px 12px'}}>Authorization database — fine-grained RBAC enforcement</td></tr>
    <tr><td style={{padding: '3px 12px'}}>kafka</td><td style={{padding: '3px 12px'}}>Internal messaging queue for inter-component communication</td></tr>
    <tr><td style={{padding: '3px 12px'}}>client-plugin</td><td style={{padding: '3px 12px'}}>Client-specific custom flows and integration hooks</td></tr>
    <tr><td style={{padding: '3px 12px'}}>platform-celery / celery</td><td style={{padding: '3px 12px'}}>Asynchronous task processing — multiple Celery workers for different task domains</td></tr>
  </tbody>
</table>

## High Availability Architecture

CCS implements a multi-AZ high availability model designed for zero-downtime failover and continuous service delivery.

### HA Design

- **Active-Passive Dual Cluster Per Region:** Cluster 1 (primary) in AZ1, Cluster 2 (standby) in AZ2. Automated GSLB-based failover with 2N+1 quorum cluster detection
- **Kubernetes Control Plane Per AZ:** Each availability zone hosts an independent Kubernetes control plane, ensuring cluster-level resilience
- **Database HA:**
  - PostgreSQL: Logical and Streaming Replication between AZs
  - MongoDB: Active-Active with change-stream replication
  - Redis: Clustered session and cache replication

### Backup Strategy

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Backup Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Frequency</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Retention</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Incremental Backup</td><td style={{padding: '3px 12px'}}>Every 30 minutes</td><td style={{padding: '3px 12px'}}>3 months, geo-replicated</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Full Backup</td><td style={{padding: '3px 12px'}}>Every 24 hours</td><td style={{padding: '3px 12px'}}>3 months, geo-replicated</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Audit Logs</td><td style={{padding: '3px 12px'}}>Continuous</td><td style={{padding: '3px 12px'}}>Long-term retention per compliance requirement</td></tr>
  </tbody>
</table>

Backup operations are managed through Veritas NetBackup v10.11.2.

## Resource Hierarchy

CCS organizes all resources in a three-level governance hierarchy:

1. **Tenant** — Top-level boundary. One per customer account. All users, cells, and resources are scoped within a tenant. Quota enforced at this level.
2. **Cell** — An isolated project or environment within a Tenant. Represents a department, workload environment, or service tier. Quota enforced independently.
3. **Resources** — The cloud services consumed within a Cell: VMs, volumes, clusters, load balancers, databases, and more.

The BSS Portal is the primary identity store for tenant and user creation. CCS creates a unique Keycloak realm per tenant to ensure complete identity isolation.

## Portal Architecture

CCS is accessed through two complementary portals with distinct personas:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Portal</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Audience</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Primary Functions</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Self-Service Console</td><td style={{padding: '3px 12px'}}>End users, tenant administrators</td><td style={{padding: '3px 12px'}}>Provision VMs, storage, networking, containers, databases; manage cells and users</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Admin Console</td><td style={{padding: '3px 12px'}}>Cloud administrators, platform operators</td><td style={{padding: '3px 12px'}}>Manage tenants, quotas, catalogs, providers, infrastructure health, OpenStack environment</td></tr>
  </tbody>
</table>

Both portals share the same underlying CCS platform, ensuring consistent governance, RBAC enforcement, and resource management across all interactions.

## Kubernetes Cluster Management — Cluster Controller and Agent

CCS manages Kubernetes clusters through a controller-agent architecture:

- **Cluster Controller:** Central entity connecting and orchestrating all customer Kubernetes clusters. Communicates with agents over port 8030/8040. Centralizes Kubernetes API and CLI access.
- **Cluster Agent:** Deployed on each target Kubernetes cluster. Initiates outbound connection to the Cluster Controller. Once the handshake completes, the Controller can issue commands and act as proxy for Kubernetes CLI and APIs.

This model allows CCS to manage Kubernetes clusters across multiple AZs and regions without requiring inbound firewall rules into each cluster.

## Infrastructure Pre-Requisites

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Requirement</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Detail</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>SSL Certificates</td><td style={{padding: '3px 12px'}}>Wildcard SSL certificates for CCS hosting domain</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Load Balancer</td><td style={{padding: '3px 12px'}}>Load balancer with Virtual IPs (VIPs) per endpoint</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DNS</td><td style={{padding: '3px 12px'}}>DNS server with dynamic domain support</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Kubernetes-compliant high IOPS storage for control plane</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Connectivity</td><td style={{padding: '3px 12px'}}>SMTP, NTP, and DNS server connectivity</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Container Registry</td><td style={{padding: '3px 12px'}}>Container registry access for platform image deployment</td></tr>
  </tbody>
</table>
