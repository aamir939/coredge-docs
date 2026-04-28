---
title: LLM Evaluation
sidebar_position: 7
---

# LLM Evaluation

**Business Value:** Measure model quality systematically before production deployment. Evaluate responses against ground truth and track metrics alongside training experiments.

## How It Works

The ML Platform provides a built-in evaluation framework for assessing LLM output quality. When you run an evaluation:

- The platform loads your evaluation dataset (JSONL/JSON format)
- Each example is processed through your model
- Scorers assess output quality against expected results
- Results aggregate into summary metrics
- Full evaluation details log to MLflow for analysis

{/* ![LLM Evaluation Architecture](/img/dflare-ai/ml-platform-evaluation.png) */}

## Technical Highlights

- Batch evaluation processing thousands of examples efficiently
- Parallel execution distributed across multiple workers
- Results automatically logged to MLflow with full traceability
- Custom scorers for specialized evaluation logic
- Streaming results viewable in real-time
- Cost tracking for LLM judge API usage

## Built-in Scorers

| Scorer | Description |
|--------|-------------|
| **LLM Judge** | LLM-based rating on helpfulness, accuracy, coherence |
| **Exact Match** | Binary matching with normalization options |
| **Regex Match** | Pattern-based validation |
| **Semantic Similarity** | Embedding-based cosine similarity |
