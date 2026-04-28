---
title: Functional Specification Document
sidebar_position: 1
---

# Functional Specification Document

# 1. Introduction

## 1.1 Purpose

This Functional Specification Document (FSD) describes the functional capabilities, features, user roles, and service offerings of CCP - Cirrus Cloud Platform as deployed for the Client's sovereign cloud platform. It defines what the system does from a functional perspective and serves as the reference document for product understanding, testing, and stakeholder alignment.

## 1.2 Scope

This document covers the functional specification of the following CCP components:

- Self-Service Console
- Admin Console
- Coredge Platform Services
- Identity and Access Management (IAM)
- Cluster Controller and Cluster Agent (Kubernetes)
- CCP Core Microservices
- Service Catalogue (MVP1 / MVP2 / MVP3)
- User Onboarding and Platform Hierarchy
- Pre-defined User Roles and Service-Specific Roles
- High Availability, Regional Architecture, and Backup Strategy

## 1.3 Intended Audience

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Audience</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Purpose</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud Operations Team</td><td style={{padding: '3px 12px'}}>Understand platform capabilities and service offerings</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Product / Business Team</td><td style={{padding: '3px 12px'}}>Validate functional requirements against business needs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>QA / Testing Team</td><td style={{padding: '3px 12px'}}>Basis for functional test case development</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security Team</td><td style={{padding: '3px 12px'}}>Review of access control and identity management functions</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Infrastructure Team</td><td style={{padding: '3px 12px'}}>Understand pre-requisites and deployment constraints</td></tr>
  </tbody>
</table>

## 1.4 Definitions and Acronyms

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Term / Acronym</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Definition</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}}>CCP</td><td style={{padding: '3px 12px'}}>Cirrus Cloud Platform – Cloud Management Platform</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CCP</td><td style={{padding: '3px 12px'}}>Cirrus Cloud Platform – IaaS Orchestrator</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CMP</td><td style={{padding: '3px 12px'}}>Cloud Management Platform</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BSS Portal</td><td style={{padding: '3px 12px'}}>Business Support System Portal – the Client's customer-facing subscription and identity platform</td></tr>
    <tr><td style={{padding: '3px 12px'}}>AZ</td><td style={{padding: '3px 12px'}}>Availability Zone</td></tr>
    <tr><td style={{padding: '3px 12px'}}>IAM</td><td style={{padding: '3px 12px'}}>Identity and Access Management</td></tr>
    <tr><td style={{padding: '3px 12px'}}>RBAC</td><td style={{padding: '3px 12px'}}>Role-Based Access Control</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPC</td><td style={{padding: '3px 12px'}}>Virtual Private Cloud</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MaaS</td><td style={{padding: '3px 12px'}}>Metal as a Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>GSLB</td><td style={{padding: '3px 12px'}}>Global Server Load Balancing</td></tr>
    <tr><td style={{padding: '3px 12px'}}>OpenFGA</td><td style={{padding: '3px 12px'}}>Open Fine-Grained Authorization – AuthZ engine used within CCP</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MVP</td><td style={{padding: '3px 12px'}}>Minimum Viable Product</td></tr>
    <tr><td style={{padding: '3px 12px'}}>HA</td><td style={{padding: '3px 12px'}}>High Availability</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DR</td><td style={{padding: '3px 12px'}}>Disaster Recovery</td></tr>
    <tr><td style={{padding: '3px 12px'}}>mTLS</td><td style={{padding: '3px 12px'}}>Mutual Transport Layer Security</td></tr>
    <tr><td style={{padding: '3px 12px'}}>SMTP</td><td style={{padding: '3px 12px'}}>Simple Mail Transfer Protocol</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NTP</td><td style={{padding: '3px 12px'}}>Network Time Protocol</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DMZ</td><td style={{padding: '3px 12px'}}>Demilitarized Zone</td></tr>
    <tr><td style={{padding: '3px 12px'}}>ETCD</td><td style={{padding: '3px 12px'}}>Distributed key-value store used by Kubernetes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>PVC</td><td style={{padding: '3px 12px'}}>Persistent Volume Claim</td></tr>
    <tr><td style={{padding: '3px 12px'}}>ADFS</td><td style={{padding: '3px 12px'}}>Active Directory Federation Services</td></tr>
  </tbody>
