---
title: White Paper
sidebar_position: 1
---

# Building a Sovereign Cloud Platform with Cirrus Cloud Suite
## A unified cloud management platform for government and enterprise cloud services delivery

## Executive Summary	
Governments and enterprises across the globe are accelerating their transition to sovereign cloud infrastructure — cloud platforms that are locally controlled, independently operated, and built to meet the unique compliance, security, and governance requirements of national and regulated industries.
Cirrus Cloud Suite (CCS), developed by Coredge, is a hyper-scaler grade Cloud Management Platform (CMP) purpose-built to address this need. In combination with Cirrus Cloud Platform (CCP), the IaaS Orchestrator, and Cloud Orbiter, the Kubernetes Orchestrator, CCS delivers a unified cloud services platform that enables service providers to offer Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) to their customers through a single, self-service portal.
This White Paper presents the capabilities, architecture, service portfolio, and delivery approach of Cirrus Cloud Suite as deployed for a sovereign cloud platform serving government and enterprise customers. It is intended for technology leaders, cloud architects, and business decision makers evaluating a Cloud Management Platform for sovereign or enterprise cloud deployments.

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Key Insight</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>Cirrus Cloud Suite provides hyper-scaler grade self-service capabilities for Infrastructure, Platform, and Software services — designed for sovereign cloud environments.</div>
  </div>
</div>

### Key Highlights
- Unified Cloud Management Platform for IaaS, PaaS, and SaaS delivery
- Self-service portal with automated provisioning and policy-based governance
- Multi-region, multi-AZ high availability architecture with active-passive failover
- Comprehensive service portfolio delivered in three phased milestones (MVP1, MVP2, MVP3)
- Built-in Identity and Access Management with multi-tenant identity federation
- Scalable to 50,000 virtual machines and 200,000 pods per deployment
- Enterprise-grade security with mTLS, AES-256 encryption, and RBAC

### 1. The Business Challenge
As cloud adoption matures, governments and enterprises are increasingly recognizing that public hyperscale cloud alone does not meet all their needs. Sovereign cloud — cloud infrastructure that is locally deployed, nationally controlled, and operated independently — is emerging as a critical requirement for sectors handling sensitive data, regulated workloads, and strategic national infrastructure.
Building and operating a sovereign cloud platform at scale presents significant challenges:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Challenge</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Self-Service at Scale</td><td style={{padding: '3px 12px'}}>Government and enterprise customers expect on-demand provisioning of compute, storage, and network resources without manual intervention from the service provider.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Visibility & Governance</td><td style={{padding: '3px 12px'}}>Operating a multi-tenant cloud requires centralized visibility across all environments, with policy-based governance and compliance enforcement.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Operational Complexity</td><td style={{padding: '3px 12px'}}>Managing heterogeneous infrastructure — physical servers, virtual machines, Kubernetes clusters, and storage — through disparate tools creates operational overhead and increases risk.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security & Compliance</td><td style={{padding: '3px 12px'}}>Sovereign cloud workloads demand end-to-end encryption, identity federation, and role-based access control that meets national and industry compliance standards.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cost Optimization</td><td style={{padding: '3px 12px'}}>Without centralized metering, showback, and quota management, cloud spending becomes opaque and difficult to govern across multiple tenants and business units.</td></tr>
  </tbody>
</table>

### 2. The Solution — Cirrus Cloud Suite
Cirrus Cloud Suite (CCS) is a Cloud Management Platform developed by Coredge that provides hyper-scaler grade self-service capabilities for Infrastructure, Platform, and Software services. CCS is designed to operate as the management and orchestration layer above existing cloud infrastructure, enabling service providers to deliver cloud services to their customers through a unified, self-service experience.
CCS operates in combination with two complementary Coredge products:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Component</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Cirrus Cloud Suite (CCS)</td><td style={{padding: '3px 12px'}}>Cloud Management Platform — the top-layer self-service and governance platform that customers and operators interact with directly.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cirrus Cloud Platform (CCP)</td><td style={{padding: '3px 12px'}}>IaaS Orchestrator — manages the underlying OpenStack infrastructure, providing compute, storage, and networking resources.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud Orbiter</td><td style={{padding: '3px 12px'}}>Kubernetes Orchestrator — manages Kubernetes clusters across the platform, enabling container workload management and application deployment.</td></tr>
  </tbody>
</table>

