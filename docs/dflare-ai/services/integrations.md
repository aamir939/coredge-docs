---
title: Supported Integrations
sidebar_position: 9
---

# Supported Integrations

Dflare AI is designed with a pluggable, vendor-agnostic architecture. The platform integrates with industry-leading solutions across six infrastructure categories, enabling organizations to leverage their preferred technology stack.

## Network Fabric

- **Cisco NDFC / ACI** — Automated VRF/VLAN provisioning, VXLAN/EVPN fabric management, switch configuration
- **Arista CloudVision** — Network fabric automation, telemetry, and multi-site management
- **Palo Alto Networks** — Perimeter firewall with per-tenant ACLs, stateful inspection, L3 out gateway
- **F5 BIG-IP** — Load balancing, traffic management, and application delivery for tenant workloads

## Bare Metal & Compute

- **Canonical MAAS** — Bare metal provisioning via PXE/IPMI, OS deployment, machine lifecycle management
- **NVIDIA GPU Operator** — Automated GPU driver, device plugin, and telemetry deployment on Kubernetes
- **NVIDIA Slinky / SchedMD Slurm** — Kubernetes-native Slurm operator for HPC workload scheduling
- **Intel / AMD GPU Operators** — Multi-vendor GPU runtime support for ROCm and Intel accelerators

## Storage

- **DDN AI400 (Lustre)** — Parallel filesystem over InfiniBand for training data
- **VAST Data** — Unified NFS/S3 storage with Kubernetes CSI integration
- **NetApp ONTAP** — Block and file storage with snapshots and replication
- **Pure Storage** — All-flash block storage with ActiveCluster
- **Dell PowerScale** — Scale-out NAS for shared datasets
- **Ceph** — Software-defined block, object, and file storage
- **NVIDIA UFM** — InfiniBand fabric management and PKey isolation

## Identity & Access

- **Keycloak** — OAuth2, OpenID Connect, per-tenant realms, MFA
- **Active Directory / LDAP** — Enterprise directory synchronization
- **Okta** — SAML/OIDC federation, JIT provisioning
- **Azure AD** — Cloud identity federation

## Observability

- **Prometheus** — Metrics collection with GPU and node exporters
- **VictoriaMetrics** — Long-term metrics storage with PromQL
- **Grafana** — Pre-built GPU infrastructure dashboards and alerting

## Ticketing & ITSM

- **ServiceNow** — Incident creation, change requests, CMDB sync
- **Jira Service Management** — Issue tracking, workflow triggers