</table>

# 2. System Overview

## 2.1 Background

The Client is building a sovereign cloud platform for government and enterprise customers in the India region.

A combination of Cirrus Cloud Platform (Cloud Management Platform), Cirrus Cloud Platform (IaaS Orchestrator) and Cloud Orbiter (Kubernetes Orchestrator) will provide a unified cloud services platform layer for the Client's internal teams (Day 2 operations, business unit, security, FinOps, and cloud governance) and customers for delivering and accessing various services.

## 2.2 Current State

The Client Cloud is a new deployment and Cirrus Cloud Platform would be used for the Cloud Management Platform layer.

## 2.3 Key Platform Capabilities

Cirrus Cloud Platform will deliver the following key features of the Cloud Management Platform:

- Self-service access for automated provisioning and deployments
- Visibility across environments
- Centralized management
- Improved compliance and security
- Optimized cloud spends

# 3. Functional Components

The Cirrus Cloud Platform (Cloud Management Platform) / Cloud Orbiter (Kubernetes Orchestrator) / Cirrus Cloud Platform (IaaS Orchestrator) consists of the key functional components listed below.

## 3.1 Self-Service Console

Primary interface for end users. User friendly facing UI, allowing users to manage and provision various infrastructure resources like VMs, storage, load balancers, etc., often through intuitive interfaces like drag-and-drop or simple forms. Also, allows organization administrators to create new Projects/Cells and manage user access to project/cell, define access control policies (who can access what resources), and ensure proper resource allocation and usage.

## 3.2 Admin Console (For Service Provider Only)

Provides an overall view of the entire OpenStack environment. It provides administrative UI to manage OpenStack environments, allocate resources, and oversee system health. It provides a management view of all infrastructure resources like VMs, Volumes, Load Balancers, Container Namespaces etc. It also provides insights into the overall health of the OpenStack environment, allowing for proactive maintenance and troubleshooting.

## 3.3 Coredge Platform Services

The Coredge Platform Services is composed of several microservices, each responsible for a specific set of functionalities, and they communicate through well-defined REST APIs and internal routing mechanisms.

It provides a rich set of APIs for resource allocation, availability zones, VM flavors, and user images, empowering users to efficiently manage and allocate resources based on their specific needs.

Also includes specialized microservices for resource management, Kubernetes orchestration, and storage management. Platform has an in-built robust API gateway to provide centralized access control and API logging, ensuring secure and authorized access to platform resources.

## 3.4 IAM (Identity and Access Management) Server

Authentication server provides identity and access management to CMP cloud users. It provides federation with external Identity Providers (like BSS Portal, ADFS). This is by default multi-tenant and has the capability to allow customer specific identity provider federation, ensures secure and isolated access for every customer. For each customer organization, it creates a unique account to allow identity segregation.

## 3.5 Cluster Controller (For Kubernetes Only)

Central entity managing all Kubernetes platform functionality, connecting and orchestrating customer Kubernetes clusters. It enables communication with Cluster Agent over port 8030/8040. This enables communication with clusters and allows centralization of Kubernetes APIs/CLI access.

## 3.6 Cluster Agent (For Kubernetes Only)

Deployed on each target Kubernetes cluster to enable management via the Controller. Cluster Agent initiates outbound connection towards Cluster Controller and once handshake is complete, Controller can provide commands to cluster and act as proxy to Kubernetes CLI/APIs.

# 4. CCP Core Modules

