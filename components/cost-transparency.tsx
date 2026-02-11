'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { DollarSign, Home, FileText, AlertCircle } from 'lucide-react';

export function CostTransparency() {
  const t = useTranslations('costs');

  const costCategories = [
    {
      icon: DollarSign,
      title: t('tuition_title'),
      range: t('tuition_range'),
      note: t('tuition_note'),
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
      icon: Home,
      title: t('living_title'),
      range: t('living_range'),
      note: t('living_note'),
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    },
    {
      icon: FileText,
      title: t('application_title'),
      range: t('application_range'),
      note: t('application_note'),
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeInUpDiv className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeInUpDiv>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-8">
          {costCategories.map((category, index) => (
            <FadeInUpDiv key={index}>
              <Card className="h-full hover:shadow-lg transition-all border-2">
                <CardHeader className={category.bgColor}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                    {category.range}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.note}
                  </p>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          ))}
        </StaggerContainer>

        <FadeInUpDiv>
          <Card className="border-2 border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-amber-900 dark:text-amber-100">
                    {t('disclaimer_title')}
                  </h3>
                  <p className="text-sm md:text-base text-amber-800 dark:text-amber-200">
                    {t('disclaimer_text')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </div>
    </section>
  );
}
