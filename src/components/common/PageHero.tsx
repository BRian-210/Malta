
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'full' | 'compact';
}

/**
 * Flexible hero section component used across multiple pages.
 * Supports full-height hero with background image overlay (home page) 
 * or compact title banner (service pages, about).
 */
export default function PageHero({
  title,
  subtitle,
  backgroundImage = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/0cede8a7-a36a-4906-a4d1-5f1e2e994710.png",
  ctaText,
  ctaHref,
  variant = 'compact',
}: PageHeroProps) {
  const isFull = variant === 'full';

  const handleCtaClick = () => {
    if (ctaHref) {
      window.location.href = ctaHref;
    }
  };

  return (
    <section 
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center text-center",
        isFull ? "min-h-[80vh] py-24" : "min-h-[40vh] py-16"
      )}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Semantic overlay from global.css */}
        <div className="absolute inset-0 hero-overlay opacity-80" />
      </div>

      {/* Content Container */}
      <div className={cn(
        "relative z-10 page-container flex flex-col items-center gap-6 text-primary-foreground",
        isFull ? "max-w-4xl" : "max-w-3xl"
      )}>
        <h1 className={cn(
          "text-page-title transition-all duration-700 delay-100",
          isFull ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
        )}>
          {title}
        </h1>

        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl font-medium opacity-90 max-w-2xl transition-all duration-700 delay-200",
            isFull ? "text-xl md:text-2xl" : "text-base md:text-lg"
          )}>
            {subtitle}
          </p>
        )}

        {ctaText && ctaHref && (
          <div className="mt-4 transition-all duration-700 delay-300">
            <Button 
              size={isFull ? "lg" : "default"}
              className="btn-cta group flex items-center gap-2"
              onClick={handleCtaClick}
            >
              {ctaText}
              <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>

      {/* Optional Decorative Element for Full variant */}
      {isFull && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <SafeIcon name="ChevronDown" size={32} color="white" />
        </div>
      )}
    </section>
  );
}
