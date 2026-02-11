'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/utils';
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
      className={className}
    >
      {showIcon && <MessageCircle className="h-5 w-5" />}
      {t('whatsapp_cta')}
    </Button>
  );
}
