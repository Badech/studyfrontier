'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const tAria = useTranslations('aria');

  const switchLanguage = (newLocale: string) => {
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${currentPathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="relative group">
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={tAria('selectLanguage')}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="hidden md:inline">
          {languages.find((l) => l.code === locale)?.name}
        </span>
      </Button>
      <div 
        className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
        role="menu"
        aria-label={tAria('languageOptions')}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            role="menuitem"
            aria-label={`Switch to ${lang.name}`}
            className={`w-full px-4 py-3 text-start hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-3 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
              locale === lang.code ? 'bg-primary/5 text-primary font-semibold' : ''
            }`}
          >
            <span className="text-xl" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
