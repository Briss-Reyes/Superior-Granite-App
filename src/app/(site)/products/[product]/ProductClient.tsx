"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { PortableText } from "@portabletext/react";
import { FiCheckCircle } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";


type ProductType = Awaited<ReturnType<typeof import("../../../../../sanity/sanity-utils").getProduct>>;

type Props = {
  product: ProductType;
};

export default function ProductClient({ product }: Props) {
  // Filter out undefined images and create slide objects
  const imageSlides = [product.image, product.image2, product.image3, product.image4]
    .filter((img): img is string => !!img)
    .map((img) => ({ src: img }));

  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full container mx-auto mt-30">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[60vh]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover brightness-75 rounded-lg products-shadow"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <div className="text-white text-center">
            <h1 className="text-5xl lg:text-7xl font-bold font-bebas tracking-widest drop-shadow-md">
              {product.name}
            </h1>
            {product.description && (
              <p className="mt-2 text-sm md:text-base text-gray-300 drop-shadow">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Image Thumbnails */}
      <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
        {imageSlides.map((slide, i) => (
          <img
            key={i}
            onClick={() => setIndex(i)}
            className="cursor-pointer max-w-36 h-40 md:max-w-56 md:h-60 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
            src={slide.src}
            alt={`Product image ${i + 1}`}
          />
        ))}
      </div>

      {/* Lightbox Viewer */}
      <Lightbox
        slides={imageSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />

{/* Content */}
<div className="container mx-auto px-4 py-16 ">
<h1 className="text-5xl lg:text-7xl text-accent font-bold font-bebas tracking-widest drop-shadow-md ">Info</h1>
  <div className="flex flex-col sm:flex-row gap-12">
    {/* Left column: PortableText, 60% width on sm+, full width on xs */}
    <div className="sm:w-3/5 w-full text-lg text-gray-700 border-t border-[#82302a] pt-6">
      <PortableText value={product.content} />
    </div>

 {/* Right column: Static list with icons */}
<div className="sm:w-2/5 w-full text-gray-700 border-b border-[#82302a] pb-6">
  <ul className="space-y-6">
    {[
      {
        title: "High Durability",
        description: "Built to last with premium materials and craftsmanship.",
        icon: <FiCheckCircle className="text-green-600 w-6 h-6" />,
      },
      {
        title: "Elegant Finish",
        description: "Polished to perfection for a sleek, modern look.",
        icon: <FiCheckCircle className="text-green-600 w-6 h-6" />,
      },
      {
        title: "Eco-Friendly",
        description: "Sourced and manufactured with sustainability in mind.",
        icon: <FiCheckCircle className="text-green-600 w-6 h-6" />,
      },
      {
        title: "Customizable",
        description: "Available in a variety of styles and configurations.",
        icon: <FiCheckCircle className="text-green-600 w-6 h-6" />,
      },
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-4">
        <div className="pt-1">{item.icon}</div>
        <div>
          <h5 className="text-md font-semibold mb-1">{item.title}</h5>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
  </div>
</div>

  {/* Centered text below */}
  <div className="mt-12 text-center max-w-6xl mx-auto px-4">
    <p className="text-md text-gray">
     <span className="font-bold text-xl text-body">Disclaimer:</span> These are general statements pertaining to the stone category. Each natural stone is unique, and therefore we recommend speaking with your sales representative and fabricator regarding your specific stones application details and maintenance.
    </p>
  </div>

  {/* Centered button below disclaimer */}
<div className="mt-8 flex justify-center gap-4">
  <Link
    href="/products"
    className="inline-flex items-center gap-2 bg-[#82302a] font-bebas text-2xl text-white tracking-wider px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
  >
    <FaMagnifyingGlass className="w-8 h-8" />
    Keep Searching
  </Link>
</div>

</div>
  );
}
