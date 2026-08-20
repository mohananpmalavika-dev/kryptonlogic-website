import React from 'react';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Camera, 
  Rocket, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-brand-950 text-slate-400 border-t border-cyan-500/20 pt-16 pb-12 font-sans bg-grid-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Headquarters */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-br from-cyan-glow to-sapphire-600 shadow-glow-cyan">
                <img 
                  src="/kryptonlogic-logo.png" 
                  alt="KryptonLogic" 
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-wider">
                  KRYPTON<span className="text-gradient-cyan">LOGIC</span>
                </span>
                <div className="text-[10px] font-mono text-cyan-accent uppercase tracking-widest">
                  INTELLIGENT SOLUTIONS. LIMITLESS IMPACT.
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm">
              Pan-India & Kerala provider of integrated IT infrastructure, electronic security, cloud monitoring, and AI-powered enterprise software. Delivering dependable solutions across Banking, Healthcare, Education, Manufacturing, Corporate Offices & Retail.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-glow flex-shrink-0" />
                <span>Headquarters: Kollam, Kerala, India - 691001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+918593944144" className="hover:text-white transition-colors">
                  Direct Line: +91 85939 44144
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sapphire-400 flex-shrink-0" />
                <a href="mailto:info@kryptonlogic.com" className="hover:text-white transition-colors">
                  Email: info@kryptonlogic.com / support@kryptonlogic.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions & Security */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-glow" />
              <span>Security & Infrastructure</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenDemo} className="text-cyan-glow font-medium hover:underline flex items-center gap-1 text-left"><span>KryptonVision™ Live Cloud Demo</span><span className="text-[10px]">⚡</span></button></li>
              <li><a href="#kryptonvision" className="hover:text-cyan-glow transition-colors">KryptonVision™ AI Surveillance</a></li>
              <li><a href="#hardware" className="hover:text-cyan-glow transition-colors">CCTV & Video Management (VMS)</a></li>
              <li><a href="#hardware" className="hover:text-cyan-glow transition-colors">Access Control & Biometrics</a></li>
              <li><a href="#hardware" className="hover:text-cyan-glow transition-colors">Intrusion Alarms & BMS Link</a></li>
              <li><a href="#hardware" className="hover:text-cyan-glow transition-colors">Structured Cabling & Fiber Optics</a></li>
              <li><a href="#hardware" className="hover:text-cyan-glow transition-colors">24/7 AMC & Technical Support</a></li>
            </ul>
          </div>

          {/* Col 3: Enterprise AI Suite */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-sapphire-400" />
              <span>Enterprise AI Suite</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">CRM & Sales Pipelines</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">GST Billing & Accounting</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">Inventory & Warehouse ERP</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">Physical Security Command</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">Service Desk & SLA Dispatch</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">Project Milestone Billing</a></li>
              <li><a href="#enterprise-suite" className="hover:text-cyan-glow transition-colors">Executive BI Dashboards</a></li>
            </ul>
          </div>

          {/* Col 4: Industries & Startups */}
          <div>
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              <span>Startups & Industries</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#startups" className="hover:text-cyan-glow transition-colors">Startup MVP Launchpad</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Banking & NBFC Security</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Healthcare & Hospital IT</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Manufacturing & Warehousing</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Corporate Office Solutions</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Education & Smart Campus</a></li>
              <li><a href="#industries" className="hover:text-cyan-glow transition-colors">Retail & Logistics Chains</a></li>
            </ul>
          </div>

        </div>

        {/* Operational Status Strip */}
        <div className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-bold">Kollam Lab & Kerala Operations: 100% OPERATIONAL</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">24×7 Remote Monitoring Active</span>
          </div>

          <div className="text-slate-400">
            © {new Date().getFullYear()} KryptonLogic Solutions. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
