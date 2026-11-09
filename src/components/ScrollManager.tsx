import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router-dom";

// Handles all route-level scrolling in one place:
// - `<Link to="/" state={{ scrollTo: "projects" }}>` jumps to that section
//   (smoothly when already on the page, instantly when arriving from another).
// - Any other route change starts at the top of the page.
// - Back/forward returns to where the visitor was on that page.

type ScrollState = { scrollTo?: string } | null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Scroll to an element's layout position. scrollIntoView would include the
// translateY of sections still waiting to animate in and overshoot by that
// offset.
function scrollToElement(element: HTMLElement, behavior: ScrollBehavior) {
  let top = 0;
  for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop;
  }
  window.scrollTo({ top, behavior });
}

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();

  const positions = useRef(new Map<string, number>());
  const prevPathname = useRef<string | null>(null);

  // Take over from the browser so back/forward restoration is predictable.
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // Remember the scroll position of the current history entry. A layout
  // effect so the listener is swapped before the next page can fire scroll
  // events under the old entry's key.
  useLayoutEffect(() => {
    const key = location.key;
    let frame = 0;
    const save = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        positions.current.set(key, window.scrollY);
      });
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", save);
    };
  }, [location.key]);

  // Runs after the new route's DOM is committed, so target sections already
  // exist and no polling is needed.
  useLayoutEffect(() => {
    const isFirstRender = prevPathname.current === null;
    const pathChanged = prevPathname.current !== location.pathname;
    prevPathname.current = location.pathname;

    const targetId = (location.state as ScrollState)?.scrollTo;

    if (targetId) {
      const smooth = !pathChanged && !prefersReducedMotion();
      const target = document.getElementById(targetId);
      if (target) scrollToElement(target, smooth ? "smooth" : "instant");
      // Clear the state so a refresh or history step doesn't jump again.
      navigate(
        { pathname: location.pathname, search: location.search, hash: location.hash },
        { replace: true, state: null },
      );
      return;
    }

    // Same page (e.g. the state-clearing replace above, or an in-page
    // #anchor click): leave scrolling to the browser.
    if (!pathChanged || isFirstRender) return;

    if (navigationType === "POP") {
      window.scrollTo({
        top: positions.current.get(location.key) ?? 0,
        behavior: "instant",
      });
      return;
    }

    const hashTarget = location.hash
      ? document.getElementById(decodeURIComponent(location.hash.slice(1)))
      : null;
    if (hashTarget) {
      scrollToElement(hashTarget, "instant");
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location, navigationType, navigate]);

  return null;
}
