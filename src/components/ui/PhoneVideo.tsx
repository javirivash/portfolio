"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface Clip {
  src: string;
  poster: string;
  title: string;
  label: string;
}

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

interface PhoneVideoProps {
  clips: Clip[];
}

// Muted screen recordings inside one phone frame, played one after another in
// a loop. Nothing loads until the phone scrolls into view, and it pauses when
// it leaves. With reduced motion nothing plays on its own: the poster shows
// with controls. The buttons under the phone jump to a clip.
export default function PhoneVideo({ clips }: PhoneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
  const clip = clips[index];

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || !visible) {
      video?.pause();
      return;
    }
    const url = new URL(clip.src, window.location.href).href;
    if (video.src !== url) video.src = clip.src;
    if (!reduced) video.play().catch(() => {});
  }, [clip.src, visible, reduced]);

  const next = () => setIndex((i) => (i + 1) % clips.length);

  return (
    <div className="jr-telefono-bloque">
      <div className="jr-telefono">
        <div className="jr-telefono-pantalla">
          <video
            ref={ref}
            poster={clip.poster}
            muted
            playsInline
            loop={clips.length === 1}
            controls={reduced}
            preload="none"
            aria-label={clip.label}
            width={390}
            height={844}
            onEnded={clips.length > 1 ? next : undefined}
          />
        </div>
      </div>

      {clips.length > 1 && (
        <div className="jr-telefono-clips" role="group" aria-label="Recordings">
          {clips.map((c, i) => (
            <button
              key={c.src}
              type="button"
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
