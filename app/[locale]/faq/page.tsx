import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeInUpDiv } from '@/components/ui/motion';
import { WhatsAppButton } from '@/components/whatsapp-button';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.faq' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function FAQPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('faq');

  const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
    { question: t('q5'), answer: t('a5') },
    { question: t('q6'), answer: t('a6') },
    { question: t('q7'), answer: t('a7') },
    { question: t('q8'), answer: t('a8') },
    { question: t('q9'), answer: t('a9') },
    { question: t('q10'), answer: t('a10') },
    { question: t('q11'), answer: t('a11') },
    { question: t('q12'), answer: t('a12') },
    { question: t('q13'), answer: t('a13') },
    { question: t('q14'), answer: t('a14') },
  ];

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

        <FadeInUpDiv className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border rounded-lg px-5 md:px-6 bg-card shadow-sm"
              >
                <AccordionTrigger className="text-left py-4 hover:no-underline">
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInUpDiv>

        <FadeInUpDiv className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-muted/30 rounded-lg p-8">
            <p className="text-xl font-semibold mb-4">{t('more_questions')}</p>
            <WhatsAppButton size="lg" />
          </div>
        </FadeInUpDiv>
      </Container>
    </div>
  );
}
