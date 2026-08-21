import React from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Globe, 
  Navigation
} from 'lucide-react';

interface KollamHQProps {
  onOpenContact: () => void;
}

export const KollamHQ: React.FC<KollamHQProps> = ({ onOpenContact }) => {
  return (
    <section id="kollam-hq" className="relative py-24 sm:py-32 bg-brand-900 bg-dot-matrix overflow-hidden border-t border-cyan-500/20">
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
            <span>OUR HOME BASE & LAB</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Proudly Headquartered in<br />
            <span className="text-gradient-cyan">Kollam, Kerala, India</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto">
            From the historic coastal tech corridor of Kollam, our passionate engineers, AI researchers, and hardware technicians build world-class software that powers enterprises globally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="luxe-card p-8 rounded-3xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  KryptonLogic Software & Hardware Lab
                </h3>
                <p className="text-xs font-mono text-cyan-accent">
                  Full-Cycle Software Engineering & High-Capacity CCTV Testing Facility
                </p>
              </div>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Our Kollam facility houses dedicated software sprint pods, an advanced computer vision hardware testbed for testing 50+ concurrent 4K IP cameras, and our 24/7 on-site rapid response hardware dispatch unit.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-200">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-brand-950 border border-cyan-500/10">
                  <MapPin className="w-4 h-4 text-cyan-glow mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white block">Corporate HQ Address:</strong>
                    <span>KryptonLogic IT Solutions, Kollam Tech Corridor, Kollam, Kerala - 691001, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-950 border border-cyan-500/10">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Direct Hotline & WhatsApp:</strong>
                    <span className="text-emerald-400">+91 85939 44144 | 011-69266519</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-950 border border-cyan-500/10">
                  <Mail className="w-4 h-4 text-sapphire-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Official Inquiries:</strong>
                    <span className="text-sapphire-400">contact@kryptonlogic.com • info@kryptonlogic.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-950 border border-cyan-500/10">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Operating Hours:</strong>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM IST (24/7 Emergency Dispatch)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-primary px-6 py-3.5 rounded-xl text-xs uppercase font-extrabold flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-brand-950" />
                  <span>Visit or Contact Our Office</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl luxe-card-static p-8 border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Globe className="w-64 h-64 text-cyan-glow" />
              </div>

              <h4 className="font-display font-extrabold text-2xl text-white mb-4">
                Dual Operational Model
              </h4>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-brand-950 border border-emerald-500/30">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>ON-SITE HARDWARE & CCTV OPERATIONS</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Direct on-site installation, optical fiber networking, and AMC engineer dispatch in <strong>Kollam, Trivandrum, Pathanamthitta, Alappuzha, Ernakulam / Kochi, and all Kerala districts</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-brand-950 border border-cyan-500/30">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-glow mb-1">
                    <Globe className="w-4 h-4 text-cyan-glow" />
                    <span>GLOBAL DIGITAL & SOFTWARE DELIVERY</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Remote custom software engineering, startup MVP development, cloud architecture, and KryptonVision™ platform deployments for clients across <strong>India, UAE / Middle East, Singapore, UK, and USA</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Coordinates: 8.8932° N, 76.6141° E</span>
                <span className="text-cyan-glow font-bold">Kollam, Kerala</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
