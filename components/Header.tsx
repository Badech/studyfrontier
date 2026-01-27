'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Sparkles, Briefcase, GraduationCap, BookOpen, Trophy, MessageCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';

const WHATSAPP_NUMBER = '212708026571';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇲🇦' },
];

export function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/why-studyfrontier', label: t('whyUs'), icon: Sparkles },
    { href: '/services', label: t('services'), icon: Briefcase },
    { href: '/study-in-usa', label: t('studyInUSA'), icon: GraduationCap },
    { href: '/resources', label: t('resources'), icon: BookOpen },
    { href: '/success-stories', label: t('successStories'), icon: Trophy },
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  const switchLanguage = (newLocale: string) => {
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${currentPathWithoutLocale}`;
    window.location.href = newPath;
  };

  const isActiveRoute = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    return currentPath === href || (href !== '/' && currentPath.startsWith(href));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-lg"
            aria-label="StudyFrontier Home"
          >
            <div className="relative w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="StudyFrontier Logo" 
                width={24} 
                height={24}
                priority
                className="w-6 h-6"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <div className="hidden lg:block relative group">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 min-h-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Select language"
                aria-haspopup="true"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>{languages.find((l) => l.code === locale)?.name}</span>
              </Button>
              <div 
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                role="menu"
                aria-label="Language options"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    role="menuitem"
                    aria-label={`Switch to ${lang.name}`}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-3 transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                      locale === lang.code ? 'bg-primary/5 text-primary font-semibold' : ''
                    }`}
                  >
                    <span className="text-xl" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="premium"
              size="default"
              onClick={handleWhatsAppClick}
              className="hidden sm:inline-flex min-h-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Apply via WhatsApp"
            >
              {t('apply')}
            </Button>

            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu - Sheet Drawer */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent 
          side="right" 
          className="w-[85vw] sm:w-[400px] p-0"
          aria-describedby="mobile-menu-description"
        >
          <SheetHeader className="px-6 pt-6 pb-4 border-b">
            <SheetTitle className="text-left">Navigation Menu</SheetTitle>
            <p id="mobile-menu-description" className="sr-only">
              Main navigation menu with links to all pages, language selector, and contact options
            </p>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav 
              className="flex flex-col py-4 flex-1 overflow-y-auto"
              aria-label="Main navigation"
              role="navigation"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-4 px-6 py-4 text-base font-medium transition-all duration-200 min-h-[56px] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                      isActive
                        ? 'bg-primary/10 text-primary border-r-4 border-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher - Mobile */}
            <div className="border-t px-6 py-4" role="region" aria-label="Language selector">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-500">
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>Language / Langue / اللغة</span>
              </div>
              <div className="grid grid-cols-1 gap-2" role="group" aria-label="Available languages">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    aria-label={`Switch to ${lang.name}`}
                    aria-pressed={locale === lang.code}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 min-h-[52px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      locale === lang.code
                        ? 'bg-primary/10 text-primary font-semibold border-2 border-primary'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <span className="text-2xl" role="img" aria-label={`${lang.name} flag`}>{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="border-t px-6 py-4">
              <Button
                variant="premium"
                size="lg"
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full min-h-[52px] text-base font-semibold focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Contact us via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t('apply')}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
