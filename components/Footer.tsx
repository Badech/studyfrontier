import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer({ locale }: { locale: string }) {
  const t = useTranslations();
  const nav = useTranslations('nav');
  const footer = useTranslations('footer');

  const navItems = [
    { href: '/', label: nav('home') },
    { href: '/why-studyfrontier', label: 'Why Us' },
    { href: '/who-we-work-with', label: 'Who We Work With' },
    { href: '/services', label: nav('services') },
    { href: '/study-in-usa', label: 'Study in USA' },
    { href: '/resources', label: 'Resources' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: nav('about') },
    { href: '/contact', label: nav('contact') },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xl"><img src="/logo.png" alt="StudyFrontier Logo" className="w-6 h-6" /></span>
              </div>
              <span className="font-bold text-xl">StudyFrontier</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footer('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="block text-gray-300 hover:text-gold-400 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@studyfrontier.com"
                className="flex items-start gap-3 text-gray-300 hover:text-gold-400 transition-colors text-sm"
              >
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>contact@studyfrontier.com</span>
              </a>
              <a
                href="tel:+212708026571"
                className="flex items-start gap-3 text-gray-300 hover:text-gold-400 transition-colors text-sm"
              >
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+212 708 026 571</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>{footer('location')}</span>
              </div>
            </div>
          </div>

          {/* Legal & Transparency */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Commitment</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Ethical & legal consulting</li>
              <li>✓ Accredited universities only</li>
              <li>✓ Transparent processes</li>
              <li>✓ No visa guarantees</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} StudyFrontier. {footer('rights')}</p>
            <p className="text-center md:text-right max-w-md">
              {footer('description')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