The table below lists all core microservice modules that form the Cirrus Cloud Platform platform, along with their functional descriptions.

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>S.No.</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Module</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Functional Description</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}}>1</td><td style={{padding: '3px 12px'}}>orbiter-api</td><td style={{padding: '3px 12px'}}>API server for orbiter – exposes K8s/cluster APIs for K8s cluster management and application deployment</td></tr>
    <tr><td style={{padding: '3px 12px'}}>2</td><td style={{padding: '3px 12px'}}>orbiter-controller</td><td style={{padding: '3px 12px'}}>Controller for orbiter which handles the runtime. Backend engine for orbiter-api</td></tr>
    <tr><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>observability-ui</td><td style={{padding: '3px 12px'}}>UI service for cluster observability. It exposes cluster metrics like CPU, RAM usage etc.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>4</td><td style={{padding: '3px 12px'}}>frontend</td><td style={{padding: '3px 12px'}}>Cluster management UI service. Interacts with orbiter-api to expose various cluster level operations to end user like registration/removal of K8s clusters, application deployment on K8s clusters, container registry etc.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>5</td><td style={{padding: '3px 12px'}}>workflow-controller</td><td style={{padding: '3px 12px'}}>Workflow provider for internal CCP workflows</td></tr>
    <tr><td style={{padding: '3px 12px'}}>6</td><td style={{padding: '3px 12px'}}>console</td><td style={{padding: '3px 12px'}}>UI service for CCP</td></tr>
    <tr><td style={{padding: '3px 12px'}}>7</td><td style={{padding: '3px 12px'}}>admin-console</td><td style={{padding: '3px 12px'}}>Admin UI for CCP</td></tr>
    <tr><td style={{padding: '3px 12px'}}>8</td><td style={{padding: '3px 12px'}}>platform</td><td style={{padding: '3px 12px'}}>Platform APIs for CCP comprising of compute, volume, core-mgmt, network etc. functionalities</td></tr>
    <tr><td style={{padding: '3px 12px'}}>9</td><td style={{padding: '3px 12px'}}>admin-platform</td><td style={{padding: '3px 12px'}}>Admin Platform APIs for CCP to manage flavors, images, AZs, regions and other virtual resources and constructs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>10</td><td style={{padding: '3px 12px'}}>celery</td><td style={{padding: '3px 12px'}}>Multiple Celery services for different tasks</td></tr>
    <tr><td style={{padding: '3px 12px'}}>11</td><td style={{padding: '3px 12px'}}>auth</td><td style={{padding: '3px 12px'}}>Keycloak Authentication Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>12</td><td style={{padding: '3px 12px'}}>core-mgmt</td><td style={{padding: '3px 12px'}}>Project manager service to manage organizations, cells, user mapping etc.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>13</td><td style={{padding: '3px 12px'}}>ordr_mgmt</td><td style={{padding: '3px 12px'}}>Service to push CRUD events externally</td></tr>
    <tr><td style={{padding: '3px 12px'}}>14</td><td style={{padding: '3px 12px'}}>socketio</td><td style={{padding: '3px 12px'}}>Socketio service to push events/notifications to console service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>15</td><td style={{padding: '3px 12px'}}>onboarding</td><td style={{padding: '3px 12px'}}>Service to onboard users and organizations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>16</td><td style={{padding: '3px 12px'}}>platform-celery</td><td style={{padding: '3px 12px'}}>Internal service to handle tasks asynchronously</td></tr>
    <tr><td style={{padding: '3px 12px'}}>17</td><td style={{padding: '3px 12px'}}>notification</td><td style={{padding: '3px 12px'}}>Notification service for sending notifications to external messaging platforms – SMS, email (SMTP) etc.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>18</td><td style={{padding: '3px 12px'}}>orbiter-auth</td><td style={{padding: '3px 12px'}}>Authorization gateway for the system</td></tr>
    <tr><td style={{padding: '3px 12px'}}>19</td><td style={{padding: '3px 12px'}}>orbiter-term</td><td style={{padding: '3px 12px'}}>Terminal access for Kubernetes based shell for clusters</td></tr>
    <tr><td style={{padding: '3px 12px'}}>20</td><td style={{padding: '3px 12px'}}>storage-plugin</td><td style={{padding: '3px 12px'}}>For providing storage capabilities while integrating with NetApp</td></tr>
    <tr><td style={{padding: '3px 12px'}}>21</td><td style={{padding: '3px 12px'}}>baremetal-plugin</td><td style={{padding: '3px 12px'}}>For providing baremetal server management while integrating with MaaS</td></tr>
    <tr><td style={{padding: '3px 12px'}}>22</td><td style={{padding: '3px 12px'}}>client-plugin</td><td style={{padding: '3px 12px'}}>For enablement of client-specific custom flows</td></tr>
    <tr><td style={{padding: '3px 12px'}}>23</td><td style={{padding: '3px 12px'}}>orbiter-metering</td><td style={{padding: '3px 12px'}}>For metering / showback / quota management and licensing</td></tr>
    <tr><td style={{padding: '3px 12px'}}>24</td><td style={{padding: '3px 12px'}}>kafka</td><td style={{padding: '3px 12px'}}>Internal messaging queue for components communication</td></tr>
    <tr><td style={{padding: '3px 12px'}}>25</td><td style={{padding: '3px 12px'}}>OpenFGA</td><td style={{padding: '3px 12px'}}>AuthZ Database for CMP authorizations</td></tr>
  </tbody>
