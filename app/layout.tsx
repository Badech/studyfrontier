import { Inter, Noto_Sans_Arabic } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
