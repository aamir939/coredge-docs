---
title: Deployment Models
sidebar_position: 4
---

# Deployment Models

## Platform Scale

:::tip Platform Capacity
- **Virtual Machines** — Up to 50,000 VMs per deployment
- **Container Pods** — Up to 200,000 pods per deployment
- **Availability Zones** — Multi-AZ with Kubernetes control plane per AZ
- **High Availability** — Active-Passive dual cluster per region with automated GSLB failover
- **Scalability** — Worker nodes added on demand; no downtime for capacity expansion
- **Multi-Region** — Platform supports multi-region deployment with centralized governance
:::

## Deployment Architecture

CCP is deployed on Kubernetes — one control plane per availability zone. The platform follows an active-passive HA model at the region level:

- **Cluster 1 (Primary):** Active control plane in AZ1, serving all production traffic
- **Cluster 2 (Standby):** Passive cluster in AZ2, continuously synchronized, ready for failover
- **GSLB Failover:** Automated Global Server Load Balancing detects primary failure and routes traffic to standby with 2N+1 quorum detection

This architecture delivers zero-downtime maintenance, AZ-level fault tolerance, and recovery time objectives that meet the requirements of sovereign and enterprise cloud deployments.

## Deployment Phases — Phased Service Delivery

CCP delivers its full service catalogue across three phased milestones (MVP), allowing progressive capability expansion:

### MVP1 — Core Cloud Platform (Initial Deployment)

The first milestone delivers the complete foundation: compute, storage, networking, security, monitoring, IAM, and databases sufficient to support production sovereign cloud operations.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Compute</td><td style={{padding: '3px 12px'}}>Virtual Machine, Container as a Service (CaaS), Bare Metal as a Service (BMaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Block Storage, Object Storage, File Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Application LB, Network LB, VPN S2S/P2S, Firewall, Public IP, NAT Gateway, VPC</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>SIEM, Log Monitoring, CSPM (Cloud Workload Protection), WAF</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Oracle DBaaS, MongoDB DBaaS</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Log Analyzer, Operational Metrics, Alarm Service, Notification Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Foundation</td><td style={{padding: '3px 12px'}}>IAM, MFA, DNS, NTP, SMTP, Privileged Access Management, IP Address Management, Active Directory Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Support</td><td style={{padding: '3px 12px'}}>Basic Support, Enterprise Support, Managed Services, Backup as a Service</td></tr>
  </tbody>
</table>

### MVP2 — Extended Services

The second milestone adds advanced database options, extended networking, enhanced security services, and queue infrastructure:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Archival Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>MS SQL-as-a-Service (Standard / Enterprise / Web editions), Managed Database, DB Licenses</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Content Delivery Network (CDN), MPLS Connectivity (Partner and Dedicated Interconnect)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>Cloud HSM, DDoS Protection, TLS/SSL Certificate Management, Encryption as a Service, Digital Forensics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Additional</td><td style={{padding: '3px 12px'}}>Kafka as a Service (Queue Services)</td></tr>
  </tbody>
</table>

### MVP3 — Advanced and DR Capabilities

The third milestone delivers bandwidth services, additional managed databases, and disaster recovery:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Bandwidth as a Service / QoS (BWaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Managed DB MariaDB, Managed DB NoSQL</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DR / Messaging</td><td style={{padding: '3px 12px'}}>Disaster Recovery as a Service (DRaaS), Message Broker Services</td></tr>
  </tbody>
</table>

## Tenant Onboarding Flow

1. **BSS Portal / Admin Creates Tenant** — Platform admin or BSS system creates tenant with name, subscription, and initial quota allocation
2. **Keycloak Realm Provisioned** — A dedicated IAM realm is auto-created for the tenant with default roles, clients, and authentication flows
3. **First Admin User Created** — Tenant admin user is provisioned with full tenant-level permissions
4. **Quota Configured** — Compute, storage, network, and service quotas set at tenant level; can be subdivided per cell
5. **Organization and Cell Setup** — Tenant admin creates organizations and cells (projects), sets per-cell quotas, and configures access policies
6. **Users Invited** — Team members created or invited with appropriate RBAC roles and cell assignments via OpenFGA
7. **Ready** — Tenant is fully operational. Users can provision VMs, containers, storage, networking, and databases through the Self-Service Console

## Support Tiers

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Tier</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Response Model</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Features</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Basic Support</td><td style={{padding: '3px 12px'}}>Business-hours ticket-based</td><td style={{padding: '3px 12px'}}>Next-business-day response, knowledge base access, standard SLA</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Enterprise Support</td><td style={{padding: '3px 12px'}}>Priority response for critical issues</td><td style={{padding: '3px 12px'}}>Dedicated engineer, faster critical SLA, proactive health checks</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Services</td><td style={{padding: '3px 12px'}}>Full managed operations</td><td style={{padding: '3px 12px'}}>Coredge team manages Day 2 operations on behalf of the customer</td></tr>
  </tbody>
</table>

## Infrastructure Pre-Requisites

The following infrastructure must be provisioned before CCP deployment:

- **Wildcard SSL Certificates** — For CCP hosting domain and all subdomains
- **Load Balancer with VIPs** — Virtual IPs per endpoint for portal, API gateway, and services
- **DNS Server** — With dynamic domain support for service discovery
- **High IOPS Storage** — Kubernetes-compliant storage for control plane etcd and persistent volumes
- **SMTP Server** — For notification service (email delivery)
- **NTP Server** — For time synchronization across all nodes
- **Container Registry** — For platform image storage and deployment (can be air-gapped registry)

## Data Protection

- **Incremental Backup:** Every 30 minutes via Veritas NetBackup v10.11.2
- **Full Backup:** Every 24 hours
- **Retention:** 3-month geo-replicated retention in object storage
- **Database Replication:** PostgreSQL streaming replication; MongoDB active-active with change-stream
- **Audit Logs:** Continuous, long-term retention per compliance requirements