</table>

## 4.1 Database Components

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>S.No.</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Database Component</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Version</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}}>1</td><td style={{padding: '3px 12px'}}>Redis (Cache)</td><td style={{padding: '3px 12px'}}>7.2.5</td></tr>
    <tr><td style={{padding: '3px 12px'}}>2</td><td style={{padding: '3px 12px'}}>Redis (Session)</td><td style={{padding: '3px 12px'}}>6.2.5</td></tr>
    <tr><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>PostgreSQL</td><td style={{padding: '3px 12px'}}>15.7</td></tr>
    <tr><td style={{padding: '3px 12px'}}>4</td><td style={{padding: '3px 12px'}}>MongoDB</td><td style={{padding: '3px 12px'}}>5.0.3</td></tr>
  </tbody>
</table>

# 5. Service Catalogue

Client Cloud requires delivery of the services below from the Cloud Management Platform (Cirrus Cloud Platform) in a phased manner:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={3}>Compute Services</td><td style={{padding: '3px 12px'}}>Virtual Machine</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Container as a Service</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>BareMetal as a Service (BMaaS)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={3}>Storage Services</td><td style={{padding: '3px 12px'}}>Block Storage</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Object Storage</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>File Storage</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={7}>Network Services</td><td style={{padding: '3px 12px'}}>Application Load Balancer (HTTP / HTTPS)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network Load Balancer (TCP)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPN Gateway – Site-to-Site Connection</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>VPN Gateway – Point-to-Site Connection</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Firewall</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Public IP</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NAT Gateway (Internet Gateway)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={1}>Network Services</td><td style={{padding: '3px 12px'}}>VPC (Virtual Private Cloud)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={4}>Monitoring Services</td><td style={{padding: '3px 12px'}}>Log Analyzer</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Operational Metric Collection</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Alarm Service</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Notification Service</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={2}>Support Services</td><td style={{padding: '3px 12px'}}>Basic Support Services</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Enterprise Support Services</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database Services</td><td style={{padding: '3px 12px'}}>Managed Database as a Service (Oracle and MongoDB)</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={4}>Security Services</td><td style={{padding: '3px 12px'}}>Security Incident and Event Management</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Log Monitoring</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud Workload Protection</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Web Application Firewall</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={10}>Foundation Services</td><td style={{padding: '3px 12px'}}>Identity and Access Management</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>SMTP</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Identity Federation</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Multi Factor Authentication</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DNS</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>NTP</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Privileged Access Management</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>IP Address Management</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Active Directory Services</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Dual / Multifactor Authentication</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Services</td><td style={{padding: '3px 12px'}}>Managed Services</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup as a Service</td><td style={{padding: '3px 12px'}}>Backup as a Service</td><td style={{padding: '3px 12px'}}>MVP1</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage Services</td><td style={{padding: '3px 12px'}}>Archival Storage</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={5}>Database Services</td><td style={{padding: '3px 12px'}}>Microsoft SQL-as-a-Service – Standard Edition</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Microsoft SQL-as-a-Service – Enterprise Edition</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Microsoft SQL-as-a-Service – Web Edition</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Database as a Service</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Databases Licenses</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={3}>Network Services</td><td style={{padding: '3px 12px'}}>Content Delivery Network</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MPLS Connectivity (Partner Interconnect)</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MPLS Connectivity (Dedicated Interconnect)</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={5}>Security Services</td><td style={{padding: '3px 12px'}}>Cloud Based Hardware Security Module</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Distributed Denial of Services</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>TLS / SSL Certificate Management</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Encryption Services</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Digital Forensics</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Additional Services</td><td style={{padding: '3px 12px'}}>Queue Services (Kafka as a Service)</td><td style={{padding: '3px 12px'}}>MVP2</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network Services</td><td style={{padding: '3px 12px'}}>Bandwidth as a Service (QOS) (BWaaS)</td><td style={{padding: '3px 12px'}}>MVP3</td></tr>
    <tr><td style={{padding: '3px 12px'}} rowSpan={2}>Database Services</td><td style={{padding: '3px 12px'}}>Managed Database as a Service MariaDB</td><td style={{padding: '3px 12px'}}>MVP3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Database as a Service NoSQL</td><td style={{padding: '3px 12px'}}>MVP3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Disaster Recovery as a Service (DRaaS)</td><td style={{padding: '3px 12px'}}>Disaster Recovery as a Service (DRaaS)</td><td style={{padding: '3px 12px'}}>MVP3</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Additional Services</td><td style={{padding: '3px 12px'}}>Message Broker Services</td><td style={{padding: '3px 12px'}}>MVP3</td></tr>
  </tbody>
