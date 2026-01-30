import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, Mail } from 'lucide-react';

export default function ComingSoonPage({ params }: { params: { locale: string } }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-navy-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gold-100 rounded-full">
            <Clock className="h-12 w-12 text-gold-600" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-600">
              We're working on this content and will publish it soon.
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 max-w-lg mx-auto">
            This page is currently under development. Check back soon or contact us to learn more about our services.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href={`/${params.locale}`}>
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <Link href={`/${params.locale}/contact`}>
              <Button variant="premium" size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
