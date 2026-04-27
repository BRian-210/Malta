
import React from 'react';
import { 
  Breadcrumb as BreadcrumbRoot, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
} from '@/components/ui/breadcrumb';
import SafeIcon from '@/components/common/SafeIcon';

/**
 * Interface for breadcrumb navigation items
 */
interface BreadcrumbItemData {
  /** Display text for the breadcrumb step */
  label: string;
  /** Optional URL. If provided, the item is clickable. If omitted, it renders as the current page. */
  href?: string;
}

interface BreadcrumbProps {
  /** Array of breadcrumb items in order of hierarchy (Root -> Parent -> Current) */
  items: BreadcrumbItemData[];
}

/**
 * Breadcrumb component for hierarchical navigation within the application.
 * Specifically used for deep pages like Project Details or Blog Articles.
 */
export default function Breadcrumb({ items = [] }: BreadcrumbProps) {
  // Ensure we always have at least a Home link if items are empty for defensive rendering
  const breadcrumbItems = items.length > 0 ? items : [{ label: 'Home', href: './home-page.html' }];

  return (
    <BreadcrumbRoot className="mb-6">
      <BreadcrumbList className="flex flex-wrap items-center">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isFirst = index === 0;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-medium text-foreground truncate max-w-[120px] md:max-w-[200px]">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink 
                    href={item.href} 
                    className="flex items-center gap-1 nav-link text-sm whitespace-nowrap"
                  >
                    {isFirst && <SafeIcon name="Home" size={14} className="mb-0.5" />}
                    <span>{item.label}</span>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              
              {!isLast && (
                <BreadcrumbSeparator className="mx-2 text-muted-foreground/50">
                  <SafeIcon name="ChevronRight" size={12} />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}