<div style={{textAlign: "center", margin: "32px 0", maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="100%" style={{maxWidth:"800px"}} font-family="Arial, sans-serif">
  <rect width="800" height="420" fill="#f8faff" rx="12"/>
  <text x="400" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="#0a1628">Cirrus Cloud Suite — Platform Stack Architecture</text>
  <rect x="60" y="58" width="680" height="72" rx="10" fill="url(#grad1)" stroke="#1a56db" stroke-width="1.5"/>
  <text x="400" y="84" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" letter-spacing="0.06em">CIRRUS CLOUD SUITE (CCS)</text>
  <text x="400" y="102" text-anchor="middle" font-size="11" fill="#cfe0ff">Cloud Management Platform — Self-Service Portal · Admin Console · Governance · Metering</text>
  <text x="400" y="118" text-anchor="middle" font-size="10" fill="#a8c4f0">Identity &amp; Access (Keycloak · OpenFGA) · RBAC · Multi-Tenancy · API Gateway</text>
  <rect x="60" y="152" width="326" height="72" rx="10" fill="url(#grad2)" stroke="#0e9f6e" stroke-width="1.5"/>
  <text x="223" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" letter-spacing="0.06em">CIRRUS CLOUD PLATFORM (CCP)</text>
  <text x="223" y="196" text-anchor="middle" font-size="10.5" fill="#c6f6e0">IaaS Orchestrator</text>
  <text x="223" y="211" text-anchor="middle" font-size="10" fill="#a7edcc">OpenStack · Compute · Storage · Networking</text>
  <rect x="414" y="152" width="326" height="72" rx="10" fill="url(#grad3)" stroke="#7e3af2" stroke-width="1.5"/>
  <text x="577" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" letter-spacing="0.06em">CLOUD ORBITER</text>
  <text x="577" y="196" text-anchor="middle" font-size="10.5" fill="#ddd6fe">Kubernetes Orchestrator</text>
  <text x="577" y="211" text-anchor="middle" font-size="10" fill="#c4b5fd">Container Mgmt · App Deployment · PaaS/SaaS</text>
  <line x1="223" y1="224" x2="223" y2="244" stroke="#0e9f6e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="577" y1="224" x2="577" y2="244" stroke="#7e3af2" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="219,244 227,244 223,252" fill="#0e9f6e"/>
  <polygon points="573,244 581,244 577,252" fill="#7e3af2"/>
  <rect x="60" y="252" width="680" height="60" rx="10" fill="url(#grad4)" stroke="#374151" stroke-width="1.5"/>
  <text x="400" y="278" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" letter-spacing="0.06em">INFRASTRUCTURE LAYER</text>
  <text x="400" y="297" text-anchor="middle" font-size="10.5" fill="#d1d5db">Physical Servers · Virtual Machines · Bare Metal · Storage Arrays · Network Fabric</text>
  <line x1="400" y1="130" x2="400" y2="149" stroke="#1a56db" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="396,149 404,149 400,157" fill="#1a56db"/>
  <line x1="223" y1="314" x2="223" y2="334" stroke="#0e9f6e" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="577" y1="314" x2="577" y2="334" stroke="#7e3af2" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="219,334 227,334 223,342" fill="#374151"/>
  <polygon points="573,334 581,334 577,342" fill="#374151"/>
  <rect x="60" y="336" width="680" height="62" rx="8" fill="#f0f4ff" stroke="#c7d4f0" stroke-width="1"/>
  <text x="400" y="354" text-anchor="middle" font-size="11" font-weight="600" fill="#374151">Delivered Services</text>
  <circle cx="130" cy="372" r="7" fill="#1a56db"/><text x="143" y="376" font-size="10" fill="#374151">IaaS</text>
  <circle cx="210" cy="372" r="7" fill="#0e9f6e"/><text x="223" y="376" font-size="10" fill="#374151">PaaS</text>
  <circle cx="290" cy="372" r="7" fill="#7e3af2"/><text x="303" y="376" font-size="10" fill="#374151">SaaS</text>
  <circle cx="380" cy="372" r="7" fill="#e3a008"/><text x="393" y="376" font-size="10" fill="#374151">Governance</text>
  <circle cx="480" cy="372" r="7" fill="#e02424"/><text x="493" y="376" font-size="10" fill="#374151">Security</text>
  <circle cx="565" cy="372" r="7" fill="#057a55"/><text x="578" y="376" font-size="10" fill="#374151">Metering &amp; FinOps</text>
  <defs>
    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1a56db"/><stop offset="100%" stop-color="#1e429f"/></linearGradient>
    <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0e9f6e"/><stop offset="100%" stop-color="#057a55"/></linearGradient>
    <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7e3af2"/><stop offset="100%" stop-color="#6c2bd9"/></linearGradient>
    <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#374151"/><stop offset="100%" stop-color="#1f2937"/></linearGradient>
  </defs>
</svg>

*Figure 1: Cirrus Cloud Suite — Layered Platform Architecture*

</div>

Together, these three components provide a complete, end-to-end sovereign cloud platform layer that serves both the internal teams of the cloud service provider — Day 2 operations, business units, security, FinOps, and cloud governance — and the end customers who consume cloud services.

### 3. Platform Capabilities
Cirrus Cloud Suite delivers five foundational capabilities that address the core challenges of sovereign and enterprise cloud management:

<div style={{textAlign: "center", margin: "32px 0", maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 340" width="100%" style={{maxWidth:"800px"}} font-family="Arial, sans-serif">
  <rect width="800" height="340" fill="#f8faff" rx="12"/>
  <text x="400" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#0a1628">Five Core Platform Capabilities</text>
  <circle cx="400" cy="185" r="52" fill="url(#hubgrad)" stroke="#1a56db" stroke-width="2.5"/>
  <text x="400" y="179" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">CIRRUS</text>
  <text x="400" y="195" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">CLOUD</text>
  <text x="400" y="211" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">SUITE</text>
  <line x1="355" y1="155" x2="218" y2="106" stroke="#c7d4f0" stroke-width="1.5"/>
  <line x1="348" y1="176" x2="148" y2="195" stroke="#c7d4f0" stroke-width="1.5"/>
  <line x1="355" y1="215" x2="218" y2="272" stroke="#c7d4f0" stroke-width="1.5"/>
  <line x1="445" y1="155" x2="582" y2="106" stroke="#c7d4f0" stroke-width="1.5"/>
  <line x1="452" y1="176" x2="652" y2="195" stroke="#c7d4f0" stroke-width="1.5"/>
  <rect x="60" y="60" width="160" height="90" rx="10" fill="url(#cap1)" stroke="#1a56db" stroke-width="1.5"/>
  <text x="80" y="82" font-size="18">🖥</text>
  <text x="140" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Self-Service</text>
  <text x="140" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Provisioning</text>
  <text x="140" y="116" text-anchor="middle" font-size="9" fill="#bfdbfe">On-demand VMs, Storage,</text>
  <text x="140" y="129" text-anchor="middle" font-size="9" fill="#bfdbfe">Containers &amp; Bare Metal</text>
  <text x="140" y="142" text-anchor="middle" font-size="9" fill="#bfdbfe">without manual ops</text>
  <rect x="30" y="150" width="118" height="90" rx="10" fill="url(#cap2)" stroke="#0e9f6e" stroke-width="1.5"/>
  <text x="50" y="172" font-size="16">📊</text>
  <text x="89" y="173" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Visibility</text>
  <text x="89" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Across Envs</text>
  <text x="89" y="205" text-anchor="middle" font-size="9" fill="#a7f3d0">All regions &amp; AZs</text>
  <text x="89" y="218" text-anchor="middle" font-size="9" fill="#a7f3d0">Prometheus +</text>
  <text x="89" y="231" text-anchor="middle" font-size="9" fill="#a7f3d0">Grafana monitoring</text>
  <rect x="60" y="248" width="160" height="76" rx="10" fill="url(#cap3)" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="80" y="270" font-size="16">⚙️</text>
  <text x="140" y="271" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Centralised</text>
  <text x="140" y="285" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Management</text>
  <text x="140" y="302" text-anchor="middle" font-size="9" fill="#ddd6fe">REST API gateway · RBAC</text>
  <text x="140" y="315" text-anchor="middle" font-size="9" fill="#ddd6fe">Tenant → Cell hierarchy</text>
  <rect x="580" y="60" width="160" height="90" rx="10" fill="url(#cap4)" stroke="#e02424" stroke-width="1.5"/>
  <text x="600" y="82" font-size="18">🔒</text>
  <text x="660" y="83" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Compliance &amp;</text>
  <text x="660" y="98" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Security</text>
  <text x="660" y="116" text-anchor="middle" font-size="9" fill="#fecaca">Keycloak IAM · OpenFGA</text>
  <text x="660" y="129" text-anchor="middle" font-size="9" fill="#fecaca">mTLS · AES-256 · SAML</text>
  <text x="660" y="142" text-anchor="middle" font-size="9" fill="#fecaca">11 service-specific roles</text>
  <rect x="652" y="150" width="118" height="90" rx="10" fill="url(#cap5)" stroke="#e3a008" stroke-width="1.5"/>
  <text x="672" y="172" font-size="16">💰</text>
  <text x="711" y="173" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Optimised</text>
  <text x="711" y="188" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Cloud Spend</text>
  <text x="711" y="205" text-anchor="middle" font-size="9" fill="#fef3c7">Metering &amp;</text>
  <text x="711" y="218" text-anchor="middle" font-size="9" fill="#fef3c7">Showback · Quota</text>
  <text x="711" y="231" text-anchor="middle" font-size="9" fill="#fef3c7">Management · FinOps</text>
  <defs>
    <radialGradient id="hubgrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1a56db"/></radialGradient>
    <linearGradient id="cap1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a56db"/><stop offset="100%" stop-color="#1e429f"/></linearGradient>
    <linearGradient id="cap2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#047857"/></linearGradient>
    <linearGradient id="cap3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
    <linearGradient id="cap4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#b91c1c"/></linearGradient>
    <linearGradient id="cap5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
  </defs>
</svg>

*Figure 2: Five Core Platform Capabilities of Cirrus Cloud Suite*

</div>

#### 3.1 Self-Service Access for Automated Provisioning and Deployments
CCS provides a rich, user-friendly Self-Service Console as the primary interface for end users. Through intuitive interfaces, customers can provision and manage virtual machines, storage volumes, load balancers, container workloads, and bare metal servers without requiring intervention from the service provider's operations team.
Organisation administrators can create and manage Projects and Cells, define access control policies, and ensure proper resource allocation and usage — all from a single portal.
#### 3.2 Visibility Across Environments
The CCS Admin Console provides the service provider's operations team with a comprehensive view of the entire cloud environment — all virtual machines, volumes, load balancers, container namespaces, and infrastructure health indicators — across all regions and availability zones.

Integrated monitoring through Prometheus and Grafana enables proactive health tracking, alerting, and automated recovery workflows for cluster and database components.
#### 3.3 Centralised Management
CCS Coredge Platform Services is composed of purpose-built microservices that communicate through well-defined REST APIs and internal routing mechanisms. The platform provides centralized access control and API logging through an in-built API gateway, ensuring secure and authorized access to all platform resources from a single management plane.
The platform's resource hierarchy — Tenant → Cell → Resources — provides a structured, governed model for multi-tenant resource management, with quota management enforced at both tenant and cell levels.
#### 3.4 Improved Compliance and Security
CCS provides multi-layered security architecture. The built-in Identity and Access Management server (powered by Keycloak) is multi-tenant by design, with the capability to federate with external identity providers including BSS Portal and ADFS using SAML 2.0. For each customer organisation, CCS creates a unique identity account, ensuring complete isolation between tenants.
Role-Based Access Control (RBAC) is enforced across all platform layers through OpenFGA, Coredge's AuthZ engine. Eleven pre-defined service-specific roles and seven organisation-level roles provide granular access control aligned with the principle of least privilege.
All data is protected with encryption in transit (mTLS) and encryption at rest (AES-256). Regular security assessments and compliance checks are built into the platform's operational model.
#### 3.5 Optimised Cloud Spends
CCS includes built-in metering, showback, and quota management through the orbiter-metering module. This provides full visibility in resource consumption across all tenants and cells, enabling the service provider to generate notional invoices, enforce spending limits, and give customers visibility into their own cloud usage.

### 4. Service Portfolio
CCS delivers cloud services to customers in a phased manner across three milestones. This approach ensures that foundational services are delivered and stabilised before expanding the portfolio, reducing deployment risk and enabling early value realisation.

<div style={{textAlign: "center", margin: "32px 0", maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 460" width="100%" style={{maxWidth:"860px"}} font-family="Arial, sans-serif">
  <rect width="860" height="460" fill="#f8faff" rx="12"/>
  <text x="430" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#0a1628">Service Portfolio — Phased Delivery Roadmap</text>
  <line x1="60" y1="76" x2="800" y2="76" stroke="#c7d4f0" stroke-width="2"/>
  <circle cx="190" cy="76" r="14" fill="#1a56db"/><text x="190" y="81" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">1</text>
  <circle cx="430" cy="76" r="14" fill="#0e9f6e"/><text x="430" y="81" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">2</text>
  <circle cx="680" cy="76" r="14" fill="#7c3aed"/><text x="680" y="81" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">3</text>
  <text x="190" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1a56db">MVP1 — Foundation</text>
  <text x="430" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#0e9f6e">MVP2 — Expanded</text>
  <text x="680" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#7c3aed">MVP3 — Advanced</text>
  <rect x="30" y="104" width="240" height="328" rx="10" fill="#eff6ff" stroke="#1a56db" stroke-width="1.5"/>
  <rect x="42" y="114" width="216" height="26" rx="5" fill="#1a56db"/>
  <text x="150" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">💻 Compute</text>
  <text x="150" y="149" text-anchor="middle" font-size="9" fill="#374151">Virtual Machine · Container as a Service</text>
  <text x="150" y="161" text-anchor="middle" font-size="9" fill="#374151">Bare Metal as a Service (BMaaS)</text>
  <rect x="42" y="170" width="216" height="18" rx="4" fill="#2563eb"/>
  <text x="150" y="183" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">💾 Storage</text>
  <text x="150" y="199" text-anchor="middle" font-size="9" fill="#374151">Block · Object · File Storage</text>
  <rect x="42" y="208" width="216" height="18" rx="4" fill="#1d4ed8"/>
  <text x="150" y="221" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🌐 Network</text>
  <text x="150" y="237" text-anchor="middle" font-size="9" fill="#374151">ALB · NLB · VPN · Firewall · NAT · VPC</text>
  <rect x="42" y="246" width="216" height="18" rx="4" fill="#3b82f6"/>
  <text x="150" y="259" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">📊 Monitoring</text>
  <text x="150" y="275" text-anchor="middle" font-size="9" fill="#374151">Log Analyzer · Alarms · Notifications</text>
  <rect x="42" y="284" width="216" height="18" rx="4" fill="#0369a1"/>
  <text x="150" y="297" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🗄 Database</text>
  <text x="150" y="313" text-anchor="middle" font-size="9" fill="#374151">Oracle DBaaS · MongoDB DBaaS</text>
  <rect x="42" y="322" width="216" height="18" rx="4" fill="#1e40af"/>
  <text x="150" y="335" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🔒 Security</text>
  <text x="150" y="351" text-anchor="middle" font-size="9" fill="#374151">SIEM · CWPP · WAF · Log Monitoring</text>
  <rect x="42" y="360" width="216" height="18" rx="4" fill="#1e3a8a"/>
  <text x="150" y="373" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🏗 Foundation</text>
  <text x="150" y="389" text-anchor="middle" font-size="9" fill="#374151">IAM · MFA · DNS · NTP · PAM · SMTP</text>
  <rect x="42" y="398" width="216" height="18" rx="4" fill="#60a5fa"/>
  <text x="150" y="411" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">💼 Backup &amp; Support</text>
  <text x="150" y="425" text-anchor="middle" font-size="9" fill="#374151">BaaS · Basic &amp; Enterprise Support</text>
  <rect x="305" y="104" width="240" height="248" rx="10" fill="#ecfdf5" stroke="#0e9f6e" stroke-width="1.5"/>
  <rect x="317" y="114" width="216" height="26" rx="5" fill="#0e9f6e"/>
  <text x="425" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">💾 Storage</text>
  <text x="425" y="149" text-anchor="middle" font-size="9" fill="#374151">Archival Storage</text>
  <rect x="317" y="160" width="216" height="18" rx="4" fill="#059669"/>
  <text x="425" y="173" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🗄 Database</text>
  <text x="425" y="189" text-anchor="middle" font-size="9" fill="#374151">MS SQL (Std/Enterprise/Web) · Managed DBaaS</text>
  <rect x="317" y="198" width="216" height="18" rx="4" fill="#047857"/>
  <text x="425" y="211" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🌐 Network</text>
  <text x="425" y="227" text-anchor="middle" font-size="9" fill="#374151">CDN · MPLS (Partner &amp; Dedicated)</text>
  <rect x="317" y="236" width="216" height="18" rx="4" fill="#065f46"/>
  <text x="425" y="249" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🔒 Security (Advanced)</text>
  <text x="425" y="265" text-anchor="middle" font-size="9" fill="#374151">HSM · DDoS · TLS Mgmt · Digital Forensics</text>
  <rect x="317" y="274" width="216" height="18" rx="4" fill="#10b981"/>
  <text x="425" y="287" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">📨 Queue Services</text>
  <text x="425" y="303" text-anchor="middle" font-size="9" fill="#374151">Kafka as a Service</text>
  <rect x="580" y="104" width="240" height="198" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
  <rect x="592" y="114" width="216" height="26" rx="5" fill="#7c3aed"/>
  <text x="700" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">🌐 Network</text>
  <text x="700" y="149" text-anchor="middle" font-size="9" fill="#374151">Bandwidth as a Service / QoS (BWaaS)</text>
  <rect x="592" y="160" width="216" height="18" rx="4" fill="#6d28d9"/>
  <text x="700" y="173" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">🗄 Database</text>
  <text x="700" y="189" text-anchor="middle" font-size="9" fill="#374151">MariaDB Managed · NoSQL Managed DBaaS</text>
  <rect x="592" y="198" width="216" height="18" rx="4" fill="#5b21b6"/>
  <text x="700" y="211" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">☁ Disaster Recovery</text>
  <text x="700" y="227" text-anchor="middle" font-size="9" fill="#374151">Disaster Recovery as a Service (DRaaS)</text>
  <rect x="592" y="236" width="216" height="18" rx="4" fill="#4c1d95"/>
  <text x="700" y="249" text-anchor="middle" font-size="9.5" font-weight="700" fill="#fff">📨 Messaging</text>
  <text x="700" y="265" text-anchor="middle" font-size="9" fill="#374151">Message Broker Services</text>
  <line x1="270" y1="228" x2="305" y2="228" stroke="#374151" stroke-width="2"/>
  <polygon points="301,224 309,228 301,232" fill="#374151"/>
  <line x1="545" y1="203" x2="580" y2="203" stroke="#374151" stroke-width="2"/>
  <polygon points="576,199 584,203 576,207" fill="#374151"/>
</svg>

*Figure 3: Phased Service Portfolio Delivery — MVP1, MVP2, MVP3*

</div>

#### 4.1 MVP1 — Foundation Services
The first milestone delivers the core infrastructure and platform services required for a fully operational sovereign cloud platform:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Compute</td><td style={{padding: '3px 12px'}}>Virtual Machine · Container as a Service · Bare Metal as a Service (BMaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Block Storage · Object Storage · File Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Application Load Balancer · Network Load Balancer · VPN Gateway (Site-to-Site & Point-to-Site) · Firewall · Public IP · NAT Gateway · VPC</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Monitoring</td><td style={{padding: '3px 12px'}}>Log Analyzer · Operational Metric Collection · Alarm Service · Notification Service</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Managed Database as a Service (Oracle and MongoDB)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>Security Incident and Event Management · Log Monitoring · Cloud Workload Protection · Web Application Firewall</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Foundation</td><td style={{padding: '3px 12px'}}>IAM · SMTP · Identity Federation · MFA · DNS · NTP · Privileged Access Management · IP Address Management · Active Directory Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Support</td><td style={{padding: '3px 12px'}}>Basic Support Services · Enterprise Support Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Services</td><td style={{padding: '3px 12px'}}>Managed Services</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup</td><td style={{padding: '3px 12px'}}>Backup as a Service</td></tr>
  </tbody>
</table>

#### 4.2 MVP2 — Expanded Services
The second milestone expands the portfolio with advanced storage, database, network, and security services:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Storage</td><td style={{padding: '3px 12px'}}>Archival Storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Microsoft SQL-as-a-Service (Standard, Enterprise, Web Editions) · Managed Database as a Service · Database Licenses</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Content Delivery Network · MPLS Connectivity (Partner & Dedicated Interconnect)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Security</td><td style={{padding: '3px 12px'}}>Cloud-Based Hardware Security Module · DDoS Protection · TLS/SSL Certificate Management · Encryption Services · Digital Forensics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Additional</td><td style={{padding: '3px 12px'}}>Queue Services (Kafka as a Service)</td></tr>
  </tbody>
</table>

#### 4.3 MVP3 — Advanced Services
The third milestone delivers advanced network, database, disaster recovery, and messaging services:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Services</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Network</td><td style={{padding: '3px 12px'}}>Bandwidth as a Service / QoS (BWaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database</td><td style={{padding: '3px 12px'}}>Managed Database as a Service — MariaDB · Managed Database as a Service — NoSQL</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Disaster Recovery</td><td style={{padding: '3px 12px'}}>Disaster Recovery as a Service (DRaaS)</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Additional</td><td style={{padding: '3px 12px'}}>Message Broker Services</td></tr>
  </tbody>
</table>

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>The above list of services may change in accordance with the guidance provided by the Client Business team.</div>
  </div>
</div>

### 5. Architecture and High Availability
The CCS architecture is designed from the ground up for high availability, fault tolerance, and multi-region resilience. The platform operates across multiple regions and availability zones, with every layer of the stack engineered for continuous operation even in the event of infrastructure failures.
#### 5.1 Multi-Region, Multi-AZ Architecture

<div style={{textAlign: "center", margin: "32px 0", maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 500" width="100%" style={{maxWidth:"860px"}} font-family="Arial, sans-serif">
  <rect width="860" height="500" fill="#f8faff" rx="12"/>
  <text x="430" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="#0a1628">Multi-Region, Multi-AZ High Availability Architecture</text>
  <rect x="30" y="54" width="370" height="380" rx="12" fill="#eef4ff" stroke="#1a56db" stroke-width="2"/>
  <text x="215" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1a56db" letter-spacing="0.04em">REGION 1 (North)</text>
  <rect x="48" y="90" width="155" height="310" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="125" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Availability Zone 1</text>
  <rect x="58" y="122" width="135" height="50" rx="6" fill="#1a56db"/>
  <text x="125" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Cluster 1</text>
  <text x="125" y="160" text-anchor="middle" font-size="9" fill="#bfdbfe">PRIMARY (Active)</text>
  <rect x="58" y="182" width="135" height="36" rx="5" fill="#fff" stroke="#93c5fd" stroke-width="1"/>
  <text x="125" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="#1e40af">Web Layer (DMZ)</text>
  <text x="125" y="208" text-anchor="middle" font-size="8.5" fill="#6b7280">3 VMs · Reverse Proxy</text>
  <rect x="58" y="228" width="135" height="36" rx="5" fill="#fff" stroke="#93c5fd" stroke-width="1"/>
  <text x="125" y="241" text-anchor="middle" font-size="9" font-weight="600" fill="#1e40af">K8s Cluster</text>
  <text x="125" y="254" text-anchor="middle" font-size="8.5" fill="#6b7280">CCS Microservices</text>
  <rect x="58" y="274" width="135" height="36" rx="5" fill="#fff" stroke="#93c5fd" stroke-width="1"/>
  <text x="125" y="287" text-anchor="middle" font-size="9" font-weight="600" fill="#1e40af">MongoDB Primary</text>
  <text x="125" y="300" text-anchor="middle" font-size="8.5" fill="#6b7280">Config + Metrics DB</text>
  <rect x="58" y="320" width="135" height="36" rx="5" fill="#fff" stroke="#93c5fd" stroke-width="1"/>
  <text x="125" y="333" text-anchor="middle" font-size="9" font-weight="600" fill="#1e40af">PostgreSQL Primary</text>
  <text x="125" y="346" text-anchor="middle" font-size="8.5" fill="#6b7280">Keycloak + OpenFGA</text>
  <rect x="218" y="90" width="165" height="310" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="300" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">Availability Zone 2</text>
  <rect x="228" y="122" width="145" height="50" rx="6" fill="#7c3aed"/>
  <text x="300" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Cluster 2</text>
  <text x="300" y="160" text-anchor="middle" font-size="9" fill="#ddd6fe">STANDBY (Passive)</text>
  <rect x="228" y="182" width="145" height="36" rx="5" fill="#fff" stroke="#c4b5fd" stroke-width="1"/>
  <text x="300" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="#5b21b6">Web Layer (DMZ)</text>
  <text x="300" y="208" text-anchor="middle" font-size="8.5" fill="#6b7280">3 VMs · Standby</text>
  <rect x="228" y="228" width="145" height="36" rx="5" fill="#fff" stroke="#c4b5fd" stroke-width="1"/>
  <text x="300" y="241" text-anchor="middle" font-size="9" font-weight="600" fill="#5b21b6">K8s Cluster Replica</text>
  <text x="300" y="254" text-anchor="middle" font-size="8.5" fill="#6b7280">CCS Microservices</text>
  <rect x="228" y="274" width="145" height="36" rx="5" fill="#fff" stroke="#c4b5fd" stroke-width="1"/>
  <text x="300" y="287" text-anchor="middle" font-size="9" font-weight="600" fill="#5b21b6">MongoDB Replica</text>
  <text x="300" y="300" text-anchor="middle" font-size="8.5" fill="#6b7280">Config + Metrics DB</text>
  <rect x="228" y="320" width="145" height="36" rx="5" fill="#fff" stroke="#c4b5fd" stroke-width="1"/>
  <text x="300" y="333" text-anchor="middle" font-size="9" font-weight="600" fill="#5b21b6">PostgreSQL Replica</text>
  <text x="300" y="346" text-anchor="middle" font-size="8.5" fill="#6b7280">Keycloak + OpenFGA</text>
  <line x1="193" y1="147" x2="228" y2="147" stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="224,143 232,147 224,151" fill="#e74c3c"/>
  <text x="210" y="140" text-anchor="middle" font-size="8" fill="#e74c3c" font-weight="600">Failover</text>
  <rect x="460" y="54" width="370" height="380" rx="12" fill="#f0fdf4" stroke="#0e9f6e" stroke-width="2"/>
  <text x="645" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#0e9f6e" letter-spacing="0.04em">REGION 2 (South)</text>
  <rect x="478" y="90" width="155" height="310" rx="8" fill="#d1fae5" stroke="#34d399" stroke-width="1.5"/>
  <text x="555" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#065f46">Availability Zone 3</text>
  <rect x="488" y="122" width="135" height="50" rx="6" fill="#059669"/>
  <text x="555" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Cluster 1</text>
  <text x="555" y="160" text-anchor="middle" font-size="9" fill="#a7f3d0">PRIMARY (Active)</text>
  <rect x="488" y="182" width="135" height="36" rx="5" fill="#fff" stroke="#6ee7b7" stroke-width="1"/>
  <text x="555" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="#065f46">Web Layer (DMZ)</text>
  <text x="555" y="208" text-anchor="middle" font-size="8.5" fill="#6b7280">3 VMs · Reverse Proxy</text>
  <rect x="488" y="228" width="135" height="36" rx="5" fill="#fff" stroke="#6ee7b7" stroke-width="1"/>
  <text x="555" y="241" text-anchor="middle" font-size="9" font-weight="600" fill="#065f46">K8s Cluster</text>
  <text x="555" y="254" text-anchor="middle" font-size="8.5" fill="#6b7280">CCS Microservices</text>
  <rect x="488" y="274" width="135" height="36" rx="5" fill="#fff" stroke="#6ee7b7" stroke-width="1"/>
  <text x="555" y="287" text-anchor="middle" font-size="9" font-weight="600" fill="#065f46">MongoDB Primary</text>
  <text x="555" y="300" text-anchor="middle" font-size="8.5" fill="#6b7280">Config + Metrics DB</text>
  <rect x="488" y="320" width="135" height="36" rx="5" fill="#fff" stroke="#6ee7b7" stroke-width="1"/>
  <text x="555" y="333" text-anchor="middle" font-size="9" font-weight="600" fill="#065f46">PostgreSQL Primary</text>
  <text x="555" y="346" text-anchor="middle" font-size="8.5" fill="#6b7280">Keycloak + OpenFGA</text>
  <rect x="648" y="90" width="165" height="310" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="730" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">Availability Zone 4</text>
  <rect x="658" y="122" width="145" height="50" rx="6" fill="#d97706"/>
  <text x="730" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">Cluster 2</text>
  <text x="730" y="160" text-anchor="middle" font-size="9" fill="#fef3c7">STANDBY (Passive)</text>
  <rect x="658" y="182" width="145" height="36" rx="5" fill="#fff" stroke="#fcd34d" stroke-width="1"/>
  <text x="730" y="195" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e">Web Layer (DMZ)</text>
  <text x="730" y="208" text-anchor="middle" font-size="8.5" fill="#6b7280">3 VMs · Standby</text>
  <rect x="658" y="228" width="145" height="36" rx="5" fill="#fff" stroke="#fcd34d" stroke-width="1"/>
  <text x="730" y="241" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e">K8s Cluster Replica</text>
  <text x="730" y="254" text-anchor="middle" font-size="8.5" fill="#6b7280">CCS Microservices</text>
  <rect x="658" y="274" width="145" height="36" rx="5" fill="#fff" stroke="#fcd34d" stroke-width="1"/>
  <text x="730" y="287" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e">MongoDB Replica</text>
  <text x="730" y="300" text-anchor="middle" font-size="8.5" fill="#6b7280">Config + Metrics DB</text>
  <rect x="658" y="320" width="145" height="36" rx="5" fill="#fff" stroke="#fcd34d" stroke-width="1"/>
  <text x="730" y="333" text-anchor="middle" font-size="9" font-weight="600" fill="#92400e">PostgreSQL Replica</text>
  <text x="730" y="346" text-anchor="middle" font-size="8.5" fill="#6b7280">Keycloak + OpenFGA</text>
  <line x1="623" y1="147" x2="658" y2="147" stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="654,143 662,147 654,151" fill="#e74c3c"/>
  <text x="640" y="140" text-anchor="middle" font-size="8" fill="#e74c3c" font-weight="600">Failover</text>
  <line x1="400" y1="244" x2="460" y2="244" stroke="#0a1628" stroke-width="2.2" stroke-dasharray="7,4"/>
  <polygon points="456,240 464,244 456,248" fill="#0a1628"/>
  <polygon points="404,240 396,244 404,248" fill="#0a1628"/>
  <text x="430" y="237" text-anchor="middle" font-size="9" font-weight="700" fill="#0a1628">GSLB</text>
  <text x="430" y="259" text-anchor="middle" font-size="8" fill="#6b7280">Active-Active</text>
  <text x="430" y="270" text-anchor="middle" font-size="8" fill="#6b7280">Replication</text>
  <path d="M 215 434 Q 430 460 645 434" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="641,430 649,434 641,438" fill="#dc2626"/>
  <text x="430" y="470" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="600">Cross-Region Backup Replication (5 TB object storage per region)</text>
  <rect x="30" y="445" width="160" height="22" rx="4" fill="#1a56db" opacity="0.15" stroke="#1a56db" stroke-width="1"/>
  <text x="110" y="460" text-anchor="middle" font-size="9" fill="#1a56db" font-weight="600">Active / Primary Cluster</text>
  <rect x="210" y="445" width="160" height="22" rx="4" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" stroke-width="1"/>
  <text x="290" y="460" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">Standby / Passive Cluster</text>
  <rect x="530" y="445" width="130" height="22" rx="4" fill="none" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4,2"/>
  <text x="595" y="460" text-anchor="middle" font-size="9" fill="#e74c3c" font-weight="600">Automatic Failover</text>
</svg>

*Figure 4: Multi-Region, Multi-AZ High Availability Architecture*

</div>

Each region consists of multiple Availability Zones (AZs). Within each region, CCS runs independent components per AZ — all microservices managing infrastructure in that AZ operate autonomously. Two clusters run per region in an active-passive configuration:

**Cluster 1 (Primary):** Hosts the main application services and primary MongoDB database in Availability Zone 1. This is an active cluster during normal operations. The web layer is deployed across 3 virtual machines in the DMZ, acting as a reverse proxy to the Kubernetes cluster in the production zone.

**Cluster 2 (Standby):** Hosts replica application services and a replica MongoDB database in Availability Zone 2. This cluster remains in standby, ready to assume primary responsibilities immediately upon failure of Cluster 1.
#### 5.2 Failover and Continuity
CCS provides automated failovers at multiple levels:

**Regional Failover:** Traffic is automatically routed to the passive cluster when the active cluster fails. MongoDB replica sets ensure data consistency during failover within a region.

**Multi-AZ Failover:** If an individual AZ fails, services fail over within the region without impacting overall platform operations. Load balancers and DNS routing ensure seamless traffic redirection to active services.

**Global Services Continuity:** Global services — responsible for organisation onboarding, metadata management, metering aggregation, and quota management — run in active-passive mode across regions. A GSLB probe detects endpoint availability and redirects traffic to the backup region when the active cluster goes down. Internal quorum is based on a 2n+1 system for accurate active cluster identification.

#### 5.3 Global Database Architecture
Global services store Tenant, Project, and User information in MongoDB, replicated using Active-Active replication with change-stream. OpenFGA (the AuthZ engine) and its PostgreSQL backend run in Active-Passive mode between regions, with writes going to the primary region by default since this is a read-heavy database.
A 3+3 node setup distributes database responsibility evenly across two availability zones. In the event of an AZ failure, the surviving AZ retains a full set of 3 nodes, enabling safe manual failover. Administrators can force reconfiguration — such as reinitiating leader elections in the surviving AZ when quorum is lost.

#### 5.4 Backup and Data Protection
CCS implements a comprehensive, automated backup strategy:

**Application Data Backup:** Active CCS cluster data — including Keycloak PostgreSQL DB, Config MongoDB, Metrics MongoDB, and ETCD DB of the Kubernetes cluster — is continuously backed up to a geo-replicated object storage bucket. North region backups are stored in the south region and vice versa.

**Database VM Backup:** Database clusters hosted on virtual machines are backed up using the Veritas backup agent.
Backup Schedule: Incremental backup every 30 minutes, full back up every 24 hours, with a 3-month retention period.

**Storage Allocation:** 5 TB object storage per region for configuration replication, 5 TB for log retention, and 10 TB cross-region object storage for backup data.

### 6. Identity, Access Management and Multi-Tenancy
CCS is built as a multi-tenant platform from the ground up. Each customer organisation operates within a completely isolated identity and resource boundary, governed by a structured hierarchy and role-based access control framework.
#### 6.1 Platform Hierarchy
Resources in CCS are organized in a structured hierarchy that maps directly to the customer's BSS Portal construct:

<div style={{textAlign: "center", margin: "32px 0", maxWidth: "680px", marginLeft: "auto", marginRight: "auto"}}>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 390" width="100%" style={{maxWidth:"760px"}} font-family="Arial, sans-serif">
  <rect width="760" height="390" fill="#f8faff" rx="12"/>
  <text x="380" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#0a1628">Platform Resource Hierarchy — BSS Portal to CCS Mapping</text>
  <rect x="40" y="50" width="310" height="36" rx="8" fill="#1a56db"/>
  <text x="195" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" letter-spacing="0.05em">BSS PORTAL</text>
  <rect x="410" y="50" width="310" height="36" rx="8" fill="#0e9f6e"/>
  <text x="565" y="74" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" letter-spacing="0.05em">CIRRUS CLOUD SUITE</text>
  <line x1="380" y1="86" x2="380" y2="360" stroke="#c7d4f0" stroke-width="2" stroke-dasharray="6,4"/>
  <rect x="55" y="112" width="280" height="52" rx="8" fill="url(#bss1)" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="195" y="133" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Party</text>
  <text x="195" y="152" text-anchor="middle" font-size="10" fill="#bfdbfe">Top-level customer entity / Organisation</text>
  <line x1="335" y1="138" x2="425" y2="138" stroke="#1a56db" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="380" y="131" text-anchor="middle" font-size="9" fill="#1a56db" font-weight="600">maps to</text>
  <rect x="425" y="112" width="280" height="52" rx="8" fill="url(#ccs1)" stroke="#059669" stroke-width="1.5"/>
  <text x="565" y="133" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Tenant</text>
  <text x="565" y="152" text-anchor="middle" font-size="10" fill="#a7f3d0">Isolated domain · Quota enforced · Multi-cell</text>
  <line x1="195" y1="164" x2="195" y2="194" stroke="#3b82f6" stroke-width="1.8"/>
  <polygon points="191,190 199,190 195,198" fill="#3b82f6"/>
  <rect x="55" y="198" width="280" height="52" rx="8" fill="url(#bss2)" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="195" y="219" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Billing Account</text>
  <text x="195" y="238" text-anchor="middle" font-size="10" fill="#dbeafe">Financial/operational sub-account</text>
  <line x1="335" y1="224" x2="425" y2="224" stroke="#0e9f6e" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="421,220 429,224 421,228" fill="#0e9f6e"/>
  <text x="380" y="217" text-anchor="middle" font-size="9" fill="#0e9f6e" font-weight="600">maps to</text>
  <rect x="425" y="198" width="280" height="52" rx="8" fill="url(#ccs2)" stroke="#34d399" stroke-width="1.5"/>
  <text x="565" y="219" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Cell</text>
  <text x="565" y="238" text-anchor="middle" font-size="10" fill="#d1fae5">Logical resource group · Quota inherited · Isolated</text>
  <line x1="195" y1="250" x2="195" y2="280" stroke="#60a5fa" stroke-width="1.8"/>
  <polygon points="191,276 199,276 195,284" fill="#60a5fa"/>
  <rect x="55" y="284" width="280" height="52" rx="8" fill="url(#bss3)" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="195" y="305" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a5f">Logical Subscriber Identity</text>
  <text x="195" y="324" text-anchor="middle" font-size="10" fill="#1e40af">Individual user / subscriber</text>
  <line x1="335" y1="310" x2="425" y2="310" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="421,306 429,310 421,314" fill="#7c3aed"/>
  <text x="380" y="303" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">maps to</text>
  <rect x="425" y="284" width="280" height="52" rx="8" fill="url(#ccs3)" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="565" y="305" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">Resources</text>
  <text x="565" y="324" text-anchor="middle" font-size="10" fill="#ede9fe">VMs · Storage · Network · Containers · DB</text>
  <line x1="565" y1="164" x2="565" y2="194" stroke="#059669" stroke-width="1.8"/>
  <polygon points="561,190 569,190 565,198" fill="#059669"/>
  <line x1="565" y1="250" x2="565" y2="280" stroke="#34d399" stroke-width="1.8"/>
  <polygon points="561,276 569,276 565,284" fill="#34d399"/>
  <rect x="40" y="354" width="680" height="26" rx="6" fill="#fffbeb" stroke="#f59e0b" stroke-width="1"/>
  <text x="380" y="371" text-anchor="middle" font-size="10" fill="#92400e">⚠  Nesting of Tenants and Cells is not permitted · Quotas enforced at both Tenant and Cell levels · All Cells inherit quota by default</text>
  <defs>
    <linearGradient id="bss1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
    <linearGradient id="bss2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#2563eb"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient>
    <linearGradient id="bss3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#93c5fd"/><stop offset="100%" stop-color="#bfdbfe"/></linearGradient>
    <linearGradient id="ccs1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#0e9f6e"/></linearGradient>
    <linearGradient id="ccs2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#0e9f6e"/><stop offset="100%" stop-color="#10b981"/></linearGradient>
    <linearGradient id="ccs3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient>
  </defs>
</svg>

*Figure 5: Platform Resource Hierarchy — BSS Portal to CCS Mapping*

</div>

<div style={{textAlign: 'center', margin: '28px 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
  <div style={{display: 'inline-block', background: 'linear-gradient(135deg, #e8f0fe 0%, #dbeafe 100%)', border: '1px solid #b0c8f5', borderRadius: '8px', padding: '10px 28px', fontSize: '0.9rem', color: '#003399', fontWeight: '600', letterSpacing: '0.03em'}}>
    <span style={{opacity: '0.65', fontWeight: '500', fontSize: '0.75rem', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em'}}>BSS Portal</span>
    Party &nbsp;→&nbsp; Billing Account &nbsp;→&nbsp; Logical Subscriber Identity
  </div>
  <div style={{fontSize: '1.1rem', color: '#003399', fontWeight: '700'}}>⇕</div>
  <div style={{display: 'inline-block', background: 'linear-gradient(135deg, #dbeafe 0%, #e8f0fe 100%)', border: '1px solid #b0c8f5', borderRadius: '8px', padding: '10px 28px', fontSize: '0.9rem', color: '#003399', fontWeight: '600', letterSpacing: '0.03em'}}>
    <span style={{opacity: '0.65', fontWeight: '500', fontSize: '0.75rem', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em'}}>CCS</span>
    Tenant &nbsp;→&nbsp; Cell &nbsp;→&nbsp; Resources
  </div>
</div>

Each customer account maps a single Tenant in CCS. Multiple Cells can be created within a Tenant, providing logical isolation for different business units, projects, or environments. Nesting of Tenants and Cells is not permitted. Quotas are enforced at both tenant and cell levels, with all cells inheriting quota by default.

#### 6.2 Identity Federation
The BSS Portal serves as the primary user identity store. All customer user accounts are created, modified, and deleted exclusively through the BSS Portal. CCS IAM (Keycloak) federates with the BSS Portal as its Identity Provider, supporting SAML 2.0 and ADFS federation. For each customer organisation, a unique Keycloak realm is created, ensuring complete identity isolation between tenants.

#### 6.3 Role-Based Access Control
CCS provides a comprehensive, pre-defined role framework covering all platform functions. Seven organisation-level roles govern Tenant and Cell management:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Access Level</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Tenant Super Administrator</td><td style={{padding: '3px 12px'}}>Root-level access; manages everything within a Tenant; can create other Tenant Super Administrators and Tenant Administrators</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant Administrator</td><td style={{padding: '3px 12px'}}>Highest privileges per tenant; creates Cells and custom roles; manages quota and access requests</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant Viewer</td><td style={{padding: '3px 12px'}}>Read-only access for auditing, compliance, and training purposes</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Tenant Billing Admin</td><td style={{padding: '3px 12px'}}>Access to quota usage, metering, and showback</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cell Administrator</td><td style={{padding: '3px 12px'}}>Full access to all resources within a Cell; manages Cell quota</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cell Viewer</td><td style={{padding: '3px 12px'}}>Read-only access to Cell resources for auditing and compliance</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cell User</td><td style={{padding: '3px 12px'}}>Access to all services within a Cell; no quota management access</td></tr>
  </tbody>
</table>

Eleven service-specific roles provide granular access control for individual cloud services, including VM Admin, VM Reader, Block/Object/File Storage Admin, Backup Admin, Network Admin, Container Admin, BareMetal Admin, Database Admin, and InfoSec Admin.

### 7. Scalability
CCS is engineered to scale with the demands of a sovereign cloud platform serving government and enterprise customers on national scale. The platform's Kubernetes-based deployment model enables horizontal scaling of all CCS microservices by adding worker nodes to the management cluster.

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>CCS scales to support 50,000 virtual machines and 200,000 pods per deployment — with additional worker nodes added on demand to handle increased load.</div>
  </div>
</div>

The production infrastructure per availability zone is dimensioned to handle this scale:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Component</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Count</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>vCPU / Node</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Memory / Node</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>K8s Master Nodes</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>12 vCPU</td><td style={{padding: '3px 12px'}}>24 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>K8s Worker Nodes</td><td style={{padding: '3px 12px'}}>5</td><td style={{padding: '3px 12px'}}>48 vCPU</td><td style={{padding: '3px 12px'}}>128 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CCS PostgreSQL DB</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>32 vCPU</td><td style={{padding: '3px 12px'}}>64 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CCS MongoDB</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>24 vCPU</td><td style={{padding: '3px 12px'}}>48 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>OpenFGA PostgreSQL DB **</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>24 vCPU</td><td style={{padding: '3px 12px'}}>48 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Global MongoDB **</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>12 vCPU</td><td style={{padding: '3px 12px'}}>24 GB</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Web Layer (DMZ)</td><td style={{padding: '3px 12px'}}>3</td><td style={{padding: '3px 12px'}}>12 vCPU</td><td style={{padding: '3px 12px'}}>24 GB</td></tr>
  </tbody>
</table>

<span style={{color: '#6b7280', fontStyle: 'italic', fontSize: '0.85rem'}}>** OpenFGA PostgreSQL DB and Global MongoDB VMs are stretched across 2 AZs in the region and routed accordingly.</span>

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>All cluster VMs must be deployed with anti-affinity enabled across different physical compute nodes to ensure cluster high availability.</div>
  </div>
</div>

### 8. Implementation Approach
CCS is deployed on a Kubernetes management cluster, separate from the workload infrastructure. The Cloud Management Platform solutions: Cirrus Cloud Suite, Cirrus Cloud Platform, and Cloud Orbiter — is deployed in the control plane of each availability zone and must not be deployed in the workload pod. This separation ensures that the management layer is not affected by workload activity.
#### 8.1 Deployment Pre-Requisites
The following infrastructure and services must be in place before CCS deployment can commence:
- Wildcard SSL certificates for CCS hosting and dynamic customer account URLs
- Load Balancer and VIPs for each CCS endpoint
- DNS Server with credentials to create dynamic domains based on customer accounts
- Accessible Container Registry to store container images
- Kubernetes-compliant storage with High IOPS performance
- Connectivity and credentials for SMTP server for email notifications
- NTP and DNS server connectivity
- Connectivity and APIs to integrate with the BSS Portal

#### 8.2 Phased Delivery
CCS services are delivered in three phases — MVP1, MVP2, and MVP3 — allowing the platform to be operational with foundational services quickly, while the full-service portfolio is built out progressively. This phased approach reduces risk, allows for early customer onboarding, and provides the operations team time to build operational maturity with each new service category before the next phase begins.
#### 8.3 What is Out of Scope
The following are explicitly out of scope for the CCS platform delivery:
- Hardware procurement and its deployment
- Software procurement and associated licensing (operating system, database, backup software, management software) other than CCS
- Penetration Testing
- Performance Testing for components other than CCS
- Day 2 operations for underlying infrastructure (Compute, Storage, and Network)
- Application or configuration changes within the BSS Portal

### 9. Conclusion
Sovereign cloud is no longer a future aspiration for governments and regulated enterprises — it is an immediate operational requirement. Building it successfully demands a Cloud Management Platform that combines the self-service convenience of public cloud with the control, governance, and security posture that sovereign deployments demand.
Cirrus Cloud Suite delivers exactly this. With its unified management layer spanning virtual machines, containers, and bare metal; its multi-region, multi-AZ high availability architecture; its comprehensive role-based access control and identity federation capabilities; and its phased, risk-managed service delivery model, CCS provides a complete, proven foundation for sovereign cloud platform operations.
The platform's ability to scale to 50,000 virtual machines and 200,000 pods, combined with its enterprise-grade backup, security, and monitoring capabilities, positions it as a long-term platform for cloud services growth — from foundational IaaS in MVP1 through advanced database, security, and disaster recovery services in MVP2 and MVP3.

<div style={{borderLeft: '4px solid #0066cc', background: 'linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 100%)', borderRadius: '0 8px 8px 0', padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'flex-start', gap: '12px'}}>
  <span style={{fontSize: '1.4rem', lineHeight: '1'}}>💡</span>
  <div>
    <div style={{fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0066cc', marginBottom: '4px'}}>Note</div>
    <div style={{fontSize: '0.95rem', color: '#1a1a2e', lineHeight: '1.6'}}>Cirrus Cloud Suite — built for sovereign cloud, designed for scale, engineered for continuity.</div>
  </div>
</div>

## About Coredge
Coredge is the developer of Cirrus Cloud Suite, Cirrus Cloud Platform, and Cloud Orbiter — a complete, integrated Cloud Management and Orchestration platform designed for service providers, enterprises, and government organisations building and operating sovereign and private cloud infrastructure.
Cirrus Cloud Suite provides hyper-scaler grade Cloud Management Platform capabilities for OpenStack and Kubernetes-based deployments, enabling service providers to deliver IaaS, PaaS, and SaaS services through a unified, self-service portal with enterprise-grade governance, security, and operational tools.

## Contact

For more information or questions about Coredge's CCS:

- **Website:** [https://coredge.io](https://coredge.io)
- **Email:** [info@coredge.io](mailto:info@coredge.io)

---