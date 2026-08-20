import React, { createContext, useContext, useState } from 'react';

export type LanguageCode = 'en' | 'ml' | 'hi' | 'ar' | 'ta' | 'de' | 'fr' | 'es';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    heroBadge: "PREMIER IT & SECURITY INFRASTRUCTURE FIRM",
    tagline: "INTELLIGENT SOLUTIONS. LIMITLESS IMPACT.",
    heroSub: "KryptonLogic is a trusted IT, CCTV security, and software engineering firm based in Kollam, Kerala. From our flagship KryptonVision™ AI surveillance platform to custom business software and 24/7 hardware support, we deliver reliable technology for every organization.",
    exploreKryptonVision: "Explore KryptonVision™ AI",
    requestDemo: "Live Demo",
    viewSolutions: "All Services & Solutions",
    getQuote: "Get Free Quote",
    liveSimulator: "Live Demo",
    navProducts: "Products",
    navSolutions: "Services & Solutions",
    navIndustries: "Industries We Serve",
    navCompany: "About Us",
    navEstimator: "Cost Calculator",
    navContact: "Contact Us",
    kpiCameras: "Cameras & Devices Monitored",
    kpiStartups: "Projects & Systems Built",
    kpiUptime: "Uptime & Quality Assurance",
    kpiLatency: "Fast AI Edge Response",
  },
  ml: {
    heroBadge: "പ്രമുഖ ഐടി & സിസിടിവി സെക്യൂരിറ്റി സ്ഥാപനം",
    tagline: "ബുദ്ധിപരമായ സാങ്കേതികവിദ്യ. പരിധിയില്ലാത്ത സ്വാധീനം.",
    heroSub: "കൊല്ലം ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ക്രിപ്റ്റോൺലോജിക് അത്യാധുനിക സോഫ്റ്റ്‌വെയറുകൾ, സിസിടിവി സെക്യൂരിറ്റി നെറ്റ്‌വർക്കിംഗ്, ഫ്ലാഗ്ഷിപ്പ് KryptonVision™ AI വീഡിയോ നിരീക്ഷണ സംവിധാനങ്ങൾ, 24/7 എഎംസി സപ്പോർട്ട് എന്നിവ നൽകുന്നു.",
    exploreKryptonVision: "KryptonVision™ എഐ കാണുക",
    requestDemo: "ലൈവ് ഡെമോ",
    viewSolutions: "ഞങ്ങളുടെ സേവനങ്ങൾ",
    getQuote: "സൗജന്യ ക്വട്ടേഷൻ",
    liveSimulator: "ലൈവ് ഡെമോ",
    navProducts: "ഉൽപ്പന്നങ്ങൾ",
    navSolutions: "സേവനങ്ങൾ",
    navIndustries: "മേഖലകൾ",
    navCompany: "ഞങ്ങളെക്കുറിച്ച്",
    navEstimator: "ചെലവ് കണക്കാക്കൽ",
    navContact: "ബന്ധപ്പെടുക",
    kpiCameras: "മോണിറ്റർ ചെയ്യുന്ന ക്യാമറകൾ",
    kpiStartups: "നിർമ്മിച്ച പ്രോജക്റ്റുകൾ",
    kpiUptime: "പ്രവർത്തനക്ഷമത ഉറപ്പ്",
    kpiLatency: "അതിവേഗ എഐ റെസ്പോൺസ്",
  },
  hi: {
    heroBadge: "प्रमुख आईटी और सुरक्षा इंफ्रास्ट्रक्चर फर्म",
    tagline: "बुद्धिमान समाधान। असीम प्रभाव।",
    heroSub: "कोल्लम, केरल में स्थित क्रिप्टनलॉजिक कस्टम सॉफ्टवेयर, सीसीटीवी सुरक्षा नेटवर्क, प्रमुख KryptonVision™ AI वीडियो निगरानी और 24/7 तकनीकी सहायता प्रदान करता है।",
    exploreKryptonVision: "KryptonVision™ देखें",
    requestDemo: "लाइव डेमो",
    viewSolutions: "सभी सेवाएं",
    getQuote: "मुफ़्त कोटेशन",
    liveSimulator: "लाइव डेमो",
    navProducts: "उत्पाद",
    navSolutions: "सेवाएं एवं समाधान",
    navIndustries: "उद्योग",
    navCompany: "हमारे बारे में",
    navEstimator: "लागत कैलकुलेटर",
    navContact: "संपर्क करें",
    kpiCameras: "निगरानी किए गए कैमरे",
    kpiStartups: "निर्मित सिस्टम और प्रोजेक्ट्स",
    kpiUptime: "अपटाइम और गुणवत्ता गारंटी",
    kpiLatency: "तेज़ एआई रिस्पांस",
  },
  ar: {
    heroBadge: "شركة رائدة في تكنولوجيا المعلومات والأمن",
    tagline: "حلول ذكية. تأثير لا حدود له.",
    heroSub: "شركة كريبتون لوجيك ومقرها في كولام، كيرالا، تقدم حلول برمجيات الأعمال، وكاميرات المراقبة، ونظام المراقبة الذكي KryptonVision™ AI مع دعم فني متواصل 24/7.",
    exploreKryptonVision: "استكشف KryptonVision™",
    requestDemo: "عرض مباشر",
    viewSolutions: "جميع الخدمات",
    getQuote: "طلب عرض سعر",
    liveSimulator: "عرض مباشر",
    navProducts: "المنتجات",
    navSolutions: "الخدمات والحلول",
    navIndustries: "القطاعات",
    navCompany: "من نحن",
    navEstimator: "حاسبة التكلفة",
    navContact: "اتصل بنا",
    kpiCameras: "أجهزة المراقبة المدعومة",
    kpiStartups: "المشاريع المنفذة",
    kpiUptime: "ضمان جودة الخدمة",
    kpiLatency: "استجابة سريعة بالذكاء الاصطناعي",
  },
  ta: {
    heroBadge: "முன்னணி தகவல் தொழில்நுட்பம் & சிசிடிவி நிறுவனம்",
    tagline: "நுண்ணறிவு தீர்வுகள். எல்லையற்ற தாக்கம்.",
    heroSub: "கேரள மாநிலம் கொல்லத்தை தலைமையிடமாகக் கொண்டு, கிரிப்டன்லாஜிக் அதிநவீன மென்பொருட்கள், சிசிடிவி பாதுகாப்பு மற்றும் KryptonVision™ AI வீடியோ கண்காணிப்பு சேவைகளை வழங்குகிறது.",
    exploreKryptonVision: "KryptonVision™ பார்க்க",
    requestDemo: "நேரலை டெமோ",
    viewSolutions: "எங்கள் சேவைகள்",
    getQuote: "இலவச மதிப்பீடு",
    liveSimulator: "நேரலை டெமோ",
    navProducts: "தயாரிப்புகள்",
    navSolutions: "சேவைகள்",
    navIndustries: "துறைகள்",
    navCompany: "எங்களை பற்றி",
    navEstimator: "செலவு கணக்கீடு",
    navContact: "தொடர்புகொள்ள",
    kpiCameras: "கண்காணிக்கப்படும் சாதனங்கள்",
    kpiStartups: "உருவாக்கப்பட்ட அமைப்புகள்",
    kpiUptime: "இயக்க நிலை உத்தரவாதம்",
    kpiLatency: "வேகமான AI செயல்பாடு",
  },
  de: {
    heroBadge: "FÜHRENDES IT- & SICHERHEITSUNTERNEHMEN",
    tagline: "INTELLIGENTE LÖSUNGEN. GRENZENLOSE WIRKUNG.",
    heroSub: "KryptonLogic mit Sitz in Kollam, Kerala, bietet maßgeschneiderte Unternehmenssoftware, moderne CCTV-Sicherheit und die führende KI-Plattform KryptonVision™ mit 24/7 Support.",
    exploreKryptonVision: "KryptonVision™ entdecken",
    requestDemo: "Live-Demo",
    viewSolutions: "Alle Lösungen",
    getQuote: "Kostenloses Angebot",
    liveSimulator: "Live Demo",
    navProducts: "Produkte",
    navSolutions: "Dienstleistungen",
    navIndustries: "Branchen",
    navCompany: "Über uns",
    navEstimator: "Kostenrechner",
    navContact: "Kontakt",
    kpiCameras: "Überwachte Kameras",
    kpiStartups: "Realisierte Projekte",
    kpiUptime: "Verfügbarkeit & SLA",
    kpiLatency: "Schnelle KI-Antwort",
  },
  fr: {
    heroBadge: "ENTREPRISE IT ET SÉCURITÉ DE PREMIER RANG",
    tagline: "SOLUTIONS INTELLIGENTES. IMPACT ILLIMITÉ.",
    heroSub: "Basée à Kollam, Kerala, KryptonLogic fournit des logiciels sur mesure, des systèmes de vidéosurveillance CCTV et la plateforme IA KryptonVision™ avec support 24/7.",
    exploreKryptonVision: "Découvrir KryptonVision™",
    requestDemo: "Démo en Direct",
    viewSolutions: "Tous les Services",
    getQuote: "Devis Gratuit",
    liveSimulator: "Démo en Direct",
    navProducts: "Produits",
    navSolutions: "Services & Solutions",
    navIndustries: "Industries",
    navCompany: "À Propos",
    navEstimator: "Calculateur",
    navContact: "Contact",
    kpiCameras: "Caméras Surveillées",
    kpiStartups: "Projets Réalisés",
    kpiUptime: "Garantie Qualité",
    kpiLatency: "Réponse IA Rapide",
  },
  es: {
    heroBadge: "EMPRESA LÍDER EN TI Y SEGURIDAD",
    tagline: "SOLUCIONES INTELIGENTES. IMPACTO ILIMITADO.",
    heroSub: "Con sede en Kollam, Kerala, KryptonLogic ofrece software empresarial, seguridad CCTV y la plataforma de vigilancia KryptonVision™ AI con soporte continuo 24/7.",
    exploreKryptonVision: "Explorar KryptonVision™",
    requestDemo: "Demostración en Vivo",
    viewSolutions: "Servicios y Soluciones",
    getQuote: "Presupuesto Gratis",
    liveSimulator: "Demo en Vivo",
    navProducts: "Productos",
    navSolutions: "Servicios y Soluciones",
    navIndustries: "Industrias",
    navCompany: "Sobre Nosotros",
    navEstimator: "Calculadora",
    navContact: "Contacto",
    kpiCameras: "Cámaras Monitoreadas",
    kpiStartups: "Proyectos Realizados",
    kpiUptime: "Garantía de Servicio",
    kpiLatency: "Respuesta Rápida de IA",
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string) => string;
  is4DActive: boolean;
  toggle4D: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [langCode, setLangCode] = useState<LanguageCode>('en');
  const [is4DActive, setIs4DActive] = useState<boolean>(true);

  const currentLanguage = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];

  const setLanguage = (code: LanguageCode) => {
    setLangCode(code);
    document.documentElement.dir = LANGUAGES.find(l => l.code === code)?.dir || 'ltr';
    document.documentElement.lang = code;
  };

  const toggle4D = () => {
    setIs4DActive(prev => !prev);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[langCode]?.[key] || TRANSLATIONS.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, is4DActive, toggle4D }}>
      <div dir={currentLanguage.dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
