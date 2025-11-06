"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScaleOnViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScaleOnView({ children, className }: ScaleOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" }); // triggers a bit earlier
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        scale: 0.9,
        opacity: 0.7,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.9, opacity: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
