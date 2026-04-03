---
title: Billing & Metering
sidebar_position: 8
---

# Billing & Metering

**Business Value:** Know exactly what each tenant, project, and user consumes — down to GPU-hours, storage bytes, and network bandwidth — with transparent, auditable billing records.

## What Gets Metered

| Resource | What's Measured | How | Granularity |
|---|---|---|---|
| **GPU Compute** | GPU-hours, utilization %, memory, power draw, temperature | GPU telemetry exporter on every node | Per GPU, configurable intervals |
| **CPU Compute** | CPU-hours, utilization %, core count, memory | Node exporter on every node | Per node, configurable intervals |
| **Bare Metal Allocation** | Node-hours: allocation start → release | Orchestration DB timestamps | Per node, precise timestamps |
| **K8s Cluster Runtime** | Cluster-hours: creation → deletion | Orchestration DB lifecycle events | Per cluster |
| **Slurm Jobs** | Per-job GPU-hours, CPU-hours, elapsed time, memory, exit code | Slurm accounting daemon → relational database | Per job |
| **Storage (Parallel FS)** | Directory size, quota utilization, I/O throughput | Storage reporting + storage plugin | Per tenant directory |
| **Storage (Object/Platform)** | PVC usage, S3 bucket size, object count | Storage management + CSI metrics | Per PVC, per bucket |
| **Network (InfiniBand)** | Bandwidth per tenant, RDMA throughput, packet drops | Fabric manager telemetry + IB port counters | Per partition (per tenant) |

## Metering Pipeline

Raw metrics flow through a multi-stage pipeline: hardware-level exporters collect data at configurable intervals → time-series database scrapes and stores short-term → long-term HA storage provides retention → metering service aggregates into billable records per tenant/project/user → billing reports generated and exportable as CSV/PDF.

![Metering Pipeline & Billing Flow](/img/dflare-ai/05-metering-pipeline.png)

## Quota Management

Pre-set resource limits prevent overspend and ensure fair capacity distribution. Quotas are enforced in real-time — if a tenant exceeds their quota, new resource creation is blocked. The portal dashboard shows quota usage with color-coded warnings at configurable thresholds.
