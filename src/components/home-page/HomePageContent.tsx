
import HeroSection from '@/components/home-page/HeroSection';
import ServicesPreview from '@/components/home-page/ServicesPreview';
import PortfolioPreview from '@/components/home-page/PortfolioPreview';
import WhyChooseUs from '@/components/home-page/WyChooseUs';
import TeamPreview from '@/components/home-page/TeamPreview';
import BlogPreview from '@/components/home-page/BlogPreview';
import CTASection from '@/components/home-page/CTASection';
import * as ServiceService from '@/data/ServiceService';
import * as ProjectService from '@/data/projectService';
import * as ArticleService from '@/data/ArticleService';
import * as TeamMemberService from '@/data/TeamMemberService';

export default function HomePageContent() {
  const [services] = useState(() => ServiceService.getAll());
  const [featuredProjects, setFeaturedProjects] = useState(() => ProjectService.query({ filter: { featured: true } }));
  const [featuredArticles] = useState(() => ArticleService.query({ filter: { featured: true } }));
  const [featuredTeamMembers, setFeaturedTeamMembers] = useState(() => TeamMemberService.query({ filter: { featured: true } }));

  useEffect(() => {
    const syncContent = async () => {
      const [projects, teamMembers] = await Promise.all([
        ProjectService.fetchAllShared(),
        TeamMemberService.fetchAllShared(),
      ]);

      setFeaturedProjects(projects.filter((item) => item.featured).sort((a, b) => a.sortOrder - b.sortOrder));
      setFeaturedTeamMembers(teamMembers.filter((item) => item.featured).sort((a, b) => a.sortOrder - b.sortOrder));
    };

    void syncContent();
    const unsubscribeProjects = ProjectService.subscribeToSharedProjects(() => void syncContent());
    const unsubscribeTeam = TeamMemberService.subscribeToSharedTeamMembers(() => void syncContent());

    return () => {
      unsubscribeProjects();
      unsubscribeTeam();
    };
  }, []);

  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      
      <section id="services" className="page-body">
        <ServicesPreview services={services} />
      </section>

      <section id="projects" className="page-body bg-secondary/30">
        <PortfolioPreview projects={featuredProjects} />
      </section>

      <section className="page-body">
        <WhyChooseUs />
      </section>

      <section id="team" className="page-body bg-muted/20">
        <TeamPreview teamMembers={featuredTeamMembers} />
      </section>

      <section id="articles" className="page-body">
        <BlogPreview articles={featuredArticles} />
      </section>

      <CTASection />
    </main>
  );
}
