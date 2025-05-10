
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-solar-dark-blue/50 to-solar-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <Badge variant="outline" className="mb-4 py-1 px-4 border-solar-green text-solar-green">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                25+ Years Durability
              </span>
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Say Goodbye to Power Outages with Reliable Solar Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Power your lights, fans, freezer, and more—no stress, no interruptions!
            </p>
            <div>
              <Button 
                className="bg-solar-green hover:bg-solar-green/90 text-black text-lg py-6 px-8 rounded-lg shadow-lg shadow-solar-green/20" 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choose Your Plan Now
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative animate-float">
              <img 
                src="/lovable-uploads/5e5d2fb9-3f74-4867-b7b0-1534a9ce6a42.png" 
                alt="Happy family with solar panels" 
                className="w-full h-auto rounded-lg shadow-xl" 
              />
              <div className="absolute -bottom-4 -right-4 bg-solar-dark-blue p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">Powering happiness 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
