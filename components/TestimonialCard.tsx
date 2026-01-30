'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-white relative overflow-hidden">
      {/* Decorative gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 via-gold-400/0 to-gold-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="relative p-8 space-y-6">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-gold-400 text-gold-400 transition-transform duration-300 group-hover:scale-110" 
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-hidden="true"
            />
          ))}
          <span className="sr-only">{testimonial.rating} out of 5 stars</span>
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote 
            className="h-10 w-10 text-gold-400/20 absolute -top-3 -start-3 transition-all duration-300 group-hover:text-gold-400/30 group-hover:scale-110" 
            aria-hidden="true"
          />
          <blockquote className="relative ps-8 font-body text-lg text-navy-700 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
        </div>

        {/* Student Info */}
        <div className="pt-6 border-t-2 border-navy-100 group-hover:border-gold-400/30 transition-colors duration-300">
          <div className="flex items-start gap-4">
            {/* Photo Placeholder */}
            <div 
              className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center text-white font-display font-bold text-lg ring-4 ring-navy-100 group-hover:ring-gold-400/30 transition-all duration-300 group-hover:scale-105"
              role="img"
              aria-label={`Photo of ${testimonial.name}`}
            >
              {testimonial.name.charAt(0)}
            </div>

            {/* Student Details */}
            <div className="flex-1 min-w-0">
              <div className="font-display font-semibold text-navy-900 text-lg mb-1">
                {testimonial.name}
              </div>
              <div className="font-body text-sm text-navy-600 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base" aria-label={`From ${testimonial.country}`}>
                    {testimonial.flag}
                  </span>
                  <span>{testimonial.country}</span>
                </div>
                <div className="text-gold-600 font-medium">
                  {testimonial.program}
                </div>
                <div className="text-navy-500 font-medium">
                  {testimonial.university}
                </div>
                <div className="text-xs text-navy-400">
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
