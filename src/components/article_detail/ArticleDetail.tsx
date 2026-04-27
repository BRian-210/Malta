
import { useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Breadcrumb from '@/components/common/Breadcrumb';
import SafeIcon from '@/components/common/SafeIcon';
import { getByIdVO, getAll } from '@/data/ArticleService';
import type { ArticleVO } from '@/data/ArticleService';
import RelatedArticlesSection from './RelatedArticlesSection';
import RelatedProjectsSection from './RelatedProjectSection';
import EmptyState from '@/components/common/EmptyState';

export default function ArticleDetail() {
  const allArticles = useMemo(() => getAll(), []);
  
  const [article, setArticle] = useState<ArticleVO | null>(() => {
    const defaultArticle = allArticles.find(a => a.featured) || allArticles[0];
    return defaultArticle ? getByIdVO(defaultArticle.id) || null : null;
  });

  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('articleId');

      if (articleId) {
        const foundArticle = getByIdVO(articleId);
        if (foundArticle) {
          setArticle(foundArticle);
        }
      }

      setIsClient(true);
    });
  }, []);

  if (!article) {
    return (
      <EmptyState
        icon="FileText"
        title="Article Not Found"
        description="The article you're looking for could not be found. Please check the URL or browse our latest insights."
        actionLabel="Back to Insights"
        actionHref="./blog-listing.html"
      />
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: './home-page.html' },
    { label: 'Insights', href: './blog-listing.html' },
    { label: article.title }
  ];

  const handleBackClick = () => {
    window.location.href = './blog-listing.html';
  };

  const handleConsultationClick = () => {
    window.location.href = './consultation-request-page.html';
  };

  return (
    <main className="min-h-screen bg-background">
      <article className="page-body">
        {/* Navigation */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-6 nav-link flex items-center gap-2 px-0 hover:bg-transparent"
            onClick={handleBackClick}
          >
            <SafeIcon name="ArrowLeft" size={18} />
            <span>Back to Insights</span>
          </Button>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header Section */}
        <div className="mb-12 space-y-6 max-w-3xl">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-label text-primary font-bold uppercase tracking-wider">
                {article.section}
              </span>
              <span className="text-caption text-muted-foreground">
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-caption text-muted-foreground">
                {article.readingTimeMinutes} min read
              </span>
            </div>

            <h1 className="text-page-title text-foreground">
              {article.title}
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
              {article.summary}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
              <SafeIcon name="User" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">{article.authorName}</span>
              <span className="text-sm text-muted-foreground">Author</span>
            </div>
          </div>
        </div>

        <Separator className="my-12 opacity-50" />

        {/* Featured Image */}
        {article.coverImageUrl && (
          <div className="mb-12 max-w-4xl">
            <img
              src={article.coverImageUrl}
              alt={article.title}
              className="w-full h-auto rounded-lg object-cover shadow-card"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-3xl prose-content mb-16">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split('\n\n')
                .map((paragraph) => `<p>${paragraph}</p>`)
                .join('')
            }}
          />
        </div>

        <Separator className="my-12 opacity-50" />

        {/* Related Projects Section */}
        {article.relatedProjects && article.relatedProjects.length > 0 && (
          <div className="mb-16">
            <RelatedProjectsSection projects={article.relatedProjects} />
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-secondary/30 border border-secondary rounded-lg card-padding max-w-3xl text-center space-y-4 mb-16">
          <h3 className="text-section-title text-foreground">
            Ready to Transform Your Maltese Property?
          </h3>
          <p className="text-body text-foreground/80 max-w-xl mx-auto">
            Our team of architects and engineers are ready to discuss your project. Schedule a consultation today.
          </p>
          <Button
            className="btn-cta group flex items-center gap-2 mx-auto"
            onClick={handleConsultationClick}
          >
            Start Your Consultation
            <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Related Articles Section */}
        <RelatedArticlesSection currentArticleId={article.id} />
      </article>
    </main>
  );
}
