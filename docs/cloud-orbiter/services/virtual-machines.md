---
title: Virtual Machines
sidebar_position: 8
---

# Virtual Machines

## Overview

Cloud Orbiter integrates **KubeVirt** as a cluster Add-On to enable virtual machine lifecycle management alongside container workloads on the same Kubernetes infrastructure. This provides a seamless public cloud experience for edge data centres, centralizing VM and container operations through a single management interface.

With KubeVirt, you can run VMs, containers, and workloads across various infrastructures — managed through the same Cloud Orbiter dashboard that manages your Kubernetes clusters.

## Prerequisites

Before creating a VM:
- A connected **kubeadm Kubernetes cluster** with distribution type `amd64/Linux` and an available storage class
- **KubeVirt Add-On enabled** on the target cluster

### Enabling KubeVirt

1. Navigate to the cluster dashboard
2. Click **Add-Ons**
3. Locate **KubeVirt**
4. Click the three-dot menu → **Enable**
5. Wait for the status to change from "created" to "installed"

## Creating a Virtual Machine

Navigate to **Virtual Machines** in the left navigation menu → click **+ Create Virtual Machine**

### Step 1: Basic Settings

| Field | Description |
|---|---|
| **VM Name** | Enter a unique name for the VM |
| **Namespace** | Select the namespace (default: `default`) |
| **Run Strategy** | Choose `Always` to keep the VM running continuously |

### Step 2: Storage Configuration

| Field | Description |
|---|---|
| **Access Mode** | `ReadWriteOnce` for single-node usage |
| **Size** | Disk size in GiB |
| **Storage Class** | Select an available storage class from the cluster |
| **Image Import** | Import via HTTP URL (e.g., Ubuntu server image) or other available methods |

### Step 3: Preset Selection (Compute Resources)

| Field | Description |
|---|---|
| **vCPU** | Number of virtual CPUs to assign |
| **RAM** | Memory allocation in GiB |

### Step 4: Instance Configuration

Use the **cloud-init script** section to customize the VM's initial configuration — network settings, user accounts, installed packages, and startup scripts.

### Step 5: Review & Create

Before creating the VM, verify:
- VM name is correct and unique
- Storage size, storage class, and image source are accurate
- vCPU and RAM allocations match workload requirements
- Namespace and cluster details are correct
- cloud-init script is properly formatted

Click **Create** to provision the VM on the Kubernetes cluster.

## Managing Virtual Machines

Once created, manage VMs directly from the Cloud Orbiter dashboard:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Action</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Start / Stop</td><td style={{padding: '3px 12px'}}>Power the VM on or off</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Pause / Unpause</td><td style={{padding: '3px 12px'}}>Temporarily halt VM operations without shutting down</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Restart</td><td style={{padding: '3px 12px'}}>Reboot the VM while preserving configuration</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Delete</td><td style={{padding: '3px 12px'}}>Permanently remove the VM and its resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Console Access (CLI)</td><td style={{padding: '3px 12px'}}>Interact with the VM via command-line interface directly from the dashboard</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Console Access (VNC)</td><td style={{padding: '3px 12px'}}>Connect via VNC for graphical interface access</td></tr>
  </tbody>
</table>

## Why VMs on Kubernetes?

KubeVirt allows organizations that are migrating from VM-based workloads to Kubernetes to run both simultaneously on the same infrastructure — without maintaining separate VM and container management platforms:

- **Unified Operations** — Manage VMs and containers from the same Cloud Orbiter dashboard with the same RBAC, monitoring, and access controls
- **Reduced Infrastructure Footprint** — No separate virtualization layer needed; VMs run as Kubernetes workloads
- **Migration Path** — Gradually migrate VM workloads to containers without a hard cutover
- **Edge Use Cases** — Run legacy VM-based applications at edge sites alongside Kubernetes-native workloads
