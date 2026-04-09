---
title: Backup & Restore
sidebar_position: 7
---

# Backup & Restore

## Overview

Modern applications are composed of multiple microservices running in containers, and Kubernetes has no built-in backup or recovery policies by default. Cloud Orbiter integrates **Velero** as a first-class Add-On to provide robust backup, restore, and disaster recovery for Kubernetes workloads.

Velero is a battle-tested open-source tool that takes backups of Kubernetes cluster resources and persistent volumes, restores them, and supports cluster migration.

## What Cloud Orbiter Backup Provides

- **Namespace Backup** — Back up entire namespaces and restore them as required
- **Persistent Volume Backup** — Snapshot and restore PVs alongside namespace resources
- **Cluster Resource Migration** — Move workloads from one cluster to another
- **Environment Replication** — Replicate production clusters into development or testing clusters
- **Disaster Recovery** — Restore cluster state after failure or data loss

## Architecture

Cloud Orbiter uses Velero with an **S3-compatible storage backend**. Every cluster backup is stored in a configured S3 endpoint, providing durable, geo-redundant backup storage.

```
Kubernetes Cluster → Velero Agent → S3-Compatible Storage Endpoint
                                         ↕ (restore)
                    Target Cluster ← Velero Agent ←
```

## Prerequisites

1. **Velero Add-On enabled** on the cluster
2. **S3 Storage Endpoint** configured in Cloud Orbiter

## S3 Storage Endpoint Onboarding

Before creating backups, configure the S3 storage endpoint where backup data will be stored:

1. Navigate to **Backup & Restore → Storage Endpoints**
2. Click **+ Add Endpoint**
3. Provide:
   - Endpoint name
   - S3 URL (bucket URL or compatible storage URL)
   - Access Key and Secret Key
   - Region and bucket name
4. Click **Save** — Cloud Orbiter validates the connection

## Creating a Backup

1. Navigate to the cluster dashboard
2. Click **Backup & Restore → + Create Backup**
3. Configure the backup:
   - **Backup Name** — unique identifier for this backup
   - **Namespaces** — select specific namespaces or all namespaces
   - **Storage Endpoint** — select the S3 endpoint configured above
   - **Schedule** — one-time or scheduled (cron-based)
4. Click **Create** to start the backup job

## Restoring from Backup

1. Navigate to **Backup & Restore → Backup Jobs**
2. Select the backup you want to restore from
3. Click **Restore**
4. Configure restore options:
   - Target cluster (same or different cluster)
   - Target namespace(s)
   - Resource inclusion/exclusion options
5. Click **Restore** — Velero applies the backup to the target cluster

## Backup Resource Customization

Cloud Orbiter supports granular backup configuration to optimize storage usage and backup performance:

### Namespace Selection
Include or exclude specific namespaces from the backup. Use label selectors to target namespaces with specific attributes.

### Persistent Volumes
- **Include** — Back up specific PVs using label selectors (e.g., label `data=true`)
- **Exclude** — Skip PVs that are larger than a size threshold or managed by a separate backup process

### Snapshot Volumes
- Include or exclude volume snapshots from backup operations based on your storage strategy

### Cluster-Wide Resources
Include or exclude cluster-level resources (e.g., nodes, ClusterRoles) when only application-specific resources are needed.

### Label Selectors
Target resources for backup or exclusion using Kubernetes labels:
- Include all resources labeled `tier=backend`
- Exclude resources labeled `backup=false`

### App Hooks
Add pre/post-backup scripts to ensure data consistency:
- **Pre-backup hook** — Run a script to quiesce a database before backup starts (e.g., stop writes, flush cache)
- **Post-backup hook** — Run a script to resume normal database operations after backup completes

**Example use case:** Stop a PostgreSQL service → take backup → restart the service — ensuring a consistent, crash-free backup.

## Backup Job Status

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Status</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>In Progress</td><td style={{padding: '3px 12px'}}>Backup is currently running — resources being serialized and uploaded to S3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Completed</td><td style={{padding: '3px 12px'}}>Backup finished successfully — available for restore</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Failed</td><td style={{padding: '3px 12px'}}>Backup encountered an error — review logs for details</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Partial</td><td style={{padding: '3px 12px'}}>Some resources backed up successfully; others failed — review logs</td></tr>
  </tbody>
</table>

## Cluster Migration

Cloud Orbiter backup enables seamless cluster migration:

1. Create a full backup of the source cluster
2. Provision a new target cluster
3. Restore the backup to the target cluster
4. Validate application health on the target
5. Switch traffic to the new cluster

This workflow supports migrations between:
- On-premise to public cloud
- Different cloud providers
- Different Kubernetes distributions
- Production to staging/dev environments
