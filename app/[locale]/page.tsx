import { unstable_setRequestLocale } from 'next-intl/server';
import { SimpleHero } from '@/components/simple-hero';
import { QuickTrust } from '@/components/quick-trust';
import { ServicesSection } from '@/components/services-section';
import { HowItWorksEnhanced } from '@/components/how-it-works-enhanced';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FounderSimple } from '@/components/founder-simple';
import { ContactSection } from '@/components/contact-section';
import { FinalCTA } from '@/components/final-cta';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div>
      {/* 1. Hero Section */}
      <SimpleHero />

      {/* 2. Quick Trust Section */}
      <QuickTrust />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. How It Works Section */}
      <HowItWorksEnhanced />

      {/* 5. Testimonials Section */}
      <TestimonialsSection />

      {/* 6. Founder Section */}
      <FounderSimple />

      {/* 7. Contact Section */}
      <ContactSection />

      {/* 8. Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
