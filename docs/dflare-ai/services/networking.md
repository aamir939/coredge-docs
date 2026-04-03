---
title: Network & VPC
sidebar_position: 5
---

# Network & VPC

In the GPUaaS platform, a VPC (Virtual Private Cloud) is a tenant-isolated virtual network built on top of physical switches using VRF (Virtual Routing and Forwarding) technology. Each VPC provides a completely isolated routing domain — traffic from one tenant's VPC cannot reach another tenant's VPC unless explicitly allowed.

A Subnet is a segment within a VPC. Each subnet has a VLAN ID, a CIDR block (IP range), a gateway, and ACL rules. Subnets are where GPU nodes, control planes, load balancers, and worker nodes actually connect.

The platform automates VPC and subnet lifecycle through the network manager microservice, which interfaces with the network fabric controller to program the physical switches.

## Network Architecture

### Frontend Fabric (Ethernet)

The FE (Frontend) fabric is a managed Ethernet fabric that carries all management, control plane, and tenant Ethernet traffic. It uses VXLAN/EVPN for overlay networking with BGP underlay. The fabric is managed by a centralized fabric controller, which provides an API for programmatic VRF/VLAN/subnet provisioning.

![Network VPC & Fabric Architecture](/img/dflare-ai/06-network-vpc.png)

### VRF Types (The Foundation of VPCs)

The FE fabric has five categories of VRFs, each serving a distinct purpose:

| VRF Type | Purpose | Who Uses It | How VPCs Relate |
|---|---|---|---|
| **Admin VRF** | Hosts all management traffic for the orchestration portal | Platform ops, portal, bare metal controller | Not tenant-visible. Internal management network. |
| **Provisioning VRF** | Dedicated to initial bootstrapping of GPU nodes via PXE | Bare metal controller, GPU nodes during PXE boot | Not tenant-visible. Used only during BM provisioning. |
| **Tenant VRFs (Configurable Pool)** | Dedicated per-tenant. Carries GPU worker registration, cluster CP, workload data plane, storage access. Each tenant gets multiple VLANs. | Tenants, GPU workers, K8s/Slurm clusters | This IS the tenant's VPC. Portal VPC maps to one of these. |
| **Outside Infra VRF** | Connects to external infrastructure for DNS, NTP, Syslog, LDAP/AD | All nodes (shared services) | Not tenant-visible. Shared service connectivity. |
| **VRF Default (Infra)** | Underlay VRF for the FE fabric. Basic IP reachability between switches. | Fabric switches only | Not tenant-visible. Physical transport layer. |

### Backend Fabric (InfiniBand)

Separate from the Ethernet FE fabric, an InfiniBand backend fabric managed by the IB fabric manager handles GPU-to-GPU communication. Tenant isolation on IB is achieved via partition keys — each tenant gets a unique partition key, and only their GPU nodes' HCA GUIDs are added to that partition. This ensures GPU-to-GPU RDMA/collective communication traffic is completely isolated between tenants.

## Portal User Experience

From the portal, users interact with VPCs and subnets as logical networking constructs. They don't see VRFs, VLANs, fabric controllers, or switches.

| Action | What the User Does in Portal | What It Maps To (Backend) |
|---|---|---|
| **Create VPC** | Names the VPC, selects project/org assignment | Allocates a pre-created tenant VRF from the pool |
| **Add Subnet** | Specifies subnet name, CIDR, gateway. Selects purpose. | Allocates a pre-created VLAN within the tenant VRF |
| **Assign VPC to Cluster** | Selects VPC/subnet for CP, workers, LB | VLANs configured on GPU nodes' switch ports |
| **Delete VPC** | Removes entire VPC (all subnets must be empty) | Deallocates tenant VRF. Returns to pool |

## Backend Network Provisioning Flows

### Flow 1 — Create New Network (Dynamic Provisioning)

