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
| Kamaji | Control Plane Provider | v0.16.0 |
| Cert-Manager | Certificate Management | v1.15.3 |

## Kamaji Control Plane

CKP uses **Kamaji** as the hosted control plane provider. For each managed cluster, Kamaji creates a full set of CAPI resources including the control plane (with Konnectivity agent, CoreDNS, KubeProxy, and LoadBalancer), the BYOH infrastructure binding, machine deployment configurations, and bootstrap templates.

## Default Network Configuration

| Network | CIDR |
|---------|------|
| Pod Network | 10.32.0.0/12 (CAPI-managed) or 10.244.0.0/16 (standalone) |
| Service Network | 10.96.0.0/12 |
| Default CNI | Cilium (CAPI-managed), Calico or Flannel (standalone) |
