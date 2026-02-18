import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { GraduationCap, Heart, Target, CheckCircle, XCircle, MapPin, Languages, Globe2 } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.about' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <Container className="max-w-4xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">{t('hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </Container>
      </section>

      {/* What We Are Section */}
      <section className="py-16 bg-muted/30">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('what_we_are.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('what_we_are.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Business Type</h3>
                  <p className="text-muted-foreground">{t('what_we_are.type')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Who We Help</h3>
                  <p className="text-muted-foreground">{t('what_we_are.who_we_help')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <Globe2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Scope of Service</h3>
                  <p className="text-muted-foreground">{t('what_we_are.scope')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">{t('what_we_are.location')}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:col-span-2">
              <div className="flex items-start gap-3 mb-3">
                <Languages className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Languages Supported</h3>
                  <p className="text-muted-foreground">{t('what_we_are.languages')}</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('what_we_do.title')}</h2>
            <p className="text-muted-foreground">{t('what_we_do.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{t(`what_we_do.item${num}`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Don't Do Section */}
      <section className="py-16 bg-muted/30">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('what_we_dont.title')}</h2>
            <p className="text-muted-foreground">{t('what_we_dont.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{t(`what_we_dont.item${num}`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <Container className="max-w-3xl text-center">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">{t('mission.title')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('mission.content')}
          </p>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <Container className="max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('values.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <Heart className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{t('values.value1.title')}</h3>
              <p className="text-muted-foreground">{t('values.value1.content')}</p>
            </Card>

            <Card className="p-6 space-y-4">
              <Target className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{t('values.value2.title')}</h3>
              <p className="text-muted-foreground">{t('values.value2.content')}</p>
            </Card>

            <Card className="p-6 space-y-4">
              <CheckCircle className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{t('values.value3.title')}</h3>
              <p className="text-muted-foreground">{t('values.value3.content')}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('cta.subtitle')}
          </p>
          <WhatsAppButton size="lg" source="about-page-cta" />
        </Container>
      </section>
    </div>
  );
}
