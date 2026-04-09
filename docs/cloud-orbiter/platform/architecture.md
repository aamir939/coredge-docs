---
title: Architecture
sidebar_position: 2
---

# Architecture

## Architecture Overview

<div style={{textAlign: "center", margin: "32px auto", maxWidth: "720px"}}>
<svg viewBox="0 0 720 520" width="100%" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, Segoe UI, sans-serif">
  <defs>
    <linearGradient id="coBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0f172a"/>
      <stop offset="100%" stopColor="#1e293b"/>
    </linearGradient>
    <linearGradient id="coPortal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0369a1"/>
      <stop offset="100%" stopColor="#0284c7"/>
    </linearGradient>
    <linearGradient id="coIam" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6d28d9"/>
      <stop offset="100%" stopColor="#7c3aed"/>
    </linearGradient>
    <linearGradient id="coOrch" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#065f46"/>
      <stop offset="100%" stopColor="#047857"/>
    </linearGradient>
    <linearGradient id="coInfra" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#92400e"/>
      <stop offset="100%" stopColor="#b45309"/>
    </linearGradient>
    <filter id="coShadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
    </filter>
  </defs>

  <rect width="720" height="520" fill="url(#coBg)" rx="14"/>
  <text x="360" y="36" textAnchor="middle" fill="#f1f5f9" fontSize="16" fontWeight="700">Cloud Orbiter — Platform Architecture</text>
  <text x="360" y="54" textAnchor="middle" fill="#94a3b8" fontSize="10">Universal Application Control Plane · Zero-Trust · Multi-Cloud</text>

  <!-- Layer 1: User Interface -->
  <rect x="36" y="68" width="648" height="62" rx="8" fill="url(#coPortal)" filter="url(#coShadow)"/>
  <text x="56" y="87" fill="#bae6fd" fontSize="9" fontWeight="600" letterSpacing="1">USER INTERFACE &amp; API</text>
  <rect x="56" y="93" width="140" height="26" rx="4" fill="#075985" fillOpacity="0.7"/>
  <text x="126" y="110" textAnchor="middle" fill="#e0f2fe" fontSize="9.5">Management Dashboard</text>
  <rect x="206" y="93" width="140" height="26" rx="4" fill="#075985" fillOpacity="0.7"/>
  <text x="276" y="110" textAnchor="middle" fill="#e0f2fe" fontSize="9.5">REST API Gateway</text>
  <rect x="356" y="93" width="140" height="26" rx="4" fill="#075985" fillOpacity="0.7"/>
  <text x="426" y="110" textAnchor="middle" fill="#e0f2fe" fontSize="9.5">CLI / kubectl Proxy</text>
  <rect x="506" y="93" width="162" height="26" rx="4" fill="#075985" fillOpacity="0.7"/>
  <text x="587" y="110" textAnchor="middle" fill="#e0f2fe" fontSize="9.5">WebSocket Notifications</text>

  <!-- Layer 2: Identity & Access -->
  <rect x="36" y="148" width="648" height="62" rx="8" fill="url(#coIam)" filter="url(#coShadow)"/>
  <text x="56" y="167" fill="#ddd6fe" fontSize="9" fontWeight="600" letterSpacing="1">IDENTITY &amp; ACCESS MANAGEMENT</text>
  <rect x="56" y="173" width="156" height="26" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="134" y="190" textAnchor="middle" fill="#ede9fe" fontSize="9.5">Keycloak · OpenID Connect</text>
  <rect x="222" y="173" width="140" height="26" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="292" y="190" textAnchor="middle" fill="#ede9fe" fontSize="9.5">RBAC · Multi-Tenant</text>
  <rect x="372" y="173" width="156" height="26" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="450" y="190" textAnchor="middle" fill="#ede9fe" fontSize="9.5">SSO: Okta · Google · Microsoft</text>
  <rect x="538" y="173" width="130" height="26" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="603" y="190" textAnchor="middle" fill="#ede9fe" fontSize="9.5">Session Management</text>

  <!-- Layer 3: Cluster Orchestration -->
  <rect x="36" y="228" width="648" height="80" rx="8" fill="url(#coOrch)" filter="url(#coShadow)"/>
  <text x="56" y="247" fill="#a7f3d0" fontSize="9" fontWeight="600" letterSpacing="1">CLUSTER ORCHESTRATION</text>
  <rect x="56" y="253" width="104" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="108" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">CKP Clusters</text>
  <text x="108" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Coredge K8s</text>
  <rect x="170" y="253" width="104" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="222" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">AWS EKS</text>
  <text x="222" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Public Cloud</text>
  <rect x="284" y="253" width="104" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="336" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Azure AKS</text>
  <text x="336" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Public Cloud</text>
  <rect x="398" y="253" width="104" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="450" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Google GKE</text>
  <text x="450" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Public Cloud</text>
  <rect x="512" y="253" width="104" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="564" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Edge Clusters</text>
  <text x="564" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Remote Sites</text>
  <rect x="626" y="253" width="46" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="649" y="270" textAnchor="middle" fill="#d1fae5" fontSize="8" fontWeight="500">Brown</text>
  <text x="649" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">field</text>

  <!-- Layer 4: Services -->
  <rect x="36" y="326" width="648" height="74" rx="8" fill="url(#coInfra)" filter="url(#coShadow)"/>
  <text x="56" y="345" fill="#fef3c7" fontSize="9" fontWeight="600" letterSpacing="1">PLATFORM SERVICES</text>
  <rect x="56" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="99" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">App Lifecycle</text>
  <text x="99" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">Helm · GitOps</text>
  <rect x="152" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="195" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">Observability</text>
  <text x="195" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">Prometheus · Logs</text>
  <rect x="248" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="291" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">Backup &amp; Restore</text>
  <text x="291" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">Velero · S3</text>
  <rect x="344" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="387" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">VM Management</text>
  <text x="387" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">KubeVirt</text>
  <rect x="440" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="483" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">Test Suites</text>
  <text x="483" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">Pre-packaged</text>
  <rect x="536" y="351" width="86" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="579" y="366" textAnchor="middle" fill="#fef9c3" fontSize="9">Add-ons</text>
  <text x="579" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">Prometheus · Velero</text>
  <rect x="632" y="351" width="46" height="38" rx="4" fill="#78350f" fillOpacity="0.7"/>
  <text x="655" y="366" textAnchor="middle" fill="#fef9c3" fontSize="8">Notif-</text>
  <text x="655" y="379" textAnchor="middle" fill="#fde68a" fontSize="7.5">ications</text>

  <!-- Connectivity Model -->
  <rect x="36" y="418" width="648" height="56" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="56" y="436" fill="#94a3b8" fontSize="9" fontWeight="600" letterSpacing="1">CONNECTIVITY MODEL (OUTBOUND AGENT)</text>
  <rect x="56" y="442" width="180" height="22" rx="4" fill="#0f2a3d" fillOpacity="0.8"/>
  <text x="146" y="457" textAnchor="middle" fill="#7dd3fc" fontSize="9">Cloud Orbiter Control Plane</text>
  <text x="250" y="457" textAnchor="middle" fill="#475569" fontSize="10">←→</text>
  <rect x="270" y="442" width="140" height="22" rx="4" fill="#0f2a3d" fillOpacity="0.8"/>
  <text x="340" y="457" textAnchor="middle" fill="#7dd3fc" fontSize="9">NAT Gateway / Internet</text>
  <text x="424" y="457" textAnchor="middle" fill="#475569" fontSize="10">←→</text>
  <rect x="444" y="442" width="148" height="22" rx="4" fill="#0f2a3d" fillOpacity="0.8"/>
  <text x="518" y="457" textAnchor="middle" fill="#7dd3fc" fontSize="9">Orbiter Agent (Target Cluster)</text>
  <text x="606" y="457" textAnchor="middle" fill="#475569" fontSize="9">outbound only</text>

  <!-- footer -->
  <text x="360" y="500" textAnchor="middle" fill="#475569" fontSize="8.5">No inbound firewall rules required · Supports private, edge, and public cloud clusters</text>
