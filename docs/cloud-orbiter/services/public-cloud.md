---
title: Public Cloud Clusters
sidebar_position: 3
---

# Public Cloud Cluster Management

## Overview

Cloud Orbiter provides comprehensive cluster lifecycle management for public cloud Kubernetes deployments. It enables you to manage your cloud-native infrastructure through an intuitive interface to deploy, operate, and scale Kubernetes clusters on AWS, Azure, and Google Cloud — without switching between separate cloud consoles.

**Supported Public Cloud Providers:**
- Amazon Elastic Kubernetes Service (EKS)
- Azure Kubernetes Service (AKS)
- Google Kubernetes Engine (GKE)

## Amazon EKS

### What Cloud Orbiter Provides

| Capability | Description |
|---|---|
| **Onboarding** | Guided process to connect AWS account and deploy your first EKS cluster |
| **Deployment** | Create new EKS clusters from Cloud Orbiter — no AWS Console required |
| **Management** | Centralized dashboard to monitor, scale, and manage EKS clusters |

### Prerequisites

- AWS account with permissions to create and manage EKS clusters
- AWS CLI installed on your local machine
- kubectl installed on your local machine
- Cloud Orbiter account

### Onboard AWS Account

1. In Cloud Orbiter: switch to **Admin view → Infrastructure Provider**
2. Click **Add Account** next to the AWS option
3. Provide an account name and optional description
4. Enter your **Access Key** and **Secret Key**
5. Click **Save**

Cloud Orbiter validates the credentials — you are now ready to create EKS clusters.

### Create an EKS Cluster

1. Log in to Cloud Orbiter and navigate to the dashboard
2. Click **Create Cluster**
3. Select **AWS** as the cloud provider
4. Configure your EKS cluster:
   - Cluster name
   - AWS region
   - Node instance type
5. Review your configuration and click **Create**

### Manage an EKS Cluster

1. From the dashboard, select the EKS cluster
2. Available management operations:
   - Scale nodes up or down
   - Deploy applications via Helm or GitOps
   - Monitor cluster health and performance metrics
   - View and analyze access logs

### Modify or Remove AWS Account

**To modify credentials:**
Admin view → Infrastructure Provider → **Edit** next to the AWS account → update Access Key / Secret Key → **Save**

**To remove account:**
Admin view → Infrastructure Provider → **Delete** next to the AWS account → confirm deletion

---

## Azure AKS

### What Cloud Orbiter Provides

| Capability | Description |
|---|---|
| **Onboarding** | Guided process to connect Azure account and deploy your first AKS cluster |
| **Deployment** | Create new AKS clusters directly from Cloud Orbiter interface |
| **Management** | Centralized dashboard for scaling, monitoring, and upgrading AKS clusters |

### Prerequisites

- Azure subscription with permissions to create and manage AKS clusters
- Azure CLI installed on your local machine
- kubectl installed on your local machine

### Onboard Azure Account

1. In Cloud Orbiter: switch to **Admin view → Infrastructure Provider**
2. Click **Add Account** next to the Azure option
3. Provide an account name and optional description
4. Enter your Azure credentials:
   - Tenant ID
   - Subscription ID
   - Client ID
   - Client Secret
5. Click **Save**

### Create an AKS Cluster

1. Log in to Cloud Orbiter and navigate to **Clusters**
2. Click **Create Cluster** and select **Microsoft Azure AKS**
3. Enter a cluster name and select your Azure subscription
4. Choose the Azure region for the cluster
5. Configure node pool settings:
   - Node size
   - Node count
   - Disk size
6. Review and confirm configuration → click **Create**

### Manage an AKS Cluster

Available management capabilities:
- Scale cluster nodes up or down
- Upgrade the Kubernetes version or node pool configuration
- Add or remove node pools
- View cluster metrics and logs

**To manage an AKS cluster:**
1. Navigate to **Clusters** in Cloud Orbiter
2. Select the AKS cluster
3. Use the management tools to perform desired operations

---

## Google Kubernetes Engine (GKE)

### What Cloud Orbiter Provides

| Capability | Description |
|---|---|
| **Onboarding** | Guided process to connect Google Cloud account and deploy GKE clusters |
| **Deployment** | Create and configure GKE clusters using Google Cloud infrastructure |
| **Management** | Monitor, scale, and manage GKE clusters — node pools, metrics, operations |

### Prerequisites

- Google Cloud account with permissions to create and manage Kubernetes clusters
- Google Cloud credential file (JSON format)

### Onboard Google Cloud Account

1. In Cloud Orbiter: switch to **Admin view → Infrastructure Provider**
2. Click **Add Account** next to the Google Cloud option
3. Provide an account name and optional description
4. Upload your **Google credential JSON file**
5. Click **Save**

### Create a GKE Cluster

1. Log in to Cloud Orbiter and navigate to the dashboard
2. Click **Create Cluster** and select **Google GKE**
3. Enter cluster details, select the Google Cloud project, choose the region
4. Configure node pools as needed
5. Review configuration and click **Create**

### Manage a GKE Cluster

1. From the Cloud Orbiter dashboard, select the GKE cluster
2. Available operations: scale applications, monitor performance, manage node pools

### Modify or Remove Google Cloud Account

**To modify credentials:**
Admin view → Infrastructure Provider → **Edit** next to the Google Cloud account → upload updated credential file → **Save**

**To remove account:**
Admin view → Infrastructure Provider → **Delete** next to the Google Cloud account → confirm

---

## Cluster Creation with Cloud Onboarding

Once cloud accounts are added, you can:
- **View all clusters** — See all public cloud clusters in one place with status and configuration details
- **Create new clusters** — Provision clusters directly from Cloud Orbiter without switching to cloud provider consoles
- **Manage existing clusters** — Scale, upgrade, monitor, and operate all clusters through the unified dashboard

The Cloud Onboarding feature validates credentials upfront and provides easy editing workflows when credentials expire — avoiding disruptions to ongoing cluster management.
