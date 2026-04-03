---
title: Troubleshooting
sidebar_position: 2
---

# CKP Troubleshooting

## Container Runtime Not Running (Shows Active)

If the container runtime appears active in system status but containers are not running, verify that the Containerd configuration file does not have any plugins incorrectly listed in the disabled plugins field. Ensure the field is set to an empty list, then restart the Containerd service.
