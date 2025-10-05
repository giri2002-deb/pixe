
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import TechnologySection from '../components/TechnologySection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      
      <Navbar />
      <main className="relative z-10">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HeroSection />
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ExpertiseSection />
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TechnologySection />
         <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
