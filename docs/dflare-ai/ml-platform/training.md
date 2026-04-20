---
title: Distributed Training
sidebar_position: 3
---

# Distributed Training

**Business Value:** Submit training jobs that scale from a single GPU to hundreds of nodes — with automatic experiment tracking and full reproducibility — all without managing infrastructure.

## How It Works

The ML Platform provides a job submission system for running training workloads at scale. When you submit a training job:

- The platform schedules your job on available GPU resources matching your requirements
- Your code runs in an isolated container with GPU access and high-speed InfiniBand connectivity
- MLflow tracking is automatically configured — metrics, parameters, and artifacts are logged
- Job logs stream in real-time through the portal
- Completed jobs produce artifacts stored in the workspace's artifact repository

{/* ![Distributed Training Architecture](/img/dflare-ai/ml-platform-training.png) */}

## Technical Highlights

- Multi-node training with DDP, FSDP, and DeepSpeed across InfiniBand fabric
- Framework support: PyTorch, TensorFlow, HuggingFace, Ludwig, Ray Train
- Automatic checkpointing with upload to persistent storage
- Resource queuing with priority scheduling
- Custom container images and environment customization
- Workspace secrets available as environment variables

## Supported Frameworks

| Framework | Distributed Support |
|-----------|---------------------|
| **PyTorch** | DDP, FSDP, DeepSpeed |
| **TensorFlow** | MultiWorkerMirroredStrategy |
| **HuggingFace** | Trainer with multi-GPU |
| **Ludwig** | Built-in distributed training |
| **Ray Train** | Ray distributed backend |
