import React from 'react'
import Link from 'next/link';

const ProductsOrders = () => {
  return (
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
            src="/tiles.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductsOrders
