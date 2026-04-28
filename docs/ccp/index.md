---
title: CCP - Cirrus Cloud Platform
sidebar_position: 0
---

# CCP - Cirrus Cloud Platform

CCP - Cirrus Cloud Platform is Coredge's hyper-scaler grade Cloud Management Platform (CMP) purpose-built for sovereign and enterprise cloud environments. It delivers a unified self-service experience for Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) — enabling service providers, governments, and enterprises to operate cloud infrastructure at national scale with full governance and control.

CCP integrates the Cloud Management layer with the IaaS Orchestrator, working alongside **Cloud Orbiter**, the Kubernetes Orchestrator, to provide a complete end-to-end cloud management stack above the underlying infrastructure.

## What it does

- **Self-Service Provisioning** — On-demand VMs, containers, bare metal, storage, and networking without manual intervention
- **Centralised Governance** — Unified management plane across all regions and availability zones with built-in API gateway and access control
- **Multi-Tenant IAM** — Keycloak-based identity with per-tenant realm isolation, SAML 2.0 federation, and 18 pre-defined RBAC roles
- **High Availability** — Active-passive dual-cluster per region with automated GSLB failover and 2N+1 quorum detection
- **Metering & FinOps** — Built-in metering, showback, and quota management across all tenants and cells
- **Enterprise Security** — mTLS in-transit, AES-256 at-rest, OpenFGA RBAC, and per-tenant Keycloak realm isolation
- **Scalable Architecture** — Scales to 50,000 VMs and 200,000 pods; add worker nodes on demand as workloads grow

## Platform Stack

| Layer | Component | Role |
|---|---|---|
| Cloud Management & IaaS | CCP - Cirrus Cloud Platform | Self-service portal, admin console, governance, metering, OpenStack-based compute, storage, and networking |
| Container Orchestration | Cloud Orbiter | Kubernetes cluster management and application deployment |
| Infrastructure | Physical / Virtual Layer | Servers, storage arrays, and network fabric |

## Who it's for

- **Government & Sovereign Cloud** — Locally controlled, nationally operated cloud platforms that meet data residency and compliance mandates
- **Cloud Service Providers** — Deliver managed IaaS, PaaS, and SaaS to customers through a self-service portal with full billing integration
- **Telecom Operators** — Build and operate carrier-grade cloud infrastructure for enterprise customers and 5G edge workloads
- **Regulated Enterprises** — Finance, healthcare, and critical infrastructure organisations requiring full data sovereignty
- **Large Enterprises** — Internal cloud platforms with chargeback, quota enforcement, and multi-department isolation

## Service Portfolio

CCP delivers services in three phased milestones:

| Phase | Highlights |
|---|---|
| MVP1 | Compute (VM, CaaS, BMaaS), Storage, Networking, Security, Database, Monitoring, IAM, Backup |
| MVP2 | Archival Storage, MS SQL DBaaS, CDN, MPLS, HSM, DDoS, TLS Management, Kafka |
| MVP3 | Bandwidth as a Service, MariaDB, NoSQL, DRaaS, Message Broker |

## Key Specifications

| Specification | Value |
|---|---|
| Platform Type | Cloud Management Platform (CMP) |
| Scalability | 50,000 VMs · 200,000 pods |
| HA Model | Active-Passive dual cluster per region |
| Failover | Automated GSLB · 2N+1 quorum detection |
| Encryption | mTLS in-transit · AES-256 at-rest |
| IAM Engine | Keycloak v24.0.5 · SAML 2.0 |
| AuthZ Engine | OpenFGA |
| Database | PostgreSQL 15.7 · MongoDB 5.0.3 |
| Deployment | Kubernetes — control plane per AZ |
| OpenStack | v2023.2 |
