// @ts-check
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Coredge Documentation",
  tagline: "Enterprise Cloud Infrastructure & AI Platform",
  favicon: "img/favicon.png",
  url: "https://docs.coredge.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: process.env.NODE_ENV === "development"
            ? "https://github.com/coredgeio/docs/edit/main/"
            : undefined,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: "Coredge",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          { type: "docSidebar", sidebarId: "dflareAi", label: "Dflare AI", position: "left" },
          { type: "docSidebar", sidebarId: "ccp", label: "CCP", position: "left" },
          { type: "docSidebar", sidebarId: "ckp", label: "CKP", position: "left" },
          { type: "docSidebar", sidebarId: "cloudOrbiter", label: "Cloud Orbiter", position: "left" },
          // { type: "docSidebar", sidebarId: "corobots", label: "CoRobots", position: "left" },
          // { type: "docSidebar", sidebarId: "cvm", label: "CVM", position: "left" },
          { type: "docSidebar", sidebarId: "solutions", label: "Solutions", position: "left" },
          { type: "docSidebar", sidebarId: "developer", label: "Developer", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Products",
            items: [
              { label: "Dflare AI", to: "/dflare-ai" },
              { label: "CCP", to: "/ccp" },
              { label: "CKP", to: "/ckp" },
              { label: "Cloud Orbiter", to: "/cloud-orbiter" },
              // { label: "CoRobots", to: "/corobots" },
              // { label: "CVM", to: "/cvm" },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "Solutions", to: "/solutions" },
              { label: "API Reference", to: "/developer/api" },
              { label: "Release Notes", to: "/developer/release-notes" },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "Coredge.io", href: "https://www.coredge.io" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Coredge.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "yaml", "json", "python", "go"],
      },
    }),
};

module.exports = config;
