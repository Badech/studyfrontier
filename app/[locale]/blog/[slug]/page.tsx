import { notFound, redirect } from 'next/navigation';

/**
 * Dynamic Blog Article Route
 * 
 * Currently redirects all blog articles to the coming-soon page
 * until individual articles are created.
 */

interface BlogArticlePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  // Redirect to coming-soon page until articles are ready
  redirect(`/${params.locale}/coming-soon`);
}

// Optional: If you want to generate static params for known slugs
export function generateStaticParams() {
  const slugs = [
    'study-in-usa-complete-guide',
    'f1-visa-interview-tips',
    'affordable-us-universities',
    'scholarships-moroccan-students',
    'cost-of-studying-usa',
    'stem-programs-usa',
    'student-life-usa',
    'application-timeline',
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}
