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

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="mx-auto max-w-[1480px]">
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
