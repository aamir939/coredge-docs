---
title: LLM Inference
sidebar_position: 4
---

# LLM Inference

**Business Value:** Deploy models to production with enterprise-grade inference servers that expose OpenAI-compatible APIs — enabling seamless integration with existing applications.

## How It Works

The ML Platform provides managed inference serving for deploying trained models as production API endpoints. When you deploy an inference server:

- The platform provisions GPU resources and loads your model
- An inference engine (vLLM or Ollama) serves predictions with optimized throughput
- OpenAI-compatible API endpoints are automatically exposed
- Horizontal Pod Autoscaler manages replica count based on demand
- Metrics and logs stream to the monitoring dashboard

{/* ![LLM Inference Architecture](/img/dflare-ai/ml-platform-inference.png) */}

## Technical Highlights

- OpenAI-compatible API — drop-in replacement for existing code
- vLLM backend with PagedAttention, continuous batching, and tensor parallelism
- Quantization support: AWQ, GPTQ for reduced memory and faster inference
- Auto-scaling based on request rate, latency, or GPU utilization
- Multi-model serving with traffic splitting between versions
- Streaming responses via server-sent events

## Supported Models

| Category | Examples |
|----------|----------|
| **LLaMA Family** | LLaMA 2, LLaMA 3, Code Llama |
| **Mistral** | Mistral 7B, Mixtral 8x7B |
| **Fine-Tuned** | Custom models from platform fine-tuning |
| **HuggingFace** | Any compatible HuggingFace model |
