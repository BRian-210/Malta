
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ArticleData } from '@/data/ArticleData';

interface BlogPreviewProps {
  articles: ArticleData[];
}

export default function BlogPreview({ articles = [] }: BlogPreviewProps) {
  const displayArticles = articles.slice(0, 3);

  const handleArticleClick = (articleId: string) => {
    window.location.href = `./article-detail.html?articleId=${articleId}`;
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-section-title">Latest Insights</h2>
          <p className="text-body text-muted-foreground max-w-2xl">
            Expert advice on Maltese building regulations, design trends, and construction best practices.
          </p>
        </div>
        <Button
          variant="outline"
          className="interactive group flex items-center gap-2 w-fit"
          onClick={() => window.location.href = './blog-listing.html'}
        >
          Read All Articles
          <SafeIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayArticles.map((article) => (
          <Card 
            key={article.id}
            className="surface-base interactive-lift group flex flex-col h-full cursor-pointer overflow-hidden"
            onClick={() => handleArticleClick(article.id)}
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={article.coverImageUrl}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-primary/90 text-primary-foreground border-none">
                  {article.section}
                </Badge>
              </div>
            </div>

            <CardHeader className="card-padding pb-3">
              <h3 className="text-item-title line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
            </CardHeader>

            <CardContent className="card-padding pt-0 flex-1 flex flex-col gap-4">
              <p className="text-caption text-foreground/80 line-clamp-3 flex-1">
                {article.summary}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground font-medium">
                  {article.readingTimeMinutes} min read
                </span>
                <span className="text-xs text-muted-foreground">
                  by {article.authorName}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
