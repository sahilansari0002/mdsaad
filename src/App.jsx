import React, { useState } from 'react';
import { LightboxProvider } from './context/LightboxContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import About from './components/About';
import Tools from './components/Tools';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import VideoLightbox from './components/VideoLightbox';
import Testimonials from './components/Testimonials';
import WhyChooseMe from './components/WhyChooseMe';
import Process from './components/Process';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppPill from './components/WhatsAppPill';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <LightboxProvider>
      <div className="min-h-screen bg-dark-bg text-white selection:bg-brand-amber selection:text-black">
        {/* NLE Post-Production Cinematic Loader */}
        <Loader onFinish={() => setLoadingComplete(true)} />

        {/* Main Website Structure */}
        {loadingComplete && (
          <div className="relative">
            <Navbar />
            <main>
              <Hero />
              <Showreel />
              <About />
              <Tools />
              <PortfolioSection />
              <Testimonials />
              <WhyChooseMe />
              <Process />
              <Services />
              <CTA />
              <Contact />
            </main>
            <Footer />

            {/* Quick WhatsApp Action Pill */}
            <WhatsAppPill />

            {/* Video Modal Lightbox */}
            <VideoLightbox />
          </div>
        )}
      </div>
    </LightboxProvider>
  );
}
