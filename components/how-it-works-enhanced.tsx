'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, FileText, Plane } from 'lucide-react';
import { Info } from 'lucide-react';

const stepIcons = [CheckCircle, Users, FileText, Plane];

export function HowItWorksEnhanced() {
  const t = useTranslations('simple');
  const tCommon = useTranslations('common');

  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            {t('how_it_works.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('how_it_works.subtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {[1, 2, 3, 4].map((num) => {
            const Icon = stepIcons[num - 1];
            return (
              <Card key={num} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                  {tCommon('step')} {num}
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {t(`how_it_works.step${num}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`how_it_works.step${num}.description`)}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 justify-center max-w-2xl mx-auto p-4 rounded-lg bg-primary/5 border border-primary/20">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            {t('how_it_works.disclaimer')}
          </p>
        </div>
      </Container>
    </section>
  );
}
