'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { WhatsAppLinkHandler } from '@/components/whatsapp-link-handler';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  showIcon?: boolean;
  source?: string;
  name?: string;
}

export function WhatsAppButton({ 
  message, 
  variant = 'primary', 
  size = 'default',
  className,
  showIcon = true,
  source = 'button',
  name
}: WhatsAppButtonProps) {
  const t = useTranslations('common');

  return (
    <WhatsAppLinkHandler source={source} text={message} name={name}>
      {({ onClick }) => (
        <Button
          onClick={onClick}
          variant={variant}
          size={size}
          className={cn("w-full sm:w-auto", className)}
          aria-label={t('whatsapp_aria')}
        >
          {showIcon && <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
          <span className="truncate">{t('whatsapp_cta')}</span>
        </Button>
      )}
    </WhatsAppLinkHandler>
  );
}
