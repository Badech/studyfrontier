'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/AnimatedSection';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials, testimonialStats } from '@/lib/testimonials';
import { Users, Award, Building2, Globe } from 'lucide-react';

interface TestimonialsSectionProps {
  showStats?: boolean;
  maxTestimonials?: number;
  variant?: 'default' | 'compact';
}

export function TestimonialsSection({ 
  showStats = true, 
  maxTestimonials = 6,
  variant = 'default' 
}: TestimonialsSectionProps) {
  const t = useTranslations('testimonials');
  const displayTestimonials = testimonials.slice(0, maxTestimonials);

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-gold-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              {t('title', { default: 'What Our Students Say' })}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t('subtitle', { 
                default: 'Real stories from students who achieved their dream of studying in the USA' 
              })}
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Bar (if enabled) */}
        {showStats && (
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-16">
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-navy-900">
                  {testimonialStats.totalStudents}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {t('stats.students', { default: 'Students Helped' })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-gold-600" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-navy-900">
                  {testimonialStats.successRate}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {t('stats.successRate', { default: 'Success Rate' })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-navy-900">
                  {testimonialStats.universities}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {t('stats.universities', { default: 'Universities' })}
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-navy-900">
                  {testimonialStats.countries}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {t('stats.countries', { default: 'Countries' })}
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Testimonials Grid */}
        <div className={`grid grid-cols-1 ${
          variant === 'compact' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
        } gap-6 md:gap-8 max-w-7xl mx-auto`}>
          {displayTestimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.1 * (index % 3)}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badge */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200">
              <Award className="h-5 w-5 text-gold-600" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-700">
                {t('badge', { default: 'All testimonials are from real students' })}
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
