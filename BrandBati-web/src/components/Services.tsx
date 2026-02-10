/**
 * Services Section — Brandbati
 * Showcases three core service pillars with animated cards.
 */

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Brand Identity",
    description: "Craft a distinctive brand that resonates. From logo design to complete visual guidelines and positioning strategy.",
    features: ["Logo Design", "Visual Guidelines", "Brand Strategy", "Identity Systems"],
    color: "teal",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Content Marketing",
    description: "Engage your audience with compelling content strategies across all platforms — social media, video, and beyond.",
    features: ["Social Media Management", "Video Editing", "Content Strategy", "Copywriting"],
    color: "yellow",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Solutions",
    description: "Supercharge your operations with custom AI integrations — chatbots, CRM automation, and intelligent workflows.",
    features: ["AI Chatbots", "CRM Setup", "Workflow Automation", "AI Integration"],
    color: "teal",
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

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-white dot-pattern">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0 h-px glow-line" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-brand mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900">
            Everything You Need to{" "}
            <span className="text-gradient">Grow Digitally</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer end-to-end digital solutions — from brand creation to AI-powered automation — all under one roof.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-teal-brand/10 hover:border-teal-brand/20 hover:-translate-y-2"
            >
              {/* Card top accent bar */}
              <div
                className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${
                  index === 1
                    ? "bg-gradient-to-r from-yellow-brand to-yellow-light"
                    : "bg-gradient-to-r from-teal-brand to-teal-light"
                }`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 ${
                  index === 1
                    ? "bg-yellow-brand/10 text-yellow-dark group-hover:bg-yellow-brand/20"
                    : "bg-teal-50 text-teal-brand group-hover:bg-teal-100"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      index === 1
                        ? "bg-yellow-brand/10 text-yellow-dark"
                        : "bg-teal-50 text-teal-brand"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow link */}
              <div className="mt-6 pt-6 border-t border-gray-50">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                    index === 1
                      ? "text-yellow-dark hover:text-yellow-brand"
                      : "text-teal-brand hover:text-teal-dark"
                  }`}
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
