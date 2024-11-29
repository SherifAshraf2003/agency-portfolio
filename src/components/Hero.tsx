"use client";
import Image from "next/image";
import heroImage from "../../public/Desktop.svg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#heroButton", {
      opacity: 1,
      duration: 1,
      delay: 5,
    });
  });

  const words = `Unlock your business potential with our innovative solutions. We help you reach new heights through strategic growth, digital transformation, and data-driven insights.`;

  return (
    <div className="text-white flex gap-20 pt-[150px] px-[130px]  ">
      <div className=" w-full pt-[50px] ">
        <h1 className=" w-[390px] text-7xl leading-tight tracking-tight  font-semibold text-pretty">
          Elevate Your Business,{" "}
          <span className="text-secondaryColor font-extrabold italic  ">
            Soar
          </span>{" "}
          Higher
        </h1>

        <TextGenerateEffect words={words} filter={true} />
        <Button
          id="heroButton"
          className="bg-secondaryColor mt-8 text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor opacity-0 "
        >
          Get Started
        </Button>
      </div>
      <div>
        <Image src={heroImage} alt="hero icon" width={1800} height={1500} />
      </div>
    </div>
  );
};

export default Hero;
