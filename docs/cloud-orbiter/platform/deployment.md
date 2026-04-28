---
title: Deployment & Getting Started
sidebar_position: 4
---

# Deployment & Getting Started

## Quick Start

Getting started with Cloud Orbiter requires signing up and becoming an authorized user. The platform is delivered as a SaaS-based management console — no local installation required for the control plane.

**Steps to get started:**
1. Visit the Cloud Orbiter platform and click **Request For Demo**
2. Fill in the registration form with your organization details
3. The Coredge sales team will contact you to configure your account
4. Receive login credentials and begin managing your infrastructure

## Tenant Registration

Cloud Orbiter is designed to support multiple tenants. Each tenant is an organization that registers with the platform to manage its own infrastructure and applications independently.

### Registration Process

1. Click the **Request For Demo** button on the platform homepage
2. Fill in the required details in the registration form
3. The Coredge sales team will review your request and configure the platform for your organization
4. After registration, a default project is created automatically for your tenant
5. Log in with provided credentials and begin onboarding clusters and users

## Project Setup

Projects in Cloud Orbiter organize and isolate infrastructure and application resources within a tenant.

### Creating a Project

1. Log in to your Cloud Orbiter account
2. Click the **Projects** tab on the dashboard
3. Click **New Project**
4. Enter a project name and optional description
5. Click **Create**

### Assigning Users to a Project

1. Navigate to the project
2. Click **Settings → Users and Groups**
3. Click **Add User**
4. Enter the user's email address or select a group
5. Click **Save**

## Onboarding CKP Clusters

Cloud Orbiter exclusively supports **CKP (Coredge Kubernetes Platform)** clusters. CKP is a custom Kubernetes distribution built from upstream Kubernetes, preconfigured with all features needed to build production clusters on bare metal infrastructure with Enterprise support aligned to community release versions.

### Step 1 — Add Hosts

1. Log in to Cloud Orbiter
2. Click **Hosts** from the left navigation panel
3. Follow the on-screen steps to onboard a new machine host
4. Run the provided commands on the target host machine
5. The host appears under **Pending Machine Host Requests** — click **Review**
6. Click the three-dot menu on the host request and select **Approve**
7. Confirmed hosts show **Provisioned Status: Available** and **Connection Status: Connected**

### Step 2 — Create Host Groups

1. Click the **Host Groups** tab
2. Click **+ Create Host Group**
3. Enter a name and optional description
4. Click **Create**
5. To assign a host to the group: click the host → **Actions → Assign Groups** → select the group → **Save**

### Step 3 — Create a CKP Cluster

1. Go to **Clusters** from the left navigation panel
2. Click **+ Add Cluster → Create Cluster**
3. Select **CKP** as the Kubernetes distribution → **Next**
4. Enter cluster name and description → **Next**
5. Configure:
   - Kubernetes Version
   - Networking and Networking Version
   - Provider Config: `BringYourOwnHost`
6. Click **Next** and configure:
   - Number of Master Nodes and Master Host Group
   - Virtual IP for the control plane
   - Number of Worker Nodes and Worker Host Group
7. Click **Create**

A cluster state dashboard appears, tracking provisioning progress in real time.
