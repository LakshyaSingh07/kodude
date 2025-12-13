import React from 'react';
import { Code, Palette, Smartphone, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed to provide exceptional user experiences across all devices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business thrive in the modern digital landscape.',
    },
  ];

  return (
    <div className="px-6 md:px-12 py-20" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            What We Do Best
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help bring your vision to life and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-linear-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
