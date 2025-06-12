
import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

const TestimonialSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            TESTIMONIAL
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="max-w-4xl mx-auto glass-effect border-slate-700 p-8 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-6 text-6xl text-purple-500/30 font-serif">"</div>
            <div className="absolute bottom-4 right-6 text-6xl text-purple-500/30 font-serif rotate-180">"</div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JJ</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed italic">
                  We have been working with SplendenLabs Tech for a year now. With the best intention in mind for 
                  customer needs, they seamlessly adapted our workflow and were quick to collaborate with our existing 
                  devs much more like an internal team than a group of remote developers.
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Jimmy Jacob</h4>
                  <p className="text-purple-400 font-medium">June IT solutions</p>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialSection;
