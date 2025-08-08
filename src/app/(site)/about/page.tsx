import ReviewsCarousel from '@/components/ReviewsCarousel'
import { getAboutPage } from "../../../../sanity/sanity-utils";
import {PortableText} from "@portabletext/react";
import Link from 'next/link'
import React from 'react'
import AboutTrinity from '@/components/AboutTrinity';
import AboutCounter from '@/components/AboutCounter';

export default async function about() {
  const aboutPage = await getAboutPage();
  return (
<>
   <section className="container mx-auto mt-30">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-700 sm:text-lg">
          <h2 className="mt-2 text-5xl lg:text-7xl font-bold text-accent font-bebas tracking-widest">
            {aboutPage.title}
          </h2>
          <div className='text-ms'>
             <PortableText value={aboutPage.content}/>
          </div>
       
         
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src={aboutPage.image1}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={aboutPage.image2}
            alt="office content 2"
          />
        </div>
      </div>
    </section>

    <AboutTrinity/>
    <AboutCounter/>


     <section className="container mx-auto">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Text content */}
        <div className="mx-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-accent font-bebas tracking-widest">
            Custom order
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
            For specific inquiries such as stones not currently in stock or large quantities we are more than happy to assist and are ready to work with our clients on any custom orders they might have
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/contact">
          <span className="inline-block bg-[#82302a] text-white font-semibold tracking-wide px-6 py-3 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Contact Us </span>
        </Link>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/list.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>

     <ReviewsCarousel/>
</>
  )
}


