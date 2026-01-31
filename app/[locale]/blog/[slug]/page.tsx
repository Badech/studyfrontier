import { notFound } from 'next/navigation';

/**
 * Dynamic Blog Article Route
 * 
 * Returns 404 for all blog articles until they are created.
 * This prevents misleading users with fake article links.
 */

interface BlogArticlePageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  // Return 404 until real articles are created
  notFound();
}

// Don't generate static params since no articles exist yet
export function generateStaticParams() {
  return [];
}
