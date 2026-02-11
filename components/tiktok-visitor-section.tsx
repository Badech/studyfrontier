'use client';

import { useTranslations } from 'next-intl';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { MessageCircle, FileCheck, Plane, Clock } from 'lucide-react';

export function TikTokVisitorSection() {
  const t = useTranslations('tiktok_section');

  const steps = [
    {
      icon: MessageCircle,
      title: t('step1_title'),
      description: t('step1_description'),
    },
    {
      icon: FileCheck,
      title: t('step2_title'),
      description: t('step2_description'),
    },
    {
      icon: Plane,
      title: t('step3_title'),
      description: t('step3_description'),
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      <div className="max-w-5xl mx-auto">
        <FadeInUpDiv className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeInUpDiv>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => (
            <FadeInUpDiv key={index} >
              <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          ))}
        </StaggerContainer>

        <FadeInUpDiv className="text-center">
          <WhatsAppButton size="lg" variant="success" className="mb-3" />
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{t('response_time')}</span>
          </div>
        </FadeInUpDiv>
      </div>
    </section>
  );
}
