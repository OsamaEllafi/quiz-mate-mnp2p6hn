import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-shift-section" data-color="#FF6F61">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
            Ready to Ace Your Next Exam?
          </h2>
          <p className="text-xl text-text/80 font-body max-w-2xl mx-auto mb-10">
            Join thousands of college students who have transformed their study habits with Quiz Mate.
          </p>
          <button className="px-10 py-5 bg-accent text-primary font-display font-bold text-2xl rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,168,37,0.4)]">
            Create Free Account
          </button>
        </motion.div>
      </div>
    </section>
  );
}
