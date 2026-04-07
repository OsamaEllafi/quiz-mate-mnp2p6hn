import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="py-32 px-4 bg-shift-section relative" data-color="#121212">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-text/70 font-body">Have questions? We're here to help.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary p-10 md:p-14 rounded-[2.5rem] border border-white/5 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-text/80 font-body font-bold ml-2">Name</label>
              <input type="text" placeholder="John Doe" className="bg-[#121212] border border-gray-700 rounded-2xl px-6 py-4 text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text/80 font-body font-bold ml-2">Email</label>
              <input type="email" placeholder="john@college.edu" className="bg-[#121212] border border-gray-700 rounded-2xl px-6 py-4 text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-10">
            <label className="text-text/80 font-body font-bold ml-2">Message</label>
            <textarea rows="5" placeholder="How can we help you?" className="bg-[#121212] border border-gray-700 rounded-2xl px-6 py-4 text-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-5 bg-secondary text-primary font-display font-bold text-xl rounded-2xl hover:bg-accent hover:scale-[1.02] transition-all">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
