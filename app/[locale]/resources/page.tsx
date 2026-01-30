'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { 
  BookOpen, 
  FileText, 
  Download, 
  ExternalLink,
  GraduationCap,
  MapPin,
  DollarSign,
  FileCheck
} from 'lucide-react';

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('resources');
  
  const resources = [
    {
      category: t('categories.countryGuides'),
      icon: MapPin,
      items: [
        {
          title: t('items.studyInUSA.title'),
          description: t('items.studyInUSA.description'),
          link: '/study-in-usa',
          type: t('labels.guide')
        },
        {
          title: t('items.studyInCanada.title'),
          description: t('items.studyInCanada.description'),
          link: '#',
          type: t('labels.comingSoon')
        },
        {
          title: t('items.studyInGermany.title'),
          description: t('items.studyInGermany.description'),
          link: '#',
          type: t('labels.comingSoon')
        }
      ]
    },
    {
      category: t('categories.programGuides'),
      icon: GraduationCap,
      items: [
        {
          title: t('items.undergraduate.title'),
          description: t('items.undergraduate.description'),
          link: '/programs/undergraduate',
          type: t('labels.guide')
        },
        {
          title: t('items.masters.title'),
          description: t('items.masters.description'),
          link: '/programs/masters',
          type: t('labels.guide')
        },
        {
          title: t('items.pathways.title'),
          description: t('items.pathways.description'),
          link: '/programs/pathways',
          type: t('labels.guide')
        }
      ]
    },
    {
      category: t('categories.visaDocumentation'),
      icon: FileCheck,
      items: [
        {
          title: t('items.f1Visa.title'),
          description: t('items.f1Visa.description'),
          link: '/resources/f1-visa-checklist',
          type: t('labels.checklist')
        },
        {
          title: t('items.i20Guide.title'),
          description: t('items.i20Guide.description'),
          link: '/resources/i20-guide',
          type: t('labels.guide')
        }
      ]
    },
    {
      category: t('categories.financialPlanning'),
      icon: DollarSign,
      items: [
        {
          title: t('items.costOfStudying.title'),
          description: t('items.costOfStudying.description'),
          link: '#',
          type: t('labels.comingSoon')
        },
        {
          title: t('items.scholarships.title'),
          description: t('items.scholarships.description'),
          link: '#',
          type: t('labels.comingSoon')
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-400 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-navy-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-200">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {resources.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <div key={section.category}>
                  <AnimatedSection delay={sectionIndex * 0.1}>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-gold-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-navy-900">
                        {section.category}
                      </h2>
                    </div>
                  </AnimatedSection>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <AnimatedSection key={item.title} delay={itemIndex * 0.1}>
                        {item.type === t('labels.comingSoon') ? (
                          // Non-clickable card for coming soon items
                          <Card className="h-full opacity-75 cursor-not-allowed">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                  {item.type}
                                </span>
                              </div>
                              <CardTitle className="text-xl text-gray-600">
                                {item.title}
                              </CardTitle>
                              <CardDescription className="text-sm mt-2">
                                {item.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-500 italic">
                                {t('labels.availableSoon')}
                              </p>
                            </CardContent>
                          </Card>
                        ) : (
                          // Clickable link for active items
                          <Link href={`/${params.locale}${item.link}`}>
                            <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-gold-800">
                                    {item.type}
                                  </span>
                                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gold-600 transition-colors" />
                                </div>
                                <CardTitle className="text-xl group-hover:text-gold-600 transition-colors">
                                  {item.title}
                                </CardTitle>
                                <CardDescription className="text-sm mt-2">
                                  {item.description}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <Button variant="ghost" size="sm" className="group-hover:text-gold-600">
                                  {item.type === t('labels.checklist') ? t('labels.download') : t('labels.readMore')}
                                  {item.type === t('labels.checklist') ? (
                                    <Download className="h-4 w-4 ms-2" />
                                  ) : (
                                    <ExternalLink className="h-4 w-4 ms-2" />
                                  )}
                                </Button>
                              </CardContent>
                            </Card>
                          </Link>
                        )}
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
