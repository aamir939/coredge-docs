---
title: Security Services
sidebar_position: 7
---

# Security Services

**Business Value:** CCS includes a comprehensive security services catalogue that extends platform-level security (mTLS, IAM, RBAC) to active threat detection, workload protection, perimeter defence, and compliance monitoring. Security is available as self-service from the catalogue — not a separate procurement process.

## Security Services Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>SIEM</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Security Incident and Event Management — centralized threat detection and response</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Log Monitoring</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Continuous security log analysis and anomaly detection</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CSPM</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Cloud Security Posture Management / Cloud Workload Protection</td></tr>
    <tr><td style={{padding: '3px 12px'}}>WAF</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Web Application Firewall — Layer 7 protection for HTTP/HTTPS workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cloud HSM</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Cloud-based Hardware Security Module for key management and cryptographic operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DDoS Protection</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Volumetric and application-layer DDoS mitigation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>TLS/SSL Certificate Management</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Automated certificate lifecycle management — issuance, renewal, revocation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Encryption as a Service</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed encryption for tenant workloads and data</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Digital Forensics</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Forensic analysis capabilities for incident investigation and legal discovery</td></tr>
  </tbody>
</table>

## Platform Security Foundation

Before the security services catalogue, the CCS platform itself provides a robust security baseline that applies to every tenant and resource automatically:

- **Authentication:** Keycloak v24.0.5 with OAuth2/OIDC, MFA (TOTP, SMS, email, hardware keys)
- **Authorization:** OpenFGA with 18 pre-defined RBAC roles; fine-grained permission enforcement on every operation
- **Transport Security:** mTLS between all CCS microservices and APIs — no plaintext internal channels
- **Storage Security:** AES-256 encryption at rest for all platform data — PostgreSQL, MongoDB, Redis, and backups
- **Network Security:** VPC isolation with VXLAN/EVPN overlay; per-tenant routing; CheckPoint / Palo Alto firewall integration
- **Identity Isolation:** Dedicated Keycloak realm per tenant — complete identity domain isolation
- **Audit Logging:** All API gateway actions logged with authenticated identity, timestamp, and request details

The security services catalogue extends this baseline with active threat detection, workload scanning, and advanced cryptographic services.

## SIEM — Security Incident and Event Management

SIEM provides centralized collection, correlation, analysis, and response for security events across the platform and tenant workloads.

### SIEM Capabilities

- **Log Collection:** Collects security events from all sources — authentication logs (Keycloak), API gateway audit logs, firewall logs (CheckPoint/Palo Alto), VPN access logs (Zscaler), and workload logs
- **Event Correlation:** Cross-source event correlation to identify attack patterns, lateral movement, and anomalous behavior that single-source analysis would miss
- **Real-Time Alerting:** Configurable alert rules trigger notifications for defined security events — failed authentication thresholds, privilege escalation attempts, unusual access patterns
- **Threat Intelligence:** Integration with threat intelligence feeds to identify known-malicious IPs, domains, and file hashes in security events
- **Dashboards:** Pre-built security dashboards for authentication events, access anomalies, network traffic patterns, and compliance reporting
- **Incident Response:** SIEM cases track security incidents from detection through investigation and resolution; full event timeline reconstruction
- **Long-Term Retention:** Security events retained for compliance requirements — configurable retention periods per regulation

### SIEM Use Cases

- Detecting brute-force authentication attacks against the platform
- Identifying compromised credentials via impossible travel or anomalous login patterns
- Correlating firewall blocks with authentication failures to identify attack campaigns
- Generating compliance audit reports showing access patterns and security posture

## Log Monitoring

Log Monitoring (via APM/NPM/IPM integration) provides continuous security-focused analysis of log streams across platform and workload components:

- **Real-Time Analysis:** Log events analyzed in real time as they arrive; no lag in detection
- **Anomaly Detection:** Machine learning models identify unusual patterns in access and activity logs
- **Compliance Reporting:** Structured log reports for regulatory compliance — who accessed what, when, from where
- **Alerting:** Trigger alarms on specific log patterns: error spikes, access to sensitive resources, configuration changes
- **Integration with SIEM:** Log Monitoring forwards security-relevant events to SIEM for correlation and case management

## CSPM — Cloud Security Posture Management

CSPM (Cloud Workload Protection) continuously assesses the security configuration of cloud resources against best-practice security benchmarks:

### CSPM Capabilities

