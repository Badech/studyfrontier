'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  MapPin,
  Calendar,
  TrendingUp,
  MessageCircle,
  Star,
  Quote
} from 'lucide-react';

const WHATSAPP_NUMBER = '212708026571';

export default function SuccessStoriesPage() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  // Template structure - ready for real stories
  const stories = [
    {
      id: 'coming-soon-1',
      name: 'Your Success Story',
      photo: null,
      fromCity: 'Casablanca',
      program: 'Computer Science',
      university: 'Your Dream University',
      country: 'USA',
      year: '2024',
      testimonial: 'Share your journey with future students. Your story will be featured here.',
      journey: {
        background: 'Your academic background',
        challenges: 'Obstacles you overcame',
        process: 'How StudyFrontier helped',
        outcome: 'Where you are now',
        advice: 'Your advice for future students'
      },
      tags: ['USA', 'STEM', 'Success Story'],
      featured: true
    }
  ];

  const testimonials = [
    {
      id: 'template-1',
      name: 'Student Name',
      location: 'City, Morocco',
      program: 'Program Name',
      university: 'University Name',
      rating: 5,
      quote: 'Your testimonial will appear here. Share how StudyFrontier helped you achieve your study abroad goals.',
      date: '2024'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Real students. Real universities. Real results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border-2 border-blue-500">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Building Our Success Story Gallery</CardTitle>
              <CardDescription className="text-base mt-2">
                We're currently documenting the journeys of our students who have successfully enrolled in US universities. 
                Check back soon to see detailed case studies, testimonials, and student journeys.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="premium" size="lg" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Be One of Our Success Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Template Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
                Featured Success Stories
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {stories.map((story, index) => (
                <AnimatedSection key={story.id} delay={index * 0.1}>
                  <Card className="border-2 hover:border-gold-400 transition-all">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Photo Placeholder */}
                        <div className="w-32 h-32 bg-gradient-to-br from-navy-900 to-navy-700 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                          <GraduationCap className="h-16 w-16 text-gold-400" />
                        </div>

                        {/* Story Header */}
                        <div className="flex-1 text-center md:text-left">
                          <CardTitle className="text-3xl mb-2">{story.name}</CardTitle>
                          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{story.fromCity}, Morocco → {story.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <GraduationCap className="h-4 w-4" />
                              <span>{story.program}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{story.year}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {story.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Testimonial */}
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                        <Quote className="h-8 w-8 text-gold-500 mb-3" />
                        <p className="text-lg text-gray-700 italic mb-4">
                          "{story.testimonial}"
                        </p>
                        <p className="text-gray-600 font-medium">— {story.name}</p>
                      </div>

                      {/* Journey Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                            <Star className="h-5 w-5 text-gold-500" />
                            Background
                          </h4>
                          <p className="text-gray-600">{story.journey.background}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-gold-500" />
                            Outcome
                          </h4>
                          <p className="text-gray-600">{story.journey.outcome}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-500 text-center">
                          Admitted to <strong>{story.university}</strong> | {story.program} | {story.year}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">
                What Our Students Say
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                        ))}
                      </div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.program} at {testimonial.university}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.date}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-200">
                Join the students who've successfully navigated the US admissions process with our guidance
              </p>
              <Button variant="premium" size="xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="h-5 w-5" />
                Start Your Journey
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
