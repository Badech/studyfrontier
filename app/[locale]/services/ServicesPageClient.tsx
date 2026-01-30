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

export default function ServicesPageClient() {
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

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={service.delay}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-navy-600 leading-relaxed">
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
      <section className="py-20 md:py-32 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title mb-6">
                {t('process.title')}
              </h2>
              <p className="section-subtitle mx-auto">
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
                  <div className="flex items-start gap-6 bg-white p-8 rounded-2xl border-2 border-navy-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="card-title mb-2">{item.title}</h3>
                      <p className="text-navy-600 leading-relaxed">{item.description}</p>
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