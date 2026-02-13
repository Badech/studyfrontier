import { unstable_setRequestLocale } from 'next-intl/server';
import { SimpleHero } from '@/components/simple-hero';
import { QuickTrust } from '@/components/quick-trust';
import { WhatWeHelp } from '@/components/what-we-help';
import { HowItWorksSimple } from '@/components/how-it-works-simple';
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

      {/* 3. What We Help With Section */}
      <WhatWeHelp />

      {/* 4. How It Works Section */}
      <HowItWorksSimple />

      {/* 5. Founder Section */}
      <FounderSimple />

      {/* 6. Contact Section */}
      <ContactSection />

      {/* 7. Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
