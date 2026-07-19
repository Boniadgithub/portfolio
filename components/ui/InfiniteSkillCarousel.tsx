"use client";

import { useRef, useEffect, useCallback, useReducer } from "react";
import { skills } from "@/lib/data/skills";
import SkillBadge from "@/components/ui/SkillBadge";

// Duplicate list so the loop seam is never visible
const DOUBLED = [...skills, ...skills];

// Duration in seconds for one full pass of the original list width
const DURATION = 38;

interface State {
  paused: boolean;
  reducedMotion: boolean;
}

type Action =
  | { type: "PAUSE" }
  | { type: "RESUME" }
  | { type: "SET_REDUCED"; payload: boolean };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "PAUSE":
      return { ...state, paused: true };
    case "RESUME":
      return { ...state, paused: false };
    case "SET_REDUCED":
      return { ...state, reducedMotion: action.payload };
    default:
      return state;
  }
}

export default function InfiniteSkillCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedAtRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);

  const [state, dispatch] = useReducer(reducer, {
    paused: false,
    reducedMotion: false,
  });

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    dispatch({ type: "SET_REDUCED", payload: mq.matches });
    const handler = (e: MediaQueryListEvent) =>
      dispatch({ type: "SET_REDUCED", payload: e.matches });
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (!trackRef.current) return;

      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp - pausedAtRef.current;
      }

      const elapsed = timestamp - startTimeRef.current; // ms
      const trackWidth = trackRef.current.scrollWidth / 2; // half = one full set
      const pixelsPerMs = trackWidth / (DURATION * 1000);
      const offset = (elapsed * pixelsPerMs) % trackWidth;

      trackRef.current.style.transform = `translateX(-${offset}px)`;
      lastTimestampRef.current = timestamp;
      rafRef.current = requestAnimationFrame(animate);
    },
    []
  );

  // Start / stop animation
  useEffect(() => {
    if (state.reducedMotion) {
      // Static display for reduced motion
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (trackRef.current) trackRef.current.style.transform = "translateX(0)";
      return;
    }

    if (state.paused) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        // Record how far we were so resume is seamless
        pausedAtRef.current =
          lastTimestampRef.current - (startTimeRef.current ?? 0);
        startTimeRef.current = null;
      }
    } else {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state.paused, state.reducedMotion, animate]);

  const handleMouseEnter = () => dispatch({ type: "PAUSE" });
  const handleMouseLeave = () => dispatch({ type: "RESUME" });
  const handleFocus = () => dispatch({ type: "PAUSE" });
  const handleBlur = () => dispatch({ type: "RESUME" });

  return (
    <section
      className="carousel-section"
      aria-label="Technology skills showcase"
    >
      {/* Edge fade masks */}
      <div className="carousel-edge carousel-edge--left" aria-hidden="true" />
      <div className="carousel-edge carousel-edge--right" aria-hidden="true" />

      {/* Scrollable viewport */}
      <div
        className="carousel-viewport"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <div
          ref={trackRef}
          className="carousel-track"
          role="list"
          aria-label="Skills list"
        >
          {DOUBLED.map((skill, i) => (
            <div key={`${skill.id}-${i}`} role="listitem">
              <SkillBadge skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