- **Continuous Assessment:** Continuously scans VM configurations, network security group rules, storage access policies, and IAM configurations
- **Compliance Benchmarks:** Assessment against CIS Benchmarks, NIST 800-53, and custom organizational security policies
- **Misconfiguration Detection:** Identifies common misconfigurations — overly permissive security groups, public storage buckets, missing encryption, excessive IAM permissions
- **Remediation Guidance:** For each finding, CSPM provides specific remediation steps and links to the affected resource in the portal
- **Risk Scoring:** Resources assigned risk scores based on severity and exploitability of findings; highest-risk issues surfaced first
- **Drift Detection:** Alerts when resource configurations change from a known-good baseline
- **Automated Remediation:** Optional policy enforcement mode automatically corrects specific classes of misconfiguration

## WAF — Web Application Firewall

The Web Application Firewall provides Layer 7 protection for HTTP/HTTPS applications deployed in the platform:

### WAF Capabilities

- **OWASP Top 10 Protection:** Pre-built rule sets protect against SQL injection, XSS, CSRF, path traversal, and other common web vulnerabilities
- **Bot Management:** Detect and block malicious bot traffic (scrapers, credential stuffers, vulnerability scanners)
- **Rate Limiting:** Per-IP and per-session rate limiting to prevent API abuse and brute-force attacks
- **Custom Rules:** Tenant-defined WAF rules for application-specific protection requirements
- **SSL Termination:** WAF terminates SSL/TLS, inspects decrypted traffic, then re-encrypts to backends
- **False Positive Management:** Tunable rule sensitivity; fine-grained whitelisting to eliminate false positives without reducing protection
- **Attack Logging:** All blocked requests logged with rule name, source IP, and payload; SIEM integration for correlation
- **DDoS Layer 7:** WAF includes Layer 7 DDoS protection (slow POST, HTTP flood) complementing the Layer 3/4 DDoS service

## Cloud HSM (MVP2)

Cloud HSM provides a FIPS 140-2 compliant hardware root of trust for cryptographic key management:

### Cloud HSM Capabilities

- **Key Generation:** Cryptographic key generation within the HSM hardware — keys never exist in software
- **Key Storage:** Encrypted key material stored in HSM; keys protected by hardware root of trust
- **Encryption Operations:** Symmetric encryption (AES), asymmetric encryption (RSA, EC), digital signing
- **Key Lifecycle Management:** Creation, rotation, suspension, and destruction with full audit trail
- **Integration APIs:** Standard PKCS#11, JCE, and REST APIs for application integration
- **Tenant Isolation:** Dedicated key partitions per tenant; administrators of one partition cannot access another's keys
- **FIPS 140-2 Level 3:** Tamper-evident hardware that meets FIPS 140-2 Level 3 requirements for regulated workloads requiring hardware-backed key security

### Cloud HSM Use Cases

- Encryption key management for regulated data workloads (PCI DSS, HIPAA, government)
- Code signing keys for software integrity verification
- PKI root CA operations requiring hardware protection
- TLS private key protection for high-value certificates

## DDoS Protection (MVP2)

DDoS Protection defends platform-facing resources against volumetric and application-layer distributed denial-of-service attacks:

- **Layer 3/4 Mitigation:** Absorbs volumetric UDP flood, SYN flood, and reflection attacks before traffic reaches the platform
- **Layer 7 Mitigation:** HTTP flood, slow attack, and application-layer DDoS protection (complements WAF)
- **Traffic Scrubbing:** Malicious traffic scrubbed at network edge; clean traffic forwarded to the application
- **Always-On Detection:** Continuous traffic baseline analysis; attacks detected and mitigated within seconds
- **Alert Integration:** DDoS events trigger notifications and SIEM alerts with attack metadata (source ASNs, attack type, peak volume)

## TLS/SSL Certificate Management (MVP2)

Automated certificate lifecycle management for tenant workloads:

- **Issuance:** Request and receive TLS certificates through the portal; supports public CA (Let's Encrypt, DigiCert) and private CA
- **Auto-Renewal:** Certificates renewed automatically before expiry; no manual rotation required
- **Revocation:** Immediate certificate revocation with CRL and OCSP propagation
- **Certificate Inventory:** Centralized inventory of all certificates with expiry monitoring and alerts
- **Integration:** Certificates deployable directly to Load Balancers, WAF, and other platform services

## Digital Forensics (MVP2)

Digital Forensics capabilities for security incident investigation and legal discovery:

- **Disk Imaging:** Forensically sound disk images of VM instances for post-incident analysis
- **Memory Capture:** RAM capture for live forensic analysis of running workloads
- **Timeline Reconstruction:** Automated evidence timeline reconstruction from logs, file system metadata, and process activity
- **Chain of Custody:** Documented evidence collection procedures with hash verification for legal admissibility
- **Reporting:** Forensic investigation reports suitable for internal review or legal proceedings
