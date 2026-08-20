import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'kryptonvision',
    budget: 'mid',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-brand-950 bg-grid-cyber overflow-hidden border-t border-cyan-500/20">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-glow text-xs font-mono font-bold mb-4 shadow-pill-glow">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Start Your Project with <span className="text-gradient-cyan">KryptonLogic</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Whether you need a KryptonVision™ enterprise demo, startup MVP development, CCTV & hardware deployment in Kollam, or custom software — our team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxe-card p-8 rounded-3xl space-y-6">
              <h3 className="font-display font-bold text-2xl text-white">
                Direct Communication Channels
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Reach our technical team directly. We respond to all business and technical inquiries in under 2 hours.
              </p>

              <div className="space-y-4 font-mono text-xs">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/918593944144?text=Hi%20KryptonLogic%2C%20I%20am%20interested%20in%20your%20services" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white group-hover:text-emerald-300 flex items-center gap-1">
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                    <div className="text-[11px] text-emerald-400">Instant direct engineer connection</div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+918593944144"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-950 border border-cyan-500/20 text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors"
                >
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-glow">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Call Kollam Office</div>
                    <div className="text-[11px] text-cyan-accent">+91 85939 44144</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:contact@kryptonlogic.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-brand-950 border border-cyan-500/20 text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors"
                >
                  <div className="p-2 rounded-xl bg-sapphire-500/10 text-sapphire-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Email Us</div>
                    <div className="text-[11px] text-sapphire-400">contact@kryptonlogic.com</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-950 border border-cyan-500/20 text-slate-200">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Kollam Headquarters</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      KryptonLogic IT Solutions, Kollam Tech Corridor, Kollam, Kerala - 691001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 rounded-3xl luxe-card-static p-8 sm:p-10 border border-cyan-500/30">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                  <span className="text-sm font-mono font-bold text-cyan-glow uppercase">
                    Submit Project Inquiry / Request Demo
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">● FAST RESPONSE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Primary Service Required *</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({...formData, serviceInterest: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white text-xs font-mono focus:border-cyan-glow focus:outline-none"
                    >
                      <option value="kryptonvision">KryptonVision™ AI Surveillance Demo</option>
                      <option value="startup">Startup MVP Launchpad</option>
                      <option value="cctv_hardware">CCTV Installation & Hardware AMC (Kerala)</option>
                      <option value="software">Custom Enterprise Software / SaaS</option>
                      <option value="ecommerce">Website & E-Commerce Platform</option>
                      <option value="migration">Data Migration & Cloud Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white text-xs font-mono focus:border-cyan-glow focus:outline-none"
                    >
                      <option value="starter">₹25,000 - ₹50,000 (Small/Starter)</option>
                      <option value="mid">₹50,000 - ₹2,00,000 (Growth/Standard)</option>
                      <option value="enterprise">₹2,00,000+ (Enterprise Multi-Branch)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5">Project Scope / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements, branch locations, camera count, or software features..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-brand-950 border border-cyan-500/20 text-white placeholder:text-slate-500 text-xs font-mono focus:border-cyan-glow focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-luxe-primary py-4 rounded-xl text-xs uppercase font-extrabold flex items-center justify-center gap-2 shadow-glow-cyan"
                >
                  <Send className="w-4 h-4 text-brand-950" />
                  <span>Send Project Request to Engineers</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior technical architect in Kollam has received your submission and will contact you via WhatsApp/Phone at <strong className="text-cyan-glow">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-luxe-secondary px-6 py-2.5 rounded-xl text-xs font-mono font-bold mt-4"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
