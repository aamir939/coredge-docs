---
title: ML Platform Overview
sidebar_position: 1
---

# ML Platform

**Business Value:** Unify your entire ML lifecycle — from interactive GPU notebooks to production inference — under a single control plane within your Dflare AI workspace.

## How It Works

The ML Platform provides a complete ML development environment integrated into every workspace. When you access the ML Platform:

- GPU notebooks launch with pre-configured CUDA runtimes and ML libraries
- Training jobs execute on provisioned GPU clusters with automatic MLflow tracking
- Inference servers deploy with OpenAI-compatible APIs and auto-scaling
- Fine-tuning workflows adapt foundation models to your data
- Datasets mount automatically across all platform capabilities

{/* ![ML Platform Architecture](/img/dflare-ai/ml-platform-overview.png) */}

## Platform Capabilities

| Capability | Description |
|------------|-------------|
| [**GPU Notebooks**](./notebooks) | JupyterLab and VS Code environments with instant GPU access |
| [**Distributed Training**](./training) | Multi-GPU and multi-node training with PyTorch, TensorFlow, and HuggingFace |
| [**LLM Inference**](./inference) | Production model serving with vLLM and OpenAI-compatible APIs |
| [**Model Fine-Tuning**](./fine-tuning) | LoRA and full fine-tuning for foundation models |
| [**Experiment Tracking**](./mlflow) | Built-in MLflow with model registry and LLM tracing |
| [**LLM Evaluation**](./evaluation) | Automated model quality assessment with multiple scorers |
| [**Dataset Management**](./datasets) | Centralized datasets with versioning and auto-mount |

## Technical Highlights

- Per-workspace isolation with dedicated MLflow tracking servers
- Fractional GPU sharing for cost-efficient notebook usage
- Auto-stop policies to reclaim idle GPU resources
- HPA-driven inference scaling based on demand
- Automatic experiment tracking across all training workloads
