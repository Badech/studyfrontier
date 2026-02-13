'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function ContactSection() {
  const t = useTranslations('simple');

  return (
    <section className="py-20 md:py-24 px-4">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-[#25D366]" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-3">{t('contact.whatsapp_title')}</CardTitle>
              <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                {t('contact.whatsapp_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <WhatsAppButton size="lg" className="w-full min-h-[48px]" />
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                {t('contact.instant_response')}
              </p>
            </CardContent>
          </Card>
          
          {/* Email Card */}
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-3">{t('contact.email_title')}</CardTitle>
              <CardDescription className="text-sm sm:text-base leading-relaxed mb-4">
                {t('contact.email_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <a 
                href="mailto:contact@studyfrontier.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 sm:px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full min-h-[48px]"
              >
                contact@studyfrontier.com
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                {t('contact.instant_response')}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
