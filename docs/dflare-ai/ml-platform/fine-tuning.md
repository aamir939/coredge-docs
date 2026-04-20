---
title: Model Fine-Tuning
sidebar_position: 5
---

# Model Fine-Tuning

**Business Value:** Fine-tune foundation models on your proprietary data — producing custom models that understand your domain and deliver superior performance for your specific use cases.

## How It Works

The ML Platform provides managed fine-tuning workflows for adapting pre-trained models. When you launch a fine-tuning job:

- The platform loads your base model and dataset
- Training runs with optimized hyperparameters for your chosen method
- Checkpoints save automatically with validation metrics
- MLflow tracks all parameters, metrics, and artifacts
- Final model registers to the model registry for deployment

{/* ![Fine-Tuning Architecture](/img/dflare-ai/ml-platform-fine-tuning.png) */}

## Technical Highlights

- LoRA (Low-Rank Adaptation) for parameter-efficient fine-tuning
- Full fine-tuning for maximum domain adaptation
- Powered by Unsloth — 2x faster training with 80% less memory
- Automatic mixed precision (BF16/FP16) and gradient checkpointing
- Multi-GPU fine-tuning with FSDP
- Output options: adapter weights or merged model

## Supported Base Models

| Family | Models |
|--------|--------|
| **LLaMA** | LLaMA 2 (7B, 13B, 70B), LLaMA 3 (8B, 70B) |
| **Mistral** | Mistral 7B, Mixtral 8x7B |
| **Phi** | Phi-2, Phi-3 |
| **Gemma** | Gemma 2B, Gemma 7B |
| **Custom** | Any HuggingFace-compatible model |
