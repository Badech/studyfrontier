import { Skeleton } from '@/components/ui/skeleton';

export default function Loading({ params }: { params: { locale: string } }) {
  const isRTL = params.locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <Skeleton className="h-12 md:h-16 w-3/4 mx-auto bg-white/20" />
            <Skeleton className="h-6 md:h-8 w-5/6 mx-auto bg-white/20" />
            <Skeleton className="h-5 md:h-6 w-2/3 mx-auto bg-white/20" />
            <div className="pt-4">
              <Skeleton className="h-14 w-56 mx-auto rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Skeleton */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 space-y-4">
            <Skeleton className="h-10 md:h-12 w-1/2 mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-6 border rounded-xl space-y-4">
                <Skeleton className="h-12 w-12 rounded-full mx-auto" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Skeleton */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <Skeleton className="h-10 md:h-12 w-2/3 mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
            <div className="pt-2">
              <Skeleton className="h-14 w-60 mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
