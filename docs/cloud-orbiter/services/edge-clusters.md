---
title: Edge Clusters
sidebar_position: 2
---

# Edge Clusters

## Overview

Edge clusters are Kubernetes clusters deployed on edge hosts at isolated, remote locations — factory floors, retail stores, telecom towers, or distributed data centres. These edge hosts can be physical servers or virtual machines managed by operators at the remote site.

Cloud Orbiter deploys and manages workload clusters on edge hosts through its SaaS-based management console — providing end-to-end cluster lifecycle management including provisioning, scaling, upgrades, and reconfiguration, all without requiring operators to be physically present at the edge site.

## Edge Solution Highlights

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capability</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Centralized Multi-Cluster Management</td><td style={{padding: '3px 12px'}}>Deploy, manage, and upgrade all edge Kubernetes clusters from a single console across all your edge nodes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Comprehensive Lifecycle Management</td><td style={{padding: '3px 12px'}}>Provision clusters at the edge, update and upgrade without any downtime</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Integration & Automation</td><td style={{padding: '3px 12px'}}>REST APIs and CLI for building comprehensive automation pipelines</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Centralized Logging & Monitoring</td><td style={{padding: '3px 12px'}}>Integrate with logging and metrics platforms for detailed cluster resource visibility across all edge environments</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Remote Cluster Management</td><td style={{padding: '3px 12px'}}>Manage target and orbiter clusters remotely without needing local access</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Location Tagging</td><td style={{padding: '3px 12px'}}>Tag clusters with geolocation for map-based visibility and latency-aware placement</td></tr>
  </tbody>
</table>

## Prerequisites

Before onboarding an edge cluster, you must:
1. Add a **Host** — the physical or virtual machine that will run Kubernetes nodes
2. Create a **Host Group** — a logical grouping of approved hosts for cluster assignment

### What is a Host?

A host is a physical or virtual machine that runs one or more Kubernetes nodes. Each node runs a container runtime (Docker or containerd) and is responsible for running containers scheduled by the Kubernetes control plane.

### What is a Host Group?

A host group is a logical grouping of hosts within the cluster. Host groups allow you to apply labels, taints, and Kubernetes metadata to a set of nodes simultaneously — simplifying cluster configuration and node management.

## Adding a Host

1. Select **Host** from the left navigation panel
2. Click **+ Add Host / Onboard** button
3. Download the cluster provisioning installation script
4. Run the provided commands on the target host machine
5. The host appears under **Pending Machine Host Requests** — click **Review**
6. Click the three-dot menu on the request and select **Approve**
7. Confirmed hosts show:
   - **Provisioned Status:** Available
   - **Connection Status:** Connected

The approved hosts tab displays: IP address, provisioned status, connection status, cluster association, group membership, and role.

## Creating Host Groups

1. Select **Host Groups** from the left navigation panel
2. Click **+ Create Host Group**
3. Enter a host group name (mandatory) and optional description
4. Click **Create**
5. To assign an approved host to the group: click the host → **Actions → Assign Groups** → select the group → **Save**

Repeat the assignment steps for all hosts that should belong to the host group.

## Onboarding an Edge Cluster

Once hosts are approved and host groups are created, you can onboard a cluster:

### Option 1: Create Cluster

Use this option when you have nodes available but no existing cluster:

1. Go to **Clusters → + Add Cluster → Create Cluster**
2. Enter a cluster name (mandatory)
3. Select cluster type, registry, Kubernetes distribution, and version
4. Configure networking, networking version, and virtual IP
5. Select master nodes count and master host group
6. Select worker nodes count and worker host group
7. Click **Create**

### Option 2: Import Cluster

Use this option when you have an existing cluster running at the edge site:

1. Go to **Clusters → + Add Cluster → Import Cluster**
2. Enter a cluster name (mandatory)
3. Select cluster type, description, and location parameters
4. Click **Create**
5. Download the bootstrap config file
6. Apply it to the edge cluster:
   ```bash
   kubectl apply -f bootstrap-cluster.yaml
   ```

## Managing Edge Clusters

Once an edge cluster is connected, Cloud Orbiter provides full management capabilities:

- **Health Monitoring** — Real-time node health, CPU, and memory tracking
- **Scaling** — Add or remove nodes remotely through the dashboard
- **Upgrades** — Upgrade Kubernetes version without downtime
- **Application Deployment** — Deploy and manage applications from the central console
- **Add-On Profiles** — Apply pre-configured add-on bundles to expand cluster capabilities
- **Backup & Restore** — Namespace-level backup via Velero to remote S3 storage
- **Access Logs** — Per-cluster audit trail of all API calls

## Connectivity Details

Edge clusters connect to the Cloud Orbiter control plane using an outbound agent:

1. The **Orbiter Agent** runs on the edge cluster
2. It initiates an outbound connection through the local **NAT Gateway** to the internet
3. The connection reaches the **Cloud Orbiter control plane** hosted in the public cloud region
4. Once connected, HTTP requests flow back and forth between the control plane and the target cluster

This means:
- No inbound firewall rules are required at the edge site
- The edge cluster does not need a public IP address
- All management traffic is mediated through the control plane for centralized logging and access control
