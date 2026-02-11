import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.terms' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('terms');

  const sections = [
    { title: t('acceptance_title'), content: t('acceptance_text') },
    { title: t('services_title'), content: t('services_text') },
    { title: t('no_guarantee_title'), content: t('no_guarantee_text') },
    { title: t('fees_title'), content: t('fees_text') },
    { title: t('client_responsibilities_title'), content: t('client_responsibilities_text') },
    { title: t('our_responsibilities_title'), content: t('our_responsibilities_text') },
    { title: t('liability_title'), content: t('liability_text') },
    { title: t('intellectual_property_title'), content: t('intellectual_property_text') },
    { title: t('confidentiality_title'), content: t('confidentiality_text') },
    { title: t('termination_title'), content: t('termination_text') },
    { title: t('dispute_resolution_title'), content: t('dispute_resolution_text') },
    { title: t('changes_title'), content: t('changes_text') },
    { title: t('severability_title'), content: t('severability_text') },
    { title: t('entire_agreement_title'), content: t('entire_agreement_text') },
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
          <p className="text-sm text-muted-foreground text-center mb-8">
            {t('last_updated')}
          </p>

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
                <h2 className="text-lg font-semibold mb-3">{t('contact_terms_title')}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{t('contact_terms_text')}</p>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
