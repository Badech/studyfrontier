'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  FileCheck,
  CheckCircle,
  Download,
  Mail,
  MessageCircle,
  AlertCircle
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function F1VisaChecklistPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with email service
    console.log('Email captured:', email);
    setIsSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const checklist = [
    {
      category: 'Essential Documents',
      items: [
        'Valid passport (valid for at least 6 months beyond stay)',
        'Form I-20 from your US university',
        'SEVIS fee payment receipt ($350)',
        'DS-160 confirmation page with barcode',
        'Visa application fee receipt ($185)',
        'Visa appointment confirmation',
        'Passport-sized photos (2x2 inches, recent)'
      ]
    },
    {
      category: 'Financial Documents',
      items: [
        'Bank statements (last 6 months)',
        'Sponsor letter (if parents are sponsoring)',
        'Property documents (if applicable)',
        'Tax returns or income proof',
        'Scholarship/assistantship letters',
        'Education loan approval (if applicable)'
      ]
    },
    {
      category: 'Academic Documents',
      items: [
        'University admission letter',
        'Official transcripts (high school/university)',
        'Standardized test scores (SAT/GRE/GMAT)',
        'English proficiency scores (TOEFL/IELTS)',
        'Resume/CV',
        'Study plan or statement of purpose'
      ]
    },
    {
      category: 'Supporting Documents',
      items: [
        'Ties to Morocco (property, family, job)',
        'Previous US visa (if applicable)',
        'Travel history',
        'Work experience letters (if applicable)',
        'Marriage certificate (if applicable)',
        'Birth certificate'
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-400 rounded-full mb-4">
                <FileCheck className="h-8 w-8 text-navy-900" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                F-1 Visa Checklist for Moroccan Students
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Complete document checklist for US student visa interview in Casablanca
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Download CTA */}
      {!isSubmitted ? (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="max-w-2xl mx-auto border-2 border-blue-500 shadow-xl">
                <CardHeader className="text-center">
                  <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl">Download Complete Checklist PDF</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Get the printable version with preparation tips sent to your email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    </div>
                    <Button type="submit" variant="premium" size="xl" className="w-full">
                      <Download className="h-5 w-5" />
                      Send Me the Complete Checklist
                    </Button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    ✓ Instant delivery ✓ No spam ✓ Unsubscribe anytime
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      ) : (
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="max-w-2xl mx-auto border-2 border-green-500">
                <CardHeader className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-3xl">Check Your Email!</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    We've sent the complete F-1 visa checklist PDF to your inbox
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-yellow-900 mb-2">Important for Moroccan Students:</p>
              <p className="text-yellow-800">
                F-1 visa interviews are conducted at the US Embassy in Casablanca. Current appointment wait times are 2-4 weeks. Apply early! Bring ALL original documents - the consular officer may ask for any of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Checklist */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {checklist.map((section, sectionIndex) => (
              <AnimatedSection key={section.category} delay={sectionIndex * 0.1}>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">
                    {section.category}
                  </h2>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">
                Pro Tips for Your F-1 Visa Interview
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Be Honest & Clear',
                  tip: 'Answer questions directly and honestly. Don\'t memorize scripts - speak naturally.'
                },
                {
                  title: 'Show Strong Ties to Morocco',
                  tip: 'Demonstrate family, property, or job ties that show you\'ll return after studies.'
                },
                {
                  title: 'Know Your Program',
                  tip: 'Be able to explain your major, why you chose it, and your career plans.'
                },
                {
                  title: 'Financial Proof is Critical',
                  tip: 'Show you can afford all years of study, not just the first year.'
                },
                {
                  title: 'Dress Professionally',
                  tip: 'Business casual attire shows you take the interview seriously.'
                },
                {
                  title: 'Arrive Early',
                  tip: 'Get to the embassy 30 minutes before your appointment time.'
                }
              ].map((tip, index) => (
                <AnimatedSection key={tip.title} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{tip.tip}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
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
                Need Help with Your F-1 Visa Application?
              </h2>
              <p className="text-xl text-gray-200">
                Get personalized guidance and mock interview preparation
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-5 w-5" />
                Schedule Visa Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
