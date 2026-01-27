import { Skeleton } from '@/components/ui/skeleton';

export default function Loading({ params }: { params: { locale: string } }) {
  const isRTL = params.locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <Skeleton className="h-16 w-16 rounded-full mx-auto bg-white/20" />
            <Skeleton className="h-12 md:h-16 w-1/2 mx-auto bg-white/20" />
            <Skeleton className="h-6 md:h-8 w-2/3 mx-auto bg-white/20" />
          </div>
        </div>
      </section>

      {/* Category Sections Skeleton */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {[...Array(3)].map((_, sectionIndex) => (
              <div key={sectionIndex} className="space-y-8">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <Skeleton className="h-8 w-64" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, itemIndex) => (
                    <div key={itemIndex} className="border rounded-xl p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-4 w-4" />
                      </div>
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-8 w-24" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
