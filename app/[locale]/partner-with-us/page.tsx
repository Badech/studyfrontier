import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { PartnerInquiryForm } from '@/components/partner-inquiry-form';
import { Building2, Globe2, Users, Shield, FileCheck, Target, CheckCircle2, AlertCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const PartnerForm = dynamic(() => import('@/components/partner-inquiry-form').then(mod => ({ default: mod.PartnerInquiryForm })), {
  ssr: false,
  loading: () => <div className="h-96 flex items-center justify-center"><p className="text-muted-foreground">Loading form...</p></div>
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.partner' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PartnerPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('partner');

  return (
    <div className="min-h-screen py-12 md:py-16">
      <Container>
        {/* Hero Section with Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <FadeInUpDiv>
            <div className="lg:sticky lg:top-24">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero_title')}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t('hero_subtitle')}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{t('hero_point1')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{t('hero_point2')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{t('hero_point3')}</p>
                </div>
              </div>
            </div>
          </FadeInUpDiv>

          <FadeInUpDiv>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">{t('form_title')}</CardTitle>
                <CardDescription className="text-base">{t('form_subtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <PartnerForm />
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </div>

        {/* About StudyFrontier */}
        <section className="mb-20">
          <FadeInUpDiv>
            <SectionHeader
              title={t('about_title')}
              description={t('about_subtitle')}
              align="center"
            />
          </FadeInUpDiv>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{t('about_mission_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('about_mission_text')}</p>
                </CardContent>
              </Card>
            </FadeInUpDiv>

            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <Globe2 className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{t('about_market_title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('about_market_text')}</p>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          </div>
        </section>

        {/* Recruitment Methods */}
        <section className="mb-20 bg-muted/30 -mx-4 px-4 py-16 md:-mx-8 md:px-8">
          <FadeInUpDiv>
            <SectionHeader
              title={t('methods_title')}
              description={t('methods_subtitle')}
              align="center"
            />
          </FadeInUpDiv>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    {t('methods_ethical_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{t('methods_ethical_text')}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('methods_ethical_point1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('methods_ethical_point2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('methods_ethical_point3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInUpDiv>

            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-primary" />
                    {t('methods_realistic_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('methods_realistic_text')}</p>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          </div>
        </section>

        {/* Compliance & Ethics */}
        <section className="mb-20">
          <FadeInUpDiv>
            <SectionHeader
              title={t('compliance_title')}
              description={t('compliance_subtitle')}
              align="center"
            />
          </FadeInUpDiv>

          <div className="mt-12 max-w-4xl mx-auto">
            <FadeInUpDiv>
              <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">{t('compliance_disclaimer_title')}</h3>
                    <p className="text-sm text-amber-800 dark:text-amber-200">{t('compliance_disclaimer_text')}</p>
                  </div>
                </div>
              </div>
            </FadeInUpDiv>

            <div className="grid md:grid-cols-3 gap-6">
              <FadeInUpDiv>
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{t('compliance_no_guarantee_title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t('compliance_no_guarantee_text')}</p>
                  </CardContent>
                </Card>
              </FadeInUpDiv>

              <FadeInUpDiv>
                <Card>
                  <CardHeader>
                    <FileCheck className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{t('compliance_transparent_title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t('compliance_transparent_text')}</p>
                  </CardContent>
                </Card>
              </FadeInUpDiv>

              <FadeInUpDiv>
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{t('compliance_data_title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{t('compliance_data_text')}</p>
                  </CardContent>
                </Card>
              </FadeInUpDiv>
            </div>
          </div>
        </section>

        {/* What Partners Get */}
        <section className="mb-20">
          <FadeInUpDiv>
            <SectionHeader
              title={t('what_partners_get_title')}
              description={t('what_partners_get_subtitle')}
              align="center"
            />
          </FadeInUpDiv>

          <div className="mt-12 max-w-4xl mx-auto">
            <StaggerContainer className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <FadeInUpDiv key={num}>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">{t(`partner_benefit${num}_title`)}</h4>
                          <p className="text-sm text-muted-foreground">{t(`partner_benefit${num}_text`)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInUpDiv>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Final CTA with Form */}
        <section>
          <FadeInUpDiv>
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-primary/5">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-3">{t('cta_title')}</CardTitle>
                <CardDescription className="text-base">{t('cta_subtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <PartnerForm />
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </section>
      </Container>
    </div>
  );
}
