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
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import MeetingButton from "./MeetingButton";

const Portfolio = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    if (!api) return;

    const updateIndex = () => {
      const selectedIndex = api.selectedScrollSnap();
      setIndex(selectedIndex);
    };

    api.on("select", updateIndex);

    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <section
      id="portfolioContainer1"
      className="text-white w-fit mx-auto h-fit flex justify-center items-center flex-col"
    >
      <h1 className="md:text-5xl text-3xl font-semibold text-center">
        Our <span className="text-secondaryColor italic">Portfolio</span>
      </h1>

      <Carousel
        setApi={setApi}
        className="w-[50vw] h-fit my-10 text-secondaryColor"
        plugins={!isMobile ? [plugin.current] : []}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="h-fit flex justify-center">
              <Image
                className="w-fit h-fit"
                src={portfolio1}
                alt="portfolio website"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-fit flex justify-center">
              <Image
                className="w-fit h-fit"
                src={portfolio2}
                alt="portfolio website"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-fit flex justify-center">
              <Image
                className="w-fit h-fit"
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
        <MeetingButton
          id="portfolioButton"
          className="bg-secondaryColor mt-5 text-xl md:text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor w-fit mx-auto "
        >
          Get Started
        </MeetingButton>
      </div>
    </section>
  );
};

export default Portfolio;
