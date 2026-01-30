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
      title: 'Complete Guide to Studying in the USA from Morocco',
      excerpt: 'Everything you need to know about applying to US universities, getting your F-1 visa, and succeeding as an international student.',
      category: 'USA',
      date: '2024-01-15',
      readTime: '12 min read',
      featured: true
    },
    {
      slug: 'f1-visa-interview-tips',
      title: 'F-1 Visa Interview Tips: What Moroccan Students Need to Know',
      excerpt: 'Ace your F-1 visa interview at the US Embassy in Casablanca with these proven tips and common questions.',
      category: 'Visa',
      date: '2024-01-10',
      readTime: '8 min read',
      featured: true
    },
    {
      slug: 'affordable-us-universities',
      title: 'Top 10 Affordable US Universities for International Students',
      excerpt: 'Quality education doesn\'t have to break the bank. Discover US universities with tuition under $20,000 per year.',
      category: 'Universities',
      date: '2024-01-05',
      readTime: '10 min read',
      featured: false
    },
    {
      slug: 'scholarships-moroccan-students',
      title: 'Scholarships for Moroccan Students: 2024 Complete List',
      excerpt: 'A comprehensive guide to scholarships available for Moroccan students studying in the USA.',
      category: 'Scholarships',
      date: '2023-12-28',
      readTime: '15 min read',
      featured: false
    },
    {
      slug: 'pathway-programs-explained',
      title: 'What Are Pathway Programs? Your Bridge to US Universities',
      excerpt: 'If your English isn\'t quite ready for direct admission, pathway programs can help you get there.',
      category: 'Pathways',
      date: '2023-12-20',
      readTime: '7 min read',
      featured: false
    },
    {
      slug: 'masters-vs-undergraduate',
      title: 'Master\'s vs Undergraduate: Which Should You Pursue in the USA?',
      excerpt: 'Compare costs, requirements, and career outcomes to make the right decision for your future.',
      category: 'Programs',
      date: '2023-12-15',
      readTime: '9 min read',
      featured: false
    }
  ];

  const categories = [
    { name: 'All Articles', count: articles.length },
    { name: 'USA', count: articles.filter(a => a.category === 'USA').length },
    { name: 'Visa', count: articles.filter(a => a.category === 'Visa').length },
    { name: 'Universities', count: articles.filter(a => a.category === 'Universities').length },
    { name: 'Scholarships', count: articles.filter(a => a.category === 'Scholarships').length }
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
                Study Abroad Insights & Guides
              </h1>
              <p className="text-xl text-gray-200">
                Expert advice on studying in the USA, visa processes, scholarships, and university admissions
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
              <h2 className="text-3xl font-bold text-navy-900">Featured Articles</h2>
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
                          Read More <ArrowRight className="h-4 w-4 ms-2" />
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
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Recent Articles</h2>
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
                          Read <ArrowRight className="h-3 w-3 ms-1" />
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
                <CardTitle className="text-3xl mb-4">Stay Updated</CardTitle>
                <CardDescription className="text-gray-200 text-lg">
                  Get the latest guides, tips, and scholarship opportunities delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  />
                  <Button variant="premium" size="lg">
                    Subscribe
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
