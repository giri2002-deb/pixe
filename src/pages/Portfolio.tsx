
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A complete e-commerce solution with modern UI/UX, payment integration, and inventory management system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      description: "A comprehensive healthcare app for patient management, appointment booking, and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["Flutter", "Firebase", "Node.js", "WebRTC"],
      link: "#"
    },
    {
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Advanced analytics dashboard for financial data visualization and reporting with real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["Angular", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Social Media Platform",
      category: "Mobile Application",
      description: "A social networking app with real-time messaging, content sharing, and community features.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["React Native", "Socket.io", "Redis", "AWS"],
      link: "#"
    },
    {
      title: "IoT Management System",
      category: "Web Application",
      description: "Enterprise IoT device management platform with monitoring, analytics, and control features.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["Vue.js", "MQTT", "InfluxDB", "Docker"],
      link: "#"
    },
    {
      title: "Learning Management System",
      category: "Web Application",
      description: "Comprehensive LMS with course management, student tracking, and interactive learning tools.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["React", "GraphQL", "MySQL", "Kubernetes"],
      link: "#"
    }
  ];

  const categories = ["All", "Web Application", "Mobile Application"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
                Our Portfolio
              </h1>
              <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto">
                Explore our successful projects and see how we've helped businesses transform their digital presence.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="pb-10">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex justify-center space-x-4 mb-12">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`px-6 py-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-400"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="glass-effect border-slate-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
                    <div className="relative h-64 mb-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="outline"
                        className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors"
                      >
                        View Project
                      </Button>
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

export default Portfolio;
