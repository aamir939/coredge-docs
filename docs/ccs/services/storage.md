---
title: Storage Services
sidebar_position: 2
---

# Storage Services

**Business Value:** CCS delivers a unified storage portfolio spanning block, object, file, and archival tiers — all backed by NetApp enterprise storage and provisioned through the self-service portal. Every storage resource is governed by the same RBAC, metered by the same billing engine, and isolated within the same tenant boundary as compute and networking.

## Storage Service Portfolio

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Service</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Phase</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Block Storage</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>High-IOPS persistent volumes for VMs, databases, and bare metal workloads</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Object Storage</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Scalable unstructured data storage for backups, logs, media, and static assets</td></tr>
    <tr><td style={{padding: '3px 12px'}}>File Storage</td><td style={{padding: '3px 12px'}}>MVP1</td><td style={{padding: '3px 12px'}}>Shared file system access for multi-VM workloads and application data</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Archival Storage</td><td style={{padding: '3px 12px'}}>MVP2</td><td style={{padding: '3px 12px'}}>Cost-optimized long-term retention for compliance data, backups, and infrequently accessed archives</td></tr>
  </tbody>
</table>

## Storage Backend

All CCS storage services are backed by **NetApp v11.9.0**, integrated through the `storage-plugin` microservice. NetApp provides the enterprise-grade reliability, performance, and data management features required for sovereign and regulated cloud environments:

- High IOPS block storage for VM and database workloads
- S3-compatible object storage for unstructured data
- NFS/CIFS-based file storage for shared workloads
- Data protection with snapshots and replication
- Storage efficiency features: deduplication, compression, thin provisioning

Additionally, **Veritas NetBackup v10.11.2** provides the Backup as a Service capability — incremental backups every 30 minutes, full backups every 24 hours, with 3-month geo-replicated retention.

## Block Storage

Block storage provides persistent, high-IOPS volumes that attach to virtual machines, bare metal servers, and Kubernetes persistent volume claims. Block volumes are the primary storage tier for production workloads requiring fast, reliable I/O.

### Block Storage Capabilities

- **Self-Service Provisioning:** Users create volumes specifying capacity and performance tier through the portal; volumes available in seconds
- **VM Attachment:** Attach and detach volumes to running VMs without downtime
- **Bare Metal Attachment:** High-IOPS volumes for database-grade bare metal workloads via NetApp integration
- **Kubernetes PVCs:** Dynamic persistent volume provisioning for container workloads via the storage-plugin CSI driver
- **Snapshots:** Point-in-time snapshots for backup and cloning; manageable from the portal
- **Volume Resize:** Expand volume capacity without service interruption (online resize)
- **AZ Placement:** Volumes created within the same AZ as their workloads to minimize latency

### Block Storage Specifications

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Parameter</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Detail</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Backend</td><td style={{padding: '3px 12px'}}>NetApp v11.9.0 via storage-plugin</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Protocol</td><td style={{padding: '3px 12px'}}>iSCSI / NVMe-oF</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Encryption</td><td style={{padding: '3px 12px'}}>AES-256 at rest</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Snapshots</td><td style={{padding: '3px 12px'}}>Point-in-time, schedulable</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Kubernetes Integration</td><td style={{padding: '3px 12px'}}>CSI driver for dynamic PVC provisioning</td></tr>
  </tbody>
</table>

## Object Storage

Object storage provides scalable, S3-compatible storage for unstructured data — ideal for application data that grows without bound: backups, media files, log archives, ML datasets, and static web assets.

### Object Storage Capabilities

- **S3-Compatible API:** Standard S3 API for broad application compatibility; existing S3-aware applications work without modification
- **Bucket Management:** Create, configure, and manage buckets through the portal with per-bucket policies and access controls
- **Access Control:** Per-bucket access policies with tenant isolation; public, private, and shared bucket configurations
- **Lifecycle Policies:** Configure automated data tiering, expiration, and transition to archival storage
- **Data Protection:** Multi-AZ replication for object durability; no single point of failure
- **Capacity on Demand:** Storage capacity scales without pre-provisioning; pay for what is consumed

### Object Storage Use Cases

- Application backup target for databases and VMs
- Container image registry storage (via container registry microservice)
- Log and audit trail long-term storage
- Static content delivery origin
- ML training dataset storage

## File Storage

File storage provides shared NFS/CIFS-based file systems that multiple VMs, bare metal servers, or Kubernetes pods can mount simultaneously. Essential for workloads that require shared access to data across multiple compute nodes.

### File Storage Capabilities

- **NFS and CIFS Protocols:** Standard file protocols supported; Linux and Windows workloads can share the same file system
- **Multi-Client Mount:** Multiple VMs or servers mount the same file share concurrently with POSIX-compliant semantics
- **Quota Management:** Per-share capacity quotas enforced at the storage level
- **Snapshot Support:** Point-in-time snapshots for data protection and recovery
- **Kubernetes Integration:** Persistent volumes with ReadWriteMany (RWX) access mode for shared container storage

### File Storage Use Cases

- Shared application data across clustered VM workloads
- Home directories for end-user compute environments
- Shared model weights and datasets for distributed AI/ML training
- CMS and web application file stores requiring concurrent access
- Database export and transfer staging areas

## Archival Storage

Archival storage (MVP2) provides cost-optimized, long-term retention for data that must be preserved but is infrequently accessed — compliance archives, legal holds, long-term backup retention, and cold data that cannot be deleted.

### Archival Storage Capabilities

- **Policy-Based Tiering:** Automated lifecycle policies move data from hot/warm tiers to archival based on age or access patterns
- **Compliance Retention:** Immutable retention locks for regulatory compliance data that must not be deleted or modified
- **Retrieval:** Configurable retrieval tiers (immediate, standard, bulk) balancing cost and retrieval time
- **Integration with Object Storage:** Archival is the cold tier of the object storage lifecycle; data transitions automatically per policy

## Storage Metering

All storage resources are continuously metered:

- **Block Storage:** Capacity metered per GB per hour from volume creation to deletion
- **Object Storage:** Capacity metered per GB per month; request operations tracked separately
- **File Storage:** Capacity metered per GB per hour; quota utilization tracked in real time
- **Archival Storage:** Capacity metered per GB per month at archival rate; retrieval operations tracked
- **Quota Enforcement:** Storage quotas enforced at Tenant and Cell level; provisioning blocked when quota is reached
