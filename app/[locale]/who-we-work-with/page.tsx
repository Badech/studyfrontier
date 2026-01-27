'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import {
  CheckCircle,
  X,
  MessageCircle,
  AlertCircle,
  Users,
  Target
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function WhoWeWorkWithPage() {
  const t = useTranslations('whoWeWorkWith');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We're Selective */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('selective.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  {t('selective.p1')}
                </p>
                <p>
                  {t('selective.p2')}
                </p>
                <p>
                  {t('selective.p3')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ideal Student Profile */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-navy-900">
                  {t('ideal.title')}
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                { title: t('ideal.academic.title'), criteria: t.raw('ideal.academic.criteria') },
                { title: t('ideal.financial.title'), criteria: t.raw('ideal.financial.criteria') },
                { title: t('ideal.committed.title'), criteria: t.raw('ideal.committed.criteria') },
                { title: t('ideal.english.title'), criteria: t.raw('ideal.english.criteria') },
                { title: t('ideal.realistic.title'), criteria: t.raw('ideal.realistic.criteria') }
              ].map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.criteria.map((criterion: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Don't Work With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <X className="h-7 w-7 text-red-600" />
                </div>
                <h2 className="text-4xl font-bold text-navy-900">
                  {t('notFit.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Honesty goes both ways. If you fit these descriptions, we're likely not the right consultancy for you:
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {t.raw('notFit.items').map((item: any, index: number) => (
                <AnimatedSection key={item.title} delay={index * 0.05}>
                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <X className="h-5 w-5 text-red-600" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-400">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl mb-2">{t('note.title')}</CardTitle>
                    <p className="text-gray-700">
                      {t('note.description')}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-gray-200">
                {t('cta.subtitle')}
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Free Study Consultation
              </Button>
              <p className="text-sm text-gray-300">
                {t('cta.note')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
