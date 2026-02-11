import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(message?: string): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212600000000';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || 
    'Hello, I want to learn more about study abroad programs';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  // Phone number should be digits only in env var
  const digitsOnly = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
}

export function formatPhoneNumber(phone: string): string {
  // Format international phone numbers
  return phone.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
}
