
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SafeIcon from "@/components/common/SafeIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const handleNavigation = () => {
    window.location.href = href;
  };

  return (
    <Card 
      className="surface-base interactive-lift flex flex-col h-full group"
      onClick={handleNavigation}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleNavigation();
        }
      }}
    >
      <CardHeader className="card-padding flex-1">
        <div className="mb-6 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <SafeIcon name={icon} size={32} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-3">
          <CardTitle className="text-section-title group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-body line-clamp-3">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <div className="px-6 pb-8 mt-auto">
        <div className="flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform inline-flex gap-2">
          <span>Learn More</span>
          <SafeIcon name="ArrowRight" size={16} />
        </div>
      </div>
    </Card>
  );
}
