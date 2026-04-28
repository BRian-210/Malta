
import ServiceCard from '@/components/common/ServiceCard';
import type { ServiceData } from '@/data/ServiceData';

interface ServicesPreviewProps {
  services: ServiceData[];
}

export default function ServicesPreview({ services = [] }: ServicesPreviewProps) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-section-title">Our Core Expertise</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          From structural integrity to interior elegance, we guide property owners through every stage of design and construction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.summary}
            icon={service.iconName}
            href={service.route}
          />
        ))}
      </div>
    </div>
  );
}
