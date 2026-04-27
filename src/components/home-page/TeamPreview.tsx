
import { Button } from '@/components/ui/button';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import SafeIcon from '@/components/common/SafeIcon';
import type { TeamMemberData } from '@/data/TeamMemberData';

interface TeamPreviewProps {
  teamMembers: TeamMemberData[];
}

export default function TeamPreview({ teamMembers = [] }: TeamPreviewProps) {
  const displayMembers = teamMembers.slice(0, 4);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-section-title">Meet Our Team</h2>
          <p className="text-body text-muted-foreground max-w-2xl">
            Experienced architects, engineers, and designers dedicated to bringing your vision to life.
          </p>
        </div>
        <Button
          variant="outline"
          className="interactive group flex items-center gap-2 w-fit"
          onClick={() => window.location.href = './our-team.html'}
        >
          View Full Team
          <SafeIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            photoUrl={member.avatarImageUrl}
            credentials={member.license}
          />
        ))}
      </div>
    </div>
  );
}
