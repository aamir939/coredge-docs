---
title: Identity & User Management
sidebar_position: 6
---

# Identity & User Management

## Overview

Cloud Orbiter provides a comprehensive user management solution for managing identity, access, and privileges across globally distributed infrastructure. It supports both local users and users from external Identity Providers (IDPs) — including Okta, Microsoft, Google, and any OpenID Connect-compatible IDP.

With user management, you can:
- Create, read, update, and delete (CRUD) users
- Manage groups and assign users to groups
- Define roles and assign them to users and groups
- Manage access across multiple projects with project-scoped assignments

## User Types

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Type</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Local Users</td><td style={{padding: '3px 12px'}}>Created and managed within Cloud Orbiter. Credentials (username + password) stored in the platform. Suitable for development environments and standalone deployments.</td></tr>
    <tr><td style={{padding: '3px 12px'}}>External Users</td><td style={{padding: '3px 12px'}}>Authenticated via external IDPs (Okta, Google, Microsoft, or any OIDC provider). Cloud Orbiter creates a local user representation after IDP authentication. Supports account linking for existing users.</td></tr>
  </tbody>
</table>

## Roles

### Pre-Defined Roles

Cloud Orbiter provides three pre-configured roles:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Role</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Scope</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Key Permissions</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Tenant Admin</td><td style={{padding: '3px 12px'}}>Entire tenant</td><td style={{padding: '3px 12px'}}>User management, group management, IDP configuration, roles, applications, notifications — full tenant control</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Project Admin</td><td style={{padding: '3px 12px'}}>Assigned project</td><td style={{padding: '3px 12px'}}>Manage users and assign Project Admins · Create/update/delete clusters · Deploy applications · Manage app instances</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Default User</td><td style={{padding: '3px 12px'}}>Assigned project</td><td style={{padding: '3px 12px'}}>Create clusters · List clusters (read-only) · Access app repositories · View test suites · List backup/recovery · List hosts and groups</td></tr>
  </tbody>
</table>

### Checking Role Assignments

1. Go to **Settings → Roles**
2. Click a role name to see all users and groups assigned to it
3. Click a user's name to see their group memberships and role assignments

### RBAC Mechanics

Cloud Orbiter's RBAC governs all platform actions:
- Administrators can approve or reject onboarding requests and access requests
- Non-admin users can only create onboarding requests — not self-approve them
- Every API call is checked against the user's role before execution

## Creating and Managing Users

### Creating a Local User

1. Sign in as **Tenant Admin** and navigate to **Settings → Users**
2. Click **+ Add User**
3. Fill in the required fields:
   - First Name
   - Last Name
   - Email / Username (mandatory)
   - Temporary Password
4. Assign the user to a project and select their role
5. Click **Create**

After the first login with the temporary password, the user must set a new password.

### Bringing Users from External IDPs

1. Set up SSO integration in Cloud Orbiter (see [Security → SSO Integration](../platform/security))
2. Log in to Cloud Orbiter
3. Navigate to **Overview → Users**
4. Click **+ Add User**
5. Select the IDP (Okta, Microsoft, or Google)
6. Authenticate with the IDP and select the users to import
7. Click **Save**

Once imported, Cloud Orbiter creates a local user record synced with the IDP. CRUD operations can be performed on imported users just like local users. If IDP data changes, trigger a re-sync to update user information in Cloud Orbiter.

### Managing Users

From **Settings → Users**, perform the following on any user:
- **Update** personal information and contact details
- **Reset Password** — generate a new temporary password
- **Modify Group/Role Assignments** — add or remove group memberships and role grants
- **Delete User** — remove users who no longer need access

## Groups

Groups allow you to manage collections of users as a team. Assign a role to a group, and all group members inherit that role. Only users with the **Tenant Admin** role can manage groups.

### Creating a Group

1. Navigate to **Settings → User Management → Groups**
2. Click **New Group**
3. Enter a group name and description
4. Optionally add users during creation
5. Click **Create**

### Managing a Group

1. Select the group from the group list
2. Click **Manage Group**
3. Available actions:
   - Add or remove group members
   - Assign permissions (roles) to the group
   - Edit group name and description

### Assigning a User to a Group

1. Navigate to **Settings → User Management → Users**
2. Select the user
3. Click **Edit**
4. Under the **Groups** section, assign the user to one or more groups
5. Save

### Removing a User from a Group

1. Navigate to **Settings → User Management → Users**
2. Select the user
3. Click **Edit**
4. Under the **Groups** section, remove the user from the desired group(s)
5. Save

## Users and Personas

Cloud Orbiter serves different user personas with tailored access:

<table style={{fontSize: '0.85rem', width: 'auto', borderCollapse: 'collapse'}}>
  <thead>
    <tr>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Persona</th>
      <th style={{padding: '4px 12px', textAlign: 'left'}}>Primary Responsibility</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style={{padding: '3px 12px'}}>Infrastructure Owners / Providers</td><td style={{padding: '3px 12px'}}>Create and manage infrastructure component lifecycle — hosts, clusters, storage</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Application Developers / Providers</td><td style={{padding: '3px 12px'}}>Deliver applications running over the infrastructure</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Solution Engineers</td><td style={{padding: '3px 12px'}}>Deploy and interface application instances together into full solutions</td></tr>
    <tr><td style={{padding: '3px 12px'}}>DevOps</td><td style={{padding: '3px 12px'}}>Maintain continuity of operations — monitoring, scaling, patching</td></tr>
    <tr><td style={{padding: '3px 12px'}}>Admins</td><td style={{padding: '3px 12px'}}>Oversee operations, manage RBAC settings, and configure platform-wide controls</td></tr>
  </tbody>
</table>
