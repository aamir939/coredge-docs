---
title: CAPI Integration
sidebar_position: 2
---

# CKP CAPI Integration

## CAPI Provider Versions

| Provider | Type | Version |
|----------|------|---------|
| Cluster API | Core Provider | v1.7.7 |
| Kubeadm | Bootstrap Provider | v1.7.7 |
| Kubeadm | Control Plane Provider | v1.7.7 |
| BYOH | Infrastructure Provider | v0.6.1 |
| Managed Control Plane | Control Plane Provider | - |
| Cert-Manager | Certificate Management | v1.15.3 |

## Managed Control Plane

CKP uses **Managed Control Plane** as the hosted control plane provider. For each managed cluster, the Managed Control Plane creates a full set of CAPI resources including the control plane (with Konnectivity agent, CoreDNS, KubeProxy, and LoadBalancer), the BYOH infrastructure binding, machine deployment configurations, and bootstrap templates.

## Default Network Configuration

| Network | CIDR |
|---------|------|
| Pod Network | Configurable CIDR, set during cluster creation |
| Service Network | Configurable CIDR, set during cluster initialization |
| Default CNI | Cilium (CAPI-managed), Calico (standalone) |
