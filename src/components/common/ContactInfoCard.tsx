
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ContactInfoCardProps {
  /** PascalCase icon name for Lucide icons used via SafeIcon */
  icon: string;
  /** Label for the contact information (e.g., "Phone", "Email", "Our Office") */
  title: string;
  /** The actual contact details to display */
  details: string;
  /** Optional link for making the details interactive (tel:, mailto:, or maps URL) */
  href?: string;
}
export default function ContactInfoCard({ 
  icon, 
  title, 
  details, 
  href 
}: ContactInfoCardProps) {
  const ContentWrapper = href ? 'a' : 'div';

  return (
    <Card className={cn(
      "group surface-base card-padding flex flex-col items-center text-center transition-all duration-300",
      href && "hover:border-primary/50 cursor-pointer interactive-lift"
    )}>
      <div className={cn(
        "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
      )}>
        <SafeIcon 
          name={icon} 
          size={32} 
          strokeWidth={1.5} 
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-label text-primary">
          {title}
        </h3>
        
        <ContentWrapper 
          href={href}
          className={cn(
            "block text-item-title text-foreground transition-colors",
            href && "hover:text-accent"
          )}
        >
          {details}
        </ContentWrapper>
      </div>

      {href && (
        <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
          {href.startsWith('mailto:') ? 'Send Email' : 
           href.startsWith('tel:') ? 'Call Now' : 
           'Find on Map'}
        </span>
      )}
    </Card>
  );
}
