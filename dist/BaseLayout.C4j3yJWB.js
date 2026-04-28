import { c as createComponent, e as addAttribute, b as renderHead, g as renderSlot, r as renderComponent, a as renderTemplate, f as createAstro } from "./astro/server.ZPjyFlDE.js";
import { jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
/* empty css                           */
const Toaster = ({
  ...props
}) => {
  const {
    theme = "system"
  } = useTheme();
  return /* @__PURE__ */ jsx(Toaster$1, { theme, className: "toaster group", toastOptions: {
    classNames: {
      toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
      description: "group-[.toast]:text-muted-foreground",
      actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
      cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
    }
  }, ...props, "data-source-file": "src/components/ui/sonner.tsx", "data-source-line-start": "12", "data-source-line-end": "27" });
};
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$BaseLayout;
  const { title = "Project", description = "Built with Astro" } = Astro.props;
  return renderTemplate`<html data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="13" data-source-line-end="24" lang="en">
  <head data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="14" data-source-line-end="19">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <title data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="18" data-source-line-end="18">${title}</title>
  ${renderHead()}</head>
  <body data-source-file="src/layouts/BaseLayout.astro" data-source-line-start="20" data-source-line-end="23">
    ${renderSlot($$result, $$slots.default)}
    ${renderComponent($$result, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" })}
  </body></html>`;
}, "/home/rayan/Malta/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $
};
