'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GraduationCap, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

interface QuizAnswers {
  education: string;
  english: string;
  intake: string;
  budget: string;
}

export function StudyQuiz() {
  const t = useTranslations('quiz');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    education: '',
    english: '',
    intake: '',
    budget: ''
  });

  const questions = [
    {
      id: 'education',
      question: t('questions.education.question'),
      options: [
        t('questions.education.options.highschool'),
        t('questions.education.options.bachelor'),
        t('questions.education.options.master'),
        t('questions.education.options.other')
      ]
    },
    {
      id: 'english',
      question: t('questions.english.question'),
      options: [
        t('questions.english.options.beginner'),
        t('questions.english.options.intermediate'),
        t('questions.english.options.advanced'),
        t('questions.english.options.native')
      ]
    },
    {
      id: 'intake',
      question: t('questions.intake.question'),
      options: [
        t('questions.intake.options.fall2024'),
        t('questions.intake.options.spring2025'),
        t('questions.intake.options.fall2025'),
        t('questions.intake.options.flexible')
      ]
    },
    {
      id: 'budget',
      question: t('questions.budget.question'),
      options: [
        t('questions.budget.options.under15k'),
        t('questions.budget.options.15to25k'),
        t('questions.budget.options.25to40k'),
        t('questions.budget.options.over40k')
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentStep].id as keyof QuizAnswers;
    setAnswers({ ...answers, [questionId]: answer });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Redirect to WhatsApp with prefilled message
      redirectToWhatsApp();
    }
  };

  const redirectToWhatsApp = () => {
    const message = `Hi! I completed the study quiz:\n\n` +
      `📚 Education: ${answers.education}\n` +
      `🗣️ English Level: ${answers.english}\n` +
      `📅 Desired Intake: ${answers.intake}\n` +
      `💰 Budget: ${answers.budget}\n\n` +
      `I'd like to discuss my options for studying in the USA.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-gold-500 rounded-full mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-200">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="max-w-3xl mx-auto shadow-2xl">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-t-lg overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-gold-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <CardHeader>
              <div className="text-sm text-gray-500 mb-2">
                {t('step')} {currentStep + 1} {t('of')} {questions.length}
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                {questions[currentStep].question}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{option}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </button>
              ))}

              {currentStep > 0 && (
                <Button
                  variant="ghost"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="w-full mt-4"
                >
                  {t('back')}
                </Button>
              )}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-gray-300 mt-6 text-sm">
            {t('privacy')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
