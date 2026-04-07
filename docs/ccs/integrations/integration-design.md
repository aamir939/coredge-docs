---
title: Integration Design Document
sidebar_position: 1
---

# Integration Design Document

## Document Control

### Version History

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Version</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Date</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Author</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Reviewed By</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Changes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>1.0</td>
      <td style={{padding: '3px 12px'}}>Feb 2026</td>
      <td style={{padding: '3px 12px'}}>Platform Arch. Team</td>
      <td style={{padding: '3px 12px'}}>Integration Team</td>
      <td style={{padding: '3px 12px'}}>Initial release</td>
    </tr>
  </tbody>
</table>

### Acronyms & Abbreviations

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Acronym</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>BMaaS</td>
      <td style={{padding: '3px 12px'}}>Bare Metal as a Service</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS</td>
      <td style={{padding: '3px 12px'}}>Cirrus Cloud Suite</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CMP</td>
      <td style={{padding: '3px 12px'}}>Cloud Management Platform</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPUaaS</td>
      <td style={{padding: '3px 12px'}}>GPU as a Service</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}></td>
      <td style={{padding: '3px 12px'}}>Runtime Environment (Coredge GPUaaS Platform)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>IAM</td>
      <td style={{padding: '3px 12px'}}>Identity and Access Management</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>IB</td>
      <td style={{padding: '3px 12px'}}>InfiniBand</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>JWT</td>
      <td style={{padding: '3px 12px'}}>JSON Web Token</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>MAAS</td>
      <td style={{padding: '3px 12px'}}>Metal as a Service (Canonical)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>NDFC</td>
      <td style={{padding: '3px 12px'}}>Nexus Dashboard Fabric Controller (Cisco)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>OCP</td>
      <td style={{padding: '3px 12px'}}>OpenShift Container Platform</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>RBAC</td>
      <td style={{padding: '3px 12px'}}>Role-Based Access Control</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>ABAC</td>
      <td style={{padding: '3px 12px'}}>Attribute-Based Access Control</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>VPC</td>
      <td style={{padding: '3px 12px'}}>Virtual Private Cloud</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>VRF</td>
      <td style={{padding: '3px 12px'}}>Virtual Routing and Forwarding</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>VXLAN</td>
      <td style={{padding: '3px 12px'}}>Virtual Extensible LAN</td>
    </tr>
  </tbody>
</table>

## 1. Purpose and Scope

### 1.1 Purpose

This Integration Design Document (IDD) defines the technical integration architecture, data flows, API contracts, security controls, and operational procedures for connecting with the Coredge GPUaaS Platform (Runtime Environment). The document serves as the authoritative reference for development, testing, operations, and governance teams involved in delivering unified GPU-accelerated cloud services on Coredge's sovereign cloud infrastructure.

### 1.2 Scope

The integration covers the following functional domains:

- Identity and Access Management (IAM) — Keycloak federation between CCS and GPUaaS
- Compute — GPU as a Service provisioning via OpenStack APIs and Coredge Bare Metal
- Container Orchestration — Kubernetes (Cloud Orbiter / OCP) cluster lifecycle integration
- Network — VPC, VRF, VLAN, and VXLAN/EVPN fabric orchestration (Cisco NDFC)
- Storage — NetApp (CCS) and DDN AI400 / VAST Data (GPUaaS) integration paths
- Metering and Billing — orbiter-metering to billing pipeline
- Monitoring and Alerting — Prometheus / VictoriaMetrics / Zabbix federation
- Security — mTLS service mesh, RBAC/ABAC policy enforcement, audit trails

### 1.3 Out of Scope

- Hardware procurement, cabling, and physical data center operations
- Penetration testing or third-party security audits
- Day-2 operations for underlying bare-metal physical infrastructure
- Application-layer changes unrelated to integration APIs
- MVP2 and MVP3 services unless explicitly noted

## 2. System Overview

### 2.1 Cirrus Cloud Suite (CCS)

Coredge is building a sovereign cloud platform for government and enterprise customers across India. The Cloud Management Platform layer is delivered by Cirrus Cloud Suite (CCS), which provides a hyper-scaler-grade self-service portal spanning IaaS, PaaS, and SaaS services. CCS is composed of the following orchestration layers:

- Cirrus Cloud Suite (CCS) — Cloud Management Platform and self-service portal
- Cirrus Cloud Platform (CCP) — IaaS orchestrator (OpenStack-based)
- Cloud Orbiter — Kubernetes orchestrator for container workloads

CCS runs as a microservices application deployed on Kubernetes (management cluster) within each availability zone, with active-passive high availability across two AZs per region and global services replicated across North and South regions.

### 2.2 Coredge GPUaaS Platform — Runtime Environment

The Coredge GPUaaS Platform is a purpose-built, bare-metal GPU cloud that provisions, orchestrates, and meters NVIDIA (H100) GPU infrastructure. It delivers:

- Bare Metal Provisioning via Canonical MAAS over IPMI/PXE
- Kubernetes Cluster Orchestration on bare metal GPU nodes
- Slurm HPC Cluster Orchestration via Slinky Operator
- High-performance storage via DDN AI400 (Lustre/InfiniBand) and VAST Data (CSI/S3)
- Network isolation via Cisco NDFC (VXLAN/EVPN, per-tenant VRFs)
- Full metering pipeline (DCGM, Prometheus, VictoriaMetrics, orbiter-metering)

### 2.3 Integration Relationship

CCS acts as the unified customer-facing control plane. The Coredge GPUaaS Platform acts as a specialized compute substrate exposed through CCS service catalogue entries. When a customer provisions GPU as a Service (GPUaaS) through the our Cloud Portal, CCS delegates to Coredge platform APIs for resource lifecycle management, while retaining control of IAM, billing aggregation, quota governance, and customer onboarding.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Concern</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Owner: CCS</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Owner: Coredge GPUaaS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Customer Portal / UI</td>
      <td style={{padding: '3px 12px'}}>CCS Self-Service Console</td>
      <td style={{padding: '3px 12px'}}>No direct portal exposure</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Identity &amp; SSO</td>
      <td style={{padding: '3px 12px'}}>Keycloak (CCS Auth) — Federation</td>
      <td style={{padding: '3px 12px'}}>Keycloak (GPUaaS) — realm per tenant</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Service Catalogue</td>
      <td style={{padding: '3px 12px'}}>CCS Service Catalogue + subscription</td>
      <td style={{padding: '3px 12px'}}>GPUaaS API endpoints</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Compute Provisioning</td>
      <td style={{padding: '3px 12px'}}>API delegation via OpenStack / Coredge APIs</td>
      <td style={{padding: '3px 12px'}}>Bare Metal Provisioning (MAAS)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Kubernetes Orchestration</td>
      <td style={{padding: '3px 12px'}}>Cloud Orbiter (CCS) for CaaS</td>
      <td style={{padding: '3px 12px'}}>compass-orchestrator for GPU K8s</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Network Fabric</td>
      <td style={{padding: '3px 12px'}}>VPC / Firewall / LB (OpenStack + CheckPoint/Palo Alto)</td>
      <td style={{padding: '3px 12px'}}>VRF/VLAN (Cisco NDFC) for GPU nodes</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Storage</td>
      <td style={{padding: '3px 12px'}}>NetApp (Block, Object, File)</td>
      <td style={{padding: '3px 12px'}}>DDN AI400 (GPU workload), VAST (platform)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Metering &amp; Billing</td>
      <td style={{padding: '3px 12px'}}>orbiter-metering aggregation, billing</td>
      <td style={{padding: '3px 12px'}}>DCGM, Prometheus, orbiter-metering</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Monitoring</td>
      <td style={{padding: '3px 12px'}}>Zabbix, Grafana (CCS)</td>
      <td style={{padding: '3px 12px'}}>VictoriaMetrics, Prometheus, Grafana</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Quota Enforcement</td>
      <td style={{padding: '3px 12px'}}>CCS quota service per tenant/cell</td>
      <td style={{padding: '3px 12px'}}>orbiter-metering + domain quota</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Backup &amp; DR</td>
      <td style={{padding: '3px 12px'}}>Veritas backup agent, geo-replicated object storage</td>
      <td style={{padding: '3px 12px'}}>VAST S3 (pg_dump, mongodump, etcd)</td>
    </tr>
  </tbody>
