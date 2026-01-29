import { Inter, DM_Sans, Noto_Sans_Arabic } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Display Font - Strong, modern headlines (like Stripe, Linear)
export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

// Body Font - Clean, highly readable (improved Inter config)
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

// Arabic Font - Premium Arabic support
export const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </>
  );
}
