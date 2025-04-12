import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Value from '../components/Value/Value';
import Stats from '../components/Stats/Stats';
import Features from '../components/Features/Features';
import Services from '../components/Services/Services';
import Pricing from '../components/Pricing/Pricing';

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <About />
      <Value />
      <Stats />
      <Features />
      <Services />
      <Pricing />
    </div>
  );
}
