"use client";
import { useEffect, useRef, useState } from "react";

const BUBBLE_LIFETIME_MS = 900;
const MAX_BUBBLES = 8;

type Bubble = { id: number; x: number; y: number };

const SubmarineCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const angle = useRef(0);
  const bubbleIdRef = useRef(0);
  const lastBubbleAt = useRef(0);

  // Decide whether the custom cursor should run at all: never on touch
  // devices, never with reduced motion requested.
  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => setEnabled(!coarse.matches && !reduced.matches);

    evaluate();
    coarse.addEventListener("change", evaluate);
    reduced.addEventListener("change", evaluate);

    return () => {
      coarse.removeEventListener("change", evaluate);
      reduced.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMove);

    let frame: number;

    const tick = (time: number) => {
      const dx = target.current.x - position.current.x;
      const dy = target.current.y - position.current.y;

      position.current.x += dx * 0.18;
      position.current.y += dy * 0.18;

      const speed = Math.hypot(dx, dy);
      if (speed > 1.5) {
        const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
        const diff = ((targetAngle - angle.current + 180) % 360) - 180;
        angle.current += diff * 0.15;

        if (time - lastBubbleAt.current > 160) {
          lastBubbleAt.current = time;
          bubbleIdRef.current += 1;
          setBubbles((prev) =>
            [
              ...prev,
              {
                id: bubbleIdRef.current,
                x: position.current.x,
                y: position.current.y,
              },
            ].slice(-MAX_BUBBLES),
          );
        }
      }

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%) rotate(${angle.current}deg)`;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  // Let each bubble clean itself out of state once its animation finishes.
  useEffect(() => {
    if (bubbles.length === 0) return;

    const timers = bubbles.map((bubble) =>
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
      }, BUBBLE_LIFETIME_MS),
    );

    return () => timers.forEach(clearTimeout);
  }, [bubbles]);

  if (!enabled) return null;

  return (
    <>
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-99999"
          style={{
            transform: `translate(${bubble.x - 6}px, ${bubble.y}px)`,
          }}
        >
          <span className="animate-bubble-rise block h-1.5 w-1.5 rounded-full bg-blue-300/70" />
        </span>
      ))}

      <div
        ref={wrapperRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-99999 will-change-transform"
      >
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
          <ellipse
            cx="18"
            cy="12"
            rx="14"
            ry="7"
            fill="#3b82f6"
            stroke="#93c5fd"
            strokeWidth="1"
          />
          <rect x="14" y="2" width="8" height="7" rx="2" fill="#2563eb" />
          <line
            x1="18"
            y1="2"
            x2="18"
            y2="-2"
            stroke="#93c5fd"
            strokeWidth="1.5"
          />
          <g
            className="animate-spin"
            style={{ transformOrigin: "34px 12px" }}
          >
            <path
              d="M34 6v12M28 12h12"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="10" cy="12" r="1.5" fill="#0b1a30" />
          <circle cx="16" cy="12" r="1.5" fill="#0b1a30" />
        </svg>
      </div>
    </>
  );
};

export default SubmarineCursor;
