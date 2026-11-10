import type { MouseEvent } from "react";

export const MAIN_CONTENT_ID = "main-content";

// First focusable element on every page; hidden until focused by keyboard.
export default function SkipLink() {
  // Move focus without adding a #hash to the URL.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const main = document.getElementById(MAIN_CONTENT_ID);
    if (!main) return;
    event.preventDefault();
    main.focus({ preventScroll: true });
    main.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      onClick={handleClick}
      className="sr-only rounded-control bg-accent-solid px-5 py-3 text-sm font-semibold text-on-accent shadow-card focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
    >
      Skip to content
    </a>
  );
}
