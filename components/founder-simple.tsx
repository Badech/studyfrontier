'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function FounderSimple() {
  const t = useTranslations('simple');

  return (
    <section className="py-16 md:py-20 px-4 bg-muted/30">
      <Container size="default">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Founder Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
                    <Image
                      src="/images/founder.svg"
                      alt="Bader - Founder of StudyFrontier"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Founder Text */}
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {t('founder.intro')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
