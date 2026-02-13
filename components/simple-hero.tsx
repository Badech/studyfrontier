'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Container } from '@/components/ui/container';

export function SimpleHero() {
  const t = useTranslations('simple');

  return (
    <section className="py-10 md:py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-5">
            {t('hero.headline')}
          </h1>
          
          {/* Subheadline - shorter on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subheadline')}
          </p>
          
          {/* Primary CTA - larger on mobile for easy tapping */}
          <div className="mb-2">
            <WhatsAppButton size="xl" variant="primary" className="min-h-[56px] md:min-h-[60px]" />
          </div>
          
          {/* Reassurance text */}
          <p className="text-xs sm:text-sm text-muted-foreground">
            {t('hero.reassurance')}
          </p>
          
          {/* Additional reassurance */}
          <p className="text-xs sm:text-sm text-muted-foreground/80 mt-2">
            {t('hero.guide_text')}
          </p>
        </div>
      </Container>
    </section>
  );
}
