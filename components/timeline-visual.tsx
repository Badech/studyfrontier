'use client';

import { useTranslations } from 'next-intl';
import { FadeInUpDiv } from '@/components/ui/motion';
import { Calendar, GraduationCap, Plane } from 'lucide-react';

export function TimelineVisual() {
  const t = useTranslations('timeline');

  const phases = [
    {
      icon: Calendar,
      title: t('phase1_title'),
      duration: t('phase1_duration'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    },
    {
      icon: GraduationCap,
      title: t('phase2_title'),
      duration: t('phase2_duration'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    },
    {
      icon: Plane,
      title: t('phase3_title'),
      duration: t('phase3_duration'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <FadeInUpDiv className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeInUpDiv>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 -translate-y-1/2" />
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {phases.map((phase, index) => (
                <FadeInUpDiv key={index} delay={index * 0.2}>
                  <div className={`${phase.bgColor} rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg`}>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{phase.title}</h3>
                    <div className="text-center">
                      <span className="inline-block px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-semibold">
                        {phase.duration}
                      </span>
                    </div>
                  </div>
                </FadeInUpDiv>
              ))}
            </div>
          </div>
          
          <FadeInUpDiv delay={0.6} className="text-center mt-8">
            <p className="text-base font-semibold text-primary">
              {t('total_timeline')}
            </p>
          </FadeInUpDiv>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, index) => (
            <FadeInUpDiv key={index} delay={index * 0.15}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                    <phase.icon className="h-7 w-7 text-white" />
                  </div>
                  {index < phases.length - 1 && (
                    <div className={`w-1 flex-1 mt-2 bg-gradient-to-b ${phase.color} min-h-[40px]`} />
                  )}
                </div>
                <div className={`${phase.bgColor} rounded-xl p-5 border-2 border-primary/20 flex-1`}>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <span className="inline-block px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm font-semibold">
                    {phase.duration}
                  </span>
                </div>
              </div>
            </FadeInUpDiv>
          ))}
          
          <FadeInUpDiv delay={0.5} className="text-center pt-4">
            <p className="text-base font-semibold text-primary">
              {t('total_timeline')}
            </p>
          </FadeInUpDiv>
        </div>
      </div>
    </section>
  );
}
