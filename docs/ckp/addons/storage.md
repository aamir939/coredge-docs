---
title: Storage Plugin
sidebar_position: 2
---

# CKP Storage Plugin

CKP provides a built-in storage plugin that delivers persistent block storage for cluster workloads.

| Property | Details |
|----------|---------|
| Storage Backend | Ceph (managed by the CKP storage plugin) |
| Default Storage Class | ckp-block — Delete reclaim policy, volume expansion enabled |
| Deployment | Installed as a Helm chart in a dedicated storage namespace |

For standalone installations, **OpenEBS hostpath** is used as the default CSI driver and storage class.
