---
title: Deployment Models
sidebar_position: 4
---

# Deployment Models

## Scalability

:::tip Platform Scale
- **GPU Nodes** — Scalable to thousands of nodes per deployment
- **Accelerators** — Scalable to thousands of GPUs per deployment
- **GPU Vendors** — NVIDIA, AMD, Intel multi-vendor support
- **Tenants** — Multi-tenant with dedicated IAM realms per tenant
- **Clusters per Tenant** — Configurable via quota system
- **Network Isolation** — Configurable pool of tenant VRFs, multiple VLANs per VRF, expandable
:::

## Tenant Onboarding Flow

1. **Domain Created** — Platform Super Admin creates tenant with name, initial quota, and network allocation
2. **Identity Provisioned** — IAM realm auto-created with default roles, clients, and auth flows
3. **First Admin User** — Domain Admin created with full tenant-level permissions
4. **Network Allocated** — VRFs/VLANs assigned (multiple VLANs per tenant), resource quotas configured
5. **Organization & Project Setup** — Domain Admin creates org/project hierarchy, sets per-project quotas
6. **Users Invited** — Users created/invited with appropriate roles and project assignments
7. **Ready** — Tenant fully operational. Can provision bare metal, create clusters, deploy workloads

## Support & SLA

### High Availability Infrastructure

The control plane utilizes multiple redundancy strategies:

- **Portal & Load Balancing** — Multiple replicas with automatic failover
- **Identity Management** — Clustered IAM with session replication
- **Database Layer** — Primary-replica configuration with rapid failover
- **Service Coordination** — etcd quorum for distributed consensus
- **Metrics** — HA metrics cluster with data replication

### Data Protection

- **Configuration Backups** — Automated backups every 6 hours
- **Retention** — 12-24 months in object storage
- **Audit Logs** — Continuous storage with long-term retention
- **Metrics** — 90 days hot storage, 12 months cold archives

### Monitoring & Alerts

Comprehensive monitoring with exporters covering every infrastructure layer. Critical thresholds trigger alerts:

- GPU temperature exceeding safe limits
- CPU utilization above threshold
- Memory utilization at node level
- Storage latency anomalies

### Incident Management

Incidents follow severity classifications from Critical (platform-wide outages) through Low (minor issues with workarounds). Response includes detection, triage, investigation with correlation ID tracking, resolution, and post-incident review.

### Support Tiers

- **Standard** — Business-hours ticket support with next-business-day response
- **Enterprise** — Priority response for critical issues plus dedicated engineer
- **Premium** — Rapid critical response with assigned team and custom SLA negotiation

*Specific SLA terms, response times, and support tiers are defined per customer engagement.*
