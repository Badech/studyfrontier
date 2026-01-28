import { Skeleton } from './skeleton';

/**
 * Reusable loading skeleton patterns for common layouts
 * All components are RTL-compatible and match actual page layouts
 */

export function HeroSkeleton({ variant = 'default' }: { variant?: 'default' | 'large' | 'minimal' }) {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          {variant === 'large' && (
            <Skeleton className="h-16 w-16 rounded-full mx-auto bg-white/20" />
          )}
          <Skeleton className={`${variant === 'minimal' ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-3/4 mx-auto bg-white/20`} />
          <Skeleton className="h-6 md:h-8 w-5/6 mx-auto bg-white/20" />
          {variant !== 'minimal' && (
            <Skeleton className="h-5 md:h-6 w-2/3 mx-auto bg-white/20" />
          )}
          <div className="pt-4">
            <Skeleton className="h-14 w-56 mx-auto rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardGridSkeleton({ 
  columns = 3, 
  items = 3,
  hasImage = false 
}: { 
  columns?: number;
  items?: number;
  hasImage?: boolean;
}) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3';
  
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6 md:gap-8`}>
      {[...Array(items)].map((_, index) => (
        <div key={index} className="p-6 border rounded-xl space-y-4">
          {hasImage && <Skeleton className="h-40 w-full rounded-lg" />}
          <Skeleton className="h-12 w-12 rounded-full mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
}

export function ContentSectionSkeleton({ sections = 3 }: { sections?: number }) {
  return (
    <div className="space-y-12">
      {[...Array(sections)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
}

export function BlogPostGridSkeleton({ posts = 6 }: { posts?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[...Array(posts)].map((_, index) => (
        <div key={index} className="border rounded-xl overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="pt-2">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CTASkeleton() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-navy-900 to-navy-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Skeleton className="h-10 md:h-12 w-2/3 mx-auto bg-white/20" />
          <Skeleton className="h-6 w-3/4 mx-auto bg-white/20" />
          <div className="pt-2">
            <Skeleton className="h-14 w-60 mx-auto rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
