import { jsxs, jsx } from "react/jsx-runtime";
import { d as cn, B as Button, S as SafeIcon } from "./card.BAbcu8kL.js";
function PageHero({
  title,
  subtitle,
  backgroundImage = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/0cede8a7-a36a-4906-a4d1-5f1e2e994710.png",
  ctaText,
  ctaHref,
  variant = "compact"
}) {
  const isFull = variant === "full";
  const handleCtaClick = () => {
    if (ctaHref) {
      window.location.href = ctaHref;
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: cn("relative w-full overflow-hidden flex items-center justify-center text-center", isFull ? "min-h-[80vh] py-24" : "min-h-[40vh] py-16"), "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "36", "data-source-line-end": "94", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "43", "data-source-line-end": "51", children: [
      /* @__PURE__ */ jsx("img", { src: backgroundImage, alt: title, className: "w-full h-full object-cover", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "44", "data-source-line-end": "48" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-overlay opacity-80", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "50", "data-source-line-end": "50" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: cn("relative z-10 page-container flex flex-col items-center gap-6 text-primary-foreground", isFull ? "max-w-4xl" : "max-w-3xl"), "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "54", "data-source-line-end": "86", children: [
      /* @__PURE__ */ jsx("h1", { className: cn("text-page-title transition-all duration-700 delay-100", isFull ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"), "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "58", "data-source-line-end": "63", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: cn("text-lg md:text-xl font-medium opacity-90 max-w-2xl transition-all duration-700 delay-200", isFull ? "text-xl md:text-2xl" : "text-base md:text-lg"), "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "66", "data-source-line-end": "71", children: subtitle }),
      ctaText && ctaHref && /* @__PURE__ */ jsx("div", { className: "mt-4 transition-all duration-700 delay-300", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "75", "data-source-line-end": "84", children: /* @__PURE__ */ jsxs(Button, { size: isFull ? "lg" : "default", className: "btn-cta group flex items-center gap-2", onClick: handleCtaClick, "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "76", "data-source-line-end": "83", children: [
        ctaText,
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 18, className: "group-hover:translate-x-1 transition-transform", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "82", "data-source-line-end": "82" })
      ] }) })
    ] }),
    isFull && /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "90", "data-source-line-end": "92", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronDown", size: 32, color: "white", "data-source-file": "src/components/common/PageHero.tsx", "data-source-line-start": "91", "data-source-line-end": "91" }) })
  ] });
}
export {
  PageHero as P
};
