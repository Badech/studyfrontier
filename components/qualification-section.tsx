'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export function QualificationSection() {
  const t = useTranslations('qualification');

  const forYou = [
    t('for_you_1'),
    t('for_you_2'),
    t('for_you_3'),
    t('for_you_4'),
  ];

  const notForYou = [
    t('not_for_you_1'),
    t('not_for_you_2'),
    t('not_for_you_3'),
    t('not_for_you_4'),
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeInUpDiv className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('subtitle')}
          </p>
        </FadeInUpDiv>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* This IS for you */}
          <FadeInUpDiv delay={0.1}>
            <Card className="h-full border-2 border-green-500/30 bg-green-50/50 dark:bg-green-950/10 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-6 w-6" />
                  {t('for_you_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeInUpDiv>

          {/* This is NOT for you */}
          <FadeInUpDiv delay={0.2}>
            <Card className="h-full border-2 border-red-500/30 bg-red-50/50 dark:bg-red-950/10 hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <XCircle className="h-6 w-6" />
                  {t('not_for_you_title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </StaggerContainer>
      </div>
    </section>
  );
}