</table>

## 3. Integration Architecture

### 3.1 Architecture Principles

- **API-First:** All integrations are implemented through well-defined REST APIs or gRPC contracts with versioned endpoints.
- **Loose Coupling:** CCS and GPUaaS communicate through defined interface contracts; internal implementation changes in either system must not break the integration.
- **Zero-Trust Security:** Every inter-service call requires mutual authentication (mTLS) and JWT-based authorization. No implicit trust based on network location.
- **Single Source of Truth per Domain:** CCS owns customer identity and billing records; Coredge GPUaaS owns GPU hardware state and real-time metrics.
- **Idempotency:** All provisioning API calls must be idempotent. Retry logic must not produce duplicate resources.
- **Observability:** Every integration point emits structured logs with correlation IDs for end-to-end request tracing.

### 3.2 Logical Integration Layers

The integration is organized into four logical layers:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Name</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>L1</td>
      <td style={{padding: '3px 12px'}}>Identity &amp; Access</td>
      <td style={{padding: '3px 12px'}}>Federated Keycloak realms, JWT propagation, RBAC/ABAC synchronization between CCS and GPUaaS.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>L2</td>
      <td style={{padding: '3px 12px'}}>Control Plane</td>
      <td style={{padding: '3px 12px'}}>Resource lifecycle APIs (provision, scale, delete) for GPU Bare Metal, Kubernetes clusters, VPCs, and storage volumes.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>L3</td>
      <td style={{padding: '3px 12px'}}>Data Plane</td>
      <td style={{padding: '3px 12px'}}>Tenant networking fabric (VXLAN/EVPN), InfiniBand storage access (DDN/UFM), and workload traffic paths.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>L4</td>
      <td style={{padding: '3px 12px'}}>Observability &amp; Billing</td>
      <td style={{padding: '3px 12px'}}>Metering event streams, quota synchronization, billing aggregation, monitoring federation, and audit log consolidation.</td>
    </tr>
  </tbody>
</table>

### 3.3 Integration Topology

The following describes the high-level request flow from customer to GPU hardware:

1. Customer accesses the CCS Cloud Portal (CCS Self-Service Console) authenticated identity, federated through CCS Keycloak.
2. Customers place a GPU service order through the CCS service catalogue. Coredge calls the CCS onboarding API (`POST /api/organizations`) to create or update the tenant.
3. CCS validates the request against tenant quota (orbiter-metering quota service), then dispatches a provisioning event to the Coredge GPUaaS API (baremetal-manager or compass-orchestrator) over the private integration network.
4. Coredge GPUaaS executes the provisioning pipeline: network fabric setup (Cisco NDFC), IPMI/PXE boot (MAAS), OS install, GPU agent deployment, storage allocation (DDN/UFM), and cluster formation (K8s or Slurm).
5. The provisioned resource is registered back in CCS inventory. Tenant gains self-service access from the CCS portal.
6. GPU usage data flows from DCGM Exporter to Prometheus to VictoriaMetrics to orbiter-metering. CCS pulls aggregated billing records for invoice generation.

## 4. Integration Points

### 4.1 Identity and Access Management

#### 4.1.1 Overview

Both CCS and the Coredge GPUaaS Platform use Keycloak as their Identity Provider. The integration federates these two Keycloak deployments so that a customer authenticated on CCS does not need to re-authenticate when their workloads are dispatched to the GPUaaS platform.

#### 4.1.2 Federation Model

CCS Keycloak (master IdP) issues signed JWT tokens (RS256) containing tenant realm, role claims, and project/organization attributes. The Coredge GPUaaS Keycloak is configured as a relying party — it trusts tokens issued by CCS Keycloak after validating the token signature against the CCS Keycloak public key endpoint (JWKS URI).

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>Coredge serves as the canonical identity store. All customer accounts are created, modified, and deactivated exclusively. CCS Keycloak federation uses SAML 2.0 or OIDC, depending on provider's configuration.</div>
  </div>
</div>

#### 4.1.3 Token Structure

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>JWT Claim</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Source</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Usage in GPUaaS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}><code>sub</code></td>
      <td style={{padding: '3px 12px'}}>CCS Keycloak</td>
      <td style={{padding: '3px 12px'}}>User unique identifier — maps to Coredge domain user record</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>realm_name</code></td>
      <td style={{padding: '3px 12px'}}>CCS Keycloak</td>
      <td style={{padding: '3px 12px'}}>Tenant realm — maps to GPUaaS Domain (tenant isolation boundary)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>roles</code></td>
      <td style={{padding: '3px 12px'}}>CCS Keycloak</td>
      <td style={{padding: '3px 12px'}}>RBAC roles (e.g., Cell Administrator, Cell VM Admin) — translated to GPUaaS Project Admin or Domain Admin</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>domain_id</code></td>
      <td style={{padding: '3px 12px'}}>CCS (custom claim)</td>
      <td style={{padding: '3px 12px'}}>CCS tenant identifier — maps to GPUaaS Domain ID</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>project_id</code></td>
      <td style={{padding: '3px 12px'}}>CCS (custom claim)</td>
      <td style={{padding: '3px 12px'}}>CCS cell/project identifier — maps to GPUaaS Project scope</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>org_id</code></td>
      <td style={{padding: '3px 12px'}}>CCS (custom claim)</td>
      <td style={{padding: '3px 12px'}}>CCS organization identifier — maps to GPUaaS Organization scope</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}><code>exp</code></td>
      <td style={{padding: '3px 12px'}}>Keycloak</td>
      <td style={{padding: '3px 12px'}}>Token expiry: 5–15 minute TTL for access tokens</td>
    </tr>
  </tbody>
</table>

#### 4.1.4 Role Mapping

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCS Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>GPUaaS Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Effective Permissions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Super Administrator</td>
      <td style={{padding: '3px 12px'}}>Platform Super Admin (scoped to domain)</td>
      <td style={{padding: '3px 12px'}}>Full control within tenant domain</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Administrator</td>
      <td style={{padding: '3px 12px'}}>Domain Admin</td>
      <td style={{padding: '3px 12px'}}>Full domain control: clusters, BM, networks, quotas</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Administrator</td>
      <td style={{padding: '3px 12px'}}>Project Admin</td>
      <td style={{padding: '3px 12px'}}>Full project control: GPU clusters, storage, networks</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell VM Admin</td>
      <td style={{padding: '3px 12px'}}>Project Admin (Compute scope)</td>
      <td style={{padding: '3px 12px'}}>GPU node and cluster lifecycle management</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Container Admin</td>
      <td style={{padding: '3px 12px'}}>Project Admin (K8s scope)</td>
      <td style={{padding: '3px 12px'}}>Kubernetes cluster creation, management, workload deployment</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Viewer / Tenant Viewer</td>
      <td style={{padding: '3px 12px'}}>Viewer</td>
      <td style={{padding: '3px 12px'}}>Read-only access to resources and dashboards</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Billing Admin</td>
      <td style={{padding: '3px 12px'}}>Domain Admin (Billing scope only)</td>
      <td style={{padding: '3px 12px'}}>Metering dashboard, cost reports, quota usage</td>
    </tr>
  </tbody>
</table>

#### 4.1.5 Authentication Flow

1. Customer logs into CCS Cloud Portal — CCS redirects to identity provider (SAML/OIDC).
2. It authenticates the user (with optional MFA: TOTP, SMS, or hardware key).
3. Coredge issues an assertion to CCS Keycloak; CCS Keycloak issues a signed JWT containing domain, org, project claims.
4. CCS backend services validate the JWT on every request (signature + expiry + realm).
5. When CCS dispatches a request to the Coredge GPUaaS API, it includes the JWT in the Authorization header. GPUaaS orbiter-auth validates the token against the CCS Keycloak JWKS endpoint.
6. orbiter-auth performs RBAC (role check) + ABAC (domain/project attribute check) before allowing the request to proceed.

