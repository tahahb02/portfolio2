// Shared Tailwind-friendly class strings following the new design system.
// Components pull from CSS custom properties (src/index.css) for colors.

export const cardClass =
  "bg-card border border-(--border-color) rounded-lg transition-all duration-300";

export const hairlineClass = "h-px w-full";

export const chipClass =
  "inline-flex items-center gap-2 rounded-md border border-(--border-color) bg-(--bg-secondary) px-3 py-1.5 text-xs font-medium transition-all duration-200";

export const linkClass =
  "relative transition-colors duration-200 hover:text-(--accent)";

// Underlined, animated accent link
export const animLinkClass =
  "relative transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-(--accent) after:transition-all after:duration-300 hover:after:w-full";