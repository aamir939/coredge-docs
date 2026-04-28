---
title: Differentiators
sidebar_position: 6
---

# Competitive Differentiators

## What Sets Cirrus Cloud Platform Apart

CCP presents a distinctive combination of platform capabilities, architectural decisions, and operational design choices that differentiate it from both public cloud management tools and alternative private cloud platforms.

### 1. Purpose-Built for Sovereign and Regulated Cloud

Most Cloud Management Platforms are designed for managing public cloud resources or extending hyperscaler services. CCP is purpose-built for the opposite use case: privately operated, locally controlled, nationally compliant cloud infrastructure.

This means:
- On-premises deployment with no external hyperscaler dependency
- Data residency controls built into the platform design
- Per-tenant Keycloak realm isolation — not shared identity tenancy
- Compliance-first architecture aligned to government and regulated industry requirements
- SAML 2.0 federation with national identity providers (Microsoft ADFS, Entra)
- AES-256 at rest and mTLS in transit by default — no additional configuration needed

### 2. Unified IaaS, PaaS, and SaaS Through One Portal

CCP integrates three complementary orchestration layers into a single management surface:

- **CCP - Cirrus Cloud Platform:** The Cloud Management Platform — governance, IAM, metering, and self-service
- **CCP - Cirrus Cloud Platform:** OpenStack-based IaaS orchestration — VMs, bare metal, storage, networking
- **Cloud Orbiter:** Kubernetes orchestration — container workloads, application deployment, PaaS and SaaS delivery

A user in the Self-Service Console can provision a virtual machine, attach a storage volume, configure a load balancer, deploy a Kubernetes cluster, and launch a managed database — all from one interface, governed by one RBAC system, tracked by one metering engine. Most platforms require multiple tools for this breadth of capability.

### 3. True Multi-Tenancy with Per-Tenant Identity Isolation

Many platforms implement multi-tenancy as namespacing within a shared identity system. CCP implements multi-tenancy with a dedicated Keycloak IAM realm per tenant — a completely isolated identity domain with its own:
- Users and roles
- Authentication flows and MFA policies
- Federation configuration (one tenant can federate with ADFS, another with a different IdP)
- Session management

This is not namespace-level isolation. It is identity-domain-level isolation — the same model used by the world's largest cloud providers for their enterprise customers.

### 4. Fine-Grained Authorization via OpenFGA

Rather than implementing simple role-to-permission mappings, CCP uses OpenFGA — an open-source fine-grained authorization engine based on Google Zanzibar. OpenFGA evaluates authorization based on relationship tuples and contextual conditions, enabling:

- 18 pre-defined roles organized across 7 organization-level and 11 service-specific categories
- Principle of least privilege enforced at the resource operation level
- Context-aware authorization — the same user can have different permissions in different cells
- Auditable authorization decisions for compliance review

### 5. Phased Service Delivery with Complete Coverage

CCP delivers a structured, progressive service catalogue across three MVP phases, spanning:
- All core cloud categories: compute, storage, networking, security, monitoring, databases, backup
- Advanced services: CDN, MPLS, HSM, DDoS, Kafka, DRaaS, archival storage
- Foundation services: IAM, MFA, DNS, NTP, PAM, IPAM, Active Directory

This breadth — delivered from a single platform — eliminates the need for organizations to procure and integrate multiple best-of-breed tools for different service categories.

### 6. Built-In FinOps and Quota Management

CCP treats cost visibility as a first-class platform capability, not an afterthought:

- Metering and showback built into the orbiter-metering microservice
- Quota management enforced at both Tenant and Cell level in real time
- Resource consumption tracking across all service categories
- Usage data available for notional invoicing, internal chargebacks, and external billing integration
- Quota warnings at configurable thresholds prevent overspend before it occurs

### 7. Enterprise-Grade Operational Reliability

CCP is engineered for the uptime requirements of sovereign and enterprise cloud:

