---
title: Observability & Logging
sidebar_position: 5
---

# Observability & Logging

## Overview

Cloud Orbiter provides comprehensive observability for your Kubernetes clusters — monitoring health, performance, and security in real time. Observability is achieved through a combination of metrics collection, centralized logging, alerting, and audit trails.

Observability is critical for:
- Identifying and resolving issues quickly before they impact applications
- Predicting usage patterns and planning for growth
- Protecting clusters from potential threats
- Meeting compliance and audit requirements

## Prometheus-Based Monitoring

Cloud Orbiter uses **Prometheus** — the industry-standard open-source monitoring system — for metrics collection and alerting in Kubernetes environments.

### Enabling Prometheus

Prometheus is available as a cluster Add-On. Without it enabled, real-time time-series charts are unavailable, though basic resource usage information (CPU/RAM by namespace, network I/O) remains accessible.

**To enable Prometheus:**
1. Log in to Cloud Orbiter and navigate to the target cluster
2. If not enabled, click the **Go to Add-on** button shown in the monitoring section
3. On the Add-Ons page, locate **Prometheus**
4. Click the three-dot menu on the right → click **Enable**

Once enabled, full real-time monitoring and alerting capabilities are available.

## Key Metrics

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Metric</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>What It Shows</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Why It Matters</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Node Ready vs Total Nodes</td><td style={{padding: '3px 12px'}}>Number of ready nodes vs total nodes</td><td style={{padding: '3px 12px'}}>Ensure all nodes are operational and ready to serve requests</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Node RAM Usage vs Capacity</td><td style={{padding: '3px 12px'}}>RAM used by nodes vs available capacity</td><td style={{padding: '3px 12px'}}>Prevent memory exhaustion; detect memory leaks</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Node CPU Usage vs Capacity</td><td style={{padding: '3px 12px'}}>CPU utilization vs available capacity</td><td style={{padding: '3px 12px'}}>Identify overloaded nodes; plan capacity scaling</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Pod Usage vs Capacity</td><td style={{padding: '3px 12px'}}>Running pods vs cluster pod limit</td><td style={{padding: '3px 12px'}}>Identify if cluster is approaching maximum capacity</td></tr>
    <tr><td style={{padding: '3px 12px'}}>CPU Use by Namespace</td><td style={{padding: '3px 12px'}}>CPU consumption per namespace</td><td style={{padding: '3px 12px'}}>Identify resource-hungry namespaces; optimize allocation</td></tr>
    <tr><td style={{padding: '3px 12px'}}>RAM Use by Namespace</td><td style={{padding: '3px 12px'}}>Memory consumption per namespace</td><td style={{padding: '3px 12px'}}>Optimize resource allocation per team or workload</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Network I/O Pressure</td><td style={{padding: '3px 12px'}}>Network input-output pressure on the cluster</td><td style={{padding: '3px 12px'}}>Detect network bottlenecks; optimize cluster network performance</td></tr>
  </tbody>
</table>

## Access Logs

Access logs are a crucial aspect of monitoring cluster activity, identifying security threats, and troubleshooting operational issues.

### Cluster-Level Access Logs

Cloud Orbiter captures access logs per cluster:
- Every API call to the cluster is recorded
- Log entries include: user identity, timestamp, IP address, HTTP method, API endpoint

**To access cluster logs:**
1. Navigate to the cluster dashboard
2. Select the **Access Logs** tab

### Audit Logs

Audit logs capture all administrative actions within Cloud Orbiter:
- Tenant-level audit trail for compliance and security reviews
- Per-entry data: username, operation, IP address, API endpoint, timestamp

**Example audit log entry:**

| Time | Username | Operation | IP Address | API |
|---|---|---|---|---|
| &lt;timestamp&gt; | &lt;user-email&gt; | &lt;HTTP method&gt; | &lt;client-ip&gt; | &lt;api-endpoint&gt; |

**To access Cloud Orbiter audit logs:**
1. Log in as Tenant Administrator
2. Navigate to **Settings → Access Logs**

Regular review of audit logs is recommended to detect anomalies and potential security threats.

### Live Logs

Cloud Orbiter provides real-time log streaming from running containers:
- View live output from any running pod directly in the dashboard
- No kubectl port-forwarding or SSH access required
- Useful for real-time debugging and deployment validation

**To access live logs:**
1. Navigate to the cluster
2. Select **Access Logs → Live Logs**
3. Select the namespace and pod to stream logs from

## Test Suites

Cloud Orbiter includes pre-packaged test suites for proactive cluster validation:

### Built-In Test Suites

Pre-configured test cases that verify cluster health and performance — run before application deployment or after infrastructure changes.

### Bring Your Own Test Suites

Organizations can add custom test suites to Cloud Orbiter:

1. Navigate to **Test Suites** on the cluster dashboard
2. Click **Bring Your Own Test Suite**
3. Upload or reference your custom test configuration
4. Run the test suite on the target cluster

### Downloading Logs and Reports

After test suite execution:
1. Select the completed test run
2. Click **Download Logs** or **Download Report**
3. Logs and results are available as downloadable files for sharing or archiving

## Notification System

Cloud Orbiter sends real-time dashboard notifications for key infrastructure events:

### Events That Trigger Notifications

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Resource</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Trigger Event</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Recipients</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Cluster</td><td style={{padding: '3px 12px'}}>Created / Imported / Deleted</td><td style={{padding: '3px 12px'}}>Project Admin, Default User</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cluster</td><td style={{padding: '3px 12px'}}>Connected / Disconnected</td><td style={{padding: '3px 12px'}}>Project Admin, Default User</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Cluster</td><td style={{padding: '3px 12px'}}>Scaled up / Scaled down</td><td style={{padding: '3px 12px'}}>Project Admin, Default User</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Application</td><td style={{padding: '3px 12px'}}>Deployment success / failure</td><td style={{padding: '3px 12px'}}>Project Admin</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Test Suite</td><td style={{padding: '3px 12px'}}>Execution started / completed</td><td style={{padding: '3px 12px'}}>Project Admin, Default User</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Roles</td><td style={{padding: '3px 12px'}}>User role updated or changed</td><td style={{padding: '3px 12px'}}>Affected user</td></tr>
    <tr><td style={{padding: '3px 12px'}}>User Membership</td><td style={{padding: '3px 12px'}}>Membership granted or revoked</td><td style={{padding: '3px 12px'}}>Project Admin, Default User</td></tr>
  </tbody>
</table>

### Managing Notifications

Notifications appear as pop-up windows in the bottom-right corner of the dashboard. From the notification bell icon, you can:
- **View last 10 notifications** without navigating away from the current page
- **Filter to show unread only** — focus on items requiring attention
- **Mark as read / unread** — track which notifications have been reviewed
- **Navigate to the resource** — click a notification to jump directly to the affected resource
- **Delete notifications** — remove notifications no longer needed
- **Automatic deletion** — notifications expire and are deleted automatically after 15 days
