import React, { useState } from 'react';
import { 
  Rocket, 
  Lightbulb, 
  Code2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Globe, 
  Database, 
  Cpu, 
  Check
} from 'lucide-react';

interface StartupLaunchpadProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const StartupLaunchpad: React.FC<StartupLaunchpadProps> = ({
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ecommerce');

  const startupDomains = [
    {
      id: 'ecommerce',
      title: 'E-Commerce & Quick Commerce',
      icon: Globe,
      tech: 'Next.js, Node.js, Redis, Razorpay, PostgreSQL',
      timeline: '2 - 4 Weeks',
      deliverables: ['Custom Storefront', 'Admin Dashboard', 'Payment Gateway (UPI/Cards)', 'Order & Inventory Sync', 'Delivery Partner APIs'],
      highlights: 'Built for high-volume flash sales & multi-vendor architecture.'
    },
    {
      id: 'fintech',
      title: 'FinTech & Micro-Lending Apps',
      icon: ShieldCheck,
      tech: 'FastAPI, Python, React Native, AWS KMS, ClickHouse',
      timeline: '4 - 6 Weeks',
      deliverables: ['KYC Verification Engine', 'Instant Loan Calculator', 'Bank Account Aggregator', 'Ledger Accounting DB', 'RBI Compliance Architecture'],
      highlights: 'Bank-grade encryption, AES-256 tokenization, and audit logs.'
    },
    {
      id: 'healthtech',
      title: 'HealthTech & Telemedicine',
      icon: Zap,
      tech: 'React, WebRTC, Node.js, HIPAA-Compliant Cloud',
      timeline: '3 - 5 Weeks',
      deliverables: ['Doctor Video Consultation', 'Patient Electronic Health Records', 'Prescription Generator', 'Diagnostic Lab Integrations', 'Appointment Scheduler'],
      highlights: 'Encrypted WebRTC live consultations with low-bandwidth optimization.'
    },
    {
      id: 'logistics',
      title: 'Logistics & Fleet Tracking',
      icon: Cpu,
      tech: 'Go, Flutter, TimescaleDB, MQTT IoT, Google Maps',
      timeline: '3 - 5 Weeks',
      deliverables: ['Live GPS Telemetry', 'Driver Mobile App', 'Route Optimization Engine', 'Automated Dispatch Hub', 'Consignment Barcode Scanner'],
      highlights: 'Sub-second vehicle telemetry tracking with real-time geo-fencing.'
    },
    {
      id: 'saas',
      title: 'B2B SaaS & Enterprise Tools',
      icon: Database,
      tech: 'React, TypeScript, GraphQL, Docker, Stripe/Paddle',
      timeline: '3 - 6 Weeks',
      deliverables: ['Multi-Tenant Workspace', 'Tiered Subscription Billing', 'Granular Role Permissions', 'Webhook & REST API Suite', 'Interactive Analytics HUD'],
      highlights: 'Modular cloud microservices built for enterprise scale from day one.'
    },
    {
      id: 'ondemand',
      title: 'On-Demand Service Platforms',
      icon: Smartphone,
      tech: 'React Native, Node.js, WebSockets, MongoDB, Firebase',
      timeline: '3 - 4 Weeks',
      deliverables: ['Customer Mobile App', 'Partner Service Provider App', 'Real-Time Job Dispatcher', 'In-App Chat & Call Masking', 'Rating & Review Engine'],
      highlights: 'High-concurrency matching algorithm for urban & regional services.'
    }
  ];

  return (
    <section id="startups" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sapphire-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-glow/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sapphire-900/40 border border-sapphire-500/30 text-sapphire-300 text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Rocket className="w-3.5 h-3.5" />
            <span>STARTUP LAUNCHPAD & ACCELERATOR</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            We Build, Launch & Scale<br />
            <span className="text-gradient-cyan">Any Type of Tech Startup</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Got a game-changing idea? We serve as your <strong className="text-white font-medium">dedicated technical co-founder & engineering powerhouse</strong>. From raw napkin sketches to production-ready MVPs, scalable cloud architectures, and investor-ready tech decks.
          </p>
        </div>

        {/* 4-Stage Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Stage 1 */}
          <div className="luxe-card p-6 rounded-2xl relative group">
            <div className="absolute top-4 right-4 text-2xl font-display font-extrabold text-slate-700 group-hover:text-cyan-glow transition-colors">
              01
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-glow mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Product Blueprint & Scoping</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              We scope your features, create high-fidelity UI/UX wireframes, model scalable database schemas, and formulate a 4-week sprint delivery roadmap.
            </p>
            <div className="text-[11px] font-mono text-cyan-accent bg-brand-950 p-2.5 rounded-xl border border-cyan-500/10">
              ⚡ Specs & Clickable Prototype
            </div>
          </div>

          {/* Stage 2 */}
          <div className="luxe-card p-6 rounded-2xl relative group">
            <div className="absolute top-4 right-4 text-2xl font-display font-extrabold text-slate-700 group-hover:text-sapphire-400 transition-colors">
              02
            </div>
            <div className="w-12 h-12 rounded-xl bg-sapphire-500/10 border border-sapphire-500/30 flex items-center justify-center text-sapphire-400 mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Rapid Full-Stack MVP Sprints</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Our Kollam engineering squad builds your frontend web app, cross-platform iOS/Android mobile apps, and robust cloud API backend in record time.
            </p>
            <div className="text-[11px] font-mono text-sapphire-400 bg-brand-950 p-2.5 rounded-xl border border-cyan-500/10">
              ⚡ Functional Beta Software & APIs
            </div>
          </div>

          {/* Stage 3 */}
          <div className="luxe-card p-6 rounded-2xl relative group">
            <div className="absolute top-4 right-4 text-2xl font-display font-extrabold text-slate-700 group-hover:text-emerald-400 transition-colors">
              03
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Go-to-Market & Payments</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Integration of payment gateways (Razorpay, UPI, Stripe), automated user onboarding, SEO optimization, analytics instrumentation, and conversion tracking.
            </p>
            <div className="text-[11px] font-mono text-emerald-400 bg-brand-950 p-2.5 rounded-xl border border-cyan-500/10">
              ⚡ Live Production Launch
            </div>
          </div>

          {/* Stage 4 */}
          <div className="luxe-card p-6 rounded-2xl relative group">
            <div className="absolute top-4 right-4 text-2xl font-display font-extrabold text-slate-700 group-hover:text-amber-400 transition-colors">
              04
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Scale & Cloud DevOps</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Auto-scaling Kubernetes clusters, zero-downtime CI/CD deployments, CTO-as-a-Service, and technical backing during investor diligence rounds.
            </p>
            <div className="text-[11px] font-mono text-amber-400 bg-brand-950 p-2.5 rounded-xl border border-cyan-500/10">
              ⚡ 1M+ User Scalability SLA
            </div>
          </div>

        </div>

        {/* Interactive Domain Explorer */}
        <div className="rounded-3xl luxe-card-static p-6 sm:p-10 border border-cyan-500/30 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Select Your Startup Domain to See Tech & Deliverables
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Tailored tech stacks and production timelines designed for rapid market dominance.
            </p>
          </div>

          {/* Domain Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {startupDomains.map((dom) => {
              const Icon = dom.icon;
              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                    selectedDomain === dom.id
                      ? 'bg-cyan-glow text-brand-950 font-bold shadow-glow-cyan scale-105'
                      : 'bg-brand-950 border border-cyan-500/20 text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{dom.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Domain Card */}
          {(() => {
            const current = startupDomains.find(d => d.id === selectedDomain) || startupDomains[0];
            const Icon = current.icon;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-brand-950/80 p-6 sm:p-8 rounded-2xl border border-cyan-500/20 items-center">
                
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono">
                    <Icon className="w-4 h-4" />
                    <span>Domain: {current.title}</span>
                  </div>

                  <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {current.title} Launch Blueprint
                  </h4>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {current.highlights}
                  </p>

                  <div className="p-4 rounded-xl bg-brand-900 border border-cyan-500/20 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Recommended Tech Stack:</span>
                      <span className="text-cyan-glow font-bold">{current.tech}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Typical MVP Timeline:</span>
                      <span className="text-emerald-400 font-bold">{current.timeline}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenConsultation}
                      className="btn-luxe-primary px-6 py-3 rounded-xl text-xs uppercase font-extrabold flex items-center gap-2"
                    >
                      <span>Book Free Founder Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onOpenEstimator}
                      className="btn-luxe-secondary px-5 py-3 rounded-xl text-xs font-mono font-bold"
                    >
                      Calculate MVP Cost
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-brand-900/90 p-6 rounded-2xl border border-cyan-500/20">
                  <div className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Included Core MVP Deliverables</span>
                  </div>

                  <div className="space-y-3">
                    {current.deliverables.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-brand-950 border border-cyan-500/10 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0">
                          ✓
                        </div>
                        <span className="text-xs font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
