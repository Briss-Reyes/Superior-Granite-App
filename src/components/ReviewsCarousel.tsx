"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import { getHomeReviews } from "../../sanity/sanity-utils";

interface Review {
  title: string;    // Author
  subtitle: string; // Review
}

const ReviewsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 2,
      startDelay: 1000,
      direction: "forward",
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await getHomeReviews();
      setReviews(reviewsData || []);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", () => console.log("Embla initialized"));
  }, [emblaApi]);

  return (
    <section className="mb-16 px-4 mt-16">
      <h2 className="mt-2 text-5xl lg:text-7xl font-bold text-accent font-bebas tracking-widest text-center">
        What Our Clients Say
      </h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="embla__slide px-4 py-6 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <p className="text-gray-800 text-sm italic text-center mb-4">
                  “{review.subtitle}”
                </p>
                <p className="text-center font-semibold text-gray-700">
                  — {review.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
