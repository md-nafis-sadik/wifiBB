"use client";

import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

export default function SplitText({ text, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const wordSpans = containerRef.current.querySelectorAll(".split-word");

      animate(
        wordSpans,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  const splitWords = (input) =>
    input.split(" ").map((word, i) => (
      <span key={i} className="split-word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <div className="split-text-container">
      <div ref={containerRef} className={className}>
        {splitWords(text)}
      </div>
      <style>{`
        .split-text-container {
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
        }
        .split-word {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}
