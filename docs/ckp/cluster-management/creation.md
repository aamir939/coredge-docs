---
title: Cluster Creation
sidebar_position: 1
---

# CKP Cluster Creation

## Compass UI Cluster Creation

The primary way to create CKP clusters is through the **Compass UI**. The UI presents a guided workflow:

| Setting | Options / Details |
|---------|-------------------|
| Kubernetes Version | v1.29.0 through v1.35.1 (all CNCF Certified) |
| Networking (CNI) | Calico (default) |
| Networking Version | Mapped per K8s version (v3.28.2 or v3.30.5) |
| Worker Host Group | Selection from pre-registered host groups |
| Worker Nodes | Number of worker nodes (minimum 1) |

The control plane uses **Kamaji** (hosted control plane), so users only configure worker nodes and host group assignment.

## Manual Cluster Installation (Standalone)

For standalone installations, CKP provides automated installation scripts. The installation process follows this sequence:

1. **Package integrity verification** — PGP signature and Coredge.io maintainer validation
2. **System dependency installation** — Required system packages and CRI tools
3. **Container runtime setup** — Containerd with Coredge-standard configuration
4. **OCI runtime installation** — runc runtime
5. **Network configuration** — Kernel modules and IP forwarding settings
6. **CKP package installation** — kubeadm, kubelet, and kubectl from the CKP distribution
7. **Swap disabling** — Required for Kubernetes operation
8. **Cluster initialization** — Using kubeadm with CKP-specific configuration
9. **kubectl configuration** — Admin access setup
10. **Helm installation** — For addon management
11. **CNI deployment** — Calico via tigera-operator with configured pod CIDR
12. **CSI driver deployment** — OpenEBS hostpath as default storage class

## Kubeadm Configuration (CKP-Specific)

The key CKP-specific configuration in kubeadm is that both the main image repository and the DNS image repository are pointed to the **Coredge Docker Hub registry** instead of the upstream Kubernetes registry.

## Worker / Additional Master Nodes

Worker and additional master nodes follow a similar dependency installation process, after which they join the cluster using a join token generated during master node initialization.
