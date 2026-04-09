---
title: Platform Overview
sidebar_position: 1
---

# Platform Overview

## What is Cloud Orbiter?

Cloud Orbiter is a comprehensive, centralized Universal Application Control Plane that allows enterprises to manage the complete application lifecycle across any combination of Kubernetes environments — from cloud-native clusters to on-premise deployments and distributed edge sites.

It is designed to handle the complexity of managing hundreds of thousands of clusters and large-scale distributed applications across different data centres, private clouds, hybrid environments, and public clouds — all from a single intuitive dashboard.

Cloud Orbiter follows a **zero-trust security principle**, providing highly secure infrastructure management with centralized IAM and RBAC. It supports integration with any external identity provider and automates workflows across any infrastructure type.

## Core Capabilities

### Universal Application Control Plane

Cloud Orbiter manages your entire infrastructure from a single, centralized dashboard — streamlining application deployment and infrastructure management, reducing complexity, and enabling production-scale efficiency.

### Multi-Cluster Management at Scale

- Deploy, manage, monitor, and upgrade multiple clusters across geo-distributed environments
- Provision Kubernetes clusters at the edge with zero-downtime updates and upgrades
- Remotely manage target and orbiter clusters through a centralized console
- Connect multiple clusters so that all management flows through Cloud Orbiter

### Complete Kubernetes Resource Management

Cloud Orbiter manages all Kubernetes resources including:
- Nodes, events, namespaces, and workloads
- Pods, ReplicaSets, Deployments, DaemonSets, StatefulSets
- Access control: Roles, RoleBindings, ClusterRoles, ClusterRoleBindings, ServiceAccounts
- Network policies, storage classes, secrets, ConfigMaps, and more

### Automatic Application Deployment

Deploy applications automatically on any cluster — whether in the cloud, on-premise, or at the edge. Integration with Helm and GitOps repositories enables automated delivery pipelines.

### Centralized IAM & RBAC

Cloud Orbiter provides centralized identity and access management with:
- Multi-tenant isolation per organization
- Three pre-defined roles: Tenant Admin, Project Admin, Default User
- SSO integration with Okta, Google, Microsoft, and any OpenID Connect provider
- Fine-grained permissions governing every action across the platform

### Observability & Monitoring

Comprehensive observability tools provide complete visibility into infrastructure and applications:
- Real-time CPU, memory, and node health monitoring (Prometheus-based)
- Access logs with per-user, per-API audit trails
- Live log streaming from running containers
- Alerting for cluster state changes and deployment events

## Platform Architecture Summary

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capability</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Cluster Orchestration</td><td style={{padding: '3px 12px'}}>Create, import, manage Kubernetes clusters across environments</td><td style={{padding: '3px 12px'}}>CKP, EKS, AKS, GKE, KubeAdm, Edge</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Application Delivery</td><td style={{padding: '3px 12px'}}>Helm, GitOps, app repositories, lifecycle management</td><td style={{padding: '3px 12px'}}>Helm, ArgoCD / GitOps, Container Registry</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity & Access</td><td style={{padding: '3px 12px'}}>Multi-tenant IAM, RBAC, SSO federation</td><td style={{padding: '3px 12px'}}>Keycloak, OpenID Connect, Okta, Google, Microsoft</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Observability</td><td style={{padding: '3px 12px'}}>Metrics, logs, tracing, alerting</td><td style={{padding: '3px 12px'}}>Prometheus, Grafana, Access Logs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup & Recovery</td><td style={{padding: '3px 12px'}}>Namespace backup, PV snapshots, cluster migration</td><td style={{padding: '3px 12px'}}>Velero, S3-compatible storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VM Management</td><td style={{padding: '3px 12px'}}>Virtual machine lifecycle on Kubernetes nodes</td><td style={{padding: '3px 12px'}}>KubeVirt add-on</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Edge Management</td><td style={{padding: '3px 12px'}}>Remote edge cluster provisioning and lifecycle</td><td style={{padding: '3px 12px'}}>Cloud Orbiter Agent, NAT GW, Host Groups</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Notifications</td><td style={{padding: '3px 12px'}}>Real-time dashboard notifications for cluster and app events</td><td style={{padding: '3px 12px'}}>WebSocket, event-driven notifications</td></tr>
  </tbody>
</table>

## Tenant & Project Model

Cloud Orbiter organizes resources in a two-level hierarchy:

1. **Tenant** — An organization that registers with the platform. Each tenant has its own isolated environment, users, and resources. A default project is created automatically on tenant onboarding.
2. **Project** — A logical environment within a tenant representing a specific initiative, application, or team. Each project has its own isolated set of clusters, applications, and resources.

Users and groups are assigned to projects with specific roles, enabling delegation while maintaining centralized governance.

## Connectivity Model

Cloud Orbiter manages clusters using an outbound connection model:

- A **Cloud Orbiter Agent** is deployed on each target cluster
- The agent initiates an **outbound connection** to the Cloud Orbiter control plane
- Once connected, the control plane can issue commands, proxy Kubernetes API calls, and stream logs — all **without inbound firewall rules** on the target cluster
- Connections route through **NAT Gateway** for private network-to-internet traversal

This model enables management of clusters across private data centres, edge sites, and public clouds — even behind strict firewalls.
