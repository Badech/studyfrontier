'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/container';
import { GraduationCap, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/config/brand';
import { WhatsAppLinkHandler } from '@/components/whatsapp-link-handler';
import { ComplianceDisclaimer } from '@/components/compliance-disclaimer';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="border-t bg-muted/10 mt-auto">
      <Container size="lg">
        <div className="py-12">
          {/* Simple centered layout */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">{BRAND_CONFIG.brandName}</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href={BRAND_CONFIG.email.mailtoLink} className="hover:text-primary transition-colors">
                  {BRAND_CONFIG.email.primary}
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <WhatsAppLinkHandler source="footer">
                  {({ onClick }) => (
                    <button
                      onClick={onClick}
                      className="hover:text-primary transition-colors"
                    >
                      {BRAND_CONFIG.whatsapp.numberDisplay}
                    </button>
                  )}
                </WhatsAppLinkHandler>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a 
                href={BRAND_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={BRAND_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <Link 
                  href={`/${locale}/privacy`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {t('footer.privacy')}
                </Link>
                <Link 
                  href={`/${locale}/terms`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {t('footer.terms')}
                </Link>
                <Link 
                  href={`/${locale}/refund`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {t('footer.refund')}
                </Link>
                <Link 
                  href={`/${locale}/cookies`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  {t('footer.cookies')}
                </Link>
              </div>
            </div>

            {/* Compliance Disclaimer */}
            <div className="pt-4">
              <ComplianceDisclaimer variant="compact" className="justify-center" />
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
