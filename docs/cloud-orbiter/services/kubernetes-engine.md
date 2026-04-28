---
title: Kubernetes Engine
sidebar_position: 2
---

# Kubernetes Engine

Cloud Orbiter's Kubernetes engine is **CKP** — purpose-built so you get production-grade clusters with zero distribution-management work. This page documents what's under the hood when you provision a cluster through Cloud Orbiter: the version stack, the provisioning sequence, the engine components Cloud Orbiter orchestrates, the built-in add-ons every cluster ships with, and what you'll see in the Cloud Orbiter Console for day-to-day operations.

## Kubernetes Stack

When you provision a cluster through Cloud Orbiter, you get the following stack — versions are managed by Cloud Orbiter and updated centrally as part of platform releases:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Version / Component</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}><strong>Kubernetes</strong></td><td style={{padding: '3px 12px'}}>v1.33.7, v1.34.3, v1.35.1 — all CNCF Certified</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Control Plane</strong></td><td style={{padding: '3px 12px'}}>Kubeadm-bootstrapped control plane with Konnectivity, CoreDNS, KubeProxy, LoadBalancer</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Cluster API (CAPI)</strong></td><td style={{padding: '3px 12px'}}>Cluster API v1.7.7 · BYOH v0.6.1 · Cert-Manager v1.15.3</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Container Network Interface</strong></td><td style={{padding: '3px 12px'}}>Calico v3.30.5 (default); Cilium available</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Operating Systems</strong></td><td style={{padding: '3px 12px'}}>Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Architectures</strong></td><td style={{padding: '3px 12px'}}>AMD64, ARM64</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Infrastructure Provider</strong></td><td style={{padding: '3px 12px'}}>Orbiter Baremetal (BMS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Block Storage</strong></td><td style={{padding: '3px 12px'}}>CKP Storage Plugin — Ceph backend, default storage class <code>ckp-block</code></td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Backup</strong></td><td style={{padding: '3px 12px'}}>Velero — S3-compatible storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>TLS Certificates</strong></td><td style={{padding: '3px 12px'}}>10-year validity, issued by built-in Certificate Manager</td></tr>
  </tbody>
</table>

## Cluster API (CAPI) Integration

Cloud Orbiter uses **Cluster API (CAPI)** — the CNCF-standard framework for declarative Kubernetes lifecycle management — as the engine that drives every provisioning, scaling, and upgrade operation. You never write CAPI manifests directly; Cloud Orbiter generates and reconciles them on your behalf from the inputs you provide in the Console.

### CAPI Provider Stack

The full set of CAPI providers Cloud Orbiter wires together for every cluster:

| Provider | Role | Version |
|----------|------|---------|
| Cluster API | Core Provider | v1.7.7 |
| Kubeadm | Bootstrap Provider | v1.7.7 |
| Kubeadm | Control Plane Provider | v1.7.7 |
| BYOH (Bring-Your-Own-Host) | Infrastructure Provider | v0.6.1 |
| Cert-Manager | Certificate Management | v1.15.3 |

### Control Plane

For each cluster you create, Cloud Orbiter generates the full set of CAPI resources from a cluster template:

- The control plane — bootstrapped via the Kubeadm Control Plane Provider, with Konnectivity, CoreDNS, KubeProxy, and LoadBalancer pre-wired
- The BYOH infrastructure binding that links the control plane to your baremetal hosts
- Machine deployment configurations for worker nodes
- Bootstrap templates that drive node initialization

You don't need to manage these resources manually — Cloud Orbiter handles creation, reconciliation, and lifecycle.

### Network Configuration

When you create a cluster in the Cloud Orbiter Console, you set the network CIDRs on the provisioning form:

| Network | Configured |
|---------|------------|
| Pod Network | Configurable CIDR, set at cluster creation |
| Service Network | Configurable CIDR, set at cluster initialization |
| Default CNI | Cilium (CAPI-managed clusters), Calico (standalone) |

## How Cloud Orbiter Provisions a Cluster

When you click **Create Cluster** in the Cloud Orbiter Console, Cloud Orbiter orchestrates the full provisioning sequence below — you don't run any of these steps manually:

1. **Cluster Request** — You submit the request from the Cloud Orbiter Console (or via the Cloud Orbiter API)
2. **Provider Resolution** — Cloud Orbiter resolves the Orbiter Baremetal provider cluster
3. **Host Provisioning** — Machine hosts are provisioned through the configured infrastructure provider
4. **Agent Registration** — Host agents register with Cloud Orbiter's management plane via mutual TLS
5. **Host Approval** — Hosts are approved automatically (or manually if your policy requires it)
6. **Host Grouping** — Approved hosts are placed into the host group you selected
7. **CAPI Resources Created** — Cloud Orbiter generates the CAPI resources from the cluster template
8. **Bootstrap** — The Machine Reconciler and BYOH Host Reconciler drive the bootstrap process
9. **Control Plane Up** — The control plane comes up with Konnectivity, CoreDNS, KubeProxy, and the LoadBalancer
10. **Workers Join** — Worker nodes join the cluster via the bootstrap configuration
11. **Cluster Ready** — The cluster reaches `Ready` state and appears in the Cloud Orbiter dashboard
12. **Add-ons Deployed** — Cloud Orbiter deploys the built-in add-ons: CKP Storage Plugin, Cilium / Calico CNI, Velero
13. **Certificates Issued** — TLS certificates are issued with 10-year validity from the built-in Root CA

Throughout this sequence, the Cloud Orbiter Console displays a real-time provisioning dashboard so you can track progress and surface any errors immediately.

## Engine Components

Cloud Orbiter's Kubernetes engine is composed of three internal components. You don't deploy or operate them directly — Cloud Orbiter manages their lifecycle on your behalf — but understanding what each one does helps you reason about cluster behavior and troubleshooting.

### Host Agent

A lightweight agent that Cloud Orbiter installs on every machine that participates in a cluster. The Host Agent is the bridge between the host and Cloud Orbiter's management plane.

| Capability | Description |
|------------|-------------|
| Registration | Registers the host with Cloud Orbiter's management controller |
| Configuration | Manages the secure connection to the controller and applies cluster settings |
| BYOH Integration | Handles the Bring-Your-Own-Host lifecycle for CAPI-provisioned clusters |
| Health Reporting | Reports host status and health to Cloud Orbiter via WebSocket — visible in the Hosts dashboard |
| Upgrade | Supports in-place agent upgrades when Cloud Orbiter rolls out engine updates |

### Host Provisioner

A multi-cluster controller Cloud Orbiter uses to manage the lifecycle of every machine in every cluster. It runs two reconciliation loops:

| Reconciler | Purpose |
|------------|---------|
| Machine Reconciler | Manages CAPI Machine resources — ensures the desired number of nodes are provisioned and healthy |
| BYOH Host Reconciler | Manages BYOH resources — handles host registration and bootstrap |

When a machine host is created, the Cloud Orbiter Console shows it transitioning from **Create Pending** to either **Create Completed** (success) or **Create Failed** (error). The Host Provisioner drives those transitions.

### Management Cluster Registry

The internal registry Cloud Orbiter uses to connect to CAPI management clusters. Two connection modes are supported:

| Mode | When Used |
|------|-----------|
| Local | The management cluster runs in the same Kubernetes cluster as Cloud Orbiter — used for compact deployments |
| Remote | Cloud Orbiter connects to an external management cluster over a secure tunnel — the standard production mode |

You don't configure this directly; Cloud Orbiter selects the appropriate mode based on your deployment topology.

## Built-in Cluster Add-ons

Every cluster Cloud Orbiter provisions ships with a set of add-ons pre-installed and pre-wired. You don't install Helm charts manually — they're part of the cluster from day one.

### Autoscaling (Host-Based)

On Orbiter Baremetal infrastructure, scaling is performed by managing host group membership through the Cloud Orbiter Console:

| Operation | What You Do in Cloud Orbiter |
|-----------|-------------------------------|
| Add hosts | Onboard new baremetal servers and assign them to a host group |
| Remove hosts | Remove servers from a host group (deregistration is handled automatically) |
| Reorganize capacity | Move hosts between host groups as workload patterns change |

### Backup (Velero)

Cloud Orbiter ships **Velero** as the cluster backup engine for every cluster. From the Cloud Orbiter Console you configure:

- S3-compatible backup storage locations
- Backup storage location lifecycle (create, update, delete)
- Cloud provider and endpoint configuration
- Project-level isolation so each project's backups stay separate

For end-to-end backup workflows (namespaces, persistent volumes, restore), see [Backup & Restore](./backup-restore).

### Certificate Management

Every cluster includes a built-in Certificate Manager that issues TLS certificates with a **10-year validity period**, integrated with a Root CA for trust chain establishment. Long validity removes the operational toil of frequent renewals; Cloud Orbiter handles rotation when it's needed.

### Storage Plugin

Persistent block storage is delivered by the CKP Storage Plugin — installed in a dedicated namespace as part of cluster provisioning:

| Property | Details |
|----------|---------|
| Backend | Ceph |
| Default Storage Class | `ckp-block` — `Delete` reclaim policy, volume expansion enabled |
| Standalone Fallback | OpenEBS hostpath used as the default CSI driver when Ceph isn't available |

## Build Artifacts

For air-gapped or audit-driven deployments, the Kubernetes engine ships as two container images that Cloud Orbiter pulls into your environment:

| Image | Purpose |
|-------|---------|
| Cluster Manager | Contains host agent packages and CAPI provider controllers — the main management-plane image |
| Host Provisioner | Contains the host provisioner controller binary that drives machine lifecycle reconciliation |

Both images are built on a minimal, security-hardened base and run as non-root processes.

## Troubleshooting

Common engine-level issues you may encounter, and how to resolve them through the Cloud Orbiter Console or on the host.

### Container Runtime Reports Active but Containers Don't Run

If a host's status in the Cloud Orbiter Console shows the container runtime as active but workloads aren't starting, the Containerd configuration on the host has plugins incorrectly listed in the disabled plugins field. On the affected host:

1. Open the Containerd configuration file
2. Ensure the disabled plugins field is set to an empty list
3. Restart the Containerd service

The host status in Cloud Orbiter will refresh once containers begin running.
