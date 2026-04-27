
import { useState, useMemo, useEffect } from 'react';
import { getAll, query as queryArticles } from '@/data/ArticleService';
import type { ArticleData } from '@/data/ArticleData';
import Breadcrumb from '@/components/common/Breadcrumb';
import PageHero from '@/components/common/PageHero';
import BlogFilterBar from '@/components/blog-listing/BlogFilterBar';
import ArticleCard from '@/components/blog-listing/ArticleCard';
import { Pagination } from '@/components/common/Pagination';
import EmptyState from '@/components/common/EmptyState';

const ARTICLES_PER_PAGE = 6;

export default function BlogListingContent() {
  const allArticles = useState(() => getAll());
  
  const [isClient, setIsClient] = useState(true);
  const [section, setSection] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const urlSection = params.get('section') || '';
    const urlPage = parseInt(params.get('page') || '1', 10);
    
    requestAnimationFrame(() => {
      if (urlSection) setSection(urlSection);
      if (urlPage > 1) setCurrentPage(urlPage);
      setIsClient(true);
    });
  }, []);

  const filteredArticles = useMemo(() => {
    return queryArticles({
      keyword,
      filter: section ? { section } : {},
      sortKey: 'publishedAt',
      sortDirection: 'desc'
    });
  }, [section, keyword]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const uniqueSections = Array.from(new Set(allArticles[0].map((a) => a.section))).sort();

  const handleSectionChange = (newSection: string) => {
    setSection(newSection);
    setCurrentPage(1);
  };

  const handleKeywordChange = (newKeyword: string) => {
    setKeyword(newKeyword);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Industry Insights"
        subtitle="Expert articles on Maltese building regulations, construction tips, and design trends."
        backgroundImage="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/52f56faf-4a60-4e09-8e7f-0ee9671af35a.png"
        variant="compact"
      />

      <main className="flex-1 page-body">
        <div className="page-container space-y-8">
          <Breadcrumb items={[
            { label: 'Home', href: './home-page.html' },
            { label: 'Blog' }
          ]} />

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-page-title mb-2">Latest Articles</h1>
                <p className="text-caption text-muted-foreground">
                  {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
                </p>
              </div>
            </div>

            <BlogFilterBar
              sections={uniqueSections}
              activeSection={section}
              onSectionChange={handleSectionChange}
              keyword={keyword}
              onKeywordChange={handleKeywordChange}
              isClient={isClient}
            />
          </div>

          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    articleId={article.id}
                    title={article.title}
                    summary={article.summary}
                    section={article.section}
                    coverImageUrl={article.coverImageUrl}
                    authorName={article.authorName}
                    publishedAt={article.publishedAt}
                    readingTimeMinutes={article.readingTimeMinutes}
                    featured={article.featured}
                  />
                ))}
              </div>

              {totalPages > 1 && isClient && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <EmptyState
              icon="BookOpen"
              title="No Articles Found"
              description={
                section || keyword
                  ? `We couldn't find any articles matching your search. Try adjusting your filters or browse all articles.`
                  : 'No articles available at the moment. Please check back soon.'
              }
              actionLabel="Clear Filters"
              actionHref="./blog-listing.html"
            />
          )}
        </div>
      </main>
    </div>
  );
}
