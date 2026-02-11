import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('privacy');

  const sections = [
    { title: t('collection_title'), content: t('collection_text') },
    { title: t('use_title'), content: t('use_text') },
    { title: t('processing_title'), content: t('processing_text') },
    { title: t('sharing_title'), content: t('sharing_text') },
    { title: t('security_title'), content: t('security_text') },
    { title: t('rights_title'), content: t('rights_text') },
    { title: t('international_title'), content: t('international_text') },
    { title: t('cookies_title'), content: t('cookies_text') },
    { title: t('children_title'), content: t('children_text') },
    { title: t('changes_title'), content: t('changes_text') },
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
                <h2 className="text-lg font-semibold mb-3">{t('contact_title')}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{t('contact_text')}</p>
              </div>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
