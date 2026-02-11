'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';
import { Quote, Shield } from 'lucide-react';

export function FounderSection() {
  const t = useTranslations('founder');

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <FadeInUpDiv className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeInUpDiv>

        <FadeInUpDiv delay={0.2}>
          <Card className="overflow-hidden hover:shadow-xl transition-all border-2">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Photo placeholder */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8 md:p-12">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                    <div className="text-center text-white">
                      <div className="text-6xl md:text-7xl font-bold mb-2">👨‍🎓</div>
                      <div className="text-sm font-semibold">{t('photo_placeholder')}</div>
                    </div>
                  </div>
                </div>

                {/* Bio content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 pl-6">
                      "{t('quote')}"
                    </blockquote>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed">
                      {t('bio')}
                    </p>
                    
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base text-muted-foreground">
                        {t('commitment')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </div>
    </section>
  );
}
