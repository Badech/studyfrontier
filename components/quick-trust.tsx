'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { CheckCircle } from 'lucide-react';

export function QuickTrust() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-20 px-4">
      <Container size="default">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Trust Point 1 */}
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium">{t('trust.point1')}</span>
            </div>
            
            {/* Trust Point 2 */}
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium">{t('trust.point2')}</span>
            </div>
            
            {/* Trust Point 3 */}
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="font-medium">{t('trust.point3')}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
