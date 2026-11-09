import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = LinkProps & {
  variant?: Variant;
  children: ReactNode;
};

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-control text-[0.9375rem] font-medium transition-colors duration-200";

const VARIANTS: Record<Variant, string> = {
  // Ink button: highest contrast in both themes.
  primary: "h-12 px-6 bg-fg text-canvas hover:bg-fg/85",
  secondary:
    "h-12 px-6 border border-line-strong text-fg hover:border-fg/40 hover:bg-surface-2",
  ghost:
    "h-12 px-0 text-fg-muted underline decoration-line-strong underline-offset-[6px] hover:text-fg hover:decoration-accent",
};

// Router link styled as a button. Use for navigation, never for actions.
export default function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link {...props} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
