"use client";

import SplitText from "./SplitText";
import { useEffect, useRef } from "react";
import { inView, animate } from "motion";

export default function DownloadApp() {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      inView(imageRef.current, () => {
        animate(
          imageRef.current,
          { opacity: [0, 1], scale: [0.95, 1] },
          { duration: 0.6, easing: "ease-out" }
        );
      });
    }
  }, []);

  return (
    <section className="bg-yellow-400 py-20 px-4 md:px-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          <SplitText text="Download The WifiBB App" />
        </h2>
        <p className="text-black/70 mb-8 text-sm md:text-lg">
          Advanced features for an effortless digital experience anytime, anywhere!
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <img
            src="/assets/google-play.png"
            alt="Google Play"
            className="h-12 w-auto"
          />
          <img
            src="/assets/app-store.png"
            alt="App Store"
            className="h-12 w-auto"
          />
        </div>

        {/* Phone image area */}
        <div ref={imageRef} className="opacity-0 transition-all duration-700">
          <img
            src="/assets/app-mockup.png"
            alt="App Preview"
            className="mx-auto max-w-full w-[300px] md:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
