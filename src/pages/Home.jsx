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
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="container-fluid">
      <Hero />
      <div id="about">
        <About />
      </div>
      <Commitment />
      <Stats />
      <Features />
      <div id="services">
        <Services />
      </div>
      <Pricing />
      <FaqSection />
      <div id="portfolio">
        <Portfolio />
      </div>
      <Testimonials />
      <div id="team">
        <Team />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
