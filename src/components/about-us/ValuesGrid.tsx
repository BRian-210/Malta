
import { Card, CardContent } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';

interface ValuesGridProps {
  values: string[];
}

const valueIcons: Record<string, string> = {
  'Technical accuracy': 'Zap',
  'Local knowledge': 'MapPin',
  'Transparent communication': 'MessageSquare',
  'Refined design': 'Palette',
};

const valueDescriptions: Record<string, string> = {
  'Technical accuracy': 'We apply rigorous engineering standards and building codes to ensure every structure is safe, durable, and compliant with Maltese regulations.',
  'Local knowledge': 'Deep understanding of Malta\'s unique climate, heritage considerations, planning authority requirements, and construction landscape.',
  'Transparent communication': 'Clear, honest dialogue with clients at every stage. We explain technical decisions in accessible terms and keep you informed throughout your project.',
  'Refined design': 'Balancing aesthetic beauty with practical functionality. Our designs respect Maltese architectural traditions while embracing contemporary innovation.',
};

export default function ValuesGrid({ values }: ValuesGridProps) {
  return (
    <section className="page-body bg-muted/20 border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-section-title text-foreground">Core Values</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            These principles guide every decision we make and every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(values || []).map((value, idx) => {
            const iconName = valueIcons[value] || 'CheckCircle';
            const description = valueDescriptions[value] || '';

            return (
              <Card key={idx} className="surface-base interactive-lift group">
                <CardContent className="card-padding space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-1">
                      <SafeIcon name={iconName} size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-item-title text-foreground group-hover:text-primary transition-colors">
                        {value}
                      </h3>
                      <p className="text-caption text-foreground/70 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
