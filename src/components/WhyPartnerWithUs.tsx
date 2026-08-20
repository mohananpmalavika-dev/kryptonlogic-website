import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  MapPin, 
  Clock, 
  Sparkles, 
  DollarSign, 
  CheckCircle2, 
  HeartHandshake, 
  Award,
  ArrowRight,
  Globe2,
  PhoneCall
} from 'lucide-react';

interface WhyPartnerWithUsProps {
  onOpenContact: () => void;
}

export const WhyPartnerWithUs: React.FC<WhyPartnerWithUsProps> = ({ onOpenContact }) => {
  const values = [
    {
      num: '01',
      title: 'End-to-End Capability',
      tag: 'FULL LIFECYCLE',
      icon: ShieldCheck,
      color: 'text-cyan-glow',
      description: 'From initial consultation, site blueprint design, structured cabling, hardware installation, commissioning, 24/7 AMC, to AI-enabled software operations — we are your single responsible partner.'
    },
    {
      num: '02',
      title: 'Strong Technical Team',
      tag: 'CERTIFIED EXPERTS',
      icon: Users,
      color: 'text-sapphire-400',
      description: 'Experienced, vendor-certified engineers and technicians delivering top-tier workmanship, neat rack cable management, and dependable project execution across multi-branch sites.'
    },
    {
      num: '03',
      title: 'Nationwide & Kerala On-Site Reach',
      tag: 'RAPID ON-SITE DISPATCH',
      icon: MapPin,
      color: 'text-emerald-400',
      description: 'Headquartered in Kollam with rapid on-site technician dispatch across all 14 districts of Kerala and pan-India project commissioning & remote management capabilities.'
    },
    {
      num: '04',
      title: '24×7 Remote Monitoring & Support',
      tag: 'ZERO DOWNTIME',
      icon: Clock,
      color: 'text-amber-400',
      description: 'Round-the-clock remote network and camera health monitoring to catch faults proactively and resolve technical issues quickly before operations are impacted.'
    },
    {
      num: '05',
      title: 'Cost-Effective, High-Reliability Solutions',
      tag: 'MAXIMUM ROI',
      icon: DollarSign,
      color: 'text-rose-400',
      description: 'High-quality, enterprise-grade hardware and software offerings tailored to your exact budget and business requirements without ever compromising on security or longevity.'
    },
    {
      num: '06',
      title: 'Future-Ready Technology & AI',
      tag: 'LIMITLESS SCALABILITY',
      icon: Sparkles,
      color: 'text-violet-400',
      description: 'Cloud surveillance, edge neural AI, modern web architectures, and automated GST/CRM business suites that evolve and scale effortlessly with your organization.'
    }
  ];

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden border-b border-cyan-500/20">
      
      {/* Background Luminescence */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sapphire-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="luxe-card p-8 sm:p-10 rounded-3xl border-l-4 border-l-cyan-glow">
            <span className="text-xs font-mono font-bold text-cyan-glow tracking-widest uppercase mb-2 block">
              OUR MISSION
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
              Protecting Assets, Connecting Enterprises & Empowering Growth
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              To provide comprehensive IT infrastructure, electronic security, cloud, and AI-powered solutions that protect people, assets, and critical infrastructure — ensuring a safe, connected, and future-ready environment for our clients.
            </p>
          </div>

          <div className="luxe-card p-8 sm:p-10 rounded-3xl border-l-4 border-l-sapphire-400">
            <span className="text-xs font-mono font-bold text-sapphire-400 tracking-widest uppercase mb-2 block">
              OUR VISION
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
              The Most Trusted Technology & Security Partner
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              To be the trusted partner for integrated IT, physical security, and AI enterprise solutions — empowering businesses and organizations to achieve their technology goals and thrive in a secure, intelligent environment.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>THE KRYPTONLOGIC ADVANTAGE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Why Partner <span className="text-gradient-cyan">With Us</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            We don't just deliver products — we build enduring technological partnerships that guarantee 99.99% system uptime, airtight security, and seamless business growth.
          </p>
        </div>

        {/* 6 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div 
                key={v.num}
                className="luxe-card p-8 rounded-3xl flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-cyan-glow transition-colors">
                      {v.num}
                    </span>
                    <div className={`p-3 rounded-2xl bg-brand-900 border border-white/5 ${v.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-glow border border-cyan-500/20 uppercase">
                    {v.tag}
                  </span>

                  <h3 className="font-display font-bold text-xl text-white mt-3 mb-3">
                    {v.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Call Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-900 via-brand-850 to-brand-900 p-8 sm:p-12 border border-cyan-500/40 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-glow-cyan">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-widest">
              DIRECT ENGINEER HOTLINE & WHATSAPP
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Let's Build Secure, Intelligent Infrastructure
            </h3>
            <p className="text-sm text-slate-300 font-light max-w-xl">
              Talk directly with our senior technology consultants in Kollam, Kerala. We respond in under 15 minutes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+918593944144"
              className="btn-luxe-primary px-8 py-4 rounded-2xl text-xs font-mono font-bold tracking-wider flex items-center gap-3 shadow-glow-cyan"
            >
              <PhoneCall className="w-4 h-4 text-brand-950" />
              <span>Call +91 85939 44144</span>
            </a>

            <a
              href="https://wa.me/918593944144?text=Hi%20KryptonLogic%2C%20I%20want%20to%20discuss%20an%20IT%20and%20Security%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxe-secondary px-7 py-4 rounded-2xl text-xs font-mono font-bold tracking-wide flex items-center gap-2.5 text-emerald-400 hover:border-emerald-400"
            >
              <span>WhatsApp Chat ↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
