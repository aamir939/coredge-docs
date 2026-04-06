---
title: White Paper
sidebar_position: 1
---

# Coredge Kubernetes Platform (CKP)

## Enterprise Kubernetes Distribution White Paper

A complete, CNCF-certified Kubernetes distribution with integrated cluster lifecycle management, built for enterprise-grade deployments across baremetal and virtual infrastructure.

**Version 1.0 | April 2026**

---

## 1. Executive Summary

**CKP (Coredge Kubernetes Platform)** is a custom Kubernetes distribution built and maintained by Coredge.io. It takes upstream Kubernetes source code and produces enterprise-grade, digitally signed binaries and container images, providing organizations with a fully supported, supply-chain-verified Kubernetes platform.

The platform operates across two layers: the **CKP Distribution Layer**, which delivers custom-built Kubernetes packages and Coredge-hosted core component images; and the **CKP Management Layer**, which handles cluster lifecycle management through CAPI (Cluster API) with Kamaji as the hosted control plane provider.

> **CKP currently supports Kubernetes versions v1.29.0 through v1.35.1, all CNCF Certified, running on Ubuntu 20.04 and Red Hat Enterprise Linux 9 across both baremetal and virtual infrastructure.**

Key capabilities include PGP-signed package distribution via BYOH (Bring Your Own Host) bundles, automated cluster provisioning through the Compass UI and API, Karpenter-based autoscaling, Ceph-backed persistent storage, Velero backup and disaster recovery, and TLS certificate management with 10-year validity. The platform integrates Cluster API v1.7.7, Kamaji v0.16.0, BYOH Infrastructure Provider v0.6.1, and Cert-Manager v1.15.3.

---

## 2. Why CKP

CKP is not just a management plane — it is a full-stack offering that spans two layers: the CKP Distribution Layer and the CKP Management Layer. This combination delivers several advantages:

- **Automated rollouts, scaling, and rollbacks** — Automatic replica creation, hardware distribution, rescheduling on node failure, on-demand scaling
- **Service discovery, load balancing, and network ingress** — Complete networking solution for internal discovery and external exposure
- **Stateless and stateful applications** — Full support for both workload types
- **Storage management** — Persistent storage abstracted across cloud and local providers
- **Declarative state** — YAML manifests define desired state; Kubernetes transitions automatically
- **Works across environments** — Cloud, edge, and developer workstations
- **Highly extensible** — Custom object types, controllers, and operators via CRDs

All supported CKP Kubernetes versions are **CNCF Certified**, ensuring conformance with the official Kubernetes specification. CKP binaries are digitally signed by Coredge.io using PGP, providing enterprise traceability and supply chain integrity.

---

## 3. Introducing CKP

CKP is not just a management plane — it is a full-stack offering that spans two integrated layers:

### Distribution Layer

Custom-built Kubernetes binaries (kubeadm, kubelet, kubectl) tagged with a **-ckp version suffix** and digitally signed by Coredge.io using PGP. All core component container images (kube-apiserver, kube-scheduler, kube-controller-manager, etcd, CoreDNS, kube-proxy, pause) are hosted on the Coredge Docker Hub registry.

### Management Layer

Cluster lifecycle management via CAPI (Cluster API), with hosted control planes through Kamaji, automated provisioning through the Compass platform, and integrated addons for storage, networking, backup, and autoscaling.

> **CKP binaries are functionally identical to upstream Kubernetes, but are versioned, packaged, and digitally signed by Coredge.io for enterprise traceability and supply chain integrity.**

---

## 4. Platform Architecture

The architecture separates concerns between the Distribution Layer (package build, signing, and delivery) and the Management Layer (cluster provisioning, lifecycle, and addons), enabling independent versioning and operational flexibility.

![CKP Platform Architecture](/img/ckp/diagram_platform_overview_drawio_HD.png)

---

## 5. CKP Distribution Layer

### 5.1 Build Process

CKP takes the upstream Kubernetes source code at a specific version and produces custom-tagged binaries. The build process outputs a set of custom Debian packages and Coredge-hosted container images for all core Kubernetes components.

### 5.2 Package Signing

All CKP packages are digitally signed by Coredge.io using PGP. Before any installation proceeds, a mandatory integrity verification is performed automatically, including PGP signature validation and Coredge.io maintainer confirmation. If either check fails, the installation is aborted.

### 5.3 BYOH Bundle Distribution

For CAPI-managed cluster provisioning, CKP packages are distributed as BYOH (Bring Your Own Host) bundles — OCI-compliant image artifacts hosted on the Coredge Docker Hub registry. Each bundle contains all required packages for a specific Kubernetes version and operating system, pulled onto target hosts using imgpkg during provisioning.

