'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
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
                Who We Work With
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                We're selective about the students we accept. Here's why—and if we're the right fit for you.
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
                Why We're Selective
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  Quality consulting requires focus. We work with a limited number of students each admissions cycle because we provide thorough, personalized guidance—not assembly-line service.
                </p>
                <p>
                  This means we need to ensure there's mutual fit. We need students who are academically prepared, financially ready, and genuinely committed to succeeding in the US. In return, you get our full attention and expertise.
                </p>
                <p>
                  If you meet our criteria, we'll invest significant time in your success. If you don't, we'll be honest with you—and may recommend alternative paths or timelines.
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
                  Who We Work With
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  title: 'Academically Prepared Students',
                  criteria: [
                    'Moroccan Baccalauréat with 12/20+ (14+ for competitive programs)',
                    'Or Bachelor\'s/Licence degree for graduate programs',
                    'Willingness to take standardized tests (SAT, GRE, TOEFL)',
                    'Demonstrated academic consistency across years'
                  ]
                },
                {
                  title: 'Financially Ready Families',
                  criteria: [
                    'Minimum $25,000-$70,000 available for first year (depending on university)',
                    'Clear source of funds (family savings, property, business income)',
                    'Realistic understanding of 4-year costs for Bachelor\'s or 2-year for Master\'s',
                    'Ability to provide legitimate bank statements and financial documents'
                  ]
                },
                {
                  title: 'Serious, Committed Students',
                  criteria: [
                    'Starting the process 8-12 months before desired enrollment',
                    'Willing to invest time in applications, essays, and test prep',
                    'Open to honest feedback about university fit and chances',
                    'Ready to follow our guidance and meet deadlines'
                  ]
                },
                {
                  title: 'English Proficient (or Willing to Be)',
                  criteria: [
                    'Intermediate English level minimum (can pursue pathway programs if needed)',
                    'Willing to take TOEFL/IELTS or complete ESL program',
                    'Able to communicate clearly in consultation meetings',
                    'Committed to improving English before program starts'
                  ]
                },
                {
                  title: 'Realistic About the Process',
                  criteria: [
                    'Understanding that no one can guarantee admission or visa approval',
                    'Willing to apply to multiple universities (not just "top 10")',
                    'Open to schools in different states and regions',
                    'Prepared for rejection and plan B options'
                  ]
                }
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
                        {section.criteria.map((criterion, i) => (
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
                  Who We Don't Work With
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Honesty goes both ways. If you fit these descriptions, we're likely not the right consultancy for you:
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {[
                {
                  title: 'Students Expecting Guarantees',
                  description: 'If you want someone to promise admission to Harvard or guarantee visa approval, that\'s not us. No ethical consultant can guarantee these outcomes.'
                },
                {
                  title: 'Last-Minute Applicants',
                  description: 'If you want to enroll in 2-3 months, the timeline is too compressed. Proper preparation takes 6-12 months minimum.'
                },
                {
                  title: 'Financially Unprepared Families',
                  description: 'If you don\'t have the required funds now and no clear plan to obtain them, it\'s not the right time. We can\'t fabricate financial documents.'
                },
                {
                  title: 'Students Seeking Shortcuts',
                  description: 'If you want fake documents, guaranteed admission schemes, or ways to bypass visa requirements—we don\'t offer that, and neither should anyone else.'
                },
                {
                  title: 'Students Only Targeting "Top 10" Schools',
                  description: 'If you\'ll only consider Ivy League universities despite not having competitive grades/scores, we\'ll have difficulty finding suitable options.'
                },
                {
                  title: 'Students Not Willing to Follow Guidance',
                  description: 'If you want to ignore deadlines, skip steps, or not take our advice seriously, our process won\'t work for you.'
                },
                {
                  title: 'Students Looking for Cheapest Service',
                  description: 'If price is your only consideration and you\'re comparing based on lowest fees, we\'re probably not the best fit. Quality consulting costs money.'
                }
              ].map((item, index) => (
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
                    <CardTitle className="text-xl mb-2">Not Sure If You Qualify?</CardTitle>
                    <p className="text-gray-700">
                      These criteria are guidelines, not absolutes. If you're close but not perfect, contact us anyway. We'll have an honest conversation about your options—whether that's moving forward now, preparing for a future cycle, or exploring alternative pathways.
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
                Think We're the Right Fit?
              </h2>
              <p className="text-xl text-gray-200">
                Let's have an honest conversation about your goals, qualifications, and timeline.
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Schedule Initial Consultation
              </Button>
              <p className="text-sm text-gray-300">
                No obligation. No pressure. Just an honest assessment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
