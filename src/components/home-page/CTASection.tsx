
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';

export default function CTASection() {
  const handleCTAClick = () => {
    window.location.href = './consultation-request-page.html';
  };

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/a091bbb6-e542-4c9d-af3a-06ac93cab9e6.png"
          alt="Start Your Project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 page-container flex flex-col items-center text-center gap-8 max-w-3xl">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Ready to Build Something Remarkable?
          </h2>

          <p className="text-xl text-primary-foreground/90 font-light max-w-2xl mx-auto">
            Let's discuss your project. Our consultants are ready to guide you through every step.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap pt-4">
          <Button
            size="lg"
            className="btn-cta h-14 px-8 text-lg group flex items-center gap-2"
            onClick={handleCTAClick}
          >
            Schedule Your Consultation
            <SafeIcon name="Calendar" size={20} />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 interactive"
            onClick={() => window.location.href = './contact-us.html'}
          >
            Get in Touch
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/70 pt-4">
          Based in Mwea, Ngurubani • Serving any client
        </p>
      </div>
    </section>
  );
}
