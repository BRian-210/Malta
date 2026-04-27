
import { Button } from "@/components/ui/button";
import { 
  Empty, 
  EmptyHeader, 
  EmptyTitle, 
  EmptyDescription, 
  EmptyContent, 
  EmptyMedia 
} from "@/components/ui/empty";
import SafeIcon from "@/components/common/SafeIcon";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}
export default function EmptyState({
  icon = "Search",
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  const handleActionClick = () => {
    if (actionHref) {
      window.location.href = actionHref;
    }
  };

  return (
    <div className="page-body flex items-center justify-center min-h-[400px]">
      <Empty className="max-w-md w-full">
        <EmptyMedia>
          <div className="bg-muted/30 p-6 rounded-full inline-flex mb-4">
            <SafeIcon 
              name={icon} 
              size={48} 
              className="text-muted-foreground/60" 
              strokeWidth={1.5}
            />
          </div>
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle className="text-section-title">
            {title}
          </EmptyTitle>
          <EmptyDescription className="text-caption mt-2 text-balance">
            {description}
          </EmptyDescription>
        </EmptyHeader>
        {actionLabel && (
          <EmptyContent className="mt-8">
            <Button 
              variant="outline" 
              onClick={handleActionClick}
              className="interactive-lift"
            >
              {actionLabel}
            </Button>
          </EmptyContent>
        )}
      </Empty>
    </div>
  );
}
