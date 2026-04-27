import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import React__default from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";
import { d as cn, S as SafeIcon, B as Button } from "./card.CDyno8a4.js";
import { cva } from "class-variance-authority";
const Breadcrumb$1 = React.forwardRef(({
  ...props
}, ref) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "12", "data-source-line-end": "12" }));
Breadcrumb$1.displayName = "Breadcrumb";
const BreadcrumbList = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("ol", { ref, className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className), ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "19", "data-source-line-end": "26" }));
BreadcrumbList.displayName = "BreadcrumbList";
const BreadcrumbItem = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "34", "data-source-line-end": "38" }));
BreadcrumbItem.displayName = "BreadcrumbItem";
const BreadcrumbLink = React.forwardRef(({
  asChild,
  className,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(Comp, { ref, className: cn("transition-colors hover:text-foreground", className), ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "51", "data-source-line-end": "55" });
});
BreadcrumbLink.displayName = "BreadcrumbLink";
const BreadcrumbPage = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("span", { ref, role: "link", "aria-disabled": "true", "aria-current": "page", className: cn("font-normal text-foreground", className), ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "64", "data-source-line-end": "71" }));
BreadcrumbPage.displayName = "BreadcrumbPage";
const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx("li", { role: "presentation", "aria-hidden": "true", className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className), ...props, "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "80", "data-source-line-end": "87", children: children ?? /* @__PURE__ */ jsx(ChevronRight, { "data-source-file": "src/components/ui/breadcrumb.tsx", "data-source-line-start": "86", "data-source-line-end": "86" }) });
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
function Breadcrumb({
  items = []
}) {
  const breadcrumbItems = items.length > 0 ? items : [{
    label: "Home",
    href: "./home-page.html"
  }];
  return /* @__PURE__ */ jsx(Breadcrumb$1, { className: "mb-6", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "38", "data-source-line-end": "71", children: /* @__PURE__ */ jsx(BreadcrumbList, { className: "flex flex-wrap items-center", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "39", "data-source-line-end": "70", children: breadcrumbItems.map((item, index) => {
    const isLast = index === breadcrumbItems.length - 1;
    const isFirst = index === 0;
    return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "46", "data-source-line-end": "60", children: isLast ? /* @__PURE__ */ jsx(BreadcrumbPage, { className: "font-medium text-foreground truncate max-w-[120px] md:max-w-[200px]", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "48", "data-source-line-end": "50", children: item.label }) : /* @__PURE__ */ jsxs(BreadcrumbLink, { href: item.href, className: "flex items-center gap-1 nav-link text-sm whitespace-nowrap", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "52", "data-source-line-end": "58", children: [
        isFirst && /* @__PURE__ */ jsx(SafeIcon, { name: "Home", size: 14, className: "mb-0.5", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "56", "data-source-line-end": "56" }),
        /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: item.label })
      ] }) }),
      !isLast && /* @__PURE__ */ jsx(BreadcrumbSeparator, { className: "mx-2 text-muted-foreground/50", "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "63", "data-source-line-end": "65", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronRight", size: 12, "data-source-file": "src/components/common/Breadcrumb.tsx", "data-source-line-start": "64", "data-source-line-end": "64" }) })
    ] }, `${item.label}-${index}`);
  }) }) });
}
function Empty({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty", className: cn("flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12", className), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "7", "data-source-line-end": "14" });
}
function EmptyHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-header", className: cn("flex max-w-sm flex-col items-center gap-2 text-center", className), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "20", "data-source-line-end": "27" });
}
const emptyMediaVariants = cva("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-icon", "data-variant": variant, className: cn(emptyMediaVariants({
    variant,
    className
  })), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "52", "data-source-line-end": "57" });
}
function EmptyTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-title", className: cn("text-lg font-medium tracking-tight", className), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "63", "data-source-line-end": "67" });
}
function EmptyDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-description", className: cn("text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4", className), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "73", "data-source-line-end": "80" });
}
function EmptyContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "empty-content", className: cn("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm", className), ...props, "data-source-file": "src/components/ui/empty.tsx", "data-source-line-start": "86", "data-source-line-end": "93" });
}
function EmptyState({
  icon = "Search",
  title,
  description,
  actionLabel,
  actionHref
}) {
  const handleActionClick = () => {
    if (actionHref) {
      window.location.href = actionHref;
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "page-body flex items-center justify-center min-h-[400px]", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "34", "data-source-line-end": "66", children: /* @__PURE__ */ jsxs(Empty, { className: "max-w-md w-full", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "35", "data-source-line-end": "65", children: [
    /* @__PURE__ */ jsx(EmptyMedia, { "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "36", "data-source-line-end": "45", children: /* @__PURE__ */ jsx("div", { className: "bg-muted/30 p-6 rounded-full inline-flex mb-4", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "37", "data-source-line-end": "44", children: /* @__PURE__ */ jsx(SafeIcon, { name: icon, size: 48, className: "text-muted-foreground/60", strokeWidth: 1.5, "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "38", "data-source-line-end": "43" }) }) }),
    /* @__PURE__ */ jsxs(EmptyHeader, { "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "46", "data-source-line-end": "53", children: [
      /* @__PURE__ */ jsx(EmptyTitle, { className: "text-section-title", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "47", "data-source-line-end": "49", children: title }),
      /* @__PURE__ */ jsx(EmptyDescription, { className: "text-caption mt-2 text-balance", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "50", "data-source-line-end": "52", children: description })
    ] }),
    actionLabel && /* @__PURE__ */ jsx(EmptyContent, { className: "mt-8", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "55", "data-source-line-end": "63", children: /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleActionClick, className: "interactive-lift", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "56", "data-source-line-end": "62", children: actionLabel }) })
  ] }) });
}
export {
  Breadcrumb as B,
  EmptyState as E
};
