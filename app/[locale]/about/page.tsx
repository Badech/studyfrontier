import { generateMetadataForPage } from '@/lib/generateMetadataForPage';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generateMetadataForPage(locale, {
    namespace: 'about',
    path: '/about'
  });
}

'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Shield, Users, HeartHandshake, Target, Globe, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h1 className="hero-headline">
                {t('hero.title')}
              </h1>
              <p className="hero-subheadline mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold-400/10 rounded-2xl mb-6">
                  <Target className="h-10 w-10 text-gold-500" />
                </div>
                <h2 className="section-title">
                  {t('mission.title')}
                </h2>
                <p className="section-subtitle mx-auto">
                  {t('mission.description')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-title text-center mb-16">
              {t('values.title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-navy-900/5 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-navy-900" />
                  </div>
                  <CardTitle>{t('values.integrity.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 leading-relaxed">
                    {t('values.integrity.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gold-400/10 rounded-2xl flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-gold-500" />
                  </div>
                  <CardTitle>{t('values.expertise.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 leading-relaxed">
                    {t('values.expertise.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-navy-900/5 rounded-2xl flex items-center justify-center mb-4">
                    <HeartHandshake className="h-8 w-8 text-navy-900" />
                  </div>
                  <CardTitle>{t('values.partnership.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 leading-relaxed">
                    {t('values.partnership.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-navy-900/5 rounded-2xl mb-6">
                  <Users className="h-10 w-10 text-navy-900" />
                </div>
                <h2 className="section-title">
                  {t('approach.title')}
                </h2>
                <p className="section-subtitle mx-auto">
                  {t('approach.description')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
