---
title: Kubernetes
sidebar_position: 2
---

# Kubernetes Cluster Orchestration

**Business Value:** Go from bare metal to a fully functional, GPU-enabled Kubernetes cluster — with networking, monitoring, and GPU operators pre-configured — through a simple portal form.

## How It Works

Users select their desired configuration: Kubernetes version, CNI plugin, node pools (control plane + GPU workers), host flavors, labels, and taints. The platform handles everything else:

- Installs container runtime, Kubernetes binaries (kubelet, kubeadm, kubectl), and bootstraps the control plane with etcd in HA quorum (3 or 5 nodes)
- Deploys the chosen CNI plugin for pod networking — supporting both BGP-based and eBPF-powered options
- Joins GPU worker nodes, applies labels and taints, and deploys GPU runtime operators: GPU drivers, device plugin, telemetry exporter, and GPU feature discovery
- Runs conformance checks: API server reachable, all nodes Ready, CNI healthy, DNS resolving, GPUs visible

![Kubernetes Cluster Architecture](/img/dflare-ai/10-kubernetes-orchestration.png)

## Technical Highlights

- All container images pulled from the platform's internal registry — enabling air-gapped, version-controlled deployments
- Static pods for control plane components (apiserver, etcd, controller-manager, scheduler) — self-bootstrapping without external dependencies
- GPU runtime operators deploy as DaemonSets: device plugin registers GPU resources per node, telemetry exporter provides per-GPU metrics, feature discovery labels nodes with GPU properties
- Full lifecycle operations: upscale, downscale (cordon → drain → remove), rolling upgrades (zero-downtime), and clean deletion with host return to pool
- Multi-vendor GPU support: compatible with GPU operators across major GPU vendors and extensible to additional GPU plugins

## Powered by CKP (Coredge Kubernetes Platform)

Dflare AI uses **CKP (Coredge Kubernetes Platform)**, a custom Kubernetes distribution built and maintained by Coredge.io. CKP takes upstream Kubernetes source code and produces enterprise-grade, digitally signed binaries and container images, providing a fully supported, supply-chain-verified Kubernetes platform.

### Two-Layer Architecture

- **CKP Distribution Layer** — Custom-built Kubernetes binaries (kubeadm, kubelet, kubectl) tagged and signed by Coredge, with Coredge-hosted core component container images.

- **CKP Management Layer** — Cluster lifecycle management through CAPI (Cluster API) with Kamaji as the hosted control plane provider.

### Supported Versions (CNCF Certified)

| Kubernetes Version | CNI Version |
|-------------------|-------------|
| 1.29.0, 1.30.6 | 3.28.2 |
| 1.31.2 | 3.30.5 |
| 1.32.11 | 3.30.5 |
| 1.33.7 | 3.30.5 |
| 1.34.3 | 3.30.5 |
| 1.35.1 | 3.30.5 |

| Component | Supported |
|-----------|-----------|
| **OS** | Ubuntu 20.04, Ubuntu 22.04, RHEL 9 |
| **Architecture** | AMD64, ARM64 |

### Key Capabilities

- PGP-signed package distribution via BYOH (Bring Your Own Host) bundles
- Automated cluster provisioning through portal UI and API
- Ceph-backed persistent storage (ckp-block storage class)
- Velero backup and disaster recovery
- TLS certificate management with 10-year validity
