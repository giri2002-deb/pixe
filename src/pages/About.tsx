
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6 text-center">
            <AnimatedSection animation="fade-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient">
                WE ARE SPLENDENS
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Design | Development
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300">
                <p>
                  <span className="text-purple-400 font-semibold">Mobile & Web applications</span> development company
                </p>
                <p>
                  We <span className="text-purple-400 font-semibold">CARE</span> for your success
                </p>
                <p>
                  We make your hard work behind simple Web & Mobile App Solutions
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHO WE ARE?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-xl text-slate-300 leading-relaxed">
                  We "Splendens" are Agile/ Dev- Ops software development Company providing WEB & MOBILE solutions of any complexity for B2B & B2C use 
                  cases. As a company, we have more than 15 years of experience in technology services. Our experts design, develop and deliver scalable system 
                  with the industry best practices for the best user experience and performance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What's Our Secret Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHAT'S OUR SECRET?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="max-w-6xl mx-auto text-center mb-16">
                <p className="text-xl text-slate-300 leading-relaxed">
                  Have the peace of mind that you are working with one of the best bespoke web and mobile application Development Company. There are really 
                  two things that make "Splendenslab" special; <span className="text-white font-semibold">Our Process</span> and <span className="text-white font-semibold">Our Team</span>.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Our Process */}
              <AnimatedSection animation="fade-left" delay={400}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                    <div className="text-6xl">🔄</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gradient">
                    OUR PROCESS
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    It is our playbook for client success. It's the infrastructure that 
                    allows our team to create the great things that drive results for 
                    our clients.
                  </p>
                </div>
              </AnimatedSection>

              {/* Our People */}
              <AnimatedSection animation="fade-right" delay={600}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                    <div className="text-6xl">👥</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-gradient">
                    OUR PEOPLE
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    They came from unicorn startups, not agencies. Instead of 
                    obsessing over awards, they've focused on satisfying customers 
                    and users. We work with organizations of all sizes, from startups 
                    to global brands.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* What Drives Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                WHAT DRIVES US?
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Honesty */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">🤝</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Honesty</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We love our job, and we know one thing, 
                    Honesty and hard work is the only thing 
                    which will keep us in job and business.
                  </p>
                </div>
              </AnimatedSection>

              {/* Experience */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">📈</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Experience</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Challenging Jobs has always driven us 
                    around helping the team experience the 
                    most complex outputs and enabling the 
                    team to perform at any level.
                  </p>
                </div>
              </AnimatedSection>

              {/* Excellence */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <div className="text-5xl">🎯</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Excellence</h3>
                  <p className="text-slate-300 leading-relaxed">
                    And Our mission is to deliver the results 
                    which clients expect from us at the lowest 
                    possible margin, exceeding the quality as 
                    per the market standards.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
                OUR CLIENT CHOOSE US BECAUSE WE EXCEL AT
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Clear Communication */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div>
                  <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Clear Communication</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Here at Splendenslab, we communicate with our clients in a clear and timely manner. 
                    We believe that communication is the key to success and we make sure that our clients 
                    are always in the loop.
                  </p>
                </div>
              </AnimatedSection>

              {/* Efficient Project Management */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Efficient Project Management</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We follow agile methodologies and use the latest project management tools to ensure 
                    that our projects are delivered on time and within budget.
                  </p>
                </div>
              </AnimatedSection>

              {/* Consistent Delivery */}
              <AnimatedSection animation="fade-up" delay={600}>
                <div>
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Consistent Delivery</h3>
                  <p className="text-slate-300 leading-relaxed">
                    For the optimal output, we follow a systematic approach to deliver consistent results 
                    that meet our clients' expectations and requirements.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Scaling on Demand */}
              <AnimatedSection animation="fade-left" delay={200}>
                <div>
                  <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Scaling on demand</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We believe our clients should have as few worries as possible. That's why when 
                    conditions change and you need to increase the size of your team, we add as many 
                    people as needed to finish everything on time. We gather the best multi-skilled 
                    specialists for you!
                  </p>
                </div>
              </AnimatedSection>

              {/* Fast Onboarding */}
              <AnimatedSection animation="fade-right" delay={400}>
                <div>
                  <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Fast onboarding</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our customers are from all over the globe, so we know how to establish and 
                    streamline communication and collaboration. All our specialists are fluent in 
                    English and continue to improve their language skills on a daily basis. Our goal is to 
                    make differences in time, culture and location imperceptible.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="mt-16 text-center">
              <AnimatedSection animation="fade-up" delay={600}>
                <div>
                  <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Decision based on relevant data</h3>
                  <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
                    We believe in making informed decisions based on data and analytics. Our team uses the latest 
                    tools and technologies to gather and analyze data to make strategic decisions that drive results.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
