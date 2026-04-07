const sidebars = {
  dflareAi: [
    "dflare-ai/index",
    {
      type: "category",
      label: "Platform",
      collapsed: false,
      items: [
        "dflare-ai/platform/overview",
        "dflare-ai/platform/architecture",
        "dflare-ai/platform/security",
        "dflare-ai/platform/deployment",
      ],
    },
    {
      type: "category",
      label: "Services",
      collapsed: false,
      items: [
        "dflare-ai/services/bare-metal",
        "dflare-ai/services/kubernetes",
        "dflare-ai/services/slurm",
        "dflare-ai/services/storage",
        "dflare-ai/services/networking",
        "dflare-ai/services/identity",
        "dflare-ai/services/monitoring",
        "dflare-ai/services/billing",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: [
        "dflare-ai/services/integrations",
        "dflare-ai/platform/use-cases",
        "dflare-ai/platform/differentiators",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      items: [
        "dflare-ai/resources/white-paper",
        "dflare-ai/resources/technical-guide",
        "dflare-ai/resources/integration-guides",
        "dflare-ai/resources/datasheets",
      ],
    },
  ],
  ccs: [
    "ccs/index",
    {
      type: "category",
      label: "User Guides",
      collapsed: false,
      items: [
        "ccs/user-guides/index",
        "ccs/user-guides/service-portal",
        "ccs/user-guides/admin-portal",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      items: [
        "ccs/integrations/integration-design",
      ],
    },
    {
      type: "category",
      label: "Functional Spec",
      collapsed: false,
      items: [
        "ccs/functional/functional-spec",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      items: [
        "ccs/resources/whitepaper",
        "ccs/resources/datasheet",
      ],
    },
  ],
  ckp: [
    "ckp/index",
    {
      type: "category",
      label: "Distribution",
      collapsed: false,
      items: [
        "ckp/distribution/overview",
        "ckp/distribution/images",
        "ckp/distribution/compatibility",
        "ckp/distribution/dependencies",
      ],
    },
    {
      type: "category",
      label: "Cluster Management",
      collapsed: false,
      items: [
        "ckp/cluster-management/creation",
        "ckp/cluster-management/upgrades",
        "ckp/cluster-management/lifecycle",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      collapsed: false,
      items: [
        "ckp/architecture/overview",
        "ckp/architecture/advantages",
      ],
    },
    {
      type: "category",
      label: "Infrastructure",
      collapsed: false,
      items: [
        "ckp/infrastructure/providers",
        "ckp/infrastructure/capi-integration",
      ],
    },
    {
      type: "category",
      label: "Components",
      collapsed: false,
      items: [
        "ckp/components/host-agent",
        "ckp/components/host-provisioner",
        "ckp/components/registry",
      ],
    },
    {
      type: "category",
      label: "APIs",
      collapsed: false,
      items: [
        "ckp/apis/machine-host",
        "ckp/apis/provider-cluster",
      ],
    },
    {
      type: "category",
      label: "Addons",
      collapsed: false,
      items: [
        "ckp/addons/autoscaling",
        "ckp/addons/storage",
        "ckp/addons/backup",
        "ckp/addons/certificates",
      ],
    },
    {
      type: "category",
      label: "Operations",
      collapsed: false,
      items: [
        "ckp/operations/build-artifacts",
        "ckp/operations/troubleshooting",
        "ckp/operations/glossary",
      ],
    },
  ],
  cloudOrbiter: ["cloud-orbiter/index"],
  corobots: ["corobots/index"],
  cvm: ["cvm/index"],
  solutions: ["solutions/ai-ml"],
  developer: ["developer/api/index"],
};

module.exports = sidebars;
