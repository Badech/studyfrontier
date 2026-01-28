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
            <Skeleton className="h-12 md:h-16 w-3/4 mx-auto bg-white/20" />
            <Skeleton className="h-6 md:h-8 w-5/6 mx-auto bg-white/20" />
            <Skeleton className="h-5 md:h-6 w-2/3 mx-auto bg-white/20" />
          </div>
        </div>
      </section>

      {/* Quick Stats Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center space-y-3 p-4 border rounded-lg">
                <Skeleton className="h-10 w-20 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {[...Array(3)].map((_, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <Skeleton className="h-8 w-48" />
                </div>
                <div className="space-y-3 bg-white p-6 rounded-xl">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Grid Skeleton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-10 w-1/2 mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border rounded-xl p-6 space-y-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Skeleton className="h-10 w-2/3 mx-auto bg-white/20" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-white/20" />
            <Skeleton className="h-14 w-60 mx-auto rounded-full bg-white/30" />
          </div>
        </div>
      </section>
    </div>
  );
}
