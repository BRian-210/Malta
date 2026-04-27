
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function HeroSection() {
  const handleCTAClick = () => {
    window.location.href = './consultation-request-page.html';
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/fc51311f-3a51-4d58-aa06-0811a0857ea0.png"
          alt="Malta Build Studio - Modern Malta Architecture"
          className="w-full h-full object-cover"
        />
        {/* Semantic overlay from global.css */}
        <div className="absolute inset-0 hero-overlay opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 page-container flex flex-col items-center text-center gap-8 max-w-4xl">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight tracking-tight">
            Build Your Vision in Malta
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
            Structural engineering, architectural design, interior spaces, and expert consultation — all under one trusted Maltese roof.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center flex-wrap">
          <Button
            size="lg"
            className="btn-cta h-14 px-8 text-lg group flex items-center gap-2"
            onClick={handleCTAClick}
          >
            Start Your Project
            <SafeIcon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 interactive"
            onClick={() => window.location.href = './portfolio-listing.html'}
          >
            View Our Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <SafeIcon name="ChevronDown" size={32} color="white" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
