
import { useEffect, useMemo, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeamMemberCard from '@/components/common/TeamMemberCard';
import { TeamMemberService } from '@/data/TeamMemberService';

export default function TeamGrid() {
  const [allMembers, setAllMembers] = useState(() => TeamMemberService.getAll());
  const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');

  useEffect(() => {
    const syncMembers = async () => {
      const members = await TeamMemberService.fetchAllShared();
      setAllMembers(members);
    };

    void syncMembers();
    const unsubscribe = TeamMemberService.subscribeToSharedTeamMembers(() => void syncMembers());

    return () => {
      unsubscribe();
    };
  }, []);

  const displayedMembers = useMemo(() => {
    if (activeTab === 'featured') {
      return allMembers
        .filter((member) => member.featured)
        .sort((a, b) => a.sortOrder - b.sortOrder);
    }

    return [...allMembers].sort((a, b) => a.sortOrder - b.sortOrder);
  }, [allMembers, activeTab]);

  return (
    <div className="space-y-8">
      <Tabs 
        value={activeTab} 
        onValueChange={(val) => setActiveTab(val as 'featured' | 'all')}
        className="w-full"
      >
        <TabsList className="grid w-full max-w-xs grid-cols-2 mb-8">
          <TabsTrigger value="featured" className="text-sm font-medium">
            Featured Team
          </TabsTrigger>
          <TabsTrigger value="all" className="text-sm font-medium">
            All Members
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedMembers.map((member) => (
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
        </TabsContent>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedMembers.map((member) => (
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
        </TabsContent>
      </Tabs>

      <div className="mt-16 pt-12 border-t border-border">
        <div className="max-w-2xl">
          <h3 className="text-section-title mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-body text-foreground/80 mb-6">
            We're always looking for talented architects, engineers, and designers who share our passion for Maltese heritage and modern innovation. If you're interested in joining our team, we'd love to hear from you.
          </p>
          <button
            onClick={() => window.location.href = './contact-us.html'}
            className="btn-cta inline-flex items-center gap-2 group"
          >
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
