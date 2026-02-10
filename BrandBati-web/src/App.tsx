/**
 * Brandbati — Hybrid Digital Agency Landing Page
 * ================================================
 * Main application component assembling all sections
 * into a single-page scroll experience.
 *
 * Sections:
 * 1. Navbar (fixed, scroll-aware)
 * 2. Hero (high-impact entry)
 * 3. Services (Brand Identity, Content Marketing, AI Solutions)
 * 4. Academy (AI Training — dark themed)
 * 5. Portfolio (selected projects)
 * 6. Why Choose Us (differentiators)
 * 7. Contact (form + info)
 * 8. Footer
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Academy } from "./components/Academy";
import { Portfolio } from "./components/Portfolio";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-white font-inter antialiased">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <Services />
        <Academy />
        <Portfolio />
        <WhyChooseUs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
