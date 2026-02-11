'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { Container } from '@/components/ui/container';
import { Shield, Lock, FileCheck, Users } from 'lucide-react';

export function CredibilitySection() {
  const t = useTranslations('trust');

  const credibilityItems = [
    {
      icon: Shield,
      title: 'Ethical Recruitment Practices',
      description: 'We follow ICEF standards and international best practices in educational consulting',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
      icon: FileCheck,
      title: 'Transparent Fees',
      description: 'All costs disclosed upfront. No hidden charges or surprise fees',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
    {
      icon: Lock,
      title: 'Student Data Protection',
      description: 'Your personal information is encrypted, secure, and never shared without consent',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    },
    {
      icon: Users,
      title: 'Compliance-Focused',
      description: 'Our process aligns with US regulations and university admission standards',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-background via-muted/10 to-background border-y">
      <Container size="default">
        <FadeInUpDiv className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Professional Standards</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ICEF-Ready Agency Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We operate with complete transparency and compliance with international education consulting standards
          </p>
        </FadeInUpDiv>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {credibilityItems.map((item, index) => (
            <FadeInUpDiv key={index}>
              <Card className="h-full border-2 hover:shadow-lg transition-all hover:border-primary/30">
                <CardContent className="pt-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          ))}
        </StaggerContainer>

        <FadeInUpDiv className="mt-10 text-center">
          <div className="inline-block max-w-3xl bg-muted/50 rounded-xl p-5 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> We do not and cannot guarantee visa approval or university admission. 
              All decisions are made independently by immigration authorities and academic institutions. 
              Our role is to provide professional guidance and support throughout your application journey.
            </p>
          </div>
        </FadeInUpDiv>
      </Container>
    </section>
  );
}
