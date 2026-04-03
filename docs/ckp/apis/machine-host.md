---
title: Machine Host APIs
sidebar_position: 1
---

# CKP Machine Host Management APIs

CKP provides a comprehensive set of REST APIs for managing machine hosts. All APIs are scoped to a domain and project, supporting multi-tenant isolation.

## Host PSK and Host Requests

These APIs manage the host authentication process. The PSK is used by host agents to authenticate when registering with the management plane.

| API Category | Operations |
|--------------|------------|
| Host PSK | Retrieve and reset the pre-shared key for host authentication |
| Host Requests | List, view, approve/reject individual and bulk host registrations |

## Host Management

Core CRUD operations for managing registered hosts, including listing, retrieving details, deleting individual hosts, and bulk-deleting.

## Host Groups

Host groups allow administrators to organize registered hosts into logical groups for cluster assignment. APIs support full CRUD operations and bulk membership management.

## MachineHost Service (Compass)

The Compass platform exposes an additional gRPC-based MachineHost service for adding, retrieving, updating, deleting, provisioning, and checking the status of machine hosts.
