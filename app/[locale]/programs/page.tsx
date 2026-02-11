import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeInUpDiv } from '@/components/ui/motion';
import { GraduationCap, Users, School, Globe, CheckCircle, Clock, FileText } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.programs' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ProgramsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('programs');

  return (
    <div className="py-12 md:py-16">
      <Container size="default">
        {/* Header */}
        <FadeInUpDiv>
          <SectionHeader
            title={t('title')}
            description={t('subtitle')}
            align="center"
          />
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('intro')}
          </p>
        </FadeInUpDiv>

        {/* Pathways Accordion */}
        <FadeInUpDiv className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            
            {/* Undergraduate */}
            <AccordionItem value="undergraduate" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <GraduationCap className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-semibold text-lg">{t('undergraduate')}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                {/* Who It's For */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('undergraduate_for')}</h3>
                  </div>
                  <p className="text-sm text-foreground ml-7">{t('undergraduate_for_desc')}</p>
                </div>

                {/* Requirements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('undergraduate_requirements')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_req1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_req2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_req3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_req4')}</span>
                    </li>
                  </ul>
                </div>

                {/* Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('undergraduate_timeline')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_timeline1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_timeline2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_timeline3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('undergraduate_timeline4')}</span>
                    </li>
                  </ul>
                </div>

                {/* Documents */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('undergraduate_docs')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc4')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc5')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc6')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('undergraduate_doc7')}</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Graduate */}
            <AccordionItem value="graduate" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <School className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-semibold text-lg">{t('graduate')}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                {/* Who It's For */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('graduate_for')}</h3>
                  </div>
                  <p className="text-sm text-foreground ml-7">{t('graduate_for_desc')}</p>
                </div>

                {/* Requirements */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('graduate_requirements')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_req1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_req2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_req3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_req4')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_req5')}</span>
                    </li>
                  </ul>
                </div>

                {/* Timeline */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('graduate_timeline')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_timeline1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_timeline2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_timeline3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{t('graduate_timeline4')}</span>
                    </li>
                  </ul>
                </div>

                {/* Documents */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('graduate_docs')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc4')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc5')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc6')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc7')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{t('graduate_doc8')}</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Community College */}
            <AccordionItem value="community" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-semibold text-lg">{t('community')}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('community_for')}</h3>
                  </div>
                  <p className="text-sm text-foreground ml-7">{t('community_for_desc')}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('community_requirements')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{t(`community_req${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('community_timeline')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{t(`community_timeline${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('community_docs')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t(`community_doc${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ESL */}
            <AccordionItem value="esl" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-semibold text-lg">{t('esl')}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('esl_for')}</h3>
                  </div>
                  <p className="text-sm text-foreground ml-7">{t('esl_for_desc')}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('esl_requirements')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{t(`esl_req${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('esl_timeline')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{t(`esl_timeline${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-sm uppercase tracking-wide">{t('esl_docs')}</h3>
                  </div>
                  <ul className="space-y-2 ml-7">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{t(`esl_doc${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeInUpDiv>

        {/* CTA Section */}
        <FadeInUpDiv className="mt-16 max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3">{t('cta_subtitle')}</h2>
            <div className="flex justify-center mt-6">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
