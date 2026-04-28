
import SafeIcon from '@/components/common/SafeIcon';
import { Button } from '@/components/ui/button';

export default function TeamPreview() {

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-section-title">From the CEO&apos;s Desk</h2>
        </div>
        <Button
          variant="outline"
          className="interactive group flex items-center gap-2 w-fit"
          onClick={() => window.location.href = './about-us.html'}
        >
          Read More About Us
          <SafeIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] gap-8 lg:gap-12 items-stretch">
        <article className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <SafeIcon name="BadgeCheck" size={14} />
            Leadership Spotlight
          </div>

          <div className="space-y-4">
            <p className="text-sm font-bold text-muted-foreground">
              CEO Article
            </p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
             Building Legacies, Not Just Structures
            </h3>
          </div>

          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <p>
             When I founded Malta Intel Construction Company, my vision was clear: to create a construction firm that stands out not only for technical excellence but also for integrity, innovation, and a genuine commitment to transforming lives through quality infrastructure.
             Today, as we continue to grow from our headquarters in Mwea Town at Kush Plaza, 1st Floor, Malta Intel Construction Company has become a trusted name in architecture, structural design, and full-spectrum construction services across Kenya. We handle projects with the highest standards of professionalism — from elegant residential homes and modern commercial buildings to institutional and infrastructural developments.
            </p>
            <h4 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our Vision and Values
            </h4>
            <p>
            To be a leading construction and architectural firm recognized for innovative designs,quality workmanship and a sustainable development.
            <br></br>
             This vision is anchored on three core values that guide every decision we make:
             <br></br>
            <p className="text-sm font-medium text-foreground">Integrity</p>
            We believe in transparency, honesty, and delivering exactly what we promise.
             <br></br>
            <p className="text-sm font-medium text-foreground">Excellence</p>
            From architectural creativity to structural precision and project execution, we refuse to compromise on quality.
             <br></br>
             <p className="text-sm font-medium text-foreground">Innovation</p>
             We embrace modern technologies and smart construction methods to deliver better, faster, and more sustainable outcomes for our clients.
            <br></br>
             At Malta Intel, we don’t just construct buildings we build legacies. We understand that every project represents someone’s dream, investment, or community aspiration. That responsibility drives us to approach every assignment with passion, attention to detail, and a deep sense of accountability.
             As we look to the future, our direction is focused on strategic growth. We are committed to expanding our reach beyond Kirinyaga County while strengthening our capabilities in sustainable construction, digital project management, and advanced structural engineering. We aim to set new benchmarks in the Kenyan construction industry by combining experienced local expertise with forward-thinking solutions.
             To our clients, partners, and the communities we serve: thank you for trusting us with your projects. We remain fully dedicated to earning that trust every single day through superior service, professional delivery, and lasting results.
             Together, we will continue building a stronger, more developed Kenya — one quality project at a time.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <p className="text-sm font-medium text-foreground">PETER KINYANJUI</p>
            <p className="text-sm font-bold text-foreground">Chief Executive Officer</p>
          </div>
        </article>

        <div className="rounded-3xl border border-dashed border-border bg-background/70 p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[420px]">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <SafeIcon name="ImagePlus" size={30} className="text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">Photo Placeholder</h3>
          <p className="text-sm leading-7 text-muted-foreground max-w-xs">
            <a href='#'></a>
          </p>
        </div>
      </div>
    </div>
  );
}
