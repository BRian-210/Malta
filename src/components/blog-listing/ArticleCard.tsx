
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  articleId: string;
  title: string;
  summary: string;
  section: string;
  coverImageUrl: string;
  authorName: string;
  publishedAt: string;
  readingTimeMinutes: number;
  featured: boolean;
}

export default function ArticleCard({
  articleId,
  title,
  summary,
  section,
  coverImageUrl,
  authorName,
  publishedAt,
  readingTimeMinutes,
  featured,
}: ArticleCardProps) {
  const handleNavigate = () => {
    window.location.href = `./article-detail.html?articleId=${articleId}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-MT', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card
      className="project-card group cursor-pointer border-none flex flex-col h-full"
      onClick={handleNavigate}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNavigate();
        }
      }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={coverImageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {featured && (
            <Badge className="bg-accent text-accent-foreground border-none shadow-sm">
              Featured
            </Badge>
          )}
          <Badge className="bg-primary text-primary-foreground border-none shadow-sm">
            {section}
          </Badge>
        </div>
      </div>

      <CardContent className="card-padding flex-1 flex flex-col space-y-3">
        <div className="space-y-2">
          <h3 className="text-item-title group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-caption text-muted-foreground line-clamp-2">
            {summary}
          </p>
        </div>

        <div className="pt-2 border-t border-border flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <SafeIcon name="User" size={12} />
            <span>{authorName}</span>
          </div>
          <div className="flex items-center gap-1">
            <SafeIcon name="Clock" size={12} />
            <span>{readingTimeMinutes} min read</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatDate(publishedAt)}</span>
          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
            Read More
            <SafeIcon name="ArrowRight" size={12} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
