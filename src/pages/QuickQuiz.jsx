import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function QuickQuiz() {
  const [questionsCount, setQuestionsCount] = useState(25);
  const [archetype, setArchetype] = useState('Multiple Choice');
  const [depth, setDepth] = useState('Foundational');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const archetypes = ['Multiple Choice', 'True / False', 'Short Answer', 'Flashcards'];

  const depths = [
    {
      id: 'Foundational',
      title: 'Foundational',
      desc: 'Perfect for broad concepts and initial memorization.',
      color: 'border-accent text-accent'
    },
    {
      id: 'Analytical',
      title: 'Analytical',
      desc: 'Focuses on relationships between complex data points.',
      color: 'border-transparent text-text'
    },
    {
      id: 'Expert',
      title: 'Expert',
      desc: 'Deep-dive critical thinking and application scenarios.',
      color: 'border-transparent text-text'
    }
  ];

  return (
    <main className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h4 className="text-accent font-display font-bold text-sm tracking-widest uppercase mb-4">
              AI-Powered Generation
            </h4>
            <h1 className="text-6xl md:text-7xl font-display font-bold text-text mb-6 leading-[1.1] tracking-tight">
              Turn your <span className="text-secondary italic">notes</span> into mastery.
            </h1>
            <p className="text-text/70 font-body text-lg md:text-xl leading-relaxed max-w-xl">
              Upload your lectures, PDFs, or research papers and let our neural engine synthesize complex topics into interactive study sessions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 mt-8 md:mt-0"
          >
            <button className="w-14 h-14 rounded-2xl bg-[#1A1A1A] flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
              <span className="text-secondary text-xl">📄</span>
            </button>
            <button className="w-14 h-14 rounded-2xl bg-[#1A1A1A] flex items-center justify-center hover:bg-[#222] transition-colors border border-white/5">
              <span className="text-accent text-xl">📑</span>
            </button>
          </motion.div>
        </div>

        {/* Drop Zone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full bg-[#161616] border-2 border-dashed border-white/10 rounded-[2.5rem] py-24 flex flex-col items-center justify-center text-center mb-12 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/10 transition-colors"></div>

          <div className="w-16 h-16 rounded-2xl bg-[#2A1C1A] flex items-center justify-center mb-6 relative z-10">
            <span className="text-secondary text-2xl">↑</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-text mb-3 relative z-10">
            Drop your knowledge here
          </h3>
          <p className="text-text/50 font-body mb-8 relative z-10">
            PDF, DOCX, or plain text files. Max 50MB per session.
          </p>
          <button className="px-8 py-3 bg-[#222] text-text font-display font-medium rounded-xl hover:bg-[#2A2A2A] transition-colors relative z-10 border border-white/5">
            Browse Files
          </button>
        </motion.div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Generation Parameters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#161616] rounded-[2rem] p-8 md:p-10 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="text-accent text-xl">🎛</span>
              <h3 className="text-2xl font-display font-bold text-text">Generation Parameters</h3>
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <span className="text-text/80 font-body">Number of Questions</span>
                <span className="text-accent font-display font-bold">{questionsCount}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={questionsCount}
                onChange={(e) => setQuestionsCount(e.target.value)}
                className="w-full h-2 bg-[#222] rounded-lg appearance-none cursor-pointer accent-secondary"
              />
              <div className="flex justify-between text-xs text-text/40 mt-3 font-body">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            <div>
              <span className="text-text/80 font-body block mb-5">Question Archetype</span>
              <div className="grid grid-cols-2 gap-4">
                {archetypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setArchetype(type)}
                    className={`py-4 px-4 rounded-2xl font-body text-sm font-medium transition-all ${
                      archetype === type
                        ? 'bg-[#2A1C1A] text-text border border-secondary'
                        : 'bg-[#1A1A1A] text-text/60 border border-transparent hover:bg-[#222]'
                    }`}
                  >
                    {archetype === type && <span className="text-secondary mr-2">✓</span>}
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Intelligence Depth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#161616] rounded-[2rem] p-8 md:p-10 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[#B388FF] text-xl">🧠</span>
              <h3 className="text-2xl font-display font-bold text-text">Intelligence Depth</h3>
            </div>

            <div className="flex flex-col gap-4">
              {depths.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDepth(d.id)}
                  className={`flex flex-col text-left p-6 rounded-2xl transition-all border ${
                    depth === d.id
                      ? 'bg-[#1A1A12] border-accent/50 shadow-[0_0_15px_rgba(249,168,37,0.1)]'
                      : 'bg-[#1A1A1A] border-transparent hover:bg-[#222]'
                  }`}
                >
                  <span className={`font-display font-bold mb-2 ${depth === d.id ? 'text-accent' : 'text-text'}`}>
                    {d.title}
                  </span>
                  <span className="text-text/60 font-body text-sm">
                    {d.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Generate Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center mb-32"
        >
          <button className="px-12 py-6 bg-secondary text-primary font-display font-black text-2xl tracking-widest uppercase rounded-full hover:scale-105 hover:bg-white transition-all shadow-[0_0_30px_rgba(255,111,97,0.3)] mb-6 flex items-center gap-3">
            Generate Quiz <span className="text-3xl">⚡</span>
          </button>
          <div className="flex items-center gap-2 text-text/60 font-body text-sm">
            <span className="text-green-500">✓</span>
            AI engine warmed up and ready to synthesize.
          </div>
        </motion.div>

        {/* Features Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A1C1A] flex items-center justify-center text-secondary text-xl">
              ⚡
            </div>
            <h4 className="font-display font-bold text-xl text-text">Instant Generation</h4>
            <p className="text-text/60 font-body leading-relaxed text-sm">
              Processing 10,000 words per second. Your quiz is ready in moments, not minutes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2A2A1A] flex items-center justify-center text-accent text-xl">
              🔗
            </div>
            <h4 className="font-display font-bold text-xl text-text">Cross-Referenced</h4>
            <p className="text-text/60 font-body leading-relaxed text-sm">
              Our AI references global academic datasets to ensure factual accuracy and depth.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1C1A2A] flex items-center justify-center text-[#B388FF] text-xl">
              ⏱
            </div>
            <h4 className="font-display font-bold text-xl text-text">Smart Spacing</h4>
            <p className="text-text/60 font-body leading-relaxed text-sm">
              Generated questions prioritize your weak areas using spaced repetition logic.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
