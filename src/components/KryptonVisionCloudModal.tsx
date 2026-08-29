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

        {/* Embedded Iframe Viewport & Connection Hub */}
        <div className="relative flex-grow bg-brand-950 overflow-hidden flex items-center justify-center">

          {/* Underlying Live Gateway Card (Visible if browser blocks HTTP iframe on HTTPS) */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900/60 to-brand-950 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-brand-900/90 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col items-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-glow shadow-glow-cyan">
                <Camera className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>EDGE GATEWAY ONLINE • 3.7.216.169</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  KryptonVision<span className="text-cyan-glow">™</span> Live Command
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Real-time video surveillance cockpit, AI computer vision streams, and multi-branch edge discovery.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-luxe-primary py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan group"
                >
                  <span>Open Live Portal</span>
                  <ExternalLink className="w-4 h-4 text-brand-950 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <p className="text-[11px] font-mono text-slate-400">
                  Direct sub-50ms WebRTC connection to AWS edge node
                </p>
              </div>
            </div>
          </div>

          {/* Active Iframe (Loads directly when supported or over HTTPS) */}
          <iframe
            key={iframeKey}
            src={demoUrl}
            title="KryptonVision Cloud Command Center"
            className="w-full h-full border-0 bg-transparent relative z-20"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen; camera; microphone; display-capture; autoplay; clipboard-read; clipboard-write"
          />

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
