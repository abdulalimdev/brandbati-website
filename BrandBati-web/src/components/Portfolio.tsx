/**
 * Portfolio Section — Brandbati
 * Showcase of selected projects with hover-reveal details.
 */

import { motion } from "framer-motion";

const projects = [
  {
    title: "NovaTech Rebrand",
    category: "Brand Identity",
    description: "Complete brand overhaul for a SaaS startup — logo, brand guidelines, and digital presence.",
    color: "from-teal-brand to-teal-light",
    icon: (
      <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "HealthPlus Social",
    category: "Content Marketing",
    description: "Grew social media presence by 300% through strategic content and AI-driven audience insights.",
    color: "from-yellow-brand to-yellow-light",
    icon: (
      <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "FinEdge AI Bot",
    category: "AI Solutions",
    description: "Deployed an intelligent customer support chatbot handling 10,000+ queries per month with 92% resolution rate.",
    color: "from-teal-dark to-teal-brand",
    icon: (
      <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "EduVerse Platform",
    category: "AI Academy",
    description: "Built and launched an AI-powered e-learning platform with adaptive curriculum and live cohort features.",
    color: "from-yellow-dark to-yellow-brand",
    icon: (
      <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-white grid-pattern">
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gray-900">
            Selected{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A glimpse into the brands we've built, the campaigns we've launched, and the systems we've automated.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-700 group-hover:scale-105`} />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 h-64 flex flex-col justify-between">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Bottom row */}
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
