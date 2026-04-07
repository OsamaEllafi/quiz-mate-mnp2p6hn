import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { UploadCloud, Play, ArrowRight, Brain, Globe, Code, Sparkles } from 'lucide-react';

const FlashCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stagger-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.deck-card', {
        scrollTrigger: {
          trigger: '.decks-container',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.split-card', {
        scrollTrigger: {
          trigger: '.split-container',
          start: 'top 85%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#121212] pt-32 pb-20 px-6 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 stagger-anim">
          <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-[#1F2937]/50 text-[#F9A825] text-xs font-bold tracking-[0.2em] mb-8">
            POWERED BY KINETIC AI
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[1.1]">
            Master Anything with <br />
            <span className="text-[#F9A825]">FlashPlay</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Transform your messy lecture notes, dense PDFs, and sprawling research into high-retention flashcard decks in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F9A825] text-[#121212] px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto transition-colors hover:bg-white"
            >
              Start Generating
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1F2937] border border-white/5 text-[#F9A825] px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto transition-colors hover:bg-gray-800"
            >
              Explore Community
            </motion.button>
          </div>
        </div>

        {/* Upload Area */}
        <div className="max-w-5xl mx-auto mb-24 stagger-anim">
          <div className="border-[3px] border-dashed border-[#F9A825]/30 rounded-[3rem] p-16 flex flex-col items-center justify-center text-center bg-[#1F2937]/30 relative overflow-hidden group hover:border-[#F9A825]/60 transition-colors duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9A825]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-20 h-20 bg-[#F9A825]/10 text-[#F9A825] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <UploadCloud size={40} />
            </div>
            <h3 className="text-3xl font-bold font-display mb-3">Drop your lectures or PDFs here</h3>
            <p className="text-gray-400 mb-8 font-body text-lg">Maximum file size: 50MB. Supports PDF, DOCX, and TXT.</p>
            <div className="flex gap-4">
              <span className="px-4 py-1.5 bg-black/60 text-xs font-bold rounded-full text-gray-300 tracking-wider">#AI-READY</span>
              <span className="px-4 py-1.5 bg-black/60 text-xs font-bold rounded-full text-gray-300 tracking-wider">#QUICK-SYNC</span>
            </div>
          </div>
        </div>

        {/* Recent Decks */}
        <div className="mb-24 decks-container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 stagger-anim">
            <div>
              <h2 className="text-4xl font-display font-bold mb-3">Your Recent Decks</h2>
              <p className="text-gray-400 font-body text-lg">Continue where you left off with your AI-generated sets.</p>
            </div>
            <button className="flex items-center text-[#F9A825] font-bold hover:underline mt-4 sm:mt-0 group text-lg tracking-wide">
              View All <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div whileHover={{ y: -8 }} className="deck-card bg-[#1F2937]/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col min-h-[300px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-14 h-14 bg-[#F9A825]/10 text-[#F9A825] rounded-full flex items-center justify-center">
                  <Brain size={28} />
                </div>
                <span className="bg-black/40 px-4 py-1.5 text-xs font-bold rounded-full text-gray-400 tracking-wider">42 CARDS</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold font-display mb-2">Advanced Neurobiology<br/>Phase II</h3>
                <p className="text-gray-500 text-sm mb-8 font-body">Last edited 2 hours ago</p>

                <div className="flex items-center gap-5">
                  <button className="w-12 h-12 bg-[#F9A825] text-[#121212] rounded-full flex items-center justify-center pl-1 hover:scale-105 transition-transform shadow-lg shadow-[#F9A825]/20">
                    <Play size={20} fill="currentColor" />
                  </button>
                  <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#F9A825] w-[65%] rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-[#F9A825]">65%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div whileHover={{ y: -8 }} className="deck-card bg-[#1F2937]/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col min-h-[300px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-14 h-14 bg-[#FF6F61]/10 text-[#FF6F61] rounded-full flex items-center justify-center">
                  <Globe size={28} />
                </div>
                <span className="bg-black/40 px-4 py-1.5 text-xs font-bold rounded-full text-gray-400 tracking-wider">128 CARDS</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold font-display mb-2">Modern European<br/>Architecture</h3>
                <p className="text-gray-500 text-sm mb-8 font-body">Last edited Yesterday</p>

                <div className="flex items-center gap-5">
                  <button className="w-12 h-12 bg-[#FF6F61] text-white rounded-full flex items-center justify-center pl-1 hover:scale-105 transition-transform shadow-lg shadow-[#FF6F61]/20">
                    <Play size={20} fill="currentColor" />
                  </button>
                  <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF6F61] w-[25%] rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-[#FF6F61]">25%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div whileHover={{ y: -8 }} className="deck-card bg-[#1F2937]/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col min-h-[300px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-14 h-14 bg-[#E0E0E0]/10 text-[#E0E0E0] rounded-full flex items-center justify-center">
                  <Code size={28} />
                </div>
                <span className="bg-black/40 px-4 py-1.5 text-xs font-bold rounded-full text-gray-400 tracking-wider">56 CARDS</span>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold font-display mb-2">Rust System Fundamentals</h3>
                <p className="text-gray-500 text-sm mb-8 font-body">Created 3 days ago</p>

                <div className="flex items-center gap-5">
                  <button className="w-12 h-12 bg-[#E0E0E0] text-[#121212] rounded-full flex items-center justify-center pl-1 hover:scale-105 transition-transform shadow-lg shadow-white/10">
                    <Play size={20} fill="currentColor" />
                  </button>
                  <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E0E0E0] w-full rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-[#E0E0E0]">100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 split-container">
          {/* Community Spotlight */}
          <div className="split-card lg:col-span-3 bg-[#1F2937]/50 border border-white/5 rounded-[3rem] p-12 flex flex-col md:flex-row items-center overflow-hidden relative min-h-[380px]">
            <div className="flex-1 z-10">
              <h2 className="text-4xl font-display font-bold mb-5">Community Spotlight</h2>
              <p className="text-gray-300 mb-8 max-w-sm text-lg font-body leading-relaxed">
                Discover the most efficient decks created by our global community of top-tier learners.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F9A825] text-[#121212] px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#F9A825]/20"
              >
                Browse Library
              </motion.button>
            </div>

            {/* 3D abstract shapes representation */}
            <div className="w-full md:w-1/2 h-48 md:h-full mt-10 md:mt-0 relative flex items-center justify-center">
               <div className="absolute w-40 h-40 bg-[#F9A825] rounded-full mix-blend-screen filter blur-[70px] opacity-20"></div>
               <div className="relative w-full h-full flex items-center justify-center">
                 <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#1F2937] to-[#F9A825] shadow-2xl absolute animate-[float_4s_ease-in-out_infinite] border border-white/10 z-20"></div>
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#121212] to-gray-400 shadow-2xl absolute -right-6 top-12 animate-[float_5s_ease-in-out_infinite_reverse] border border-white/10 z-10"></div>
                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 shadow-2xl absolute left-0 bottom-12 animate-[float_3s_ease-in-out_infinite] border border-white/10 z-30"></div>
               </div>
            </div>
          </div>

          {/* Smart Revision */}
          <div className="split-card lg:col-span-2 bg-[#E05B56] rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-center min-h-[380px]">
            {/* Decorative BG element */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[60px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

            <div className="z-10">
              <Sparkles className="text-white mb-6" size={40} />
              <h2 className="text-4xl font-display font-bold mb-5 text-white">Smart Revision</h2>
              <p className="text-white/90 mb-10 font-body leading-relaxed text-lg">
                Our AI analyzes your performance and adjusts card delivery frequency for maximum retention.
              </p>

              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E05B56] flex items-center justify-center overflow-hidden z-40 bg-gray-200">
                    <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#E05B56] flex items-center justify-center overflow-hidden z-30 bg-gray-300">
                    <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#E05B56] flex items-center justify-center overflow-hidden z-20 bg-gray-400">
                    <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-[#E05B56] flex items-center justify-center text-xs font-bold text-white z-10">
                    +2k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlashCards;
