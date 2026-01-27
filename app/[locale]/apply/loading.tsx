import { Skeleton } from '@/components/ui/skeleton';
import { getLocale } from 'next-intl/server';

export default async function Loading() {
  const locale = await getLocale();
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <Skeleton className="h-12 md:h-16 w-1/2 mx-auto bg-white/20" />
            <Skeleton className="h-6 md:h-8 w-2/3 mx-auto bg-white/20" />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Card Skeleton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-2 rounded-xl p-8 space-y-6">
              <div className="text-center space-y-4">
                <Skeleton className="h-20 w-20 rounded-full mx-auto" />
                <Skeleton className="h-10 w-2/3 mx-auto" />
              </div>
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-14 w-60 mx-auto rounded-full" />
              <Skeleton className="h-5 w-40 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="text-center space-y-4">
                <Skeleton className="h-16 w-16 rounded-full mx-auto" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
                <Skeleton className="h-6 w-6 rounded-full mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
