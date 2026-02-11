import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { MessageCircle, Mail, MapPin, Clock, Info } from 'lucide-react';
import dynamic from 'next/dynamic';

const LeadCaptureForm = dynamic(() => import('@/components/lead-capture-form').then(mod => ({ default: mod.LeadCaptureForm })), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center"><p className="text-muted-foreground">Loading form...</p></div>
});

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('contact');

  return (
    <div className="py-12 md:py-16">
      <Container size="default">
        <FadeInUpDiv>
          <SectionHeader
            title={t('title')}
            description={t('subtitle')}
            align="center"
          />
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed text-center">
            {t('intro')}
          </p>
        </FadeInUpDiv>

        {/* Contact Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Card - Primary */}
          <FadeInUpDiv>
            <Card className="h-full border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{t('whatsapp_card_title')}</CardTitle>
                </div>
                <CardDescription>{t('whatsapp_card_desc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <WhatsAppButton className="w-full" size="lg" />
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{t('whatsapp_response_time')}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-xs">{t('whatsapp_hours')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInUpDiv>

          {/* Email Card */}
          <FadeInUpDiv>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{t('email_card_title')}</CardTitle>
                </div>
                <CardDescription>{t('email_card_desc')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href={`mailto:${t('email_address')}`}
                  className="block w-full text-center px-4 py-3 bg-muted hover:bg-muted/80 rounded-lg font-medium text-sm transition-colors"
                >
                  {t('email_address')}
                </a>
                <div className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('email_response_time')}</p>
                </div>
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </div>

        {/* Office Location & Hours */}
        <div className="mt-6 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Office Location */}
          <FadeInUpDiv>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{t('office_card_title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground font-medium">{t('office_address_line1')}</p>
                <p className="text-sm text-muted-foreground">{t('office_address_line2')}</p>
                <p className="text-xs text-muted-foreground italic mt-3">{t('office_note')}</p>
              </CardContent>
            </Card>
          </FadeInUpDiv>

          {/* Business Hours */}
          <FadeInUpDiv>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{t('hours_card_title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('hours_weekday')}</span>
                  <span className="font-medium">{t('hours_weekday_time')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('hours_saturday')}</span>
                  <span className="font-medium">{t('hours_saturday_time')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('hours_sunday')}</span>
                  <span className="font-medium">{t('hours_sunday_time')}</span>
                </div>
                <p className="text-xs text-muted-foreground italic pt-2 border-t border-border">
                  {t('hours_timezone')}
                </p>
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </div>

        {/* Lead Capture Form */}
        <FadeInUpDiv className="mt-12 max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t('form_title')}</CardTitle>
              <CardDescription>{t('form_subtitle')}</CardDescription>
            </CardHeader>
            <CardContent>
              <LeadCaptureForm />
            </CardContent>
          </Card>
        </FadeInUpDiv>

        {/* Response Time Note */}
        <FadeInUpDiv className="mt-8 max-w-2xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">{t('response_time_note')}</h3>
            <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>• {t('response_time_whatsapp')}</li>
              <li>• {t('response_time_email')}</li>
              <li>• {t('response_time_form')}</li>
            </ul>
          </div>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