### 4.2 GPU Compute — Bare Metal and VM Provisioning

#### 4.2.1 GPU as a Service Integration

GPU as a Service (GPUaaS) is listed in the CCS Service Catalogue. Integration is via OpenStack APIs (for VM-based GPU slices where applicable) and via the Coredge baremetal-manager API for dedicated bare-metal GPU node provisioning. Both paths are fronted by the CCS API Gateway.

#### 4.2.2 Bare Metal GPU Provisioning — API Contract

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Endpoint</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Request Body</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>POST</td>
      <td style={{padding: '3px 12px'}}><code>/api/baremetal-manager/allocate</code></td>
      <td style={{padding: '3px 12px'}}><code>&#123;flavor, os_image, network_id, project_id, tenant_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Allocate a bare-metal GPU node to a tenant. Triggers NDFC network setup, MAAS provisioning.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/baremetal-manager/&#123;node_id&#125;/status</code></td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>Poll provisioning state: PENDING, PROVISIONING, ACTIVE, FAILED.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>POST</td>
      <td style={{padding: '3px 12px'}}><code>/api/baremetal-manager/&#123;node_id&#125;/release</code></td>
      <td style={{padding: '3px 12px'}}><code>&#123;drain: true&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Drain workloads and release node back to available pool.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/baremetal-manager/flavors</code></td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>List available GPU node flavors (H100 8-GPU, etc.)</td>
    </tr>
  </tbody>
</table>

#### 4.2.3 End-to-End Provisioning Data Flow

1. CCS Self-Service Console receives a GPU node provisioning request from tenant.
2. CCS API Gateway validates the JWT and forwards to platform microservice.
3. Platform service checks quota against orbiter-metering. If quota exceeded, returns HTTP 422 with quota-exceeded error to the tenant.
4. CCS calls `POST /api/baremetal-manager/allocate` on Coredge GPUaaS over the private integration network (mTLS).
5. Coredge baremetal-manager triggers: (a) NDFC network fabric setup — VRF + VLAN allocation, (b) MAAS IPMI power-on + PXE boot, (c) OS install via golden image, (d) Cloud-init, agent deployment.
6. Storage allocation: DDN tenant directory created, NodeMap assigned, IB PKey created via UFM.
7. Agent registers with GPUaaS portal via gRPC (port 8030/8040). Admin approves host.
8. Provisioning state transitions to ACTIVE. GPUaaS notifies CCS via webhook (`POST /ccs/webhooks/baremetal/state-change`).
9. CCS registers the node in its inventory, updates tenant resource view. WebSocket notification sent to portal.

### 4.3 Container Orchestration — Kubernetes

#### 4.3.1 Integration Model

CCS delivers Container as a Service (CaaS) via Cloud Orbiter, which supports both OCP (OpenShift Container Platform) and standard Kubernetes clusters. The Coredge GPUaaS Platform delivers GPU-accelerated Kubernetes clusters (via compass-orchestrator) on bare-metal nodes. These two systems integrate at the cluster registration and cluster agent level.

GPU Kubernetes clusters provisioned by Coredge are registered back into CCS Cloud Orbiter using the Cluster Agent protocol (gRPC, port 8030/8040), enabling CCS tenants to manage GPU workloads from the unified CCS portal.

#### 4.3.2 Cluster Registration API

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Endpoint (CCS Cloud Orbiter)</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>POST</td>
      <td style={{padding: '3px 12px'}}><code>/api/orbiter/clusters/register</code></td>
      <td style={{padding: '3px 12px'}}>Register an externally provisioned GPU K8s cluster with Cloud Orbiter. Body: &#123;cluster_name, kubeconfig_secret, node_count, gpu_type, tenant_id, project_id&#125;.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/orbiter/clusters/&#123;cluster_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Get cluster status, node health, GPU availability, addon state.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>POST</td>
      <td style={{padding: '3px 12px'}}><code>/api/orbiter/clusters/&#123;cluster_id&#125;/scale</code></td>
      <td style={{padding: '3px 12px'}}>Scale worker nodes up or down. GPUaaS executes kubeadm join/drain.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>DELETE</td>
      <td style={{padding: '3px 12px'}}><code>/api/orbiter/clusters/&#123;cluster_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Initiate cluster teardown: drain -&gt; kubeadm reset -&gt; deregister -&gt; release BM nodes.</td>
    </tr>
  </tbody>
</table>

#### 4.3.3 GPU Operator Integration

When a GPU Kubernetes cluster is provisioned, the Coredge compass-orchestrator deploys the NVIDIA GPU Operator DaemonSet, which registers GPU resources with the Kubernetes node resource API (`nvidia.com/gpu: 8` per node). These resource labels are propagated to Cloud Orbiter and are available for workload scheduling via node selectors and resource requests in CCS-deployed workloads.

### 4.4 Network Integration

#### 4.4.1 Overview

CCS manages tenant VPC, Firewall, and Load Balancer resources via OpenStack APIs and CheckPoint/Palo Alto integrations. The Coredge GPUaaS Platform manages GPU node networking via Cisco NDFC (VXLAN/EVPN). These two network domains are connected through a defined inter-domain routing policy that allows GPU workload traffic to reach CCS-managed services (e.g., load balancers, object storage endpoints) while maintaining tenant isolation.

#### 4.4.2 Network Segmentation Model

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Network Segment</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Owner</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration Point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant VPC (CCS)</td>
      <td style={{padding: '3px 12px'}}>CCS / OpenStack</td>
      <td style={{padding: '3px 12px'}}>Customer workload network. GPU nodes egress through CCS-managed VPC gateways for external services.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant VRF (GPUaaS)</td>
      <td style={{padding: '3px 12px'}}>Coredge / Cisco NDFC</td>
      <td style={{padding: '3px 12px'}}>GPU bare-metal node isolation. 4 VLANs per tenant: Control Plane, GPU Worker, LB, Reserved.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Node Management VLAN 901</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Cluster agent gRPC communications to GPUaaS portal.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Provisioning VRF VLAN 902</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>MAAS PXE/DHCP relay for OS provisioning. Not exposed to tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>InfiniBand Fabric (UFM PKey)</td>
      <td style={{padding: '3px 12px'}}>Coredge / NVIDIA UFM</td>
      <td style={{padding: '3px 12px'}}>GPU-to-GPU RDMA (NCCL) and GPU-to-DDN storage (Lustre). Per-tenant PKey isolation.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>External / Internet Gateway</td>
      <td style={{padding: '3px 12px'}}>CCS (NAT Gateway)</td>
      <td style={{padding: '3px 12px'}}>GPU nodes access external services (package updates, ML model registries) through CCS NAT Gateway.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS–GPUaaS Private Link</td>
      <td style={{padding: '3px 12px'}}>Both</td>
      <td style={{padding: '3px 12px'}}>Dedicated private network segment for integration API calls between CCS and Coredge GPUaaS. mTLS enforced.</td>
    </tr>
  </tbody>
</table>

#### 4.4.3 VPC Lifecycle Coordination

When a tenant requests a VPC through the CCS portal, CCS calls OpenStack APIs to create the VPC constructs. If GPU bare-metal nodes are allocated to the tenant in the same provisioning request, CCS additionally notifies the Coredge network-manager to allocate a matching tenant VRF. The VRF is linked to the tenant VPC through a pre-configured L3 routing policy on the Palo Alto firewall, enabling east-west traffic between CCS VMs and GPU bare-metal nodes within the same tenant boundary.

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>Dynamic VRF creation in Coredge GPUaaS currently requires a manual firewall rule update on the Palo Alto firewall. Pre-created (pooled) VRF allocation is the preferred path for production deployments.</div>
  </div>
</div>

### 4.5 Storage Integration

