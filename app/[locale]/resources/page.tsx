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
      category: 'Country Guides',
      icon: MapPin,
      items: [
        {
          title: 'Study in USA - Complete Guide',
          description: 'Everything about US universities, visa process, and costs',
          link: '/study-in-usa',
          type: 'Guide'
        },
        {
          title: 'Study in Canada',
          description: 'Coming soon - Canadian universities and study permits',
          link: '#',
          type: 'Coming Soon'
        },
        {
          title: 'Study in Germany',
          description: 'Coming soon - Free education in Germany',
          link: '#',
          type: 'Coming Soon'
        }
      ]
    },
    {
      category: 'Program Guides',
      icon: GraduationCap,
      items: [
        {
          title: 'Undergraduate Study in USA',
          description: 'Bachelor\'s programs, requirements, and application process',
          link: '/programs/undergraduate',
          type: 'Guide'
        },
        {
          title: 'Master\'s Programs in USA',
          description: 'Graduate degrees, requirements, and career outcomes',
          link: '/programs/masters',
          type: 'Guide'
        },
        {
          title: 'English Pathway Programs',
          description: 'ESL and pathway programs for international students',
          link: '/programs/pathways',
          type: 'Guide'
        }
      ]
    },
    {
      category: 'Visa & Documentation',
      icon: FileCheck,
      items: [
        {
          title: 'F-1 Visa Checklist',
          description: 'Complete checklist for US student visa application',
          link: '/resources/f1-visa-checklist',
          type: 'Checklist'
        },
        {
          title: 'How to Get an I-20',
          description: 'Step-by-step guide to obtaining your I-20 form',
          link: '/resources/i20-guide',
          type: 'Guide'
        }
      ]
    },
    {
      category: 'Financial Planning',
      icon: DollarSign,
      items: [
        {
          title: 'Cost of Studying in USA',
          description: 'Tuition, living expenses, and budget planning',
          link: '/blog/cost-of-studying-usa',
          type: 'Article'
        },
        {
          title: 'Scholarships for Moroccan Students',
          description: 'Available scholarships and how to apply',
          link: '/blog/scholarships-moroccan-students',
          type: 'Article'
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
                        <Link href={`/${params.locale}${item.link}`}>
                          <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  item.type === 'Coming Soon' 
                                    ? 'bg-gray-100 text-gray-600' 
                                    : 'bg-gold-100 text-gold-800'
                                }`}>
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
                              {item.type !== 'Coming Soon' && (
                                <Button variant="ghost" size="sm" className="group-hover:text-gold-600">
                                  {item.type === 'Checklist' ? 'Download' : 'Read More'}
                                  {item.type === 'Checklist' ? (
                                    <Download className="h-4 w-4 ml-2" />
                                  ) : (
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                  )}
                                </Button>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
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
