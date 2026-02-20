'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/locale-switcher';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { GraduationCap, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BRAND_CONFIG } from '@/lib/config/brand';

export function Navbar() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll navigation links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Check if we're on homepage
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const navLinks = [
    { 
      id: 'home', 
      label: t('home'), 
      href: `/${locale}`,
      action: isHomePage ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined
    },
    { 
      id: 'about', 
      label: t('about'), 
      href: `/${locale}#founder`,
      action: isHomePage ? () => scrollToSection('founder') : undefined
    },
    { 
      id: 'contact', 
      label: t('contact'), 
      href: `/${locale}#contact`,
      action: isHomePage ? () => scrollToSection('contact') : undefined
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">{BRAND_CONFIG.brandName}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                if (link.action && isHomePage) {
                  return (
                    <button
                      key={link.id}
                      onClick={link.action}
                      className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <LocaleSwitcher />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
              aria-label={tCommon('toggle_menu')}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <Container>
              <div className="py-4 space-y-3">
                {navLinks.map((link) => {
                  if (link.action && isHomePage) {
                    return (
                      <button
                        key={link.id}
                        onClick={link.action}
                        className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent"
                      >
                        {link.label}
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent"
                    >
                      {link.label}
                    </Link>
                  );
                })}
                
                <div className="pt-4 border-t">
                  <LocaleSwitcher />
                </div>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </>
  );
}
