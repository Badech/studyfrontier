import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { 
  Users, GraduationCap, FileText, Shield, 
  MessageSquare, FileCheck, CheckCircle, X, 
  AlertTriangle, ExternalLink 
} from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.services' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('services');

  const coreServices = [
    {
      icon: Users,
      title: t('admissions_counseling'),
      description: t('admissions_counseling_desc'),
    },
    {
      icon: GraduationCap,
      title: t('university_selection'),
      description: t('university_selection_desc'),
    },
    {
      icon: FileText,
      title: t('application_prep'),
      description: t('application_prep_desc'),
    },
    {
      icon: Shield,
      title: t('ds160_visa'),
      description: t('ds160_visa_desc'),
    },
    {
      icon: MessageSquare,
      title: t('interview_coaching'),
      description: t('interview_coaching_desc'),
    },
    {
      icon: FileCheck,
      title: t('document_review'),
      description: t('document_review_desc'),
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* Intro Section */}
      <Container size="default">
        <FadeInUpDiv>
          <SectionHeader
            title={t('title')}
            description={t('subtitle')}
            align="center"
          />
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <p className="text-base text-foreground leading-relaxed mb-4">
              {t('intro')}
            </p>
          </div>
        </FadeInUpDiv>

        {/* Disclaimer Box */}
        <FadeInUpDiv className="mt-6 max-w-3xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-5 border-l-4 border-amber-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                {t('disclaimer_intro')}
              </p>
            </div>
          </div>
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 text-center">
          <WhatsAppButton size="lg" />
        </FadeInUpDiv>
      </Container>

      {/* Core Services Grid */}
      <section className="py-12 md:py-16 px-4 bg-muted/20 mt-16">
        <Container size="lg">
          <FadeInUpDiv>
            <h2 className="text-3xl font-semibold text-center mb-2">
              {t('core_services_title')}
            </h2>
          </FadeInUpDiv>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {coreServices.map((service, index) => (
              <FadeInUpDiv key={index}>
                <Card className="h-full border-l-4 border-l-primary/30 hover:border-l-primary transition-colors">
                  <CardHeader>
                    <service.icon className="h-9 w-9 text-primary mb-2" />
                    <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInUpDiv>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Service Packages */}
      <section className="py-12 md:py-16 px-4">
        <Container size="lg">
          <FadeInUpDiv>
            <SectionHeader
              title={t('packages_title')}
              description={t('packages_subtitle')}
              align="center"
            />
          </FadeInUpDiv>

          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
            {/* Starter Package */}
            <FadeInUpDiv>
              <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{t('starter')}</CardTitle>
                  <p className="text-muted-foreground text-sm font-medium">{t('starter_price')}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-5 pt-2">
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-foreground">
                      {t('starter_includes')}
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('starter_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('starter_item2')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('starter_item3')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('starter_item4')}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-muted-foreground">
                      {t('starter_not_included')}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('starter_not_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('starter_not_item2')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('starter_not_item3')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>

            {/* Standard Package */}
            <FadeInUpDiv>
              <Card className="h-full flex flex-col border-2 border-primary shadow-lg bg-card relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="success" className="shadow-md">
                    {t('standard_recommended')}
                  </Badge>
                </div>
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="text-xl font-bold">{t('standard')}</CardTitle>
                  <p className="text-muted-foreground text-sm font-medium">{t('standard_price')}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-5 pt-2">
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-foreground">
                      {t('standard_includes')}
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item2')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item3')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item4')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item5')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('standard_item6')}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-muted-foreground">
                      {t('standard_not_included')}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('standard_not_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('standard_not_item2')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('standard_not_item3')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>

            {/* Golden Package */}
            <FadeInUpDiv>
              <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2">
                    {t('golden_premium')}
                  </Badge>
                  <CardTitle className="text-xl font-bold">{t('golden')}</CardTitle>
                  <p className="text-muted-foreground text-sm font-medium">{t('golden_price')}</p>
                </CardHeader>
                <CardContent className="flex-1 space-y-5 pt-2">
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-foreground">
                      {t('golden_includes')}
                    </p>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item2')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item3')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item4')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item5')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item6')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{t('golden_item7')}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="font-bold text-xs uppercase tracking-wide mb-3 text-muted-foreground">
                      {t('golden_not_included')}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('golden_not_item1')}</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm">
                        <X className="h-4 w-4 text-muted-foreground/60 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{t('golden_not_item2')}</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          </div>

          {/* Compliance and Refund Notes */}
          <div className="mt-16 max-w-4xl mx-auto space-y-5">
            {/* Compliance Notice - More prominent */}
            <FadeInUpDiv>
              <Card className="border-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-slate-700 dark:text-slate-300 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-bold text-base mb-2 text-slate-900 dark:text-slate-100">{t('compliance_note')}</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                        {t('compliance_text')}
                      </p>
                      <Button variant="outline" size="sm" asChild className="border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <Link href={`/${locale}/disclaimer`}>
                          {t('compliance_link')} <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>

            {/* Refund Policy Note */}
            <FadeInUpDiv>
              <Card className="border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">{t('refund_note')}</p>
                      <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed mb-3">
                        {t('refund_text')}
                      </p>
                      <Button variant="outline" size="sm" asChild className="border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900">
                        <Link href={`/${locale}/refund-policy`}>
                          {t('refund_link')} <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <Container size="default">
          <FadeInUpDiv className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{t('cta_title')}</h2>
            <p className="text-base text-muted-foreground mb-6">
              {t('cta_subtitle')}
            </p>
            <WhatsAppButton size="lg" message={t('cta_button')} />
          </FadeInUpDiv>
        </Container>
      </section>
    </div>
  );
}
