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
        "dflare-ai/services/networking",
        "dflare-ai/services/gpu-clusters",
        "dflare-ai/services/storage",
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
  ccs: ["ccs/index"],
  ckp: ["ckp/index"],
  cloudOrbiter: ["cloud-orbiter/index"],
  corobots: ["corobots/index"],
  cvm: ["cvm/index"],
  solutions: ["solutions/ai-ml"],
  developer: ["developer/api/index"],
};

module.exports = sidebars;
