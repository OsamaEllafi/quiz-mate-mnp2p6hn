import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Students", value: 50, suffix: "k+" },
  { label: "Quizzes Generated", value: 2, suffix: "M+" },
  { label: "Universities", value: 400, suffix: "+" },
  { label: "Average Grade Lift", value: 15, suffix: "%" }
];

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-value');

      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));

        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 bg-shift-section relative overflow-hidden" data-color="#121212">
      <div className="absolute inset-0 border-y border-white/5 bg-[#1a1a1a] transform -skew-y-2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl md:text-7xl font-display font-bold text-accent mb-2 flex items-center">
                <span className="stat-value" data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-lg text-text/80 font-body font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
