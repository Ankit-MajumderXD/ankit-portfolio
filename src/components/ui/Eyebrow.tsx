import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

// Small technical label above headings.
export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-eyebrow uppercase text-fg-subtle ${className}`}
    >
      {children}
    </p>
  );
}
