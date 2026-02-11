import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { 
  Shield, Lock, FileCheck, MessageCircle, CheckCircle, 
  GraduationCap, FileText, Plane, BookOpen, ArrowRight 
} from 'lucide-react';
import { EnhancedHero } from '@/components/enhanced-hero';
import { UrgencyBanner } from '@/components/urgency-banner';
import { TikTokVisitorSection } from '@/components/tiktok-visitor-section';
import { TimelineVisual } from '@/components/timeline-visual';
import { QualificationSection } from '@/components/qualification-section';
import { FounderSection } from '@/components/founder-section';
import { CostTransparency } from '@/components/cost-transparency';
import { EligibilityCheckSection } from '@/components/eligibility-check-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CredibilitySection } from '@/components/credibility-section';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations();

  return (
    <div>
      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* TikTok Visitor Section */}
      <TikTokVisitorSection />

      {/* Eligibility Check Section - High Priority Form */}
      <EligibilityCheckSection />

      {/* Credibility & ICEF Standards Section */}
      <CredibilitySection />

      {/* Original Hero - Remove this section */}
      <section className="hidden py-12 md:py-20 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
        <Container size="default">
          <FadeInUpDiv className="max-w-4xl mx-auto text-center">
            <Badge variant="success" className="mb-6">
              🇲🇦 → 🇺🇸 Morocco to USA
            </Badge>
            <h1 className="mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            
            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <WhatsAppButton size="xl" className="w-full sm:w-auto" />
              <Button 
                variant="outline" 
                size="xl"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="#lead-form">{t('hero.cta_secondary')}</a>
              </Button>
            </div>

            {/* Trust Note */}
            <FadeInUpDiv className="mt-8">
              <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                {t('hero.trust_note')}
              </div>
            </FadeInUpDiv>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* Trust Indicators - 5 Cards */}
      <section className="py-12 md:py-16 px-4">
        <Container size="lg">
          <FadeInUpDiv>
            <SectionHeader
              title={t('trust.title')}
              align="center"
            />
          </FadeInUpDiv>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FadeInUpDiv>
              <Card className="h-full">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-success mb-4" />
                  <CardTitle className="text-lg">{t('trust.transparency')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t('trust.transparency_desc')}</CardDescription>
                </CardContent>
              </Card>
            </FadeInUpDiv>
            
            <FadeInUpDiv>
              <Card className="h-full">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{t('trust.compliance')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t('trust.compliance_desc')}</CardDescription>
                </CardContent>
              </Card>
            </FadeInUpDiv>
            
            <FadeInUpDiv>
              <Card className="h-full">
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{t('trust.data_privacy')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t('trust.data_privacy_desc')}</CardDescription>
                </CardContent>
              </Card>
            </FadeInUpDiv>
            
            <FadeInUpDiv>
              <Card className="h-full">
                <CardHeader>
                  <FileCheck className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-lg">{t('trust.step_by_step')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t('trust.step_by_step_desc')}</CardDescription>
                </CardContent>
              </Card>
            </FadeInUpDiv>
            
            <FadeInUpDiv>
              <Card className="h-full">
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-success mb-4" />
                  <CardTitle className="text-lg">{t('trust.fast_response')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t('trust.fast_response_desc')}</CardDescription>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          </StaggerContainer>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <Container size="lg">
          <FadeInUpDiv>
            <SectionHeader
              title={t('services_preview.title')}
              description={t('services_preview.subtitle')}
              align="center"
            />
          </FadeInUpDiv>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-12">
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{t('services_preview.university_selection')}</CardTitle>
                  <CardDescription>{t('services_preview.university_selection_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{t('services_preview.application_support')}</CardTitle>
                  <CardDescription>{t('services_preview.application_support_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{t('services_preview.visa_assistance')}</CardTitle>
                  <CardDescription>{t('services_preview.visa_assistance_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
          </StaggerContainer>
          <FadeInUpDiv className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/services`}>
                {t('services_preview.view_all')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* Timeline Section */}
      <TimelineVisual />

      {/* WhatsApp CTA After Services */}
      <section className="py-10 px-4 bg-gradient-to-b from-muted/20 to-background">
        <Container size="sm">
          <FadeInUpDiv className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('common.get_started')}</h3>
            <p className="text-muted-foreground mb-6">{t('tiktok_section.response_time')}</p>
            <WhatsAppButton size="lg" variant="primary" />
          </FadeInUpDiv>
        </Container>
      </section>

      {/* Qualification Section */}
      <QualificationSection />

      {/* Founder Section */}
      <FounderSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Cost Transparency */}
      <CostTransparency />

      {/* Programs Preview */}
      <section className="py-12 md:py-16 px-4">
        <Container size="lg">
          <FadeInUpDiv>
            <SectionHeader
              title={t('programs_preview.title')}
              description={t('programs_preview.subtitle')}
              align="center"
            />
          </FadeInUpDiv>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('programs_preview.undergraduate')}</CardTitle>
                  <CardDescription>{t('programs_preview.undergraduate_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('programs_preview.graduate')}</CardTitle>
                  <CardDescription>{t('programs_preview.graduate_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('programs_preview.community_college')}</CardTitle>
                  <CardDescription>{t('programs_preview.community_college_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
            <FadeInUpDiv>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t('programs_preview.esl')}</CardTitle>
                  <CardDescription>{t('programs_preview.esl_desc')}</CardDescription>
                </CardHeader>
              </Card>
            </FadeInUpDiv>
          </StaggerContainer>
          <FadeInUpDiv className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/programs`}>
                {t('programs_preview.view_all')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* How It Works Preview - 6 Steps Timeline */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <Container size="default">
          <FadeInUpDiv>
            <SectionHeader
              title={t('process_preview.title')}
              description={t('process_preview.subtitle')}
              align="center"
            />
          </FadeInUpDiv>
          <div className="mt-12 max-w-3xl mx-auto">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <FadeInUpDiv key={step}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {step}
                    </div>
                    <p className="text-sm font-medium">{t(`process_preview.step${step}`)}</p>
                  </div>
                </FadeInUpDiv>
              ))}
            </StaggerContainer>
          </div>
          <FadeInUpDiv className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/how-it-works`}>
                {t('process_preview.view_all')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 md:py-16 px-4">
        <Container size="default">
          <FadeInUpDiv>
            <SectionHeader
              title={t('faq_preview.title')}
              description={t('faq_preview.subtitle')}
              align="center"
            />
          </FadeInUpDiv>
          <FadeInUpDiv className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">{t('faq.q1')}</p>
                  <p className="text-sm text-muted-foreground">{t('faq.a1')}</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">{t('faq.q2')}</p>
                  <p className="text-sm text-muted-foreground">{t('faq.a2')}</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">{t('faq.q3')}</p>
                  <p className="text-sm text-muted-foreground">{t('faq.a3')}</p>
                </div>
              </CardContent>
            </Card>
          </FadeInUpDiv>
          <FadeInUpDiv className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/faq`}>
                {t('faq_preview.view_all')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* WhatsApp CTA After FAQ */}
      <section className="py-10 px-4 bg-muted/30">
        <Container size="sm">
          <FadeInUpDiv className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('common.contact_us')}</h3>
            <p className="text-muted-foreground mb-6">{t('tiktok_section.response_time')}</p>
            <WhatsAppButton size="lg" variant="primary" />
          </FadeInUpDiv>
        </Container>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-form" className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <Container size="default">
          <FadeInUpDiv className="max-w-2xl mx-auto">
            <SectionHeader
              title={t('lead_capture.title')}
              description={t('lead_capture.subtitle')}
              align="center"
            />
            <Card className="mt-8">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t('lead_capture.name_label')}</label>
                      <input 
                        type="text" 
                        placeholder={t('lead_capture.name_placeholder')}
                        className="w-full h-11 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t('lead_capture.email_label')}</label>
                      <input 
                        type="email" 
                        placeholder={t('lead_capture.email_placeholder')}
                        className="w-full h-11 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t('lead_capture.phone_label')}</label>
                      <input 
                        type="tel" 
                        placeholder={t('lead_capture.phone_placeholder')}
                        className="w-full h-11 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">{t('lead_capture.program_label')}</label>
                      <select className="w-full h-11 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <option>{t('lead_capture.program_undergraduate')}</option>
                        <option>{t('lead_capture.program_graduate')}</option>
                        <option>{t('lead_capture.program_community')}</option>
                        <option>{t('lead_capture.program_esl')}</option>
                        <option>{t('lead_capture.program_not_sure')}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('lead_capture.message_label')}</label>
                    <textarea 
                      rows={4}
                      placeholder={t('lead_capture.message_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    {t('lead_capture.submit')}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    {t('lead_capture.privacy_note')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </FadeInUpDiv>
        </Container>
      </section>

      {/* Final CTA Band */}
      <section className="py-12 md:py-16 px-4 bg-primary text-primary-foreground">
        <Container size="default">
          <FadeInUpDiv className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('final_cta.title')}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t('final_cta.subtitle')}
            </p>
            <WhatsAppButton size="xl" variant="secondary" />
          </FadeInUpDiv>
        </Container>
      </section>

    </div>
  );
}
