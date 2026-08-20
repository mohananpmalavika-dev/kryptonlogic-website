import React from 'react';
import { 
  Building2, 
  Rocket, 
  Hospital, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: 'South India Retail Chain (85 Outlets)',
      category: 'KryptonVision™ AI Surveillance',
      icon: ShoppingBag,
      problem: 'Struggling with decentralized CCTV footage and frequent inventory shrinkage across 85 branches.',
      solution: 'Deployed KryptonVision edge media gateways with automated intrusion alerts and centralized cloud command cockpit.',
      metrics: ['74% Reduction in Stock Loss', '100% Centralized Stream Visibility', '<50ms Multi-Branch Live Feeds']
    },
    {
      title: 'D2C Quick Commerce Startup',
      category: 'Startup MVP Launchpad',
      icon: Rocket,
      problem: 'Founder needed a production-ready mobile app & hyper-local order routing system built in under 5 weeks.',
      solution: 'Engineered full-stack React Native app, microservice dispatch API, and live rider GPS tracking with Razorpay integration.',
      metrics: ['Launched in 28 Days', '120,000+ App Orders in Month 1', '99.98% Checkout Success Rate']
    },
    {
      title: 'Multi-Specialty Healthcare Hospital',
      category: 'CCTV & Hardware AMC',
      icon: Hospital,
      problem: 'Outdated analog cameras and unorganized cabling causing frequent server lab outages in Kollam facility.',
      solution: 'Installed 320 4K IP cameras, structured Cat6 & fiber backbone, and established a 24/7 hardware AMC SLA.',
      metrics: ['Zero Hardware Outages in 12 Months', '320 IP Cameras Synced', 'Under 1-Hour Engineer Response']
    }
  ];

  return (
    <section className="relative py-24 bg-krypton-950 cyber-grid overflow-hidden border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PROVEN ENTERPRISE IMPACT</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Real-World Impact & <span className="text-gradient-cyan">Client Success Stories</span>
          </h2>

          <p className="text-sm sm:text-base text-silver-300 font-light">
            How KryptonLogic drives tangible ROI through intelligent software, hardware reliability, and AI video intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-8 rounded-3xl border border-cyan-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-glow border border-cyan-500/30 uppercase">
                      {c.category}
                    </span>
                    <Icon className="w-5 h-5 text-cyan-accent" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3">{c.title}</h3>
                  
                  <div className="space-y-3 mb-6 text-xs text-silver-300 font-light leading-relaxed">
                    <p><strong className="text-silver-100 font-mono">Challenge:</strong> {c.problem}</p>
                    <p><strong className="text-cyan-glow font-mono">Solution:</strong> {c.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-silver-400/10 space-y-2">
                  <div className="text-[10px] font-mono text-cyan-accent uppercase font-bold">Key Results:</div>
                  {c.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