#### 4.5.1 Storage Architecture Mapping

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Use Case</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCS Storage (NetApp)</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>GPUaaS Storage</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>VM Block Storage</td>
      <td style={{padding: '3px 12px'}}>NetApp Block (iSCSI/FC)</td>
      <td style={{padding: '3px 12px'}}>Not applicable</td>
      <td style={{padding: '3px 12px'}}>CCS-owned. No integration required.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Object Storage (S3)</td>
      <td style={{padding: '3px 12px'}}>NetApp S3-compatible</td>
      <td style={{padding: '3px 12px'}}>VAST S3 (platform internal)</td>
      <td style={{padding: '3px 12px'}}>Tenant S3 endpoints served from CCS NetApp. GPUaaS uses VAST S3 internally for backup/config only.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>File Storage (NFS)</td>
      <td style={{padding: '3px 12px'}}>NetApp NFS</td>
      <td style={{padding: '3px 12px'}}>DDN Lustre (GPU workloads)</td>
      <td style={{padding: '3px 12px'}}>Separate NFS mounts. GPU workloads use DDN for high-throughput AI/ML data access.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Training Data</td>
      <td style={{padding: '3px 12px'}}>Not applicable</td>
      <td style={{padding: '3px 12px'}}>DDN AI400 (Lustre over IB)</td>
      <td style={{padding: '3px 12px'}}>Accessed by GPU bare-metal nodes via InfiniBand. 4 Tb/s per node aggregate throughput.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Platform DB Backup</td>
      <td style={{padding: '3px 12px'}}>NetApp-backed Veritas agent</td>
      <td style={{padding: '3px 12px'}}>VAST S3 (pg_dump, mongodump, etcd)</td>
      <td style={{padding: '3px 12px'}}>CCS backup: Veritas. GPUaaS backup: VAST S3. Cross-region replication applies to CCS data only.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Config &amp; Logs</td>
      <td style={{padding: '3px 12px'}}>Object storage in local region (5 TB)</td>
      <td style={{padding: '3px 12px'}}>Not applicable</td>
      <td style={{padding: '3px 12px'}}>Managed by CCS only. Backup copied cross-region.</td>
    </tr>
  </tbody>
</table>

#### 4.5.2 Storage Provisioning Data Flow (GPU Workloads)

1. Tenant subscribes to GPU service — CCS creates tenant record and notifies Coredge GPUaaS to create tenant storage allocation.
2. Coredge Storage Plugin (via SSH to DDN MGS) creates tenant directory on Lustre: `/lustre/{tenant-id}/`.
3. NVIDIA UFM creates an InfiniBand PKey for the tenant. All GPU node mlx GUIDs are added as PKey members.
4. A DDN NodeMap is created, mapping the tenant's IB IP address ranges to the tenant directory. Only mapped IPs can mount the filesystem.
5. NFS over VIP is configured for environments requiring Ethernet storage access.
6. Quotas are set on the tenant directory according to the subscribed service tier.
7. NodeMap is activated — tenant's GPU nodes can now access the DDN filesystem over InfiniBand with hardware-level isolation enforced by both UFM PKey and DDN NodeMap (dual isolation).

### 4.6 Metering, Billing, and Quota

#### 4.6.1 Metering Pipeline

The Coredge GPUaaS Platform meters GPU resource consumption at hardware level (15-second granularity) using DCGM Exporter, Node Exporter, Slurm job accounting (slurmdbd), and storage/network telemetry. The orbiter-metering service aggregates these raw metrics into billable usage records and exposes a billing export API consumed by CCS for invoice generation.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Metric</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Source</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Granularity</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Billing Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU-Hours</td>
      <td style={{padding: '3px 12px'}}>DCGM Exporter (per GPU, per node)</td>
      <td style={{padding: '3px 12px'}}>15-sec raw → hourly billable</td>
      <td style={{padding: '3px 12px'}}>GPU-node-hours × rate card</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CPU-Hours</td>
      <td style={{padding: '3px 12px'}}>Node Exporter</td>
      <td style={{padding: '3px 12px'}}>15-sec → hourly</td>
      <td style={{padding: '3px 12px'}}>vCPU-hours × rate card</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Bare Metal Node-Hours</td>
      <td style={{padding: '3px 12px'}}>baremetal-manager (MongoDB state)</td>
      <td style={{padding: '3px 12px'}}>Allocation start/end timestamp</td>
      <td style={{padding: '3px 12px'}}>Node-hours × rate card</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>K8s Cluster-Hours</td>
      <td style={{padding: '3px 12px'}}>compass-orchestrator (MongoDB)</td>
      <td style={{padding: '3px 12px'}}>Cluster create/delete timestamp</td>
      <td style={{padding: '3px 12px'}}>Cluster-hours × rate card</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Slurm Job GPU-Hours</td>
      <td style={{padding: '3px 12px'}}>slurmdbd → MariaDB</td>
      <td style={{padding: '3px 12px'}}>Per job on completion</td>
      <td style={{padding: '3px 12px'}}>AllocGRES (GPU count) × Elapsed × rate</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Storage (DDN)</td>
      <td style={{padding: '3px 12px'}}>DDN Storage Plugin</td>
      <td style={{padding: '3px 12px'}}>Per tenant directory, polled</td>
      <td style={{padding: '3px 12px'}}>GB-hours × rate card</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>InfiniBand Bandwidth</td>
      <td style={{padding: '3px 12px'}}>NVIDIA UFM per PKey</td>
      <td style={{padding: '3px 12px'}}>Real-time, per tenant PKey</td>
      <td style={{padding: '3px 12px'}}>TB transferred × rate (if applicable)</td>
    </tr>
  </tbody>
</table>

#### 4.6.2 Billing Export API (Coredge → CCS)

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Endpoint</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/metering/usage?tenant_id=&#123;id&#125;&amp;from=&#123;ts&#125;&amp;to=&#123;ts&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Retrieve aggregated usage records for a tenant within a time window. Returns GPU-hrs, CPU-hrs, node-hrs, cluster-hrs, storage-GB, per project.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/metering/quota/&#123;tenant_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Current quota usage vs. allocated quota per resource type.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>POST</td>
      <td style={{padding: '3px 12px'}}><code>/api/metering/quota/&#123;tenant_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Update quota allocation (called by CCS when customer upgrades/downgrades subscription).</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GET</td>
      <td style={{padding: '3px 12px'}}><code>/api/metering/export/csv?tenant_id=&#123;id&#125;&amp;period=&#123;month&#125;</code></td>
      <td style={{padding: '3px 12px'}}>Download CSV billing export for a billing period. Compatible with invoice import format.</td>
    </tr>
  </tbody>
</table>

#### 4.6.3 Quota Synchronization Flow

1. Customer subscribes/upgrades GPU service tier on CCS portal.
2. Coredge calls CCS quota management API to update tenant allocation.
3. CCS propagates the new quota to Coredge GPUaaS via `POST /api/metering/quota/{tenant_id}`.
4. orbiter-metering updates the in-memory quota counter. New quota takes effect immediately for subsequent resource requests.
5. If a resource request would exceed quota, the Coredge API returns HTTP 422 (Quota Exceeded). CCS displays the error to the tenant with a prompt to upgrade their subscription.
6. Quota dashboard (80% and 90% warning thresholds) is updated in both CCS portal and Coredge tenant dashboard.

### 4.7 Monitoring and Alerting Integration

