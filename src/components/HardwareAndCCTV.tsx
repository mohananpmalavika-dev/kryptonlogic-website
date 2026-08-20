import React, { useState } from 'react';
import { 
  Camera, 
  ShieldCheck, 
  Server, 
  Network, 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Fingerprint, 
  BellRing, 
  Radio, 
  Layers, 
  Cloud,
  HardDrive,
  Cable,
  Building2,
  Lock
} from 'lucide-react';

interface HardwareAndCCTVProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const HardwareAndCCTV: React.FC<HardwareAndCCTVProps> = ({
  onOpenContact,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'cctv' | 'access' | 'cabling' | 'cloud' | 'amc'>('cctv');

  const services = {
    cctv: {
      title: 'CCTV Surveillance & Intelligent Video Management (VMS)',
      tag: 'OPTICAL SECURITY & ANALYTICS',
      icon: Camera,
      color: 'text-cyan-glow',
      description: 'Turnkey planning, high-definition 4K & IP camera installation, and commissioning of enterprise video management systems with remote viewing and AI-assisted event detection.',
      features: [
        { name: 'HD, 4K & IP Camera Systems', desc: 'Hikvision, Dahua, Axis, CP Plus & Trueview authorized deployment with high-resolution optics and night vision.' },
        { name: 'Expert Certified Installation', desc: 'Precision camera angle calibration, blind-spot elimination, weatherproof IP67 conduit enclosures.' },
        { name: 'Remote Cloud Monitoring', desc: 'Secure real-time multi-branch viewing on iOS, Android, and Web browsers from anywhere.' },
        { name: 'Centralized VMS & Storage', desc: 'NVR/DVR storage arrays with RAID redundancy, smart motion search, and 30 to 90-day forensic backup.' }
      ]
    },
    access: {
      title: 'Access Control, Biometric Attendance & Intrusion Alarms',
      tag: 'PREMISE ACCESS & WORKFORCE',
      icon: Fingerprint,
      color: 'text-emerald-400',
      description: 'Comprehensive premise security combining touchless facial & fingerprint biometric attendance, electromagnetic door controllers, turnstiles, and intrusion alarm panels.',
      features: [
        { name: 'Biometric Attendance Systems', desc: 'High-speed fingerprint, 3D facial recognition, and RFID smart card devices for accurate payroll & workforce logging.' },
        { name: 'Audited Access Control', desc: 'Single-door and multi-door controllers, electromagnetic drop-bolt locks, turnstiles, and boom barriers.' },
        { name: 'Intrusion Alarm Systems', desc: 'Multi-zone intrusion sensors, motion detection panels, and sirens linked with CCTV for rapid alarm response.' },
        { name: 'BMS & Fire Alarm Integration', desc: 'Seamless interlock linkage with building management systems, emergency glass break, and fire exits.' }
      ]
    },
    cabling: {
      title: 'IT Infrastructure, Structured Cabling & Fiber Optics',
      tag: 'HIGH-SPEED CONNECTIVITY',
      icon: Network,
      color: 'text-sapphire-400',
      description: 'End-to-end network backbone design, certified Cat6/Cat7 structured data cabling, high-speed optical fiber splicing, and clean server rack installations.',
      features: [
        { name: 'Structured Data Cabling', desc: 'High-quality Cat6/Cat6A/Cat7 copper cabling, patch panel terminations, and Fluke network certification testing.' },
        { name: 'Optical Fiber Cabling & Splicing', desc: 'Single-mode & multi-mode high-speed fiber solutions delivering gigabit bandwidth for campus & industrial networks.' },
        { name: 'Core Network Infrastructure', desc: 'Design and configuration of enterprise routers, managed PoE switches, and Wi-Fi 6 wireless access points.' },
        { name: 'Server Rack & Patch Panels', desc: 'Neat cable dressing, server rack cabinet assemblies, smart PDU power management, and labeling.' }
      ]
    },
    cloud: {
      title: 'Cloud Monitoring & Managed Infrastructure Services',
      tag: '24/7 CLOUD SURVEILLANCE',
      icon: Cloud,
      color: 'text-violet-400',
      description: 'Cloud-based monitoring platforms and managed IT services delivering 24/7 real-time health visibility, proactive alert triggers, and reduced internal IT overhead.',
      features: [
        { name: 'Real-Time Health Monitoring', desc: 'Continuous telemetry on camera uptime, access door states, bandwidth utilization, and storage capacity.' },
        { name: 'Proactive Alert Management', desc: 'Immediate incident notifications sent to security heads via WhatsApp and SMS to minimize downtime.' },
        { name: 'Managed IT Operations', desc: 'Dedicated remote support reducing technical burden on your internal team with routine patches and backups.' },
        { name: 'Secure Multi-Site Access', desc: 'Role-based remote access for authorized management personnel with complete encrypted audit trails.' }
      ]
    },
    amc: {
      title: 'Annual Maintenance Contracts (AMC) & Technical Support',
      tag: 'SLA UPTIME ASSURANCE',
      icon: Wrench,
      color: 'text-amber-400',
      description: 'Comprehensive Annual Maintenance Contracts ensuring optimal hardware uptime, scheduled preventive servicing, and priority on-site technician dispatch across Kerala.',
      features: [
        { name: 'Scheduled Preventive Servicing', desc: 'Monthly/quarterly camera lens cleaning, cable impedance testing, power supply checkups, and firmware updates.' },
        { name: 'Priority Rapid On-Site Dispatch', desc: 'Guaranteed 2 to 4-hour SLA response for critical security outages in Kollam, Trivandrum, Kochi, and Kerala.' },
        { name: 'Standby Equipment Support', desc: 'Immediate temporary replacement cameras, DVRs, routers, and power supplies during repair cycles.' },
        { name: '24×7 Helpdesk Hotline', desc: 'Direct access to senior hardware and network engineers via phone (+91 85939 44144) and ticketing portal.' }
      ]
    }
  };

  const currentService = services[activeTab];
  const CurrentIcon = currentService.icon;

  return (
    <section id="hardware" className="relative py-24 sm:py-32 bg-brand-900 bg-dot-matrix overflow-hidden border-b border-cyan-500/20">
      
      {/* Background Luminescence */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ELECTRONIC SECURITY & IT INFRASTRUCTURE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            CCTV, Access Control & <span className="text-gradient-cyan">IT Infrastructure AMC</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            From single-office installations to multi-campus industrial fiber deployments — we provide end-to-end planning, certified installation, cloud managed services, and 24/7 AMC across <strong className="text-white">Kollam, Trivandrum, Kochi, and all 14 districts of Kerala</strong>.
          </p>
        </div>

        {/* 5-Tab Service Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'cctv', label: 'CCTV & VMS', icon: Camera },
            { id: 'access', label: 'Access Control & Biometrics', icon: Fingerprint },
            { id: 'cabling', label: 'Structured Cabling & Fiber', icon: Network },
            { id: 'cloud', label: 'Cloud Monitoring & Managed', icon: Cloud },
            { id: 'amc', label: '24/7 Hardware AMC Support', icon: Wrench },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold flex items-center gap-2.5 transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-sapphire-600 text-brand-950 shadow-glow-cyan scale-105'
                    : 'bg-brand-850/90 border border-cyan-500/20 text-slate-300 hover:text-cyan-glow hover:border-cyan-500/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="luxe-card-static rounded-3xl p-6 sm:p-10 border border-cyan-500/40 mb-16 shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-cyan-glow text-brand-950 font-bold shadow-glow-cyan">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold bg-cyan-500/20 text-cyan-glow border border-cyan-500/30 uppercase">
                    {currentService.tag}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {currentService.description}
              </p>

              {/* 4 Detailed Feature Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-brand-950/80 border border-cyan-500/20 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-white font-mono">
                      <CheckCircle2 className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                      <span>{feat.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed pl-6">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-primary px-8 py-4 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 shadow-glow-cyan"
                >
                  <span>Schedule Free On-Site Site Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEstimator}
                  className="btn-luxe-secondary px-6 py-4 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
                >
                  <span>Estimate AMC / Installation Cost</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Specifications HUD */}
            <div className="lg:col-span-5 bg-brand-950 rounded-2xl p-6 border border-cyan-500/30 space-y-4 font-mono text-xs shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-slate-200 font-bold">
                  <Building2 className="w-4 h-4 text-cyan-glow" />
                  <span>KERALA ON-SITE DEPLOYMENT METRICS</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  ACTIVE NETWORK
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between p-3 rounded-xl bg-brand-900 border border-white/5">
                  <span className="text-slate-400">On-Site Dispatch Speed:</span>
                  <span className="text-cyan-glow font-bold">&lt;2 Hours in Kollam / &lt;4h Kerala</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-brand-900 border border-white/5">
                  <span className="text-slate-400">Hardware Warranty:</span>
                  <span className="text-emerald-400 font-bold">Up to 3-Year Direct OEM</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-brand-900 border border-white/5">
                  <span className="text-slate-400">Supported Brands:</span>
                  <span className="text-white font-bold">Hikvision, Dahua, Honeywell, CP Plus</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-brand-900 border border-white/5">
                  <span className="text-slate-400">Remote Helpdesk:</span>
                  <span className="text-amber-400 font-bold">24×7 Hotline (+91 85939 44144)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-brand-900 to-brand-850 border border-emerald-500/30 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <div className="text-[11px] text-slate-300">
                  <strong className="text-white font-bold">Zero-Worry Infrastructure:</strong> All CCTV, biometric, optical fiber, and network systems are backed by scheduled maintenance checklists and emergency engineer callouts.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Summary Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="luxe-card p-6 rounded-2xl">
            <Camera className="w-8 h-8 text-cyan-glow mb-4" />
            <h4 className="font-display font-bold text-lg text-white mb-2">4K UHD & IP Cameras</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              High-resolution IP dome, bullet, and PTZ cameras with smart IR night vision and optical zoom for crisp 24/7 surveillance.
            </p>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <Fingerprint className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="font-display font-bold text-lg text-white mb-2">Biometrics & Access Control</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Facial recognition, fingerprint scanners, turnstiles, and door interlocks integrated with automated payroll & attendance software.
            </p>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <Network className="w-8 h-8 text-sapphire-400 mb-4" />
            <h4 className="font-display font-bold text-lg text-white mb-2">Structured Fiber Cabling</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Certified Cat6/Cat7 LAN cabling, high-speed optical fiber fusion splicing, and enterprise rack patch panel terminations.
            </p>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <Wrench className="w-8 h-8 text-amber-400 mb-4" />
            <h4 className="font-display font-bold text-lg text-white mb-2">Comprehensive AMC Support</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Preventive maintenance visits, rapid breakdown troubleshooting, standby replacement hardware, and 24/7 technical hotline.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
