import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { GraduationCap, Heart, Target, Users, Award, Globe } from 'lucide-react';
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

      {/* Mission Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">{t('mission.title')}</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                {t('mission.content')}
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src="/images/founder.svg"
                alt="StudyFrontier Mission"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
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
              <Users className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{t('values.value2.title')}</h3>
              <p className="text-muted-foreground">{t('values.value2.content')}</p>
            </Card>

            <Card className="p-6 space-y-4">
              <Award className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">{t('values.value3.title')}</h3>
              <p className="text-muted-foreground">{t('values.value3.content')}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('why.title')}</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6 flex gap-4">
              <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('why.reason1.title')}</h3>
                <p className="text-muted-foreground">{t('why.reason1.content')}</p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4">
              <Globe className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('why.reason2.title')}</h3>
                <p className="text-muted-foreground">{t('why.reason2.content')}</p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('why.reason3.title')}</h3>
                <p className="text-muted-foreground">{t('why.reason3.content')}</p>
              </div>
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
          <WhatsAppButton size="lg" />
        </Container>
      </section>
    </div>
  );
}
