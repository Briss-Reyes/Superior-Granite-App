import { getProductsHeader } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";


export default async function ProductsHeader() {
   const productsHeader = await getProductsHeader();

  return (
    <div className="relative overflow-hidden mt-30 py-0 lg:py-18  container mx-auto">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-5xl lg:text-7xl font-bold text-accent font-bebas tracking-widest">
              {productsHeader.title}
            </h1>
            <div className="mt-4 text-xl text-body">
              <PortableText value={productsHeader.content} />
            </div>
          </div>

          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <ImageWrapper src={productsHeader.image1}  className="tiles-shadow hidden lg:block"/>
                      <ImageWrapper src={productsHeader.image2} className="sm:opacity-0 lg:opacity-100 tiles-shadow" />
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <ImageWrapper src={productsHeader.image3} className="tiles-shadow" />
                      <ImageWrapper src={productsHeader.image4} className="tiles-shadow" />
                      <ImageWrapper src={productsHeader.image5} className="tiles-shadow" />
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <ImageWrapper src={productsHeader.image6} className="tiles-shadow" />
                      <ImageWrapper src={productsHeader.image7} className="tiles-shadow" />
                    </div>
                  </div>
                </div>
              </div>

              {productsHeader.buttonLink && productsHeader.buttonText && (
                <a
                  href={productsHeader.buttonLink}
                  className="inline-block bg-[#82302a] text-white font-semibold tracking-wide px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  {productsHeader.buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ImageWrapperProps = {
  src: string;
  className?: string;
};

function ImageWrapper({ src, className = "" }: ImageWrapperProps) {
  return (
    <div className={`h-64 w-44 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        width={176}
        height={256}
        className="size-full object-cover"
      />
    </div>
  );
}
