---
title: Data Sheet
sidebar_position: 3
---

# Cirrus Cloud Platform 

## Hyper-Scaler Grade Cloud Management Platform for Sovereign and Enterprise Cloud
Coredge | coredge.io | version 1.0 | February 2026 | Datasheet

### AT A GLANCE

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Specification</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Platform Type</td><td style={{padding: '3px 12px'}}>Cloud Management Platform (CMP)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Scalability</td><td style={{padding: '3px 12px'}}>50,000 VMs and 200,000 pods</td></tr>
    <tr><td style={{padding: '3px 12px'}}>HA Model</td><td style={{padding: '3px 12px'}}>Active-Passive dual cluster per region</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Failover</td><td style={{padding: '3px 12px'}}>Automated GSLB and 2N+1 quorum detection</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Encryption</td><td style={{padding: '3px 12px'}}>mTLS in-transit and AES-256 at-rest</td></tr>
    <tr><td style={{padding: '3px 12px'}}>IAM Engine</td><td style={{padding: '3px 12px'}}>Keycloak v24.0.5 and SAML 2.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>AuthZ Engine</td><td style={{padding: '3px 12px'}}>OpenFGA</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>PostgreSQL 15.7 and MongoDB 5.0.3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup</td><td style={{padding: '3px 12px'}}>30-min incremental, 24-hr full, and 3-month geo-replicated retention</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Deployment</td><td style={{padding: '3px 12px'}}>Kubernetes — control plane per AZ</td></tr>
    <tr><td style={{padding: '3px 12px'}}>OpenStack</td><td style={{padding: '3px 12px'}}>v2023.2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NetApp</td><td style={{padding: '3px 12px'}}>v11.9.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Zabbix</td><td style={{padding: '3px 12px'}}>v7.4.3</td></tr>
  </tbody>
</table>

## OVERVIEW
CCP - Cirrus Cloud Platform is a Cloud Management Platform developed by Coredge, delivering hyper-scaler grade self-service capabilities for IaaS, PaaS, and SaaS. Combined with Cirrus Cloud Platform (IaaS Orchestrator) and Cloud Orbiter (Kubernetes Orchestrator), CCP provides a unified platform for internal operations teams and customers — enabling self-service provisioning, centralized governance, and optimized cloud spend through a single portal.
Purpose-built for sovereign and enterprise cloud environments, CCP bridges the gap between public cloud self-service convenience and the control, compliance, and security posture required for government and regulated enterprises.

### KEY BENEFITS
- **Self-Service Provisioning:** On-demand VMs, containers, bare metal, storage, and networking with no manual intervention required.
- **Centralized Management:** Unified management plane across all regions and AZs with a built-in API gateway and centralized access control.
- **Multi-Tenant IAM:** Keycloak-based identity with per-tenant isolation, SAML 2.0 federation, and 18 pre-defined RBAC roles.
- **High Availability:** Active-passive dual-cluster per region with automated GSLB failover and 2n+1 quorum detection.
- **Metering & FinOps:** Built-in metering, showback, and quota management for full spend visibility across all tenants and cells.
- **Scalable Architecture:** Scales to 50,000 VMs and 200,000 pods; add worker nodes on demand as workloads grow.
- **Enterprise Security:** mTLS in-transit, AES-256 at-rest, RBAC via OpenFGA, and per-tenant Keycloak realm isolation.
- **Optimized Cloud Spend:** Policy-based quota enforcement at tenant and cell level with usage reporting and notional invoicing.

### USE CASES
- Sovereign cloud platform for government and national critical infrastructure
- Enterprise private cloud for regulated industries requiring data sovereignty
- Managed cloud services delivery for telecom operators and service providers
- Multi-tenant IaaS and PaaS delivery at national scale
- Day 2 operations, FinOps, and cloud governance for large enterprises

### PLATFORM HIERARCHY
CCP organizes resources in a three-level hierarchy: Tenant (top-level boundary, one per customer account) → Cell (isolated project or environment within a Tenant) → Resources (cloud services consumed within a Cell). Quota is enforced at both Tenant and Cell level. The BSS Portal is the primary identity store.

