---
title: Host Agent
sidebar_position: 1
---

# CKP Host Agent

The CKP Host Agent is a lightweight agent installed on every machine that participates in a CKP cluster. It serves as the communication bridge between individual hosts and the CKP management plane.

| Capability | Description |
|------------|-------------|
| Registration | Registers the host with the CKP management controller |
| Configuration | Manages the connection to the controller and cluster settings |
| BYOH Integration | Handles the Bring Your Own Host lifecycle for CAPI-provisioned clusters |
| Upgrade | Supports in-place agent binary upgrades |
| Health Reporting | Reports host status and health to the management plane via WebSocket |
