import React, { useState, useEffect } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  Lock,
  RotateCw,
  Camera,
  Globe,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface KryptonVisionCloudModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KryptonVisionCloudModal: React.FC<KryptonVisionCloudModalProps> = ({
  isOpen,
  onClose
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadTimeout, setLoadTimeout] = useState(false);

  const demoUrl = "http://3.7.216.169";

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setLoadTimeout(false);
      // Auto-dismiss loading screen after 3.5s so user is never stuck
      const timer = setTimeout(() => {
        setIsLoading(false);
        setLoadTimeout(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, iframeKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in zoom-in-95 duration-200">

      {/* Modal Window Container */}
      <div className={`relative w-full bg-brand-900 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,240,255,0.35)] flex flex-col transition-all duration-300 ${
        isFullscreen ? 'h-full max-w-full rounded-none' : 'h-[92vh] max-w-7xl'
      }`}>

        {/* Cockpit Header Bar */}
        <div className="bg-brand-950 px-4 py-3 border-b border-cyan-500/30 flex items-center justify-between flex-shrink-0 font-mono text-xs select-none gap-2">

          {/* Left: Window Dots & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer hover:opacity-100 transition-opacity"
                onClick={onClose}
                title="Close"
              />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span
                className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title="Toggle Fullscreen"
              />
            </div>

            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-cyan-glow animate-pulse" />
              <span className="font-bold text-white tracking-wide truncate">
                KRYPTONVISION<span className="text-cyan-glow">™</span> AI CLOUD COMMAND
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Lock className="w-2.5 h-2.5" />
                <span>LIVE EMBEDDED CONSOLE</span>
              </span>
            </div>
          </div>

          {/* Center Address Pill */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1 rounded-full bg-brand-900 border border-cyan-500/30 text-slate-300 text-[11px]">
            <Globe className="w-3 h-3 text-cyan-glow animate-pulse" />
            <span className="text-white font-bold">https://kryptonlogic.com</span>
            <span className="text-cyan-accent">/kryptonvision/live-portal</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-glow hover:text-white border border-cyan-500/40 text-xs font-semibold transition-all"
              title="Open direct live connection in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Direct Link</span>
            </a>

            <button
              onClick={() => { setIsLoading(true); setIframeKey(k => k + 1); }}
              className="p-1.5 rounded-lg bg-brand-850 hover:bg-brand-800 text-slate-300 hover:text-cyan-glow transition-colors border border-white/5"
              title="Reload Portal"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg bg-brand-850 hover:bg-brand-800 text-slate-300 hover:text-cyan-glow transition-colors border border-white/5"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-400 hover:text-white transition-colors border border-rose-500/30"
              title="Close Portal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Interactive Live Gateway Command Hub */}
        <div className="relative flex-grow bg-brand-950 overflow-hidden flex items-center justify-center p-4 sm:p-8">

          {/* Background Ambient Glow & Grid Matrix */}
          <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          {/* Command Gateway Card */}
          <div className="relative z-10 max-w-xl w-full p-8 sm:p-10 rounded-3xl bg-brand-900/95 border border-cyan-500/40 shadow-[0_0_80px_rgba(0,240,255,0.3)] flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-glow shadow-glow-cyan">
                <Camera className="w-10 h-10 animate-pulse" />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-brand-950 animate-ping" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-brand-950" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>LIVE MEDIA RELAY GATEWAY ONLINE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                KryptonVision<span className="text-cyan-glow">™</span> AI Cloud Command
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Connect to the live video surveillance cockpit, real-time AI computer vision streams, and multi-branch edge discovery portal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md">
              <a
                href={demoUrl}
                className="w-full btn-luxe-primary py-4 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan group"
              >
                <span>Launch Live Portal</span>
                <ExternalLink className="w-4 h-4 text-brand-950 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-brand-850 hover:bg-brand-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-mono whitespace-nowrap flex items-center justify-center gap-2 transition-all"
                title="Open in new window"
              >
                <span>New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-glow" />
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Lock className="w-3.5 h-3.5" />
                <span>Secure Edge Relay Node</span>
              </span>
              <span>Sub-50ms WebRTC</span>
            </div>

          </div>

        </div>

        {/* Bottom Status Footer */}
        <div className="bg-brand-950 px-4 py-2 border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 select-none gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Gateway Node: Operational (Sub-50ms WebRTC)</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Session: KL-SEC-ENC-7749</span>
          </div>

          <div className="text-cyan-glow font-bold">
            KryptonLogic Solutions • Live Embedded Session
          </div>
        </div>

      </div>

    </div>
  );
};
