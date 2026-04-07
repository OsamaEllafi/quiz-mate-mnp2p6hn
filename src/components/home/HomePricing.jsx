import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Up to 5 quizzes/month", "Basic flashcards", "Standard support"],
    buttonText: "Start Free",
    accent: "bg-primary",
    border: "border-white/10"
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    features: ["Unlimited quizzes", "Smart spaced-repetition", "PDF Exports", "Priority support"],
    buttonText: "Get Pro",
    accent: "bg-secondary text-primary",
    border: "border-secondary scale-105 shadow-[0_0_30px_rgba(255,111,97,0.2)]",
    popular: true
  },
  {
    name: "Team",
    price: "$19.99",
    period: "/mo",
    features: ["Everything in Pro", "Collaborative study rooms", "Shared folders", "Admin dashboard"],
    buttonText: "Create Team",
    accent: "bg-primary",
    border: "border-white/10"
  }
];

export default function HomePricing() {
  return (
    <section className="py-32 px-4 bg-shift-section" data-color="#1F2937">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-text mb-6">
            Simple, <span className="text-accent">Transparent</span> Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-[#121212] rounded-3xl p-8 border-2 ${plan.border} relative flex flex-col h-full`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-display font-bold text-text mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-text">{plan.price}</span>
                {plan.period && <span className="text-text/50 font-body">{plan.period}</span>}
              </div>

              <ul className="flex-grow mb-10 space-y-4">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-text/80 font-body">
                    <span className="text-secondary mr-3">✔</span> {feat}
                  </li>
                ))}
              </ul>

              <Link to="/subscription-plans" className={`w-full py-4 text-center rounded-xl font-display font-bold text-lg transition-transform hover:scale-105 ${plan.accent === 'bg-primary' ? 'bg-[#1a1a1a] text-text hover:bg-white/10' : plan.accent}`}>
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
