'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LeadMagnet } from '@/components/LeadMagnet';
import {
  GraduationCap,
  DollarSign,
  Calendar,
  FileCheck,
  MapPin,
  Users,
  BookOpen,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function StudyInUSAPage() {
  const t = useTranslations('studyInUSA');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };
  
  const visaSteps = t.raw('visa.steps') as Array<{title: string; description: string; time: string}>;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-blue-900 to-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t('hero.cta')}
                </Button>
                <p className="text-sm text-gray-300">
                  {t('hero.benefits')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-600 mb-2">4,000+</div>
                <div className="text-gray-600 text-sm">{t('stats.universities')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-600 mb-2">6-12</div>
                <div className="text-gray-600">{t('stats.timeline')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-600 mb-2">$15k+</div>
                <div className="text-gray-600">{t('stats.budget')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold-600 mb-2">F-1</div>
                <div className="text-gray-600">{t('stats.visa')}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">On This Page</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Why Study in the USA',
                    'F-1 Visa Process',
                    'University Types',
                    'Costs & Budgeting',
                    'Admission Requirements',
                    'Application Timeline',
                    'English Requirements',
                    'After Arrival'
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-navy-900 hover:text-gold-600 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{item}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Study in USA */}
      <section id="why-study-in-the-usa" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('why.title')}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t('why.intro')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('why.worldClass.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t('why.worldClass.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Users className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('why.diverse.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t('why.diverse.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <BookOpen className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('why.research.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t('why.research.description')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('why.opt.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {t('why.opt.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* F-1 Visa Process */}
      <section id="f-1-visa-process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('visa.title')}
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-blue-900 font-semibold mb-2">{t('visa.important')}</p>
                <p className="text-blue-800">
                  {t('visa.notice')}
                </p>
              </div>

              <div className="space-y-6">
                {visaSteps.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{item.time}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

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
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                {t('cta.button')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
