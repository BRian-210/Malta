
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import SafeIcon from "@/components/common/SafeIcon";

interface CommonHeaderProps {
  currentPath: string;
  variant?: 'transparent' | 'solid';
}

const services = [
  { title: "Structural Design", href: "./structural-design-service.html", icon: "HardHat", description: "Engineering excellence for Maltese builds." },
  { title: "Architectural Planning", href: "./architectural-design-service.html", icon: "PencilRuler", description: "Creative vision and Planning Authority expertise." },
  { title: "Interior Design", href: "./interior-design-service.html", icon: "Layout", description: "Transforming spaces with local aesthetic." },
  { title: "Consultation", href: "./consultation-services.html", icon: "ClipboardCheck", description: "Professional advisory & site inspections." },
];

const mainLinks = [
  { title: "Home", href: "./home-page.html" },
  { title: "Portfolio", href: "./portfolio-listing.html" },
  { title: "About", href: "./about-us.html" },
  { title: "Our Team", href: "./our-team.html" },
  { title: "Contact", href: "./contact-us.html" },
];

export default function CommonHeader({ currentPath, variant = 'solid' }: CommonHeaderProps) {
  const isTransparent = variant === 'transparent';
  
  const isActive = (href: string) => {
    const normalizedHref = href.replace(/^\.\//, '').replace(/\.html$/, '');
    const normalizedPath = currentPath.replace(/^\//, '').replace(/\.html$/, '');
    if (normalizedHref === 'home-page' && (normalizedPath === '' || normalizedPath === 'index')) return true;
    return normalizedHref === normalizedPath;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isTransparent ? "bg-transparent backdrop-blur-sm border-b border-white/10" : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border shadow-sm"
    )}>
      <div className="page-container flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="./home-page.html" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
            <SafeIcon name="Building2" size={24} />
          </div>
          <div className="flex flex-col">
            <span className={cn("text-xl font-bold tracking-tight leading-none", isTransparent ? "text-black" : "text-foreground")}>
              Malta<span className={isTransparent ? "text-black/80" : "text-primary"}> Intel Construction Company</span>
            </span>
            <span className={cn("text-[10px] items-center tracking-[0.2em] font-medium uppercase", isTransparent ? "text-black/60" : "text-muted-foreground")}>
              Designing Strength,Delivering Excellence
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <a 
                  href="./home-page.html" 
                  className={cn("nav-link text-sm font-medium px-2 py-1", isActive("./home-page.html") && "nav-link-active", isTransparent && !isActive("./home-page.html") && "text-black/90 hover:text-black")}
                >
                  Home
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm font-medium",
                  isTransparent ? "text-black/90" : "text-foreground/80"
                )}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <SafeIcon name={service.icon} size={16} className="text-primary" />
                              <div className="text-sm font-semibold leading-none">{service.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {mainLinks.slice(1).map((link) => (
                <NavigationMenuItem key={link.title}>
                  <a 
                    href={link.href}
                    className={cn(
                      "nav-link text-sm font-medium px-2 py-1", 
                      isActive(link.href) && "nav-link-active",
                      isTransparent && !isActive(link.href) && "text-black/90 hover:text-black"
                    )}
                  >
                    {link.title}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button 
            onClick={() => window.location.href = './consultation-request-page.html'}
            className={cn(
              "btn-cta",
              isTransparent && "bg-white text-primary hover:bg-white/90 border-none"
            )}
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(isTransparent ? "text-black" : "text-foreground")}>
                <SafeIcon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px]">
              <SheetHeader className="text-left py-4">
                <SheetTitle className="text-primary font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {mainLinks.map((link) => (
                  <a 
                    key={link.title}
                    href={link.href}
                    className={cn(
                      "text-lg font-semibold px-4 py-2 rounded-md hover:bg-accent",
                      isActive(link.href) ? "text-primary bg-primary/10" : "text-foreground"
                    )}
                  >
                    {link.title}
                  </a>
                ))}
                <div className="border-t border-border mt-4 pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-4 mb-2">Our Services</p>
                  {services.map((service) => (
                    <a 
                      key={service.title}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent text-foreground"
                    >
                      <SafeIcon name={service.icon} size={18} className="text-primary" />
                      <span className="font-medium">{service.title}</span>
                    </a>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <Button 
                    className="w-full btn-cta h-12"
                    onClick={() => window.location.href = './consultation-request-page.html'}
                  >
                    Start Your Project
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
