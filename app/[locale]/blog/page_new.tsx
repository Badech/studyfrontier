'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export default function BlogPage({ params }: { params: { locale: string } }) {
  const t = useTranslations('blog');

  const articles = [
    {
      slug: 'study-in-usa-complete-guide',
      title: t('articles.studyInUSA.title'),
      excerpt: t('articles.studyInUSA.excerpt'),
      category: t('articles.studyInUSA.category'),
      date: '2024-01-15',
      readTime: t('articles.studyInUSA.readTime'),
      featured: true
    },
    {
      slug: 'f1-visa-interview-tips',
      title: t('articles.f1VisaInterview.title'),
      excerpt: t('articles.f1VisaInterview.excerpt'),
      category: t('articles.f1VisaInterview.category'),
      date: '2024-01-10',
      readTime: t('articles.f1VisaInterview.readTime'),
      featured: true
    },
    {
      slug: 'affordable-us-universities',
      title: t('articles.affordableUniversities.title'),
      excerpt: t('articles.affordableUniversities.excerpt'),
      category: t('articles.affordableUniversities.category'),
      date: '2024-01-05',
      readTime: t('articles.affordableUniversities.readTime'),
      featured: false
    },
    {
      slug: 'scholarships-moroccan-students',
      title: t('articles.scholarships.title'),
      excerpt: t('articles.scholarships.excerpt'),
      category: t('articles.scholarships.category'),
      date: '2023-12-28',
      readTime: t('articles.scholarships.readTime'),
      featured: false
    },
    {
      slug: 'cost-of-studying-usa',
      title: t('articles.costOfStudying.title'),
      excerpt: t('articles.costOfStudying.excerpt'),
      category: t('articles.costOfStudying.category'),
      date: '2023-12-20',
      readTime: t('articles.costOfStudying.readTime'),
      featured: false
    },
    {
      slug: 'stem-programs-usa',
      title: t('articles.stemPrograms.title'),
      excerpt: t('articles.stemPrograms.excerpt'),
      category: t('articles.stemPrograms.category'),
      date: '2023-12-15',
      readTime: t('articles.stemPrograms.readTime'),
      featured: false
    },
    {
      slug: 'student-life-usa',
      title: t('articles.studentLife.title'),
      excerpt: t('articles.studentLife.excerpt'),
      category: t('articles.studentLife.category'),
      date: '2023-12-10',
      readTime: t('articles.studentLife.readTime'),
      featured: false
    },
    {
      slug: 'application-timeline',
      title: t('articles.applicationTimeline.title'),
      excerpt: t('articles.applicationTimeline.excerpt'),
      category: t('articles.applicationTimeline.category'),
      date: '2023-12-05',
      readTime: t('articles.applicationTimeline.readTime'),
      featured: false
    }
  ];

  const categories = [
    { name: t('categories.all'), count: articles.length },
    { name: t('categories.usa'), count: articles.filter(a => a.category === t('categories.usa')).length },
    { name: t('categories.visa'), count: articles.filter(a => a.category === t('categories.visa')).length },
    { name: t('categories.universities'), count: articles.filter(a => a.category === t('categories.universities')).length },
    { name: t('categories.scholarships'), count: articles.filter(a => a.category === t('categories.scholarships')).length }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-400 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-navy-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-200">
                {t('hero.subtitle')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="px-4 py-2 rounded-full border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-gold-600" />
              <h2 className="text-3xl font-bold text-navy-900">{t('featured')}</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {articles.filter(a => a.featured).map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-gold-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <Link href={`/${params.locale}/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm" className="group-hover:text-gold-600">
                          {t('readMore')} <ArrowRight className="h-4 w-4 ms-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* All Articles */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy-900 mb-8">{t('recent')}</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span className="px-2 py-1 bg-navy-100 text-navy-800 rounded-full font-medium">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-gold-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                      <Link href={`/${params.locale}/blog/${article.slug}`}>
                        <Button variant="ghost" size="sm">
                          {t('read')} <ArrowRight className="h-3 w-3 ms-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-navy-900 to-navy-700 text-white border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">{t('newsletter.title')}</CardTitle>
                <CardDescription className="text-gray-200 text-lg">
                  {t('newsletter.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder={t('newsletter.placeholder')}
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  />
                  <Button variant="premium" size="lg">
                    {t('newsletter.button')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
