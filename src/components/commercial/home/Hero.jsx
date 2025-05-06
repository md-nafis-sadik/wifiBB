"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";

const slides = [<Slide1 />, <Slide4 />, <Slide2 />, <Slide3 />];

function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // initial
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Embla Viewport */}
      <div className="overflow-hidden cursor-grab" ref={emblaRef}>
        <div className="flex">
          {slides.map((Component, index) => (
            <div className="min-w-full" key={index}>
              {Component}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="max-w-7xl relative mx-auto">
      <button
        onClick={scrollPrev}
        className="hidden md:block absolute top-[-300px] left-3 -translate-y-1/2 z-10 bg-white p-3.5 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:block absolute top-[-300px] right-3 -translate-y-1/2 z-10 bg-white p-3.5 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-10 left-4 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={` rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-[#f9e550] scale-110 w-6 h-2.5" : "bg-white w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Hero;
