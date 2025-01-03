"use client";
import Image from "next/image";
import heroImage from "../../../public/Desktop.svg";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MeetingButton from "../MeetingButton";
import { useState } from "react";

const Hero = () => {
  const [delay] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#heroButton", {
      opacity: 1,
      duration: 1,
      delay: delay,
    });
  }, [delay]); // Add delay as dependency

  const words = `Drive growth and success with our innovative, data-driven solutions.`;

  return (
    <div className="text-white container flex gap-5  pt-10 md:pt-32   ">
      <div className=" w-full md:pt-10 pt-10  ">
        <h1 className=" md:w-[390px] text-2xl md:text-7xl leading-tight tracking-tight  font-semibold text-pretty">
          Elevate Your Business,{" "}
          <span className="text-secondaryColor mr-2 md:mr-5 font-extrabold italic  ">
            Soar
          </span>
          Higher
        </h1>

        <TextGenerateEffect words={words} filter={true} />
        <MeetingButton
          id="heroButton"
          className="bg-secondaryColor  md:mt-8  md:text-2xl py-5  md:py-7 px-6 md:px-9 rounded-xl hover:bg-white hover:text-secondaryColor opacity-0 items-center justify-center w-fit "
        >
          Get Started
        </MeetingButton>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={heroImage}
          alt="hero icon"
          className="w-auto h-auto md:h-[1500] md:w-[2000px] "
        />
      </div>
    </div>
  );
};

export default Hero;
