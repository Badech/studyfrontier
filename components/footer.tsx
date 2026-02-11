'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/container';
import { GraduationCap, Mail } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const quickLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/services`, label: t('nav.services') },
    { href: `/${locale}/programs`, label: t('nav.programs') },
    { href: `/${locale}/how-it-works`, label: t('nav.how_it_works') },
    { href: `/${locale}/faq`, label: t('nav.faq') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  const legalLinks = [
    { href: `/${locale}/privacy-policy`, label: t('footer.privacy') },
    { href: `/${locale}/terms`, label: t('footer.terms') },
    { href: `/${locale}/refund-policy`, label: t('footer.refund') },
    { href: `/${locale}/disclaimer`, label: t('footer.disclaimer') },
  ];

  return (
    <footer className="border-t bg-muted/10 mt-auto">
      <Container size="lg">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Edu Agency</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {t('footer.tagline')}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@eduagency.com" className="hover:text-primary transition-colors">
                  info@eduagency.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">{t('nav.home')}</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
              <ul className="space-y-2 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner */}
            <div>
              <h3 className="font-semibold mb-4">{t('nav.partners')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={`/${locale}/partner-with-us`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('nav.partners')}
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xs text-muted-foreground">
                  🇺🇸 <strong>{t('footer.usa_focus')}</strong>
                  <br />
                  <span className="text-muted-foreground/80">{t('footer.more_countries_soon')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="mt-12 pt-8 border-t">
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">⚠️ {t('footer.important_notice')}</strong>{' '}
                {t('footer.important_notice_text')}{' '}
                <Link href={`/${locale}/disclaimer`} className="text-primary hover:underline">
                  {t('footer.read_full_disclaimer')} →
                </Link>
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
