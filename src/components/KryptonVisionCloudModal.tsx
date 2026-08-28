import React, { useState, useEffect } from 'react';
import {
  X,
  Maximize2,
  Minimize2,
  Lock,
  ShieldCheck,
  RotateCw,
  Camera,
  CheckCircle2,
  ExternalLink,
  Globe,
  Sparkles,
  ArrowUpRight,
  Shield,
  Activity,
  Copy,
  Check
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
  const [copied, setCopied] = useState(false);
  const [showDirectNotice, setShowDirectNotice] = useState(false);

  const demoUrl = "http://3.7.216.169";

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Modern browsers block HTTP iframe inside HTTPS. Show direct launcher guidance after short timeout
      const timer = setTimeout(() => {
        setShowDirectNotice(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowDirectNotice(false);
    }
  }, [isOpen, iframeKey]);

  const handleLaunchPortal = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(demoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                <span>256-BIT SECURE SESSION</span>
              </span>
            </div>
          </div>

          {/* Center Address Pill (Branded Masked URL) */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1 rounded-full bg-brand-900 border border-cyan-500/30 text-slate-300 text-[11px]">
            <Lock className="w-3 h-3 text-cyan-glow" />
            <span className="text-white font-bold">https://kryptonlogic.com</span>
            <span className="text-cyan-accent">/kryptonvision/cloud-portal</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleLaunchPortal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 via-sapphire-500 to-cyan-400 text-brand-950 font-extrabold text-xs shadow-glow-cyan hover:brightness-110 active:scale-95 transition-all"
              title="Launch Live Portal in dedicated browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Live Portal ⚡</span>
            </button>

            <button
              onClick={() => { setIsLoading(true); setIframeKey(k => k + 1); }}
              className="p-1.5 rounded-lg bg-brand-850 hover:bg-brand-800 text-slate-300 hover:text-cyan-glow transition-colors border border-white/5"
              title="Reload Session"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg bg-brand-850 hover:bg-brand-800 text-slate-300 hover:text-cyan-glow transition-colors border border-white/5 hidden sm:block"
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

        {/* Embedded Iframe Viewport & Direct Launcher Overlay */}
        <div className="relative flex-grow bg-brand-950 overflow-hidden flex flex-col items-center justify-center">

          {/* Fallback Direct Launch Card (Always accessible for guaranteed access) */}
          {showDirectNotice && (
            <div className="absolute inset-0 bg-brand-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
              <div className="max-w-xl w-full p-8 rounded-3xl bg-brand-900/90 border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] flex flex-col items-center space-y-6">
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-glow shadow-glow-cyan">
                  <Camera className="w-8 h-8 animate-pulse" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>LIVE MEDIA RELAY GATEWAY ONLINE</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white tracking-tight">
                    KryptonVision<span className="text-cyan-glow">™</span> AI Cloud Command
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Access the live video surveillance cockpit, real-time AI computer vision streams, and multi-branch edge discovery portal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                  <button
                    onClick={handleLaunchPortal}
                    className="w-full btn-luxe-primary py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan group"
                  >
                    <span>Launch Live Portal in New Window</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-brand-850 hover:bg-brand-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-mono flex items-center justify-center gap-2 transition-all"
                    title="Copy direct portal URL"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-glow" />}
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-white/10 w-full flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>256-Bit Encrypted Session</span>
                  </span>
                  <span>•</span>
                  <span>Sub-50ms WebRTC Low Latency</span>
                </div>

              </div>
            </div>
          )}

          {isLoading && !showDirectNotice && (
            <div className="absolute inset-0 bg-brand-950 flex flex-col items-center justify-center space-y-4 z-20">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 animate-ping" />
                <div className="w-full h-full rounded-full border-4 border-cyan-glow border-t-transparent animate-spin" />
              </div>
              <div className="text-center font-mono space-y-1">
                <div className="text-sm font-bold text-white tracking-widest uppercase">
                  INITIALIZING KRYPTONVISION™ CLOUD GATEWAY...
                </div>
                <div className="text-xs text-cyan-accent">
                  Connecting to Edge Media Relay (Sub-50ms WebRTC)
                </div>
              </div>
            </div>
          )}

          <iframe
            key={iframeKey}
            src={demoUrl}
            title="KryptonVision Cloud Command Center"
            className="w-full h-full border-0 bg-brand-950"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen; camera; microphone; display-capture; autoplay"
          />

        </div>

        {/* Bottom Status Footer */}
        <div className="bg-brand-950 px-4 py-2.5 border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 select-none gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Gateway Node: Operational (Sub-50ms WebRTC)</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Session: KL-SEC-ENC-7749</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleLaunchPortal}
              className="text-cyan-glow hover:underline font-bold flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Open Live Portal in Dedicated Window</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
