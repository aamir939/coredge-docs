---
title: Coredge Kubernetes Platform
sidebar_position: 0
---

# Coredge Kubernetes Platform (CKP)

**Product Architecture, Distribution, Compatibility & Lifecycle**

**Version 2.0 | April 2026**

---

## Executive Summary

CKP (Coredge Kubernetes Platform) is a **custom Kubernetes distribution** built and maintained by **Coredge.io**. It takes the upstream Kubernetes source code and produces enterprise-grade, digitally signed binaries and container images, providing organizations with a fully supported, supply-chain-verified Kubernetes platform.

The platform operates across two layers: the **CKP Distribution Layer**, which delivers custom-built Kubernetes packages (kubeadm, kubelet, kubectl) and Coredge-hosted core component images; and the **CKP Management Layer**, which handles cluster lifecycle management through CAPI (Cluster API) with Kamaji as the hosted control plane provider.

CKP currently supports Kubernetes versions **v1.29.0 through v1.35.1**, all **CNCF Certified**, running on **Ubuntu 20.04**, **Ubuntu 22.04**, and **Red Hat Enterprise Linux 9**. It supports two infrastructure providers: **Orbiter Baremetal (BMS)** for physical server provisioning and **Coredge Cloud Services (CCS)** for virtual machine-based provisioning, with support for both AMD64 and ARM64 architectures.

Key platform capabilities include PGP-signed package distribution via BYOH (Bring Your Own Host) bundles, automated cluster provisioning through the Compass UI and API, Karpenter-based autoscaling (CCS VM provider), Ceph-backed persistent storage (ckp-block storage class), Velero backup and disaster recovery, and TLS certificate management with 10-year validity. The platform integrates Cluster API v1.7.7, BYOH Infrastructure Provider v0.6.1, Kamaji v0.16.0, and Cert-Manager v1.15.3 to deliver a complete, enterprise-ready Kubernetes lifecycle management solution.

---

## What is CKP

CKP (Coredge Kubernetes Platform), also known as **Coredge Kubernetes Platform**, is a **custom Kubernetes distribution** built on top of the upstream Kubernetes repository. CKP versions are maintained in line with community releases, with the advantage of **Enterprise support**. All supported CKP Kubernetes versions are **CNCF Certified**, ensuring conformance with the official Kubernetes specification.

CKP is not just a management plane — it is a full-stack offering that spans two layers:

- **CKP Distribution Layer** — Custom-built Kubernetes binaries (kubeadm, kubelet, kubectl) tagged and signed by Coredge, with Coredge-hosted core component container images. This is the "CKP distro."

- **CKP Management Layer** — Cluster lifecycle management via CAPI (Cluster API), with API and addon integration through the Compass platform.
