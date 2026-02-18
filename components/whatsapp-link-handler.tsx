'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/utils';

interface WhatsAppLinkHandlerProps {
  source: string;
  name?: string;
  text?: string;
  children: (props: { onClick: () => void; isOpen: boolean }) => React.ReactNode;
}

/**
 * Handles WhatsApp link opening with fallback for failed window.open
 * Shows a copyable link if the popup is blocked or fails
 */
export function WhatsAppLinkHandler({ 
  source, 
  name, 
  text, 
  children 
}: WhatsAppLinkHandlerProps) {
  const t = useTranslations('accessibility');
  const tCommon = useTranslations('common');
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const whatsappUrl = buildWhatsAppLink({ text, source, name });

  const handleClick = () => {
    // Try to open in new window
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // If window.open failed (popup blocked or other issue), show fallback
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      setShowFallback(true);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(whatsappUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = whatsappUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDirectOpen = () => {
    window.location.href = whatsappUrl;
  };

  return (
    <>
      {children({ onClick: handleClick, isOpen: showFallback })}
      
      {showFallback && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background border rounded-lg shadow-lg max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{t('whatsapp_fallback_title')}</h3>
              <button
                onClick={() => setShowFallback(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label={t('close_button')}
              >
                ✕
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {t('whatsapp_fallback_description')}
            </p>
            
            <div className="flex flex-col gap-3">
              {/* Direct open button */}
              <button
                onClick={handleDirectOpen}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-md font-medium transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                {t('open_whatsapp_button')}
              </button>
              
              {/* Copy link button */}
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-input rounded-md hover:bg-accent transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{t('link_copied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span className="text-sm">{t('copy_link_button')}</span>
                  </>
                )}
              </button>
            </div>
            
            {/* Show the actual link */}
            <div className="mt-2 p-3 bg-muted rounded text-xs font-mono break-all">
              {whatsappUrl}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
