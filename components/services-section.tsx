'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, FileCheck, ClipboardList, MessageSquare, Info } from 'lucide-react';

const serviceIcons = [GraduationCap, FileCheck, ClipboardList, MessageSquare];

export function ServicesSection() {
  const t = useTranslations('simple');

  return (
    <section className="py-20 md:py-24 px-4">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {[1, 2, 3, 4].map((num) => {
            const Icon = serviceIcons[num - 1];
            return (
              <Card key={num} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {t(`services.service${num}.title`)}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {t(`services.service${num}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 justify-center max-w-2xl mx-auto p-4 rounded-lg bg-primary/5 border border-primary/20">
          <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            {t('services.disclaimer')}
          </p>
        </div>
      </Container>
    </section>
  );
}
