
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/common/ProjectCard';
import SafeIcon from '@/components/common/SafeIcon';
import type { ProjectData } from '@/data/projectData';

interface PortfolioPreviewProps {
  projects: ProjectData[];
}

export default function PortfolioPreview({ projects = [] }: PortfolioPreviewProps) {
  const displayProjects = projects.slice(0, 6);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-section-title">Featured Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl">
            Explore our completed works across the country — from heritage restorations to modern family homes.
          </p>
        </div>
        <Button
          variant="outline"
          className="interactive group flex items-center gap-2 w-fit"
          onClick={() => window.location.href = './portfolio-listing.html'}
        >
          View All Projects
          <SafeIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project) => (
          <ProjectCard
            key={project.id}
            projectId={project.id}
            title={project.title}
            category={project.category}
            serviceType={project.serviceType}
            thumbnailUrl={project.coverImageUrl}
            location={project.location}
          />
        ))}
      </div>
    </div>
  );
}
