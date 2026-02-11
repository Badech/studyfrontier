'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeInUpDiv } from '@/components/ui/motion';
import { Container } from '@/components/ui/container';
import { CheckCircle } from 'lucide-react';

export function EligibilityCheckSection() {
  const t = useTranslations('lead_capture');

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <Container size="default">
        <FadeInUpDiv className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Check Your Eligibility for USA Study
            </h2>
            <p className="text-lg text-muted-foreground">
              Get personalized guidance for your US study plans
            </p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-center">Free Consultation Form</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      {t('name_label')} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={t('name_placeholder')}
                      required
                      className="w-full px-4 py-2.5 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      {t('email_label')} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={t('email_placeholder')}
                      required
                      className="w-full px-4 py-2.5 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      {t('phone_label')} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder={t('phone_placeholder')}
                      required
                      className="w-full px-4 py-2.5 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="text-sm font-medium mb-2 block">
                      {t('program_label')} <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full px-4 py-2.5 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('program_placeholder')}</option>
                      <option value="undergraduate">{t('program_undergraduate')}</option>
                      <option value="graduate">{t('program_graduate')}</option>
                      <option value="community">{t('program_community')}</option>
                      <option value="esl">{t('program_esl')}</option>
                      <option value="not_sure">{t('program_not_sure')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    {t('message_label')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={t('message_placeholder')}
                    className="w-full px-4 py-2.5 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <CheckCircle className="inline-block h-5 w-5 mr-2" />
                  {t('submit_button')}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  {t('privacy_note')}
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeInUpDiv>
      </Container>
    </section>
  );
}
