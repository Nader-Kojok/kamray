import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import NewsSection from '@/components/sections/NewsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <ExpertiseSection />

      <NewsSection />

      <TestimonialsSection />

      <ContactSection />

      <CTASection />
    </div>
  );
}
