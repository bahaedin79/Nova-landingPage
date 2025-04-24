import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Commitment from '../components/Commitment/Commitment';
import Stats from '../components/Stats/Stats';
import Features from '../components/Features/Features';
import Services from '../components/Services/Services';
import Pricing from '../components/Pricing/Pricing';
import FaqSection from '../components/FaqSection/FaqSection';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Team from '../components/Team/Team';

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <About />
      <Commitment />
      <Stats />
      <Features />
      <Services />
      <Pricing />
      <FaqSection />
      <Portfolio />
      <Testimonials />
      <Team />
    </div>
  );
}
