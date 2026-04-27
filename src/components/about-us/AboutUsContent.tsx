
import { useEffect, useState } from 'react';
import type { CompanyProfileData } from '@/data/CompanyProfileData';
import type { TeamMemberData } from '@/data/TeamMemberData';
import * as CompanyProfileService from '@/data/CompanyProfileService';
import * as TeamMemberService from '@/data/TeamMemberService';
import PageHero from '@/components/common/PageHero';
import CompanyStatsSection from '@/components/about-us/CompanyStatsSection';
import MissionVisionSection from '@/components/about-us/MissionVisionSection';
import ValuesGrid from '@/components/about-us/ValuesGrid';
import TeamPreviewSection from '@/components/about-us/TeamPreviewSection';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function AboutUsContent() {
  const [companyProfile] = useState<CompanyProfileData>(() => {
    const profiles = CompanyProfileService.getAll();
    return profiles[0] || {
      id: 'default',
      companyName: 'Malta Construction Agency',
      foundedYear: 2012,
      headline: 'Construction planning, structural safety, and elegant Maltese design.',
      mission: 'To guide Maltese property owners through every stage of design, compliance, and build coordination with clarity and care.',
      vision: 'To be the most trusted local partner for homes that are structurally sound, beautifully designed, and practical to live in.',
      description: 'We are a Malta agency focused on structural design, architectural design, interior design, and consultation services.',
      values: ['Technical accuracy', 'Local knowledge', 'Transparent communication', 'Refined design'],
      officeLocation: 'Mwea,Ngurubani Next to Kplc Offices',
      serviceArea: 'Malta',
      sortOrder: 1,
    };
  });

  const [featuredTeam, setFeaturedTeam] = useState<TeamMemberData[]>(() => {
    return TeamMemberService.query({ filter: { featured: true } });
  });

  useEffect(() => {
    const syncTeam = async () => {
      const allMembers = await TeamMemberService.fetchAllShared();
      setFeaturedTeam(allMembers.filter((member) => member.featured).sort((a, b) => a.sortOrder - b.sortOrder));
    };

    void syncTeam();
    const unsubscribe = TeamMemberService.subscribeToSharedTeamMembers(() => void syncTeam());

    return () => {
      unsubscribe();
    };
  }, []);

  const handleTeamNavigation = () => {
    window.location.href = './our-team.html';
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About Our Agency"
        subtitle="Shaping Malta's built environment with expertise, integrity, and local pride."
        backgroundImage="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/8e1e3e21-8f7e-44ed-8b57-3641d9715b3d.png"
        variant="compact"
      />

      {/* Company Overview */}
      <section className="page-body space-y-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <p className="text-body text-lg leading-relaxed text-foreground/90">
              {companyProfile.description}
            </p>
            <p className="text-body text-foreground/80">
              Founded in {companyProfile.foundedYear}, we've built a reputation for combining technical rigor with creative vision. Our team of licensed architects, structural engineers, and interior designers work collaboratively to deliver projects that honor Malta's heritage while embracing modern standards.
            </p>
          </div>

          <div className="h-px bg-border/50 w-24" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-label text-primary">Service Area</h3>
              <p className="text-item-title text-foreground">{companyProfile.serviceArea}</p>
              <p className="text-caption text-foreground/70">
                We serve residential and light commercial clients across the country, with deep expertise in local planning requirements and heritage considerations.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-label text-primary">Office Location</h3>
              <p className="text-item-title text-foreground">{companyProfile.officeLocation}</p>
              <p className="text-caption text-foreground/70">
                Centrally located to serve clients across the country. Visit us to discuss your project in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CompanyStatsSection foundedYear={companyProfile.foundedYear} />

      {/* Mission & Vision */}
      <MissionVisionSection
        mission={companyProfile.mission}
        vision={companyProfile.vision}
      />

      {/* Core Values */}
      <ValuesGrid values={companyProfile.values} />

      {/* Team Preview */}
      <TeamPreviewSection teamMembers={featuredTeam} />

      {/* CTA Section */}
      <section className="page-body bg-secondary/30 border-t border-border">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-section-title text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-body text-foreground/80 max-w-2xl mx-auto">
              Whether you're planning a residential renovation, commercial build, or seeking expert consultation, our team is ready to guide you through every step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              className="btn-cta group flex items-center justify-center gap-2"
              onClick={() => window.location.href = './consultation-request-page.html'}
            >
              Book a Consultation
              <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="interactive flex items-center justify-center gap-2"
              onClick={handleTeamNavigation}
            >
              Meet Our Team
              <SafeIcon name="Users" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
