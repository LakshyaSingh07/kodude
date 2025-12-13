import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonial';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  return (
    <div className="bg-[#05070f] min-h-screen text-white">
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
