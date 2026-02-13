'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function FinalCTA() {
  const t = useTranslations('simple');

  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-gradient-to-b from-muted/20 via-primary/10 to-primary/5 border-t-2 border-primary/20">
      <Container size="default">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            {t('final_cta.headline')}
          </h2>
          
          {/* Supporting Text - simplified and shorter */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed">
            {t('final_cta.text')}
          </p>
          
          {/* Large WhatsApp Button - extra large for easy tapping */}
          <WhatsAppButton size="xl" variant="primary" className="min-h-[60px] md:min-h-[64px] shadow-lg" />
        </div>
      </Container>
    </section>
  );
}
