---
title: Data Sheet
sidebar_position: 3
---

# CKP Product Datasheet

**Coredge Kubernetes Platform | Coredge.io | April 2026**

---

## Platform Overview

**CKP (Coredge Kubernetes Platform)** is a custom Kubernetes distribution built on top of the upstream Kubernetes repository by Coredge.io. CKP binaries are functionally identical to upstream Kubernetes, but are versioned, packaged, and digitally signed by Coredge.io for enterprise traceability and supply chain integrity. All supported versions are **CNCF Certified**.

| Property | Details |
|----------|---------|
| Platform Type | Custom Kubernetes Distribution + Cluster Lifecycle Management |
| Vendor | Coredge.io |
| Certification | CNCF Certified Kubernetes (all supported versions) |
| Package Signing | PGP-signed by Coredge.io with mandatory integrity verification |
| Architecture | Two-layer: Distribution Layer (distro) + Management Layer (CAPI/Compass) |
| Supported K8s Versions | v1.33.7, v1.34.3, v1.35.1 |
| Version Suffix | -ckp (e.g., v1.31.2-ckp) |

---

## Distribution Layer

### CKP Packages

| Package | Description |
|---------|-------------|
| kubeadm | Cluster bootstrapping and lifecycle management |
| kubelet | Primary node agent for pod execution |
| kubectl | CLI for Kubernetes API |
| kubernetes-cni | Container Network Interface plugins |
| cri-tools | CRI diagnostic tools (crictl) |
| containerd | Container runtime with CNI support |

### BYOH Bundle Availability

| Operating System | Availability |
|------------------|--------------|
| Ubuntu 20.04 | All K8s versions (v1.33.7+) |
| RHEL 9 | All K8s versions (v1.33.7+) |

All packages are custom-built Debian binaries for AMD64. BYOH bundles are OCI-compliant image artifacts pulled via imgpkg. Container images for all core components (kube-apiserver, kube-controller-manager, kube-scheduler, kube-proxy, etcd, CoreDNS, pause) are hosted on the Coredge Docker Hub registry.

---

## Compatibility Matrix

| K8s Version | etcd | CoreDNS | Containerd | CRI | Pause | Calico (CNI) | CNCF |
|-------------|------|---------|------------|-----|-------|--------------|------|
| v1.33.7 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | 3.10 | v3.30.5 | Yes |
| v1.34.3 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | 3.10 | v3.30.5 | Yes |
| v1.35.1 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | 3.10 | v3.30.5 | Yes |

---

## Management Layer (CAPI + Compass)

| Component | Version / Details |
|-----------|-------------------|
| Cluster API (Core) | v1.7.7 |
| Kubeadm (Bootstrap + CP) | v1.7.7 |
| BYOH (Infrastructure) | v0.6.1 |
| Managed Control Plane | Konnectivity, CoreDNS, KubeProxy, LoadBalancer |
| Cert-Manager | v1.15.3 (10-year TLS certificates) |
| Compass Platform | Unified UI + REST/gRPC APIs; multi-tenant (domain + project scoped) |

---

## Infrastructure Providers

| Capability | Orbiter Baremetal (BMS) | CCS Virtual Machine (CCP) |
|------------|-------------------------|---------------------------|
| Provisioning | Cloud-init templates | Automated VM lifecycle |
| Networking | Physical server allocation | Neutron integration, security groups |
| Autoscaling | Not supported | Karpenter (CPU-based) |
| Architecture | AMD64 | AMD64 and ARM64 |
| OS Support | Ubuntu 20.04, RHEL 9 | Ubuntu 20.04, RHEL 9 |

---

## Networking, Storage, Backup & Autoscaling

### Networking & Storage

| Property | Details |
|----------|---------|
| Pod Network | Configurable CIDR |
| Service Network | Configurable CIDR |
| CNI (CAPI) | Cilium (eBPF) |
| CNI (Compass) | Calico v3.30.5 |
| Storage | Ceph (ckp-block) |
| Standalone CSI | OpenEBS hostpath |

### Backup & Autoscaling

| Property | Details |
|----------|---------|
| Backup Tool | Velero (S3-compatible) |
| Backup Isolation | Project-level |
| Autoscaler | Karpenter (CCS VM only) |
| Scaling Limits | CPU-based |
| Storage Class | ckp-block (Delete reclaim) |
| Volume Expansion | Enabled |
| Deployment | Helm chart |

---

## Security & Compliance

| Security | Details |
|----------|---------|
| Package Signing | PGP by Coredge.io; mandatory verification |
| Image Registry | Coredge Docker Hub registry |
| Host Auth | mTLS + Pre-Shared Key (PSK) |
| TLS Certificates | 10-year validity; Cert-Manager v1.15.3 |
| Build Security | Hardened base images; non-root |
| CNCF | All K8s versions CNCF Certified |

---

## System Prerequisites

| Prerequisite | Details |
|--------------|---------|
| Supported OS | Ubuntu 20.04, 22.04, RHEL 9 |
| Container Runtime | Containerd (v1.6.14+) |
| OCI Runtime | runc (v1.1.3–v1.1.10) |
| CRI Tools | crictl (v1.27.0) |
| CNI Plugins | v1.1.2–v1.3.0 |
| Helm | v3 |
| Kernel | overlay, br_netfilter, swap off |

---

## Cluster Lifecycle (14-Step)

| Phase | Steps |
|-------|-------|
| Provisioning | Request → Resolve provider → Provision hosts → Register (mTLS) |
| Bootstrap | Approve → Assign group → CAPI resources → Reconcilers |
| Cluster Ready | Control Plane up → Workers join → Ready state |
| Addons | Storage + Cilium + Velero + Karpenter + 10yr TLS |

---

## Contact

For more information or questions about Coredge's CKP:

- **Website:** [https://coredge.io](https://coredge.io)
- **Email:** [info@coredge.io](mailto:info@coredge.io)

---

[Download PDF](/downloads/datasheets/CKP%20-Datasheet.pdf)
