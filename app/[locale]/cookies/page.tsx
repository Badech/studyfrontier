import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.cookies' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CookiesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'cookies' });

  return (
    <Container className="py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <section>
          <p className="text-sm text-muted-foreground mb-8">
            {t('lastUpdated')}: {new Date().toLocaleDateString(locale)}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('section1.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('section1.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('section2.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('section2.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('section3.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('section3.content')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('section4.title')}</h2>
          <p className="text-muted-foreground mb-4">{t('section4.content')}</p>
        </section>

        <section className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground">{t('contact.content')}</p>
        </section>
      </div>
    </Container>
  );
}
