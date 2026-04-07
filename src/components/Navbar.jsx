import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Quick Quiz', path: '/quick-quiz' },
    { name: 'Flash Cards', path: '/flash-cards' },
    { name: 'Subscription Plans', path: '/subscription-plans' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
              <span className="text-primary font-display font-black text-xl">Q</span>
            </div>
            <span className="font-display font-bold text-2xl text-text tracking-tight">Quiz Mate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-display font-medium transition-colors"
                >
                  <span className={`relative z-10 ${isActive ? 'text-text' : 'text-text/70 hover:text-text'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-lg z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            <button className="px-6 py-2.5 bg-secondary text-primary font-display font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,111,97,0.3)]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
