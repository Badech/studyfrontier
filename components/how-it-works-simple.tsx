'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';

export function HowItWorksSimple() {
  const t = useTranslations('simple');

  return (
    <section className="py-20 md:py-24 px-4">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('process.title')}
          </h2>
        </div>
        
        {/* 4 Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md">
                1
              </div>
              <p className="font-medium text-sm sm:text-base md:text-lg leading-snug">{t('process.step1')}</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md">
                2
              </div>
              <p className="font-medium text-sm sm:text-base md:text-lg leading-snug">{t('process.step2')}</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md">
                3
              </div>
              <p className="font-medium text-sm sm:text-base md:text-lg leading-snug">{t('process.step3')}</p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-md">
                4
              </div>
              <p className="font-medium text-sm sm:text-base md:text-lg leading-snug">{t('process.step4')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
