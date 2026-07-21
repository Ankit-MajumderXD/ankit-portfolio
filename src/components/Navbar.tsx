import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../assets/profile.png";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [active, setActive] = useState("");

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

  return (
    <nav className="fixed top-5 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-16 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center justify-between px-8">

          <Link
            to="/"
            state={{ scrollTo: "home" }}
          >
            <img
              src={profile}
              alt="Ankit"
              className="w-10 h-10 rounded-full object-cover border border-white/20 transition-all duration-300 hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to="/"
                state={{ scrollTo: link.id }}
                className={`relative transition-all duration-300 hover:text-white ${
                  isHome && active === link.id
                    ? "text-white"
                    : "text-white/60"
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 ${
                    isHome && active === link.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}