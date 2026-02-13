'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink, cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({ 
  message, 
  variant = 'primary', 
  size = 'default',
  className,
  showIcon = true 
}: WhatsAppButtonProps) {
  const t = useTranslations('common');
  
  const handleClick = () => {
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn("w-full sm:w-auto", className)}
    >
      {showIcon && <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
      <span className="truncate">{t('whatsapp_cta')}</span>
    </Button>
  );
}
