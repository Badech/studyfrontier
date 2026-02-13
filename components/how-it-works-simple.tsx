'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';

export function HowItWorksSimple() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-20 px-4">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('process.title')}
          </h2>
        </div>
        
        {/* 4 Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <p className="font-medium text-lg">{t('process.step1')}</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <p className="font-medium text-lg">{t('process.step2')}</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <p className="font-medium text-lg">{t('process.step3')}</p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <p className="font-medium text-lg">{t('process.step4')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
