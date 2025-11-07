"use client";

import React, { useEffect, useRef } from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<any>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;

    async function setup() {
      if (!mounted) return;
      const module = await import("lenis").catch((err) => {
        console.error("Failed to load lenis:", err);
        return null;
      });
      if (!module) return;
      const LenisConstructor =
        (module as any).default ?? (module as any).Lenis ?? (module as any);

      try {
        const lenis = new LenisConstructor({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          smoothTouch: false,
          touchMultiplier: 1.3,
          orientation: "vertical",
          gestureOrientation: "vertical",
          lerp: 0.1,
        });

        lenisRef.current = lenis;
        function raf(time: number) {
          if (lenisRef.current?.raf) lenisRef.current.raf(time);
          rafIdRef.current = requestAnimationFrame(raf);
        }
        rafIdRef.current = requestAnimationFrame(raf);
      } catch (err) {
        console.error("Error initializing Lenis:", err);
      }
    }

    setup();

    return () => {
      mounted = false;
      try {
        if (lenisRef.current?.destroy) {
          lenisRef.current.destroy();
        }
      } catch (e) {}
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
