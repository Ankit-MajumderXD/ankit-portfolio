import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type BackgroundPathsProps = {
  /** Mirror the curves horizontally (useful to vary sections). */
  flip?: boolean;
  /** Extra classes, e.g. a CSS mask to keep the paths away from text. */
  className?: string;
};

// Two families of flowing curves, mirrored. 18 each keeps the animation
// cheap while still reading as a dense field.
const PATHS_PER_FAMILY = 18;

// Every 7th path is an accent highlight; the rest are neutral.
const isHighlight = (i: number) => i % 7 === 3;

function curve(i: number, position: 1 | -1) {
  const n = i * 2; // spread 18 paths over the original 36-path range
  const x = (v: number) => v - n * 5 * position;
  const y = (v: number) => v - n * 6;
  return `M-${x(380)} -${189 + n * 6}C-${x(380)} -${189 + n * 6} -${x(312)} ${y(216)} ${x(152)} ${y(343)}C${x(616)} ${y(470)} ${x(684)} ${y(875)} ${x(684)} ${y(875)}`;
}

// Deterministic per-path duration (20–29s), no randomness during render.
const duration = (i: number) => 20 + ((i * 7) % 10);

function PathFamily({ position, animate }: { position: 1 | -1; animate: boolean }) {
  return (
    <g>
      {Array.from({ length: PATHS_PER_FAMILY }, (_, i) => {
        const highlight = isHighlight(i);
        const common = {
          d: curve(i, position),
          stroke: "currentColor",
          strokeWidth: 0.5 + i * 0.03,
          strokeOpacity: highlight ? 0.35 : 0.05 + i * 0.006,
          className: highlight ? "text-accent" : "text-fg",
          fill: "none",
        };
        // Static: drawn in full, no continuous work.
        if (!animate) return <path key={`${position}-${i}`} {...common} />;
        return (
          <motion.path
            key={`${position}-${i}`}
            {...common}
            initial={{ pathLength: 0.3 }}
            animate={{ pathLength: [0.3, 1, 0.3], pathOffset: [0, 1, 0] }}
            transition={{ duration: duration(i), repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </g>
  );
}

// Decorative animated line field. Sits behind content: parent needs
// `relative isolate overflow-hidden`; content above it gets `relative`.
// Animates only while on screen and never under reduced motion.
export default function BackgroundPaths({ flip = false, className = "" }: BackgroundPathsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduceMotion = useReducedMotion();
  const animate = inView && !reduceMotion;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-background-paths={animate ? "animated" : "static"}
      className={`pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden ${className}`}
    >
      <svg
        className={`h-full w-full ${flip ? "-scale-x-100" : ""}`}
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <PathFamily position={1} animate={animate} />
        <PathFamily position={-1} animate={animate} />
      </svg>
    </div>
  );
}
