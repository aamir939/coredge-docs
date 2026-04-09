---
title: Cluster Management
sidebar_position: 1
---

# Cluster Management

## Overview

Cloud Orbiter provides comprehensive Kubernetes cluster lifecycle management — from initial provisioning to ongoing Day 2 operations — across any infrastructure type. It aims to provide an excellent user experience in managing hundreds of thousands of clusters and maintaining large-scale distributed applications.

**Core capabilities:**
- Deploy, create, manage, monitor, and upgrade multiple clusters across geo-distributed environments
- Manage all Kubernetes resources: nodes, events, namespaces, workloads, pods, ReplicaSets, Deployments, DaemonSets, StatefulSets, access control, network policies, storage, secrets, and ConfigMaps
- Connect multiple clusters so that all management flows through the Cloud Orbiter control plane
- Remote cluster management via outbound agent — no inbound firewall rules required

## Cluster Types

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Cluster Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>CKP</td><td style={{padding: '3px 12px'}}>Coredge Kubernetes Platform — custom K8s distribution for cloud, bare metal, edge, and IoT</td></tr>
    <tr><td style={{padding: '3px 12px'}}>AWS EKS</td><td style={{padding: '3px 12px'}}>Amazon Elastic Kubernetes Service — managed K8s on AWS</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Azure AKS</td><td style={{padding: '3px 12px'}}>Azure Kubernetes Service — managed K8s on Microsoft Azure</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Google GKE</td><td style={{padding: '3px 12px'}}>Google Kubernetes Engine — managed K8s on Google Cloud</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Edge Clusters</td><td style={{padding: '3px 12px'}}>K8s clusters at remote/isolated edge sites managed via central console</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Brownfield Import</td><td style={{padding: '3px 12px'}}>Existing Kubernetes clusters imported from any provider (VMware, OpenShift, EKS-Anywhere, etc.)</td></tr>
  </tbody>
</table>

## Creating a Cluster

1. Navigate to **Clusters** from the left navigation panel
2. Click **+ Add Cluster**
3. Select **Create Cluster**
4. Choose cluster type and provide:
   - Cluster name and description
   - Kubernetes distribution and version
   - Networking and networking version
   - Provider configuration
   - Master nodes: count, host group, virtual IP
   - Worker nodes: count, host group
5. Click **Create** — a real-time cluster state dashboard tracks provisioning progress

## Importing an Existing Cluster (Brownfield)

If you already have a running Kubernetes cluster, use the import option:

1. Go to **Clusters → + Add Cluster → Import Cluster**
2. Provide a cluster name, cluster type, description, and location parameters
3. Click **Create**
4. Download the generated bootstrap YAML config file
5. Apply the config to your existing cluster:
   ```bash
   kubectl apply -f bootstrap-cluster.yaml
   ```
6. The cluster connects to Cloud Orbiter and appears in the dashboard

## Day 2 Operations

Cloud Orbiter automates the ongoing management tasks that keep clusters healthy and efficient:

### Cluster Upgrades

Cloud Orbiter automates upgrading Kubernetes clusters to the latest version — ensuring clusters run on the latest stable release with up-to-date security patches and bug fixes. Upgrades are performed without application downtime.

### Scaling

Add or remove cluster nodes through a centralized interface. Cloud Orbiter handles the node provisioning, Kubernetes registration, and workload redistribution automatically.

### Monitoring

Real-time monitoring tracks:
- Node health status and availability
- CPU and memory usage per node and per workload
- Network I/O pressure
- Pod capacity vs. usage

### Security

Day 2 security operations include:
- RBAC enforcement on every API call
- Network policies managing traffic between pods and namespaces
- Container image scanning for vulnerability detection

### Backup and Restore

Cluster data protection through Velero integration — see [Backup & Restore](./backup-restore) for details.

## Cluster Monitoring

### Health Monitoring

View the health status of each node and receive alerts when nodes become unhealthy. Quickly identify issues impacting cluster stability.

### CPU and Memory Monitoring

Real-time CPU and memory usage tracking per node and per workload. Identify resource bottlenecks and performance issues as they occur.

### Node Monitoring

Per-node metrics including:
- CPU utilization vs. capacity
- Memory usage vs. capacity
- Disk usage
- Network activity

Alerts can be configured to notify administrators when thresholds are exceeded.

## Cluster Access Management

### Service Accounts

Map Cloud Orbiter users to Kubernetes service accounts for fine-grained RBAC on target clusters:

1. Click **Map User** in the Cloud Orbiter Management Console
2. Enter the **Namespace** and **Service Account** for the mapping

Users can only perform actions on the target cluster that are permitted by their mapped service account.

### Cluster Terminal

Access the Kubernetes CLI directly from the Cloud Orbiter dashboard:

1. Navigate to the cluster dashboard
2. Select the connected cluster
3. Click the **Terminal** button (top-right corner)
4. Execute kubectl commands directly — pods, namespaces, configmaps, secrets, and more

### Kubeconfig Download

Download the kubeconfig file to access the cluster from a local machine:

1. Log in and navigate to the cluster
2. Click **Download Kubeconfig** from the top navigation menu
3. Save the file and use with kubectl locally

## Location Tagging

Cloud Orbiter supports geo-aware cluster management with location tagging:

- Automatically detect cluster geolocation based on public IP
- View clusters in **List View** (status, version, distribution, health, pods, utilization) or **Map View** (graphical world map representation)
- Click a cluster marker on the map to view details and access cluster management

## Service Discovery

### Services

Cloud Orbiter exposes Kubernetes services for application access. Services provide network discovery without modifying application code — a Service makes the set of Pods running an application available to clients.

### Centralized Ingress

Cloud Orbiter's Centralized Ingress enables cross-cluster service access without:
- Writing Ingress configuration files
- Creating NodePorts or Load Balancers manually
- External tenant or IP-based configuration

Applications are accessible across clusters automatically once services are created — Cloud Orbiter handles the routing.

## Test Suites

Cloud Orbiter includes pre-configured test suites with pre-packaged test cases to:
- Verify cluster health before application deployment
- Confirm cluster performance after deployment
- Run proactive checks as part of ongoing operations

Test suite execution results are downloadable for audit and reporting purposes.
