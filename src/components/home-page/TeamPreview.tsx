
import SafeIcon from '@/components/common/SafeIcon';
import { Button } from '@/components/ui/button';

export default function TeamPreview() {

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-section-title">From the CEO&apos;s Desk</h2>
          <p className="text-body text-muted-foreground max-w-2xl">
            Replace the team showcase with a leadership story that introduces your company vision, values, and direction.
          </p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              CEO Article
            </p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
             X
            </h3>
          </div>

          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <p>
             X
            </p>
            <p>
             X
            </p>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <p className="text-sm font-medium text-foreground">PETER KINYANJUI</p>
            <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
          </div>
        </article>

        <div className="rounded-3xl border border-dashed border-border bg-background/70 p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[420px]">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <SafeIcon name="ImagePlus" size={30} className="text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">CEO Photo Placeholder</h3>
          <p className="text-sm leading-7 text-muted-foreground max-w-xs">
            Add the CEO&apos;s portrait here. You can replace this block with an `img` tag later or set a background image while keeping the same layout.
          </p>
        </div>
      </div>
    </div>
  );
}
