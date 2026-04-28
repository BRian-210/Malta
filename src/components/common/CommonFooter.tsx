
import SafeIcon from "@/components/common/SafeIcon";
import { Separator } from "@/components/ui/separator";

export default function CommonFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-card border-t border-border">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground">
                <SafeIcon name="Building2" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Malta<span className="text-primary">Intel Construction Company</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Malta Intel Construction Company is a premier engineering and architectural company specialized in preserving construction heritage while building its modern future.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <SafeIcon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <SafeIcon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <SafeIcon name="Linkedin" size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "Our Works", href: "./portfolio-listing.html" },
                { label: "About Our Firm", href: "./about-us.html" },
                { label: "Meet the Team", href: "./our-team.html" },
                { label: "Latest News", href: "./blog-listing.html" },
                { label: "Contact Us", href: "./contact-us.html" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Expertise</h4>
            <ul className="space-y-4">
              {[
                { label: "Structural Engineering", href: "./structural-design-service.html" },
                { label: "Architectural Planning", href: "./architectural-design-service.html" },
                { label: "Interior & Finishing", href: "./interior-design-service.html" },
                { label: "Site Consultation", href: "./consultation-services.html" },
                { label: "Legal Compliance", href: "./consultation-services.html" }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-xs">Reach Out</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <SafeIcon name="MapPin" size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  32 Republic Street,<br />Valletta VLT 1111, Mwea
                </span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon name="Phone" size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+254 797102970</span>
              </li>
              <li className="flex items-center gap-3">
                <SafeIcon name="Mail" size={18} className="text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">kinyanmuigai@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Malta Intel Construction Company. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); }} className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); }} className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a href="./admin-panel.html" className="text-xs text-muted-foreground hover:text-foreground">Admin Panel</a>
            <p className="text-xs text-muted-foreground/60 select-none">License</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
