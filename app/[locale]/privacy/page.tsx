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
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h1>

          {/* Last Updated */}
          <p className="text-sm text-muted-foreground mb-8 pb-8 border-b">
            {t('lastUpdated')}: {new Date().toLocaleDateString(locale)}
          </p>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              {t('intro')}
            </p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section1.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section1.content')}
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section2.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section2.content')}
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section3.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section3.content')}
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section4.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section4.content')}
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section5.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section5.content')}
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section6.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section6.content')}
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section7.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section7.content')}
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('section8.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('section8.content')}
              </p>
            </section>

            {/* Contact Section */}
            <section className="mt-12 pt-8 border-t bg-muted/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                {t('contact.title')}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t('contact.content')}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
