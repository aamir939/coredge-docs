---
title: Cluster Upgrades
sidebar_position: 2
---

# Cluster Upgrade Procedure

CKP supports rolling upgrades across Kubernetes versions. The upgrade process follows a standard node-by-node approach:

1. **Download** — the updated CKP packages for the target Kubernetes version
2. **Drain** — the node to safely evict workloads
3. **Install** — the new CKP packages on the node
4. **Restart** — the kubelet service to pick up the new binaries
5. **Uncordon** — the node to allow workload scheduling again
6. **Apply** — the Kubernetes upgrade via kubeadm on the master node(s)
