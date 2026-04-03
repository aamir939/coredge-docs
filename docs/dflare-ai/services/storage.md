---
title: Storage
sidebar_position: 4
---

# Storage

**Business Value:** GPU workloads are only as fast as their data pipeline. Dflare AI delivers storage throughput that keeps up with the most demanding training jobs — leveraging the full bandwidth of the InfiniBand fabric.

## Two Storage Tiers, Optimized for Purpose

| Tier | Technology | Connection | Purpose |
|---|---|---|---|
| **High-Performance Tier** | Parallel filesystem | InfiniBand (high-bandwidth, multiple links per node) | Training datasets, model checkpoints, experiment results |
| **Platform Tier** | Unified file/object storage | Ethernet | Platform services (databases, backups, logs, container registry) |

## Parallel Filesystem — The Fast Storage

When a tenant is onboarded, the platform automatically provisions dedicated storage with multi-layer access control:

- Creates a tenant directory on the parallel filesystem
- Creates an access control map — an access control list of InfiniBand IP addresses allowed to mount the directory
- Assigns only the tenant's GPU node IB IPs to the access control map
- Sets capacity quotas based on the tenant's subscription
- Data is striped across multiple storage targets for parallel I/O — delivering massive aggregate throughput

![Storage Architecture & Double Isolation](/img/dflare-ai/03-storage-architecture.png)

## Storage Security — Double Isolation

Tenant storage isolation is enforced at two independent layers simultaneously:

- **1. InfiniBand level (Partition Key):** Only the tenant's GPU ports can communicate on the tenant's IB partition
- **2. Filesystem level (Access Control Map):** Only the tenant's IB IP addresses can mount the tenant's directory

Even if one layer were compromised, the other would still block unauthorized access.

## Platform Tier — Object Storage

The platform tier provides unified file and object storage over Ethernet for platform services. This tier stores databases, container images, backups, and logs with configurable lifecycle policies.