</svg>
</div>

## Platform Component Model

Cloud Orbiter is organized into four functional layers:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Components</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>User Interface & API</td><td style={{padding: '3px 12px'}}>Management Dashboard, REST API, kubectl Proxy, WebSocket Notifications</td><td style={{padding: '3px 12px'}}>React, REST, WebSocket</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity & Access</td><td style={{padding: '3px 12px'}}>Authentication, RBAC, SSO federation, session management</td><td style={{padding: '3px 12px'}}>Keycloak, OpenID Connect, Okta, Google, Microsoft</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cluster Orchestration</td><td style={{padding: '3px 12px'}}>CKP, EKS, AKS, GKE, Edge, Brownfield cluster management</td><td style={{padding: '3px 12px'}}>Kubernetes API, CKP, Cloud Provider SDKs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Platform Services</td><td style={{padding: '3px 12px'}}>App Lifecycle, Observability, Backup, VMs, Test Suites, Add-ons</td><td style={{padding: '3px 12px'}}>Helm, Prometheus, Velero, KubeVirt</td></tr>
  </tbody>
</table>

## Connectivity Model

Cloud Orbiter uses an **outbound agent model** for cluster connectivity:

| Component | Role |
|---|---|
| **Cloud Orbiter Control Plane** | Central management engine — hosts all APIs, dashboards, and orchestration logic |
| **Orbiter Agent** | Lightweight agent deployed on each target cluster; initiates outbound connection to control plane |
| **NAT Gateway** | Translates private network addresses for internet-bound agent connections |
| **kubectl Proxy** | Control plane acts as proxy for all Kubernetes CLI and API access to target clusters |

This model means:
- **No inbound firewall rules** are required on target clusters
- Clusters behind strict enterprise firewalls, private networks, and edge sites can all be managed
- Cluster access is always mediated through the control plane — enabling centralized audit logging

## Tenant & Project Isolation

```
Cloud Orbiter
└── Tenant (Organization)
    ├── Project A (Team / Application)
    │   ├── Clusters
    │   ├── Applications
    │   └── Users & Roles
    └── Project B
        ├── Clusters
        ├── Applications
        └── Users & Roles
```

- **Tenant** — Top-level organizational boundary. Fully isolated identity realm per tenant.
- **Project** — Logical grouping within a tenant. Resources, clusters, and applications are scoped to a project.
- **Users & Groups** — Assigned to projects with explicit roles (Tenant Admin, Project Admin, Default User).

## Add-On Architecture

Cloud Orbiter extends cluster capabilities through pre-configured, tested Add-Ons:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Add-On</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Prometheus</td><td style={{padding: '3px 12px'}}>Metrics collection and alerting for cluster observability</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Velero</td><td style={{padding: '3px 12px'}}>Namespace backup, restore, disaster recovery, and cluster migration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>KubeVirt</td><td style={{padding: '3px 12px'}}>Virtual machine lifecycle management on Kubernetes nodes</td></tr>
  </tbody>
</table>

Add-Ons are installed and uninstalled directly from the cluster dashboard without manual Helm commands or YAML editing.
