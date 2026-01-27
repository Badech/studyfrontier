'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LeadMagnet } from '@/components/LeadMagnet';
import { StudyQuiz } from '@/components/StudyQuiz';
import {
  Clock,
  DollarSign,
  FileCheck,
  CheckCircle,
  MessageCircle,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function MastersPage() {
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
                Master's Programs in the USA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Graduate degrees for Moroccan professionals and Bachelor's graduates
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Discuss Your Master's Options
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
                <div className="text-2xl font-bold text-navy-900 mb-1">1-2 Years</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <DollarSign className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">$30k-80k</div>
                <div className="text-gray-600">Total Cost</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <FileCheck className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">GRE/GMAT</div>
                <div className="text-gray-600">Often Required</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-navy-900 mb-1">$70k+</div>
                <div className="text-gray-600">Avg Starting Salary</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                What is a Master's Degree?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  A Master's degree is a postgraduate qualification that typically takes 1-2 years to complete. For Moroccan students with a Licence (Bachelor's) or engineering degree, a US Master's offers advanced specialization and significantly better career prospects.
                </p>
                <p>
                  Most programs are 2 years (4 semesters), though some accelerated programs can be completed in 12-18 months. After graduation, you can work in the US for up to 3 years through OPT (Optional Practical Training) - extended for STEM fields.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <Briefcase className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>Top Master's Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        'MBA (Business Administration)',
                        'MS Computer Science',
                        'MS Data Science',
                        'MS Engineering (various)',
                        'MS Finance',
                        'Master of Public Health',
                        'MS Information Systems',
                        'Master of Education'
                      ].map(program => (
                        <li key={program} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {program}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-gold-600 mb-2" />
                    <CardTitle>Why Choose a US Master's?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        'World-renowned universities',
                        'STEM OPT: 3 years work authorization',
                        'Higher earning potential',
                        'Research & innovation focus',
                        'Global networking',
                        'Pathway to PhD (if desired)',
                        'H-1B visa pathway'
                      ].map(benefit => (
                        <li key={benefit} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {benefit}
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
                Master's Admission Requirements
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  title: 'Bachelor\'s Degree',
                  description: 'Completed 4-year Bachelor\'s or Moroccan Licence/engineering degree with good grades (minimum 12/20)',
                  required: true
                },
                {
                  title: 'GRE or GMAT',
                  description: 'GRE for most programs (minimum 310), GMAT for business programs (minimum 600). Some programs waive this requirement.',
                  required: 'Often'
                },
                {
                  title: 'English Proficiency',
                  description: 'TOEFL iBT 85+ or IELTS 7.0+. Higher scores (100+ TOEFL) needed for top programs.',
                  required: true
                },
                {
                  title: 'Statement of Purpose',
                  description: '500-1000 word essay explaining your academic goals, research interests, and why this program.',
                  required: true
                },
                {
                  title: 'Letters of Recommendation',
                  description: '2-3 letters from professors or employers who know your work well.',
                  required: true
                },
                {
                  title: 'Resume/CV',
                  description: 'Academic and professional experience, research, publications, projects.',
                  required: true
                },
                {
                  title: 'Transcripts',
                  description: 'Official transcripts from all universities attended, translated and evaluated.',
                  required: true
                },
                {
                  title: 'Work Experience',
                  description: 'Some programs (especially MBA) require 2-5 years professional experience.',
                  required: 'Sometimes'
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
                            : 'bg-yellow-100 text-yellow-800'
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
                Ready to Pursue Your Master's in the USA?
              </h2>
              <p className="text-xl text-gray-200">
                Get expert guidance on program selection and applications
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Free Study Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
