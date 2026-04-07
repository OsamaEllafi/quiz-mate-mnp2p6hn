import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Quiz Mate saved my life during finals week. The flashcards it generated from my organic chemistry notes were spot on.",
    author: "Sarah J.",
    role: "Pre-Med Student",
    color: "border-[#FF6F61]"
  },
  {
    quote: "I used to spend hours making my own practice tests. Now I just upload my PDFs and start studying immediately.",
    author: "Michael T.",
    role: "Computer Science Major",
    color: "border-[#F9A825]"
  },
  {
    quote: "The interface is so fun and colorful, it actually makes me want to study. Highly recommend the Pro plan!",
    author: "Emily R.",
    role: "Psychology Major",
    color: "border-[#00E5FF]"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 bg-shift-section" data-color="#1F2937">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
            Loved by <span className="text-accent">Students</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-[#121212] p-10 rounded-3xl border-t-4 ${t.color} shadow-xl relative`}
            >
              <div className="text-4xl mb-6 opacity-50">"</div>
              <p className="text-lg text-text/80 font-body mb-8 italic">
                {t.quote}
              </p>
              <div>
                <h4 className="text-xl font-display font-bold text-text">{t.author}</h4>
                <p className="text-text/50 font-body text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
