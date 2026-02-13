'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function FinalCTA() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <Container size="default">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('final_cta.headline')}
          </h2>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t('final_cta.text')}
          </p>
          
          {/* Large WhatsApp Button */}
          <WhatsAppButton size="xl" variant="primary" />
        </div>
      </Container>
    </section>
  );
}
