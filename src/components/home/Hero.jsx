import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    // 3D Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(bgRef.current, {
        rotationY: xPos,
        rotationX: -yPos,
        ease: "power2.out",
        duration: 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] pt-20">
      {/* 3D Animated Background Elements */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none perspective-[1000px]"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full bg-secondary mix-blend-screen filter blur-[80px] opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[10%] w-40 h-40 md:w-80 md:h-80 rounded-full bg-accent mix-blend-screen filter blur-[100px] opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-24 h-24 md:w-48 md:h-48 rounded-full bg-[#00E5FF] mix-blend-screen filter blur-[60px] opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-secondary font-display font-bold tracking-wider uppercase text-sm">
              Study Smarter, Not Harder
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-text leading-[1.1] tracking-tight mb-8">
            Acing Exams <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary animate-gradient-x">
              Made Playful.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text/80 font-body max-w-3xl mx-auto mb-12 leading-relaxed">
            Turn your boring lecture slides into interactive quizzes and flashcards in seconds. Join the revolution of colorful, engaging learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/subscription-plans">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-secondary text-primary font-display font-bold text-2xl rounded-full shadow-[0_0_30px_rgba(255,111,97,0.4)] hover:shadow-[0_0_50px_rgba(255,111,97,0.6)] transition-shadow"
              >
                Get Started Free
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border-2 border-white/20 text-text font-display font-bold text-2xl rounded-full hover:bg-white/5 transition-colors"
            >
              See How It Works
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1F2937] to-transparent opacity-50 pointer-events-none"></div>
    </section>
  );
}
