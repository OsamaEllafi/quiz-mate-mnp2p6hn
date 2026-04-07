import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-black text-lg">Q</span>
              </div>
              <span className="font-display font-bold text-xl text-text tracking-tight">Quiz Mate</span>
            </Link>
            <p className="text-text/60 font-body text-sm leading-relaxed mb-6">
              Making studying for exams playful, colorful, and highly effective. Turn notes into interactive tools in seconds.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'TikTok'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-text/70 hover:bg-secondary hover:text-primary transition-colors">
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-text mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-text/60 font-body">
              <li><Link to="/quick-quiz" className="hover:text-secondary transition-colors">Quick Quiz</Link></li>
              <li><Link to="/flash-cards" className="hover:text-secondary transition-colors">Flash Cards</Link></li>
              <li><Link to="/subscription-plans" className="hover:text-secondary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-text/60 font-body">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-text mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-text/60 font-body">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-text/40 font-body">
          <p>© {new Date().getFullYear()} Quiz Mate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-text/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
