import React, { useEffect, useRef } from 'react';
import { BookOpen, Users, Sparkles, CheckCircle2, XCircle, Star, Award, Infinity, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SubscriptionPlans = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Stats Entrance
      gsap.from('.stat-card', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        delay: 0.5,
      });

      // Pricing Cards Entrance
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: '.pricing-section',
          start: 'top 75%',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // FAQ Section Entrance
      gsap.from('.faq-section', {
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#121212] text-[#E0E0E0] font-body flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col items-center px-6 md:px-24 pt-16 pb-24">

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="hero-text text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-[#FF6F61]">Unlock Your Potential.</span><br />
            <span className="text-[#F9A825]">Pick Your Path.</span>
          </h1>
          <p className="hero-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Join the Tactile Playground where learning feels like play.<br />
            Choose a plan that scales with your curiosity.
          </p>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-32">
          {/* Stat 1 */}
          <div className="stat-card bg-[#1F2937] bg-opacity-40 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-800/50">
            <div className="bg-[#FF6F61]/10 p-4 rounded-2xl mb-4">
              <BookOpen className="w-8 h-8 text-[#FF6F61]" />
            </div>
            <h3 className="text-4xl font-display font-bold text-white mb-1">50k+</h3>
            <p className="text-xs text-gray-400 tracking-widest font-semibold uppercase">Interactive Quizzes</p>
          </div>
          {/* Stat 2 */}
          <div className="stat-card bg-[#1F2937] bg-opacity-40 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-800/50">
            <div className="bg-[#F9A825]/10 p-4 rounded-2xl mb-4">
              <Users className="w-8 h-8 text-[#F9A825]" />
            </div>
            <h3 className="text-4xl font-display font-bold text-white mb-1">10k+</h3>
            <p className="text-xs text-gray-400 tracking-widest font-semibold uppercase">Study Groups</p>
          </div>
          {/* Stat 3 */}
          <div className="stat-card bg-[#1F2937] bg-opacity-40 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg border border-gray-800/50">
            <div className="bg-[#D946EF]/10 p-4 rounded-2xl mb-4">
              <Sparkles className="w-8 h-8 text-[#D946EF]" />
            </div>
            <h3 className="text-4xl font-display font-bold text-white mb-1">99%</h3>
            <p className="text-xs text-gray-400 tracking-widest font-semibold uppercase">Success Rate</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-section flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 w-full max-w-6xl mb-32">

          {/* Basic Plan */}
          <div className="pricing-card w-full lg:w-1/3 bg-[#18181b] rounded-[2rem] p-10 flex flex-col border border-gray-800 shadow-xl mt-8 mb-8">
            <h3 className="text-2xl font-display font-bold text-[#F9A825] mb-2">Basic</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-display font-bold text-white">$0</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>

            <ul className="flex-grow space-y-5 mb-10">
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9A825] mr-3 shrink-0" />
                <span>Access to 100+ quizzes</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#F9A825] mr-3 shrink-0" />
                <span>Community Forum Access</span>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-500">
                <XCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" />
                <span>No Group Participation</span>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-500">
                <XCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" />
                <span>Limited Storage</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-[#27272a] hover:bg-[#3f3f46] text-white transition-colors duration-300">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card w-full lg:w-1/3 bg-[#18181b] rounded-[2.5rem] p-10 flex flex-col border-2 border-[#FF6F61] shadow-[0_0_40px_rgba(255,111,97,0.15)] relative transform lg:-translate-y-4 z-10">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-[#FF6F61] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                BEST VALUE
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-[#FF6F61] mb-2">Pro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-6xl font-display font-bold text-white">$29</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>

            <ul className="flex-grow space-y-5 mb-10">
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#FF6F61] mr-3 shrink-0" />
                <span>Unlimited AI Quizzes</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#FF6F61] mr-3 shrink-0" />
                <span>50 Study Groups</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#FF6F61] mr-3 shrink-0" />
                <span>Personalized Roadmap</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#FF6F61] mr-3 shrink-0" />
                <span>Offline Access</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-[#FF6F61] hover:bg-opacity-90 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,111,97,0.4)]">
              Get Pro Access
            </button>
          </div>

          {/* Elite Plan */}
          <div className="pricing-card w-full lg:w-1/3 bg-[#18181b] rounded-[2rem] p-10 flex flex-col border border-gray-800 shadow-xl mt-8 mb-8">
            <h3 className="text-2xl font-display font-bold text-[#F9A825] mb-2">Elite</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-display font-bold text-white">$79</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>

            <ul className="flex-grow space-y-5 mb-10">
              <li className="flex items-center text-sm font-medium">
                <Star className="w-5 h-5 text-[#F9A825] mr-3 shrink-0 fill-[#F9A825]" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <Award className="w-5 h-5 text-[#F9A825] mr-3 shrink-0" />
                <span>1-on-1 AI Mentorship</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <Award className="w-5 h-5 text-[#F9A825] mr-3 shrink-0" />
                <span>Certificate of Completion</span>
              </li>
              <li className="flex items-center text-sm font-medium">
                <Infinity className="w-5 h-5 text-[#F9A825] mr-3 shrink-0" />
                <span>Unlimited Everything</span>
              </li>
            </ul>

            <button className="w-full py-4 rounded-xl font-bold bg-[#27272a] hover:bg-[#3f3f46] text-white transition-colors duration-300">
              Go Elite
            </button>
          </div>

        </section>

        {/* FAQ Section */}
        <section className="faq-section w-full max-w-5xl bg-[#1A1E24] rounded-3xl flex flex-col md:flex-row overflow-hidden border-l-[6px] border-l-[#FF6F61] shadow-2xl">
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-display font-bold text-white mb-6 leading-snug">
              Still have questions?<br />
              Our experts are in the<br />
              playground.
            </h2>
            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Join over 250,000 learners today. Start your journey with a 7-day free trial on any premium plan.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-8 py-3 bg-[#2A323C] hover:bg-[#343d4a] rounded-full text-white font-semibold text-sm transition-colors">
                FAQs
              </button>
              <button className="flex items-center text-[#FF6F61] font-semibold text-sm hover:underline group">
                Talk to Support
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#252A33] relative min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
             {/* Decorative Background Elements */}
             <div className="absolute inset-0 opacity-10 flex flex-col justify-center items-center -rotate-12 scale-150 pointer-events-none">
                <span className="text-6xl font-display font-bold text-white whitespace-nowrap mb-4">LEARNING</span>
                <span className="text-6xl font-display font-bold text-white whitespace-nowrap">LEARNING</span>
             </div>

             {/* Simple Laptop Graphic representation */}
             <div className="relative z-10 w-full max-w-sm">
                <div className="bg-[#E0E0E0] rounded-t-xl p-2 pb-0 aspect-video relative shadow-2xl border-4 border-[#4B5563]">
                  <div className="bg-white w-full h-full rounded-sm"></div>
                </div>
                <div className="bg-[#9CA3AF] h-4 w-[110%] -ml-[5%] rounded-b-xl shadow-lg flex items-center justify-center">
                   <div className="w-16 h-1 bg-[#6B7280] rounded-full"></div>
                </div>
                {/* Papers and Cup decoration */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 transform rotate-12"></div>
                <div className="absolute -bottom-4 right-4 w-12 h-16 bg-[#F9A825]/20 rounded-md backdrop-blur-md border border-[#F9A825]/30 flex items-end justify-center pb-2">
                   <div className="w-1 h-6 bg-[#F9A825]/50 mx-0.5 rounded-full"></div>
                   <div className="w-1 h-8 bg-[#F9A825]/50 mx-0.5 rounded-full"></div>
                   <div className="w-1 h-5 bg-[#F9A825]/50 mx-0.5 rounded-full"></div>
                </div>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default SubscriptionPlans;