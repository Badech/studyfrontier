'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Quote, Users } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('simple');

  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            {t('testimonials.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-12 text-center border-2 border-dashed">
            <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              {t('testimonials.coming_soon.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('testimonials.coming_soon.description')}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Quote className="h-4 w-4" />
              <p>{t('testimonials.coming_soon.note')}</p>
            </div>
          </Card>
        </div>

        {/* Disclaimer - Always visible */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground italic">
            {t('testimonials.disclaimer')}
          </p>
        </div>
      </Container>
    </section>
  );
}
