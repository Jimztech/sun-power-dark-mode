
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bulb, Fan, Freezer } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-solar-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Choose the Plan That Fits Your Needs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select from our range of solar solutions tailored to different household needs and budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="pricing-card">
            <Badge className="absolute -top-3 right-4 bg-solar-blue">Basic</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">Basic Plan</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">$1,200</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">300W panel</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">500Wh power station</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">1,000W inverter</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">5-year warranty</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Installation included</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h4 className="text-white font-semibold mb-3">Usage:</h4>
              <div className="space-y-2 text-gray-300 mb-4">
                <div className="flex items-center">
                  <Bulb size={18} className="text-solar-green mr-2" />
                  <span>Powers 6 hours of light (2 bulbs)</span>
                </div>
                <div className="flex items-center">
                  <Fan size={18} className="text-solar-green mr-2" />
                  <span>4 hours of a small fan</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-solar-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <span>Charges a phone overnight</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-solar-green hover:bg-solar-green/90 text-black">
              Get Started
            </Button>
          </div>

          {/* Standard Plan */}
          <div className="pricing-card border-solar-green relative transform scale-105 z-10">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-solar-green text-black px-4 py-1">Most Popular</Badge>
            </div>
            <Badge className="absolute -top-3 right-4 bg-solar-blue">Standard</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">Standard Plan</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">$3,000</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">500W panel</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">1,500Wh power station</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">2,000W inverter</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">10-year warranty</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">1-year maintenance</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Installation included</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h4 className="text-white font-semibold mb-3">Usage:</h4>
              <div className="space-y-2 text-gray-300 mb-4">
                <div className="flex items-center">
                  <Freezer size={18} className="text-solar-green mr-2" />
                  <span>Runs a medium freezer for 8 hours</span>
                </div>
                <div className="flex items-center">
                  <Fan size={18} className="text-solar-green mr-2" />
                  <span>2 fans and 1 bulb for 10 hours</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-solar-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Charges a laptop all day</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-solar-green hover:bg-solar-green/90 text-black">
              Get Started
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card">
            <Badge className="absolute -top-3 right-4 bg-solar-blue">Premium</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">$6,500</span>
              <span className="text-gray-400 ml-2">one-time</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">800W panel</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">3,000Wh power station</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">5,000W inverter</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">25-year warranty</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">24/7 support</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Scalable system</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-solar-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-300">Installation included</span>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-6 mb-6">
              <h4 className="text-white font-semibold mb-3">Usage:</h4>
              <div className="space-y-2 text-gray-300 mb-4">
                <div className="flex items-center">
                  <Freezer size={18} className="text-solar-green mr-2" />
                  <span>Keeps a large fridge running 12+ hours</span>
                </div>
                <div className="flex items-center">
                  <Fan size={18} className="text-solar-green mr-2" />
                  <span>Powers 3 fans, 4 bulbs</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-solar-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Charges multiple devices</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-solar-green hover:bg-solar-green/90 text-black">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