1. **User Request** — Tenant requests new VPC/subnet via portal UI or API
2. **Portal → Network Manager** — Portal sends request with tenant ID, project ID, CIDR, gateway, VPC name
3. **Network Manager → Fabric Controller** — Calls fabric controller REST API to create VRF + VLAN/VXLAN segment + subnet/gateway + ACL rules
4. **Fabric Controller → Switches** — Fabric controller pushes config to physical leaf and spine switches. VRF, VLAN, SVI, ACLs programmed
5. **Response** — Fabric controller returns VLAN ID, VXLAN VNI, subnet CIDR, gateway IP, VRF name
6. **Store in DB** — Portal stores VPC/subnet metadata in orchestration DB and associates with tenant/project
7. **Firewall (Manual)** — Network admin configures firewall rules on the perimeter firewall for the new network

### Flow 2 — Allocate Pre-Created Network

In production, tenant networks are often pre-created by the fabric admin to ensure consistency and compliance:

1. **Admin Pre-Creates** — Fabric admin creates network segment in fabric controller: VLAN/VXLAN ID, subnet, gateway, ACLs, routing policies
2. **User Requests** — Tenant requests VPC allocation via portal. Selects pre-created network by reference ID
3. **Ownership Update** — Portal calls network manager with Allocate VPC action + tenant/org/project ID
4. **Metadata Link** — Network manager updates ownership in DB. No fabric controller API call needed — network already exists
5. **Ready** — Tenant can now deploy clusters and workloads on the assigned network

## Network in Platform Workflows

### During Bare Metal Provisioning

1. **PXE Boot** — GPU node's NIC broadcasts DHCP Discover on its inband VLAN *(Inband VLAN)*
2. **DHCP Relay** — DHCP request relayed to bare metal controller *(Provider Tenant VLAN)*
3. **OS Install** — Golden image downloaded from bare metal controller over inband VLAN *(Inband VLAN)*
4. **Agent Connect** — Agent connects to portal over management network *(Management VLAN)*

### During Cluster Creation

1. **VIP/LB Creation** — Control plane VIP created on tenant CP subnet *(Tenant VLAN - Control Plane)*
2. **Worker Join** — GPU workers join K8s cluster over tenant network *(Tenant VLAN - GPU Workers)*
3. **CNI Overlay** — CNI plugin creates pod overlay on top of tenant VLAN *(Tenant VLAN - overlay)*
4. **LB Assignment** — External-facing LB IPs allocated from tenant LB subnet *(Tenant VLAN - Load Balancer)*
5. **Agent Instructions** — Portal sends bootstrap/deployment via agent gRPC *(Management VLAN)*

### During Workload Execution

| Traffic Type | Network Path | Protocol |
|---|---|---|
| GPU-to-GPU (training) | InfiniBand backend fabric (partition key isolated) | RDMA / Collective Comms (high-bandwidth) |
| GPU-to-Storage | InfiniBand → Parallel Filesystem | Filesystem / RDMA |
| Pod-to-Pod | Tenant VLAN via CNI overlay | Overlay (configurable) |
| External access | Tenant LB VLAN → Ingress Controller | HTTP/HTTPS |
| Monitoring metrics | Management VLAN / internal cluster | HTTP (metrics endpoints) |

## Network Security Model

| Layer | Mechanism | Details |
|---|---|---|
| **Tenant Isolation** | VRF (separate routing table per tenant) | Dedicated VRF per tenant VPC. VXLAN/EVPN ensures overlay isolation |
| **Subnet Isolation** | VLAN + ACLs | Each subnet is a separate VLAN. ACLs restrict inter-subnet communication |
| **IB Isolation** | Partition Key | InfiniBand traffic isolated per tenant. Only tenant GPU HCA GUIDs added to partition |
| **Firewall** | Perimeter Firewall | Stateful firewall with per-tenant rules. L3 Out from each tenant VRF through firewall |
| **Authentication** | OAuth2/JWT via IAM | All network API calls require valid JWT. Tenants manage only their own VPCs |
| **Transport** | TLS 1.2+, mTLS, HSTS | All API communication encrypted. Fabric controller API calls use TLS |
| **Audit** | Centralized logging, object storage backup | All operations logged with correlation ID. SIEM integration supported |
