'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">
      <CardContent className="p-6 space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4 fill-gold-500 text-gold-500" 
              aria-hidden="true"
            />
          ))}
          <span className="sr-only">{testimonial.rating} out of 5 stars</span>
        </div>

        {/* Quote Icon */}
        <div className="relative">
          <Quote 
            className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" 
            aria-hidden="true"
          />
          <blockquote className="relative pl-6 text-gray-700 leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>
        </div>

        {/* Student Info */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-start gap-4">
            {/* Photo Placeholder */}
            <div 
              className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-xl ring-2 ring-primary/20 group-hover:ring-4 transition-all"
              role="img"
              aria-label={`Photo of ${testimonial.name}`}
            >
              {testimonial.name.charAt(0)}
            </div>

            {/* Student Details */}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-navy-900 text-lg">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-1">
                  <span aria-label={`From ${testimonial.country}`}>
                    {testimonial.flag}
                  </span>
                  <span>{testimonial.country}</span>
                </div>
                <div className="text-primary font-medium">
                  {testimonial.program}
                </div>
                <div className="text-gray-500">
                  {testimonial.university}
                </div>
                <div className="text-xs text-gray-400">
                  Class of {testimonial.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
