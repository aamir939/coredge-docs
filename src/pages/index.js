import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// SVG Icons as components
const SovereignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const GpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
    <circle cx="9" cy="15" r="1.5" fill="currentColor" />
    <circle cx="15" cy="15" r="1.5" fill="currentColor" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const UnifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.featureIcon}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="4" r="2" />
    <circle cx="20" cy="12" r="2" />
    <circle cx="12" cy="20" r="2" />
    <circle cx="4" cy="12" r="2" />
    <path d="M12 7v2M12 15v2M15 12h2M7 12h-2" />
  </svg>
);

// Product Icons
const DflareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M9 9h6M9 12h6M9 15h6" />
  </svg>
);

const ContainerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.3 7L12 12l8.7-5M12 22V12" />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const RobotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <rect x="5" y="8" width="14" height="12" rx="2" />
    <circle cx="9" cy="13" r="1.5" fill="currentColor" />
    <circle cx="15" cy="13" r="1.5" fill="currentColor" />
    <path d="M10 17h4" />
    <path d="M12 4v4M8 2h8" />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.productIcon}>
    <rect x="3" y="3" width="18" height="6" rx="1" />
    <rect x="3" y="11" width="18" height="6" rx="1" />
    <circle cx="7" cy="6" r="1" fill="currentColor" />
    <circle cx="7" cy="14" r="1" fill="currentColor" />
  </svg>
);

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Sovereign Cloud & AI Infrastructure,
          <br />
          Unified in One Platform
        </h1>
        <p className={styles.heroDescription}>
          Coredge enables enterprises and governments to deploy AI-ready cloud infrastructure with complete
          control over data, location, and security. From GPU-driven AI workloads to edge computing, operate
          everything from one unified platform.
        </p>
        <div className={styles.heroButtons}>
          <Link to="/dflare-ai" className={styles.ctaButton}>
            Get Started
          </Link>
          <Link to="/dflare-ai/platform/overview" className={styles.ctaButtonSecondary}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrapper}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: SovereignIcon,
      title: 'Sovereign Cloud',
      description: 'Complete control over data residency, compliance, and infrastructure location.',
    },
    {
      icon: GpuIcon,
      title: 'GPU-Ready',
      description: 'Optimized for AI/ML workloads with NVIDIA GPU support and high-performance computing.',
    },
    {
      icon: SecurityIcon,
      title: 'Enterprise Security',
      description: 'Multi-tenant isolation, RBAC, audit logging, and compliance frameworks.',
    },
    {
      icon: UnifiedIcon,
      title: 'Unified Platform',
      description: 'Single control plane for VMs, containers, GPUs, and edge computing.',
    },
  ];

  return (
    <div className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Why Coredge</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ icon: Icon, title, description, link }) {
  return (
    <Link to={link} className={styles.productCard}>
      <div className={styles.productIconWrapper}>
        <Icon />
      </div>
      <div className={styles.productContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function ProductsSection() {
  const products = [
    {
      icon: DflareIcon,
      title: 'Dflare AI',
      description: 'GPU-as-a-Service platform for AI/ML workloads with multi-tenant isolation and enterprise security.',
      link: '/dflare-ai',
    },
    {
      icon: ContainerIcon,
      title: 'CCS',
      description: 'Coredge Container Service for scalable container orchestration and management.',
      link: '/ccs',
    },
    {
      icon: KubernetesIcon,
      title: 'CKP',
      description: 'Coredge Kubernetes Platform for enterprise-grade Kubernetes deployments.',
      link: '/ckp',
    },
    {
      icon: CloudIcon,
      title: 'Cloud Orbiter',
      description: 'Multi-cloud management and orchestration for hybrid cloud environments.',
      link: '/cloud-orbiter',
    },
    // {
    //   icon: RobotIcon,
    //   title: 'CoRobots',
    //   description: 'Edge computing platform for robotics and IoT workloads.',
    //   link: '/corobots',
    // },
    // {
    //   icon: ServerIcon,
    //   title: 'CVM',
    //   description: 'Coredge Virtual Machines for flexible compute resources.',
    //   link: '/cvm',
    // },
  ];

  return (
    <div className={styles.productsSection}>
      <h2 className={styles.sectionTitle}>Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

function QuickLinkCard({ title, description, link }) {
  return (
    <Link to={link} className={styles.quickLinkCard}>
      <h4>{title}</h4>
      <p>{description}</p>
      <span className={styles.quickLinkArrow}>→</span>
    </Link>
  );
}

function QuickLinksSection() {
  const quickLinks = [
    {
      title: 'Deploy AI Infrastructure',
      description: 'Set up GPU clusters and AI workloads',
      link: '/dflare-ai/platform/deployment',
    },
    {
      title: 'Manage Containers & Kubernetes',
      description: 'Container orchestration guides',
      link: '/ckp',
    },
    {
      title: 'Explore APIs',
      description: 'Developer documentation and API reference',
      link: '/developer/api',
    },
  ];

  return (
    <div className={styles.quickLinksSection}>
      <h2 className={styles.sectionTitle}>I want to...</h2>
      <div className={styles.quickLinksGrid}>
        {quickLinks.map((link, index) => (
          <QuickLinkCard key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Sovereign Cloud & AI Infrastructure"
      description="Coredge enables enterprises and governments to deploy AI-ready cloud infrastructure with complete control over data, location, and security.">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <QuickLinksSection />
      </main>
    </Layout>
  );
}
