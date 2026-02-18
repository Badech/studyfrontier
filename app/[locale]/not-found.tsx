'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('errors');

  return (
    <Container className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <h2 className="text-3xl font-bold">{t('404.title')}</h2>
          <p className="text-muted-foreground">
            {t('404.description')}
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button asChild variant="primary">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              {t('404.goHome')}
            </Link>
          </Button>
          <Button variant="outline" onClick={() => typeof window !== 'undefined' && window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('404.goBack')}
          </Button>
        </div>
      </div>
    </Container>
  );
}
