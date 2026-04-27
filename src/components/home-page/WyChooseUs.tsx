
import SafeIcon from '@/components/common/SafeIcon';

interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

const reasons: WhyChooseUsItem[] = [
  {
    icon: 'Award',
    title: 'Local Expertise',
    description: 'Deep knowledge of Maltese building regulations, planning authority requirements, and construction practices.'
  },
  {
    icon: 'Users',
    title: 'Integrated Team',
    description: 'Structural engineers, architects, and interior designers working seamlessly under one roof for cohesive projects.'
  },
  {
    icon: 'Zap',
    title: 'Efficient Process',
    description: 'Streamlined workflows from initial consultation through approvals and site coordination.'
  },
  {
    icon: 'Heart',
    title: 'Client-Focused',
    description: 'Transparent communication and realistic budgeting to keep your project moving forward with confidence.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-section-title">Why Choose Malta Build Studio</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          We combine technical excellence with local knowledge to deliver homes and spaces that endure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, idx) => (
          <div 
            key={idx}
            className="surface-base card-padding space-y-4 interactive-lift group"
          >
            <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <SafeIcon name={reason.icon} size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-2">
              <h3 className="text-item-title group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-caption text-foreground/80">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
