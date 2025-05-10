
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-solar-dark">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Have Questions? We Have Answers!</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are answers to some of the most common questions we receive about our solar solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-gray-700 rounded-lg bg-solar-dark-gray overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-solar-green hover:no-underline">
                How long will the system last, and what happens if it breaks?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Our solar panels are designed to last over 25 years with minimal reduction in efficiency. All components come with respective warranties (5, 10, or 25 years depending on your plan). If any part malfunctions within the warranty period, we'll repair or replace it at no additional cost. Beyond the warranty, we offer affordable maintenance and repair services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-700 rounded-lg bg-solar-dark-gray overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-solar-green hover:no-underline">
                What if I need more power later—can I upgrade?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Yes! All our systems are designed with scalability in mind. You can add more panels or increase battery capacity as your needs grow. The Premium plan is especially designed for easy expansion. Our technicians can assess your current setup and recommend the most cost-effective way to increase your system's capacity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-700 rounded-lg bg-solar-dark-gray overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-solar-green hover:no-underline">
                How does weather affect my solar system's performance?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Our solar systems are designed to perform in various weather conditions. While sunny days produce the most power, our panels still generate electricity on cloudy days, just at a reduced capacity (typically 10-25% of rated output). The battery storage component ensures you have power even during extended periods of bad weather. Our systems are also built to withstand heavy rain, wind, and hail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-700 rounded-lg bg-solar-dark-gray overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-white hover:text-solar-green hover:no-underline">
                How long does it take to get my solar system installed?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                From the time you place an order, the typical timeline is 2-3 weeks for assessment and scheduling, followed by 1-2 days for actual installation. Basic and Standard systems can often be installed in a single day, while Premium systems might take 1-2 days depending on complexity. After installation, we conduct thorough testing and provide you with a complete walkthrough of your new system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
