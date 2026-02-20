/**
 * Single Source of Truth for Brand Identity & Contact Details
 * 
 * DO NOT hardcode contact information anywhere else in the codebase.
 * Always import from this file to ensure consistency.
 */

export const BRAND_CONFIG = {
  // Brand Identity
  brandName: "StudyFrontier",
  websiteUrl: "https://studyfrontier.com",
  
  // WhatsApp Configuration
  whatsapp: {
    // E.164 format with country code (for display with +)
    numberE164: "+15716904684",
    // Digits only (for wa.me links)
    numberDigits: "15716904684",
    // Formatted for display (international format)
    numberDisplay: "+1 571-690-4684",
    // Direct WhatsApp link
    linkDefault: "https://wa.me/15716904684",
    // Default prefill message
    prefillText: "Hello, I completed the StudyFrontier form",
  },
  
  // Email Configuration
  email: {
    primary: "Contact@studyfrontier.com",
    // Mailto link
    mailtoLink: "mailto:Contact@studyfrontier.com",
  },
  
  // Location & Service Area
  location: {
    country: "United States",
    countryCode: "US",
    serviceDescription: "United States (Remote Support Worldwide)",
  },
  
  // Languages
  languages: {
    supported: ["English", "Français", "العربية"],
    codes: ["en", "fr", "ar"],
  },
  
  // Social Media (for future use)
  social: {
    // facebook: "https://www.facebook.com/studyfrontier",
    // instagram: "https://www.instagram.com/studyfrontier",
    // linkedin: "https://www.linkedin.com/company/studyfrontier",
  },
} as const;

/**
 * Build WhatsApp link with proper URL encoding and source tracking
 * @param options - Configuration for the WhatsApp message
 * @param options.text - Custom message text (optional)
 * @param options.source - Source/location of the CTA (e.g., "hero", "footer", "contact")
 * @param options.name - User's name (optional, defaults to "visitor")
 * @returns WhatsApp link with encoded message
 */
export function buildWhatsAppLink(options?: {
  text?: string;
  source?: string;
  name?: string;
}): string {
  const { text, source = 'website', name = '' } = options || {};
  
  // If custom text is provided, use it directly
  if (text) {
    const encodedMessage = encodeURIComponent(text);
    return `https://wa.me/${BRAND_CONFIG.whatsapp.numberDigits}?text=${encodedMessage}`;
  }
  
  // Build contextualized message with source tracking
  const namePart = name ? `ana ${name}. ` : '';
  const message = `Salam, ${namePart}Kmlt eligibility/form. Source: ${source}.`;
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${BRAND_CONFIG.whatsapp.numberDigits}?text=${encodedMessage}`;
}

/**
 * Legacy helper - maintained for backward compatibility
 * @deprecated Use buildWhatsAppLink instead
 */
export function getWhatsAppLink(customMessage?: string): string {
  return buildWhatsAppLink({ text: customMessage });
}

/**
 * Helper function to format phone number for display
 * @param format - Display format: 'international' | 'e164' | 'digits'
 * @returns Formatted phone number
 */
export function formatPhoneNumber(format: 'international' | 'e164' | 'digits' = 'international'): string {
  switch (format) {
    case 'international':
      return BRAND_CONFIG.whatsapp.numberDisplay;
    case 'e164':
      return BRAND_CONFIG.whatsapp.numberE164;
    case 'digits':
      return BRAND_CONFIG.whatsapp.numberDigits;
    default:
      return BRAND_CONFIG.whatsapp.numberDisplay;
  }
}

// Type exports for TypeScript
export type BrandConfig = typeof BRAND_CONFIG;
