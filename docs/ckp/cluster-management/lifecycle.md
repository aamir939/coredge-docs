---
title: Cluster Lifecycle
sidebar_position: 3
---

# CKP Cluster Lifecycle (End-to-End)

The complete end-to-end cluster lifecycle via CAPI follows these steps:

1. **Cluster Request** — User requests a managed cluster via the Compass UI or API
2. **Provider Resolution** — The appropriate provider cluster is resolved (CCS VM or Orbiter Baremetal)
3. **Host Provisioning** — Machine hosts are provisioned through the selected infrastructure provider
4. **Agent Registration** — Host agents register with the management plane via mutual TLS
5. **Host Approval** — Hosts are approved automatically or manually
6. **Host Grouping** — Approved hosts are assigned to the designated host group
7. **CAPI Resources** — Resources are created using the Kamaji control plane template
8. **Bootstrap** — The Machine Reconciler and BYOH Host Reconciler drive the bootstrap process
9. **Control Plane Up** — Kamaji-hosted control plane comes up with Konnectivity, CoreDNS, KubeProxy, and LoadBalancer
10. **Workers Join** — Worker nodes join the cluster via the bootstrap configuration
11. **Cluster Ready** — The cluster reaches Ready state
12. **Addon Deployment** — CKP Storage Plugin, Cilium CNI, and Velero backup are deployed
13. **Autoscaling** — Karpenter is installed (CCS Virtual Machine provider only)
14. **Certificates** — TLS certificates are issued with 10-year validity
