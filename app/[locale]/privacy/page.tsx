import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrivacyPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <div className="py-16 md:py-24 px-4">
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            {t('title')}
          </h1>

          {/* Last Updated */}
          <p className="text-sm text-muted-foreground mb-8">
            {t('lastUpdated')}: {new Date().toLocaleDateString(locale)}
          </p>

          {/* Privacy Content */}
          <div className="prose prose-gray max-w-none">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
              <p>{t('paragraph4')}</p>
              <p>{t('paragraph5')}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