</table>

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>The above list of services may change in accordance with the guidance provided by the Client Business team. The Service Description Document for the above services can be referred to for detailed information about each service.</div>
  </div>
</div>

# 6. User Onboarding and Platform Hierarchy

## 6.1 Onboarding Flow

Onboarding of the Client's customers will be initiated on the BSS Portal which starts with self-registration by customers or with help from the Client business team.

### Step a

Customer will order/subscribe to CCP on the BSS Portal. Upon subscription, the BSS Portal will call CCP APIs for creation of organization. Cirrus Cloud Platform will automatically configure and create the resources below for the new organization:

- Default User roles for an organization (Organization Administrator and Cell Administrator)
- Default project / cell / VPC in default region
- Default service catalogue

### Step b

Mapping between the BSS Portal and CCP will be developed in accordance with the guidance provided by business teams and will be enforced for billing, governance, and resource hierarchy.

### Step c

The BSS Portal will serve as user identity store and provide authentication services. All customer user accounts can be created, modified, and deleted in the BSS Portal only.

### Step d

Each customer account will be mapped with only a single Tenant in CCP. Multiple cells can be created within a single Tenant. Nesting of Tenants and cells is not allowed currently.

### Step e

Quotas can be applied at tenant and cell level. All cells will inherit quota by default.

### Step f

Resource Hierarchy will be maintained as:

Tenant → Cell → Resources

The BSS Portal to CCP mapping is as follows:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>BSS Portal</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>CCP</th>
    </tr>
    <tr><td style={{padding: '3px 12px'}}>Party</td><td style={{padding: '3px 12px'}}></td></tr>
    <tr><td style={{padding: '3px 12px'}}>Billing Account (BA)</td><td style={{padding: '3px 12px'}}></td></tr>
    <tr><td style={{padding: '3px 12px'}}>Logical Subscriber Identity (LSI)</td><td style={{padding: '3px 12px'}}></td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant</td><td style={{padding: '3px 12px'}}>Tenant</td></tr>
    <tr><td style={{padding: '3px 12px'}}></td><td style={{padding: '3px 12px'}}>Cell</td></tr>
    <tr><td style={{padding: '3px 12px'}}></td><td style={{padding: '3px 12px'}}>Resources</td></tr>
  </tbody>
