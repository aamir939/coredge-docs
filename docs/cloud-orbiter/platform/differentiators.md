---
title: Key Differentiators
sidebar_position: 6
---

# Key Differentiators

## Why Cloud Orbiter?

Cloud Orbiter is purpose-built to solve the operational complexity of managing Kubernetes at scale across diverse environments. Here is what sets it apart.

## Universal Application Control Plane

Most Kubernetes management tools are designed for a single environment — either cloud-native or on-premise. Cloud Orbiter manages **all** cluster types from one dashboard:
- Public cloud managed services: AWS EKS, Azure AKS, Google GKE
- On-premise and bare metal clusters
- Edge and remote site clusters
- Brownfield import of any existing Kubernetes distribution (VMware, OpenShift, EKS-Anywhere, and more)
- Coredge Kubernetes Platform (CKP) clusters

No other tool needed. No context switching. One control plane for every cluster.

## Integrated and Curated Platform

Cloud Orbiter is not a collection of loosely connected tools — it is an opinionated, integrated platform where every component is tested together:
- Observability is built in, not bolted on
- Backup (Velero) is a first-class feature, not an afterthought
- Identity (Keycloak + RBAC) is embedded, not external
- GitOps is native, not a plugin

The result is a platform where features work together — with consistent UI, unified RBAC, and predictable behavior across all capabilities.

## Zero-Trust Security by Design

Security is not a configuration layer — it is woven into the platform architecture:
- Every API call is authenticated and authorized via Keycloak + RBAC
- No action is allowed without an explicit role grant
- Cluster connections use outbound-only agents — target clusters never expose inbound endpoints
- Complete audit logs capture every user action with identity, IP, timestamp, and endpoint
- Session management prevents credential abuse with concurrent session limits and forced logout

## Outbound-Agent Connectivity Model

Traditional Kubernetes management tools require inbound connectivity to target clusters — meaning firewall rules, VPN tunnels, or public IP exposure. Cloud Orbiter's **outbound agent model** eliminates this requirement:
- The Orbiter Agent initiates an outbound connection from the target cluster to the Cloud Orbiter control plane
- No inbound firewall rules are needed on the target cluster
- Works seamlessly across private data centres, air-gapped environments, and edge sites
- All Kubernetes API and CLI access is proxied through the control plane for centralized logging

## Multi-Tenant Isolation

Cloud Orbiter is built for multi-tenant deployments from day one. Each organization:
- Gets a fully isolated tenant environment
- Has its own identity realm with separate users, groups, and roles
- Cannot access or see resources belonging to other tenants
- Can define its own SSO integration, password policy, and session management

This makes Cloud Orbiter suitable for cloud service providers offering Kubernetes-as-a-Service to multiple customers on shared infrastructure.

## GitOps-Native Continuous Delivery

Cloud Orbiter integrates Git as the source of truth for application deployment:
- Define application state in a Git repository
- Cloud Orbiter automatically reconciles cluster state to match the Git-defined target
- Track all changes, rollbacks, and updates with version control
- Deploy updates across multiple clusters simultaneously from a single Git commit

## Automated Day 2 Operations

Cluster creation is only the beginning. Cloud Orbiter automates the ongoing management work that consumes most operational time:

| Operation | Cloud Orbiter Capability |
|---|---|
| Cluster Upgrades | Automated K8s version upgrades with zero-downtime |
| Scaling | Add or remove nodes from a centralized interface |
| Backup & Restore | Scheduled namespace backup with S3-compatible storage |
| Monitoring | Real-time CPU, memory, node, and pod metrics with alerting |
| Security | RBAC enforcement, vulnerability scanning, access log analysis |
| Application Updates | GitOps-driven continuous delivery across all clusters |

## Flexible and Extensible

Cloud Orbiter adapts to existing enterprise toolchains:
- Integrate with any OpenID Connect identity provider — not just the three pre-built integrations
- Use REST APIs and CLI for automation and integration with custom workflows
- Add-ons extend cluster capabilities without custom Helm deployments or YAML editing
- Location tagging enables geo-aware cluster placement for latency-sensitive workloads
