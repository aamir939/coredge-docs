---
title: Dataset Management
sidebar_position: 8
---

# Dataset Management

**Business Value:** Centralize your ML datasets with automatic versioning and seamless access from notebooks and jobs — eliminating data pipeline complexity and ensuring reproducibility.

## How It Works

The ML Platform provides unified dataset management for ingesting, storing, and accessing training data. When you register a dataset:

- The platform ingests data from your specified source
- Files store in high-performance workspace storage
- Metadata (schema, size, version) is cataloged
- Datasets auto-mount into notebooks and jobs at `/data/{dataset-name}`
- Version history tracks changes over time

{/* ![Dataset Management Architecture](/img/dflare-ai/ml-platform-datasets.png) */}

## Technical Highlights

- Automatic versioning — every update creates a new version
- Deduplication — identical files share storage
- Lazy loading — stream large datasets without full download
- Format detection — automatic schema inference for structured data
- Parallel ingestion for fast import of large datasets
- Workspace-level access control

## Data Sources

| Source | Description |
|--------|-------------|
| **File Upload** | CSV, JSON, JSONL, Parquet, Arrow (up to 10GB) |
| **HuggingFace Hub** | Public and private datasets with split selection |
| **Kaggle** | Competition and community datasets |
| **S3 / Object Storage** | AWS S3, MinIO, GCS, Azure Blob |
| **Direct URL** | HTTP/HTTPS with automatic archive extraction |
