---
title: Dependencies
sidebar_position: 4
---

# CKP Dependencies

## System Prerequisites

| Dependency | Details |
|------------|---------|
| Supported OS | Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9 |
| Container Runtime | Containerd (v1.6.14+) |
| OCI Runtime | runc (v1.1.3 - v1.1.10) |
| CRI Tools | crictl (v1.27.0) |
| CNI Plugins | v1.1.2 - v1.3.0 |
| Helm | v3 (for addon installation) |

## Kernel and System Requirements

CKP requires specific Linux kernel modules (overlay filesystem, bridge netfilter) and network forwarding settings to be enabled on all cluster nodes. These are configured automatically by the CKP installation scripts.

Additionally, **swap must be disabled** on all nodes, which is a standard Kubernetes requirement.

## Supported CNIs

| CNI | Description |
|-----|-------------|
| Calico (v3.30.5) | Default CNI in Compass UI. Networking and security solution for Kubernetes workloads. |
| Cilium | Cloud native networking using eBPF kernel technology. Default CNI in CAPI-provisioned clusters. |
