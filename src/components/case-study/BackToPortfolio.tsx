import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Returns to the Projects section of the homepage, like the existing
// "← Back to Portfolio" links.
export default function BackToPortfolio({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      state={{ scrollTo: "projects" }}
      className={`group inline-flex items-center gap-2 font-mono text-eyebrow uppercase text-fg-muted transition-colors duration-200 hover:text-fg ${className}`}
    >
      <ArrowLeft
        aria-hidden="true"
        className="h-3.5 w-3.5 transition-transform duration-300 ease-out-soft group-hover:-translate-x-0.5"
      />
      Back to portfolio
    </Link>
  );
}
