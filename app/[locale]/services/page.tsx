'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  MessageSquare, 
  GraduationCap, 
  FileCheck, 
  Plane, 
  BookOpen, 
  Luggage 
} from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      icon: MessageSquare,
      title: t('consultation.title'),
      description: t('consultation.description'),
      delay: 0.1
    },
    {
      icon: GraduationCap,
      title: t('university.title'),
      description: t('university.description'),
      delay: 0.2
    },
    {
      icon: FileCheck,
      title: t('admission.title'),
      description: t('admission.description'),
      delay: 0.3
    },
    {
      icon: Plane,
      title: t('visa.title'),
      description: t('visa.description'),
      delay: 0.4
    },
    {
      icon: BookOpen,
      title: t('pathway.title'),
      description: t('pathway.description'),
      delay: 0.5
    },
    {
      icon: Luggage,
      title: t('predeparture.title'),
      description: t('predeparture.description'),
      delay: 0.6
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={service.delay}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                {t('process.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('process.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: t('process.step1.title'), description: t('process.step1.description') },
                { step: 2, title: t('process.step2.title'), description: t('process.step2.description') },
                { step: 3, title: t('process.step3.title'), description: t('process.step3.description') },
                { step: 4, title: t('process.step4.title'), description: t('process.step4.description') },
                { step: 5, title: t('process.step5.title'), description: t('process.step5.description') },
                { step: 6, title: t('process.step6.title'), description: t('process.step6.description') }
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
