// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import TiltImage from "@/components/TiltImage";
import FeaturesSection from "@/components/FeaturedSection";
import { getHeader, getHomeAbout, getHomeInventory } from "../../../sanity/sanity-utils";
import {PortableText} from "@portabletext/react";
import BrandsCarousel from "@/components/BrandsCarousel";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import HeaderSlider from "@/components/HeaderSlider";


export default async function Home() {
  const header = await getHeader();
  const about = await getHomeAbout();
  const inventory = await getHomeInventory();


  return (
    <>
        <HeaderSlider
        images={header.sliderImages?.length ? header.sliderImages : [header.image]}
        title={header.title}
      />

    {/* <div className="relative h-[40vh]  lg:h-[65vh] xl:h-[85vh] container mx-auto px-4 2xl:px-0">
      
      <div className="header-wrapper w-full h-full">
        <Image
        src={header.image}
        alt={header.title}
        fill
        className="object-cover rounded-sm"
        priority
      />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-end justify-end text-right text-black px-4">
        <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-bold font-bebas text-accent tracking-wide max-w-xs mb-4 md:mb-0  mr-2 md:mr-10">{header.title}</h1>
      </div>
    </div> */}


  {/* 🔽 TiltImage + About Section below the header */}
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 my-30 px-4 2xl:px-0">
        {/* Left side - Tilt Image */}
        <TiltImage
          src={about.image} // Loaded from Sanity
          alt={about.title}
          className="rounded-lg max-w-xl w-full"
        />

        {/* Right side - Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary font-bebas tracking-wide">{about.title}</h2>
          <div className="text-body">
            <PortableText value={about.content}/>
          </div>
        </div>
    </div>


    <div className="relative h-[50vh] lg:h-[65vh] xl:h-[85vh] container mx-auto px-4 2xl:px-0">
      {/* Main background image from Sanity */}
      
      <div className="header-wrapper-2 w-full h-full">
        <Image
        src={inventory.image}
        alt={inventory.title}
        fill
        className="object-cover rounded-sm"
        priority
      />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-start text-left text-black px-4 mt-0 md:mt-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 font-bebas text-accent tracking-wide">{inventory.title}</h1>
        <p className="text-xs md:text-lg mb-6 max-w-xs text-body">{inventory.subtitle}</p>
        <Link
          href={inventory.buttonLink}>
          <span className="inline-block bg-[#82302a] text-white font-semibold tracking-wide px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">{inventory.buttonText}</span>
        </Link>
      </div>
    </div>


 
  {/* 🔽 TiltImage + About Section below the header */}
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 my-30 px-4 2xl:px-0">
        {/* Left side - Tilt Image */}
        <Image
          src="/projects.png" // Loaded from Sanity
          alt="Projects"
          width={860}
          height={250}
          className="rounded-lg max-w-2xl w-full"
        />

        {/* Right side - Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary font-bebas tracking-wide">Be Inspired</h2>
          <p className="mb-4 text-body">Explore our various projects, where you will find the unique ways our stone can elevate your space.</p>
         <Link href="/projects">
          <span className="inline-block bg-[#82302a] text-white font-semibold tracking-wide px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
           Discover Our Projects
         </span>
         </Link>
        </div>
    </div>

     {/* ✅ Features Section added here */}
      <FeaturesSection />
      <BrandsCarousel/>
      <ReviewsCarousel/>
    </>
  );
}