### COMPLETE SERVICE PORTFOLIO

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Compute</td><td style={{padding: '3px 12px'}}>Virtual Machine, Container as a Service (CaaS), and Bare Metal as a Service (BMaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Block Storage, Object Storage, and File Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Application LB, Network LB, VPN S2S/P2S, Firewall, Public IP, NAT Gateway, and VPC</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>SIEM, Log Monitoring, Cloud Workload Protection (CSPM), and Web Application Firewall</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Oracle DBaaS and MongoDB DBaaS</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Log Analyzer, Operational Metrics, Alarm Service, and Notification Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Foundation</td><td style={{padding: '3px 12px'}}>IAM, MFA, DNS, NTP, SMTP, Privileged Access Management, IP Address Management, and AD Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Backup / Support</td><td style={{padding: '3px 12px'}}>Backup as a Service, Basic & Enterprise Support, and Managed Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Archival Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>MS SQL-as-a-Service (Standard / Enterprise / Web), Managed Database, and DB Licenses</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Content Delivery Network and MPLS Connectivity (Partner & Dedicated Interconnect)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>Cloud HSM, DDoS Protection, TLS/SSL Certificate Management, Encryption, and Digital Forensics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Additional</td><td style={{padding: '3px 12px'}}>Queue Services — Kafka as a Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Bandwidth as a Service / QoS (BWaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Managed DB MariaDB and Managed DB NoSQL</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>DR / Messaging</td><td style={{padding: '3px 12px'}}>Disaster Recovery as a Service (DRaaS) · Message Broker Services</td></tr>
  </tbody>
</table>

### INTEGRATION ECOSYSTEM

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration Tool / Platform</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Version</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Function</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>OpenStack</td><td style={{padding: '3px 12px'}}>v2023.2</td><td style={{padding: '3px 12px'}}>VM, GPU, VPC, Network, Block Storage, Load Balancer</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NetApp</td><td style={{padding: '3px 12px'}}>v11.9.0</td><td style={{padding: '3px 12px'}}>Block Storage, Object Storage, File Storage, Bare Metal / DBaaS</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Veritas NetBackup</td><td style={{padding: '3px 12px'}}>v10.11.2</td><td style={{padding: '3px 12px'}}>DB Backup — incremental every 30 min, full every 24 hrs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MaaS</td><td style={{padding: '3px 12px'}}>v3.4.9</td><td style={{padding: '3px 12px'}}>Bare Metal server provisioning</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Keycloak</td><td style={{padding: '3px 12px'}}>v24.0.5</td><td style={{padding: '3px 12px'}}>Authentication, IAM, multi-tenant identity management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Zabbix</td><td style={{padding: '3px 12px'}}>v7.4.3</td><td style={{padding: '3px 12px'}}>Operational Metrics, Alarms, Notifications</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Prometheus & Grafana</td><td style={{padding: '3px 12px'}}>v9.4.3</td><td style={{padding: '3px 12px'}}>Cluster and database health monitoring</td></tr>
    <tr><td style={{padding: '3px 12px'}}>TCPWare</td><td style={{padding: '3px 12px'}}>ccp-1.14.0-rc5</td><td style={{padding: '3px 12px'}}>Public IP management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Microsoft Entra</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Active Directory Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Microsoft ADFS</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Identity federation via SAML 2.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Zscaler</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>VPN Gateway — Site-to-Site & Point-to-Site</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CheckPoint / Palo Alto</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Firewall</td></tr>
    <tr><td style={{padding: '3px 12px'}}>APM / NPM / IPM</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Log Analyzer, Log Monitoring</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CSPM</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Cloud Workload Protection</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BSS Portal (ATB)</td><td style={{padding: '3px 12px'}}>N/A</td><td style={{padding: '3px 12px'}}>Customer onboarding, billing, identity, org creation</td></tr>
  </tbody>
</table>

### SECURITY, HIGH AVAILABILITY & PRE-REQUISITES
#### **Security**
- Encryption in transit: mTLS (Mutual TLS)
- Encryption at rest: AES-256
- Authorization: OpenFGA with 18 pre-defined RBAC roles across Tenant and Cell levels
- Per-tenant Keycloak realm isolation • SAML 2.0 federation with Microsoft ADFS and Entra
#### **High Availability**
- Active-Passive dual cluster per region — Cluster 1 (primary) in AZ1, Cluster 2 (standby) in AZ2
- Automated GSLB-based failover with 2n+1 quorum cluster detection
- PostgreSQL: Logical/Streaming Replication • MongoDB: Active-Active with change-stream
- Backup: incremental every 30 min • Full back up every 24 hrs.
- 3-month geo-replicated retention
#### **Pre-Requisites**
- Wildcard SSL certificates for CCP hosting
- Load Balancer with Virtual IPs (VIPs) per endpoint
- DNS server with dynamic domain support
- Kubernetes-compliant High IOPS storage
- SMTP, NTP, and DNS server connectivity
- Container registry access

## Contact

For more information or questions about Coredge's CCP:

- **Website:** [https://coredge.io](https://coredge.io)
- **Email:** [info@coredge.io](mailto:info@coredge.io)

---