/**
 * Hero Section — Brandbati
 * High-impact hero with animated headline, dual CTAs,
 * and decorative geometric elements.
 */

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white grid-pattern"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb — top right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-brand/10 to-teal-light/5 blur-3xl" />
        {/* Small gradient orb — bottom left */}
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow-brand/10 to-yellow-light/5 blur-3xl" />
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[15%] w-16 h-16 border-2 border-teal-brand/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-[10%] w-12 h-12 border-2 border-yellow-brand/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[20%] w-3 h-3 bg-teal-brand/30 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[25%] w-4 h-4 bg-yellow-brand/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-brand/20 bg-teal-50/60 px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-brand opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-brand" />
            </span>
            <span className="text-sm font-medium text-teal-brand">
              Human Creativity × AI Power
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight tracking-tight text-gray-900"
          >
            Your Global Partner for{" "}
            <span className="text-gradient">Digital Growth</span>
            {" "}&{" "}
            <span className="text-gradient">AI Automation</span>.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-inter"
          >
            We combine human creativity with AI power to build brands that stand
            out globally. From strategy to execution — we've got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary — Explore Services */}
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-brand to-teal-light px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-brand/25 transition-all duration-300 hover:shadow-teal-brand/40 hover:scale-105 pulse-glow"
            >
              Explore Services
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Secondary — Learn AI Skills */}
            <a
              href="#academy"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-yellow-brand px-8 py-4 text-base font-semibold text-yellow-dark bg-yellow-brand/5 transition-all duration-300 hover:bg-yellow-brand/15 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Learn AI Skills
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>50+ Brands Built</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>AI-Powered Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Global Clients</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
