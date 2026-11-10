import { useEffect, useId, useRef, useState } from "react";

// Tones refer to the footer's metallic scale (see `.footer-metal` in
// index.css): 1 = closest to the background … 5 = strongest edge tone.
type Tone = 1 | 2 | 3 | 4 | 5;

type WaveLayer = {
  /** Wavelength in viewBox units; must divide 1200 so the loop is seamless. */
  period: number;
  amplitude: number;
  /** Resting height of the wave line (viewBox is 200 tall). */
  baseline: number;
  /** Horizontal offset so layers don't line up. */
  phase: number;
  /** Body: vertical gradient from `top` (at the crest) fading to `bottom`. */
  fill: { top: Tone; topOpacity: number; bottom: Tone; bottomOpacity: number };
  /** Thin edge line along the crest. */
  edge?: { tone: Tone; opacity: number };
  /** Seconds for one full loop. */
  duration: number;
  reverse: boolean;
  /** Hidden on mobile. */
  desktopOnly?: boolean;
};

// Back to front: charcoal bodies for depth, silver edges for the metallic
// line work; one highlight-silver edge only, kept faint.
// Wavelengths 400/600/300/1200 all divide the 1200-unit tile (required).
const LAYERS: WaveLayer[] = [
  { period: 400, amplitude: 14, baseline: 64, phase: 0, duration: 44, reverse: true,
    fill: { top: 2, topOpacity: 0.55, bottom: 1, bottomOpacity: 0.2 }, edge: { tone: 3, opacity: 0.45 } },
  { period: 600, amplitude: 20, baseline: 92, phase: 200, duration: 32, reverse: false,
    fill: { top: 2, topOpacity: 0.9, bottom: 1, bottomOpacity: 0.4 }, edge: { tone: 4, opacity: 0.4 } },
  { period: 300, amplitude: 9, baseline: 118, phase: 100, duration: 26, reverse: true, desktopOnly: true,
    fill: { top: 3, topOpacity: 0.16, bottom: 3, bottomOpacity: 0 }, edge: { tone: 3, opacity: 0.4 } },
  { period: 1200, amplitude: 16, baseline: 146, phase: 300, duration: 56, reverse: false,
    fill: { top: 2, topOpacity: 0.85, bottom: 1, bottomOpacity: 0.6 }, edge: { tone: 5, opacity: 0.28 } },
];

const WIDTH = 2400; // two 1200-unit tiles; the layer slides by exactly one tile
const HEIGHT = 200;

const tone = (t: Tone) => `var(--metal-${t})`;

// A smooth periodic wave as a chain of quadratic curves. Because the period
// divides the 1200-unit tile, the shape at x and x + 1200 is identical, so
// translating by half the SVG's width loops without a visible jump.
function waveLine({ period, amplitude, baseline, phase }: WaveLayer) {
  const half = period / 2;
  const start = -phase;
  let d = `M${start} ${baseline} Q${start + period / 4} ${baseline - amplitude} ${start + half} ${baseline}`;
  for (let x = start + half; x < WIDTH + period; x += half) d += ` T${x + half} ${baseline}`;
  return { d, end: Math.ceil((WIDTH + period - start) / half) * half + start };
}

type AnimatedWaveFooterProps = {
  className?: string;
};

// Decorative metallic wave field for the footer. Pure SVG + CSS keyframes
// (see `.wave-layer` in index.css); it only runs while near the viewport and
// is static under reduced motion. Colours come from the footer's scoped
// `--metal-*` tokens, so it needs a `.footer-metal` ancestor.
export default function AnimatedWaveFooter({ className = "" }: AnimatedWaveFooterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      rootMargin: "200px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-waves={active ? "active" : "idle"}
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
    >
      {LAYERS.map((layer, i) => {
        const { d, end } = waveLine(layer);
        const gradientId = `wave-${uid}-${i}`;
        const top = layer.baseline - layer.amplitude;
        return (
          <svg
            key={gradientId}
            className={`wave-layer absolute bottom-0 left-0 h-full w-[200%] ${layer.desktopOnly ? "max-md:hidden" : ""}`}
            style={{ animationDuration: `${layer.duration}s`, animationDirection: layer.reverse ? "reverse" : "normal" }}
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            focusable="false"
          >
            <defs>
              <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1={top} x2="0" y2={HEIGHT}>
                <stop offset="0" style={{ stopColor: tone(layer.fill.top), stopOpacity: layer.fill.topOpacity }} />
                <stop offset="1" style={{ stopColor: tone(layer.fill.bottom), stopOpacity: layer.fill.bottomOpacity }} />
              </linearGradient>
            </defs>
            <path d={`${d} L${end} ${HEIGHT} L${-layer.phase} ${HEIGHT} Z`} fill={`url(#${gradientId})`} />
            {layer.edge && (
              <path
                d={d}
                fill="none"
                stroke={tone(layer.edge.tone)}
                strokeOpacity={layer.edge.opacity}
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}
