'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { useTranslations } from 'next-intl';
import { LeadMagnet } from '@/components/LeadMagnet';
import { StudyQuiz } from '@/components/StudyQuiz';
import {
  GraduationCap,
  Clock,
  DollarSign,
  FileCheck,
  Calendar,
  CheckCircle,
  BookOpen,
  MessageCircle,
  TrendingUp
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function UndergraduatePage() {
  const t = useTranslations('programs.undergraduate');
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {t('hero.subtitle')}
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                {t('hero.button')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <Clock className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">{t('keyFacts.duration.value')}</div>
                <div className="text-gray-600">{t('keyFacts.duration.label')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">{t('keyFacts.cost.value')}</div>
                <div className="text-gray-600">{t('keyFacts.cost.label')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <FileCheck className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">{t('keyFacts.tests.value')}</div>
                <div className="text-gray-600">{t('keyFacts.tests.label')}</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">{t('keyFacts.intakes.value')}</div>
                <div className="text-gray-600">{t('keyFacts.intakes.label')}</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What is a Bachelor's Degree */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('what.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  {t('what.p1')}
                </p>
                <p>
                  {t('what.p2')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('majors.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(t.raw('majors.list') as string[]).map(major => (
                        <li key={major} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {major}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>{t('outcomes.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(t.raw('outcomes.list') as string[]).map(outcome => (
                        <li key={outcome} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('requirements.title')}
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {(t.raw('requirements.items') as Array<{title: string, description: string, badge: string}>).map((req, index) => (
                <AnimatedSection key={req.title} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{req.title}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          req.badge === 'Required' 
                            ? 'bg-red-100 text-red-800' 
                            : req.badge === 'Sometimes'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {req.badge}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{req.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Quiz */}
      <StudyQuiz />

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
