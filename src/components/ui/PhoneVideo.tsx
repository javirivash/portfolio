"use client";

import { useEffect, useRef } from "react";

interface PhoneVideoProps {
  src: string;
  poster: string;
  label: string;
}

// A muted, looping screen recording inside a phone frame. It loads only when
// it scrolls near the viewport, pauses when it leaves, and with reduced motion
// it shows the poster with controls instead of playing on its own.
export default function PhoneVideo({ src, poster, label }: PhoneVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const load = () => {
      if (!video.src) video.src = src;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      load();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      load();
      video.play().catch(() => {});
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="jr-telefono">
      <div className="jr-telefono-pantalla">
        <video
          ref={ref}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          width={390}
          height={844}
        />
      </div>
    </div>
  );
}
