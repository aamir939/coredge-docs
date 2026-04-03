---
title: Host Provisioner
sidebar_position: 2
---

# CKP Host Provisioner

The CKP Host Provisioner is a multi-cluster controller responsible for managing the lifecycle of machines within CKP clusters. It operates two reconciliation loops:

| Reconciler | Purpose |
|------------|---------|
| Machine Reconciler | Manages CAPI Machine resources, ensuring the desired number of nodes are provisioned |
| BYOH Host Reconciler | Manages Bring Your Own Host resources, handling host registration and bootstrap |

## Host Status Lifecycle

When a machine host is created, it transitions from **Create Pending** to either **Create Completed** (success) or **Create Failed** (error).
