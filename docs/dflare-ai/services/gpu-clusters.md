---
title: GPU Clusters
sidebar_position: 3
---

# GPU Clusters

## Kubernetes Cluster Orchestration

**Business Value:** Go from bare metal to a fully functional, GPU-enabled Kubernetes cluster — with networking, monitoring, and GPU operators pre-configured — through a simple portal form.

### How It Works

Users select their desired configuration: Kubernetes version, CNI plugin, node pools (control plane + GPU workers), host flavors, labels, and taints. The platform handles everything else:

- Installs container runtime, Kubernetes binaries, and bootstraps the control plane with etcd in HA quorum
- Deploys the chosen CNI plugin for pod networking — supporting both BGP-based and eBPF-powered options
- Joins GPU worker nodes, applies labels and taints, and deploys GPU runtime operators: GPU drivers, device plugin, telemetry exporter, and GPU feature discovery
- Runs conformance checks: API server reachable, all nodes Ready, CNI healthy, DNS resolving, GPUs visible

![Kubernetes Cluster Architecture](/img/Dflare_AI_ClusterKubernetes.svg)

### Technical Highlights

- All container images pulled from the platform's internal registry — enabling air-gapped, version-controlled deployments
- Static pods for control plane components (apiserver, etcd, controller-manager, scheduler) — self-bootstrapping without external dependencies
- GPU runtime operators deploy as DaemonSets: device plugin registers GPU resources per node, telemetry exporter provides per-GPU metrics, feature discovery labels nodes with GPU properties
- Full lifecycle operations: upscale, downscale (cordon → drain → remove), rolling upgrades (zero-downtime), and clean deletion with host return to pool
- Multi-vendor GPU support: compatible with GPU operators across major GPU vendors and extensible to additional GPU plugins

## Slurm (HPC) Cluster Orchestration

**Business Value:** Give HPC and research teams the Slurm experience they know — sbatch, squeue, srun — running on modern, Kubernetes-managed infrastructure with enterprise security and billing.

### How It Works

Dflare AI runs Slurm on top of Kubernetes using a Kubernetes-native operator. The platform first builds a complete Kubernetes cluster, then layers Slurm on top as Kubernetes-native objects:

- The operator deploys all Slurm daemons: slurmctld (controller), slurmd (compute daemon on every GPU node), slurmdbd (accounting database), slurmrestd (REST API), and MUNGE (authentication)
- Configuration files — slurm.conf, gres.conf, cgroup.conf — are auto-generated from the cluster spec and distributed as Kubernetes ConfigMaps
- A relational database runs as a StatefulSet with persistent storage for job accounting
- GPU-aware scheduling via GRES plugin: Slurm understands GPU topology, NUMA affinity, and inter-GPU connectivity for optimal multi-GPU job placement across supported GPU vendors

![Slurm Cluster Architecture](/img/Dflare_AI_ClusterSlurm.svg)

### Technical Highlights

- Unified infrastructure: same bare metal nodes, same networking, same storage, same monitoring — whether running K8s or Slurm workloads
- GPU-aware scheduling: `--gres=gpu:<type>:<count>` tells the scheduler exactly which nodes have the right GPU type and count available
- Job isolation via Linux cgroups v2: each job is confined to its allocated CPUs, memory, and GPUs — no resource leakage between jobs
- Fair-share scheduling: tenants who have used less than their allocation get higher job priority
- Full job accounting: every completed job generates a detailed record — GPU-hours, CPU-hours, elapsed time, memory consumed, exit code — feeding directly into the billing pipeline
- Job submission via portal UI, sbatch CLI, or REST API
