---
title: Monitoring
sidebar_position: 6
---

# Monitoring

**Business Value:** Full visibility into GPU health, cluster performance, job queues, and resource utilization — for both platform operators and tenants — with proactive alerting.

## Tier 1 — Infrastructure Monitoring (Platform Ops, Always On)

Deployed alongside the orchestration portal for operations teams. Powered by HA time-series database + dashboarding solution with exporters covering every infrastructure layer.

## Tier 2 — Tenant Monitoring (User-Enabled Add-On)

Deployed inside each tenant's cluster when the user enables the monitoring add-on. Includes metric collectors for nodes, pods, Kubernetes state, and GPU telemetry. Dashboards rendered inside the portal with strict multi-tenant isolation.

## Alert Thresholds

- **GPU Temperature** — Configurable upper limit sustained over time → *Alert ops team*
- **CPU Utilization** — Configurable cluster-wide threshold → *Capacity warning*
- **Memory Utilization** — Configurable node-level threshold → *Capacity warning*
- **Storage Latency** — Configurable latency threshold → *Performance investigation*
- **Slurm Job Queue** — Configurable pending jobs threshold → *Scheduling review*
- **GPU Resource Allocation** — Configurable cluster-wide threshold → *Capacity planning*
- **etcd Leader Changes** — Configurable rate threshold → *Stability investigation*
