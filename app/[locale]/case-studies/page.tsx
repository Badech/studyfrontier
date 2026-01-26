'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  FileText,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function CaseStudiesPage() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  // Template structure for future case studies
  const caseStudyTemplate = {
    id: 'template-001',
    title: 'From [City] to [University]: A [Program] Success Story',
    student: {
      name: 'Student Name (Optional: Can be anonymous)',
      background: 'Background info',
      city: 'Moroccan City'
    },
    challenge: {
      title: 'The Challenge',
      description: 'What obstacles did the student face?',
      points: [
        'Academic challenge or gap',
        'Financial constraint',
        'English proficiency level',
        'Specific circumstance'
      ]
    },
    approach: {
      title: 'Our Approach',
      description: 'How did StudyFrontier help?',
      steps: [
        'Initial assessment and goal-setting',
        'Strategic university selection process',
        'Application and essay guidance',
        'Financial planning and documentation',
        'Visa preparation strategy',
        'Final outcome'
      ]
    },
    outcome: {
      title: 'The Outcome',
      description: 'Final results',
      achievements: [
        'Admitted to [X] universities',
        'Received scholarship/financial aid',
        'F-1 visa approved',
        'Currently enrolled and succeeding'
      ]
    },
    timeline: '8 months from consultation to enrollment',
    program: 'Program Type',
    university: 'University Name',
    tags: ['USA', 'Undergraduate/Masters', 'Success']
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <FileText className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Case Studies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Detailed breakdowns of how we've helped students navigate the US admissions process
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="border-2 border-blue-500">
                <CardHeader className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl mb-3">Case Studies In Progress</CardTitle>
                  <CardDescription className="text-lg">
                    We're currently documenting detailed case studies of students we've successfully guided through the US admissions process. These will include:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      'Detailed academic profiles and starting points',
                      'Specific challenges each student faced',
                      'Our strategic approach and recommendations',
                      'University selection rationale',
                      'Application and essay strategies',
                      'Financial planning and documentation',
                      'Visa preparation process',
                      'Final outcomes and current status'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-6 border-t">
                    <Button variant="premium" size="lg" onClick={handleWhatsAppClick}>
                      <MessageCircle className="h-5 w-5" />
                      Be Featured in a Future Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Study Template Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8 text-center">
                Case Study Format Preview
              </h2>
              <p className="text-gray-600 text-center mb-12">
                Here's what our detailed case studies will look like:
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {/* Challenge Section */}
              <AnimatedSection delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-900">
                      {caseStudyTemplate.challenge.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {caseStudyTemplate.challenge.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {caseStudyTemplate.challenge.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-600 font-bold mt-1">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Approach Section */}
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-900">
                      {caseStudyTemplate.approach.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {caseStudyTemplate.approach.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {caseStudyTemplate.approach.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-700 font-semibold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Outcome Section */}
              <AnimatedSection delay={0.3}>
                <Card className="border-2 border-green-500">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy-900 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                      {caseStudyTemplate.outcome.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {caseStudyTemplate.outcome.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudyTemplate.outcome.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Key Takeaways */}
              <AnimatedSection delay={0.4}>
                <Card className="bg-gold-50 border-gold-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Key Takeaways</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>Lesson or insight from this case</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>What made this approach successful</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-5 w-5 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>Advice for students in similar situations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                Want Your Own Success Story?
              </h2>
              <p className="text-xl text-gray-200">
                Let's discuss your situation and create a strategic plan for your US university admission
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Start Your Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
