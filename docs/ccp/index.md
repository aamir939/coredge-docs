---
title: Cirrus Cloud Platform
sidebar_position: 0
---

# Cirrus Cloud Platform

Cirrus Cloud Platform (CCP) is Coredge's hyper-scaler grade Cloud Management Platform (CMP) purpose-built for sovereign and enterprise cloud environments. It delivers a unified self-service experience for Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) — enabling service providers, governments, and enterprises to operate cloud infrastructure at national scale with full governance and control.

CCP works in combination with **Cirrus Cloud Platform (CCP)**, the IaaS Orchestrator, and **Cloud Orbiter**, the Kubernetes Orchestrator, to provide a complete end-to-end cloud management stack above the underlying infrastructure.

## What it does

- **Self-Service Provisioning** — On-demand VMs, containers, bare metal, storage, and networking without manual intervention
- **Centralised Governance** — Unified management plane across all regions and availability zones with built-in API gateway and access control
- **Multi-Tenant IAM** — Keycloak-based identity with per-tenant realm isolation, SAML 2.0 federation, and 18 pre-defined RBAC roles
- **Metering & FinOps** — Built-in metering, showback, and quota management across all tenants and cells
- **Enterprise Security** — mTLS in-transit, AES-256 at-rest, OpenFGA RBAC, and per-tenant Keycloak realm isolation
- **Scalable Architecture** — Scales thousands of VMs and pods; add worker nodes on demand as workloads grow

## Platform Stack

| Layer | Component | Role |
|---|---|---|
| Management | Cirrus Cloud Platform (CCP) | Self-service portal, admin console, governance, metering |
| IaaS Orchestration | Cirrus Cloud Platform (CCP) | OpenStack-based compute, storage, and networking |
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
| Compute | Virtual Machines, Kubernetes Clusters, and VM Snapshots |
| Storage | Volumes, Volume Snapshots, Object Storage, File System, Object Storage Archival, and Container Registry |
| Networks | VPC, Security Groups, Load Balancers, Security, and Monitoring Dashboard |
