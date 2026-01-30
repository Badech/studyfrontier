'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { LeadMagnet } from '@/components/LeadMagnet';
import { StudyQuiz } from '@/components/StudyQuiz';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { UniversityLogos } from '@/components/UniversityLogos';
import {
  GraduationCap,
  Shield,
  CheckCircle,
  Globe,
  Users,
  BookOpen,
  Plane,
  HeartHandshake,
  Building2,
  Award,
  Languages,
  MessageCircle
} from 'lucide-react';
const WHATSAPP_NUMBER = '212708026571';

export default function HomePage() {
  const t = useTranslations('home');

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    }
  };

  return (
    <>
      {/* Premium Hero Section - $5,000+ Consulting Brand */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Premium Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            
            {/* Eyebrow - International Trust Badge */}
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
                <div className="hero-badge-light flex items-center gap-2 px-4 py-2 rounded-full">
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-display font-semibold">
                    International Education Consulting
                  </span>
                </div>
                <div className="hero-badge-gold flex items-center gap-2 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  <span className="text-sm font-display font-semibold">
                    Accredited Universities Only
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Powerful Headline */}
            <AnimatedSection delay={0.1}>
              <h1 className="hero-headline text-center mb-6">
                We Get International Students
                <br />
                <span className="gold-gradient">Into U.S. Universities</span>
              </h1>
            </AnimatedSection>

            {/* Confident Subheading */}
            <AnimatedSection delay={0.2}>
              <p className="hero-subheadline text-center mx-auto mb-10">
                Strategic consulting for ambitious students seeking legitimate pathways to accredited American universities. No shortcuts. No false promises. Just expert guidance that positions you for success.
              </p>
            </AnimatedSection>

            {/* Strong CTA */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center gap-6">
                <Button
                  variant="premium"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="text-lg px-10 py-7 h-auto"
                >
                  <MessageCircle className="h-6 w-6" />
                  Book Your Free Consultation
                </Button>
                
                {/* Trust Line */}
                <p className="text-base font-body" style={{ color: 'hsl(var(--hero-text-muted))' }}>
                  Transparent guidance · Realistic pathways · Ethical practice
                </p>
              </div>
            </AnimatedSection>

            {/* Trust Indicators Row */}
            <AnimatedSection delay={0.4}>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Indicator 1 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <Users className="h-8 w-8 text-gold-400" aria-hidden="true" />
                  </div>
                  <div className="hero-stat-value mb-2">500+</div>
                  <div className="hero-stat-label font-body">Students Guided</div>
                </div>

                {/* Indicator 2 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <Building2 className="h-8 w-8 text-gold-400" aria-hidden="true" />
                  </div>
                  <div className="hero-stat-value mb-2">50+</div>
                  <div className="hero-stat-label font-body">U.S. Universities</div>
                </div>

                {/* Indicator 3 */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                    <Award className="h-8 w-8 text-gold-400" aria-hidden="true" />
                  </div>
                  <div className="hero-stat-value mb-2">98%</div>
                  <div className="hero-stat-label font-body">Success Rate</div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Trust & Transparency Section - Feature importance: py-20 md:py-24 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 md:mb-6 tracking-tight">
                {t('trust.title')}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {t('trust.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card className="h-full text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{t('trust.ethical.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    {t('trust.ethical.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{t('trust.accredited.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    {t('trust.accredited.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full text-center p-6 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{t('trust.realistic.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    {t('trust.realistic.description')}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* University Network Section - Secondary importance: py-16 md:py-20 */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 md:mb-6 tracking-tight">
                {t('network.title')}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {t('network.description')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg md:text-xl">{t('network.categories.universities')}</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg md:text-xl">{t('network.categories.pathways')}</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <Languages className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg md:text-xl">{t('network.categories.esl')}</h3>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-center text-sm md:text-base text-gray-500 italic leading-relaxed">
              {t('network.note')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview - Feature importance: py-20 md:py-24 */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 md:mb-6 tracking-tight">
                {t('services.title')}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {t('services.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">{t('services.admission.title')}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">{t('services.admission.description')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <Plane className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">{t('services.visa.title')}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">{t('services.visa.description')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">{t('services.pathway.title')}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">{t('services.pathway.description')}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
                  <HeartHandshake className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">{t('services.support.title')}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">{t('services.support.description')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* University Logos Section */}
      <UniversityLogos />

      {/* Student Testimonials Section */}
      <TestimonialsSection showStats maxTestimonials={6} />

      {/* Lead Magnet Section */}
      <LeadMagnet />

      {/* Study Quiz Section */}
      <StudyQuiz />

      {/* CTA Section - Feature importance: py-20 md:py-24 */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t('cta.title')}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                {t('cta.subtitle')}
              </p>
              <Button
                variant="premium"
                size="xl"
                onClick={handleWhatsAppClick}
                className="text-lg font-semibold bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BA5A] hover:to-[#0F7A6A] text-white shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                {t('cta.button')}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </>
  );
}
