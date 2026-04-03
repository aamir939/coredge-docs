---
title: Build Artifacts
sidebar_position: 1
---

# CKP Build Artifacts

CKP produces two primary container images for its management layer:

| Image | Description |
|-------|-------------|
| Cluster Manager | Contains host agent packages and CAPI provider controllers. Main management plane image. |
| Host Provisioner | Contains the host provisioner controller binary for machine lifecycle reconciliation. |

Both images are built on a minimal, security-hardened base image and run as non-root processes.
