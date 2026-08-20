import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Cpu, 
  Camera, 
  Rocket, 
  Globe, 
  Layers, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Building2,
  HeartHandshake,
  ChevronDown,
  Lock,
  Network,
  Fingerprint,
  Receipt,
  Users,
  HardDrive
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleTranslatorBar } from './GoogleTranslatorBar';

interface NavbarProps {
  onOpenEstimate: () => void;
  onOpenDemo: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEstimate,
  onOpenDemo,
  onOpenContact
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useLanguage();
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-950/95 backdrop-blur-2xl border-b border-cyan-500/20 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.85)]' 
        : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between">
          
          {/* Company Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-glow via-sapphire-600 to-violet-600 group-hover:shadow-glow-cyan transition-all duration-300">
              <img 
                src="/kryptonlogic-logo.png" 
                alt="KryptonLogic" 
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white group-hover:text-cyan-glow transition-colors">
                  KRYPTON<span className="text-gradient-cyan">LOGIC</span>
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-cyan-accent uppercase font-semibold">
                Kollam • Kerala • IT & Security
              </span>
            </div>
          </a>

          {/* Clean, Readable Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5">
            
            {/* 1. Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('products')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'products' ? 'text-cyan-glow bg-white/10' : 'text-slate-200 hover:text-cyan-glow hover:bg-white/5'
                }`}
              >
                <span>{t('navProducts')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-cyan-glow' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-brand-950/98 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <a
                    href="#kryptonvision"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 flex items-start gap-3 transition-colors group mb-1.5"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-glow group-hover:scale-110 transition-transform">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-glow flex items-center gap-1.5">
                        <span>KryptonVision™ AI</span>
                        <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 bg-cyan-500/20 text-cyan-glow rounded-full border border-cyan-500/40">FLAGSHIP</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                        AI Video Surveillance & Multi-Branch Live Cockpit.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#enterprise-suite"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-sapphire-500/10 text-sapphire-400 group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-glow">
                        Enterprise AI Suite
                      </div>
                      <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                        CRM, GST Billing, Stock Inventory & Service Desk.
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'solutions' ? 'text-cyan-glow bg-white/10' : 'text-slate-200 hover:text-cyan-glow hover:bg-white/5'
                }`}
              >
                <span>{t('navSolutions')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-cyan-glow' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-brand-950/98 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 grid grid-cols-1 gap-1">
                  <a
                    href="#hardware"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-white/5 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-glow">
                        CCTV Installation & Biometrics
                      </div>
                      <p className="text-[11px] text-slate-300 font-light mt-0.5">
                        4K Cameras, Facial Access Control & 24/7 AMC across Kerala.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#hardware"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-white/5 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-sapphire-500/10 text-sapphire-400">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-glow">
                        Structured Cabling & Fiber Optics
                      </div>
                      <p className="text-[11px] text-slate-300 font-light mt-0.5">
                        Cat6/Cat7 LAN Networks, Fiber Splicing & Server Racks.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#startups"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-white/5 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-glow">
                        Startup MVP Launchpad
                      </div>
                      <p className="text-[11px] text-slate-300 font-light mt-0.5">
                        Rapid Zero-to-One Product & Cloud SaaS Engineering.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#services"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-xl hover:bg-white/5 flex items-start gap-3 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-accent">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-glow">
                        Custom Software & E-Commerce
                      </div>
                      <p className="text-[11px] text-slate-300 font-light mt-0.5">
                        Modern Business Websites, Online Stores & Billing Systems.
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Industries */}
            <a 
              href="#industries" 
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-cyan-glow hover:bg-white/5 transition-colors"
            >
              {t('navIndustries')}
            </a>

            {/* 4. Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'company' ? 'text-cyan-glow bg-white/10' : 'text-slate-200 hover:text-cyan-glow hover:bg-white/5'
                }`}
              >
                <span>{t('navCompany')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180 text-cyan-glow' : 'text-slate-400'}`} />
              </button>

              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-brand-950/98 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-2.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <a
                    href="#why-us"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-white/5 flex items-center gap-3 text-xs text-slate-200 hover:text-cyan-glow"
                  >
                    <HeartHandshake className="w-4 h-4 text-rose-400" />
                    <span>Why Choose KryptonLogic</span>
                  </a>
                  <a
                    href="#kollam-hq"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-white/5 flex items-center gap-3 text-xs text-slate-200 hover:text-cyan-glow"
                  >
                    <MapPin className="w-4 h-4 text-cyan-glow" />
                    <span>Kollam Headquarters & Lab</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveDropdown(null)}
                    className="p-2.5 rounded-xl hover:bg-white/5 flex items-center gap-3 text-xs text-slate-200 hover:text-cyan-glow"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Direct Call: +91 85939 44144</span>
                  </a>
                </div>
              )}
            </div>

            {/* 5. Estimator */}
            <a 
              href="#estimator" 
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-cyan-glow hover:bg-white/5 transition-colors"
            >
              {t('navEstimator')}
            </a>

            {/* 6. Contact */}
            <a 
              href="#contact" 
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-cyan-glow hover:bg-white/5 transition-colors"
            >
              {t('navContact')}
            </a>
          </nav>

          {/* Clean Action CTAs & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <GoogleTranslatorBar />

            <button 
              onClick={onOpenDemo}
              className="btn-luxe-secondary px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 text-cyan-glow shadow-pill-glow group"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
              <span>{t('liveSimulator')}</span>
              <span className="text-xs group-hover:scale-110 transition-transform">⚡</span>
            </button>

            <button 
              onClick={onOpenEstimate}
              className="btn-luxe-primary px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-extrabold flex items-center gap-1.5 shadow-glow-cyan"
            >
              <span>{t('getQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <GoogleTranslatorBar />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-brand-900 border border-cyan-500/30 text-cyan-glow"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[68px] p-4 bg-brand-950/98 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-sapphire-500/20 border border-cyan-500/40 flex items-center justify-between text-cyan-glow font-bold shadow-pill-glow text-left"
            >
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-glow" />
                <span>KryptonVision™ Live Cloud Demo</span>
              </div>
              <span className="text-xs font-mono">LAUNCH ⚡</span>
            </button>

            <a 
              href="#kryptonvision" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <Camera className="w-4 h-4 text-cyan-glow" />
              <span>KryptonVision™ AI Video Surveillance</span>
            </a>

            <a 
              href="#enterprise-suite" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <Cpu className="w-4 h-4 text-cyan-accent" />
              <span>Enterprise AI Suite (CRM, GST, Inventory)</span>
            </a>

            <a 
              href="#hardware" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>CCTV, Access Control & 24/7 AMC</span>
            </a>

            <a 
              href="#startups" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <Rocket className="w-4 h-4 text-sapphire-400" />
              <span>Startup MVP Launchpad</span>
            </a>

            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Industries We Serve (8 Verticals)</span>
            </a>

            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span>Why Choose KryptonLogic</span>
            </a>

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-white/5 text-slate-100 flex items-center gap-3 text-xs"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Direct Phone: +91 85939 44144</span>
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenEstimate(); }}
                className="w-full btn-luxe-primary py-3 rounded-xl text-xs uppercase tracking-wider font-bold"
              >
                {t('getQuote')}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
