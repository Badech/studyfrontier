import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.disclaimer_page' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function DisclaimerPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('disclaimer_page');

  const sections = [
    { title: t('no_guarantee_visa_title'), content: t('no_guarantee_visa_text') },
    { title: t('no_guarantee_admission_title'), content: t('no_guarantee_admission_text') },
    { title: t('no_guarantee_scholarship_title'), content: t('no_guarantee_scholarship_text') },
    { title: t('service_scope_title'), content: t('service_scope_text') },
    { title: t('accuracy_title'), content: t('accuracy_text') },
    { title: t('outcome_timeline_title'), content: t('outcome_timeline_text') },
    { title: t('third_party_title'), content: t('third_party_text') },
    { title: t('liability_title'), content: t('liability_text') },
    { title: t('website_links_title'), content: t('website_links_text') },
    { title: t('jurisdiction_title'), content: t('jurisdiction_text') },
    { title: t('acceptance_disclaimer_title'), content: t('acceptance_disclaimer_text') },
  ];

  return (
    <div className="min-h-screen py-16">
      <Container size="default">
        <FadeInUpDiv>
          <SectionHeader
            title={t('title')}
            align="center"
          />
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 max-w-4xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
            <p className="text-sm text-amber-900 dark:text-amber-100 font-semibold">
              ⚠️ IMPORTANT: Please read these disclaimers carefully before using our services.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 space-y-8">
              <p className="text-muted-foreground leading-relaxed">{t('intro')}</p>

              {sections.map((section, index) => (
                <div key={index} className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              ))}

              <div className="pt-6 border-t">
                <h2 className="text-lg font-semibold mb-3">{t('contact_disclaimer_title')}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{t('contact_disclaimer_text')}</p>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
