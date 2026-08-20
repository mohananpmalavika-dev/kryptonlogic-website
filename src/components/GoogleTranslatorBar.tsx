import React, { useEffect, useState } from 'react';
import { Globe, Sparkles, Check } from 'lucide-react';
import { useLanguage, LANGUAGES, LanguageCode } from '../context/LanguageContext';

export const GoogleTranslatorBar: React.FC = () => {
  const { currentLanguage, setLanguage, is4DActive, toggle4D } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Add Google Translate script if not present
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
      };
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* 4D Spatial Toggle Button */}
      <button
        onClick={toggle4D}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all ${
          is4DActive
            ? 'bg-cyan-500/20 text-cyan-glow border border-cyan-500/50 shadow-pill-glow'
            : 'bg-brand-900/80 text-slate-400 border border-white/5 hover:text-white'
        }`}
        title="Toggle 4D Spatial Parallax & Motion Engine"
      >
        <Sparkles className={`w-3.5 h-3.5 ${is4DActive ? 'text-cyan-glow animate-spin' : 'text-slate-400'}`} />
        <span className="hidden sm:inline">4D SPATIAL</span>
        <span className={`w-1.5 h-1.5 rounded-full ${is4DActive ? 'bg-cyan-glow animate-ping' : 'bg-slate-500'}`} />
      </button>

      {/* Language Selector Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-3 py-1.5 rounded-xl bg-brand-900/90 border border-cyan-500/30 text-xs font-mono text-white flex items-center gap-1.5 hover:border-cyan-glow transition-colors shadow-pill-glow"
        >
          <span className="text-sm">{currentLanguage.flag}</span>
          <span className="font-bold">{currentLanguage.code.toUpperCase()}</span>
          <Globe className="w-3.5 h-3.5 text-cyan-glow ml-0.5" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-brand-950/95 backdrop-blur-2xl border border-cyan-500/40 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
            <div className="px-3 py-1.5 text-[10px] font-mono text-cyan-accent uppercase tracking-wider font-bold border-b border-white/10 mb-1">
              Select Language / ഭാഷ തിരഞ്ഞെടുക്കുക
            </div>

            <div className="space-y-1 max-h-64 overflow-y-auto">
              {LANGUAGES.map((lang: any) => {
                const isSelected = currentLanguage.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                      setDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-sans flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-glow font-bold border border-cyan-500/40'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <div className="text-left">
                        <div className="font-semibold text-white">{lang.nativeName}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{lang.name}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-cyan-glow" />}
                  </button>
                );
              })}
            </div>

            {/* Google Translate Hidden Target Element */}
            <div className="pt-2 border-t border-white/10 text-center">
              <div id="google_translate_element" className="inline-block scale-90" />
              <div className="text-[9px] text-slate-400 font-mono mt-1">
                130+ Global Languages Supported
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