#### 4.7.1 Monitoring Stack Federation

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Component</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCS</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>GPUaaS (Coredge)</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Metrics Collection</td>
      <td style={{padding: '3px 12px'}}>Zabbix Agent (node, service)</td>
      <td style={{padding: '3px 12px'}}>DCGM, Node, K8s State Exporters</td>
      <td style={{padding: '3px 12px'}}>Federated scrape</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Metrics Storage</td>
      <td style={{padding: '3px 12px'}}>Zabbix DB</td>
      <td style={{padding: '3px 12px'}}>VictoriaMetrics (HA)</td>
      <td style={{padding: '3px 12px'}}>API bridge for CCS consumption</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Alerting</td>
      <td style={{padding: '3px 12px'}}>Zabbix Alert Rules</td>
      <td style={{padding: '3px 12px'}}>Prometheus AlertManager</td>
      <td style={{padding: '3px 12px'}}>CCS Notification Service (SMTP/SMS)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Dashboards</td>
      <td style={{padding: '3px 12px'}}>Grafana (CCS-managed)</td>
      <td style={{padding: '3px 12px'}}>External + Internal Grafana (GPUaaS)</td>
      <td style={{padding: '3px 12px'}}>GPU dashboards embedded in CCS portal via iFrame / API</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Log Aggregation</td>
      <td style={{padding: '3px 12px'}}>APM/NPM/IPM (CCS Log Analyzer)</td>
      <td style={{padding: '3px 12px'}}>VictoriaMetrics + log rotation</td>
      <td style={{padding: '3px 12px'}}>Log forwarding via syslog/agent to CCS Log Analyzer</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Audit Logs</td>
      <td style={{padding: '3px 12px'}}>CCS audit trail (ordr_mgmt)</td>
      <td style={{padding: '3px 12px'}}>Correlation ID log stream (S3 every 6h)</td>
      <td style={{padding: '3px 12px'}}>Cross-correlated via X-Correlation-ID header</td>
    </tr>
  </tbody>
</table>

#### 4.7.2 Alert Thresholds (GPU Infrastructure)

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Alert</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Warning</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Critical</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Notification Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Temperature</td>
      <td style={{padding: '3px 12px'}}>&gt; 80°C for 5 min</td>
      <td style={{padding: '3px 12px'}}>&gt; 90°C for 2 min</td>
      <td style={{padding: '3px 12px'}}>Coredge Ops + CCS Notification Service → Tenant</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Memory Utilization</td>
      <td style={{padding: '3px 12px'}}>&gt; 90% for 15 min</td>
      <td style={{padding: '3px 12px'}}>&gt; 95%</td>
      <td style={{padding: '3px 12px'}}>CCS Alarm Service → Tenant dashboard</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CPU Utilization (K8s nodes)</td>
      <td style={{padding: '3px 12px'}}>&gt; 75%</td>
      <td style={{padding: '3px 12px'}}>&gt; 90%</td>
      <td style={{padding: '3px 12px'}}>Coredge Ops team</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Memory Utilization</td>
      <td style={{padding: '3px 12px'}}>&gt; 70%</td>
      <td style={{padding: '3px 12px'}}>&gt; 85%</td>
      <td style={{padding: '3px 12px'}}>Coredge Ops team</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>DDN Storage Quota</td>
      <td style={{padding: '3px 12px'}}>&gt; 80% used</td>
      <td style={{padding: '3px 12px'}}>&gt; 90% used</td>
      <td style={{padding: '3px 12px'}}>CCS Notification Service → Tenant</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cluster Node Not Ready</td>
      <td style={{padding: '3px 12px'}}>1 node down &gt; 2 min</td>
      <td style={{padding: '3px 12px'}}>2+ nodes down</td>
      <td style={{padding: '3px 12px'}}>Coredge Ops + CCS Alarm Service → Tenant</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Storage Latency (DDN)</td>
      <td style={{padding: '3px 12px'}}>&gt; 10 ms</td>
      <td style={{padding: '3px 12px'}}>&gt; 15 ms</td>
      <td style={{padding: '3px 12px'}}>Coredge Ops team</td>
    </tr>
  </tbody>
</table>

### 4.8 Tenant Onboarding Integration

#### 4.8.1 End-to-End Onboarding Flow

1. Customer self-registers on CCS or is onboarded by the Coredge Business team.
2. Customer subscribes to Cirrus Cloud Platform. The platform calls CCS `POST /api/organizations` with party/billing account details.
3. CCS Keycloak auto-provisions a tenant realm. Default roles (Tenant Super Administrator, Tenant Administrator) are created.
4. CCS creates default resources: project/cell/VPC in the default region, default service catalogue.
5. CCS notifies Coredge GPUaaS tenant onboarding API (`POST /api/tenants`) to create the corresponding domain, allocate a VRF pool (4 VLANs), and set initial resource quotas.
6. Coredge GPUaaS auto-provisions: (a) Keycloak realm for the domain, (b) VRF/VLAN allocation in Cisco NDFC, (c) Initial storage directory structure in DDN Lustre, (d) Quota records in orbiter-metering.
7. Tenant administrator receives credentials and can log in to CCS portal. CCS identity federation is active.
8. Resource hierarchy is enforced: Tenant (mapped to LSI) → Cell → Resources (in CCS); Domain → Organization → Project (in GPUaaS).

#### 4.8.2 Coredge to GPUaaS Entity Mapping

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Coredge Entity</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCS (ACP) Entity</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>GPUaaS Entity</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Party</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>master entity</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Billing Account (BA)</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>billing scope</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Logical Subscriber Identity (LSI)</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>subscriber record</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant</td>
      <td style={{padding: '3px 12px'}}>Tenant</td>
      <td style={{padding: '3px 12px'}}>Domain (Tenant)</td>
      <td style={{padding: '3px 12px'}}>1:1:1 mapping enforced</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>Cell</td>
      <td style={{padding: '3px 12px'}}>Project</td>
      <td style={{padding: '3px 12px'}}>Multiple cells per tenant allowed</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>Resources</td>
      <td style={{padding: '3px 12px'}}>Resources (BM/K8s/Storage)</td>
      <td style={{padding: '3px 12px'}}>Scoped within cell/project</td>
    </tr>
  </tbody>
</table>

## 5. Security Architecture

### 5.1 Security Principles

- **Zero Trust:** No implicit trust between any systems. Every request authenticated and authorized regardless of network origin.
- **Least Privilege:** Users and services receive only the minimum permissions required for their function.
- **Defense in Depth:** Multiple independent security controls at network, identity, data, and application layers.
- **Encryption Everywhere:** All data in transit encrypted with TLS 1.2+ / mTLS. All data at rest encrypted with AES-256.
- **Auditability:** All actions logged with correlation IDs, timestamps, and user identity. Logs retained per compliance requirements.

### 5.2 Security Controls per Layer

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Layer</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Control</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Implementation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Identity</td>
      <td style={{padding: '3px 12px'}}>Federated IAM</td>
      <td style={{padding: '3px 12px'}}>Keycloak with SAML/OIDC federation. RS256-signed JWTs. 5–15 min access token TTL. Single-use refresh tokens.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Identity</td>
      <td style={{padding: '3px 12px'}}>MFA</td>
      <td style={{padding: '3px 12px'}}>TOTP, SMS, email, hardware keys. Configurable per realm and per role.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Identity</td>
      <td style={{padding: '3px 12px'}}>Session Management</td>
      <td style={{padding: '3px 12px'}}>Admin force-logout. Token revocation. Correlation ID tracking (X-Correlation-ID header).</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Network</td>
      <td style={{padding: '3px 12px'}}>Transport Encryption</td>
      <td style={{padding: '3px 12px'}}>TLS 1.2+ on all external endpoints. HSTS enforced. Cipher: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Network</td>
      <td style={{padding: '3px 12px'}}>mTLS (Service Mesh)</td>
      <td style={{padding: '3px 12px'}}>Mutual TLS with automated PKI for all inter-service calls (CCS microservices, Coredge microservices, cross-system integration).</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Network</td>
      <td style={{padding: '3px 12px'}}>Network Segmentation</td>
      <td style={{padding: '3px 12px'}}>Palo Alto stateful firewall between orchestration and GPU nodes. Per-tenant VRF isolation. InfiniBand PKey per tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Network</td>
      <td style={{padding: '3px 12px'}}>API Gateway</td>
      <td style={{padding: '3px 12px'}}>CCS API Gateway enforces authentication and rate limiting on all inbound API calls.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Data</td>
      <td style={{padding: '3px 12px'}}>Encryption at Rest</td>
      <td style={{padding: '3px 12px'}}>AES-256 for all stored data (databases, object storage, backups). Key management via platform PKI.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Data</td>
      <td style={{padding: '3px 12px'}}>Tenant Data Isolation</td>
      <td style={{padding: '3px 12px'}}>Database-level tenant tagging. RBAC + ABAC enforcement. Grafana data source isolation per tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Application</td>
      <td style={{padding: '3px 12px'}}>RBAC + ABAC</td>
      <td style={{padding: '3px 12px'}}>orbiter-auth performs role check AND attribute (domain/project/org) check on every request.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Application</td>
      <td style={{padding: '3px 12px'}}>Image Security</td>
      <td style={{padding: '3px 12px'}}>CIS-benchmarked golden OS images. Non-privileged containers. Vulnerability scanning in CI/CD pipeline.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Operations</td>
      <td style={{padding: '3px 12px'}}>Audit Logging</td>
      <td style={{padding: '3px 12px'}}>All provisioning, access, and configuration changes logged with user ID, timestamp, correlation ID. Backed to S3 every 6 hours.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Operations</td>
      <td style={{padding: '3px 12px'}}>Compliance</td>
      <td style={{padding: '3px 12px'}}>NIST 800-53 Rev 5 (AC, AU), ISO/IEC 27001 (A.9, A.10), HIPAA (IAM, RBAC, audit).</td>
    </tr>
  </tbody>
