'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Container } from '@/components/ui/container';
import { GraduationCap, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';
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
              <span className="font-bold text-lg">StudyFrontier</span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@studyfrontier.com" className="hover:text-primary transition-colors">
                  contact@studyfrontier.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +212 708 026 571
                </a>
              </div>
            </div>

            {/* Privacy Policy Link */}
            <div className="pt-4">
              <Link 
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                {t('footer.privacy')}
              </Link>
            </div>

            {/* Copyright */}
            <div className="pt-2 border-t">
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
