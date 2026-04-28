---
title: Platform Overview
sidebar_position: 1
---

# Platform Overview

## Executive Summary

Cirrus Cloud Platform (CCP) is a hyper-scaler grade Cloud Management Platform (CMP) developed by Coredge, purpose-built for sovereign cloud, enterprise private cloud, and managed cloud service delivery. The platform provides a unified self-service portal, centralized governance, automated provisioning, and multi-tenant isolation for organizations that must operate cloud infrastructure with the security and compliance posture demanded by government, regulated industries, and national critical infrastructure programs.

CCP does not replace infrastructure — it orchestrates it. Deployed above Coredge's own Cirrus Cloud Platform (CCP) IaaS Orchestrator and Cloud Orbiter Kubernetes Orchestrator, CCP becomes the single pane of glass through which operators manage the platform and customers consume services — spanning compute, storage, networking, databases, security, and monitoring through one portal, one API gateway, and one identity system.

**Who It's For:** Cloud service providers, sovereign cloud programs, telecom operators, large enterprises, and regulated industries (finance, healthcare, government) that need operational simplicity, compliance, and cost visibility at the scale of thousands of VMs and hundreds of thousands of containers.

## The Enterprise Cloud Management Challenge

As cloud adoption matures, organizations running private, hybrid, or sovereign cloud face a different set of problems than those using public hyperscale providers. The infrastructure exists — but managing it at scale, with governance, security, and cost visibility, is where complexity accumulates:

- **Fragmented Tooling:** Virtual machines, Kubernetes clusters, bare metal, storage arrays, and network appliances each come with their own management interfaces, creating operational silos, inconsistent policies, and elevated risk.
- **Multi-Tenancy is Complex:** Serving multiple internal business units or external customers from shared infrastructure requires rigorous identity isolation, per-tenant quota enforcement, and auditable access control at every layer.
- **Self-Service Without Chaos:** Enterprise and government customers expect on-demand provisioning — the hyperscaler experience — but without the operational team becoming the bottleneck. Enabling self-service at scale, with guardrails, is a significant engineering and governance challenge.
- **Cost Opacity:** Without centralized metering and showback, cloud spending across tenants, cells, and services becomes opaque. FinOps is impossible without instrumented consumption data.
- **Security and Compliance:** Sovereign cloud workloads demand end-to-end encryption, identity federation, role-based access control, and audit trails that meet national and industry compliance standards — built in, not bolted on.

## What CCP Solves

CCP eliminates these challenges by delivering an integrated Cloud Management Platform that handles the entire lifecycle — from tenant onboarding to service provisioning to cost governance — through a single, unified interface. Organizations get the self-service experience of a public cloud with the control, isolation, and compliance posture of a privately operated sovereign environment.

## Five Operational Pillars

CCP is an end-to-end cloud management platform organized around five critical operational pillars:

- **Self-Service Provisioning** — Enables on-demand deployment of VMs, containers, bare metal, storage, and networking through an intuitive portal, with no manual intervention from the operations team. *Minutes to resource, not days of tickets.*

- **Visibility Across Environments** — Delivers unified operational dashboards, metrics, and health indicators across all regions and availability zones via integrated Prometheus and Grafana monitoring. *One console to see everything.*

- **Centralized Management** — All resources, all tenants, all services managed through a single API gateway and governance layer with structured Tenant → Cell → Resource hierarchy. *One control plane for all your cloud.*

- **Compliance and Security** — Multi-layered security with Keycloak IAM, OpenFGA RBAC, mTLS encryption, AES-256 at-rest, SAML 2.0 federation, and per-tenant realm isolation. *Security by design, not by configuration.*

- **Optimized Cloud Spend** — Built-in metering, showback, and quota management provide complete visibility into consumption across tenants and services, enabling FinOps disciplines at any scale. *Know what you spend, enforce what you allow.*

## How It Works — At a Glance

A platform administrator creates a tenant in the Admin Console, allocating quotas, assigning network resources, and configuring the identity realm. The BSS Portal (or SAML 2.0 federation) provisions the user. The tenant administrator logs into the Self-Service Console, creates cells (projects), invites team members with appropriate RBAC roles, and begins provisioning cloud resources — virtual machines, load balancers, storage volumes, container clusters, and databases — all through a self-service interface backed by automated orchestration.

## Platform Stack

CCP operates as the top layer of a three-tier platform stack:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Component</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Key Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Cirrus Cloud Platform (CCP)</td><td style={{padding: '3px 12px'}}>Cloud Management Platform — self-service portal, governance, IAM, metering</td><td style={{padding: '3px 12px'}}>Keycloak, OpenFGA, Kafka, PostgreSQL, MongoDB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cirrus Cloud Platform (CCP)</td><td style={{padding: '3px 12px'}}>IaaS Orchestrator — compute, storage, networking at the infrastructure layer</td><td style={{padding: '3px 12px'}}>OpenStack v2023.2, NetApp v11.9.0</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud Orbiter</td><td style={{padding: '3px 12px'}}>Kubernetes Orchestrator — container lifecycle, application deployment, PaaS</td><td style={{padding: '3px 12px'}}>Kubernetes, CKP (Coredge Kubernetes Platform)</td></tr>
  </tbody>
</table>

## Platform Scale

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Dimension</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Capability</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Virtual Machines</td><td style={{padding: '3px 12px'}}>Up to 50,000 VMs per deployment</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Container Pods</td><td style={{padding: '3px 12px'}}>Up to 200,000 pods per deployment</td></tr>
    <tr><td style={{padding: '3px 12px'}}>High Availability</td><td style={{padding: '3px 12px'}}>Active-Passive dual cluster per region; automated GSLB failover</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Multi-Region</td><td style={{padding: '3px 12px'}}>Multi-region with per-AZ Kubernetes control planes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Scalability</td><td style={{padding: '3px 12px'}}>Worker nodes added on demand as workloads grow</td></tr>
  </tbody>
</table>

## Use Cases & Target Industries

### Primary Use Cases

**Sovereign Cloud for Government:** Deploy a nationally controlled, independently operated cloud platform that meets government compliance, data sovereignty, and audit requirements. CCP provides the self-service experience of a public cloud with local control.

**Enterprise Private Cloud:** Large enterprises with regulated workloads — finance, healthcare, energy — can operate their own private cloud with multi-tenant isolation between business units, full metering for internal chargebacks, and integrated security controls.

**Managed Cloud Services for Telcos and CSPs:** Telecom operators and cloud service providers can use CCP to deliver IaaS, PaaS, and SaaS to their enterprise customers through a white-labeled, multi-tenant portal with granular billing and quota management.

**Day 2 Operations and FinOps:** For organizations already running OpenStack or Kubernetes, CCP adds the governance, showback, and unified management layer that transforms complex infrastructure into an operable, governable cloud platform.

### Target Industries

- **Government and National Infrastructure** — Data sovereignty, compliance, local control, audit trails
- **Financial Services** — Zero-trust security, granular RBAC, audit logging, per-tenant isolation
- **Healthcare** — Encrypted workloads, access control, compliance alignment
- **Telecom Operators** — Multi-tenant service delivery, edge computing, 5G infrastructure management
- **Large Enterprises** — Hybrid cloud governance, FinOps, IT consolidation
- **Cloud Service Providers** — Multi-tenant managed services with metering and billing integration
