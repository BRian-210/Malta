import { jsx, jsxs } from "react/jsx-runtime";
import { d as cn, C as Card, a as CardHeader, S as SafeIcon, c as CardContent } from "./card.CDyno8a4.js";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { B as Badge } from "./badge.DFxVJddt.js";
const Avatar = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Root, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function TeamMemberCard({
  name,
  role,
  bio,
  photoUrl,
  credentials
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised interactive-lift h-full flex flex-col overflow-hidden", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "31", "data-source-line-end": "82", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "p-0 border-b border-border bg-muted/20", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "32", "data-source-line-end": "45", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] relative w-full overflow-hidden", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "33", "data-source-line-end": "44", children: /* @__PURE__ */ jsxs(Avatar, { className: "w-full h-full rounded-none", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "34", "data-source-line-end": "43", children: [
      /* @__PURE__ */ jsx(AvatarImage, { src: photoUrl, alt: name, className: "object-cover w-full h-full transition-transform duration-500 hover:scale-105", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "35", "data-source-line-end": "39" }),
      /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-none bg-secondary flex items-center justify-center", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "40", "data-source-line-end": "42", children: /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 48, className: "text-muted-foreground", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "41", "data-source-line-end": "41" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding flex-1 flex flex-col space-y-4", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "47", "data-source-line-end": "81", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "48", "data-source-line-end": "58", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "49", "data-source-line-end": "56", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-item-title text-foreground", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "50", "data-source-line-end": "50", children: name }),
          credentials && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-[10px] uppercase font-bold tracking-wider border-primary/30 text-primary", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "52", "data-source-line-end": "54", children: credentials })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-label text-accent font-semibold", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: role })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-px bg-border/60 w-12", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }),
      /* @__PURE__ */ jsx("p", { className: "text-caption text-foreground/80 line-clamp-4 flex-1", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "62", "data-source-line-end": "64", children: bio }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2 flex items-center gap-4", "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "66", "data-source-line-end": "80", children: [
        /* @__PURE__ */ jsx("button", { className: "text-muted-foreground hover:text-primary transition-colors", onClick: () => window.location.href = "./contact-us.html", title: `Contact ${name}`, "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "67", "data-source-line-end": "73", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Mail", size: 18, "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "72", "data-source-line-end": "72" }) }),
        /* @__PURE__ */ jsx("button", { className: "text-muted-foreground hover:text-accent transition-colors", onClick: () => console.log("LinkedIn Profile Link"), "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "74", "data-source-line-end": "79", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Linkedin", size: 18, "data-source-file": "src/components/common/TeamMemberCard.tsx", "data-source-line-start": "78", "data-source-line-end": "78" }) })
      ] })
    ] })
  ] });
}
export {
  TeamMemberCard as T
};
