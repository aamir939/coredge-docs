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
  <rect x="56" y="253" width="280" height="44" rx="4" fill="#064e3b" fillOpacity="0.7" stroke="#10b981" strokeWidth="1"/>
  <text x="196" y="268" textAnchor="middle" fill="#d1fae5" fontSize="11" fontWeight="600">CKP — Coredge Kubernetes Platform</text>
  <text x="196" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Primary · Enterprise-Grade · On-Premise · Edge · IoT</text>
  <rect x="350" y="253" width="150" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="425" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Edge Clusters</text>
  <text x="425" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Remote Sites · Distributed</text>
  <rect x="514" y="253" width="158" height="44" rx="4" fill="#064e3b" fillOpacity="0.7"/>
  <text x="593" y="270" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Brownfield Import</text>
  <text x="593" y="283" textAnchor="middle" fill="#6ee7b7" fontSize="8">Existing K8s Clusters</text>

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
  <text x="360" y="500" textAnchor="middle" fill="#475569" fontSize="8.5">No inbound firewall rules required · Supports on-premise, edge, and private cloud clusters</text>
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
    <tr><td style={{padding: '3px 12px'}}>Cluster Orchestration</td><td style={{padding: '3px 12px'}}>CKP cluster provisioning and lifecycle management</td><td style={{padding: '3px 12px'}}>Kubernetes API, CKP, CAPI</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Platform Services</td><td style={{padding: '3px 12px'}}>App Lifecycle, Observability, Backup, VMs, Test Suites, Add-ons</td><td style={{padding: '3px 12px'}}>Helm, Prometheus, Velero, KubeVirt</td></tr>
  </tbody>
</table>

## CKP Architecture

CKP (Coredge Kubernetes Platform) operates across two functional layers:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Function</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Components</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}><strong>Distribution Layer</strong></td><td style={{padding: '3px 12px'}}>Delivers custom-built, validated Kubernetes packages</td><td style={{padding: '3px 12px'}}>kubeadm, kubelet, kubectl, Coredge-hosted core images</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Management Layer</strong></td><td style={{padding: '3px 12px'}}>Handles cluster lifecycle through CAPI</td><td style={{padding: '3px 12px'}}>Cluster API, Provisioning, Scaling, Upgrades</td></tr>
  </tbody>
</table>

### Supported Configurations

| Specification | Details |
|---------------|---------|
| **Kubernetes Versions** | v1.33.7, v1.34.3, v1.35.1 (CNCF Certified) |
| **Operating Systems** | Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9 |
| **Infrastructure Provider** | Orbiter Baremetal (BMS) |
| **Architectures** | AMD64, ARM64 |

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

