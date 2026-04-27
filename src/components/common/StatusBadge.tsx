
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  label: string;
  variant: 'category' | 'service' | 'status';
}

/**
 * StatusBadge: A color-coded pill component for Maltese architecture and construction labels.
 * Utilizes semantic classes defined in global.css for consistent branding.
 */
export default function StatusBadge({ label, variant }: StatusBadgeProps) {
  // Map specific labels to their dedicated styles defined in global.css
  const getBadgeClass = (val: string, type: 'category' | 'service' | 'status') => {
    const normalized = val.toLowerCase();

    if (type === 'category') {
      if (normalized.includes('residential')) return 'badge-residential';
      if (normalized.includes('commercial')) return 'badge-commercial';
      if (normalized.includes('heritage')) return 'badge-heritage';
      return 'bg-muted text-muted-foreground border-muted';
    }

    if (type === 'service') {
      if (normalized.includes('structural')) return 'service-structural font-semibold text-xs uppercase tracking-wider';
      if (normalized.includes('architectural')) return 'service-architectural font-semibold text-xs uppercase tracking-wider';
      if (normalized.includes('interior')) return 'service-interior font-bold text-xs uppercase tracking-wider';
      return 'text-muted-foreground font-semibold text-xs uppercase tracking-wider';
    }

    if (type === 'status') {
      if (normalized.includes('completed') || normalized.includes('delivered')) return 'status-completed';
      if (normalized.includes('progress') || normalized.includes('ongoing')) {
        return 'bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full text-xs font-medium';
      }
      return 'bg-muted text-muted-foreground border-muted px-3 py-1 rounded-full text-xs font-medium';
    }

    return '';
  };

  const styleClass = getBadgeClass(label, variant);

  // If it's a 'service' variant, we use a simpler span to avoid the default Badge padding/background 
  // conflicting with the specific typography-heavy styles requested for service indicators.
  if (variant === 'service') {
    return (
      <span className={cn("inline-flex items-center", styleClass)}>
        {label}
      </span>
    );
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "whitespace-nowrap transition-colors",
        styleClass
      )}
    >
      {label}
    </Badge>
  );
}
