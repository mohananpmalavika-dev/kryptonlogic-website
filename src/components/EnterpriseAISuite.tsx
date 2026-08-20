import React, { useState } from 'react';
import { 
  Cpu, 
  Users, 
  Receipt, 
  Package, 
  ShieldCheck, 
  Headphones, 
  Kanban, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Lock,
  Layers
} from 'lucide-react';

interface EnterpriseAISuiteProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const EnterpriseAISuite: React.FC<EnterpriseAISuiteProps> = ({
  onOpenContact,
  onOpenEstimator
}) => {
  const [activeModule, setActiveModule] = useState<string>('crm');

  const modules = [
    {
      id: 'crm',
      name: 'CRM & Pipeline',
      icon: Users,
      tag: 'GROWTH ENGINE',
      color: 'from-cyan-500 to-blue-500',
      description: 'Comprehensive customer relationship management with end-to-end sales pipeline tracking, lead scoring, and automated client engagement tools.',
      features: [
        'Automated lead capture & intelligent qualification',
        'Visual multi-stage deal pipelines with revenue forecasting',
        'Omnichannel customer history (WhatsApp, Email, Calls)',
        'Automated follow-up reminders & task triggers'
      ]
    },
    {
      id: 'billing',
      name: 'GST Billing & Accounting',
      icon: Receipt,
      tag: 'FINANCE & TAX',
      color: 'from-emerald-500 to-teal-500',
      description: 'GST-ready billing, automated accounting, e-invoicing, and financial reporting tailored specifically for Indian enterprise compliance and tax filing.',
      features: [
        '100% GST-compliant e-invoicing & e-way bill generation',
        'Automated multi-ledger accounting & reconciliation',
        'Real-time P&L, balance sheets, and tax liability reports',
        'Payment gateway integration (UPI, Razorpay, Net Banking)'
      ]
    },
    {
      id: 'inventory',
      name: 'Inventory & Warehouse',
      icon: Package,
      tag: 'SUPPLY CHAIN',
      color: 'from-amber-500 to-orange-500',
      description: 'Real-time multi-location stock visibility, automated reorder triggers, purchase order workflows, and integrated barcode/QR inventory scanning.',
      features: [
        'Multi-warehouse real-time inventory tracking',
        'Automated low-stock alerts & vendor purchase orders',
        'Barcode, QR code, and RFID serial asset tagging',
        'Batch tracking, expiry management, and wastage audits'
      ]
    },
    {
      id: 'security',
      name: 'Security Management',
      icon: ShieldCheck,
      tag: 'FACILITY CONTROL',
      color: 'from-rose-500 to-red-500',
      description: 'Centralized command and oversight integrating CCTV surveillance, biometric access logs, turnstile controls, and intrusion alarm systems into one unified pane.',
      features: [
        'Unified dashboard for CCTV feeds, biometrics & alarms',
        'Real-time physical access audits & visitor logging',
        'Instant security breach escalation via WhatsApp & SMS',
        'Tamper-proof encrypted compliance logs'
      ]
    },
    {
      id: 'servicedesk',
      name: 'Service Desk & SLAs',
      icon: Headphones,
      tag: '24/7 SUPPORT',
      color: 'from-violet-500 to-purple-500',
      description: 'Enterprise IT service desk with multi-tier ticket management, SLA breach prediction, automated field technician dispatch, and customer CSAT scoring.',
      features: [
        'Multi-channel ticketing (Web, WhatsApp, Email, Mobile)',
        'Configurable SLA matrices with escalation automation',
        'Field engineer mobile app with GPS on-site check-in',
        'Automated client resolution sign-off & feedback'
      ]
    },
    {
      id: 'project',
      name: 'Project Management',
      icon: Kanban,
      tag: 'DELIVERY',
      color: 'from-blue-500 to-indigo-500',
      description: 'Plan, execute, and deliver complex IT and infrastructure projects with interactive Gantt charts, resource allocation, and milestone billing.',
      features: [
        'Interactive Kanban boards, Gantt charts & sprint plans',
        'Engineer workload and resource allocation tracking',
        'Milestone-based project billing & budget monitoring',
        'Document repository with role-based version control'
      ]
    },
    {
      id: 'dashboards',
      name: 'Role-Based Dashboards',
      icon: BarChart3,
      tag: 'EXECUTIVE BI',
      color: 'from-cyan-400 to-emerald-400',
      description: 'Executive dashboards providing live operational KPIs, technician performance heatmaps, financial summaries, and security health across all branches.',
      features: [
        'Customizable executive widgets with live data streaming',
        'Granular role-based access for CEOs, Managers & Techs',
        'Scheduled automated PDF / Excel report exports',
        'Cross-branch performance benchmarking'
      ]
    },
    {
      id: 'automation',
      name: 'AI Automation & Insights',
      icon: Sparkles,
      tag: 'NEURAL CORE',
      color: 'from-fuchsia-500 to-pink-500',
      description: 'Underlying neural intelligence that analyzes operational patterns, flags anomalies, predicts maintenance requirements, and automates repetitive workflows.',
      features: [
        'Predictive hardware maintenance & failure alerts',
        'Anomaly detection across financial transactions & access logs',
        'Natural language search & operational reporting bot',
        'Zero-code workflow builder for cross-module triggers'
      ]
    }
  ];

  const currentModule = modules.find(m => m.id === activeModule) || modules[0];
  const CurrentIcon = currentModule.icon;

  return (
    <section id="enterprise-suite" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden border-b border-cyan-500/20">
      
      {/* Background Luminescent Accents */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Cpu className="w-3.5 h-3.5" />
            <span>ALL-IN-ONE BUSINESS OPERATING SYSTEM</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            KryptonLogic <span className="text-gradient-cyan">Enterprise AI Suite</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            A unified, AI-powered enterprise platform bringing together <strong className="text-white">CRM, GST Billing, Inventory, Physical Security, Service Desk, Projects, and Dashboards</strong> in one integrated ecosystem — enabling seamless automation, real-time visibility, and smarter decision-making.
          </p>
        </div>

        {/* 8-Module Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-12">
          {modules.map((m) => {
            const Icon = m.icon;
            const isSelected = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-brand-850 to-brand-900 border-2 border-cyan-glow shadow-glow-cyan scale-105'
                    : 'bg-brand-900/70 border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl mb-2 ${
                  isSelected ? 'bg-cyan-glow text-brand-950 shadow-pill-glow' : 'bg-brand-800 text-cyan-accent'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold font-mono tracking-tight leading-snug ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {m.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="luxe-card-static rounded-3xl p-6 sm:p-10 border border-cyan-500/40 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-cyan-glow text-brand-950 font-bold shadow-glow-cyan">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold bg-cyan-500/20 text-cyan-glow border border-cyan-500/30 uppercase">
                    {currentModule.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    {currentModule.name}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {currentModule.description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentModule.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-brand-900/90 border border-cyan-500/20 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-mono leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-primary px-7 py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 shadow-glow-cyan"
                >
                  <span>Request Custom Demo & Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEstimator}
                  className="btn-luxe-secondary px-6 py-3.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-cyan-glow" />
                  <span>Calculate Deployment Cost</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Visualizer */}
            <div className="lg:col-span-5 bg-brand-950 rounded-2xl p-5 border border-cyan-500/30 space-y-4 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 text-[11px] ml-2">KL-ENTERPRISE-CORE :: {currentModule.id.toUpperCase()}</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  LIVE SYNCED
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="text-cyan-glow font-bold">Cloud + On-Premise Hybrid</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                  <span className="text-slate-400">Indian Compliance:</span>
                  <span className="text-emerald-400 font-bold">100% GST & e-Invoicing Ready</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                  <span className="text-slate-400">Security Integration:</span>
                  <span className="text-white font-bold">CCTV, Biometrics & Alarm Link</span>
                </div>
                <div className="p-3 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                  <span className="text-slate-400">Multi-Branch Sync:</span>
                  <span className="text-cyan-accent font-bold">Sub-Second Real-Time ETL</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-brand-900 to-brand-850 border border-cyan-500/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <div className="text-[11px] text-slate-300">
                  <strong className="text-white font-bold">Turnkey Onboarding:</strong> Fully configured, migrated, and trained by our certified engineers in Kollam & Kerala.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
