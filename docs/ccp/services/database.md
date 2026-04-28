---
title: Database Services
sidebar_position: 6
---

# Database Services

**Business Value:** CCP delivers managed database services as a catalogue offering — Oracle, MongoDB, MS SQL, MariaDB, and Kubernetes-native database solutions — provisioned through the self-service portal, backed by NetApp enterprise storage, and monitored via Prometheus and Grafana. Teams get production-ready databases without managing infrastructure.

## Database Service Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Oracle DBaaS</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Managed Oracle Database instances for enterprise workloads requiring Oracle licensing</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MongoDB DBaaS</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Managed MongoDB clusters for document workloads, APIs, and real-time data applications</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MS SQL-as-a-Service — Standard</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed Microsoft SQL Server Standard Edition for mid-tier enterprise workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MS SQL-as-a-Service — Enterprise</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed Microsoft SQL Server Enterprise Edition for mission-critical applications</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MS SQL-as-a-Service — Web</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed Microsoft SQL Server Web Edition for web-facing applications</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed Database</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>General managed database service with operator-managed lifecycle</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Database Licenses</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Managed commercial database license procurement and compliance tracking</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed DB — MariaDB</td><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>Managed MariaDB for open-source relational workloads and MySQL-compatible applications</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Managed DB — NoSQL</td><td style={{padding: '3px 12px'}}>MVP3</td><td style={{padding: '3px 12px'}}>Managed NoSQL database service for flexible schema workloads</td></tr>
  </tbody>
</table>

## Oracle DBaaS (MVP1)

Oracle DBaaS provides managed Oracle Database instances for enterprise applications requiring Oracle's advanced features — partitioning, RAC, Data Guard, and Oracle-specific SQL extensions.

### Oracle DBaaS Capabilities

- **Self-Service Provisioning:** Database instances provisioned through the portal; compute and storage automatically configured
- **Flavors:** Select from pre-defined Oracle instance flavors (compute size, memory, storage tier)
- **Storage Backend:** NetApp v11.9.0 provides high-IOPS block storage for Oracle data files, redo logs, and archive logs
- **Backup Integration:** Veritas NetBackup provides incremental (every 30 min) and full (every 24 hrs) database backups; 3-month geo-replicated retention
- **High Availability Option:** Oracle Data Guard standby instances available for DR and read-offload
- **Monitoring:** Prometheus exporter for Oracle metrics; Grafana dashboards for performance visibility
- **Network Isolation:** Oracle instances deployed within tenant VPC; access restricted by security group rules
- **Version Management:** Oracle version catalogue managed by platform administrators

### Oracle Use Cases

- Enterprise ERP and financial applications (SAP, Oracle E-Business Suite, JD Edwards)
- Legacy enterprise applications with hard Oracle dependencies
- Data warehousing and analytics with Oracle Partitioning and Oracle Advanced Analytics
- Applications with strict Oracle licensing compliance requirements

## MongoDB DBaaS (MVP1)

MongoDB DBaaS provides managed MongoDB clusters for document storage, real-time APIs, content management, and event-driven applications.

### MongoDB DBaaS Capabilities

- **Cluster Provisioning:** Single-node or replica set configurations provisioned on demand
- **Replica Set:** 3-node replica sets with automatic primary election for high availability
- **Storage:** NetApp-backed storage with configurable IOPS profile
- **Auto-Scaling:** Storage auto-expansion configurable to prevent capacity surprises
- **Backup:** Continuous oplog backup and point-in-time recovery; full snapshot backups on schedule
- **Monitoring:** MongoDB exporter for Prometheus; replica set status, operation rates, and index usage dashboards in Grafana
- **Connection Security:** TLS-encrypted connections; IP allowlist per instance via security group
- **Version Selection:** MongoDB version catalogue maintained by platform administrators

### MongoDB Use Cases

- Mobile application backends and REST APIs with flexible document schema
- Content management systems with hierarchical or varied content structures
- IoT data collection and real-time event processing
- Catalogue and product data management with complex attribute sets
- CCP internal state storage (MongoDB 5.0.3 is used by CCP itself)

