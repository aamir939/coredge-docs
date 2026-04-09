---
title: Infrastructure Providers
sidebar_position: 1
---

# CKP Infrastructure Providers

## CKP BMS Provider (Orbiter Baremetal)

The BMS Provider integrates CKP with the **Orbiter Baremetal** infrastructure, enabling Kubernetes clusters to be provisioned directly on physical servers.

| Capability | Description |
|------------|-------------|
| Server Allocation | Automated allocation and release of baremetal servers |
| Cloud-Init Provisioning | Server initialization using cloud-init templates |
| Hardware Secret Management | Secure handling of hardware credentials and access keys |

**Supported Architecture:** AMD64

**Supported OS:** Ubuntu 20.04, RHEL 9

**Use Case:** Physical / Edge / High-Performance

**Note:** Autoscaling is not supported for physical hardware.

## CKP CCP Provider (CCS Virtual Machine)

The CCP Provider integrates CKP with **Coredge Cloud Services (CCS)**, enabling Kubernetes clusters on virtual infrastructure.

| Capability | Description |
|------------|-------------|
| VM Lifecycle Management | Automated creation, configuration, and teardown of virtual machines |
| Security Group Management | Network security rules for cluster VMs |
| Network Integration | Subnet and network configuration via the Neutron networking service |
| OS Image Selection | CKP-optimized operating system images for cluster nodes |
| Supported Architectures | AMD64 and ARM64 |

**Supported OS:** Ubuntu 20.04, RHEL 9

**Use Case:** Virtual / Cloud / Elastic Scaling

**Note:** Autoscaling is supported via Karpenter (CPU-based).
