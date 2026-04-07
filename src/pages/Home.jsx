import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Team from '../components/home/Team';
import HomePricing from '../components/home/HomePricing';
import CTA from '../components/home/CTA';
import ContactForm from '../components/home/ContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Background color shifting effect based on section
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.bg-shift-section');

      sections.forEach((section) => {
        const color = section.getAttribute('data-color');

        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => gsap.to(document.body, { backgroundColor: color, duration: 1 }),
          onEnterBack: () => gsap.to(document.body, { backgroundColor: color, duration: 1 }),
        });
      });
    }, mainRef);

    return () => {
      ctx.revert();
      // Reset body background when unmounting
      document.body.style.backgroundColor = '#121212';
    };
  }, []);

  return (
    <main ref={mainRef} className="overflow-hidden">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Team />
      <HomePricing />
      <CTA />
      <ContactForm />
    </main>
  );
}
