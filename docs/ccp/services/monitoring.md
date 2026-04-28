---
title: Monitoring Services
sidebar_position: 5
---

# Monitoring Services

**Business Value:** Full operational visibility into platform health, workload performance, and resource utilization — for both platform operators and tenants — with proactive alerting and structured incident response. CCP monitoring ensures problems are detected before users are impacted.

## Monitoring Service Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Log Analyzer</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Centralized log aggregation, search, and analysis for platform and workload logs</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Operational Metrics</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Real-time collection and visualization of infrastructure and workload performance metrics</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Alarm Service</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Configurable threshold-based and anomaly-driven alerting across all monitored resources</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Notification Service</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Multi-channel alert delivery — email, SMS, webhook, and portal notifications</td></tr>
  </tbody>
</table>

## Monitoring Architecture

CCP monitoring is delivered through two integrated toolsets:

- **Zabbix v7.4.3:** Operational metrics collection, alarm management, and notification delivery. The primary tool for infrastructure-level monitoring — servers, network devices, services, and platform components.
- **Prometheus & Grafana v9.4.3:** Cluster and database health monitoring. Prometheus collects time-series metrics from Kubernetes clusters, OpenStack nodes, and database components. Grafana provides rich visualization dashboards.
- **APM / NPM / IPM Integration:** Application performance, network performance, and infrastructure performance monitoring tools integrated via the Log Analyzer service.

## Tier 1 — Platform Operations Monitoring

Platform operations monitoring is always active, deployed alongside the CCP control plane for the service provider's operations team. It covers the full infrastructure stack:

### Infrastructure Metrics

- **Compute Nodes:** CPU utilization, memory usage, disk I/O, network throughput, and temperature
- **Kubernetes Clusters:** Control plane health (etcd, API server, scheduler, controller-manager), node readiness, pod status
- **Storage Systems:** Volume utilization, IOPS, throughput, latency, and capacity thresholds
- **Network:** Switch and router health, bandwidth utilization, packet loss, and latency
- **OpenStack Services:** Nova, Neutron, Cinder, Keystone, Glance service health and API response times
- **Platform Microservices:** Health endpoints for all CCP microservices; alerting on service degradation

### Platform Service Health

- **Database Health:** PostgreSQL replication lag, MongoDB replica set status, Redis cluster health
- **Kafka Queues:** Consumer lag, topic throughput, broker availability
- **API Gateway:** Request rates, error rates, and latency percentiles
- **Identity Service:** Keycloak login rates, token error rates, realm availability

## Tier 2 — Tenant Workload Monitoring

Tenant workload monitoring is available as a service from the Self-Service Console. When enabled for a cell or cluster, it deploys monitoring agents within the tenant's environment with full multi-tenant isolation.

### Tenant Monitoring Capabilities

- **VM Metrics:** Per-VM CPU, memory, disk I/O, and network metrics visible in the tenant portal
- **Kubernetes Cluster Metrics:** Pod health, deployment status, namespace resource usage, HPA status
- **Container Metrics:** Container-level CPU and memory usage; restart counts and OOM events
- **Custom Dashboards:** Tenants can create custom Grafana dashboards based on their workload metrics
- **Multi-Tenant Isolation:** Tenant A's metrics are completely isolated from Tenant B — no cross-tenant metric visibility regardless of shared infrastructure

### Database Monitoring

For DBaaS instances, dedicated monitoring is available via Prometheus exporters:

- PostgreSQL: Query performance, connection counts, replication lag, cache hit ratio
- MongoDB: Operation counts, replication status, index usage, document throughput
- MS SQL: Query wait times, blocking, transaction log usage, availability group health
- MariaDB: Thread status, slow query log, InnoDB buffer pool hit rate

## Log Analyzer

The Log Analyzer service provides centralized log aggregation and search for platform and workload logs:

- **Platform Logs:** All CCP microservice logs, API gateway logs, authentication events, and infrastructure logs aggregated centrally
- **Workload Logs:** Application logs from VMs and containers forwarded to Log Analyzer for storage and search
- **Security Logs:** Firewall logs, VPN access logs, and access control decision logs forwarded to SIEM
- **Log Retention:** Configurable retention per log category; compliance-driven retention policies for security and audit logs
- **Search Interface:** Full-text search across log streams with time-range filtering and structured field queries
- **Integration:** APM / NPM / IPM tools integrate with Log Analyzer for correlated application and infrastructure analysis

