---
title: GPU Notebooks
sidebar_position: 2
---

# GPU Notebooks

**Business Value:** Launch fully configured GPU development environments in seconds — no local setup, no driver installation, no environment conflicts.

## How It Works

GPU Notebooks provide interactive development environments running directly on Dflare AI's GPU infrastructure. When you launch a notebook:

- The platform provisions a container with your selected GPU allocation
- CUDA runtimes and GPU drivers are pre-installed and validated
- Workspace credentials are auto-injected for seamless access to datasets and MLflow
- Persistent NFS storage ensures your work survives restarts
- Auto-stop policies reclaim idle resources automatically

{/* ![GPU Notebooks Architecture](/img/dflare-ai/ml-platform-notebooks.png) */}

## Technical Highlights

- JupyterLab 4.x and VS Code Server environments
- GPU allocation from fractional GPU to multi-GPU configurations
- Pre-built images with PyTorch, TensorFlow, JAX, and HuggingFace
- Custom container images from any registry (Docker Hub, ECR, GCR)
- MLflow tracking pre-configured — just import and start logging
- Datasets auto-mount at `/data/{dataset-name}`

## Configuration Options

| Option | Description |
|--------|-------------|
| **Environment** | JupyterLab or VS Code Server |
| **GPU Count** | 0 (CPU-only) to 8 GPUs per notebook |
| **GPU Type** | A100, H100, or other available types |
| **Memory** | Configurable GPU memory for fractional sharing |
| **Auto-Stop** | Idle timeout and maximum runtime limits |
