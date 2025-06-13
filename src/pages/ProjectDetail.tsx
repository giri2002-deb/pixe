
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Star, Users, Calendar, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import AnimatedSection from '../components/AnimatedSection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A complete e-commerce solution with modern UI/UX, payment integration, and inventory management system.",
      fullDescription: "Built a comprehensive e-commerce platform that revolutionizes online shopping experiences. The platform features advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard. Implemented using modern web technologies to ensure scalability and performance.",
      detailedDescription: "This cutting-edge e-commerce platform represents the future of online retail. We've integrated advanced AI-powered recommendation engines, real-time inventory synchronization across multiple warehouses, and a sophisticated payment gateway that supports over 50 international payment methods. The platform handles millions of transactions daily with 99.9% uptime.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis", "AWS S3", "GraphQL", "TypeScript"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "AI-Powered Product Recommendations",
        "Multi-Currency Support",
        "Real-time Inventory Management",
        "Advanced Analytics Dashboard",
        "Mobile-First Responsive Design",
        "SEO Optimization & Performance",
        "Multi-Vendor Marketplace",
        "Advanced Search & Filtering"
      ],
      timeline: "6 months",
      client: "RetailTech Solutions",
      teamSize: "8 developers",
      rating: "4.9/5",
      users: "50K+ active users"
    },
    "healthcare-mobile-app": {
      title: "Healthcare Mobile App",
      category: "Mobile Application",
      description: "A comprehensive healthcare app for patient management, appointment booking, and telemedicine features.",
      fullDescription: "Developed a revolutionary healthcare mobile application that connects patients with healthcare providers seamlessly. The app includes telemedicine capabilities, appointment scheduling, medical record management, and prescription tracking. Built with security and HIPAA compliance at its core.",
      detailedDescription: "This healthcare platform transforms patient care through innovative technology. Features include AI-powered symptom checking, real-time vital monitoring integration, secure video consultations with end-to-end encryption, and intelligent appointment scheduling that optimizes doctor availability. The app has processed over 1 million consultations and maintains a 98% patient satisfaction rate.",
      technologies: ["Flutter", "Firebase", "Node.js", "WebRTC", "Socket.io", "AWS", "TensorFlow", "HIPAA Compliant"],
      images: [
        "/lovable-uploads/be9cfe76-6d02-46f9-b551-53f2524ab6ad.png",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=7952&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4076&q=80",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "HD Video Consultations",
        "AI Symptom Checker",
        "Smart Appointment Scheduling",
        "Digital Prescription Management",
        "Wearable Device Integration",
        "Emergency Contact System",
        "Secure Medical Records",
        "Multi-Language Support"
      ],
      timeline: "8 months",
      client: "MediCare Plus",
      teamSize: "12 developers",
      rating: "4.8/5",
      users: "100K+ patients"
    },
    "financial-dashboard": {
      title: "Financial Dashboard",
      category: "Web Application",
      description: "Advanced analytics dashboard for financial data visualization and reporting with real-time updates.",
      fullDescription: "Created a sophisticated financial analytics dashboard that provides real-time insights into market trends, portfolio performance, and risk assessment. The platform features interactive charts, customizable reports, and automated alerts for financial professionals.",
      detailedDescription: "This enterprise-grade financial platform processes billions in transactions daily. Features include machine learning-powered risk analysis, real-time market data integration from 50+ exchanges, customizable portfolio analytics, and regulatory compliance reporting. The system supports high-frequency trading with microsecond latency.",
      technologies: ["Angular", "D3.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "Redis", "Kafka"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "Real-time Market Data",
        "Risk Assessment AI",
        "Portfolio Optimization",
        "Regulatory Compliance",
        "Custom Report Builder",
        "Automated Trading Signals",
        "Multi-Asset Support",
        "Advanced Charting Tools"
      ],
      timeline: "10 months",
      client: "FinanceFlow Corp",
      teamSize: "15 developers",
      rating: "4.9/5",
      users: "10K+ traders"
    },
    "social-media-platform": {
      title: "Social Media Platform",
      category: "Mobile Application",
      description: "A social networking app with real-time messaging, content sharing, and community features.",
      fullDescription: "Built a next-generation social media platform that emphasizes authentic connections and meaningful interactions. Features include real-time messaging, content sharing, community groups, and advanced privacy controls.",
      detailedDescription: "This innovative social platform redefines digital connections with AI-powered content curation, advanced privacy controls, and meaningful engagement metrics. Features include live streaming with AR filters, community-driven content moderation, and blockchain-based creator monetization. The platform hosts 5M+ active users with 99.95% uptime.",
      technologies: ["React Native", "Socket.io", "Redis", "AWS", "GraphQL", "MongoDB", "WebRTC", "Blockchain"],
      images: [
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "Real-time Messaging",
        "AR-Powered Live Streaming",
        "Community Building Tools",
        "Advanced Privacy Controls",
        "Creator Monetization",
        "AI Content Curation",
        "Cross-Platform Sync",
        "Blockchain Integration"
      ],
      timeline: "12 months",
      client: "SocialConnect Inc",
      teamSize: "20 developers",
      rating: "4.7/5",
      users: "5M+ active users"
    },
    "iot-management-system": {
      title: "IoT Management System",
      category: "Web Application",
      description: "Enterprise IoT device management platform with monitoring, analytics, and control features.",
      fullDescription: "Developed a comprehensive IoT management platform that enables enterprises to monitor, control, and analyze their connected devices. The system provides real-time monitoring, predictive maintenance, and detailed analytics.",
      detailedDescription: "This industrial-grade IoT platform manages over 100,000 connected devices across multiple industries. Features include predictive maintenance using machine learning, edge computing integration, and advanced security protocols. The system reduces downtime by 40% and increases operational efficiency by 60%.",
      technologies: ["Vue.js", "MQTT", "InfluxDB", "Docker", "Kubernetes", "Python", "TensorFlow", "Edge Computing"],
      images: [
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "Real-time Device Monitoring",
        "Predictive Maintenance AI",
        "Edge Computing Support",
        "Advanced Security Protocols",
        "Custom Dashboard Builder",
        "Automated Alert System",
        "Multi-Protocol Support",
        "Scalable Architecture"
      ],
      timeline: "9 months",
      client: "Industrial IoT Solutions",
      teamSize: "10 developers",
      rating: "4.8/5",
      users: "500+ enterprises"
    },
    "learning-management-system": {
      title: "Learning Management System",
      category: "Web Application",
      description: "Comprehensive LMS with course management, student tracking, and interactive learning tools.",
      fullDescription: "Created a modern learning management system that transforms the educational experience. The platform includes course creation tools, student progress tracking, interactive assessments, and collaborative learning features.",
      detailedDescription: "This next-generation LMS platform serves 1M+ students worldwide with AI-powered personalized learning paths, advanced analytics, and immersive VR/AR educational experiences. Features include automated grading, plagiarism detection, and adaptive learning algorithms that improve student outcomes by 35%.",
      technologies: ["React", "GraphQL", "MySQL", "Kubernetes", "AWS", "WebRTC", "TensorFlow", "VR/AR"],
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
      ],
      features: [
        "AI-Powered Learning Paths",
        "VR/AR Learning Experiences",
        "Automated Assessment Tools",
        "Advanced Analytics Dashboard",
        "Collaborative Learning Spaces",
        "Multi-Language Support",
        "Mobile Learning App",
        "Integration APIs"
      ],
      timeline: "7 months",
      client: "EduTech Academy",
      teamSize: "14 developers",
      rating: "4.9/5",
      users: "1M+ students"
    }
  };

  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/portfolio')}>
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <Button 
                variant="outline"
                onClick={() => navigate('/portfolio')}
                className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
              
              <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-in-left">
                <Badge variant="secondary" className="px-4 py-2 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: {project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  <span>Client: {project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{project.rating}</span>
                </div>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 text-gradient animate-text-shimmer bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {project.title}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl mb-6 animate-fade-in-up">
                {project.fullDescription}
              </p>

              <p className="text-lg text-foreground/80 max-w-5xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {project.detailedDescription}
              </p>

              <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                  {project.users}
                </Badge>
              </div>
              
              <div className="flex gap-4 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 transform hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Images Carousel */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl font-bold mb-12 text-center text-foreground animate-text-shimmer">Project Gallery</h2>
              <div className="max-w-5xl mx-auto">
                <Carousel 
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: false,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                          <Card className="glass-effect border-border overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                            <div className="relative h-64 overflow-hidden">
                              <img 
                                src={image} 
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <Badge className="bg-background/90 text-foreground">
                                  Image {index + 1}
                                </Badge>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
                  <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
                </Carousel>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technologies & Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection animation="fade-left">
                <Card className="glass-effect border-border p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center animate-text-shimmer">
                    <div className="w-2 h-8 bg-gradient-to-b from-primary to-purple-600 rounded-full mr-4"></div>
                    Technologies Used
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.technologies.map((tech, index) => (
                      <div 
                        key={index}
                        className="group p-4 bg-muted/50 rounded-lg text-center text-foreground hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="font-medium group-hover:text-primary transition-colors duration-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fade-right">
                <Card className="glass-effect border-border p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center animate-text-shimmer">
                    <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-500 rounded-full mr-4"></div>
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="group flex items-center p-4 bg-muted/50 rounded-lg hover:bg-primary/20 transition-all duration-300 transform hover:translate-x-2 animate-slide-in-left"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-purple-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <Card className="glass-effect border-border p-12 text-center bg-gradient-to-br from-primary/5 to-purple-600/5">
                <h3 className="text-4xl font-bold mb-6 text-gradient animate-text-shimmer">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
                    onClick={() => navigate('/contact')}
                  >
                    Get Started Today
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    onClick={() => navigate('/portfolio')}
                  >
                    View More Projects
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
