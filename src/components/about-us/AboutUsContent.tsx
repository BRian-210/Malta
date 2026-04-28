
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
      companyName: 'Malta Intel Construction Company',
      foundedYear: 2012,
      headline: 'Construction planning, structural safety, and elegant designs.',
      vision: 'To be a leading construction and architectural firm recognized for innovative designs,quality workmanship and sustainable development.',
      mission: 'To provide high-quality,cost-effective,timely construction and architectural solutions with a commitment to client satisfaction,safety and innovation.',
      description: 'We are a Malta Intel Construction Company focused on structural design, architectural design, interior design, and consultation services.',
      values: ['Technical accuracy', 'Local knowledge', 'Transparent communication', 'Refined design'],
      officeLocation: 'Kush plaza building,1st Floor-MweaTown',
      serviceArea: 'Country Wide',
      sortOrder: 1,
    };
  });

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About Our Company"
        subtitle="Shaping the country built environment with expertise, integrity, and local pride."
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
          </div>
        </div>
      </section>
    </main>
  );
}
