import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "Alex Chen", role: "Founder & CEO", avatar: "👨‍💻", bg: "bg-[#FF6F61]" },
  { name: "Sam Taylor", role: "Lead Designer", avatar: "🎨", bg: "bg-[#F9A825]" },
  { name: "Jordan Lee", role: "CTO", avatar: "🚀", bg: "bg-[#00E5FF]" },
  { name: "Casey Smith", role: "Community Lead", avatar: "🌟", bg: "bg-[#B388FF]" }
];

export default function Team() {
  return (
    <section className="py-32 px-4 bg-shift-section relative" data-color="#121212">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
            Meet the <span className="text-secondary">Minds</span>
          </h2>
          <p className="text-xl text-text/70 font-body max-w-2xl mx-auto">
            We are a group of former college students on a mission to make studying less awful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="bg-primary rounded-3xl p-8 text-center border border-white/5 group transition-colors hover:border-white/20"
            >
              <div className={`w-32 h-32 mx-auto rounded-full ${member.bg} flex items-center justify-center text-6xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                {member.avatar}
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-2">{member.name}</h3>
              <p className="text-text/60 font-body">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