</table>

### Step g

Pre-defined roles will be mapped with the user identities.

## 6.2 Pre-defined User Roles

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Permissions / Description</th>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Super Administrator</td>
      <td style={{padding: '3px 12px'}}>
        Root User<br/>
        This is the top-level role which can manage everything within a Tenant<br/>
        Can create other Tenant Super Administrators<br/>
        Can create Tenant Administrators
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Administrator</td>
      <td style={{padding: '3px 12px'}}>
        This role has highest privileges in each tenant<br/>
        Create Cell(s) and custom roles<br/>
        Assign Quota for the cells<br/>
        Raise request for increasing tenant quota<br/>
        Provide access requests for tenant and cells<br/>
        Can access usage and quota details
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Viewer</td>
      <td style={{padding: '3px 12px'}}>Read Only Rights for specific organization(s). This role is required for auditing, compliance, and training purpose.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Tenant Billing Admin</td>
      <td style={{padding: '3px 12px'}}>Access to Quota Usage, metering and showback</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Administrator</td>
      <td style={{padding: '3px 12px'}}>
        Raise request for increasing Cell quota<br/>
        Full access to all resources in the Cell
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Viewer</td>
      <td style={{padding: '3px 12px'}}>Read Only Rights for specific cell(s). This role is required for auditing, compliance, and training purposes.</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell User</td>
      <td style={{padding: '3px 12px'}}>
        Access all services mapped with a cell<br/>
        No access to Cell quota requests
      </td>
    </tr>
  </tbody>
</table>

## 6.3 Service-Specific Pre-defined Roles

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Permissions / Description</th>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell VM Admin</td>
      <td style={{padding: '3px 12px'}}>
        Access to VM-as-a-service in a Cell<br/>
        Access to create and manage Block storage<br/>
        Access to create and manage VM Snapshots<br/>
        Access to create and manage networks<br/>
        Access to create and manage Backups
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell VM Reader</td>
      <td style={{padding: '3px 12px'}}>
        Read access to VM-as-a-service in a Cell<br/>
        Read access to Block Storage, networks, VM snapshots, Backups
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Block Storage Admin</td>
      <td style={{padding: '3px 12px'}}>Access to Block Storage-as-a-service in a Cell</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Object Storage Admin</td>
      <td style={{padding: '3px 12px'}}>Access to Object Storage-as-a-service in a Cell</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell File Storage Admin</td>
      <td style={{padding: '3px 12px'}}>Access to File Storage-as-a-service in a Cell</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Backup Admin</td>
      <td style={{padding: '3px 12px'}}>
        Access to Backup-as-a-service in a Cell<br/>
        Access to VM Snap
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Network Admin</td>
      <td style={{padding: '3px 12px'}}>
        Admin access to Network-as-a-service in a Cell<br/>
        Admin access to VPC<br/>
        Admin access to Firewall<br/>
        Admin access to Public IP<br/>
        Admin access to VPN
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Container Admin</td>
      <td style={{padding: '3px 12px'}}>
        Access to Container-as-a-service in a Cell<br/>
        Access to create and manage Block storage and networks
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell BareMetal Admin</td>
      <td style={{padding: '3px 12px'}}>
        Access to Bare Metal-as-a-service in a Cell<br/>
        Access to create and manage Block storage<br/>
        Access to create and manage File Storage<br/>
        Access to create and manage networks<br/>
        Access to create and manage Backups
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell Database Admin</td>
      <td style={{padding: '3px 12px'}}>
        Access to Database-as-a-service in a Cell (includes all DBaaS services)<br/>
        Access to create and manage Block storage<br/>
        Access to create and manage VM Snapshots<br/>
        Access to create and manage networks<br/>
        Access to create and manage Backups
      </td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>Cell InfoSec Admin</td>
      <td style={{padding: '3px 12px'}}>Access to Activity Logs, Audit logs</td>
    </tr>
  </tbody>
