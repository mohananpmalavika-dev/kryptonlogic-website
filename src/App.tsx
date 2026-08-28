import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ParticleMatrix4D } from './components/ParticleMatrix4D';
import { KryptonVisionCloudModal } from './components/KryptonVisionCloudModal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KryptonVisionShowcase } from './components/KryptonVisionShowcase';
import { EnterpriseAISuite } from './components/EnterpriseAISuite';
import { HardwareAndCCTV } from './components/HardwareAndCCTV';
import { StartupLaunchpad } from './components/StartupLaunchpad';
import { IndustriesSection } from './components/IndustriesSection';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhyPartnerWithUs } from './components/WhyPartnerWithUs';
import { Estimator } from './components/Estimator';
import { TechStack } from './components/TechStack';
import { KollamHQ } from './components/KollamHQ';
import { CaseStudies } from './components/CaseStudies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [isCloudModalOpen, setIsCloudModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = () => {
    window.open('http://3.7.216.169', '_blank', 'noopener,noreferrer');
    setIsCloudModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-950 text-slate-100 flex flex-col selection:bg-cyan-glow/25 selection:text-cyan-glow relative">
        
        {/* 4D Temporal Particle Canvas Engine */}
        <ParticleMatrix4D />

        {/* Masked White-Label KryptonVision Cloud Command Modal */}
        <KryptonVisionCloudModal 
          isOpen={isCloudModalOpen}
          onClose={() => setIsCloudModalOpen(false)}
        />

        {/* Dynamic Mega-Menu Navigation with Multi-Language Switcher */}
        <Navbar 
          onOpenEstimate={() => scrollTo('estimator')}
          onOpenDemo={handleOpenDemo}
          onOpenContact={() => scrollTo('contact')}
        />

        <main className="flex-grow relative z-10">
          {/* 1. Focused Enterprise Hero Section */}
          <Hero 
            onExploreKryptonVision={() => scrollTo('kryptonvision')}
            onExploreSolutions={() => scrollTo('enterprise-suite')}
            onOpenEstimate={() => scrollTo('estimator')}
            onOpenDemo={handleOpenDemo}
          />

          {/* 2. Flagship Spotlight: KryptonVision Autonomous AI Video Surveillance */}
          <KryptonVisionShowcase 
            onOpenConsultation={() => scrollTo('contact')}
            onOpenCloudDemo={handleOpenDemo}
          />

          {/* 3. KryptonLogic Enterprise AI Suite (CRM, GST Billing, Inventory, Security, Service Desk) */}
          <EnterpriseAISuite 
            onOpenContact={() => scrollTo('contact')}
            onOpenEstimator={() => scrollTo('estimator')}
          />

          {/* 4. CCTV Installation, Biometric Access & Hardware AMC Infrastructure */}
          <HardwareAndCCTV 
            onOpenContact={() => scrollTo('contact')}
            onOpenEstimator={() => scrollTo('estimator')}
          />

          {/* 5. Startup Launchpad & MVP Engineering */}
          <StartupLaunchpad 
            onOpenConsultation={() => scrollTo('contact')}
            onOpenEstimator={() => scrollTo('estimator')}
          />

          {/* 6. Industries We Serve (8 Verticals) */}
          <IndustriesSection 
            onOpenContact={() => scrollTo('contact')}
          />

          {/* 7. Why Partner With Us (Mission, Vision, 6 Value Pillars) */}
          <WhyPartnerWithUs 
            onOpenContact={() => scrollTo('contact')}
          />

          {/* 8. Custom Software Development, Websites, E-Commerce & Data Migration */}
          <ServicesShowcase 
            onOpenContact={() => scrollTo('contact')}
            onOpenEstimator={() => scrollTo('estimator')}
          />

          {/* 9. Interactive Project Cost & Scope Estimator */}
          <Estimator 
            onDirectQuote={(details) => {
              console.log('Quote request:', details);
            }}
          />

          {/* 10. OEM Hardware Partners & Technology Stack Visualizer */}
          <TechStack />

          {/* 11. Kollam Headquarters & Physical Presence */}
          <KollamHQ 
            onOpenContact={() => scrollTo('contact')}
          />

          {/* 12. Enterprise Case Studies */}
          <CaseStudies />

          {/* 13. Contact & Direct Hotline (+91 85939 44144) */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenDemo={handleOpenDemo} />

      </div>
    </LanguageProvider>
  );
}

export default App;
