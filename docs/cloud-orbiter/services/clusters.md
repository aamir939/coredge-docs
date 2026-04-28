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

## Cluster Type

Cloud Orbiter exclusively supports **CKP (Coredge Kubernetes Platform)** — Coredge's enterprise-grade Kubernetes distribution purpose-built for on-premise and bare metal deployments.

## CKP — Coredge Kubernetes Platform

CKP is Coredge's enterprise-grade Kubernetes distribution, purpose-built for on-premise, bare metal, edge, and IoT deployments. All CKP releases are **CNCF Certified**, ensuring full compatibility with the Kubernetes ecosystem.

### Two-Layer Architecture

CKP operates across two layers:

**Distribution Layer** — Delivers custom-built Kubernetes packages (kubeadm, kubelet, kubectl) and Coredge-hosted core component images. This layer ensures consistent, reliable Kubernetes deployments across all environments with validated, tested packages.

**Management Layer** — Handles cluster lifecycle management through CAPI (Cluster API) with Managed Control Plane. This layer automates cluster provisioning, scaling, upgrades, and Day 2 operations.

### Technical Specifications

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Specification</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}><strong>Kubernetes Versions</strong></td><td style={{padding: '3px 12px'}}>v1.33.7, v1.33.8, v1.34.0, v1.34.1, v1.35.0, v1.35.1</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Certification</strong></td><td style={{padding: '3px 12px'}}>CNCF Certified</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Operating Systems</strong></td><td style={{padding: '3px 12px'}}>Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Infrastructure Provider</strong></td><td style={{padding: '3px 12px'}}>Orbiter Baremetal (BMS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}><strong>Architectures</strong></td><td style={{padding: '3px 12px'}}>AMD64, ARM64</td></tr>
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
