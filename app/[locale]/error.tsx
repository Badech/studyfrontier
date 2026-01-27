'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
  params,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  params: { locale: string };
}) {
  const t = useTranslations('error');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Localized error:', error);
  }, [error]);

  // Determine text direction for RTL languages
  const isRTL = params.locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16"
      dir={dir}
    >
      <Card className="max-w-md w-full shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl text-navy-900">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-gray-600 leading-relaxed">
            {t('description')}
          </p>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-xs font-mono text-red-800 break-all" dir="ltr">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2" dir="ltr">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={reset}
              variant="default"
              className="flex-1 min-h-[44px]"
              aria-label={t('tryAgainLabel')}
            >
              <RefreshCw className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
              {t('tryAgain')}
            </Button>
            <Link href={`/${params.locale}`} className="flex-1">
              <Button 
                variant="outline" 
                className="w-full min-h-[44px]"
                aria-label={t('goHomeLabel')}
              >
                <Home className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                {t('goHome')}
              </Button>
            </Link>
          </div>

          <p className="text-xs text-center text-gray-500">
            {t('persistMessage')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
