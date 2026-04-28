import { c as createComponent, r as renderComponent, a as renderTemplate, f as createAstro, m as maybeRenderHead, g as renderSlot } from "./astro/server.ZPjyFlDE.js";
import { $ as $$BaseLayout } from "./BaseLayout.C4j3yJWB.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as LucideIcons from "lucide-react";
import { ChevronDown, X, Circle } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props, "data-source-file": "src/components/ui/button.tsx", "data-source-line-start": "47", "data-source-line-end": "51" });
});
Button.displayName = "Button";
const NavigationMenu = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Root, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx(NavigationMenuViewport, { "data-source-file": "src/components/ui/navigation-menu.tsx", "data-source-line-start": "21", "data-source-line-end": "21" })
] }));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.List, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const navigationMenuTriggerStyle = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent");
const NavigationMenuTrigger = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Trigger, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  " ",
  /* @__PURE__ */ jsx(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true", "data-source-file": "src/components/ui/navigation-menu.tsx", "data-source-line-start": "57", "data-source-line-end": "60" })
] }));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.Content, { ref, className: cn("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props }));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
const NavigationMenuViewport = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { className: cn("absolute left-0 top-full flex justify-center"), "data-source-file": "src/components/ui/navigation-menu.tsx", "data-source-line-start": "86", "data-source-line-end": "95", children: /* @__PURE__ */ jsx(NavigationMenuPrimitive.Viewport, { className: cn("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref, ...props }) }));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(NavigationMenuPrimitive.Indicator, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md", "data-source-file": "src/components/ui/navigation-menu.tsx", "data-source-line-start": "112", "data-source-line-end": "112" }) }));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
const SheetContent = React.forwardRef(({
  side = "right",
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(SheetPortal, { "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "60", "data-source-line-end": "73", children: [
  /* @__PURE__ */ jsx(SheetOverlay, { "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({
    side
  }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4", "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "68", "data-source-line-end": "68" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props, "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "81", "data-source-line-end": "87" });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function SafeIcon({
  name,
  ...props
}) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    return /* @__PURE__ */ jsx(Circle, { ...props, "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "13", "data-source-line-end": "13" });
  }
  return /* @__PURE__ */ jsx(IconComponent, { ...props, "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "16", "data-source-line-end": "16" });
}
const services = [{
  title: "Structural Design",
  href: "./structural-design-service.html",
  icon: "HardHat",
  description: "Engineering excellence for Maltese builds."
}, {
  title: "Architectural Planning",
  href: "./architectural-design-service.html",
  icon: "PencilRuler",
  description: "Creative vision and Planning Authority expertise."
}, {
  title: "Interior Design",
  href: "./interior-design-service.html",
  icon: "Layout",
  description: "Transforming spaces with local aesthetic."
}, {
  title: "Consultation",
  href: "./consultation-services.html",
  icon: "ClipboardCheck",
  description: "Professional advisory & site inspections."
}];
const mainLinks = [{
  title: "Home",
  href: "./home-page.html"
}, {
  title: "Portfolio",
  href: "./portfolio-listing.html"
}, {
  title: "About",
  href: "./about-us.html"
}, {
  title: "Our Team",
  href: "./our-team.html"
}, {
  title: "Contact",
  href: "./contact-us.html"
}];
function CommonHeader({
  currentPath,
  variant = "solid"
}) {
  const isTransparent = variant === "transparent";
  const isActive = (href) => {
    const normalizedHref = href.replace(/^\.\//, "").replace(/\.html$/, "");
    const normalizedPath = currentPath.replace(/^\//, "").replace(/\.html$/, "");
    if (normalizedHref === "home-page" && (normalizedPath === "" || normalizedPath === "index")) return true;
    return normalizedHref === normalizedPath;
  };
  return /* @__PURE__ */ jsx("header", { className: cn("sticky top-0 z-50 w-full transition-all duration-300", isTransparent ? "bg-transparent backdrop-blur-sm border-b border-white/10" : "bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border shadow-sm"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "45", "data-source-line-end": "188", children: /* @__PURE__ */ jsxs("div", { className: "page-container flex h-20 items-center justify-between", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "49", "data-source-line-end": "187", children: [
    /* @__PURE__ */ jsxs("a", { href: "./home-page.html", className: "flex items-center gap-2 group", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "51", "data-source-line-end": "63", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "52", "data-source-line-end": "54", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Building2", size: 24, "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "53", "data-source-line-end": "53" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "55", "data-source-line-end": "62", children: [
        /* @__PURE__ */ jsxs("span", { className: cn("text-xl font-bold tracking-tight leading-none", isTransparent ? "text-black" : "text-foreground"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "56", "data-source-line-end": "58", children: [
          "Malta",
          /* @__PURE__ */ jsx("span", { className: isTransparent ? "text-black/80" : "text-primary", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Intel Construction Company" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: cn("text-[10px] items-center tracking-[0.2em] font-medium uppercase", isTransparent ? "text-black/60" : "text-muted-foreground"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "59", "data-source-line-end": "61", children: "Designing Strength,Delivering Excellence" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-8", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "66", "data-source-line-end": "135", children: [
      /* @__PURE__ */ jsx(NavigationMenu, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "67", "data-source-line-end": "124", children: /* @__PURE__ */ jsxs(NavigationMenuList, { className: "gap-2", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "68", "data-source-line-end": "123", children: [
        /* @__PURE__ */ jsx(NavigationMenuItem, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "69", "data-source-line-end": "76", children: /* @__PURE__ */ jsx("a", { href: "./home-page.html", className: cn("nav-link text-sm font-medium px-2 py-1", isActive("./home-page.html") && "nav-link-active", isTransparent && !isActive("./home-page.html") && "text-black/90 hover:text-black"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "70", "data-source-line-end": "75", children: "Home" }) }),
        /* @__PURE__ */ jsxs(NavigationMenuItem, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "78", "data-source-line-end": "107", children: [
          /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: cn("bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm font-medium", isTransparent ? "text-black/90" : "text-foreground/80"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "79", "data-source-line-end": "84", children: "Services" }),
          /* @__PURE__ */ jsx(NavigationMenuContent, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "85", "data-source-line-end": "106", children: /* @__PURE__ */ jsx("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "86", "data-source-line-end": "105", children: services.map((service) => /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "88", "data-source-line-end": "103", children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "89", "data-source-line-end": "102", children: /* @__PURE__ */ jsxs("a", { href: service.href, className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "90", "data-source-line-end": "101", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "94", "data-source-line-end": "97", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: service.icon, size: 16, className: "text-primary", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "95", "data-source-line-end": "95" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold leading-none", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: service.title })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "98", "data-source-line-end": "100", children: service.description })
          ] }) }) }, service.title)) }) })
        ] }),
        mainLinks.slice(1).map((link) => /* @__PURE__ */ jsx(NavigationMenuItem, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "110", "data-source-line-end": "121", children: /* @__PURE__ */ jsx("a", { href: link.href, className: cn("nav-link text-sm font-medium px-2 py-1", isActive(link.href) && "nav-link-active", isTransparent && !isActive(link.href) && "text-black/90 hover:text-black"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "111", "data-source-line-end": "120", children: link.title }) }, link.title))
      ] }) }),
      /* @__PURE__ */ jsx(Button, { onClick: () => window.location.href = "./consultation-request-page.html", className: cn("btn-cta", isTransparent && "bg-white text-primary hover:bg-white/90 border-none"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "126", "data-source-line-end": "134", children: "Book Consultation" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:hidden flex items-center gap-4", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "138", "data-source-line-end": "186", children: /* @__PURE__ */ jsxs(Sheet, { "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "139", "data-source-line-end": "185", children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "140", "data-source-line-end": "144", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: cn(isTransparent ? "text-black" : "text-foreground"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "141", "data-source-line-end": "143", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Menu", size: 24, "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "142", "data-source-line-end": "142" }) }) }),
      /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "flex flex-col w-[300px] sm:w-[400px]", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "145", "data-source-line-end": "184", children: [
        /* @__PURE__ */ jsx(SheetHeader, { className: "text-left py-4", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "146", "data-source-line-end": "148", children: /* @__PURE__ */ jsx(SheetTitle, { className: "text-primary font-bold", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "147", "data-source-line-end": "147", children: "Menu" }) }),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-4 mt-4 overflow-y-auto", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "149", "data-source-line-end": "183", children: [
          mainLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: cn("text-lg font-semibold px-4 py-2 rounded-md hover:bg-accent", isActive(link.href) ? "text-primary bg-primary/10" : "text-foreground"), "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "151", "data-source-line-end": "160", children: link.title }, link.title)),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border mt-4 pt-4", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "162", "data-source-line-end": "174", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground px-4 mb-2", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "163", "data-source-line-end": "163", children: "Our Services" }),
            services.map((service) => /* @__PURE__ */ jsxs("a", { href: service.href, className: "flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent text-foreground", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "165", "data-source-line-end": "172", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: service.icon, size: 18, className: "text-primary", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "170", "data-source-line-end": "170" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "171", "data-source-line-end": "171", children: service.title })
            ] }, service.title))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-8", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "175", "data-source-line-end": "182", children: /* @__PURE__ */ jsx(Button, { className: "w-full btn-cta h-12", onClick: () => window.location.href = "./consultation-request-page.html", "data-source-file": "src/components/common/CommonHeader.tsx", "data-source-line-start": "176", "data-source-line-end": "181", children: "Start Your Project" }) })
        ] })
      ] })
    ] }) })
  ] }) });
}
const Separator = React.forwardRef(({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ jsx(SeparatorPrimitive.Root, { ref, decorative, orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }));
Separator.displayName = SeparatorPrimitive.Root.displayName;
function CommonFooter() {
  const currentYear = 2026;
  return /* @__PURE__ */ jsx("footer", { className: "bg-card border-t border-border", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "9", "data-source-line-end": "114", children: /* @__PURE__ */ jsxs("div", { className: "page-container py-16", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "10", "data-source-line-end": "113", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "11", "data-source-line-end": "99", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "13", "data-source-line-end": "36", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "14", "data-source-line-end": "21", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "15", "data-source-line-end": "17", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Building2", size: 18, "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "16", "data-source-line-end": "16" }) }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold tracking-tight", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "18", "data-source-line-end": "20", children: [
            "Malta",
            /* @__PURE__ */ jsx("span", { className: "text-primary", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "19", "data-source-line-end": "19", children: "Intel Construction Company" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "22", "data-source-line-end": "24", children: "Malta Intel Construction Company is a premier engineering and architectural company specialized in preserving construction heritage while building its modern future." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "25", "data-source-line-end": "35", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "26", "data-source-line-end": "28", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Facebook", size: 18, "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "27", "data-source-line-end": "27" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "29", "data-source-line-end": "31", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Instagram", size: 18, "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "30", "data-source-line-end": "30" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "32", "data-source-line-end": "34", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Linkedin", size: 18, "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "33", "data-source-line-end": "33" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "39", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-6 text-foreground uppercase tracking-wider text-xs", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "40", "data-source-line-end": "40", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "41", "data-source-line-end": "56", children: [{
          label: "Our Works",
          href: "./portfolio-listing.html"
        }, {
          label: "About Our Firm",
          href: "./about-us.html"
        }, {
          label: "Meet the Team",
          href: "./our-team.html"
        }, {
          label: "Latest News",
          href: "./blog-listing.html"
        }, {
          label: "Contact Us",
          href: "./contact-us.html"
        }].map((link) => /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "49", "data-source-line-end": "54", children: /* @__PURE__ */ jsxs("a", { href: link.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "50", "data-source-line-end": "53", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "51", "data-source-line-end": "51" }),
          link.label
        ] }) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "60", "data-source-line-end": "77", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-6 text-foreground uppercase tracking-wider text-xs", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "61", "data-source-line-end": "61", children: "Expertise" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "62", "data-source-line-end": "76", children: [{
          label: "Structural Engineering",
          href: "./structural-design-service.html"
        }, {
          label: "Architectural Planning",
          href: "./architectural-design-service.html"
        }, {
          label: "Interior & Finishing",
          href: "./interior-design-service.html"
        }, {
          label: "Site Consultation",
          href: "./consultation-services.html"
        }, {
          label: "Legal Compliance",
          href: "./consultation-services.html"
        }].map((link) => /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "70", "data-source-line-end": "74", children: /* @__PURE__ */ jsx("a", { href: link.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "71", "data-source-line-end": "73", children: link.label }) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "80", "data-source-line-end": "98", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold mb-6 text-foreground uppercase tracking-wider text-xs", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "81", "data-source-line-end": "81", children: "Reach Out" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "82", "data-source-line-end": "97", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "83", "data-source-line-end": "88", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 18, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "84", "data-source-line-end": "84" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "85", "data-source-line-end": "87", children: [
              "Kush Plaza 1st Floor,",
              /* @__PURE__ */ jsx("br", { "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "86", "data-source-line-end": "86" }),
              "Ngurubani Town"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "89", "data-source-line-end": "92", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 18, className: "text-primary shrink-0", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "90", "data-source-line-end": "90" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "91", "data-source-line-end": "91", children: "+254 797102970" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "93", "data-source-line-end": "96", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Mail", size: 18, className: "text-primary shrink-0", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "94", "data-source-line-end": "94" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "95", "data-source-line-end": "95", children: "kinyanmuigai@gmail.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-12 opacity-50", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "101", "data-source-line-end": "101" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-6", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "103", "data-source-line-end": "112", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "104", "data-source-line-end": "106", children: [
        "© ",
        currentYear,
        " Malta Intel Construction Company. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "107", "data-source-line-end": "111", children: [
        /* @__PURE__ */ jsx("a", { href: "#", onClick: (e) => {
          e.preventDefault();
        }, className: "text-xs text-muted-foreground hover:text-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "108", "data-source-line-end": "108", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", onClick: (e) => {
          e.preventDefault();
        }, className: "text-xs text-muted-foreground hover:text-foreground", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "109", "data-source-line-end": "109", children: "Terms of Service" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60 select-none", "data-source-file": "src/components/common/CommonFooter.tsx", "data-source-line-start": "110", "data-source-line-end": "110", children: "License" })
      ] })
    ] })
  ] }) });
}
const $$Astro = createAstro();
const $$StandardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$StandardLayout;
  const { title, description, headerVariant = "solid" } = Astro.props, currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title, description }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/layouts/StandardLayout.astro" data-source-line-start="18" data-source-line-end="26" class="flex flex-col min-h-screen">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, currentPath, variant: headerVariant, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader", "client:component-export": "default" })}
    
    <main data-source-file="src/layouts/StandardLayout.astro" data-source-line-start="21" data-source-line-end="23" class="flex-1 flex flex-col">
      ${renderSlot($$result2, $$slots.default)}
    </main>

    ${renderComponent($$result2, "CommonFooter", CommonFooter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonFooter", "client:component-export": "default" })}
  </div>
` })}`;
}, "/home/rayan/Malta/src/layouts/StandardLayout.astro", void 0);
function getSupabaseClient() {
  return null;
}
const Card = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-xl border bg-card text-card-foreground shadow", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "9", "data-source-line-end": "16" }));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "24", "data-source-line-end": "28" }));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("font-semibold leading-none tracking-tight", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "36", "data-source-line-end": "40" }));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "48", "data-source-line-end": "52" }));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props, "data-source-file": "src/components/ui/card.tsx", "data-source-line-start": "68", "data-source-line-end": "72" }));
CardFooter.displayName = "CardFooter";
export {
  $$StandardLayout as $,
  Button as B,
  Card as C,
  SafeIcon as S,
  CardHeader as a,
  CardTitle as b,
  CardContent as c,
  cn as d,
  CardDescription as e,
  Separator as f,
  buttonVariants as g,
  getSupabaseClient as h
};
