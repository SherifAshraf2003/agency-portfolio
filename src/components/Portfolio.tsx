"use client";

import Image from "next/image";
import portfolio1 from "../../public/portfolio1.png";
import portfolio2 from "../../public/portfolio2.png";
import portfolio3 from "../../public/portfolio3.jpg";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Portfolio = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateIndex = () => {
      const selectedIndex = api.selectedScrollSnap();
      setIndex(selectedIndex);
      console.log("Current Index:", selectedIndex);
    };

    api.on("select", updateIndex);

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <div id="portfolioContainer1" className="text-white w-fit mx-auto h-screen">
      <h1 className="text-5xl font-semibold text-center">
        Our <span className="text-secondaryColor italic">Portfolio</span>
      </h1>

      <Carousel
        setApi={setApi}
        className="w-[50vw] h-[70vh] my-10 text-secondaryColor"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="h-[70vh] flex justify-center">
              <Image
                className="w-fit h-[70vh]"
                src={portfolio1}
                alt="portfolio website"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[70vh] flex justify-center">
              <Image
                className="w-fit h-[70vh]"
                src={portfolio2}
                alt="portfolio website"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-[70vh] flex justify-center">
              <Image
                className="w-fit h-[70vh]"
                src={portfolio3}
                alt="portfolio website"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Pagination Indicator */}
      <div className="flex justify-center gap-3 pb-5">
        {[0, 1, 2].map((dotIndex) => (
          <div
            key={dotIndex}
            className={`h-2 w-2 rounded-full transition ${
              index === dotIndex ? "bg-white scale-150 " : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Button
          id="portfolioButton"
          className="bg-secondaryColor mt-5 text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor w-fit mx-auto "
        >
          Check Plans
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
