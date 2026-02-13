'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Container } from '@/components/ui/container';

export function SimpleHero() {
  const t = useTranslations('simple');

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            {t('hero.headline')}
          </h1>
          
          {/* Subheadline - shorter on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subheadline')}
          </p>
          
          {/* Primary CTA - larger on mobile for easy tapping */}
          <div className="mb-3 md:mb-4">
            <WhatsAppButton size="xl" variant="primary" className="min-h-[56px]" />
          </div>
          
          {/* Reassurance text */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t('hero.reassurance')}
          </p>
        </div>
      </Container>
    </section>
  );
}
