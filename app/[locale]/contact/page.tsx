import { generateMetadataForPage } from '@/lib/generateMetadataForPage';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return generateMetadataForPage(locale, {
    namespace: 'contact',
    path: '/contact'
  });
}

'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function ContactPage() {
  const t = useTranslations('contact');

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ color: 'hsl(var(--hero-text-secondary))' }}>
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-navy-900 mb-4">
                  {t('info.title')}
                </h2>
                <p className="text-lg text-gray-600">
                  {t('info.description')}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <AnimatedSection delay={0.1}>
                <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t('info.emailLabel')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:contact@studyfrontier.com"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      {t('info.email')}
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t('info.phoneLabel')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+212708026571"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      {t('info.phone')}
                    </a>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{t('info.locationLabel')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">
                      {t('info.location')}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <Card className="border-2 border-[#25D366] shadow-xl text-center p-8">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-navy-900">
                    {t('whatsapp.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-700">
                    {t('whatsapp.description')}
                  </p>
                  <Button
                    variant="whatsapp"
                    size="xl"
                    onClick={handleWhatsAppClick}
                    className="text-lg font-semibold min-h-[52px] px-8 py-4"
                  >
                    <MessageCircle className="h-6 w-6" />
                    {t('whatsapp.button')}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