</table>

## 6. High Availability and Disaster Recovery

### 6.1 CCS High Availability

- Each region has two CCS clusters: AZ1 (Primary / Active) and AZ2 (Standby / Passive).
- 3-node web layer (reverse proxy) in DMZ per AZ. Kubernetes cluster: 3 master + 5 worker nodes per AZ.
- PostgreSQL: Active-Passive with Logical/Streaming Replication across AZs. 3-node cluster per AZ (3+3 node setup, with arbiter VM for manual failover).
- MongoDB: Active-Passive replication within region. MongoDB Active-Active replication (change-stream) for global services (tenant/project/user metadata) across North and South regions.
- OpenFGA (AuthZ DB): Active-Passive between two regions. Writes always go to primary region. Read-heavy access pattern.
- Global GSLB probe detects Active cluster failure and routes traffic to Passive. Internal 2n+1 quorum system validates failover decision.

### 6.2 GPUaaS High Availability

- Kubernetes control plane: 3 or 5 etcd nodes for HA quorum.
- Slurm: slurmctld deployed as HA Kubernetes Deployment. MariaDB StatefulSet with VAST CSI persistent storage.
- MAAS: Region + Rack Controller HA configuration.
- VictoriaMetrics: HA deployment with replication. No data loss on single-node failure.
- DDN AI400: Redundant MGS/MDS nodes. Multiple OSTs for distributed parallel I/O.

### 6.3 Backup Strategy

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Data Source</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Method</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Frequency</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Retention</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Destination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Keycloak PostgreSQL</td>
      <td style={{padding: '3px 12px'}}>Veritas backup agent</td>
      <td style={{padding: '3px 12px'}}>Incremental 30 min / Full 24 hrs</td>
      <td style={{padding: '3px 12px'}}>3 months</td>
      <td style={{padding: '3px 12px'}}>Cross-region object storage</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Config MongoDB</td>
      <td style={{padding: '3px 12px'}}>Veritas backup agent</td>
      <td style={{padding: '3px 12px'}}>Incremental 30 min / Full 24 hrs</td>
      <td style={{padding: '3px 12px'}}>3 months</td>
      <td style={{padding: '3px 12px'}}>Cross-region object storage</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Metrics MongoDB</td>
      <td style={{padding: '3px 12px'}}>Veritas backup agent</td>
      <td style={{padding: '3px 12px'}}>Incremental 30 min / Full 24 hrs</td>
      <td style={{padding: '3px 12px'}}>3 months</td>
      <td style={{padding: '3px 12px'}}>Cross-region object storage</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS K8s etcd</td>
      <td style={{padding: '3px 12px'}}>etcdctl snapshot</td>
      <td style={{padding: '3px 12px'}}>Incremental 30 min / Full 24 hrs</td>
      <td style={{padding: '3px 12px'}}>3 months</td>
      <td style={{padding: '3px 12px'}}>Cross-region object storage</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPUaaS PostgreSQL (metering)</td>
      <td style={{padding: '3px 12px'}}>pg_dump (full + incremental)</td>
      <td style={{padding: '3px 12px'}}>Every 6 hours</td>
      <td style={{padding: '3px 12px'}}>12–24 months</td>
      <td style={{padding: '3px 12px'}}>VAST S3 'NetBackup'</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPUaaS MongoDB (orchestration)</td>
      <td style={{padding: '3px 12px'}}>mongodump (full + incremental)</td>
      <td style={{padding: '3px 12px'}}>Every 6 hours</td>
      <td style={{padding: '3px 12px'}}>12–24 months</td>
      <td style={{padding: '3px 12px'}}>VAST S3 'NetBackup'</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPUaaS etcd (K8s clusters)</td>
      <td style={{padding: '3px 12px'}}>etcdctl snapshot</td>
      <td style={{padding: '3px 12px'}}>Every 6 hours</td>
      <td style={{padding: '3px 12px'}}>Critical / indefinite</td>
      <td style={{padding: '3px 12px'}}>VAST S3 'NetBackup'</td>
    </tr>
  </tbody>
</table>

## 7. API Integration Matrix

The following table provides a consolidated view of all integration APIs between CCS and the Coredge GPUaaS Platform. All APIs are secured with mTLS between systems and require a valid JWT in the Authorization header.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>#</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Domain</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>API / Endpoint</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Direction</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>1</td>
      <td style={{padding: '3px 12px'}}>IAM</td>
      <td style={{padding: '3px 12px'}}><code>JWKS URI: /realms/&#123;realm&#125;/protocol/openid-connect/certs</code></td>
      <td style={{padding: '3px 12px'}}>CCS ← GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Keycloak public key endpoint for JWT signature verification.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>2</td>
      <td style={{padding: '3px 12px'}}>IAM</td>
      <td style={{padding: '3px 12px'}}><code>POST /realms/&#123;realm&#125;/protocol/openid-connect/token</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Service-to-service token exchange for integration calls.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>Onboarding</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/organizations</code></td>
      <td style={{padding: '3px 12px'}}>CCS</td>
      <td style={{padding: '3px 12px'}}>creates tenant organization in CCS upon subscription.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>4</td>
      <td style={{padding: '3px 12px'}}>Onboarding</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/tenants</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>CCS creates corresponding domain in GPUaaS after CCS tenant is created.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>Compute</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/baremetal-manager/allocate</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Allocate bare-metal GPU node to tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>6</td>
      <td style={{padding: '3px 12px'}}>Compute</td>
      <td style={{padding: '3px 12px'}}><code>GET /api/baremetal-manager/&#123;node_id&#125;/status</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Poll GPU node provisioning state.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>7</td>
      <td style={{padding: '3px 12px'}}>Compute</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/baremetal-manager/&#123;node_id&#125;/release</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Release bare-metal GPU node.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>8</td>
      <td style={{padding: '3px 12px'}}>Webhook</td>
      <td style={{padding: '3px 12px'}}><code>POST /ccs/webhooks/baremetal/state-change</code></td>
      <td style={{padding: '3px 12px'}}>GPUaaS → CCS</td>
      <td style={{padding: '3px 12px'}}>Async state-change notification (ACTIVE, FAILED, RELEASED).</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>9</td>
      <td style={{padding: '3px 12px'}}>K8s</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/orbiter/clusters/register</code></td>
      <td style={{padding: '3px 12px'}}>CCS ← GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Register GPU K8s cluster with CCS Cloud Orbiter.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>10</td>
      <td style={{padding: '3px 12px'}}>K8s</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/orbiter/clusters/&#123;id&#125;/scale</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Scale GPU K8s cluster worker nodes.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>11</td>
      <td style={{padding: '3px 12px'}}>K8s</td>
      <td style={{padding: '3px 12px'}}><code>DELETE /api/orbiter/clusters/&#123;id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Tear down GPU K8s cluster.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>12</td>
      <td style={{padding: '3px 12px'}}>Network</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/network-manager/vpc</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Allocate tenant VRF/VLAN from pool (triggered alongside CCS VPC creation).</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>13</td>
      <td style={{padding: '3px 12px'}}>Storage</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/storage/tenant</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Create DDN tenant directory + NodeMap + UFM PKey.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>14</td>
      <td style={{padding: '3px 12px'}}>Metering</td>
      <td style={{padding: '3px 12px'}}><code>GET /api/metering/usage</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Retrieve aggregated GPU usage records for billing period.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>15</td>
      <td style={{padding: '3px 12px'}}>Metering</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/metering/quota/&#123;id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Update tenant quota allocation after subscription change.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>16</td>
      <td style={{padding: '3px 12px'}}>Metering</td>
      <td style={{padding: '3px 12px'}}><code>GET /api/metering/export/csv</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Download billing CSV for invoice generation.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>17</td>
      <td style={{padding: '3px 12px'}}>Monitoring</td>
      <td style={{padding: '3px 12px'}}><code>GET /api/metrics/gpu/&#123;tenant_id&#125;</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Fetch GPU utilization metrics for CCS tenant dashboard.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>18</td>
      <td style={{padding: '3px 12px'}}>Monitoring</td>
      <td style={{padding: '3px 12px'}}><code>POST /api/alerts/subscribe</code></td>
      <td style={{padding: '3px 12px'}}>CCS → GPUaaS</td>
      <td style={{padding: '3px 12px'}}>Register CCS webhook to receive GPU infrastructure alerts.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>19</td>
      <td style={{padding: '3px 12px'}}>Monitoring</td>
      <td style={{padding: '3px 12px'}}><code>POST /ccs/webhooks/alerts</code></td>
      <td style={{padding: '3px 12px'}}>GPUaaS → CCS</td>
      <td style={{padding: '3px 12px'}}>GPU alert delivery to CCS Notification Service (SMTP/SMS).</td>
    </tr>
  </tbody>
