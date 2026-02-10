/**
 * Academy Section — Brandbati
 * Dark-themed section showcasing AI training courses
 * with glowing accent effects.
 */

import { motion } from "framer-motion";

const courses = [
  {
    title: "Mastering Prompt Engineering & AI Agents",
    description: "Learn to craft powerful prompts, build autonomous AI agents, and leverage cutting-edge models for real-world business applications.",
    badge: "Flagship Course",
    features: [
      "Advanced Prompt Techniques",
      "Building AI Agents from Scratch",
      "Real-World Case Studies",
      "Certificate of Completion",
    ],
    highlight: true,
  },
  {
    title: "AI for Digital Marketing",
    description: "Harness AI tools to supercharge your marketing — from content generation to audience targeting and analytics.",
    badge: "Coming Soon",
    features: [
      "AI Content Creation",
      "Smart Ad Optimization",
      "Data-Driven Campaigns",
      "Hands-on Projects",
    ],
    highlight: false,
  },
];

export function Academy() {
  return (
    <section id="academy" className="relative py-24 bg-dark-card overflow-hidden">
      {/* Decorative glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-brand/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-brand/10 rounded-full blur-[100px]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-brand/30 bg-yellow-brand/10 px-4 py-1.5 text-sm font-semibold text-yellow-brand mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            AI Academy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white">
            Future-Proof{" "}
            <span className="text-yellow-brand">Your Career</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Stay ahead of the curve with our industry-leading AI training programs.
            Learn from practitioners who build with AI every single day.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                course.highlight
                  ? "border-teal-brand/40 bg-dark-card-2 glow-teal hover:border-teal-brand/60"
                  : "border-gray-700/50 bg-dark-card-2/80 hover:border-yellow-brand/40"
              }`}
            >
              {/* Glow accent on hover */}
              {course.highlight && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-teal-brand/20 to-yellow-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              )}

              {/* Badge */}
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 ${
                  course.highlight
                    ? "bg-teal-brand/20 text-teal-light"
                    : "bg-yellow-brand/20 text-yellow-brand"
                }`}
              >
                {course.badge}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold font-poppins text-white mb-3">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  course.highlight
                    ? "bg-gradient-to-r from-teal-brand to-teal-light text-white shadow-lg shadow-teal-brand/25"
                    : "border border-yellow-brand/50 text-yellow-brand hover:bg-yellow-brand/10"
                }`}
              >
                {course.highlight ? "Enroll Now" : "Join Waitlist"}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
