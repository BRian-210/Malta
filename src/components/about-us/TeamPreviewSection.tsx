
import type { TeamMemberData } from '@/data/TeamMemberData';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

interface TeamPreviewSectionProps {
  teamMembers: TeamMemberData[];
}

export default function TeamPreviewSection({ teamMembers }: TeamPreviewSectionProps) {
  const handleViewFullTeam = () => {
    window.location.href = './our-team.html';
  };

  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="page-body">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-section-title text-foreground">Meet Our Team</h2>
            <p className="text-body text-foreground/80 max-w-2xl">
              Experienced professionals dedicated to delivering excellence in every project.
            </p>
          </div>
          <Button
            variant="outline"
            className="interactive w-full md:w-auto flex items-center justify-center gap-2"
            onClick={handleViewFullTeam}
          >
            View Full Team
            <SafeIcon name="ArrowRight" size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={handleViewFullTeam}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleViewFullTeam();
                }
              }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                photoUrl={member.avatarImageUrl}
                credentials={member.license}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-caption text-foreground/70 mb-6">
            Interested in learning more about our team's expertise and experience?
          </p>
          <Button
            className="btn-cta group flex items-center justify-center gap-2 mx-auto"
            onClick={handleViewFullTeam}
          >
            Explore Full Team Profiles
            <SafeIcon name="Users" size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