| Operating System | Availability |
|------------------|--------------|
| Ubuntu 20.04 | Available for all supported K8s versions (v1.29.0+) |
| Red Hat Enterprise Linux 9 | Available from K8s v1.29.0 onwards |

### 5.4 Supported Kubernetes Versions

CKP currently supports seven CNCF Certified Kubernetes versions with version-mapped CNI (Calico) support:

| K8s Version | CNI (Calico) | CNCF Certified | Status |
|-------------|--------------|----------------|--------|
| v1.29.0 | v3.28.2 | Yes | Supported |
| v1.30.6 | v3.28.2 | Yes | Supported |
| v1.31.2 | v3.30.5 | Yes | Supported |
| v1.32.11 | v3.30.5 | Yes | Supported |
| v1.33.7 | v3.30.5 | Yes | Supported |
| v1.34.3 | v3.30.5 | Yes | Supported |
| v1.35.1 | v3.30.5 | Yes | Supported (Latest) |

---

## 6. CKP Management Layer

The management layer orchestrates the entire cluster lifecycle through several integrated components:

### 6.1 Compass Platform

The Compass platform provides a unified UI and API for cluster creation, management, and monitoring. Users configure Kubernetes version, CNI, worker host groups, and node counts through a guided workflow. The platform also exposes REST and gRPC APIs for programmatic cluster management.

### 6.2 CAPI Integration

CKP integrates Cluster API (CAPI) as the core lifecycle management engine:

| Provider | Type | Version |
|----------|------|---------|
| Cluster API | Core Provider | v1.7.7 |
| Kubeadm | Bootstrap Provider | v1.7.7 |
| Kamaji | Control Plane Provider | v0.16.0 |
| BYOH | Infrastructure Provider | v0.6.1 |
| Cert-Manager | Certificate Management | v1.15.3 |

### 6.3 Kamaji Hosted Control Plane

CKP uses Kamaji as the hosted control plane provider. For each managed cluster, Kamaji creates a full set of CAPI resources including the control plane (with Konnectivity agent, CoreDNS, KubeProxy, and LoadBalancer), the BYOH infrastructure binding, machine deployment configurations, and bootstrap templates. This approach keeps control plane components off the worker nodes, reducing resource overhead and simplifying management.

---

## 7. Infrastructure Providers

CKP supports two infrastructure providers, enabling Kubernetes clusters to run on both physical and virtual infrastructure:

### 7.1 Orbiter Baremetal Provider (BMS)

The BMS Provider enables Kubernetes clusters to be provisioned directly on physical servers. It handles automated server allocation and release, cloud-init provisioning, and hardware secret management. Baremetal deployments support AMD64 architecture.

### 7.2 CCS Virtual Machine Provider (CCP)

The CCP Provider integrates CKP with Coredge Cloud Services (CCS) for virtual machine-based provisioning. It manages VM lifecycle, network integration via Neutron, security group configuration, and OS image selection. Virtual deployments support both AMD64 and ARM64 architectures and include Karpenter-based autoscaling.

![CKP Infrastructure Providers](/img/ckp/diagram_providers_drawio_HD.png)

---

## 8. Cluster Lifecycle Management

CKP provides a complete end-to-end cluster lifecycle through CAPI, from initial provisioning to fully operational state with all addons deployed.

The lifecycle follows 14 steps organized into four phases:

1. **Provisioning** — Request, provider resolution, host provisioning, agent registration
2. **Bootstrap** — Host approval, group assignment, CAPI resource creation, reconciler bootstrap
3. **Cluster Ready** — Control plane up, workers join, ready state
4. **Addons and Scaling** — Storage, CNI, backup, Karpenter, TLS certificates

> **CKP also supports rolling upgrades across Kubernetes versions using a node-by-node drain, install, restart, and uncordon pattern to maintain cluster availability throughout the upgrade process.**

![CKP Cluster Lifecycle](/img/ckp/diagram_lifecycle_flow_drawio_HD.png)

---

## 9. Security and Compliance

Security is embedded throughout the CKP platform:

### 9.1 Supply Chain Integrity

- **PGP-signed packages** — All CKP binaries are digitally signed by Coredge.io
- **Mandatory verification** — Installation scripts validate PGP signatures and maintainer fields before proceeding
- **Coredge-hosted images** — All core component images are sourced from Coredge's signed and maintained registry

### 9.2 Network Security

- **Mutual TLS (mTLS)** — Host agents register with the management plane via mTLS
- **Configurable CIDR** — Pod and Service network ranges are fully configurable during cluster creation
- **Security Groups** — Network security rules for cluster VMs (CCS provider)

