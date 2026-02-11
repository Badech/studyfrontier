import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.refund' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function RefundPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('refund');

  const sections = [
    { title: t('overview_title'), content: t('overview_text') },
    { title: t('eligibility_title'), content: t('eligibility_text') },
    { title: t('timeline_title'), content: t('timeline_text') },
    { title: t('partial_title'), content: t('partial_text') },
    { title: t('non_refundable_title'), content: t('non_refundable_text') },
    { title: t('process_title'), content: t('process_text') },
    { title: t('stages_title'), content: t('stages_text') },
    { title: t('disputes_title'), content: t('disputes_text') },
    { title: t('special_title'), content: t('special_text') },
    { title: t('no_guarantee_title'), content: t('no_guarantee_text') },
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
                <h2 className="text-lg font-semibold mb-3">{t('contact_refund_title')}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{t('contact_refund_text')}</p>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
