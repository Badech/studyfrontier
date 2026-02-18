import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { 
  getWhatsAppLink as getBrandWhatsAppLink, 
  buildWhatsAppLink as buildBrandWhatsAppLink,
  formatPhoneNumber as formatBrandPhone 
} from '@/lib/config/brand';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get WhatsApp link with optional custom message
 * Now uses brand config for single source of truth
 * @deprecated Use buildWhatsAppLink instead for better source tracking
 */
export function getWhatsAppLink(message?: string): string {
  return getBrandWhatsAppLink(message);
}

/**
 * Build WhatsApp link with source tracking and proper encoding
 * @param options - Configuration for the WhatsApp message
 */
export function buildWhatsAppLink(options?: {
  text?: string;
  source?: string;
  name?: string;
}): string {
  return buildBrandWhatsAppLink(options);
}

/**
 * Format phone number for display
 * Now uses brand config for single source of truth
 */
export function formatPhoneNumber(format: 'international' | 'e164' | 'digits' = 'international'): string {
  return formatBrandPhone(format);
}