</table>

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>Additional roles can be created on a custom basis by customers on need. Custom roles and service roles are planned for a future release.</div>
  </div>
</div>

# 7. Solution Design

The proposed architecture ensures high availability, fault tolerance, and efficient management for a multi-region Cloud Management platform. The platform is designed to support a CCP application with dual clusters per region, robust failover mechanisms, and global services. The architecture aligns with business continuity goals and optimal resource utilization.

Each Region consisting of multiple AZs will run independent Cirrus Cloud Platform components per AZ for all the microservices to manage infrastructure in that AZ. Cirrus Cloud Platform Root account services will run globally, which is responsible for aggregating organization specific data like metering, quota, project management. Furthermore, each region has two Cirrus Cloud Platform global services running in active-passive mode with their databases also in active-passive mode. Postgres and MongoDB clusters will run on virtual machines and will have different DB clusters in each zone working as active-passive clusters.

## 7.1 Regional Architecture

Each region contains:

### Cluster 1 (Primary) – Availability Zone 1

- Hosts main application services
- Web layer is deployed in 3 virtual machines hosted in DMZ. Web layer acts as reverse proxy to access application hosted in the application layer
- Contains the primary MongoDB database
- Serves as an active cluster during normal operations

### Cluster 2 (Standby) – Availability Zone 2

- Hosts replica application services
- Web layer is deployed in 3 virtual machines hosted in DMZ. Web layer acts as reverse proxy to access application hosted in the application layer
- Contains a replica of the MongoDB database
- Remains ready to take over in case of failure in Cluster 1

### Failover Mechanism

- Traffic to be routed to passive cluster automatically and script to promote database into passive cluster if active cluster is down
- MongoDB replica sets ensure data consistency during failover within a region

## 7.2 Global Services

Global service provides multi-region capabilities ensuring the following:

### Organization Onboarding

- Centralized onboarding process replicated across regions
- Ensures consistent user experience and service availability

### Metadata Management

- Centralized metadata replicated across three regions

Metadata that is replicated as global service component:

- Organization and Project Metadata Mappings to Region
- Quota management
- User and Organization Mapping information
- Aggregation of Metering and Usage data for Reporting and Notional Invoice

### Active Backup Failover

- GSLB probe to detect right endpoint to connect from an external system, allowing fallback to Backup when Active cluster is unavailable
- Internal Quorum based on 2n+1 system ensuring correct identification of Active cluster being down

### Disaster Recovery

- Acts as a coordination point for global failover scenarios

## 7.3 Multi-AZ Failover

To ensure resilience within a region:

- Both clusters are deployed across multiple availability zones (AZs)
- If an AZ fails, services failover within the region without impacting on the overall operations
- Load balancers and DNS routing ensure seamless redirection of traffic to active services

## 7.4 Extended Cluster for Global Databases

Global services are region specific and include mostly MongoDB collection which is storing Tenant/Project/User information hosted on clustered micro services with MongoDB Active-Active replication using change-stream.

OpenFGA Postgres and MongoDB, which will be DB backends for global AuthZ and global data service will have DB be running in Active-Passive mode between two regions. System will write to primary region OpenFGA by default as this is a read-heavy database.

There will be 3 VMs in each availability zone to form a 5-node cluster with an additional virtual machine which can be used as arbiter/etcd node to switch over in case of AZ failure. Deploying a 3+3 node setup distributes database responsibility evenly across two availability zones and ensures that no single AZ holds a disproportionate share of cluster's capacity or state. In the event of a failure in one AZ, the surviving AZ retains a full set of 3 nodes — ready to recover operations manually if quorum is lost. Even though quorum (typically 4/6) might break if an entire AZ fails, manual intervention allows safe failover and administrators can force reconfiguration (e.g., reinitiate leader election) in the surviving AZ.

Database Failover: A two-site solution for HA within a region has been considered due to unavailability of third region for deployment of arbiter node. Failover would be executed with help of script which will be developed in collaboration between Coredge and the Client.

