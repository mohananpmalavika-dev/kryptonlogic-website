import React from 'react';
import { 
  Building, 
  Landmark, 
  Briefcase, 
  ShieldAlert, 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  ShoppingCart, 
  Truck, 
  CheckCircle2,
  ArrowRight,
  Lock,
  Globe
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenContact: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenContact }) => {
  const industries = [
    {
      id: 'banking',
      name: 'Banking & NBFCs',
      icon: Landmark,
      color: 'text-cyan-glow',
      bg: 'bg-cyan-500/10 border-cyan-500/30',
      description: 'Secure multi-branch banking networks, ATM surveillance vaults, and cash-in-transit monitoring with CCTV, biometric entry, and network infrastructure that exceed RBI regulatory compliance.',
      highlights: ['ATM & Vault Intrusion Grid', 'Centralized Security Cockpit', 'Tamper-Proof Audit Vaults']
    },
    {
      id: 'corporate',
      name: 'Corporate Offices',
      icon: Briefcase,
      color: 'text-sapphire-400',
      bg: 'bg-sapphire-500/10 border-sapphire-500/30',
      description: 'End-to-end structured Cat6/fiber cabling, high-density Wi-Fi 6, facial biometric attendance, automated meeting room tech, and unified AI operations that keep modern workplaces safe and productive.',
      highlights: ['Touchless Facial Biometrics', 'Structured 10G LAN Cabling', 'Visitor Management & Turnstiles']
    },
    {
      id: 'government',
      name: 'Government & Public Sector',
      icon: ShieldAlert,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
      description: 'High-reliability physical security, optical fiber backbones, and custom IT solutions for administrative headquarters, courts, and civic facilities supporting transparency, safety, and continuous uptime.',
      highlights: ['Perimeter Laser Tripwires', 'Critical Infrastructure Uptime', 'Encrypted Local Edge Archiving']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Hospitals',
      icon: HeartPulse,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30',
      description: 'Patient privacy safeguards, ICU & pharmacy access control, hospital ward video monitoring, nurse-call integrations, and ultra-reliable 24/7 medical network infrastructure.',
      highlights: ['Restricted Ward Access Control', 'High-Speed Medical LAN', 'HIPAA/NABH Compliance Sync']
    },
    {
      id: 'education',
      name: 'Education & Universities',
      icon: GraduationCap,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      description: 'Safe, smart campus security spanning perimeter surveillance, student hostel biometrics, smart classroom networking, digital library infrastructure, and centralized administrative management.',
      highlights: ['Campus-Wide AI Surveillance', 'Student & Staff Biometrics', 'Smart Classroom Wi-Fi 6']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Plants',
      icon: Factory,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10 border-orange-500/30',
      description: 'Industrial-grade explosion-proof cameras, thermal inspection systems, optical fiber factory backbones, inventory-linked warehouse monitoring, and worker safety helmet/vest compliance AI.',
      highlights: ['Industrial CCTV & Thermal AI', 'Factory Optical Fiber Splicing', 'Heavy-Duty 24/7 AMC Support']
    },
    {
      id: 'retail',
      name: 'Retail Chains & Showrooms',
      icon: ShoppingCart,
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border-violet-500/30',
      description: 'Loss prevention security, customer footfall heatmaps, queue dwell analytics, multi-store POS/GST billing synchronization, and centralized multi-branch cloud surveillance.',
      highlights: ['Customer Heatmap & ANPR', 'Multi-Store Cloud Cockpit', 'GST POS Billing Integration']
    },
    {
      id: 'logistics',
      name: 'Transport & Logistics',
      icon: Truck,
      color: 'text-cyan-accent',
      bg: 'bg-cyan-500/10 border-cyan-500/30',
      description: 'Fleet yard surveillance, automated number plate recognition (ANPR) at loading docks, container tracking, high-bay warehouse Wi-Fi, and robust connectivity across nationwide distribution networks.',
      highlights: ['Automated Boom Barriers & ANPR', 'Warehouse Yard Surveillance', 'Pan-Kerala & Pan-India Dispatch']
    }
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-brand-900 bg-dot-matrix overflow-hidden border-b border-cyan-500/20">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sapphire-600/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-sapphire-500/20 border border-cyan-500/40 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Globe className="w-3.5 h-3.5" />
            <span>MULTI-SECTOR DOMAIN EXPERTISE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Industries <span className="text-gradient-iridescent">We Serve</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            From high-security financial vaults and hospital facilities to industrial manufacturing plants and hyper-growth startups — we deliver battle-tested IT infrastructure, electronic security, and custom software tailored to each sector's strict operational demands.
          </p>
        </div>

        {/* 8-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div 
                key={ind.id}
                className="luxe-card p-6 rounded-3xl flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${ind.bg} border flex items-center justify-center ${ind.color} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2.5">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  {ind.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-cyan-accent">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <div className="rounded-3xl luxe-card-static p-8 sm:p-10 border border-cyan-500/40 text-center max-w-4xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Looking for Custom Infrastructure or Software for Your Industry?
          </h3>
          <p className="text-sm text-slate-300 font-light max-w-2xl mx-auto mb-6">
            Our certified engineers in Kollam & across Kerala provide free site surveys, network audits, and bespoke architectural proposals.
          </p>
          <button
            onClick={onOpenContact}
            className="btn-luxe-primary px-8 py-4 rounded-2xl text-xs uppercase tracking-wider font-extrabold inline-flex items-center gap-2.5 shadow-glow-cyan"
          >
            <span>Book Free On-Site Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
