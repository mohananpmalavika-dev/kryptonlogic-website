import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Camera, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  Radio, 
  Server, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  Car, 
  UserCheck, 
  Building2, 
  Lock, 
  ShieldCheck, 
  Scan,
  X,
  ExternalLink
} from 'lucide-react';

interface KryptonVisionShowcaseProps {
  onOpenConsultation: () => void;
  onOpenCloudDemo?: () => void;
}

export const KryptonVisionShowcase: React.FC<KryptonVisionShowcaseProps> = ({ onOpenConsultation, onOpenCloudDemo }) => {
  const [selectedBranch, setSelectedBranch] = useState<'kollam' | 'kochi' | 'trivandrum'>('kollam');
  const [aiMode, setAiMode] = useState<'person' | 'vehicle' | 'intrusion' | 'heatmap'>('person');
  const [simulatedIncident, setSimulatedIncident] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'discovery' | 'edge-ai' | 'command-center' | 'incidents'>('overview');
  const [fps, setFps] = useState(29.8);
  const [latency, setLatency] = useState(38);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Number((29.4 + Math.random() * 0.8).toFixed(1)));
      setLatency(Math.floor(34 + Math.random() * 8));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const branchData = {
    kollam: {
      name: 'Branch 01: KryptonLogic Kollam Tech Enclave',
      location: 'Kollam, Kerala',
      camerasTotal: 32,
      gateway: 'KL-EDGE-GW-01 (Online)',
      brandDetected: 'Hikvision & Axis ONVIF v2.6',
      subtext: 'Main R&D Studio & High-Security Server Lab'
    },
    kochi: {
      name: 'Branch 02: South Kerala Logistics & Warehousing Hub',
      location: 'Kochi Hub, Kerala',
      camerasTotal: 128,
      gateway: 'KL-EDGE-GW-02 (Online)',
      brandDetected: 'Dahua & CP Plus Industrial PTZ',
      subtext: 'Automated Loading Docks & High-Bay Warehouse'
    },
    trivandrum: {
      name: 'Branch 03: Smart Commercial Plaza & Retail Outlet',
      location: 'Trivandrum, Kerala',
      camerasTotal: 64,
      gateway: 'KL-EDGE-GW-03 (Online)',
      brandDetected: 'Hanwha & Uniview AI Dome',
      subtext: 'Customer Checkouts & Footfall Traffic Heatmaps'
    }
  };

  const handleSimulateIncident = () => {
    const newIncident = {
      id: `INC-KL-${Math.floor(10000 + Math.random() * 90000)}`,
      timestamp: new Date().toLocaleTimeString(),
      branch: branchData[selectedBranch].name,
      location: branchData[selectedBranch].location,
      type: aiMode === 'intrusion' ? 'CRITICAL PERIMETER BREACH' : aiMode === 'vehicle' ? 'UNAUTHORIZED VEHICLE ACCESS' : 'RESTRICTED ZONE DWELL ANOMALY',
      confidence: '99.4%',
      target: aiMode === 'vehicle' ? 'Vehicle [KL-01-CZ-8821]' : 'Person ID #8492 (Non-Staff)',
      status: 'INSTANT ALARM DISPATCHED',
      channels: ['WhatsApp Alert Sent (+91 85939 44144)', 'SMS Dispatched to Security Head', 'Control Room Siren Triggered', '4K Clip Saved to Edge SSD']
    };
    setSimulatedIncident(newIncident);
  };

  return (
    <section id="kryptonvision" className="relative py-24 sm:py-32 bg-brand-900 bg-dot-matrix overflow-hidden border-t border-b border-cyan-500/20">
      
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-glow/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-sapphire-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-sapphire-500/20 border border-cyan-500/40 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Scan className="w-3.5 h-3.5 animate-pulse" />
            <span>KRYPTONLOGIC FLAGSHIP PLATFORM</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            KryptonVision<span className="text-cyan-glow">™</span><br />
            <span className="text-gradient-cyan">Autonomous AI Video Surveillance & Command Center</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            An enterprise-grade, distributed Cloud & Edge Video Surveillance Management System (VSMS). Built for multi-branch organizations, smart facilities, and mission-critical operations with <strong className="text-white font-medium">zero-touch camera discovery</strong>, <strong className="text-cyan-glow font-medium">real-time edge AI analytics</strong>, and <strong className="text-cyan-accent font-medium">sub-50ms WebRTC low-latency streaming</strong>.
          </p>

          <button 
            onClick={onOpenCloudDemo}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-sapphire-600/20 to-violet-600/20 border border-cyan-500/50 text-cyan-glow hover:text-white hover:border-cyan-glow transition-all shadow-glow-cyan text-xs font-mono font-bold tracking-wide"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-glow animate-ping" />
            <span>Launch Live KryptonVision™ Cloud Gateway ⚡</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'overview', label: 'Platform Cockpit', icon: Layers },
            { id: 'discovery', label: 'Zero-Touch Discovery', icon: Radio },
            { id: 'edge-ai', label: 'Edge Neural AI', icon: Cpu },
            { id: 'command-center', label: 'Multi-Branch Hub', icon: Building2 },
            { id: 'incidents', label: 'Incident Dispatch Hub', icon: ShieldAlert },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-glow text-brand-950 shadow-glow-cyan font-bold scale-105'
                    : 'bg-brand-850/90 border border-cyan-500/20 text-slate-300 hover:text-cyan-glow hover:border-cyan-500/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl luxe-card-static p-4 sm:p-8 border border-cyan-500/40 mb-16 shadow-[0_25px_70px_-15px_rgba(0,240,255,0.2)]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-3.5 h-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-white tracking-wide">
                    KRYPTOVISION™ LIVE COMMAND COCKPIT
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded font-bold">
                    EDGE ONLINE
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono flex items-center gap-2 mt-0.5">
                  <span>Active Feed: <span className="text-cyan-glow">{branchData[selectedBranch].name}</span></span>
                  <span>•</span>
                  <button onClick={onOpenCloudDemo} className="text-cyan-accent hover:text-white underline text-[11px]">
                    Open Live Cloud Gateway ⚡
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-brand-950 rounded-xl border border-cyan-500/20">
              <button
                onClick={() => setSelectedBranch('kollam')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedBranch === 'kollam'
                    ? 'bg-cyan-500/20 text-cyan-glow border border-cyan-500/40 font-bold shadow-pill-glow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                📍 Kollam HQ
              </button>
              <button
                onClick={() => setSelectedBranch('kochi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedBranch === 'kochi'
                    ? 'bg-cyan-500/20 text-cyan-glow border border-cyan-500/40 font-bold shadow-pill-glow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                📍 Kochi Hub
              </button>
              <button
                onClick={() => setSelectedBranch('trivandrum')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedBranch === 'trivandrum'
                    ? 'bg-cyan-500/20 text-cyan-glow border border-cyan-500/40 font-bold shadow-pill-glow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                📍 Trivandrum Plaza
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
            
            <div className="lg:col-span-8 relative aspect-video bg-brand-950 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl group">
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#060D1A] via-[#09152B] to-[#040812] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-cyber opacity-25" />
                
                <div className="absolute inset-x-0 h-0.5 bg-cyan-glow/50 shadow-[0_0_15px_#00F0FF] animate-scanline pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                  <div className="w-[85%] h-[75%] border border-dashed border-cyan-500/40 rounded-lg flex items-center justify-center">
                    <div className="w-[60%] h-[50%] border border-white/20 rounded flex items-center justify-center">
                      <span className="font-mono text-xs text-cyan-glow/50 tracking-widest">[ 4K ULTRA HD OPTIC FEED ]</span>
                    </div>
                  </div>
                </div>

                {aiMode === 'person' && (
                  <>
                    <div className="absolute top-[28%] left-[22%] w-[24%] h-[48%] border-2 border-cyan-glow bg-cyan-500/10 rounded p-1 animate-pulse transition-all">
                      <div className="bg-cyan-glow text-brand-950 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-tight inline-flex items-center gap-1 rounded-sm">
                        <UserCheck className="w-2.5 h-2.5" />
                        <span>PERSON #084 • 98.6%</span>
                      </div>
                      <div className="mt-1 text-[8px] font-mono text-cyan-glow bg-brand-950/90 px-1 py-0.5 rounded inline-block">
                        Dwell: 04m 12s • Verified Staff
                      </div>
                    </div>

                    <div className="absolute top-[35%] right-[25%] w-[20%] h-[42%] border-2 border-emerald-400 bg-emerald-500/10 rounded p-1 transition-all">
                      <div className="bg-emerald-400 text-brand-950 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-tight inline-flex items-center gap-1 rounded-sm">
                        <UserCheck className="w-2.5 h-2.5" />
                        <span>PERSON #091 • 99.1%</span>
                      </div>
                      <div className="mt-1 text-[8px] font-mono text-emerald-400 bg-brand-950/90 px-1 py-0.5 rounded inline-block">
                        Zone: Reception Lobby
                      </div>
                    </div>
                  </>
                )}

                {aiMode === 'vehicle' && (
                  <div className="absolute top-[38%] left-[28%] w-[44%] h-[38%] border-2 border-amber-400 bg-amber-500/10 rounded p-1 transition-all">
                    <div className="bg-amber-400 text-brand-950 px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-tight inline-flex items-center gap-1 rounded-sm">
                      <Car className="w-2.5 h-2.5" />
                      <span>ANPR: KL-01-CZ-8821 • 99.8%</span>
                    </div>
                    <div className="mt-1 flex flex-col gap-0.5 text-[8px] font-mono text-amber-300 bg-brand-950/90 p-1 rounded">
                      <span>Vehicle: Logistics Fleet Van</span>
                      <span>Speed: 18 km/h • Gate Auto-Authorized</span>
                    </div>
                  </div>
                )}

                {aiMode === 'intrusion' && (
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-0.5 bg-rose-500 shadow-[0_0_15px_#F43F5E] flex items-center justify-between px-4 relative">
                      <span className="bg-rose-600 text-white text-[9px] font-mono px-2 py-0.5 rounded font-bold">
                        TRIPWIRE ZONE: SERVER LAB VAULT
                      </span>
                      <span className="bg-rose-950 text-rose-300 border border-rose-500 text-[9px] font-mono px-2 py-0.5 rounded animate-ping">
                        ARMED • ZERO TOLERANCE
                      </span>
                    </div>
                  </div>
                )}

                {aiMode === 'heatmap' && (
                  <div className="absolute inset-0 bg-gradient-radial from-rose-500/20 via-amber-500/10 to-transparent flex items-center justify-center">
                    <div className="text-center bg-brand-950/90 p-3 rounded-xl border border-amber-500/30">
                      <Flame className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />
                      <div className="text-xs font-mono text-amber-300 font-bold">HIGH FOOTFALL DENSITY AREA</div>
                      <div className="text-[10px] font-mono text-slate-400">Congestion: 74% • Dwell Avg: 6.2 mins</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono pointer-events-none">
                <div className="bg-brand-950/90 border border-cyan-500/30 text-cyan-glow px-2.5 py-1 rounded-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="font-bold">REC • LIVE</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-white">{new Date().toLocaleTimeString()}</span>
                </div>

                <div className="bg-brand-950/90 border border-cyan-500/30 text-slate-200 px-2.5 py-1 rounded-md flex items-center gap-3">
                  <span>FPS: <strong className="text-cyan-glow">{fps}</strong></span>
                  <span>RES: <strong className="text-white">4K UHD</strong></span>
                  <span>LATENCY: <strong className="text-emerald-400">{latency}ms</strong></span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-brand-950/90 backdrop-blur-md border border-cyan-500/30 p-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Camera className="w-4 h-4 text-cyan-glow" />
                  <span className="hidden sm:inline font-medium">{branchData[selectedBranch].brandDetected}</span>
                  <span className="text-cyan-glow">• {branchData[selectedBranch].gateway}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSimulateIncident}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>SIMULATE SECURITY ALARM</span>
                  </button>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              
              <div className="bg-brand-950 p-4 rounded-2xl border border-cyan-500/20">
                <div className="text-xs font-mono text-cyan-glow font-bold uppercase mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Edge AI Detection Mode</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setAiMode('person')}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      aiMode === 'person'
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-glow font-bold shadow-pill-glow'
                        : 'bg-brand-900 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <UserCheck className="w-4 h-4" />
                      <span className="text-xs font-mono">Person & Face</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Dwell time & staff ID</div>
                  </button>

                  <button
                    onClick={() => setAiMode('vehicle')}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      aiMode === 'vehicle'
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-glow font-bold shadow-pill-glow'
                        : 'bg-brand-900 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Car className="w-4 h-4" />
                      <span className="text-xs font-mono">Vehicle ANPR</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Plate & speed scanner</div>
                  </button>

                  <button
                    onClick={() => setAiMode('intrusion')}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      aiMode === 'intrusion'
                        ? 'bg-rose-500/20 border-rose-500 text-rose-400 font-bold shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                        : 'bg-brand-900 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-4 h-4" />
                      <span className="text-xs font-mono">Intrusion Grid</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Perimeter tripwire</div>
                  </button>

                  <button
                    onClick={() => setAiMode('heatmap')}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      aiMode === 'heatmap'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-brand-900 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Flame className="w-4 h-4" />
                      <span className="text-xs font-mono">Traffic Heatmap</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Footfall congestion</div>
                  </button>
                </div>
              </div>

              <div className="bg-brand-950 p-4 rounded-2xl border border-cyan-500/20">
                <div className="text-xs font-mono text-cyan-glow font-bold uppercase mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Real-Time Edge Telemetry</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">100% HEALTHY</span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between p-2 rounded-lg bg-brand-900 border border-white/5">
                    <span className="text-slate-400">Stream Relay:</span>
                    <span className="text-cyan-glow font-bold">WebRTC Sub-Second</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-brand-900 border border-white/5">
                    <span className="text-slate-400">Bandwidth Saved:</span>
                    <span className="text-emerald-400 font-bold">78.4% (HEVC H.265)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-brand-900 border border-white/5">
                    <span className="text-slate-400">Local Edge Storage:</span>
                    <span className="text-white font-bold">NVMe SSD (30-Day Buffer)</span>
                  </div>
                  <div className="flex justify-between p-2 rounded-lg bg-brand-900 border border-white/5">
                    <span className="text-slate-400">Cloud Tunnel:</span>
                    <span className="text-cyan-accent font-bold">Zero-Port Forwarding VPN</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenCloudDemo}
                className="w-full btn-luxe-primary py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan group"
              >
                <Eye className="w-4 h-4 text-brand-950 group-hover:scale-110 transition-transform" />
                <span>Access Live Cloud Demo Portal ⚡</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full btn-luxe-secondary py-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-cyan-glow" />
                <span>Deploy KryptonVision for Your Enterprise</span>
              </button>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="luxe-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-glow mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Zero-Touch Camera Auto-Discovery</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Discovers ONVIF and RTSP cameras across local subnets in seconds. Detects brands (Hikvision, Dahua, Axis, CP Plus, Hanwha), auto-configures credentials, and maps streams with zero manual port forwarding.
            </p>
            <ul className="space-y-1.5 text-[11px] font-mono text-cyan-accent">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Bulk Credential Import</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Automated Brand Detection</span>
              </li>
            </ul>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-sapphire-500/10 border border-sapphire-500/30 flex items-center justify-center text-sapphire-400 mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Distributed Edge Media Gateways</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Lightweight edge agents transcode and stream video locally to save WAN bandwidth. Secure outbound WebSocket/WebRTC tunnels ensure high-security feeds reach the cloud command center with &lt;50ms latency.
            </p>
            <ul className="space-y-1.5 text-[11px] font-mono text-sapphire-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Zero Port-Forwarding Security</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Adaptive Multi-Bitrate HLS</span>
              </li>
            </ul>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Unified Multi-Branch Cockpit</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Manage 10 to 1,000+ branch locations from a single pane of glass. Role-based tenant permissions, synchronized branch onboarding wizards, and aggregated health telemetry across all camera endpoints.
            </p>
            <ul className="space-y-1.5 text-[11px] font-mono text-emerald-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Multi-Tenant Access Control</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Global Health Monitoring</span>
              </li>
            </ul>
          </div>

          <div className="luxe-card p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Forensic Incident Engine</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Instant multi-channel dispatch via WhatsApp, SMS, Webhook, and Control Room sirens upon security breach. Cryptographically watermarked snapshot audit trails and tamper-proof forensic video evidence.
            </p>
            <ul className="space-y-1.5 text-[11px] font-mono text-rose-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>WhatsApp & SMS Escalation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                <span>Forensic Snapshot Audit Trail</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {simulatedIncident && (
        <div className="fixed inset-0 z-50 bg-brand-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-brand-900 border border-rose-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(244,63,94,0.3)]">
            <button
              onClick={() => setSimulatedIncident(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-brand-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-rose-500/20 border border-rose-500 rounded-2xl text-rose-400">
                <ShieldAlert className="w-7 h-7 animate-bounce" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold bg-rose-500 text-brand-950 px-2 py-0.5 rounded">
                  {simulatedIncident.status}
                </span>
                <h3 className="font-display font-extrabold text-xl text-white mt-1">
                  {simulatedIncident.type}
                </h3>
              </div>
            </div>

            <div className="space-y-3 bg-brand-950 p-4 rounded-2xl border border-rose-500/20 font-mono text-xs mb-6">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Incident Ticket ID:</span>
                <span className="text-cyan-glow font-bold">{simulatedIncident.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Branch & Location:</span>
                <span className="text-white">{simulatedIncident.branch}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Detected Target:</span>
                <span className="text-rose-400 font-bold">{simulatedIncident.target}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">AI Confidence:</span>
                <span className="text-emerald-400 font-bold">{simulatedIncident.confidence}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-mono text-slate-300 font-semibold mb-2">Automated Escalation Channels Executed:</div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                {simulatedIncident.channels.map((ch: string, idx: number) => (
                  <div key={idx} className="p-2 rounded-lg bg-brand-850 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSimulatedIncident(null)}
                className="flex-1 btn-luxe-primary py-3 rounded-xl text-xs uppercase font-bold"
              >
                Acknowledge Alert
              </button>
              <button
                onClick={() => { setSimulatedIncident(null); onOpenConsultation(); }}
                className="btn-luxe-secondary px-4 py-3 rounded-xl text-xs font-mono font-bold"
              >
                Contact Engineers
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
