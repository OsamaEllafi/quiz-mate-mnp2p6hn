import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Instant Quizzes",
    description: "Upload your syllabus or lecture notes and we'll instantly generate comprehensive practice quizzes.",
    icon: "🎯",
    color: "bg-[#FF6F61]"
  },
  {
    title: "Smart Flashcards",
    description: "Automatically extract key terms and definitions to create dynamic, spaced-repetition flashcards.",
    icon: "s",
    color: "bg-[#F9A825]"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your study streaks and pinpoint exactly which topics need more review before the big exam.",
    icon: "📈",
    color: "bg-[#00E5FF]"
  },
  {
    title: "Export & Print",
    description: "Prefer studying on paper? Easily export your materials to PDF or print them directly.",
    icon: "🖨️",
    color: "bg-[#B388FF]"
  }
];

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 relative bg-shift-section" data-color="#1F2937">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-text mb-6 tracking-tight">
            Supercharge Your <br/> <span className="text-secondary">Study Sessions</span>
          </h2>
          <p className="text-xl text-text/70 font-body max-w-2xl mx-auto">
            Everything you need to turn overwhelming lectures into manageable, interactive study tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="feature-card bg-[#121212] rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} rounded-full mix-blend-screen filter blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>

              <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center text-4xl mb-8 shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="text-3xl font-display font-bold text-text mb-4">
                {feature.title}
              </h3>

              <p className="text-lg text-text/70 font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
