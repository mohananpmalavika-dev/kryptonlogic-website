import React from 'react';
import { 
  Shield, 
  Cpu, 
  Rocket, 
  Camera, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Zap, 
  Eye, 
  Activity,
  Server,
  Lock,
  ChevronRight,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SpatialCard3D } from './SpatialCard3D';

interface HeroProps {
  onExploreKryptonVision: () => void;
  onExploreSolutions: () => void;
  onOpenEstimate: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreKryptonVision,
  onExploreSolutions,
  onOpenEstimate,
  onOpenDemo
}) => {
  const { t, is4DActive } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-cyber bg-aurora">
      
      {/* 4D Temporal Radial Auroras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-cyan-glow/20 via-sapphire-600/15 to-violet-600/15 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-1/2 left-4 w-[450px] h-[450px] bg-cyan-glow/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-4 w-[500px] h-[500px] bg-sapphire-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-900/90 border border-cyan-500/40 text-cyan-glow text-xs font-mono font-bold shadow-pill-glow">
            <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
            <span>{t('heroBadge')}</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-cyan-accent" />
              Kollam, Kerala
            </span>
          </div>

          <button 
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sapphire-900/50 border border-sapphire-400/40 text-cyan-accent text-xs font-mono hover:border-cyan-glow hover:text-white transition-all shadow-pill-glow group"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-glow group-hover:rotate-12 transition-transform" />
            <span>KryptonVision™ Flagship Platform</span>
            <span className="text-[10px] text-cyan-glow font-bold">DEMO ⚡</span>
          </button>
        </div>

        {/* Main Headline & Tighter Focused Messaging */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
            INTELLIGENT SOLUTIONS.<br />
            <span className="text-gradient-iridescent">LIMITLESS IMPACT.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {t('heroSub')}
          </p>

          {/* Focused Enterprise CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={onExploreKryptonVision}
              className="btn-luxe-primary px-8 py-4 rounded-2xl text-sm uppercase tracking-wider font-extrabold flex items-center gap-3 shadow-glow-cyan group"
            >
              <Eye className="w-5 h-5 text-brand-950 group-hover:scale-110 transition-transform" />
              <span>{t('exploreKryptonVision')}</span>
              <ArrowRight className="w-4 h-4 text-brand-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="btn-luxe-secondary px-7 py-4 rounded-2xl text-sm font-semibold tracking-wide flex items-center gap-2.5 hover:shadow-glow-blue"
            >
              <Camera className="w-4 h-4 text-cyan-glow" />
              <span>{t('requestDemo')}</span>
            </button>

            <button
              onClick={onExploreSolutions}
              className="px-6 py-4 rounded-2xl text-sm font-semibold tracking-wide bg-brand-850/80 border border-slate-700/60 text-slate-200 hover:border-cyan-500/40 hover:text-white transition-all flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-sapphire-400" />
              <span>{t('viewSolutions')}</span>
            </button>
          </div>

          {/* 4 Focused Core Offerings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto mb-16">
            <SpatialCard3D intensity={12} className="p-4 rounded-2xl luxe-card flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-glow border border-cyan-500/20">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">KryptonVision™ AI</div>
                <div className="text-[10px] text-cyan-accent font-mono">Flagship Video Surveillance</div>
              </div>
            </SpatialCard3D>

            <SpatialCard3D intensity={12} className="p-4 rounded-2xl luxe-card flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-sapphire-500/10 text-sapphire-400 border border-sapphire-500/20">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Enterprise AI Suite</div>
                <div className="text-[10px] text-sapphire-300 font-mono">CRM, GST & Operations</div>
              </div>
            </SpatialCard3D>

            <SpatialCard3D intensity={12} className="p-4 rounded-2xl luxe-card flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">CCTV & Hardware AMC</div>
                <div className="text-[10px] text-emerald-300 font-mono">Biometrics & Kerala Support</div>
              </div>
            </SpatialCard3D>

            <SpatialCard3D intensity={12} className="p-4 rounded-2xl luxe-card flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Software & Startups</div>
                <div className="text-[10px] text-amber-300 font-mono">Custom Cloud Engineering</div>
              </div>
            </SpatialCard3D>
          </div>

        </div>

        {/* Executive KPI Ticker Strip in 3D Spatial Frame */}
        <SpatialCard3D intensity={8} className="relative rounded-3xl luxe-card-static p-6 sm:p-8 max-w-6xl mx-auto overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-extrabold text-cyan-glow mb-1">
                <Camera className="w-6 h-6 text-cyan-glow" />
                <span>50,000+</span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase">{t('kpiCameras')}</span>
              <span className="text-[10px] text-slate-400 mt-1">Multi-Branch Video Streams</span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-extrabold text-white mb-1">
                <Server className="w-6 h-6 text-sapphire-400" />
                <span>150+</span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase">{t('kpiStartups')}</span>
              <span className="text-[10px] text-slate-400 mt-1">Enterprise Deployments</span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 mb-1">
                <Activity className="w-6 h-6 text-emerald-400" />
                <span>99.99%</span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase">{t('kpiUptime')}</span>
              <span className="text-[10px] text-slate-400 mt-1">24/7 Monitoring & AMC</span>
            </div>

            <div className="flex flex-col items-center text-center pt-4 md:pt-0">
              <div className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-extrabold text-cyan-accent mb-1">
                <Zap className="w-6 h-6 text-cyan-accent" />
                <span>&lt;45 ms</span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase">{t('kpiLatency')}</span>
              <span className="text-[10px] text-slate-400 mt-1">Sub-Second WebRTC Relay</span>
            </div>

          </div>
        </SpatialCard3D>

        {/* Enterprise Brand Trust Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 text-center">
          <span className="text-[11px] font-mono text-cyan-accent uppercase tracking-widest block mb-4 font-semibold">
            Authorized Hardware Partners & Global Cloud Infrastructure
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs font-mono font-semibold">
            <span className="hover:text-cyan-glow transition-colors">HIKVISION</span>
            <span className="hover:text-cyan-glow transition-colors">DAHUA</span>
            <span className="hover:text-cyan-glow transition-colors">HONEYWELL</span>
            <span className="hover:text-cyan-glow transition-colors">CP PLUS</span>
            <span className="hover:text-cyan-glow transition-colors">TRUEVIEW</span>
            <span className="hover:text-cyan-glow transition-colors">D-LINK</span>
            <span className="hover:text-cyan-glow transition-colors">SMART-I</span>
            <span className="hover:text-cyan-glow transition-colors">VYAPAR</span>
            <span className="hover:text-cyan-glow transition-colors">AWS CLOUD</span>
            <span className="hover:text-cyan-glow transition-colors">GOOGLE CLOUD</span>
          </div>
        </div>

      </div>
    </section>
  );
};
