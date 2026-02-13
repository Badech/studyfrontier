'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, FileText, Users } from 'lucide-react';

export function WhatWeHelp() {
  const t = useTranslations('simple');

  return (
    <section className="py-20 md:py-24 px-4 bg-muted/30">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('help.title')}
          </h2>
        </div>
        
        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Program Selection */}
          <Card className="text-center">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-3">{t('help.card1_title')}</CardTitle>
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {t('help.card1_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
          
          {/* Card 2 - Application Guidance */}
          <Card className="text-center">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-3">{t('help.card2_title')}</CardTitle>
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {t('help.card2_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
          
          {/* Card 3 - Preparation Support */}
          <Card className="text-center">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-3">{t('help.card3_title')}</CardTitle>
              <CardDescription className="text-sm sm:text-base leading-relaxed">
                {t('help.card3_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Container>
    </section>
  );
}
