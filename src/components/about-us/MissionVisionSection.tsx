
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';

interface MissionVisionSectionProps {
  mission: string;
  vision: string;
}

export default function MissionVisionSection({ mission, vision }: MissionVisionSectionProps) {
  return (
    <section className="page-body">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-section-title text-foreground">Our Purpose</h2>
          <p className="text-body text-foreground/80 max-w-2xl mx-auto">
            Guided by clear principles, we approach every project with intention and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="surface-raised interactive-lift flex flex-col">
            <CardHeader className="card-padding border-b border-border pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <SafeIcon name="Target" size={24} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-item-title">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="card-padding flex-1 flex flex-col justify-center">
              <p className="text-body leading-relaxed text-foreground/90">
                {mission}
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="surface-raised interactive-lift flex flex-col">
            <CardHeader className="card-padding border-b border-border pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <SafeIcon name="Lightbulb" size={24} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-item-title">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="card-padding flex-1 flex flex-col justify-center">
              <p className="text-body leading-relaxed text-foreground/90">
                {vision}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
