'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  Briefcase,
  Award,
  Clock,
  Heart
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function WhyStudyFrontierPage() {
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
                Why StudyFrontier?
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                We don't promise miracles. We provide clarity, honesty, and expert guidance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                Our Approach
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-xl leading-relaxed">
                  We are not a high-volume agency churning through applications. We are a consulting firm that works with students who are serious, prepared, and ready to invest in their future.
                </p>
                <p>
                  Our process is thorough. We assess your academic background, understand your goals, evaluate your financial readiness, and provide honest recommendations. If we don't think a US university is the right path for you right now, we'll tell you.
                </p>
                <p>
                  This approach means we work with fewer students—but our students succeed. They gain admission to accredited institutions, secure their F-1 visas, and thrive in their programs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
                What Makes Us Different
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Ethical Standards First',
                  description: 'We adhere to all Moroccan and international regulations. No shortcuts, no false documents, no guarantees we can\'t keep. Our reputation depends on doing this right.'
                },
                {
                  icon: Target,
                  title: 'Realistic Expectations',
                  description: 'We match you with universities based on your actual qualifications and budget. Not every student is Harvard material—and that\'s fine. We find the right fit, not the most prestigious name.'
                },
                {
                  icon: Briefcase,
                  title: 'Professional Expertise',
                  description: 'We understand the US admissions system, F-1 visa requirements, and what success actually looks like. This isn\'t guesswork—it\'s experience.'
                },
                {
                  icon: Award,
                  title: 'Quality Over Volume',
                  description: 'We work with a limited number of students each cycle. This allows us to provide the attention your application deserves, not rush through paperwork.'
                },
                {
                  icon: Clock,
                  title: 'Proper Timelines',
                  description: 'Studying in the USA takes 6-12 months of preparation. We don\'t promise overnight results. We walk you through each step at the appropriate pace.'
                },
                {
                  icon: Heart,
                  title: 'Student Success Focus',
                  description: 'Our job isn\'t just to get you admitted—it\'s to ensure you\'re set up to succeed once you arrive. We prepare you for the academic and cultural transition.'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 0.1}>
                    <Card className="h-full">
                      <CardHeader>
                        <Icon className="h-10 w-10 text-gold-600 mb-3" />
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-12">
                Our Process
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Initial Consultation',
                  description: 'We review your academic history, English proficiency, budget, and goals. This is a two-way conversation—we assess if we\'re the right fit for each other.'
                },
                {
                  step: 2,
                  title: 'Honest Assessment',
                  description: 'We tell you where you stand. If your grades aren\'t competitive, we discuss pathway programs or gap year options. If your budget is unrealistic, we say so.'
                },
                {
                  step: 3,
                  title: 'Strategic University Selection',
                  description: 'We identify 5-8 universities that match your profile, budget, and goals. A mix of reach, target, and safety schools—all accredited, all legitimate.'
                },
                {
                  step: 4,
                  title: 'Application Preparation',
                  description: 'We guide you through essays, recommendation letters, transcripts, and test scores. You write your essays—we refine them. This is your application, told authentically.'
                },
                {
                  step: 5,
                  title: 'Financial Documentation',
                  description: 'We help you prepare bank statements, sponsor letters, and financial documents for I-20 issuance. Everything must be legitimate and verifiable.'
                },
                {
                  step: 6,
                  title: 'Visa Preparation',
                  description: 'We prepare you for your F-1 visa interview. Mock interviews, document review, and strategy. We know what the Casablanca consulate looks for.'
                },
                {
                  step: 7,
                  title: 'Pre-Departure Guidance',
                  description: 'Once you have your visa, we help with housing, course registration, travel planning, and cultural preparation. We set you up for success.'
                }
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
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

      {/* Why Students Succeed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 mb-8">
                Why Our Students Succeed
              </h2>
              <div className="space-y-4">
                {[
                  'They receive honest guidance, not false hope',
                  'They apply to universities that match their qualifications',
                  'They\'re financially prepared for the full cost of study',
                  'They understand the F-1 visa process and requirements',
                  'They\'re academically ready for US university rigor',
                  'They have realistic expectations about outcomes',
                  'They\'ve invested time in proper preparation',
                  'They receive ongoing support, not just admission'
                ].map((reason, index) => (
                  <AnimatedSection key={index} delay={index * 0.05}>
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-800 text-lg">{reason}</p>
                    </div>
                  </AnimatedSection>
                ))}
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
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-gray-200">
                If you're serious about studying in the USA and ready to invest the time and effort required, let's talk.
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
