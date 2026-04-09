---
title: Application Lifecycle Management
sidebar_position: 4
---

# Application Lifecycle Management

## Overview

Cloud Orbiter provides a comprehensive application lifecycle management platform — from onboarding application repositories to deploying, managing, and updating applications across any cluster. The platform integrates with Helm repositories, container registries, and Git for automated, version-controlled application delivery.

## Application Instances

Applications running on target clusters are called **app instances**. Cloud Orbiter tracks two categories:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capabilities</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Managed Instances</td><td style={{padding: '3px 12px'}}>Applications actively managed by Cloud Orbiter — onboarded and tracked through the platform</td><td style={{padding: '3px 12px'}}>View details (namespace, release name, state, created by/at) · View logs · Download values.yaml · Delete</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Unmanaged Instances</td><td style={{padding: '3px 12px'}}>Applications deployed on the cluster but not onboarded to Cloud Orbiter</td><td style={{padding: '3px 12px'}}>View chart details and status · Promote to managed instance for full lifecycle control</td></tr>
  </tbody>
</table>

## Application Repositories

Application repositories are the source of truth for deployable applications. Cloud Orbiter supports:

- **Container Registries** — Connect private or public container image registries
- **Helm Repositories** — Add Helm chart repositories for package-based deployment
- **Git Repositories** — Onboard Git repositories for GitOps-driven deployment

### Onboarding an Application Repository

1. Navigate to **Application Repositories** in the left navigation
2. Click **+ Add Repository**
3. Select repository type (Container Registry, Helm, or Git)
4. Provide repository URL, credentials, and optional description
5. Click **Save**

Once onboarded, the repository's applications are available for deployment across any cluster in your projects.

## Helm Application Deployment

### Helm Repository

Add a Helm chart repository to make charts available for deployment:

1. Navigate to **Application Lifecycle → Helm Repository**
2. Click **+ Add Helm Repository**
3. Enter repository name, URL, and optional credentials
4. Save — Cloud Orbiter indexes the available charts

### Deploy a Helm Application

1. Navigate to **Application Lifecycle → Helm Application**
2. Click **+ Deploy Application**
3. Select the target cluster and namespace
4. Choose the Helm chart and version from the repository
5. Provide values overrides as needed
6. Click **Deploy**

### Application Instance Management

After deployment, manage running Helm releases from the **Application Instance** dashboard:
- View deployment state, namespace, release name, and who deployed it
- Download the `values.yaml` for inspection or modification
- Update the application with a new chart version or values
- Delete the application instance from the cluster

## GitOps Integration

### What is GitOps?

GitOps uses Git as the single source of truth for infrastructure and application state. Instead of running imperative commands to deploy applications, you commit the desired state to Git, and an automated process reconciles the actual cluster state to match.

**Benefits:**
- Version control for all deployments — track every change, rollback to any previous state
- Automated rollouts — no manual deployment commands needed
- Consistent, repeatable deployments across multiple clusters
- Reduced risk of human error

### How Cloud Orbiter Supports GitOps

Cloud Orbiter provides native GitOps automation for continuous delivery:

- **Continuous Deployment** — Automatically deploy application updates when changes are committed to Git
- **Version Control** — Track all changes, rollbacks, and updates with full Git history
- **Multi-Cluster Rollout** — Push application changes across multiple clusters from a single Git commit
- **Application Updates** — Improve reliability and scalability while reducing downtime

### Getting Started with GitOps

1. **Set up a Git repository** for your application manifests or Helm values
2. **Onboard the Git repository** in Cloud Orbiter (Application Repositories → + Add Repository → Git)
3. **Configure GitOps automation** — select the repository, branch, and target cluster
4. **Commit application changes** to Git — Cloud Orbiter automatically reconciles and deploys
5. **Enable Continuous Delivery** — Cloud Orbiter monitors the repository and applies updates automatically

## Application Deployment — Step by Step

### Option 1: Helm-Based Deployment

```
Add Helm Repository → Select Chart → Configure Values → Select Target Cluster → Deploy
```

### Option 2: GitOps-Based Deployment

```
Onboard Git Repo → Configure GitOps Rule → Commit to Git → Auto-Deploy to Cluster
```

### Option 3: Container-Based Deployment

```
Connect Container Registry → Select Image → Create Deployment Manifest → Deploy to Cluster
```

## Managing Unmanaged Instances

Existing applications on imported clusters may appear as **unmanaged instances**. To bring them under Cloud Orbiter management:

1. Navigate to **Application Instances → Unmanaged**
2. Find the application you want to manage
3. Click the three-dot menu → **Manage**
4. The application moves to **Managed Instances** with full lifecycle control enabled

This is particularly useful after brownfield cluster imports — you get immediate visibility into what's running, then progressively bring applications under automated lifecycle management.
