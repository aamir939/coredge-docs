---
title: Networking Services
sidebar_position: 3
---

# Networking Services

**Business Value:** CCP delivers a complete virtual networking stack through the self-service portal — from isolated private cloud networks to global load balancing, VPN connectivity, firewalls, and DNS. Every networking resource is tenant-isolated, RBAC-governed, and metered from the moment of creation.

## Networking Service Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Virtual Private Cloud (VPC)</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Isolated virtual network environment with configurable subnets and routing</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Application Load Balancer</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>HTTP/HTTPS Layer 7 load balancing with path-based routing and SSL termination</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network Load Balancer</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>TCP Layer 4 load balancing for high-throughput and latency-sensitive workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPN Gateway — Site-to-Site</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>IPsec S2S VPN for secure connectivity between on-premises networks and the cloud VPC</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPN Gateway — Point-to-Site</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Remote user VPN access to cloud resources from individual devices</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Firewall</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Stateful perimeter firewall with ACL-based traffic control</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Public IP</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Managed public IP address allocation and assignment for internet-facing resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NAT Gateway</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Outbound internet access for private subnet resources without exposing them publicly</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Content Delivery Network (CDN)</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Distributed content caching and delivery for web and media workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MPLS Connectivity — Partner Interconnect</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Dedicated private connectivity via partner network providers</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MPLS Connectivity — Dedicated Interconnect</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Direct physical dedicated connection to the cloud platform</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Bandwidth as a Service (BWaaS)</td><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>QoS-managed bandwidth allocation and traffic shaping</td></tr>
  </tbody>
</table>

## Virtual Private Cloud (VPC)

A VPC is a tenant-isolated virtual network environment. Each VPC provides a completely private routing domain — traffic from one tenant's VPC cannot reach another tenant's VPC unless explicitly configured. VPCs are the foundational networking construct in CCP, and all other networking services (load balancers, VPNs, firewalls) operate within or at the boundary of VPCs.

### VPC Architecture

VPCs in CCP are backed by OpenStack Neutron networking with VXLAN/EVPN overlay. Each VPC consists of:

- **Subnets:** CIDR-defined IP ranges within the VPC; each subnet has a gateway and can be associated with security groups
- **Routing Tables:** Control how traffic flows between subnets and to external destinations
- **Security Groups:** Stateful firewall rules applied at the VM network interface level
- **Internet Gateway / NAT Gateway:** Controls outbound internet access from private subnets

### VPC Capabilities

- **Self-Service Creation:** Users create VPCs and subnets from the portal with customizable CIDR ranges
- **Multi-Subnet Design:** Multiple subnets per VPC for workload segmentation (application, database, management tiers)
- **Security Groups:** Ingress and egress rules per VM network interface; stateful connection tracking
- **VPC Peering:** Cross-VPC connectivity for multi-tier applications spanning different cells
- **Tenant Isolation:** VPC routing is fully isolated between tenants; no cross-tenant traffic without explicit peering or gateway configuration

## Load Balancers

### Application Load Balancer (HTTP/HTTPS)

The Application Load Balancer (ALB) operates at Layer 7, providing HTTP and HTTPS load balancing with advanced routing capabilities:

- **SSL Termination:** Offload TLS from backend servers; manage certificates centrally
- **Path-Based Routing:** Route requests to different backend pools based on URL path patterns
- **Host-Based Routing:** Route based on HTTP Host header for multi-domain applications
- **Health Checks:** Configurable HTTP health checks; automatic removal of unhealthy backends
- **Session Persistence:** Cookie-based session affinity for stateful applications
- **Access Logging:** HTTP request logs for auditing and analytics

### Network Load Balancer (TCP)

The Network Load Balancer (NLB) operates at Layer 4 for high-throughput, low-latency applications:

- **TCP Protocol Support:** Direct TCP load balancing without protocol inspection overhead
- **Ultra-Low Latency:** Pass-through mode for minimum latency; preserves client IP address
- **Static IP:** Assign a static IP or public IP to the NLB for DNS resolution stability
- **High Throughput:** Designed for database connections, streaming, and latency-sensitive APIs
- **Health Checks:** TCP-level health checks for backend availability

## VPN Gateway

VPN services are delivered via Zscaler integration, providing enterprise-grade S2S and P2S VPN connectivity.

### Site-to-Site VPN

Connect on-premises networks, remote data centers, or partner networks directly to the tenant VPC over an encrypted IPsec tunnel:

- **IPsec/IKEv2:** Industry-standard encryption protocols
- **BGP Route Exchange:** Dynamic routing for complex multi-site topologies
- **Redundant Tunnels:** Active-active or active-passive tunnel configuration for resilience
- **Policy-Based and Route-Based:** Both VPN modes supported for compatibility with different remote VPN appliances

### Point-to-Site VPN

Enable individual users to securely connect to cloud resources from their devices:

- **Remote User Access:** Employees, contractors, and administrators connect securely without requiring office network presence
- **Client Certificates:** Certificate-based authentication for strong identity verification
- **Split Tunneling:** Route only cloud-bound traffic through the VPN; local traffic goes direct

## Firewall

CCP integrates with enterprise firewall platforms (CheckPoint, Palo Alto) to provide stateful perimeter firewall protection at the VPC boundary.

- **ACL-Based Rules:** Ingress and egress access control lists per VPC and subnet
- **Stateful Inspection:** Connection state tracking; return traffic automatically permitted
- **DMZ Support:** Create demilitarized zones for internet-facing workloads with controlled access to internal tiers
- **Threat Intelligence:** Integration with firewall vendor threat feeds for known-malicious IP blocking
- **Logging:** All firewall rule hits logged and available via Log Analyzer; SIEM integration supported

## Public IP and NAT Gateway

### Public IP Management

Public IP addresses are managed via TCPWare (ccp-1.14.0-rc5) integration:

- **On-Demand Allocation:** Allocate public IPs from the regional pool through the portal
- **Floating IP:** Associate and disassociate public IPs from VMs and load balancers dynamically
- **DNS Integration:** Public IPs registered automatically in DNS for consistent hostname resolution
- **Reverse DNS:** Configurable reverse DNS (PTR records) for public-facing services

### NAT Gateway

NAT Gateway provides outbound internet connectivity for private subnet resources without exposing them to inbound internet traffic:

- **Outbound Access:** Private VMs access internet services (package updates, APIs, telemetry) through NAT
- **No Inbound Exposure:** NAT provides outbound connectivity only; no inbound connections reach private subnets
- **Elastic IP:** NAT Gateway uses a stable public IP for consistent outbound source address
- **Availability:** NAT Gateway deployed per AZ for high availability

## DNS Services

CCP includes integrated DNS management as part of the Foundation Services layer:

- **Private DNS Zones:** Create internal DNS zones visible only within the tenant VPC
- **Public DNS Zones:** Manage public-facing DNS for internet-accessible services
- **Automatic Registration:** VMs and load balancers register DNS entries automatically on provisioning
- **Dynamic Updates:** DNS records updated automatically on IP changes, VM reassignment, or floating IP reallocation

## Network Metering

All networking resources are metered for FinOps visibility:

- **Public IP:** Metered per IP per hour from allocation to release
- **VPN Gateway:** Metered per gateway per hour; data transfer metered per GB
- **Load Balancer:** Metered per LCU (Load Balancer Capacity Unit) per hour
- **NAT Gateway:** Metered per gateway per hour; data processed metered per GB
- **CDN (MVP2):** Data transfer metered per GB per region
