import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { CheckCircle, Clock, User, Users, Shield, AlertTriangle } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.how_it_works' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HowItWorksPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('how_it_works');

  const steps = [
    { number: '01', title: t('step1_title'), duration: t('step1_duration'), desc: t('step1_desc') },
    { number: '02', title: t('step2_title'), duration: t('step2_duration'), desc: t('step2_desc') },
    { number: '03', title: t('step3_title'), duration: t('step3_duration'), desc: t('step3_desc') },
    { number: '04', title: t('step4_title'), duration: t('step4_duration'), desc: t('step4_desc') },
    { number: '05', title: t('step5_title'), duration: t('step5_duration'), desc: t('step5_desc') },
    { number: '06', title: t('step6_title'), duration: t('step6_duration'), desc: t('step6_desc') },
  ];

  return (
    <div className="py-12 md:py-16">
      <Container size="default">
        {/* Header */}
        <FadeInUpDiv>
          <SectionHeader
            title={t('title')}
            description={t('subtitle')}
            align="center"
          />
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed text-center">
            {t('intro')}
          </p>
        </FadeInUpDiv>

        {/* 6-Step Timeline */}
        <StaggerContainer className="mt-16 max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <FadeInUpDiv key={index}>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{step.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{step.duration}</span>
                      </div>
                      <CardDescription className="text-base">{step.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 pt-0">
                  {/* What You Prepare */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-bold text-sm uppercase tracking-wide">{t(`step${index + 1}_you_prepare`)}</h3>
                    </div>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{t(`step${index + 1}_you${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Do */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-bold text-sm uppercase tracking-wide">{t(`step${index + 1}_we_do`)}</h3>
                    </div>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{t(`step${index + 1}_we${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          ))}
        </StaggerContainer>

        {/* Transparency Commitments */}
        <FadeInUpDiv className="mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-8 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-slate-700 dark:text-slate-300" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('transparency_title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{t(`transparency_item${i}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInUpDiv>

        {/* Checklists Section */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Your Checklist */}
          <FadeInUpDiv>
            <Card className="h-full">
              <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
                <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                  <User className="h-6 w-6" />
                  {t('your_checklist_title')}
                </CardTitle>
                <CardDescription className="text-blue-800 dark:text-blue-200">
                  {t('your_checklist_subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{t(`your_check${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeInUpDiv>

          {/* Our Role */}
          <FadeInUpDiv>
            <Card className="h-full">
              <CardHeader className="bg-green-50 dark:bg-green-950/20">
                <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                  <Users className="h-6 w-6" />
                  {t('our_role_title')}
                </CardTitle>
                <CardDescription className="text-green-800 dark:text-green-200">
                  {t('our_role_subtitle')}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{t(`our_role${i}`)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground italic">{t('our_role_note')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </div>

        {/* CTA Section */}
        <FadeInUpDiv className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-3">{t('cta_title')}</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              {t('cta_subtitle')}
            </p>
            <WhatsAppButton size="lg" />
          </div>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
