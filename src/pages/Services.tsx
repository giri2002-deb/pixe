
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Web Applications",
      description: "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows. At Splendenslab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      features: ["Custom Web Development", "Progressive Web Apps", "E-commerce Solutions", "API Development"]
    },
    {
      title: "Mobile Applications", 
      description: "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["iOS App Development", "Android App Development", "Cross-platform Development", "App Store Optimization"]
    },
    {
      title: "UI/UX Design and Development",
      description: "We aspire to create simple, user-friendly by conducting comprehensive research on end-user behaviour, their needs before start designing the apps. Our best-in-class result-driven strategies works on a wide range of platforms.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["User Experience Design", "User Interface Design", "Prototyping", "Design Systems"]
    },
    {
      title: "Digital Marketing",
      description: "We offer a suite of services promoting your business online to target, strategize, execute, measure, and optimize across various digital channels. Our focus is on delivering exceptional digital experience to your audience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      features: ["Search Engine Optimization", "Social Media Marketing", "Content Marketing", "Pay-Per-Click Advertising"]
    },
    {
      title: "Micro services",
      description: "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      features: ["Microservices Architecture", "API Development", "Cloud Migration", "System Integration"]
    },
    {
      title: "Testing Services",
      description: "A small glitch in performance can spell doomsday for the entire development process. Our holistic approach in software testing by implementing the best possible testing methodologies & applications ensures to deliver quality and decreased cost.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Manual Testing", "Automation Testing", "Performance Testing", "Security Testing"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h1 className="text-6xl font-bold text-center mb-8 text-gradient">
                Our Services
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
                We provide comprehensive technology solutions to help your business grow and succeed in the digital world.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden h-full">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-slate-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
