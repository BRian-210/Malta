
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  projectId: string;
  title: string;
  category: string;
  serviceType: string;
  thumbnailUrl: string;
  location: string;
}

export default function ProjectCard({
  projectId,
  title,
  category,
  serviceType,
  thumbnailUrl,
  location,
}: ProjectCardProps) {
  const handleNavigate = () => {
    window.location.href = `./project-detail.html?projectId=${projectId}`;
  };

  /**
   * Maps category names to semantic theme classes defined in global.css
   */
  const getCategoryBadgeClass = (categoryName: string) => {
    const name = categoryName.toLowerCase();
    if (name.includes('residential')) return 'badge-residential';
    if (name.includes('commercial')) return 'badge-commercial';
    if (name.includes('heritage')) return 'badge-heritage';
    return 'bg-muted text-muted-foreground border-muted-foreground/20';
  };

  /**
   * Maps service types to semantic typography classes defined in global.css
   */
  const getServiceTypeClass = (type: string) => {
    const name = type.toLowerCase();
    if (name.includes('structural')) return 'service-structural';
    if (name.includes('architectural')) return 'service-architectural';
    if (name.includes('interior')) return 'service-interior';
    return 'text-muted-foreground';
  };

  return (
    <Card 
      className="project-card group cursor-pointer border-none" 
      onClick={handleNavigate}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className={cn("border-none shadow-sm", getCategoryBadgeClass(category))}>
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="card-padding space-y-3">
        <div className="space-y-1">
          <h3 className="text-item-title group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-caption">
            <SafeIcon name="MapPin" size={14} className="shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-border flex items-center justify-between">
          <span className={cn("text-xs font-bold uppercase tracking-wider", getServiceTypeClass(serviceType))}>
            {serviceType}
          </span>
          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
            View Project
            <SafeIcon name="ArrowRight" size={14} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
