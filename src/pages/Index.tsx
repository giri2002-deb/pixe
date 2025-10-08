import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExpertiseSection from "../components/ExpertiseSection";
import TechnologySection from "../components/TechnologySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white scroll-smooth">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="pt-5"> {/* Add padding-top to avoid overlap with fixed navbar */}
        {/* Hero Section */}
        <section id="hero" className="py-16 sm:py-24">
          <HeroSection />
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-16 sm:py-24 bg-gray-50">
          <ExpertiseSection />
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-16 sm:py-24 bg-white">
          <TechnologySection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-gray-50">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
