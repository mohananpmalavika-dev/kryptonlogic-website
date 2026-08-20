import React, { useState } from 'react';
import { 
  X, 
  Maximize2, 
  Minimize2, 
  Lock, 
  ShieldCheck, 
  RotateCw, 
  Camera,
  CheckCircle2
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-950/90 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Modal Window Container */}
      <div className={`relative w-full bg-brand-900 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,240,255,0.35)] flex flex-col transition-all duration-300 ${
        isFullscreen ? 'h-full max-w-full rounded-none' : 'h-[92vh] max-w-7xl'
      }`}>
        
        {/* Cockpit Header Bar (100% White-Labeled & Masked) */}
        <div className="bg-brand-950 px-4 py-3 border-b border-cyan-500/30 flex items-center justify-between flex-shrink-0 font-mono text-xs select-none">
          
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
              <span className="font-bold text-white tracking-wide">
                KRYPTOVISION<span className="text-cyan-glow">™</span> AI CLOUD COMMAND
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Lock className="w-2.5 h-2.5" />
                <span>256-BIT SECURE SESSION</span>
              </span>
            </div>
          </div>

          {/* Center Address Pill (Branded White-Label Path) */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1 rounded-full bg-brand-900 border border-cyan-500/30 text-slate-300 text-[11px]">
            <Lock className="w-3 h-3 text-cyan-glow" />
            <span className="text-white font-bold">https://kryptonlogic.com</span>
            <span className="text-cyan-accent">/kryptonvision/cloud-portal</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
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

        {/* Embedded Iframe Viewport */}
        <div className="relative flex-grow bg-brand-950 overflow-hidden">
          
          {isLoading && (
            <div className="absolute inset-0 bg-brand-950 flex flex-col items-center justify-center space-y-4 z-20">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 animate-ping" />
                <div className="w-full h-full rounded-full border-4 border-cyan-glow border-t-transparent animate-spin" />
              </div>
              <div className="text-center font-mono space-y-1">
                <div className="text-sm font-bold text-white tracking-widest uppercase">
                  INITIALIZING KRYPTOVISION™ CLOUD GATEWAY...
                </div>
                <div className="text-xs text-cyan-accent">
                  Connecting to Edge Media Relay (Sub-50ms WebRTC)
                </div>
              </div>
            </div>
          )}

          <iframe
            key={iframeKey}
            src="https://sentinel-grid-monitoring-b54f.onrender.com/login"
            title="KryptonVision Cloud Command Center"
            className="w-full h-full border-0 bg-brand-950"
            onLoad={() => setIsLoading(false)}
            allow="fullscreen; camera; microphone; display-capture; autoplay"
          />

        </div>

        {/* Bottom Status Footer */}
        <div className="bg-brand-950 px-4 py-2 border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Node 01 (Kollam Gateway): Operational</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Session: KL-SEC-ENC-7749</span>
          </div>

          <div className="text-cyan-glow font-bold">
            KryptonLogic Solutions • Enterprise Cloud Session
          </div>
        </div>

      </div>

    </div>
  );
};
