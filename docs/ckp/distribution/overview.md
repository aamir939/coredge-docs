---
title: Distribution Overview
sidebar_position: 1
---

# CKP Distribution (The Distro)

## How the CKP Distro Works

CKP takes the **upstream Kubernetes source code** at a specific version and produces custom-tagged binaries with a **-ckp version suffix** (e.g., v1.31.2-ckp). This means CKP binaries are functionally identical to upstream Kubernetes, but are versioned, packaged, and **digitally signed by Coredge.io** for enterprise traceability and supply chain integrity.

The output of this process is a set of custom **Debian packages** (kubeadm, kubelet, kubectl) and a set of **Coredge-hosted container images** for all core Kubernetes components published to the Coredge Docker Hub registry.

## Currently Supported Kubernetes Versions

CKP currently supports the following Kubernetes versions, selectable during cluster creation through the Compass UI or API:

| Version | Status |
|---------|--------|
| v1.29.0 | Supported |
| v1.30.6 | Supported |
| v1.31.2 | Supported (Latest) |

## CKP Packages

CKP ships the following packages as custom-built Debian binaries for AMD64 architecture:

| Package | Description |
|---------|-------------|
| kubeadm | Cluster bootstrapping and lifecycle management tool |
| kubelet | Primary node agent that manages pod execution |
| kubectl | Command-line tool for interacting with the Kubernetes API |
| kubernetes-cni | Container Network Interface plugins |
| cri-tools | Container Runtime Interface diagnostic tools |
| containerd | Container runtime bundled with CNI support |

## Package Signing and Integrity Verification

All CKP packages are **digitally signed by Coredge.io using PGP** to ensure supply chain integrity and enterprise traceability. Before any CKP installation proceeds, a mandatory integrity verification is performed automatically by the installation scripts. This verification includes PGP signature validation against the Coredge public key and confirmation that the package maintainer field is set to Coredge.io. If either check fails, the installation is aborted.

## CKP BYOH Bundle Distribution

For CAPI-managed cluster provisioning, CKP packages are distributed as **BYOH (Bring Your Own Host) bundles** hosted on the Coredge Docker Hub registry. Each bundle is an OCI-compliant image artifact that contains all required CKP packages for a specific Kubernetes version and Ubuntu release. This approach ensures consistent, version-locked package delivery across all cluster nodes.
