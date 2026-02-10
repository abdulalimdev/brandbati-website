/**
 * Why Choose Us Section — Brandbati
 * Highlights three core differentiators with animated counters
 * and icon-driven cards.
 */

import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Hybrid Team (Human + AI)",
    description: "Our unique blend of human strategists and AI-powered tools delivers faster, smarter, and more scalable results for every project.",
    stat: "10×",
    statLabel: "Faster Delivery",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Result Oriented",
    description: "We measure success by outcomes, not activities. Every strategy is backed by data, KPIs, and transparent reporting you can trust.",
    stat: "95%",
    statLabel: "Client Satisfaction",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Standards",
    description: "We apply international best practices and cutting-edge methodologies to deliver world-class digital experiences for clients everywhere.",
    stat: "15+",
    statLabel: "Countries Served",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-teal-50/50 to-white overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-brand/5 rounded-full blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-brand mb-4">
            Why Brandbati
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900">
            Why Top Brands{" "}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're not just another agency. We're your strategic partner in navigating the digital-first world.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={cardVariants}
              className="group relative text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-brand/10 transition-all duration-500 hover:-translate-y-2 hover:border-teal-brand/20"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-brand/10 to-teal-light/10 text-teal-brand mb-6 transition-all duration-300 group-hover:scale-110 group-hover:from-teal-brand group-hover:to-teal-light group-hover:text-white">
                {reason.icon}
              </div>

              {/* Stat */}
              <div className="text-4xl font-bold font-poppins text-teal-brand mb-1">
                {reason.stat}
              </div>
              <div className="text-sm text-gray-400 mb-4">{reason.statLabel}</div>

              {/* Title */}
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