## 7.5 Backup Strategy

Data from Active CCP cluster will be continuously backed up into a geo-replicated object storage bucket. Backup of north region CCP will be stored in south region and vice-a-versa. A scheduled backup job will be configured for incremental backup after every 30 minutes and full back up after every 24 hours with 3 months retention period. The backup data will consist of following files:

- Keycloak PostgreSQL DB
- Config Mongo DB
- Metrics Mongo DB
- ETCD DB of K8s cluster running CCP

Database clusters hosted in Virtual machines will be backed up using Veritas backup agent every 30 minutes and full back up after every 24 hours with 3 months retention period.

## 7.6 Implementation Considerations

### 1. Database Replication

- MongoDB Replication: Cluster 1 hosts the primary database and Cluster 2 hosts a replica with automatic synchronization in real time
- PostgreSQL Replication: Each region has an active standby database for Keycloak and CCP Application (using Logical Replication)

### 2. Networking

- Intra-region: High-speed, low-latency networking between AZs ensures seamless failover and data synchronization
- Inter-region: Dedicated network links or VPNs ensure secure and efficient communication between regions

### 3. Monitoring and Alerting

- Integrated monitoring tools (e.g., Prometheus, Grafana) will track cluster and database health
- Alerts will notify administrators of potential issues, triggering automated recovery workflows where possible

### 4. Security

- Encryption in transit (mTLS) and at rest (AES-256) for all data
- Role-based access control (RBAC) for applications and databases
- Regular security assessments and compliance checks

# 8. Pre-Requisites

The pre-requisites below are required for deployment of CCP on Kubernetes cluster:

- Wildcard SSL certificates for CCP hosting and dynamic customer account URLs
- Load Balancer and VIPs for each CCP endpoint
- DNS Server and credentials to create dynamic domains based on customer accounts
- Accessible Container registry to store container images
- Kubernetes compliant Storage with High IOPS performance
- Connectivity and credentials for SMTP server for email integration
- NTP and DNS server connectivity
- Connectivity and APIs to integrate with the BSS Portal platform

# 9. Constraints and Dependencies

The Cloud Management Platform solution (i.e. Cirrus Cloud Platform / CCP / Cloud Orbiter) will be deployed in control planes of each availability zone. It should not be deployed in workload pod.

# 10. Exclusions

The following tasks are out of scope for Cirrus Cloud Platform:

- Any hardware procurement and its deployment
- Any software procurement and associated licensing (operating system, database, backup software, management software) and its deployment
- Penetration Testing
- Performance Testing for any other component other than CCP
- Day2 operations for underlying infrastructure (Compute, Storage, and Network)
- Any application / configuration changes in the BSS Portal

# 11. RACI Matrix

The below table provides a high-level view of key activities/tasks and corresponding stakeholders.

R = Responsible | A = Accountable | C = Consulted | I = Informed

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <tbody>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>#</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Task</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>R</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>A</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>C</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>I</th>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>1</td>
      <td style={{padding: '3px 12px'}}>CCP Major / Minor Upgrade</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>2</td>
      <td style={{padding: '3px 12px'}}>OS patching and upgrades on CCP cluster VMs</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>3</td>
      <td style={{padding: '3px 12px'}}>CCP Kubernetes Cluster Patching</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>4</td>
      <td style={{padding: '3px 12px'}}>Infrastructure for Management Cluster</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>5</td>
      <td style={{padding: '3px 12px'}}>Storage driver plugin details for PVCs in Management Cluster</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>6</td>
      <td style={{padding: '3px 12px'}}>SSL Certificates and LB configuration for all required domains</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>7</td>
      <td style={{padding: '3px 12px'}}>Service Description</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
    <tr>
      <td style={{padding: '3px 12px'}}>8</td>
      <td style={{padding: '3px 12px'}}>Rate Card</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>The Client</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
      <td style={{padding: '3px 12px'}}>Coredge</td>
    </tr>
  </tbody>
</table>
