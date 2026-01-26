'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LeadMagnet } from '@/components/LeadMagnet';
import {
  Languages,
  Clock,
  CheckCircle,
  MessageCircle,
  BookOpen,
  GraduationCap,
  TrendingUp
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function PathwaysPage() {
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
                English Pathway Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Your bridge to US university admission - No TOEFL/IELTS required
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Learn About Pathways
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What is a Pathway */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                What is a Pathway Program?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  A Pathway Program (also called Conditional Admission) is a preparatory program that helps international students who don't meet direct admission requirements - usually English proficiency - to enter US universities.
                </p>
                <p>
                  <strong>Perfect for Moroccan students who:</strong>
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Have good grades but TOEFL/IELTS score is below requirement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Need to improve academic English before starting degree</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Want guaranteed admission without taking TOEFL/IELTS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Want time to adapt to US academic culture before degree starts</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="text-center">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-gold-600 mx-auto mb-2" />
                    <CardTitle>3-12 Months</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Duration (varies by English level)</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Languages className="h-12 w-12 text-gold-600 mx-auto mb-2" />
                    <CardTitle>No TOEFL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Most programs don't require TOEFL/IELTS</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <GraduationCap className="h-12 w-12 text-gold-600 mx-auto mb-2" />
                    <CardTitle>Guaranteed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Admission to degree program after completion</p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-12">
                How Pathway Programs Work
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Apply to Pathway Program',
                  description: 'Apply with your academic transcripts. No TOEFL required for most programs. You may take a placement test to determine your English level.',
                  duration: '2-4 weeks'
                },
                {
                  step: 2,
                  title: 'Receive Conditional Admission',
                  description: 'Get admitted to both the pathway program AND the degree program. Your I-20 will show both programs.',
                  duration: '2-4 weeks'
                },
                {
                  step: 3,
                  title: 'Study English + Academic Skills',
                  description: 'Take intensive English courses plus some academic courses. Learn US academic writing, presentation skills, and critical thinking.',
                  duration: '3-12 months'
                },
                {
                  step: 4,
                  title: 'Complete Pathway Requirements',
                  description: 'Pass all pathway courses with required grades (usually B or higher). No external TOEFL/IELTS needed.',
                  duration: 'End of pathway'
                },
                {
                  step: 5,
                  title: 'Start Degree Program',
                  description: 'Automatically progress to your Bachelor\'s or Master\'s program. Some pathway credits may count toward your degree.',
                  duration: 'Next semester'
                }
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                Why Choose a Pathway Program?
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Languages,
                  title: 'No TOEFL/IELTS Required',
                  benefit: 'Save time and money on test prep. Most pathways use internal placement tests.'
                },
                {
                  icon: GraduationCap,
                  title: 'Guaranteed Admission',
                  benefit: 'Once you complete the pathway, you\'re automatically admitted to the degree program.'
                },
                {
                  icon: BookOpen,
                  title: 'Academic Preparation',
                  benefit: 'Learn US academic culture, writing styles, and classroom expectations.'
                },
                {
                  icon: TrendingUp,
                  title: 'Smooth Transition',
                  benefit: 'Gradual adjustment to US education system before starting your degree.'
                },
                {
                  icon: CheckCircle,
                  title: 'Smaller Classes',
                  benefit: 'More individual attention and support during pathway program.'
                },
                {
                  icon: Clock,
                  title: 'Flexible Start Dates',
                  benefit: 'Multiple start dates per year (Fall, Spring, Summer) for most pathways.'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <Card>
                      <CardHeader>
                        <Icon className="h-8 w-8 text-gold-600 mb-2" />
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.benefit}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
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
                Is a Pathway Program Right for You?
              </h2>
              <p className="text-xl text-gray-200">
                Get personalized recommendations based on your English level
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Discuss Pathway Options
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
