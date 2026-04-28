---
title: Cluster Lifecycle
sidebar_position: 3
---

# CKP Cluster Lifecycle (End-to-End)

The complete end-to-end cluster lifecycle via CAPI follows these steps:

1. **Cluster Request** — User requests a managed cluster via the Compass UI or API
2. **Provider Resolution** — The Orbiter Baremetal provider cluster is resolved
3. **Host Provisioning** — Machine hosts are provisioned through the infrastructure provider
4. **Agent Registration** — Host agents register with the management plane via mutual TLS
5. **Host Approval** — Hosts are approved automatically or manually
6. **Host Grouping** — Approved hosts are assigned to the designated host group
7. **CAPI Resources** — Resources are created using the Managed Control Plane template
8. **Bootstrap** — The Machine Reconciler and BYOH Host Reconciler drive the bootstrap process
9. **Control Plane Up** — Managed Control Plane comes up with Konnectivity, CoreDNS, KubeProxy, and LoadBalancer
10. **Workers Join** — Worker nodes join the cluster via the bootstrap configuration
11. **Cluster Ready** — The cluster reaches Ready state
12. **Addon Deployment** — CKP Storage Plugin, Cilium CNI, and Velero backup are deployed
13. **Certificates** — TLS certificates are issued with 10-year validity

## Cluster Configuration Summary

| Configuration | Details |
|---------------|---------|
| Kubernetes Versions | v1.33.7, v1.34.3, v1.35.1 (All CNCF Certified) |
| Control Plane | Managed Control Plane (Hosted) with Konnectivity, CoreDNS, KubeProxy, LoadBalancer |
| CAPI Stack | Cluster API v1.7.7 \| BYOH v0.6.1 \| Cert-Manager v1.15.3 |
| Infrastructure | Orbiter Baremetal (BMS) |
| Networking | Configurable Pod/Service CIDR \| CNI: Calico v3.30.5 |
| Operating Systems | Ubuntu 22.04, Ubuntu 24.04, Red Hat Enterprise Linux 9 |
| Storage & Backup | CKP Storage Plugin (ckp-block / Ceph) \| Velero Backup (S3-compatible) \| 10-year TLS Certificates |