- Active-passive dual cluster per region with automated GSLB failover
- 2N+1 quorum detection for precise failure determination
- Kubernetes control plane per AZ for cluster-level resilience
- Incremental backup every 30 minutes; full backup every 24 hours; 3-month geo-replicated retention
- PostgreSQL streaming replication and MongoDB active-active across AZs

### 8. Open Integration Ecosystem

CCP integrates with enterprise tools already present in most large deployments:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Domain</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integrated Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>IaaS</td><td style={{padding: '3px 12px'}}>OpenStack v2023.2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>NetApp v11.9.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Bare Metal</td><td style={{padding: '3px 12px'}}>MaaS v3.4.9</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup</td><td style={{padding: '3px 12px'}}>Veritas NetBackup v10.11.2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Zabbix v7.4.3, Prometheus & Grafana v9.4.3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity</td><td style={{padding: '3px 12px'}}>Microsoft ADFS, Microsoft Entra, BSS Portal</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPN</td><td style={{padding: '3px 12px'}}>Zscaler (S2S and P2S)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Firewall</td><td style={{padding: '3px 12px'}}>CheckPoint, Palo Alto</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Log Management</td><td style={{padding: '3px 12px'}}>APM / NPM / IPM</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BSS / Billing</td><td style={{padding: '3px 12px'}}>BSS Portal (ATB)</td></tr>
  </tbody>
</table>

## Platform Comparison

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capability</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Public Cloud CMP</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Generic Open-Source CMP</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Cirrus Cloud Platform</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Sovereign / on-premises deployment</td><td style={{padding: '3px 12px'}}>No</td><td style={{padding: '3px 12px'}}>Partial</td><td style={{padding: '3px 12px'}}>Yes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Per-tenant IAM realm isolation</td><td style={{padding: '3px 12px'}}>Limited</td><td style={{padding: '3px 12px'}}>No</td><td style={{padding: '3px 12px'}}>Yes (Keycloak realm per tenant)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Fine-grained authorization (OpenFGA)</td><td style={{padding: '3px 12px'}}>Proprietary</td><td style={{padding: '3px 12px'}}>Basic RBAC</td><td style={{padding: '3px 12px'}}>Yes (18 pre-defined roles)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>IaaS + PaaS + SaaS from one portal</td><td style={{padding: '3px 12px'}}>Limited</td><td style={{padding: '3px 12px'}}>Complex integration</td><td style={{padding: '3px 12px'}}>Yes (CCP + Cloud Orbiter)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Built-in metering and FinOps</td><td style={{padding: '3px 12px'}}>Proprietary tools</td><td style={{padding: '3px 12px'}}>Build yourself</td><td style={{padding: '3px 12px'}}>Yes (orbiter-metering)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>SAML 2.0 federation</td><td style={{padding: '3px 12px'}}>Yes</td><td style={{padding: '3px 12px'}}>Manual</td><td style={{padding: '3px 12px'}}>Yes (ADFS, Entra, BSS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>mTLS + AES-256 by default</td><td style={{padding: '3px 12px'}}>Yes</td><td style={{padding: '3px 12px'}}>Manual</td><td style={{padding: '3px 12px'}}>Yes — default, not optional</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Active-passive HA with GSLB</td><td style={{padding: '3px 12px'}}>Yes</td><td style={{padding: '3px 12px'}}>Manual</td><td style={{padding: '3px 12px'}}>Yes (automated)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Phased service catalogue (MVP1-3)</td><td style={{padding: '3px 12px'}}>No</td><td style={{padding: '3px 12px'}}>No</td><td style={{padding: '3px 12px'}}>Yes — progressive delivery model</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Operational overhead</td><td style={{padding: '3px 12px'}}>Low (managed)</td><td style={{padding: '3px 12px'}}>High (build + maintain)</td><td style={{padding: '3px 12px'}}>Low (managed with local control)</td></tr>
  </tbody>
</table>