</table>

## 8. Error Handling and Resilience

### 8.1 Error Response Standard

All integration API responses follow a consistent error schema:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>HTTP Code</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Error Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Handling Strategy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>400</td>
      <td style={{padding: '3px 12px'}}>Bad Request</td>
      <td style={{padding: '3px 12px'}}>Validate request schema before retrying. Do not retry. Log with correlation ID and surface to tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>401</td>
      <td style={{padding: '3px 12px'}}>Unauthorized</td>
      <td style={{padding: '3px 12px'}}>Refresh JWT token and retry once. If still 401, re-initiate auth flow. Log token expiry event.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>403</td>
      <td style={{padding: '3px 12px'}}>Forbidden</td>
      <td style={{padding: '3px 12px'}}>Do not retry. RBAC/ABAC rejection. Log for audit. Surface 'Insufficient permissions' to tenant.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>404</td>
      <td style={{padding: '3px 12px'}}>Not Found</td>
      <td style={{padding: '3px 12px'}}>Do not retry. Resources may have been deleted. Trigger reconciliation to sync state.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>409</td>
      <td style={{padding: '3px 12px'}}>Conflict</td>
      <td style={{padding: '3px 12px'}}>Idempotency check: resources may already exist. Query GET endpoint to verify state before retrying.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>422</td>
      <td style={{padding: '3px 12px'}}>Quota Exceeded</td>
      <td style={{padding: '3px 12px'}}>Do not retry. Prompt tenant to upgrade subscription. Log quota breach event.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>429</td>
      <td style={{padding: '3px 12px'}}>Rate Limited</td>
      <td style={{padding: '3px 12px'}}>Implement exponential backoff with jitter. Respect Retry-After header.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>503</td>
      <td style={{padding: '3px 12px'}}>Service Unavailable</td>
      <td style={{padding: '3px 12px'}}>Exponential backoff: initial 1s, max 60s, max 5 retries. Alert Ops team if sustained.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>5xx</td>
      <td style={{padding: '3px 12px'}}>Server Error</td>
      <td style={{padding: '3px 12px'}}>Retry with exponential backoff (max 3 retries). Trigger circuit breaker after 5 consecutive failures.</td>
    </tr>
  </tbody>
</table>

### 8.2 Retry and Circuit Breaker Policy

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Integration Call</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Max Retries</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Initial Backoff</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Max Backoff</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Circuit Breaker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>BM Node Provisioning</td>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>5 seconds</td>
      <td style={{padding: '3px 12px'}}>60 seconds</td>
      <td style={{padding: '3px 12px'}}>5 failures / 30s window</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Quota Check</td>
      <td style={{padding: '3px 12px'}}>2</td>
      <td style={{padding: '3px 12px'}}>500 ms</td>
      <td style={{padding: '3px 12px'}}>5 seconds</td>
      <td style={{padding: '3px 12px'}}>10 failures / 10s window</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Token Refresh</td>
      <td style={{padding: '3px 12px'}}>1</td>
      <td style={{padding: '3px 12px'}}>Immediate</td>
      <td style={{padding: '3px 12px'}}>—</td>
      <td style={{padding: '3px 12px'}}>3 failures → re-auth</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Metering Export</td>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>2 seconds</td>
      <td style={{padding: '3px 12px'}}>30 seconds</td>
      <td style={{padding: '3px 12px'}}>5 failures / 60s window</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Alert Webhook Delivery</td>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>1 second</td>
      <td style={{padding: '3px 12px'}}>120 seconds</td>
      <td style={{padding: '3px 12px'}}>Dead-letter queue after 5 failures</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>State Change Webhook</td>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>2 seconds</td>
      <td style={{padding: '3px 12px'}}>60 seconds</td>
      <td style={{padding: '3px 12px'}}>Dead-letter queue after 5 failures</td>
    </tr>
  </tbody>
</table>

## 9. Pre-Requisites and Deployment Considerations

### 9.1 CCS Pre-Requisites

- Wildcard SSL certificates for CCS hosting and dynamic customer account URLs
- Load Balancer VIPs for each CCS endpoint (console, API gateway, orbiter, auth)
- DNS server with credentials to create dynamic domains per customer account
- Accessible container registry for CCS component images
- Kubernetes-compliant storage with high IOPS performance (NVMe-backed NFS)
- SMTP server credentials for CCS Notification Service
- NTP and DNS server connectivity
- Connectivity and API credentials to integrate with platform
- Private network link to Coredge GPUaaS integration API endpoints

### 9.2 Coredge GPUaaS Pre-Requisites

- MAAS HA controller accessible at 172.26.5.8 with IPMI credentials for all GPU node BMCs
- Cisco NDFC access (REST API) for VRF/VLAN automation
- NVIDIA UFM management interface access for InfiniBand PKey management
- DDN AI400 MGS SSH access for Storage Plugin tenant directory management
- VAST Data CSI driver deployed in GPUaaS management Kubernetes cluster
- Palo Alto firewall API access for tenant network rule management
- CCS Keycloak JWKS URI reachable from Coredge GPUaaS (for JWT validation)
- Private network link to CCS for webhook delivery and integration API calls
- NVIDIA GPU drivers and GPU Operator images in accessible container registry

### 9.3 Deployment Constraints

- CCS must be deployed in the control plane of each availability zone, not in the workload pod.
- The Coredge GPUaaS management cluster must be on a dedicated infrastructure separate from GPU workload nodes.
- All VMs within a cluster (Postgres, Kubernetes) must have anti-affinity rules enabled to prevent co-location on a single physical host.
- Database clusters use a 3+3 node setup (3 VMs per AZ). The two-AZ setup requires manual failover scripts (developed by Coredge team) due to the absence of a third AZ for automatic arbiter node placement.
- OpenFGA Postgres DB and Global MongoDB VMs are stretched across the 2 AZs per region and routed accordingly.

## 10. RACI Matrix — Integration Responsibilities

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>R = Responsible &nbsp;|&nbsp; A = Accountable &nbsp;|&nbsp; C = Consulted &nbsp;|&nbsp; I = Informed</div>
  </div>
