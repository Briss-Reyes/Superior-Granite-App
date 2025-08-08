// components/AboutSlider.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/about1.jpg",
  "/about2.jpg",
  "/about1.jpg",
  "/about2.jpg",
];

const AboutSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Slider */}
      <div className="container mx-auto relative w-full h-[30vh] lg:h-[80vh] overflow-hidden rounded-md">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlapping Text Box */}
      <div className="relative z-20 -mt-15 lg:-mt-50 flex justify-center mb-16">
        <div className="text-white px-4 lg:px-8 py-6 rounded-xl w-[90%] max-w-6xl text-left md:text-center about-text">
          <h2 className="text-2xl md:text-3xl font-semibold">Welcome to Our Website</h2>
          <p className="mt-2 text-sm md:text-base text-gray-200 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minus fugiat commodi culpa beatae ipsam maxime, architecto, deleniti provident quis blanditiis nostrum mollitia laboriosam ea? Voluptas qui tempore mollitia esse fuga nobis quos ipsa facere, corrupti quisquam, aliquid voluptatem error, voluptatibus nam iusto nihil aliquam placeat hic possimus minus nesciunt doloremque saepe? Quis dolor officiis optio culpa qui quia nostrum saepe doloribus laboriosam non. Aperiam soluta consequuntur accusamus fuga eius, sint eligendi. Fuga voluptatem veniam, dicta, veritatis voluptatum ducimus, beatae nisi debitis excepturi magnam ullam? Non distinctio ut, quae quis laudantium, error provident ducimus deleniti officiis inventore quaerat omnis possimus rerum labore repudiandae fuga iste eum perspiciatis eligendi libero in soluta dolores ullam! Quas quibusdam itaque iusto aspernatur eos quo impedit ullam ex perspiciatis. Maiores ducimus veniam laboriosam eligendi deserunt placeat id aspernatur rem eaque. Beatae et soluta facilis quae ut est adipisci quas quod, iusto distinctio inventore nulla nihil. Quisquam modi quidem dolores ex fuga aliquid cupiditate, fugiat nulla impedit sed odio et alias dolorem, ratione dolor atque ea! Nostrum, tempora accusamus in iure quos explicabo laudantium praesentium dicta, dolorem eaque fugit eos enim id cumque accusantium incidunt animi soluta, illum possimus necessitatibus aliquam porro quis fugiat cupiditate. Ad?
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
