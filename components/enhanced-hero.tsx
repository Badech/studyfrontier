'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Badge } from '@/components/ui/badge';
import { FadeInUpDiv } from '@/components/ui/motion';
import { Container } from '@/components/ui/container';
import { Clock, Shield, AlertCircle } from 'lucide-react';

export function EnhancedHero() {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
      <Container size="default">
        <FadeInUpDiv className="max-w-4xl mx-auto text-center">
          <Badge variant="success" className="mb-6 text-sm md:text-base">
            🇲🇦 → 🇺🇸 {t('hero.morocco_to_usa')}
          </Badge>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('hero.secondary_line')}
          </p>

          {/* Timeline Indicator */}
          <FadeInUpDiv delay={0.2} className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 dark:bg-blue-950/20 rounded-full border-2 border-blue-200 dark:border-blue-800">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm md:text-base font-semibold text-blue-900 dark:text-blue-100">
                {t('hero.timeline')}
              </span>
            </div>
          </FadeInUpDiv>

          {/* Micro-trust elements */}
          <FadeInUpDiv delay={0.3} className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">{t('hero.trust_transparent')}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <span className="text-muted-foreground">{t('hero.trust_no_guarantee')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-muted-foreground">{t('hero.trust_ethical')}</span>
              </div>
            </div>
          </FadeInUpDiv>

          {/* CTA Buttons */}
          <FadeInUpDiv delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <WhatsAppButton size="lg" variant="primary" />
          </FadeInUpDiv>

          {/* Trust note */}
          <FadeInUpDiv delay={0.5}>
            <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              <p>{t('hero.trust_note')}</p>
            </div>
          </FadeInUpDiv>
        </FadeInUpDiv>
      </Container>
    </section>
  );
}