## MS SQL-as-a-Service (MVP2)

Microsoft SQL Server managed services across three editions, covering the full range of Microsoft application workloads.

### MS SQL Editions

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Edition</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Target Workload</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Key Features</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Enterprise</td><td style={{padding: '3px 12px'}}>Mission-critical applications</td><td style={{padding: '3px 12px'}}>Full feature set, AlwaysOn AGs, In-Memory OLTP, Advanced Analytics, unlimited database size</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Standard</td><td style={{padding: '3px 12px'}}>Mid-tier enterprise workloads</td><td style={{padding: '3px 12px'}}>Core relational features, basic AlwaysOn, limited resource caps</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Web</td><td style={{padding: '3px 12px'}}>Internet-facing web applications</td><td style={{padding: '3px 12px'}}>Cost-optimized for web workloads; basic features; lower licensing cost</td></tr>
  </tbody>
</table>

### MS SQL Capabilities

- **Managed Lifecycle:** Provisioning, patching, backup, and monitoring handled by the platform
- **Windows Authentication:** Integrated with Active Directory (Microsoft Entra) for Windows-native authentication
- **AlwaysOn Availability Groups:** HA and DR configuration via Always On for Enterprise edition
- **Database Mirroring and Replication:** Available for Enterprise edition deployments
- **Storage:** NetApp high-IOPS block storage for data, log, and tempdb files
- **Monitoring:** SQL Server monitoring via Prometheus exporters; Grafana dashboards for query performance, blocking, and wait statistics

## Managed DB — MariaDB (MVP3)

MariaDB managed service for open-source relational workloads and MySQL-compatible applications:

- Full MySQL compatibility for application portability
- InnoDB storage engine with row-level locking and ACID compliance
- Galera Cluster support for multi-master HA configurations
- Read replicas for horizontal read scaling
- Comprehensive monitoring via Prometheus exporter

## Managed DB — NoSQL (MVP3)

General NoSQL managed database service:

- Supports flexible schema document and key-value workload patterns
- Horizontal scaling for high-throughput applications
- Replication and HA configurations
- Platform-managed backups and version lifecycle

## Database Infrastructure

### Storage

All DBaaS instances use NetApp v11.9.0 for storage, providing:

- High-IOPS block volumes for primary database files
- Low-latency NFS for shared storage configurations
- Snapshot-based backup at the storage layer
- Thin provisioning and storage efficiency for cost optimization

### Backup

Veritas NetBackup v10.11.2 provides all DBaaS backup operations:

- Incremental backups every 30 minutes
- Full backups every 24 hours
- 3-month geo-replicated retention
- Point-in-time restore capability

### Monitoring

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Database</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Monitoring Tool</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Key Metrics Tracked</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Oracle</td><td style={{padding: '3px 12px'}}>Prometheus / Grafana</td><td style={{padding: '3px 12px'}}>Wait events, active sessions, SGA usage, redo log throughput</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MongoDB</td><td style={{padding: '3px 12px'}}>Prometheus / Grafana</td><td style={{padding: '3px 12px'}}>Op counts, replication lag, index hit rate, connection pool</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MS SQL</td><td style={{padding: '3px 12px'}}>Prometheus / Grafana</td><td style={{padding: '3px 12px'}}>Query wait times, blocking chains, transaction log usage, AG health</td></tr>
    <tr><td style={{padding: '3px 12px'}}>MariaDB</td><td style={{padding: '3px 12px'}}>Prometheus / Grafana</td><td style={{padding: '3px 12px'}}>Slow queries, thread status, InnoDB buffer pool, replication lag</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Internal (CCP)</td><td style={{padding: '3px 12px'}}>Prometheus / Grafana</td><td style={{padding: '3px 12px'}}>PostgreSQL 15.7 and MongoDB 5.0.3 platform databases</td></tr>
  </tbody>
</table>
