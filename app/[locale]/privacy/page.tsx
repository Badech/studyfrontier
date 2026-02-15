import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('privacy');

  return (
    <div className="py-16 md:py-24 px-4">
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            {t('title')}
          </h1>

          {/* Privacy Content */}
          <div className="prose prose-gray max-w-none">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
              <p>{t('paragraph3')}</p>
              <p>{t('paragraph4')}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
