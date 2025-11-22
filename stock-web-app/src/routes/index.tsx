import { About } from '@/pages/landing/About';
import { Cta } from '@/pages/landing/Cta';
import { FAQ } from '@/pages/landing/FAQ';
import { Features } from '@/pages/landing/Features';
import { Footer } from '@/pages/landing/Footer';
import { Hero } from '@/pages/landing/Hero';
import { HowItWorks } from '@/pages/landing/HowItWorks';
import { Navbar } from '@/pages/landing/Navbar';
import { Newsletter } from '@/pages/landing/Newsletter';
import { Pricing } from '@/pages/landing/Pricing';
import { ScrollToTop } from '@/pages/landing/ScrollToTop';
import { Services } from '@/pages/landing/Services';
import { Sponsors } from '@/pages/landing/Sponsors';
import { Team } from '@/pages/landing/Team';
import { Testimonials } from '@/pages/landing/Testimonials';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/')({
  component: LandingComponent,
});

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function LandingComponent() {
  return (
    <div className="mx-auto max-w-[1480px]">
      <Navbar />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Sponsors />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Features />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Services />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Cta />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>

      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Team />
      </motion.div> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Pricing />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Newsletter />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <FAQ />
      </motion.div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
