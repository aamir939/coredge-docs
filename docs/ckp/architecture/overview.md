---
title: Architecture Overview
sidebar_position: 1
---

# CKP Architecture

## Control Plane Components

| Component | Description |
|-----------|-------------|
| kube-apiserver | Control plane front end, serves the RESTful API |
| etcd | Highly available key-value store for all cluster data |
| kube-scheduler | Assigns unscheduled pods to nodes |
| kube-controller-manager | Runs node, endpoint, replication, service account, and token controllers |

## Node Components

| Component | Description |
|-----------|-------------|
| kubelet | Ensures containers are running in pods |
| kube-proxy | Maintains network rules for pod communication |
| Container runtime | Containerd (CKP default) |
