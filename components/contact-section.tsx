'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';

export function ContactSection() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-20 px-4 bg-muted/30">
      <Container size="default">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="h-7 w-7 text-[#25D366]" />
              </div>
              <CardTitle className="text-xl mb-2">{t('contact.whatsapp_title')}</CardTitle>
              <CardDescription className="text-base mb-4">
                {t('contact.whatsapp_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WhatsAppButton size="lg" className="w-full" />
              <p className="text-sm text-muted-foreground mt-4">
                {t('contact.instant_response')}
              </p>
            </CardContent>
          </Card>
          
          {/* Email Card */}
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">{t('contact.email_title')}</CardTitle>
              <CardDescription className="text-base mb-4">
                {t('contact.email_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:contact@studyfrontier.com"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full"
              >
                contact@studyfrontier.com
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                {t('contact.instant_response')}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