## Alarm Service

The Alarm Service provides configurable, threshold-based alerting across all monitored resources:

### Pre-Configured Alert Thresholds

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Alert Category</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Trigger Condition</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Default Action</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>CPU Utilization</td><td style={{padding: '3px 12px'}}>Sustained utilization above configurable threshold</td><td style={{padding: '3px 12px'}}>Alert operations team; capacity planning review</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Memory Utilization</td><td style={{padding: '3px 12px'}}>Node-level memory above configurable threshold</td><td style={{padding: '3px 12px'}}>Capacity warning; alert operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Storage Capacity</td><td style={{padding: '3px 12px'}}>Volume or pool utilization above threshold</td><td style={{padding: '3px 12px'}}>Capacity warning to tenant; escalation to operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Kubernetes Node Not Ready</td><td style={{padding: '3px 12px'}}>Node transitions to NotReady state</td><td style={{padding: '3px 12px'}}>Immediate operations alert; auto-recovery attempt</td></tr>
    <tr><td style={{padding: '3px 12px'}}>etcd Leader Changes</td><td style={{padding: '3px 12px'}}>etcd leader election above configurable rate</td><td style={{padding: '3px 12px'}}>Stability investigation; alert operations</td></tr>
    <tr><td style={{padding: '3px 12px'}}>API Error Rate</td><td style={{padding: '3px 12px'}}>HTTP 5xx error rate above threshold</td><td style={{padding: '3px 12px'}}>Service degradation alert; escalation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database Replication Lag</td><td style={{padding: '3px 12px'}}>Replication lag exceeds threshold</td><td style={{padding: '3px 12px'}}>HA risk alert; DR readiness review</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Backup Failure</td><td style={{padding: '3px 12px'}}>Scheduled backup job fails or misses window</td><td style={{padding: '3px 12px'}}>Immediate alert; data protection risk escalation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Service Unavailability</td><td style={{padding: '3px 12px'}}>CCP microservice health check fails</td><td style={{padding: '3px 12px'}}>Platform alert; auto-restart attempt</td></tr>
  </tbody>
</table>

### Custom Alarm Configuration

- Users and administrators can create custom alarms on any metric with configurable:
  - Threshold value and comparison operator
  - Evaluation period (number of consecutive data points)
  - Severity level (info, warning, critical)
  - Notification channel (email, SMS, webhook, portal)

## Notification Service

The Notification Service delivers alerts and system events through multiple channels:

- **Email (SMTP):** Alert emails delivered via configured SMTP server; supports HTML templates for rich notifications
- **SMS:** Critical alert SMS to on-call phone numbers via configured SMS gateway
- **Portal Notifications:** Real-time in-portal notifications via SocketIO push; visible in the notification bell in the console
- **Webhook:** POST notifications to external systems (PagerDuty, OpsGenie, Slack, custom ITSM systems) for alert integration
- **Notification Policies:** Configurable escalation rules — alert user first, then escalate to admin if unacknowledged within time window

## Incident Management

Platform incidents follow a structured severity classification:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Severity</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Definition</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Response Model</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Critical</td><td style={{padding: '3px 12px'}}>Platform-wide outage or data loss risk</td><td style={{padding: '3px 12px'}}>Immediate response; war room activation; executive notification</td></tr>
    <tr><td style={{padding: '3px 12px'}}>High</td><td style={{padding: '3px 12px'}}>Major service degradation affecting multiple tenants</td><td style={{padding: '3px 12px'}}>Rapid response; senior engineer engaged; tenant notification</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Medium</td><td style={{padding: '3px 12px'}}>Service degradation for single tenant or service</td><td style={{padding: '3px 12px'}}>Standard response; investigation and resolution within SLA</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Low</td><td style={{padding: '3px 12px'}}>Minor issue with available workaround</td><td style={{padding: '3px 12px'}}>Next-business-day response; ticket tracking</td></tr>
  </tbody>
</table>
