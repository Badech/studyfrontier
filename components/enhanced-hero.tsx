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

          {/* Timeline Indicator - Updated for better conversion */}
          <FadeInUpDiv className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-full border-2 border-blue-300 dark:border-blue-700 shadow-sm">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm md:text-base font-bold text-blue-900 dark:text-blue-100">
                From Morocco to the USA in 6-12 months
              </span>
            </div>
          </FadeInUpDiv>
          
          {/* WhatsApp Response Time */}
          <FadeInUpDiv className="mb-8">
            <p className="text-sm text-muted-foreground italic">
              💬 WhatsApp replies within hours
            </p>
          </FadeInUpDiv>

          {/* Micro-trust elements - Enhanced */}
          <FadeInUpDiv className="mb-8">
            <div className="inline-block px-6 py-3 bg-muted/50 rounded-xl border border-border">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Transparent process</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">No visa guarantee</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Ethical guidance</span>
                </div>
              </div>
            </div>
          </FadeInUpDiv>

          {/* CTA Buttons */}
          <FadeInUpDiv className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <WhatsAppButton size="lg" variant="primary" />
          </FadeInUpDiv>

          {/* Trust note */}
          <FadeInUpDiv >
            <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
              <p>{t('hero.trust_note')}</p>
            </div>
          </FadeInUpDiv>
        </FadeInUpDiv>
      </Container>
    </section>
  );
}
