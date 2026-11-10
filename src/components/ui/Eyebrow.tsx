import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** Use the surrounding project accent (data-project) instead of grey. */
  accent?: boolean;
};

// Small technical label above headings.
export default function Eyebrow({ children, className = "", accent = false }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-eyebrow uppercase ${accent ? "text-project" : "text-fg-subtle"} ${className}`}
    >
      {children}
    </p>
  );
}
