import React, { useState } from 'react';
import { 
  Monitor, 
  Shield, 
  Lock, 
  Network, 
  Terminal, 
  Layers, 
  Server, 
  Laptop, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Share2, 
  Key, 
  HardDrive, 
  FileText, 
  Activity, 
  Zap, 
  Cpu, 
  ExternalLink,
  Users,
  Building2,
  ChevronRight,
  ShieldCheck,
  Radio,
  Power,
  Sliders,
  Check
} from 'lucide-react';
import { SpatialCard3D } from './SpatialCard3D';

interface KryptonConnectivitySuiteProps {
  onOpenContact: () => void;
  onOpenEstimator: () => void;
}

export const KryptonConnectivitySuite: React.FC<KryptonConnectivitySuiteProps> = ({
  onOpenContact,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'suite' | 'remote-desktop' | 'vpn'>('suite');
  const [simulatedMonitor, setSimulatedMonitor] = useState<number>(1);
  const [simulatedTunnelStatus, setSimulatedTunnelStatus] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      title: 'Secure Connection',
      subtitle: 'Encrypted Perimeter Tunnel',
      icon: Network,
      color: 'from-cyan-500 to-blue-600',
      badge: 'LAYER 1: NETWORK',
      desc: 'Krypton VPN establishes an authenticated, military-grade encrypted tunnel across public networks, shielding packets between remote users, branch offices, and corporate data centers.'
    },
    {
      title: 'Authorized Access',
      subtitle: 'Zero-Trust Identity & RBAC',
      icon: Key,
      color: 'from-blue-600 to-indigo-600',
      badge: 'LAYER 2: AUTHENTICATION',
      desc: 'Granular role-based access control, cryptographic device certificates, and session authorization ensure only vetted personnel and hardware can access internal resources.'
    },
    {
      title: 'Remote Control',
      subtitle: 'Low-Latency System Ops',
      icon: Monitor,
      color: 'from-violet-600 to-purple-600',
      badge: 'LAYER 3: ENDPOINT CONTROL',
      desc: 'Krypton Remote Desktop streams high-frame-rate, sub-15ms interactive desktop sessions with full keyboard/mouse control, multi-monitor switching, file transfers, and unattended access.'
    },
    {
      title: 'Centralized Monitoring',
      subtitle: 'Audit Trail & Telemetry',
      icon: Activity,
      color: 'from-emerald-500 to-teal-600',
      badge: 'LAYER 4: COMPLIANCE & AUDIT',
      desc: 'Real-time telemetry, session video replay, cryptographic audit logs, and unified connection dashboards give IT teams complete visibility over all active sessions.'
    }
  ];

  const remoteDesktopFeatures = [
    'Secure encrypted remote desktop access',
    'Fast, low-latency screen sharing',
    'Remote keyboard & mouse control',
    'Multi-monitor support',
    'File transfer between connected devices',
    'Clipboard synchronization',
    'Remote reboot & reconnect',
    'Unattended remote access',
    'Device and session management',
    'Role-based access control',
    'Session logs & audit trail',
    'Secure device registration',
    'Centralized management dashboard',
    'Designed for enterprise and multi-location deployments'
  ];

  const vpnFeatures = [
    'Secure encrypted VPN tunnel',
    'Windows, Linux, macOS & Android support',
    'Remote-access VPN',
    'Site-to-site connectivity',
    'Branch-to-head-office connectivity',
    'Secure access to internal applications',
    'User & device authentication',
    'Centralized VPN management',
    'Connection monitoring',
    'Access policies and permissions',
    'Device registration and management',
    'Connection and security logs',
    'Scalable architecture for multiple branches and users'
  ];

  const remoteDesktopIdeals = [
    'IT support teams',
    'Branch offices',
    'Remote employees',
    'Data centers',
    'Service providers',
    'Banking/NBFC environments',
    'Multi-computer organizations'
  ];

  const vpnIdeals = [
    'Businesses with remote employees',
    'Multi-branch organizations',
    'IT teams',
    'Cloud environments',
    'Banking/NBFC networks',
    'Private infrastructure access'
  ];

  return (
    <section id="connectivity-suite" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden border-b border-cyan-500/20">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Anchor targets for direct links */}
      <div id="remote-desktop" className="absolute -top-24" />
      <div id="krypton-vpn" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-glow" />
            <span>ENTERPRISE SECURE CONNECTIVITY SUITE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Krypton <span className="text-gradient-cyan">Secure Connectivity Suite</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            <strong className="text-white">Krypton Remote Desktop</strong> and <strong className="text-white">Krypton VPN</strong> work together to provide organizations with secure remote access and protected network connectivity. Krypton VPN securely connects users or devices to the private network, while Krypton Remote Desktop provides authorized access and granular control of remote systems.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-brand-900/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('suite')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'suite'
                  ? 'bg-gradient-to-r from-cyan-glow to-blue-500 text-brand-950 font-extrabold shadow-glow-cyan'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Full Connectivity Suite</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-950/30 text-brand-950 font-mono font-bold hidden sm:inline">DUAL POWER</span>
            </button>

            <button
              onClick={() => setActiveTab('remote-desktop')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'remote-desktop'
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-extrabold shadow-glow-blue'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Krypton Remote Desktop</span>
            </button>

            <button
              onClick={() => setActiveTab('vpn')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'vpn'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-brand-950 font-extrabold shadow-pill-glow'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>Krypton VPN</span>
            </button>
          </div>
        </div>

        {/* 4-Stage Architectural Pipeline Strip */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold text-cyan-accent tracking-widest uppercase">
              Unified Security Pipeline Architecture
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              End-to-End Enterprise Flow: From Public Net to Remote Host
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-gradient-to-b from-brand-850 to-brand-900 border-cyan-glow shadow-glow-cyan -translate-y-1'
                      : 'bg-brand-900/60 border-white/10 hover:border-cyan-500/40 hover:bg-brand-900/90'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-glow border border-cyan-500/20">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {step.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{step.title}</h4>
                      <p className="text-[11px] text-cyan-accent font-mono">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-3">
                    {step.desc}
                  </p>

                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-5 h-5 rounded-full bg-brand-950 border border-cyan-500/40 flex items-center justify-center text-cyan-glow text-[10px]">
                        →
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Workflow Sequence Summary Banner */}
          <div className="mt-4 p-3 rounded-2xl bg-brand-900/50 border border-cyan-500/20 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-300 text-center">
            <span className="text-white font-bold">SYNERGY WORKFLOW:</span>
            <span className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-glow border border-cyan-500/30">Secure Connection</span>
            <span className="text-slate-500">→</span>
            <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">Authorized Access</span>
            <span className="text-slate-500">→</span>
            <span className="px-2 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30">Remote Control</span>
            <span className="text-slate-500">→</span>
            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Centralized Monitoring</span>
          </div>
        </div>

        {/* TAB 1: ALL-IN-ONE SUITE VIEW (DUAL PRODUCT CARDS) */}
        {activeTab === 'suite' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* PRODUCT CARD 1: KRYPTON REMOTE DESKTOP */}
            <div className="luxe-card-static rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl group hover:border-cyan-glow transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-bl-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-glow-blue">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/40">
                      FLAGSHIP DESKTOP
                    </span>
                    <span className="px-2 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10">
                      WIN • LIN • MAC
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                    Secure Remote Access. Anywhere. Anytime.
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    Krypton Remote Desktop
                  </h3>
                  <p className="text-xs text-cyan-accent font-mono mt-1 font-semibold">
                    Tagline: “Your Systems. Your Control. Anywhere.”
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light mt-3 mb-6">
                  Krypton Remote Desktop is a secure remote access and support solution designed for businesses, IT teams, and distributed organizations. It enables authorized users to securely access and manage remote Windows, Linux, and macOS systems from virtually anywhere.
                </p>

                {/* Simulated Desktop Preview Mini Cockpit */}
                <div className="p-4 rounded-2xl bg-brand-950 border border-cyan-500/20 font-mono text-xs mb-6 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-slate-300 ml-1.5 font-bold">KRD-SESSION // HQ-SERVER-04</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      60 FPS • 12ms LATENCY
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-brand-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Controls Active:</div>
                      <div className="text-white font-semibold flex items-center gap-1 mt-0.5">
                        <Terminal className="w-3 h-3 text-cyan-glow" /> Mouse + Keyboard Sync
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Displays Attached:</div>
                      <div className="text-cyan-glow font-semibold flex items-center gap-1 mt-0.5">
                        <Monitor className="w-3 h-3" /> Multi-Monitor 4K (2 Screens)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                    <span>Audit Mode: Full Session Recording</span>
                    <span className="text-emerald-400 font-bold">Unattended Host: READY</span>
                  </div>
                </div>

                {/* Key Features Preview (First 6) */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider block">
                    Key Features Highlight:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {remoteDesktopFeatures.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Strip */}
                <div className="p-3 rounded-xl bg-brand-900/70 border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Ideal For:
                  </span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    IT support teams, branch offices, remote employees, data centers, service providers, banking/NBFC environments, and organizations managing multiple computers across locations.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('remote-desktop')}
                  className="btn-luxe-primary px-5 py-2.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2"
                >
                  <span>Explore Remote Desktop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-secondary px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-200 hover:text-white"
                >
                  Request Proof of Concept
                </button>
              </div>
            </div>

            {/* PRODUCT CARD 2: KRYPTON VPN */}
            <div className="luxe-card-static rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl group hover:border-cyan-glow transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-bl-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-brand-950 font-bold shadow-glow-cyan">
                    <Network className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      SECURE TUNNEL
                    </span>
                    <span className="px-2 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10">
                      WIN • LIN • MAC • ANDROID
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                    Private. Secure. Connected.
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                    Krypton VPN
                  </h3>
                  <p className="text-xs text-cyan-accent font-mono mt-1 font-semibold">
                    Tagline: “Connect Securely. Work Without Boundaries.”
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light mt-3 mb-6">
                  Krypton VPN is a secure connectivity platform designed to protect communication between users, offices, servers, and business applications. It creates encrypted tunnels across public networks, allowing organizations to securely connect employees, branches, cloud infrastructure, and internal services.
                </p>

                {/* Simulated VPN Network Status Cockpit */}
                <div className="p-4 rounded-2xl bg-brand-950 border border-emerald-500/20 font-mono text-xs mb-6 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] text-white font-bold ml-1.5">KVPN-GATEWAY :: KOLLAM HQ &lt;—&gt; CLOUD</span>
                    </div>
                    <span className="text-[10px] text-cyan-glow bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      AES-256-GCM ENCRYPTED
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-brand-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Topology Mode:</div>
                      <div className="text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                        <Layers className="w-3 h-3" /> Site-to-Site + Remote Access
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-900 border border-white/5">
                      <div className="text-slate-400 text-[10px]">Traffic Tunneling:</div>
                      <div className="text-cyan-glow font-semibold flex items-center gap-1 mt-0.5">
                        <Lock className="w-3 h-3" /> Zero-Leak DNS & Kill-Switch
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                    <span>Multi-Branch Mesh: Scalable Architecture</span>
                    <span className="text-emerald-400 font-bold">State: CONNECTED</span>
                  </div>
                </div>

                {/* Key Features Preview (First 6) */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider block">
                    Key Features Highlight:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vpnFeatures.slice(0, 6).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Strip */}
                <div className="p-3 rounded-xl bg-brand-900/70 border border-white/5 mb-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1.5">
                    Ideal For:
                  </span>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Businesses with remote employees, multi-branch organizations, IT teams, cloud environments, banking/NBFC networks, and companies requiring secure access to private infrastructure.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('vpn')}
                  className="btn-luxe-primary px-5 py-2.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2"
                >
                  <span>Explore Krypton VPN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenContact}
                  className="btn-luxe-secondary px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-200 hover:text-white"
                >
                  Request VPN Consultation
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: DEDICATED KRYPTON REMOTE DESKTOP DEEP DIVE */}
        {activeTab === 'remote-desktop' && (
          <div className="luxe-card-static rounded-3xl p-6 sm:p-10 border border-violet-500/40 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Full Product Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-glow-blue">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold bg-violet-500/20 text-violet-300 border border-violet-500/40 uppercase">
                      SECURE REMOTE ACCESS. ANYWHERE. ANYTIME.
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mt-1">
                      Krypton Remote Desktop
                    </h3>
                    <p className="text-xs text-cyan-accent font-mono mt-1 font-semibold">
                      Your Systems. Your Control. Anywhere.
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Krypton Remote Desktop is a secure remote access and support solution designed for businesses, IT teams, and distributed organizations. It enables authorized users to securely access and manage remote Windows, Linux, and macOS systems from virtually anywhere.
                </p>

                {/* Operating Systems Support Pills */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs font-mono text-slate-400">Supported OS Platforms:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-cyan-500/30 text-white text-xs font-mono font-bold">
                    Windows
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-cyan-500/30 text-white text-xs font-mono font-bold">
                    Linux
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-cyan-500/30 text-white text-xs font-mono font-bold">
                    macOS
                  </span>
                </div>

                {/* All 14 Key Features */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-violet-400" />
                    <span>All 14 Enterprise Capabilities:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {remoteDesktopFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-brand-900/90 border border-violet-500/20 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-mono leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Target Groups */}
                <div className="p-4 rounded-2xl bg-brand-900/60 border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-glow" />
                    <span>Ideal For Organizations & Teams:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {remoteDesktopIdeals.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenContact}
                    className="btn-luxe-primary px-7 py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 shadow-glow-cyan"
                  >
                    <span>Request Remote Desktop Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenEstimator}
                    className="btn-luxe-secondary px-6 py-3.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-cyan-glow" />
                    <span>Calculate License & Setup Cost</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Remote Desktop Cockpit Mockup */}
              <div className="lg:col-span-5 bg-brand-950 rounded-2xl p-5 border border-violet-500/40 font-mono text-xs space-y-4 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-slate-300 font-bold ml-1">KRYPTON REMOTE HOST // PRO-DESK</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE CONNECTED
                  </span>
                </div>

                {/* Simulated Screen with Multi-Monitor Toggle */}
                <div className="relative rounded-xl overflow-hidden bg-brand-900 border border-white/10 p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Target Resolution:</span>
                    <span className="text-white font-bold">3840 × 2160 (4K UHD)</span>
                  </div>

                  {/* Multi-Monitor Simulator Switcher */}
                  <div className="p-2.5 rounded-xl bg-brand-950 border border-cyan-500/20 flex items-center justify-between">
                    <span className="text-[10px] text-slate-300">Multi-Monitor Mode:</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setSimulatedMonitor(1)}
                        className={`px-2 py-1 rounded text-[10px] font-bold ${
                          simulatedMonitor === 1 ? 'bg-cyan-glow text-brand-950' : 'bg-brand-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        Display 1 (Primary)
                      </button>
                      <button
                        onClick={() => setSimulatedMonitor(2)}
                        className={`px-2 py-1 rounded text-[10px] font-bold ${
                          simulatedMonitor === 2 ? 'bg-cyan-glow text-brand-950' : 'bg-brand-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        Display 2 (Auxiliary)
                      </button>
                    </div>
                  </div>

                  {/* Interactive Session Controls Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-brand-950/80 border border-white/5">
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-glow mx-auto mb-1" />
                      <span>Reboot & Reconnect</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-950/80 border border-white/5">
                      <HardDrive className="w-3.5 h-3.5 text-violet-400 mx-auto mb-1" />
                      <span>File Transfer (Bi-Dir)</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-950/80 border border-white/5">
                      <Share2 className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
                      <span>Clipboard Sync</span>
                    </div>
                  </div>
                </div>

                {/* Session Real-time Diagnostics */}
                <div className="space-y-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Stream Codec:</span>
                    <span className="text-cyan-glow font-bold">AV1 / H.265 Hardware Accelerated</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">End-to-End Latency:</span>
                    <span className="text-emerald-400 font-bold">&lt; 14 ms (Direct P2P UDP)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Host Security:</span>
                    <span className="text-white font-bold">Unattended Access Token + 2FA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Audit Logging:</span>
                    <span className="text-emerald-400 font-bold">Immutable Session Logs &amp; Replay</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-900 to-brand-850 border border-cyan-500/30 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-[11px] text-slate-300">
                    Deployable on-premise or cloud-hosted with zero vendor lock-in.
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: DEDICATED KRYPTON VPN DEEP DIVE */}
        {activeTab === 'vpn' && (
          <div className="luxe-card-static rounded-3xl p-6 sm:p-10 border border-emerald-500/40 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Full Product Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-brand-950 font-bold shadow-glow-cyan">
                    <Network className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 uppercase">
                      PRIVATE. SECURE. CONNECTED.
                    </span>
                    <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mt-1">
                      Krypton VPN
                    </h3>
                    <p className="text-xs text-cyan-accent font-mono mt-1 font-semibold">
                      Connect Securely. Work Without Boundaries.
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  Krypton VPN is a secure connectivity platform designed to protect communication between users, offices, servers, and business applications. It creates encrypted tunnels across public networks, allowing organizations to securely connect employees, branches, cloud infrastructure, and internal services.
                </p>

                {/* Operating Systems Support Pills */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="text-xs font-mono text-slate-400">Supported Client Platforms:</span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-emerald-500/30 text-white text-xs font-mono font-bold">
                    Windows
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-emerald-500/30 text-white text-xs font-mono font-bold">
                    Linux
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-emerald-500/30 text-white text-xs font-mono font-bold">
                    macOS
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-900 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    Android
                  </span>
                </div>

                {/* All 13 Key Features */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-emerald-400" />
                    <span>All 13 Enterprise Security Capabilities:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {vpnFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-brand-900/90 border border-emerald-500/20 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-mono leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Target Groups */}
                <div className="p-4 rounded-2xl bg-brand-900/60 border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span>Ideal For Enterprise & Network Deployments:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {vpnIdeals.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onOpenContact}
                    className="btn-luxe-primary px-7 py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center gap-2 shadow-glow-cyan"
                  >
                    <span>Request VPN Architecture Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onOpenEstimator}
                    className="btn-luxe-secondary px-6 py-3.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-cyan-glow" />
                    <span>Calculate Multi-Branch Setup Cost</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive VPN Topology & Gateway Cockpit */}
              <div className="lg:col-span-5 bg-brand-950 rounded-2xl p-5 border border-emerald-500/40 font-mono text-xs space-y-4 shadow-2xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-slate-300 font-bold ml-1">KVPN-CONSOLE // MESH CONTROL</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    GATEWAY ONLINE
                  </span>
                </div>

                {/* Simulated Topology Node Map */}
                <div className="p-4 rounded-xl bg-brand-900 border border-white/10 space-y-3">
                  <div className="text-center font-bold text-slate-300 text-xs mb-2">
                    Site-to-Site &amp; Branch Mesh Topology
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-lg bg-brand-950 border border-emerald-500/40">
                      <Building2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <div className="font-bold text-white">Kollam HQ</div>
                      <span className="text-[9px] text-emerald-400">Primary Core</span>
                    </div>

                    <div className="p-2 rounded-lg bg-brand-950 border border-cyan-500/40">
                      <Server className="w-4 h-4 text-cyan-glow mx-auto mb-1" />
                      <div className="font-bold text-white">Private Cloud</div>
                      <span className="text-[9px] text-cyan-glow">AWS / On-Prem</span>
                    </div>

                    <div className="p-2 rounded-lg bg-brand-950 border border-violet-500/40">
                      <Laptop className="w-4 h-4 text-violet-400 mx-auto mb-1" />
                      <div className="font-bold text-white">Branches &amp; WFH</div>
                      <span className="text-[9px] text-violet-400">Zero-Trust Clients</span>
                    </div>
                  </div>

                  {/* Tunnel Status Toggle Simulator */}
                  <div className="p-2.5 rounded-xl bg-brand-950 border border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-300">Encrypted Tunnel Status:</span>
                    <button
                      onClick={() => setSimulatedTunnelStatus(!simulatedTunnelStatus)}
                      className={`px-3 py-1 rounded text-[10px] font-bold flex items-center gap-1 transition-all ${
                        simulatedTunnelStatus 
                          ? 'bg-emerald-500 text-brand-950 shadow-pill-glow' 
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      <Power className="w-3 h-3" />
                      <span>{simulatedTunnelStatus ? 'CONNECTED (AES-256)' : 'DISCONNECTED'}</span>
                    </button>
                  </div>
                </div>

                {/* Diagnostics and Protocol Specs */}
                <div className="space-y-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Tunnel Protocol:</span>
                    <span className="text-emerald-400 font-bold">WireGuard / IPSec / OpenVPN</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Access Policies:</span>
                    <span className="text-cyan-glow font-bold">Zero-Trust Network Access (ZTNA)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Device Compliance:</span>
                    <span className="text-white font-bold">Cryptographic Device Registration</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-900 border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">Multi-Branch Mesh:</span>
                    <span className="text-emerald-400 font-bold">Automated Failover &amp; Load Balancing</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-br from-brand-900 to-brand-850 border border-emerald-500/30 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[11px] text-slate-300">
                    Compliant with RBI / Banking data transmission &amp; perimeter security mandates.
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