### 9.3 Certificate Management

CKP includes a built-in certificate management system powered by Cert-Manager v1.15.3. Certificates are issued with a **10-year validity period**, ensuring long-term operational stability. The certificate manager integrates with a Root CA for trust chain establishment.

### 9.4 CNCF Certification

All supported CKP Kubernetes versions are **CNCF Certified**, ensuring conformance with the official Kubernetes specification. This guarantees workload portability and compatibility with the broader Kubernetes ecosystem.

---

## 10. Storage, Backup, and Autoscaling

### 10.1 CKP Storage Plugin

CKP provides a built-in storage plugin backed by Ceph. The default storage class (**ckp-block**) is configured with a Delete reclaim policy and volume expansion enabled. For standalone installations, OpenEBS hostpath serves as the default CSI driver.

### 10.2 Velero Backup

CKP integrates Velero for cluster backup and disaster recovery with S3-compatible storage. The backup system provides storage location management, lifecycle handling, cloud provider configuration, and project-level isolation.

### 10.3 Karpenter Autoscaling

CKP integrates Karpenter for automated cluster autoscaling with CPU-based scaling limits. Karpenter handles automatic installation, node class creation for CAPI-managed nodes, and node pool management.

> **Karpenter autoscaling is supported only for dynamically provisioned host groups using the CCS Virtual Machine provider. Baremetal host groups do not support automatic scaling.**

---

## 11. Supported Configurations

### 11.1 Compatibility Matrix

| K8s Ver | etcd | CoreDNS | Containerd | CRI | Pause | Calico | CNCF |
|---------|------|---------|------------|-----|-------|--------|------|
| v1.29.0 | 3.5.12-0 | v1.11.1 | 1.7.0+ | v1 | v3.9 | v3.28.2 | Yes |
| v1.30.6 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.9 | v3.28.2 | Yes |
| v1.31.2 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.10 | v3.30.5 | Yes |
| v1.32.11 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.10 | v3.30.5 | Yes |
| v1.33.7 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.10 | v3.30.5 | Yes |
| v1.34.3 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.10 | v3.30.5 | Yes |
| v1.35.1 | 3.5.15-0 | v1.11.3 | 1.7.0+ | v1 | v3.10 | v3.30.5 | Yes |

### 11.2 System Prerequisites

| Dependency | Details |
|------------|---------|
| Supported OS | Ubuntu 20.04, Ubuntu 22.04, Red Hat Enterprise Linux 9 |
| Container Runtime | Containerd (v1.6.14+) |
| OCI Runtime | runc (v1.1.3 – v1.1.10) |
| CRI Tools | crictl (v1.27.0) |
| CNI Plugins | v1.1.2 – v1.3.0 |
| Helm | v3 (for addon installation) |

### 11.3 Supported CNIs

| CNI | Description |
|-----|-------------|
| Calico (v3.28.2 / v3.30.5) | Default CNI in Compass UI. Version varies by K8s version. |
| Flannel | Simple layer 3 network fabric for Kubernetes |
| Cilium | eBPF-based CNI. Default in CAPI-provisioned clusters. |

---

## 12. Summary

CKP delivers a complete, enterprise-ready Kubernetes platform that addresses the critical challenges of supply chain security, multi-cluster lifecycle management, and infrastructure diversity. By combining a PGP-signed custom distribution with an integrated CAPI-based management layer, CKP provides organizations with a single platform for deploying and operating Kubernetes at scale.

| Component | Details |
|-----------|---------|
| Distribution | Custom-built K8s binaries (v1.29.0–v1.35.1), PGP-signed, CNCF Certified |
| Management | CAPI v1.7.7 + Kamaji v0.16.0 hosted control plane |
| Infrastructure | Orbiter Baremetal (BMS) and CCS Virtual Machine (CCP) |
| Networking | Calico v3.28.2/v3.30.5, Cilium, Flannel; Configurable CIDR |
| Storage | CKP Storage Plugin (ckp-block / Ceph) + OpenEBS (standalone) |
| Backup | Velero with S3-compatible storage |
| Autoscaling | Karpenter (CCS VM provider, CPU-based) |
| Security | PGP signing, mTLS, 10-year TLS certs, CNCF Certified |
| Operating Systems | Ubuntu 20.04, Red Hat Enterprise Linux 9 |
| Architectures | AMD64 (packages), AMD64 + ARM64 (CCS VM provider) |

> **For more information about CKP, contact the Coredge.io platform team or visit the Compass management portal.**

---

[Download PDF](/downloads/whitepapers/CKP_White_Paper.pdf)
