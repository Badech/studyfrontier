'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { X, FileText, Mail, CheckCircle } from 'lucide-react';

export function ExitIntentPopup() {
  const t = useTranslations('exitIntent');
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown && !isSubmitted) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add a small delay before activating
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Only activate after 5 seconds on site

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with your email service here
    console.log('Exit intent email captured:', email);
    setIsSubmitted(true);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative max-w-lg w-full mx-4 shadow-2xl border-2 border-blue-500">
        <button
          onClick={handleClose}
          className="absolute top-4 end-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <CardHeader className="text-center pb-8 pt-12">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">{t('success.title')}</CardTitle>
            <CardDescription className="text-base">{t('success.message')}</CardDescription>
          </CardHeader>
        ) : (
          <>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-gold-500 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                {t('title')}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {t('subtitle')}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute start-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    required
                    className="w-full ps-12 pe-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full"
                >
                  {t('button')}
                </Button>
              </form>

              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-500 text-center">
                  {t('benefits.title')}
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                    {t('benefits.item1')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                    {t('benefits.item2')}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                    {t('benefits.item3')}
                  </li>
                </ul>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
