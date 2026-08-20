import React from 'react';
import { 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Layers, 
  Terminal, 
  Workflow,
  Radio,
  Sparkles,
  Server,
  Network
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const hardwarePartners = [
    { name: 'Hikvision', desc: 'Global leader in innovative CCTV & security optics' },
    { name: 'Dahua Technology', desc: 'Leading provider of IP surveillance & AI cameras' },
    { name: 'Honeywell', desc: 'Enterprise industrial safety, access & BMS automation' },
    { name: 'CP Plus', desc: 'Trusted security & camera brand across India' },
    { name: 'Trueview', desc: 'Hi-tech CCTV, interactive displays & thermal vision' },
    { name: 'D-Link', desc: 'Enterprise networking, switching & Wi-Fi solutions' },
    { name: 'Smart-i', desc: 'Access control & biometric time attendance systems' },
    { name: 'Vyapar', desc: 'GST billing, accounting & inventory software' },
  ];

  const cloudAndSoftwareStack = [
    { category: 'AI & Computer Vision', tech: ['PyTorch', 'ONVIF v2.6', 'WebRTC Sub-50ms', 'YOLOv8', 'DeepStream', 'TensorRT'] },
    { category: 'Enterprise Backend', tech: ['Go (Golang)', 'Node.js / Express', 'Python FastAPI', 'Java Spring', 'gRPC / GraphQL'] },
    { category: 'Frontend & Mobile', tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Next.js', 'React Native (iOS/Android)'] },
    { category: 'Cloud, DevOps & Data', tech: ['AWS Cloud', 'Google Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Razorpay'] },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden border-b border-cyan-500/20">
      
      {/* Background Luminescence */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-cyan-glow/10 rounded-full blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Radio className="w-3.5 h-3.5" />
            <span>OEM PARTNERS & TECHNOLOGY ECOSYSTEM</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Authorized Hardware Partners & <span className="text-gradient-cyan">Engineering Stack</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            We partner with global security OEMs and build with world-class open-source technologies to ensure maximum uptime, rock-solid security, and future-proof scalability.
          </p>
        </div>

        {/* 1. Hardware Technology Partners Grid (from PDF page 8) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-cyan-glow" />
            <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
              Authorized Electronic Security & Hardware Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hardwarePartners.map((partner, idx) => (
              <div key={idx} className="luxe-card p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all">
                <div className="text-base font-display font-extrabold text-white mb-1.5 flex items-center justify-between">
                  <span>{partner.name}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                </div>
                <p className="text-xs text-slate-400 font-mono font-light leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Software & Cloud Engineering Stack */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-sapphire-400" />
            <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
              Software, AI & Enterprise Cloud Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudAndSoftwareStack.map((stack, idx) => (
              <div key={idx} className="luxe-card p-6 rounded-2xl">
                <h4 className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.tech.map((item, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 rounded-lg bg-brand-900 border border-white/5 text-xs text-slate-200 font-mono font-medium hover:border-cyan-500/30 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
