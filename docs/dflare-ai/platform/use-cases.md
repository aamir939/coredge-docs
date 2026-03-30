---
title: Use Cases
sidebar_position: 3
---

# Use Cases & Target Industries

## Primary Use Cases

### Large-Scale AI Model Training

Infrastructure for training frontier AI models across hundreds or thousands of GPUs:

- InfiniBand-connected nodes for efficient multi-node training
- High-performance parallel filesystem storage
- GPU collective communication library support
- Multi-vendor GPU compatibility

### LLM Fine-Tuning & RLHF

- Dedicated GPU allocation for predictable performance
- Isolated storage for proprietary datasets
- Job-level accounting and fair-share scheduling
- Support for human feedback pipelines on secure infrastructure

### AI Inference at Scale

- Kubernetes clusters with GPU resource requests
- Auto-scaling based on demand
- Load balancing across replicas
- GPU utilization and latency monitoring
- Support for model serving frameworks (TensorFlow Serving, Triton, vLLM)

### High-Performance Computing (HPC)

- Scientific simulation, computational fluid dynamics
- Molecular dynamics, climate modeling, financial modeling
- Familiar Slurm tools for batch jobs
- Job monitoring, interactive sessions, and job accounting

### MLOps & Experiment Management

- Kubernetes-native workflows for ML pipelines
- Kubeflow, Airflow, Argo Workflows, MLflow integration
- Model registry versioning and feature store management
- Per-project quotas and resource isolation

## Target Industries

### Cloud Service Providers

Multi-tenant isolation, granular metering, billing integration, portal provisioning, support for large-scale GPU deployments.

### Sovereign AI Programs

On-premises deployment, air-gapped support, NIST/ISO 27001/HIPAA alignment.

### AI Research Institutions

Fair-share scheduling, per-researcher tracking, project-based resource sharing.

### Enterprise AI Teams

MLOps workflows, Prometheus/Grafana monitoring, RBAC/SSO/audit logging.

### Healthcare & Life Sciences

HIPAA alignment, tenant-level storage isolation, privacy controls.

### Financial Services

Zero-trust architecture, audit trails, low-latency GPU compute, hardware-enforced boundaries.

## Success Metrics

| Use Case | Key Metrics |
|---|---|
| AI Training | Time to first run, GPU utilization, checkpoint frequency |
| LLM Fine-tuning | Weekly iterations, model quality metrics |
| Inference | Latency p99, throughput (requests/sec), GPU utilization |
| HPC | Queue time, cluster utilization, completion rate |
| MLOps | Experiment velocity, deployment frequency |
