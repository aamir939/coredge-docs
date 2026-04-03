---
title: Bare Metal Provisioning
sidebar_position: 1
---

# Bare Metal Provisioning

**Business Value:** Reduce GPU server provisioning from days of manual work to minutes of automated orchestration. No SSH, no manual OS installs, no network cable tracing.

## How It Works

The provisioning engine coordinates multiple components in a fully automated pipeline. When a tenant requests GPU nodes through the portal, the platform executes the following sequence without human intervention:

- The network fabric controller prepares isolated VRFs and VLANs for the tenant
- The bare metal controller powers on the physical server via IPMI/BMC, boots it over PXE, and installs a performance-optimized golden OS image
- Cloud-init configures the node's hostname, networking, and deploys the GPU agent
- The storage layer creates a dedicated parallel filesystem directory with InfiniBand access control
- The GPU agent registers with the portal, and the node is ready for cluster assignment

![Bare Metal Provisioning Flow](/img/dflare-ai/02-provisioning-flow.png)

## Technical Highlights

- PXE-based network boot with DHCP relay across provisioning VLANs
- Golden OS image with pre-tuned BIOS settings: performance profile, C-states disabled, NUMA alignment enabled, PCIe ASPM disabled, virtualization disabled
- OS-level tuning: CPU governor locked to performance, huge pages enabled, NUMA balancing disabled
- Agent-based architecture: lightweight gRPC agent on every node for secure, bidirectional communication with the portal
- Full deallocation flow: workload drain → network removal → storage cleanup → node returned to pool

## Supported Hardware

Enterprise GPU server platforms from multiple vendors, with configurable server profiles, GPU types, and accelerator configurations. Scalable to thousands of nodes per deployment.
