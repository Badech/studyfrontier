'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getWhatsAppLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function FloatingWhatsApp() {
  const t = useTranslations('common');
  const handleClick = () => {
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-40",
        "h-14 w-14 lg:h-16 lg:w-16 rounded-full",
        "bg-[#25D366] hover:bg-[#20BA5A]", // WhatsApp green
        "text-white shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
        "animate-bounce-slow"
      )}
      aria-label={t('whatsapp_aria')}
      title={t('whatsapp_aria')}
    >
      <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" />
    </button>
  );
}
