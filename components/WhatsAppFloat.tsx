'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const WHATSAPP_NUMBER = '212708026571';

export function WhatsAppFloat() {
  const t = useTranslations('whatsapp');

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 whatsapp-pulse group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-pulse" />
      <span className="font-semibold hidden md:inline-block">
        {t('float_text')}
      </span>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
        Free
      </span>
    </button>
  );
}
