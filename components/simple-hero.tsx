'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Container } from '@/components/ui/container';

export function SimpleHero() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.headline')}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subheadline')}
          </p>
          
          {/* Primary CTA */}
          <div className="mb-4">
            <WhatsAppButton size="xl" variant="primary" />
          </div>
          
          {/* Reassurance text */}
          <p className="text-sm text-muted-foreground">
            {t('hero.reassurance')}
          </p>
        </div>
      </Container>
    </section>
  );
}