<div style={{textAlign: "center", margin: "32px auto", maxWidth: "680px"}}>
<svg viewBox="0 0 680 420" width="100%" xmlns="http://www.w3.org/2000/svg" fontFamily="Inter, Segoe UI, sans-serif">
  <defs>
    <linearGradient id="tiBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0f172a"/>
      <stop offset="100%" stopColor="#1e293b"/>
    </linearGradient>
    <linearGradient id="tiOrbiter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0369a1"/>
      <stop offset="100%" stopColor="#0284c7"/>
    </linearGradient>
    <linearGradient id="tiTenant" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#6d28d9"/>
      <stop offset="100%" stopColor="#7c3aed"/>
    </linearGradient>
    <linearGradient id="tiProject" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#065f46"/>
      <stop offset="100%" stopColor="#047857"/>
    </linearGradient>
    <linearGradient id="tiResource" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#92400e"/>
      <stop offset="100%" stopColor="#b45309"/>
    </linearGradient>
    <filter id="tiShadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
    </filter>
  </defs>

  <rect width="680" height="420" fill="url(#tiBg)" rx="14"/>
  <text x="340" y="32" textAnchor="middle" fill="#f1f5f9" fontSize="15" fontWeight="700">Tenant & Project Isolation Model</text>
  <text x="340" y="50" textAnchor="middle" fill="#94a3b8" fontSize="9">Multi-Tenant Hierarchy · RBAC · Resource Scoping</text>

  <!-- Cloud Orbiter Control Plane -->
  <rect x="200" y="66" width="280" height="44" rx="8" fill="url(#tiOrbiter)" filter="url(#tiShadow)"/>
  <text x="340" y="84" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="600" letterSpacing="0.5">CONTROL PLANE</text>
  <text x="340" y="100" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontWeight="500">Cloud Orbiter</text>

  <!-- Connector line from Orbiter to Tenant -->
  <line x1="340" y1="110" x2="340" y2="130" stroke="#475569" strokeWidth="2"/>
  <polygon points="340,138 335,130 345,130" fill="#475569"/>

  <!-- Tenant Box -->
  <rect x="80" y="140" width="520" height="260" rx="10" fill="url(#tiTenant)" filter="url(#tiShadow)" fillOpacity="0.95"/>
  <text x="100" y="162" fill="#ddd6fe" fontSize="9" fontWeight="600" letterSpacing="1">TENANT (ORGANIZATION)</text>
  <rect x="100" y="170" width="130" height="22" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="165" y="185" textAnchor="middle" fill="#ede9fe" fontSize="9">Isolated Identity Realm</text>
  <rect x="240" y="170" width="100" height="22" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="290" y="185" textAnchor="middle" fill="#ede9fe" fontSize="9">Quota Policies</text>
  <rect x="350" y="170" width="110" height="22" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="405" y="185" textAnchor="middle" fill="#ede9fe" fontSize="9">Tenant Admin Role</text>
  <rect x="470" y="170" width="110" height="22" rx="4" fill="#4c1d95" fillOpacity="0.7"/>
  <text x="525" y="185" textAnchor="middle" fill="#ede9fe" fontSize="9">Audit Logging</text>

  <!-- Project A -->
  <rect x="100" y="210" width="230" height="170" rx="8" fill="url(#tiProject)" filter="url(#tiShadow)"/>
  <text x="120" y="230" fill="#a7f3d0" fontSize="9" fontWeight="600" letterSpacing="0.5">PROJECT A</text>
  <text x="120" y="244" fill="#6ee7b7" fontSize="8">Team / Application Scope</text>

  <!-- Project A Resources -->
  <rect x="115" y="258" width="90" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="160" y="274" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Clusters</text>
  <text x="160" y="287" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">CKP · Edge</text>

  <rect x="215" y="258" width="100" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="265" y="274" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Applications</text>
  <text x="265" y="287" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Helm · GitOps</text>

  <rect x="115" y="304" width="90" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="160" y="320" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Users</text>
  <text x="160" y="333" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Project Members</text>

  <rect x="215" y="304" width="100" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="265" y="320" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Roles</text>
  <text x="265" y="333" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Admin · User</text>

  <rect x="115" y="350" width="200" height="20" rx="4" fill="url(#tiResource)" fillOpacity="0.9"/>
  <text x="215" y="364" textAnchor="middle" fill="#fef3c7" fontSize="8">Observability · Backup · Add-ons</text>

  <!-- Project B -->
  <rect x="350" y="210" width="230" height="170" rx="8" fill="url(#tiProject)" filter="url(#tiShadow)"/>
  <text x="370" y="230" fill="#a7f3d0" fontSize="9" fontWeight="600" letterSpacing="0.5">PROJECT B</text>
  <text x="370" y="244" fill="#6ee7b7" fontSize="8">Team / Application Scope</text>

  <!-- Project B Resources -->
  <rect x="365" y="258" width="90" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="410" y="274" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Clusters</text>
  <text x="410" y="287" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">CKP · Edge</text>

  <rect x="465" y="258" width="100" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="515" y="274" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Applications</text>
  <text x="515" y="287" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Helm · GitOps</text>

  <rect x="365" y="304" width="90" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="410" y="320" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Users</text>
  <text x="410" y="333" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Project Members</text>

  <rect x="465" y="304" width="100" height="36" rx="4" fill="#064e3b" fillOpacity="0.8"/>
  <text x="515" y="320" textAnchor="middle" fill="#d1fae5" fontSize="9" fontWeight="500">Roles</text>
  <text x="515" y="333" textAnchor="middle" fill="#6ee7b7" fontSize="7.5">Admin · User</text>

  <rect x="365" y="350" width="200" height="20" rx="4" fill="url(#tiResource)" fillOpacity="0.9"/>
  <text x="465" y="364" textAnchor="middle" fill="#fef3c7" fontSize="8">Observability · Backup · Add-ons</text>

  <!-- Footer -->
  <text x="340" y="410" textAnchor="middle" fill="#475569" fontSize="8">Projects are fully isolated · No cross-project resource visibility · RBAC enforced at every layer</text>
</svg>
</div>

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse', marginTop: '16px'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Level</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Isolation</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Tenant</td><td style={{padding: '3px 12px'}}>Top-level organizational boundary (enterprise, department, customer)</td><td style={{padding: '3px 12px'}}>Fully isolated identity realm per tenant</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Project</td><td style={{padding: '3px 12px'}}>Logical grouping within a tenant for teams or applications</td><td style={{padding: '3px 12px'}}>Resources, clusters, and apps scoped to project</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Users & Roles</td><td style={{padding: '3px 12px'}}>Assigned to projects with explicit RBAC roles</td><td style={{padding: '3px 12px'}}>Tenant Admin, Project Admin, Default User</td></tr>
  </tbody>
</table>

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
