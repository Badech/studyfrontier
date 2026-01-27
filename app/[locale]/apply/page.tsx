'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { StudyQuiz } from '@/components/StudyQuiz';
import { MessageCircle, CheckCircle, User, FileText, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function ApplyPage() {
  const t = useTranslations('apply');

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    }
  };

  const steps = [
    {
      icon: User,
      title: t('what_to_expect.step1.title'),
      description: t('what_to_expect.step1.description'),
    },
    {
      icon: FileText,
      title: t('what_to_expect.step2.title'),
      description: t('what_to_expect.step2.description'),
    },
    {
      icon: MapPin,
      title: t('what_to_expect.step3.title'),
      description: t('what_to_expect.step3.description'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
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

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Card className="border-2 border-[#25D366] shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-navy-900">
                    {t('whatsapp.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('whatsapp.description')}
                  </p>
                  
                  <Button
                    variant="premium"
                    size="xl"
                    onClick={handleWhatsAppClick}
                    className="text-lg font-semibold"
                  >
                    <MessageCircle className="h-6 w-6" />
                    {t('whatsapp.button')}
                  </Button>

                  <div className="pt-4 flex items-center justify-center gap-2 text-gray-600">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">{t('whatsapp.number')}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-16">
              {t('what_to_expect.title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-navy-900">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    <div className="pt-2">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Quiz Section */}
      <StudyQuiz />

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-navy-900">
                {t('direct_contact.title')}
              </h2>
              <p className="text-gray-600">
                {t('direct_contact.description')}
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
                className="text-lg font-semibold"
              >
                <MessageCircle className="h-5 w-5" />
                {t('direct_contact.button')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
