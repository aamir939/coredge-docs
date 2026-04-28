---
title: Compute Services
sidebar_position: 1
---

# Compute Services

**Business Value:** CCP delivers a complete compute portfolio — virtual machines, containerized workloads, and bare metal — all provisioned through one self-service portal, governed by one RBAC system, and tracked by one metering engine. Teams provision the right compute for the right workload without operations team intervention.

## Compute Service Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Virtual Machine (VM)</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>On-demand VMs with configurable flavors, OS images, network attachment, and storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Container as a Service (CaaS)</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Managed Kubernetes clusters with self-service deployment, scaling, and lifecycle management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Bare Metal as a Service (BMaaS)</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Dedicated physical servers provisioned on-demand for workloads requiring maximum performance</td></tr>
  </tbody>
</table>

## Virtual Machine (VM)

CCP provides self-service virtual machine provisioning backed by OpenStack (v2023.2) through the CCP - Cirrus Cloud Platform IaaS orchestrator. Users select from pre-configured flavors and images, attach network interfaces and storage volumes, and deploy production VMs in minutes.

### VM Capabilities

- **Flavor Catalogue:** Administrators define flavors (vCPU, RAM, root disk combinations) in the Admin Console; users select from available options in their cell
- **OS Image Library:** Standard OS images (Linux distributions, Windows Server) managed centrally; tenants can register custom images
- **Network Attachment:** VMs attach to tenant VPC subnets with configurable security groups and public IP assignment
- **Storage Integration:** Root volumes on OpenStack block storage; additional data volumes attachable post-deployment
- **Availability Zone Placement:** Users can specify AZ placement for latency, redundancy, and compliance requirements
- **Instance Actions:** Console access, start, stop, reboot, resize, snapshot, and deletion via portal or API
- **GPU Support:** GPU-enabled flavors available for AI/ML and graphics workloads on appropriate hardware

### VM Lifecycle

1. **Select Flavor & Image** — Choose from catalogue of pre-defined compute flavors and OS images
2. **Configure Network** — Attach to VPC subnet; optionally assign public IP; configure security group rules
3. **Attach Storage** — Root volume pre-attached; additional block volumes configurable at launch or post-deployment
4. **Deploy** — Portal triggers orchestration workflow; VM becomes available in minutes
5. **Manage** — Monitor, resize, snapshot, or decommission through the portal; all actions tracked for metering

## Container as a Service (CaaS)

CCP delivers Kubernetes-based containerized workloads through Cloud Orbiter, the Kubernetes orchestrator component. The platform manages the full Kubernetes cluster lifecycle — provisioning, upgrades, scaling, and decommissioning — through the self-service portal.

### CaaS Capabilities

- **Cluster Provisioning:** Self-service creation of Kubernetes clusters; Cloud Orbiter manages control plane and worker node lifecycle
- **Cluster Controller and Agent:** The Cluster Controller centralizes Kubernetes API access; agents deployed on each cluster establish secure outbound connections to the controller
- **Application Deployment:** Deploy containerized applications directly from the portal; supports Helm charts, Kubernetes manifests, and container registry integration
- **Container Registry:** Built-in container registry for air-gapped deployments; push and pull custom images within the platform
- **Observability:** Integrated cluster metrics via observability-ui; CPU, memory, pod health, and deployment status visible in the portal
- **Terminal Access:** Browser-based Kubernetes shell (orbiter-term) for direct cluster operations without external kubectl configuration
- **Scaling:** Horizontal pod autoscaling and manual worker node scaling through the portal

### Kubernetes Cluster Management

CCP uses the Coredge Kubernetes Platform (CKP) as the underlying Kubernetes distribution, providing enterprise-grade cluster management with:

- Production-ready Kubernetes with CKP distribution
- Cluster agent architecture for secure multi-cluster management
- Centralized kubeconfig and API proxy via Cluster Controller
- Per-cluster monitoring integration with Prometheus and Grafana

## Bare Metal as a Service (BMaaS)

For workloads that require direct hardware access — databases requiring maximum I/O performance, HPC workloads, GPU compute, or applications where virtualization overhead is unacceptable — CCP provides Bare Metal as a Service through MaaS (Metal as a Service, v3.4.9) integration via the baremetal-plugin microservice.

### BMaaS Capabilities

- **Self-Service Provisioning:** Users request bare metal servers through the portal; automated provisioning via MaaS handles OS installation and configuration
- **Server Catalogue:** Platform administrators define server types in the Admin Console; users select from available bare metal flavors
- **OS Deployment:** Golden OS images deployed automatically; server moves from powered-off to workload-ready without manual intervention
- **Network Configuration:** Bare metal servers integrated into tenant VPC networking; management and workload traffic segregated
- **Storage Attachment:** NetApp-backed block and file storage attachable to bare metal nodes; high IOPS volumes for database and HPC workloads
- **Lifecycle Management:** Commission, decommission, and re-provision through the portal; full metering of node-hours from allocation to release

### BMaaS Use Cases

- High-performance database servers requiring direct disk access
- HPC and AI/ML workloads requiring maximum compute density
- Network functions and appliances requiring dedicated hardware
- Legacy applications that cannot be virtualized
- Security-sensitive workloads where shared hypervisor infrastructure is not acceptable

## Platform Scalability

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Dimension</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capacity</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Virtual Machines</td><td style={{padding: '3px 12px'}}>Up to 50,000 VMs per deployment</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Container Pods</td><td style={{padding: '3px 12px'}}>Up to 200,000 pods per deployment</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Scalability</td><td style={{padding: '3px 12px'}}>Worker nodes added on demand without downtime</td></tr>
    <tr><td style={{padding: '3px 12px'}}>IaaS Orchestrator</td><td style={{padding: '3px 12px'}}>OpenStack v2023.2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Bare Metal Provisioning</td><td style={{padding: '3px 12px'}}>MaaS v3.4.9</td></tr>
  </tbody>
</table>

## Compute Metering

All compute resources are metered from the moment of allocation:

- **VM-Hours:** Tracked from VM creation to deletion; billed per vCPU and RAM allocation
- **Container Cluster-Hours:** Tracked per cluster from provisioning to decommission
- **Bare Metal Node-Hours:** Tracked from server allocation to release; precise timestamp-based billing
- **Quota Enforcement:** Quotas enforced at Tenant and Cell level in real time — new compute requests blocked when quota is reached
