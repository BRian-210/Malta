
import { Card, CardContent } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';

interface RelatedProject {
  id: string;
  title: string;
  coverImageUrl: string;
  route: string;
}

interface RelatedProjectsSectionProps {
  projects: RelatedProject[];
}

export default function RelatedProjectsSection({ projects }: RelatedProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  const handleProjectClick = (route: string) => {
    window.location.href = route;
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-section-title text-foreground">Featured Projects</h2>
        <p className="text-caption text-foreground/70">
          See how we've applied these principles to real Maltese properties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="surface-base interactive-lift overflow-hidden group cursor-pointer"
            onClick={() => handleProjectClick(project.route)}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={project.coverImageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <SafeIcon name="ArrowRight" size={32} color="white" />
                </div>
              </div>
            </div>
            <CardContent className="card-padding">
              <h3 className="text-item-title text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
