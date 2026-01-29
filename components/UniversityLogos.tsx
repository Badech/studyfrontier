'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GraduationCap } from 'lucide-react';
import { universities } from '@/lib/universities';

export function UniversityLogos() {
  const t = useTranslations('universities');

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-2">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              <span className="uppercase tracking-wide font-medium">
                {t('header')}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* University Logos Grid */}
        <AnimatedSection delay={0.1}>
          <div className="relative overflow-hidden">
            {/* Logos Container */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
              {universities.map((university) => (
                <div
                  key={university.id}
                  className="group flex items-center justify-center transition-all duration-300"
                  style={{ minWidth: '120px', maxWidth: '180px' }}
                >
                  {/* Placeholder for university logo */}
                  {/* Replace with actual Next.js Image component when logos are added */}
                  <div 
                    className="relative w-full h-16 flex items-center justify-center px-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    role="img"
                    aria-label={university.alt}
                  >
                    {/* Temporary text-based logo placeholder */}
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors">
                        {university.name}
                      </div>
                    </div>
                    
                    {/* When you have actual logo files, replace the above div with: */}
                    {/*
                    <Image
                      src={university.logo}
                      alt={university.alt}
                      width={university.width}
                      height={university.height}
                      className="w-auto h-auto max-h-16 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      priority={false}
                    />
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Disclaimer */}
        <AnimatedSection delay={0.2}>
          <div className="mt-8 md:mt-10 text-center">
            <p className="text-xs text-gray-400 max-w-2xl mx-auto">
              {t('disclaimer')}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