</div>

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Task</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>R</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>A</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>C</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>I</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Major / Minor Upgrade</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>OS Patching — CCS Cluster VMs</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>CCS Kubernetes Cluster Patching</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>GPU Node OS Patching (MAAS golden image update)</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Infrastructure for CCS Management Cluster</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Storage Driver Plugin for CCS PVCs</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>SSL Certificates and LB Config</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Keycloak Federation Configuration (CCS ↔ GPUaaS)</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Integration APIs (CCS)</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Integration API Development (CCS ↔ GPUaaS)</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cisco NDFC VRF/VLAN Configuration</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Palo Alto Firewall Rule Management</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>DDN Storage Provisioning Setup</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>orbiter-metering Rate Card Configuration</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Database Failover Script Development</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Service Catalogue and Rate Card</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Integration Testing Execution</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
  </tbody>
</table>

## 11. Integration Testing Strategy

### 11.1 Test Categories

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Test Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Scope</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Success Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>Unit / Contract Testing</td>
      <td style={{padding: '3px 12px'}}>Individual API endpoint request/response schema validation</td>
      <td style={{padding: '3px 12px'}}>100% schema conformance. All error codes return correct structure.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Integration Testing</td>
      <td style={{padding: '3px 12px'}}>End-to-end provisioning flow: CCS → GPUaaS → bare-metal node ACTIVE</td>
      <td style={{padding: '3px 12px'}}>Node provisioned within SLA. Webhook received. Portal reflects ACTIVE state.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>IAM / Auth Testing</td>
      <td style={{padding: '3px 12px'}}>JWT federation: CCS token accepted by GPUaaS orbiter-auth</td>
      <td style={{padding: '3px 12px'}}>All role mappings enforce correct RBAC + ABAC. Expired/tampered tokens rejected.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Quota Testing</td>
      <td style={{padding: '3px 12px'}}>Quota enforcement: resource creation blocked when quota exceeded</td>
      <td style={{padding: '3px 12px'}}>HTTP 422 returned immediately on quota breach. Dashboard reflects 90% warning.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Failover Testing</td>
      <td style={{padding: '3px 12px'}}>CCS AZ failover: traffic switches from AZ1 to AZ2</td>
      <td style={{padding: '3px 12px'}}>Recovery within RTO. No data loss. Tenant sessions restored.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Billing Accuracy Testing</td>
      <td style={{padding: '3px 12px'}}>GPU metering: DCGM data flows through to format billing export</td>
      <td style={{padding: '3px 12px'}}>GPU-hours within 1% variance of expected. Correct tenant attribution.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Monitoring Integration</td>
      <td style={{padding: '3px 12px'}}>Alert delivery: GPU temp alert fires and reaches CCS Notification Service</td>
      <td style={{padding: '3px 12px'}}>Alert delivered within 60 seconds of threshold breach.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Performance Testing (CCS)</td>
      <td style={{padding: '3px 12px'}}>CCS portal load: 50,000 VMs and 200,000 pods under management</td>
      <td style={{padding: '3px 12px'}}>Portal response &lt; 3s P95. No degradation at peak load.</td>
    </tr>
  </tbody>
</table>

### 11.2 Exclusions from Test Scope

- Penetration testing (scheduled separately, not in scope of this integration IDD)
- Performance testing for infrastructure components other than CCS (handled by respective component owners)
- Day-2 operations testing for underlying bare-metal physical infrastructure

## 12. Open Items and Known Constraints

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>#</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Item</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Status</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Resolution Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>1</td>
      <td style={{padding: '3px 12px'}}>Network Load Balancer — no out-of-the-box integration from CCS. Requires Automation Platform.</td>
      <td style={{padding: '3px 12px'}}>Open</td>
      <td style={{padding: '3px 12px'}}>Integration approach to be defined with Coredge Network team. Automation Platform API contract to be agreed.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>2</td>
      <td style={{padding: '3px 12px'}}>Dynamic VRF creation in Coredge requires manual Palo Alto firewall rule addition.</td>
      <td style={{padding: '3px 12px'}}>Open</td>
      <td style={{padding: '3px 12px'}}>Pre-created (pooled) VRF assignment is the interim production approach. Automated firewall API integration on roadmap.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>Database failover script (3+3 node setup, two-AZ region) needs joint development.</td>
      <td style={{padding: '3px 12px'}}>In Progress</td>
      <td style={{padding: '3px 12px'}}>Script to be developed collaboratively by Coredge. Target completion before MVP1 UAT.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>4</td>
      <td style={{padding: '3px 12px'}}>NAT Gateway integration approach (SNAT / Software Appliance) is TBD.</td>
      <td style={{padding: '3px 12px'}}>Open</td>
      <td style={{padding: '3px 12px'}}>Integration approach to be confirmed by Network team post-MVP1 planning review.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>VPN Gateway (Site-to-Site and Point-to-Site) integration uses Zscaler APIs — no out-of-the-box support.</td>
      <td style={{padding: '3px 12px'}}>Open</td>
      <td style={{padding: '3px 12px'}}>Zscaler API integration to be scoped and agreed as separate work item.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>6</td>
      <td style={{padding: '3px 12px'}}>CCS API mapping for Party, Billing Account (BA), and Logical Subscriber Identity (LSI) entities is incomplete.</td>
      <td style={{padding: '3px 12px'}}>Open</td>
      <td style={{padding: '3px 12px'}}>Mapping to be finalized by Business team guidance. Required before go-live.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>7</td>
      <td style={{padding: '3px 12px'}}>MVP2 and MVP3 integration requirements (CDN, DRaaS, MariaDB, NoSQL, Kafka, etc.) are deferred.</td>
      <td style={{padding: '3px 12px'}}>Deferred</td>
      <td style={{padding: '3px 12px'}}>To be defined post-MVP1. Out of scope for this IDD version.</td>
    </tr>
  </tbody>
</table>

## 13. References

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>#</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Document</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Owner</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{padding: '3px 12px'}}>1</td>
      <td style={{padding: '3px 12px'}}>Cloud Management Platform (CMP) for Cloud — High Level Design</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>1.10 (Aug 2025)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>2</td>
      <td style={{padding: '3px 12px'}}>Coredge GPUaaS Platform — Technical Reference Document (Unified Architecture Guide)</td>
      <td style={{padding: '3px 12px'}}>Coredge Cloud Infrastructure</td>
      <td style={{padding: '3px 12px'}}>1.0 (Feb 2026)</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>Coredge Cloud — Service Catalogue (portal)</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>4</td>
      <td style={{padding: '3px 12px'}}>Coredge Statement of Work — Cloud CMP Engagement</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>NIST Special Publication 800-53 Rev 5 — Security and Privacy Controls</td>
      <td style={{padding: '3px 12px'}}>NIST</td>
      <td style={{padding: '3px 12px'}}>Rev 5</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>6</td>
      <td style={{padding: '3px 12px'}}>ISO/IEC 27001:2022 — Information Security Management</td>
      <td style={{padding: '3px 12px'}}>ISO/IEC</td>
      <td style={{padding: '3px 12px'}}>2022</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>7</td>
      <td style={{padding: '3px 12px'}}>Keycloak Server Administration Guide</td>
      <td style={{padding: '3px 12px'}}>Red Hat / Keycloak Community</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>8</td>
      <td style={{padding: '3px 12px'}}>Cisco NDFC — REST API Reference</td>
      <td style={{padding: '3px 12px'}}>Cisco</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>9</td>
      <td style={{padding: '3px 12px'}}>NVIDIA DCGM User Guide</td>
      <td style={{padding: '3px 12px'}}>NVIDIA</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>10</td>
      <td style={{padding: '3px 12px'}}>DDN AI400 Lustre Administration Guide</td>
      <td style={{padding: '3px 12px'}}>DDN</td>
      <td style={{padding: '3px 12px'}}>Current</td>
    </tr>
  </tbody>
</table>

---

