import React from 'react';
import { Element } from 'react-scroll';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

function HomePage() {
  return (
    <div>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="features">
        <Features />
      </Element>
      <Element name="how-it-works">
        <HowItWorks />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="faq">
        <FAQ />
      </Element>
    </div>
  );
}

export default HomePage;
