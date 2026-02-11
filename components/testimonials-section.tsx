'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FadeInUpDiv, StaggerContainer } from '@/components/ui/motion';
import { Container } from '@/components/ui/container';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-muted/20 to-background">
      <Container size="default">
        <FadeInUpDiv className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from students we&apos;ve guided
          </p>
        </FadeInUpDiv>

        {/* Placeholder for upcoming testimonials */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((index) => (
            <FadeInUpDiv key={index} delay={index * 0.1}>
              <Card className="h-full border-2 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-primary/20 mb-3" />
                  
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground italic min-h-[80px] flex items-center justify-center">
                      First success stories coming soon
                    </p>
                    
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold">
                          ?
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Student Name</p>
                          <p className="text-xs text-muted-foreground">Program • University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInUpDiv>
          ))}
        </StaggerContainer>

        <FadeInUpDiv delay={0.4} className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            We&apos;re building our collection of success stories. Check back soon!
          </p>
        </FadeInUpDiv>
      </Container>
    </section>
  );
}
