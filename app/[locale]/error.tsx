'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('errors');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-destructive/20" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{t('500.title')}</h2>
          <p className="text-muted-foreground">
            {t('500.description')}
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            <RefreshCw className="h-4 w-4 mr-2" />
            {t('500.tryAgain')}
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              {t('500.goHome')}
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
