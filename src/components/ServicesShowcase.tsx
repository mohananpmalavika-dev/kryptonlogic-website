import React, { useState } from 'react';
import { 
  Cpu, 
  ShoppingCart, 
  Database, 
  ArrowRight, 
  Sparkles, 
  Cloud
} from 'lucide-react';

interface ServicesShowcaseProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onOpenContact,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'software' | 'ecommerce' | 'migration' | 'cloud'>('software');

  const services = {
    software: {
      title: 'Custom Software & Enterprise Solutions',
      subtitle: 'Bespoke web applications, CRM, ERP, and automated workflow systems.',
      icon: Cpu,
      badge: 'ENTERPRISE READY',
      description: 'We develop tailor-made software architectures engineered around your company’s unique business logic. Eliminating manual bottlenecks with seamless cloud-native software.',
      capabilities: [
        'Custom Enterprise ERP & Inventory Systems',
        'Customer Relationship Management (CRM) Portals',
        'Billing, POS & Invoicing Platforms with GST Integration',
        'Workflow Automation & Internal Admin Dashboards',
        'High-Throughput Microservice Architectures & REST/GraphQL APIs',
        'Role-Based Multi-Tenant SaaS Products'
      ],
      tech: ['React', 'Node.js', 'Go', 'Python / FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      turnaround: '4 - 8 Weeks'
    },
    ecommerce: {
      title: 'Customer Websites & E-Commerce Platforms',
      subtitle: 'High-converting business websites, interactive portals, and modern online storefronts.',
      icon: ShoppingCart,
      badge: 'HIGH CONVERSION',
      description: 'Your digital storefront is the face of your business. We build ultra-fast, SEO-optimized corporate websites and feature-packed e-commerce stores with zero lag and frictionless checkout.',
      capabilities: [
        'Custom Corporate & Brand Web Experiences',
        'Full-Scale E-Commerce Stores (Single & Multi-Vendor)',
        'Payment Gateway Integration (Razorpay, UPI, Stripe, Cashfree)',
        'Real-Time Cart, Order Tracking & WhatsApp Notifications',
        'Automated Shipping API Integrations (Shiprocket, Delhivery)',
        'SEO Optimization, Speed Scores & Conversion Funnels'
      ],
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Shopify / Headless', 'Node.js', 'Redis', 'Stripe'],
      turnaround: '2 - 4 Weeks'
    },
    migration: {
      title: 'Data Migration & Legacy Modernization',
      subtitle: 'Zero-downtime database transitions, legacy system rewrites, and data restructuring.',
      icon: Database,
      badge: 'ZERO DOWNTIME',
      description: 'Tired of slow legacy databases and outdated systems? We safely extract, transform, sanitize, and migrate millions of records into modern cloud databases without interrupting your live business.',
      capabilities: [
        'Legacy On-Premise SQL Server / Oracle to Cloud DB Migration',
        'Schema Normalization, Cleaning & Integrity Verification',
        'Automated ETL Pipelines with Change Data Capture (CDC)',
        'Zero-Downtime Cutover Strategies with Rollback Safety',
        'Cross-Platform CRM & ERP Database Migration',
        'Encrypted Automated Cloud Backup & Disaster Recovery'
      ],
      tech: ['PostgreSQL', 'ClickHouse', 'MongoDB', 'AWS DMS', 'Kafka', 'Python ETL', 'Redis'],
      turnaround: '1 - 3 Weeks'
    },
    cloud: {
      title: 'Cloud Architecture & DevOps Engineering',
      subtitle: 'High-availability AWS & GCP cloud setups, Docker containers, and CI/CD pipelines.',
      icon: Cloud,
      badge: '99.99% SLA',
      description: 'Scale your infrastructure effortlessly. We design fault-tolerant cloud environments that auto-scale with traffic spikes, harden your cybersecurity posture, and slash cloud hosting costs.',
      capabilities: [
        'AWS, Google Cloud (GCP) & DigitalOcean Architecture',
        'Kubernetes Container Orchestration & Dockerization',
        'Zero-Downtime Automated CI/CD Pipelines (GitHub Actions)',
        'Serverless Functions & Edge CDN Optimization',
        'Infrastructure as Code (Terraform & Ansible)',
        '24/7 Cloud Health Monitoring & Auto-Healing Clusters'
      ],
      tech: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Nginx', 'GitHub Actions'],
      turnaround: 'Continuous / 2 Weeks'
    }
  };

  const current = services[activeTab];
  const Icon = current.icon;

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden">
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-cyan-glow/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sapphire-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM SOFTWARE & DIGITAL ENGINEERING</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Software Development,<br />
            <span className="text-gradient-cyan">E-Commerce & Cloud Data Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            From modern web applications to complex cloud databases and high-volume e-commerce storefronts, KryptonLogic delivers production-grade engineering tailored for speed and reliability.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'software', label: 'Custom Software & SaaS', icon: Cpu },
            { id: 'ecommerce', label: 'Websites & E-Commerce', icon: ShoppingCart },
            { id: 'migration', label: 'Data Migration & ETL', icon: Database },
            { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
          ].map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-mono font-semibold flex items-center gap-2.5 transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-glow text-brand-950 shadow-glow-cyan font-bold scale-105'
                    : 'bg-brand-900 border border-cyan-500/20 text-slate-300 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Card */}
        <div className="rounded-3xl luxe-card-static p-6 sm:p-10 border border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono">
                <Icon className="w-4 h-4" />
                <span>{current.badge}</span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-sm font-mono text-cyan-accent">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {current.description}
              </p>

              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Core Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-brand-950 border border-cyan-500/20 text-slate-200 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-primary px-6 py-3.5 rounded-xl text-xs uppercase font-extrabold flex items-center gap-2"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenEstimator}
                  className="btn-luxe-secondary px-5 py-3.5 rounded-xl text-xs font-mono font-bold"
                >
                  Calculate Pricing
                </button>
              </div>
            </div>

            {/* Right Capabilities */}
            <div className="lg:col-span-6 bg-brand-950/90 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-4">
              <div className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Key Capabilities & Deliverables</span>
                <span className="text-emerald-400 font-normal">Delivery: {current.turnaround}</span>
              </div>

              <div className="space-y-3">
                {current.capabilities.map((cap, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-brand-900 border border-cyan-500/10 flex items-start gap-3 hover:border-cyan-500/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-glow text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-100">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
