'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LeadMagnet } from '@/components/LeadMagnet';
import { StudyQuiz } from '@/components/StudyQuiz';
import {
  GraduationCap,
  Clock,
  DollarSign,
  FileCheck,
  Calendar,
  CheckCircle,
  BookOpen,
  MessageCircle,
  TrendingUp
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function UndergraduatePage() {
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
                Undergraduate Study in the USA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Complete guide to Bachelor's degrees for Moroccan students
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                Get Personalized Guidance
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <Clock className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">4 Years</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">$20k-60k</div>
                <div className="text-gray-600">Annual Cost</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <FileCheck className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">SAT/ACT</div>
                <div className="text-gray-600">Often Required</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <Calendar className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">Fall/Spring</div>
                <div className="text-gray-600">Intakes</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What is a Bachelor's Degree */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                What is a Bachelor's Degree (Undergraduate)?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  A Bachelor's degree is a 4-year undergraduate program offered by US universities. It's equivalent to a "Licence" in the Moroccan system but typically includes 2 years of general education plus 2 years of specialized study.
                </p>
                <p>
                  For Moroccan students with a Baccalauréat, you can apply directly to US universities for freshman (first-year) admission.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <GraduationCap className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>Popular Majors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {['Computer Science', 'Business Administration', 'Engineering', 'International Relations', 'Pre-Med/Biology', 'Economics'].map(major => (
                        <li key={major} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {major}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>Career Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {['OPT work authorization (1-3 years)', 'Average starting salary: $55k-75k', 'Option to pursue Master\'s', 'Strong alumni networks', 'Global career opportunities'].map(outcome => (
                        <li key={outcome} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                Admission Requirements for Moroccan Students
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  title: 'High School Diploma (Baccalauréat)',
                  description: 'Completed Moroccan Baccalauréat with good grades (minimum 12/20, but 14+ recommended for competitive universities)',
                  required: true
                },
                {
                  title: 'English Proficiency',
                  description: 'TOEFL iBT 80+ or IELTS 6.5+. Some universities accept Duolingo English Test (100+)',
                  required: true
                },
                {
                  title: 'SAT or ACT',
                  description: 'Required by many universities. SAT: 1200+ competitive, 1400+ for top schools. Test-optional schools available.',
                  required: 'Sometimes'
                },
                {
                  title: 'Transcripts',
                  description: 'Official high school transcripts translated to English and evaluated by credential evaluation service',
                  required: true
                },
                {
                  title: 'Essays',
                  description: 'Personal statement (Common App essay) plus supplemental essays for each university',
                  required: true
                },
                {
                  title: 'Letters of Recommendation',
                  description: '2-3 letters from teachers or counselors who know you well',
                  required: true
                },
                {
                  title: 'Financial Documents',
                  description: 'Bank statements showing $25k-70k depending on university for I-20 issuance',
                  required: true
                },
                {
                  title: 'Extracurriculars',
                  description: 'Activities, leadership, volunteer work, sports, or work experience',
                  required: 'Recommended'
                }
              ].map((req, index) => (
                <AnimatedSection key={req.title} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{req.title}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          req.required === true 
                            ? 'bg-red-100 text-red-800' 
                            : req.required === 'Sometimes'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {req.required === true ? 'Required' : req.required}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{req.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Quiz */}
      <StudyQuiz />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                Ready to Apply for Your Bachelor's?
              </h2>
              <p className="text-xl text-gray-200">
                Get expert help with your undergraduate applications
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                Start Your Application
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
