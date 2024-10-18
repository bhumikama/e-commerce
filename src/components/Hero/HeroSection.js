"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Sample banner data for the carousel
const banners = [
  {
    id: 1,
    image: "/slider_one.jpg",
    collection: "Autumn / Winter Collection 2024",
    offer: "Get up to 30% Off New Arrivals",
  },
  {
    id: 2,
    image: "/slider_2.jpg",
    collection: "Autumn Collection 2024",
    offer: "Exclusive 20% Off Autumn Fashion",
  },
  {
    id: 3,
    image: "/slider_3.jpg",
    collection: "Winter Special 2024",
    offer: "Enjoy 25% Off Winter Styles",
  },
];
// HeroSection component for displaying promotional banners
export default function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="mx-4 border-2 px-3">
      <Carousel
        plugins={[autoplay.current]}
        className="relative w-full h-[50vh]"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="w-full h-[50vh]">
              <div
                className="w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `url(${banner.image})`,
                  backgroundSize: "contain",
                }}
              >
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="text-start text-black space-y-4">
                    <h6 className="text-lg">{banner.collection}</h6>
                    <h1 className="text-3xl font-bold">{banner.offer}</h1>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="bg-red-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-red-600"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
