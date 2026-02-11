'use client';

import { useTranslations } from 'next-intl';
import { FadeInUpDiv } from '@/components/ui/motion';
import { Calendar, TrendingUp } from 'lucide-react';

export function UrgencyBanner() {
  const t = useTranslations('urgency');

  return (
    <FadeInUpDiv >
      <div className="w-full bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground py-3 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 flex-wrap text-center">
          <Calendar className="h-5 w-5 animate-pulse" />
          <span className="font-semibold text-sm md:text-base">
            {t('message')}
          </span>
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>
    </FadeInUpDiv>
  );
}
