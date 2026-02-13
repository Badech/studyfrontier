'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, FileText, Users } from 'lucide-react';

export function WhatWeHelp() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-20 px-4 bg-muted/30">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('help.title')}
          </h2>
        </div>
        
        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 - Program Selection */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">{t('help.card1_title')}</CardTitle>
              <CardDescription className="text-base">
                {t('help.card1_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
          
          {/* Card 2 - Application Guidance */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">{t('help.card2_title')}</CardTitle>
              <CardDescription className="text-base">
                {t('help.card2_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
          
          {/* Card 3 - Preparation Support */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">{t('help.card3_title')}</CardTitle>
              <CardDescription className="text-base">
                {t('help.card3_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Container>
    </section>
  );
}
