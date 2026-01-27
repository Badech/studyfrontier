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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                A Clear, Step-by-Step Process
              </h2>
              <p className="text-lg text-gray-600">
                From your first consultation to landing on campus, we guide you through every milestone.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Discovery & Profile Assessment', description: 'We evaluate your academic background, goals, and eligibility for US universities.' },
                { step: 2, title: 'University Matching & Selection', description: 'Identify schools that match your profile, budget, and program interests.' },
                { step: 3, title: 'Application Preparation', description: 'Complete applications, essays, recommendations, and required documents.' },
                { step: 4, title: 'I-20 Document Processing', description: 'Receive your I-20 from your admitted university to begin visa process.' },
                { step: 5, title: 'F-1 Visa Preparation', description: 'SEVIS payment, DS-160 form, interview preparation, and document review.' },
                { step: 6, title: 'Pre-Departure Support', description: 'Travel planning, housing, orientation, and final preparations for your journey.' }
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
