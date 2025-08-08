"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeaderSliderProps = {
  images: string[];
  title: string;
};

export default function HeaderSlider({ images, title }: HeaderSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[40vh] lg:h-[65vh] xl:h-[85vh] container mx-auto px-4 2xl:px-0 overflow-hidden mt-30">
      <div className="header-wrapper w-full h-full relative">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            fill
            className={`object-cover rounded-sm absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
              current === idx ? "opacity-100 z-0" : "opacity-0 z-[-1]"
            }`}
            priority={idx === 0}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-end justify-end text-right text-black px-4">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold font-bebas text-accent tracking-wide max-w-xs mb-4 md:mb-0 mr-5 lg:mr-20">
          {title}
        </h1>
      </div>
    </div>
  );
}
