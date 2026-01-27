'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  FileText,
  CheckCircle,
  Download,
  Mail,
  MessageCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function I20GuidePage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email captured:', email);
    setIsSubmitted(true);
  };

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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-400 rounded-full mb-4">
                <FileText className="h-8 w-8 text-navy-900" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                How to Get an I-20 from US Universities
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Complete step-by-step guide for Moroccan students
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
                  <CardTitle className="text-3xl">Download Complete I-20 Guide PDF</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Get the detailed guide with templates and examples
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
                      Send Me the I-20 Guide
                    </Button>
                  </form>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    ✓ Instant delivery ✓ Templates included ✓ Free
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
                    We've sent the complete I-20 guide to your inbox
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* What is I-20 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                What is Form I-20?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>Form I-20</strong> (Certificate of Eligibility for Nonimmigrant Student Status) is the most important document for F-1 visa application. It's issued by your US university and proves you've been accepted and can afford to study.
                </p>
                <p>
                  Without an I-20, you cannot:
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Apply for F-1 student visa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Pay SEVIS fee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Schedule visa interview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>Enter the United States as a student</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardHeader>
                  <AlertCircle className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Important Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900">
                    The I-20 is issued by your university's SEVP (Student and Exchange Visitor Program) office, NOT by the US Embassy. You must first be admitted and meet all financial requirements.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-12">
                How to Get Your I-20: Step-by-Step
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Get Accepted to SEVP-Approved University',
                  description: 'Apply to US universities approved by SEVP. Check the SEVP school search tool. Most accredited universities are SEVP-approved.',
                  time: '2-6 months',
                  details: [
                    'Submit complete application with all documents',
                    'Meet English proficiency requirements (or get conditional admission)',
                    'Meet academic requirements for the program',
                    'Receive official admission letter'
                  ]
                },
                {
                  step: 2,
                  title: 'Submit Financial Documents',
                  description: 'Prove you can afford tuition + living expenses for at least the first year. This is the most critical step.',
                  time: '1-2 weeks',
                  details: [
                    'Bank statements (last 6 months) showing required funds',
                    'Sponsor letter (if parents/family are sponsoring)',
                    'Scholarship/assistantship letters (if applicable)',
                    'Loan approval letters (if using education loan)',
                    'Property documents (as additional proof)',
                    'Sponsor\'s income tax returns'
                  ]
                },
                {
                  step: 3,
                  title: 'Complete I-20 Request Form',
                  description: 'University will send you an I-20 request form. Fill it out accurately with your personal and financial information.',
                  time: '1-2 days',
                  details: [
                    'Personal information (name as in passport)',
                    'Date of birth and place of birth',
                    'Passport information',
                    'Financial information',
                    'Program start date preference',
                    'Dependents information (if bringing family)'
                  ]
                },
                {
                  step: 4,
                  title: 'Pay Deposits (If Required)',
                  description: 'Some universities require tuition deposit or enrollment fee before issuing I-20. Amount varies ($200-$5,000).',
                  time: '1-3 days',
                  details: [
                    'Check university\'s deposit requirement',
                    'Pay via wire transfer or credit card',
                    'Keep payment receipt as proof',
                    'Deposits are usually non-refundable or partially refundable'
                  ]
                },
                {
                  step: 5,
                  title: 'Receive I-20 Form',
                  description: 'University issues and sends I-20. Can be emailed (PDF) or mailed (original). Both are acceptable for visa application.',
                  time: '1-4 weeks after submitting documents',
                  details: [
                    'Check all information is correct',
                    'Verify SEVIS ID number',
                    'Confirm program details and dates',
                    'Sign and date page 1 (you) and page 3 (if bringing dependents)',
                    'Make copies for your records'
                  ]
                },
                {
                  step: 6,
                  title: 'Pay SEVIS Fee',
                  description: 'Pay $350 SEVIS I-901 fee online at fmjfee.com using SEVIS ID from your I-20.',
                  time: '15 minutes + 3 days processing',
                  details: [
                    'Go to fmjfee.com',
                    'Enter SEVIS ID from I-20',
                    'Pay $350 via credit card',
                    'Print payment receipt',
                    'Wait 3+ days before scheduling visa interview'
                  ]
                },
                {
                  step: 7,
                  title: 'Apply for F-1 Visa',
                  description: 'With I-20 in hand, you can now complete DS-160 and schedule your F-1 visa interview at US Embassy in Casablanca.',
                  time: '2-4 weeks wait + interview',
                  details: [
                    'Complete DS-160 form online',
                    'Pay visa fee ($185)',
                    'Schedule interview appointment',
                    'Prepare all required documents',
                    'Attend interview with I-20'
                  ]
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
                          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{item.description}</p>
                      {item.details && (
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-navy-900 mb-8">
                Common Questions About I-20
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {[
                {
                  q: 'How much money do I need to show for I-20?',
                  a: 'You must show funds for tuition + living expenses for at least 1 year. This typically ranges from $25,000 to $70,000 depending on the university and location. Public universities in smaller cities are cheaper.'
                },
                {
                  q: 'Can my parents sponsor me?',
                  a: 'Yes! Most Moroccan students are sponsored by parents. You need bank statements, sponsor letter, and proof of income/assets from your sponsor.'
                },
                {
                  q: 'How long does it take to get I-20?',
                  a: 'After submitting all documents, universities typically issue I-20 within 1-4 weeks. Rush processing may be available for an extra fee.'
                },
                {
                  q: 'What if information on my I-20 is wrong?',
                  a: 'Contact your university\'s international office immediately. They can issue a corrected I-20. Never alter the document yourself.'
                },
                {
                  q: 'Can I work with an I-20?',
                  a: 'I-20 allows limited on-campus work (up to 20 hours/week during semester). After 1 year, you may apply for CPT (Curricular Practical Training) or OPT (Optional Practical Training) for off-campus work.'
                }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{item.a}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Official Sources & References</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Last updated:</strong> January 2025
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    • <a href="https://studyinthestates.dhs.gov/students" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Study in the States (DHS Official Site)</a>
                  </li>
                  <li>
                    • <a href="https://www.ice.gov/sevis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SEVIS - Student and Exchange Visitor Program</a>
                  </li>
                  <li>
                    • <a href="https://www.fmjfee.com/i901fee/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SEVIS I-901 Fee Payment System</a>
                  </li>
                  <li>
                    • <a href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Department of State - Student Visa</a>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  Note: I-20 requirements and SEVIS fees are subject to change. Always verify current information with your designated school official (DSO).
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-gray-200">
                {t('cta.subtitle')}
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Apply via WhatsApp
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
