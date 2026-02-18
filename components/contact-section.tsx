'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, MapPin, Languages, Clock } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { BRAND_CONFIG } from '@/lib/config/brand';

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
        
        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {/* WhatsApp Card */}
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-[#25D366]" />
              </div>
              <CardTitle className="text-lg mb-2">{t('contact.whatsapp_title')}</CardTitle>
              <CardDescription className="text-sm">
                {t('contact.whatsapp_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <WhatsAppButton 
                size="lg" 
                className="w-full min-h-[48px]" 
                source="contact-section"
              />
              <p className="text-xs text-muted-foreground mt-3">
                {BRAND_CONFIG.whatsapp.numberDisplay}
              </p>
            </CardContent>
          </Card>
          
          {/* Email Card */}
          <Card className="text-center">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">{t('contact.email_title')}</CardTitle>
              <CardDescription className="text-sm">
                {t('contact.email_desc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <a 
                href={BRAND_CONFIG.email.mailtoLink}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full min-h-[48px]"
              >
                {BRAND_CONFIG.email.primary}
              </a>
            </CardContent>
          </Card>

          {/* Business Hours Card */}
          <Card className="text-center md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mb-2">{t('contact.hours_title')}</CardTitle>
              <CardDescription className="text-sm">
                {t('contact.hours_desc')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Location Card */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.location_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.location_desc')}</p>
              </div>
            </div>
          </Card>

          {/* Languages Card */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{t('contact.languages_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.languages_desc')}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Response Time & Consultation Note */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            {t('contact.response_time')}
          </p>
          <p className="text-sm font-medium text-primary">
            {t('contact.consultation_note')}
          </p>
        </div>
      </Container>
    </section>
  );
}
