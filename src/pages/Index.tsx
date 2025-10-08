import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ExpertiseSection from "../components/ExpertiseSection";
import TechnologySection from "../components/TechnologySection";
import TestimonialSection from "../components/TestimonialSection";
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
    <div
      className="min-h-screen bg-white overflow-auto scroll-smooth"
      style={{ overflowX: "auto", overflowY: "auto" }}
    >
      {/* ✅ FIXED NAVBAR (stays visible always) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* ✅ MAIN CONTENT - scrolls under the fixed navbar */}
      <main
       
      >
        <section id="hero" className="py-10 sm:py-4">
          <HeroSection />
        </section>

        <section id="expertise" className="py-16 sm:py-24 bg-gray-50">
          <ExpertiseSection />
        </section>

        <section id="technology" className="py-16 sm:py-24 bg-white">
          <TechnologySection />
        </section>


        <section id="contact" className="py-16 sm:py-24 bg-white">
          <ContactSection />
        </section>
      </main>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
