import React, { useState } from 'react';
import { 
  Calculator, 
  Rocket, 
  Cpu, 
  Camera, 
  Globe, 
  Database, 
  Sparkles, 
  Clock, 
  FileSpreadsheet
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EstimatorProps {
  onDirectQuote: (details: any) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onDirectQuote }) => {
  const [serviceType, setServiceType] = useState<string>('startup');
  const [scale, setScale] = useState<string>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['ai', 'payments']);
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const services = [
    { id: 'startup', name: 'Startup MVP Suite', basePrice: 45000, baseWeeks: 3, icon: Rocket },
    { id: 'kryptonvision', name: 'KryptonVision™ AI Setup', basePrice: 35000, baseWeeks: 2, icon: Camera },
    { id: 'cctv_hardware', name: 'CCTV & Hardware AMC', basePrice: 20000, baseWeeks: 1, icon: Cpu },
    { id: 'ecommerce', name: 'Website & E-Commerce', basePrice: 25000, baseWeeks: 2, icon: Globe },
    { id: 'custom_software', name: 'Custom ERP / SaaS', basePrice: 55000, baseWeeks: 4, icon: Database },
  ];

  const scales = [
    { id: 'mvp', name: 'Starter / MVP', multiplier: 1.0, weeksAdd: 0, desc: 'Ideal for early validation or small setups' },
    { id: 'growth', name: 'Growth / Mid-Market', multiplier: 1.6, weeksAdd: 1.5, desc: 'Built for scaling startups & businesses' },
    { id: 'enterprise', name: 'Enterprise Multi-Branch', multiplier: 2.8, weeksAdd: 3, desc: 'High concurrency & 24/7 SLA' },
  ];

  const addonsList = [
    { id: 'ai', name: 'AI Vision / ML Automation', cost: 15000, weeks: 1 },
    { id: 'mobile', name: 'iOS & Android Mobile App', cost: 25000, weeks: 2 },
    { id: 'payments', name: 'Payment Gateway & WhatsApp Sync', cost: 8000, weeks: 0.5 },
    { id: 'hardware_amc', name: '1-Year 24/7 Hardware AMC SLA', cost: 18000, weeks: 0 },
    { id: 'cloud_ha', name: 'Multi-Region Cloud Architecture', cost: 12000, weeks: 0.5 },
    { id: 'migration', name: 'Legacy Data Migration & ETL', cost: 10000, weeks: 0.5 },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentService = services.find(s => s.id === serviceType) || services[0];
  const currentScale = scales.find(s => s.id === scale) || scales[1];

  const addonsTotalCost = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find(a => a.id === id);
    return acc + (item ? item.cost : 0);
  }, 0);

  const addonsTotalWeeks = selectedAddons.reduce((acc, id) => {
    const item = addonsList.find(a => a.id === id);
    return acc + (item ? item.weeks : 0);
  }, 0);

  const rawTotal = Math.round((currentService.basePrice * currentScale.multiplier) + addonsTotalCost);
  const minEstimate = Math.round(rawTotal * 0.9);
  const maxEstimate = Math.round(rawTotal * 1.15);
  const totalWeeks = Math.ceil(currentService.baseWeeks + currentScale.weeksAdd + addonsTotalWeeks);

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
    onDirectQuote({
      service: currentService.name,
      scale: currentScale.name,
      addons: selectedAddons,
      minEstimate,
      maxEstimate,
      timeline: `${totalWeeks} Weeks`,
      name: contactName,
      phone: contactPhone
    });
  };

  return (
    <section id="estimator" className="relative py-24 sm:py-32 bg-brand-900 bg-dot-matrix overflow-hidden border-t border-cyan-500/20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT ESTIMATOR</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Interactive Project & Service <span className="text-gradient-cyan">Cost Estimator</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Select your service type, company scale, and add-on modules to generate an instant ballpark timeline and budget range.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Steps */}
          <div className="lg:col-span-7 space-y-8 bg-brand-950 p-6 sm:p-8 rounded-3xl border border-cyan-500/20">
            
            {/* Step 1 */}
            <div>
              <div className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">1</span>
                <span>Select Primary Service Category</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {services.map((srv) => {
                  const Icon = srv.icon;
                  const active = serviceType === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setServiceType(srv.id)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                        active
                          ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-glow-cyan font-semibold'
                          : 'bg-brand-900 border-cyan-500/10 text-slate-300 hover:border-cyan-500/30 hover:text-white'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${active ? 'bg-cyan-glow text-brand-950' : 'bg-brand-800 text-cyan-accent'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono">{srv.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">2</span>
                <span>Select Project / Deployment Scale</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scales.map((sc) => {
                  const active = scale === sc.id;
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setScale(sc.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        active
                          ? 'bg-sapphire-600/30 border-sapphire-400 text-white shadow-glow-blue'
                          : 'bg-brand-900 border-cyan-500/10 text-slate-300 hover:border-cyan-500/30'
                      }`}
                    >
                      <div className="text-xs font-bold font-mono text-white mb-1">{sc.name}</div>
                      <div className="text-[10px] text-slate-400 leading-tight">{sc.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-xs font-mono font-bold text-cyan-glow uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[10px]">3</span>
                <span>Select Architecture & Feature Add-ons</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const selected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selected
                          ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-glow font-bold'
                          : 'bg-brand-900 border-cyan-500/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold ${
                          selected ? 'bg-cyan-glow text-brand-950' : 'border border-slate-600'
                        }`}>
                          {selected && '✓'}
                        </div>
                        <span className="text-xs font-mono">{addon.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary */}
          <div className="lg:col-span-5 rounded-3xl luxe-card-static p-6 sm:p-8 border border-cyan-500/30 sticky top-28 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-2 text-cyan-glow font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Real-Time Estimate</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                ESTIMATE READY
              </span>
            </div>

            <div className="space-y-4 bg-brand-950 p-5 rounded-2xl border border-cyan-500/20">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">Estimated Investment Range:</span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient-cyan">
                  ₹{minEstimate.toLocaleString()} - ₹{maxEstimate.toLocaleString()}
                </div>
                <span className="text-[10px] font-mono text-slate-400">*Ballpark estimate in INR (₹). Customized on scope review.</span>
              </div>

              <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Target Delivery Timeline:</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">{totalWeeks} - {totalWeeks + 1} Weeks</span>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleProposalSubmit} className="space-y-3">
                <div className="text-xs font-mono text-slate-300 font-semibold">
                  Lock in this estimate & receive a formal proposal:
                </div>
                
                <input
                  type="text"
                  required
                  placeholder="Your Name / Company Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none"
                />

                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number / Phone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full btn-luxe-primary py-3.5 rounded-xl text-xs uppercase font-extrabold flex items-center justify-center gap-2 shadow-glow-cyan"
                >
                  <FileSpreadsheet className="w-4 h-4 text-brand-950" />
                  <span>Receive Full Breakdown & Proposal</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-brand-950 flex items-center justify-center font-bold mx-auto">
                  ✓
                </div>
                <div className="text-xs font-mono font-bold text-emerald-400">ESTIMATE SUBMITTED!</div>
                <p className="text-[11px] text-slate-200">
                  Our Kollam engineering lead will reach out to <strong>{contactPhone || 'you'}</strong> with a detailed statement of work within 2 business hours.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
