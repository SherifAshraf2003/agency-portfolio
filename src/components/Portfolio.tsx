"use client";
import Image, { StaticImageData } from "next/image";
import portfolio1 from "../../public/Portfolio1.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Img({ id, src }: { id: number; src: StaticImageData }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const header = headerRef.current;

    // GSAP animation
    gsap.fromTo(
      header,
      { y: 300, opacity: 0 }, // Starting position (parallax effect)
      {
        y: -300, // Ending position
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // When the top of the section hits the bottom of the viewport
          end: "bottom top", // When the bottom of the section exits the top of the viewport
          scrub: true, // Smooth animation tied to scroll
        },
      }
    );
  });

  return (
    <section ref={sectionRef} className="mb-20 w-full">
      <div>
        <Image
          className=" w-full"
          src={portfolio1}
          alt="first project in portfolio"
        />
      </div>
      <h2 ref={headerRef}>{`#00${id}`}</h2>
    </section>
  );
}

const Portfolio = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-semibold text-center mb-20">
        Our <span className="text-secondaryColor italic"> Portfolio </span>
      </h1>
      <Img id={1} src={portfolio1} />
    </div>
  );
};

export default Portfolio;
