---
title: Core Component Images
sidebar_position: 2
---

# CKP Core Component Images

CKP replaces the default upstream Kubernetes image registry with **Coredge-hosted container images** served from the Coredge Docker Hub registry. The kubeadm configuration is set to point all image pulls to the Coredge registry.

## Image Components

| Component | Description |
|-----------|-------------|
| kube-apiserver | Kubernetes API server |
| kube-controller-manager | Controller manager |
| kube-scheduler | Pod scheduler |
| kube-proxy | Network proxy |
| etcd | Cluster state store |
| CoreDNS | DNS service |
| pause | Pod infrastructure container |

## Image Version Mapping

Each CKP Kubernetes version ships with specific component image versions:

| K8s Version | etcd | CoreDNS | Pause |
|-------------|------|---------|-------|
| v1.33.7 | 3.5.15-0 | v1.11.3 | 3.10 |
| v1.34.3 | 3.5.15-0 | v1.11.3 | 3.10 |
| v1.35.1 | 3.5.15-0 | v1.11.3 | 3.10 |

The kube-apiserver, kube-controller-manager, kube-scheduler, and kube-proxy images are tagged with the same version as the Kubernetes release.
