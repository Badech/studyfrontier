'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import {
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Briefcase,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function WhyStudyFrontierPage() {
  const t = useTranslations('whyUs');
  
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

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('approach.title')}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  {t('approach.p1')}
                </p>
                <p>
                  {t('approach.p2')}
                </p>
                <p>
                  {t('approach.p3')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
                {t('different.title')}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: t('different.ethical.title'),
                  description: t('different.ethical.description')
                },
                {
                  icon: Target,
                  title: t('different.realistic.title'),
                  description: t('different.realistic.description')
                },
                {
                  icon: Briefcase,
                  title: t('different.professional.title'),
                  description: t('different.professional.description')
                },
                {
                  icon: Award,
                  title: t('different.quality.title'),
                  description: t('different.quality.description')
                },
                {
                  icon: Clock,
                  title: t('different.timelines.title'),
                  description: t('different.timelines.description')
                },
                {
                  icon: Heart,
                  title: t('different.success.title'),
                  description: t('different.success.description')
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <Card className="h-full">
                      <CardHeader>
                        <Icon className="h-10 w-10 text-gold-600 mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-12">
                {t('process.title')}
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {[
                { step: 1, title: t('process.step1.title'), description: t('process.step1.description') },
                { step: 2, title: t('process.step2.title'), description: t('process.step2.description') },
                { step: 3, title: t('process.step3.title'), description: t('process.step3.description') },
                { step: 4, title: t('process.step4.title'), description: t('process.step4.description') },
                { step: 5, title: t('process.step5.title'), description: t('process.step5.description') },
                { step: 6, title: t('process.step6.title'), description: t('process.step6.description') },
                { step: 7, title: t('process.step7.title'), description: t('process.step7.description') }
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
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
        </div>
      </section>

      {/* Why Students Succeed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                {t('why.title')}
              </h2>
              <div className="space-y-4">
                {t.raw('why.reasons').map((reason: string, index: number) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-lg">{reason}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
