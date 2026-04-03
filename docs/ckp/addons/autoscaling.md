---
title: Autoscaling (Karpenter)
sidebar_position: 1
---

# CKP Autoscaling (Karpenter)

CKP integrates **Karpenter** for automated cluster autoscaling. The integration handles automatic installation and configuration, node class creation for CAPI-managed nodes, node pool management, and CPU-based scaling limits.

**Note:** Karpenter autoscaling is **supported only** for dynamically provisioned host groups using the CCS Virtual Machine provider. Baremetal host groups do not support automatic scaling.
