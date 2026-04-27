
import { useMemo } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { query } from '@/data/ArticleService';

interface RelatedArticlesSectionProps {
  currentArticleId: string;
}

export default function RelatedArticlesSection({ currentArticleId }: RelatedArticlesSectionProps) {
  const relatedArticles = useMemo(() => {
    const allArticles = query({});
    return allArticles
      .filter(a => a.id !== currentArticleId)
      .slice(0, 3);
  }, [currentArticleId]);

  if (relatedArticles.length === 0) return null;

  const handleArticleClick = (articleId: string) => {
    window.location.href = `./article-detail.html?articleId=${articleId}`;
  };

  return (
    <section className="space-y-6 pt-8">
      <div className="space-y-2">
        <h2 className="text-section-title text-foreground">More Insights</h2>
        <p className="text-caption text-foreground/70">
          Explore more articles on Maltese architecture and construction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Card
            key={article.id}
            className="surface-base interactive-lift flex flex-col h-full group cursor-pointer"
            onClick={() => handleArticleClick(article.id)}
          >
            <CardHeader className="p-0 border-b border-border overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img
                  src={article.coverImageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="card-padding flex-1 flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider border-primary/30 text-primary">
                  {article.section}
                </Badge>
                <span className="text-[10px] text-muted-foreground font-medium">
                  {article.readingTimeMinutes} min
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-item-title text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-caption text-foreground/70 line-clamp-2">
                  {article.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                <SafeIcon name="ArrowRight" size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
