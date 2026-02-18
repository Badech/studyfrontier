'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium text-muted-foreground mr-1">
        {t('common.language')}:
      </span>
      <div className="flex gap-1">
        {locales.map((loc) => (
          <Button
            key={loc}
            variant={locale === loc ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => switchLocale(loc)}
            className="min-w-[60px]"
            aria-label={`${t('common.language')}: ${t(`locales.${loc}`)}`}
            aria-current={locale === loc ? 'true' : 'false'}
          >
            {t(`locales.${loc}`)}
          </Button>
        ))}
      </div>
    </div>
  );
}
