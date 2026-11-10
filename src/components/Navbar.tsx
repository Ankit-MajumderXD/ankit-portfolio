import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
// Small dedicated avatar (160px wide) instead of the full portrait.
// `?no-inline`: keep it a separate (non-blocking) file instead of base64 in the JS bundle.
import profile from "../assets/profile-avatar.webp?no-inline";
import ThemeToggle from "./ui/ThemeToggle";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const MOBILE_MENU_ID = "mobile-nav";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Highlight the home section currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;

    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  // While the mobile menu is open: Escape closes it and returns focus to the
  // toggle; a tap or click outside the navbar closes it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (id: string) => isHome && active === id;

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
      <nav ref={navRef} aria-label="Primary" className="container-page">
        <div className="relative">
          <div className="flex h-14 items-center justify-between rounded-control border border-line bg-surface/90 pl-2 pr-2 shadow-card backdrop-blur-md transition-colors duration-300">
            <Link
              to="/"
              state={{ scrollTo: "home" }}
              onClick={closeMenu}
              aria-label="Ankit Majumder, home"
              className="rounded-control"
            >
              <img
                src={profile}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border border-line-strong object-cover transition-transform duration-300 ease-out-soft hover:scale-105"
              />
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to="/"
                    state={{ scrollTo: link.id }}
                    aria-current={isActive(link.id) ? "true" : undefined}
                    className={`relative block rounded-control px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.id)
                        ? "text-accent"
                        : "text-fg-muted hover:bg-surface-2 hover:text-fg"
                    }`}
                  >
                    {isActive(link.id) && (
                      <motion.span
                        layoutId="nav-active-pill"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-control bg-accent-soft"
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls={MOBILE_MENU_ID}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-control border border-line text-fg-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-2 hover:text-fg md:hidden"
              >
                {menuOpen ? (
                  <X aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
                ) : (
                  <Menu aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu: a dropdown under the bar, not a full-screen
              overlay, so the page stays visible and nothing overflows. */}
          <div id={MOBILE_MENU_ID} className="md:hidden">
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  onBlur={(event) => {
                    // Close when keyboard focus tabs out of the navbar.
                    const next = event.relatedTarget as Node | null;
                    if (next && !navRef.current?.contains(next)) closeMenu();
                  }}
                  className="absolute inset-x-0 top-full mt-2 rounded-card border border-line bg-surface p-2 shadow-card"
                >
                  <ul className="flex flex-col">
                    {NAV_LINKS.map((link) => (
                      <li key={link.id}>
                        <Link
                          to="/"
                          state={{ scrollTo: link.id }}
                          onClick={closeMenu}
                          aria-current={isActive(link.id) ? "true" : undefined}
                          className={`flex items-center justify-between rounded-[0.875rem] px-4 py-3.5 text-base font-medium transition-colors duration-200 ${
                            isActive(link.id)
                              ? "bg-accent-soft text-accent"
                              : "text-fg-muted hover:bg-surface-2 hover:text-fg"
                          }`}
                        >
                          {link.label}
                          {isActive(link.id) && (
                            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}
