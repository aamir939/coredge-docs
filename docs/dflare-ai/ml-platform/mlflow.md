---
title: Experiment Tracking
sidebar_position: 6
---

# Experiment Tracking

**Business Value:** Never lose an experiment again. Every training run, hyperparameter, metric, and artifact is automatically tracked and versioned — giving your team complete reproducibility across all ML work.

## How It Works

The ML Platform includes built-in MLflow 3.x with per-workspace tracking servers. When you run ML code:

- MLflow tracking URI is pre-configured in your environment
- Experiments are organized by project and run
- Metrics log in real-time and display in the MLflow UI
- Artifacts store in high-performance storage (NFS or S3)
- Models register to the model registry with versioning

{/* ![MLflow Architecture](/img/dflare-ai/ml-platform-mlflow.png) */}

## Technical Highlights

- Per-workspace isolation with dedicated MLflow instances
- Auto-logging for PyTorch, TensorFlow, HuggingFace, scikit-learn, XGBoost
- Model Registry with lifecycle stages (Staging, Production, Archived)
- LLM tracing for capturing inputs, outputs, and latency
- High-availability backed by PostgreSQL with artifact storage on NFS/S3
- Full MLflow REST API for programmatic access

## Auto-Logging Support

| Framework | Auto-Logged |
|-----------|-------------|
| **PyTorch** | Loss, model architecture, optimizer config |
| **TensorFlow/Keras** | Metrics, model summary, callbacks |
| **HuggingFace** | Training args, metrics, model config |
| **scikit-learn** | Model params, metrics, artifacts |
