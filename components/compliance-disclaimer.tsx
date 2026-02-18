'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Info } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ComplianceDisclaimerProps {
  variant?: 'default' | 'compact';
  className?: string;
}

/**
 * Compliance disclaimer component
 * Shows legal disclaimer about guidance vs. decisions
 * Links to full Terms of Service
 */
export function ComplianceDisclaimer({ 
  variant = 'default',
  className 
}: ComplianceDisclaimerProps) {
  const t = useTranslations('common');
  const tAccessibility = useTranslations('accessibility');
  const locale = useLocale();

  const disclaimerText = variant === 'compact' 
    ? t('disclaimer_short') 
    : t('disclaimer');

  return (
    <div 
      className={cn(
        "flex items-start gap-2 text-muted-foreground",
        variant === 'compact' ? "text-xs" : "text-sm",
        className
      )}
      role="note"
      aria-label={tAccessibility('compliance_disclaimer_label')}
    >
      <Info className={cn(
        "flex-shrink-0 mt-0.5",
        variant === 'compact' ? "h-3 w-3" : "h-4 w-4"
      )} />
      <p className="leading-relaxed">
        {disclaimerText}{' '}
        <Link 
          href={`/${locale}/terms`}
          className="underline underline-offset-2 hover:text-foreground transition-colors font-medium"
        >
          {t('read_full_terms')}
        </Link>
      </p>
    </div>
  );
}
