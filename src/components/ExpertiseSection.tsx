
import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const ExpertiseSection = () => {
  const expertiseData = [
    {
      title: "Web Applications",
      description: "Evolving business challenges require technology solutions that are adaptive and scalable as your business grows. At Splendenslab, we specialize in delivering custom web application development solutions that can automate your business processes and provide a superior ROI to your technology investments.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      link: "Our web app expertise"
    },
    {
      title: "Mobile Applications", 
      description: "With capabilities across all device platforms our mobile app development services can profit to build both customer and enterprise apps. We know how people are interacting with mobile apps and we design and develop in top notch based on the business need seamlessly.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "Our mobile app expertise"
    },
    {
      title: "Micro services",
      description: "We are helping enterprises with microservices development to modernize their enterprise IT Systems. We build and manage microservices effectively by integrating APIs to make application databases and legacy apps more flexible and agile.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
      link: "Our business integrations"
    }
  ];

  const servicesData = [
    {
      title: "UI/UX Design and Development",
      description: "We aspire to create simple, user-friendly by conducting comprehensive research on end-user behaviour, their needs before start designing the apps. Our best-in-class result-driven strategies works on a wide range of platforms. We deliver designs with better functionality and user experience.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "Our UI/UX expertise"
    },
    {
      title: "Digital Marketing",
      description: "We offer a suite of services promoting your business online to target, strategize, execute, measure, and optimize across various digital channels. Our focus is on delivering exceptional digital experience to your audience thereby offering maximum Return on Investment for your marketing budget.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      link: "Our Digital Marketing expertise"
    },
    {
      title: "Testing Services",
      description: "A small glitch in performance can spell doomsday for the entire development process. Our holistic approach in software testing by implementing the best possible testing methodologies & applications ensures to deliver quality and decreased cost.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "Our Testing Services"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-5xl font-bold text-center mb-20 text-gradient">
            OUR EXPERTISE
          </h2>
        </AnimatedSection>

        {/* First Row - Expertise */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {expertiseData.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation={index === 0 ? "fade-left" : index === 2 ? "fade-right" : "fade-up"}
              delay={index * 200}
            >
              <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group">
                    {item.link}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Second Row - Services */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation={index === 0 ? "fade-left" : index === 2 ? "fade-right" : "fade-up"}
              delay={index * 200}
            >
              <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors group">
                    {item.link}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
