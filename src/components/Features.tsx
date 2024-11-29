"use client";
import Image from "next/image";
import icon1 from "../../public/Icon1.svg";
import icon2 from "../../public/Icon2.svg";
import icon3 from "../../public/Icon3.svg";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { start } from "repl";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: "#container", start: "top 80%" },
    });

    tl.from("#container1", {
      x: -50,
      opacity: 0,
      duration: 0.5,
    })
      .from("#container2", {
        x: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from("#container3", {
        x: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from("#button", {
        opacity: 0,
        duration: 0.5,
      });
  });

  return (
    <div className="container flex flex-col py-72">
      <h1 className="text-white text-5xl font-semibold text-center mb-20">
        Our <span className="italic text-secondaryColor"> Services</span>
      </h1>
      <div
        id="container"
        className="flex flex-col md:flex-row justify-between items-center align-middle text-white pb-16  "
      >
        <div
          id="container1"
          className="text-center flex flex-col  items-center gap-5 "
        >
          <Image src={icon1} alt="icon1" />
          <div className="w-2/3 space-y-3">
            <h2 className=" text-2xl font-semibold">Web Development</h2>
            <p className="text-white/70 text-xl ">
              Create a platform with the best and coolest quality from us.
            </p>
          </div>
        </div>
        <div
          id="container2"
          className="text-center flex flex-col  items-center gap-5 "
        >
          <Image src={icon2} alt="icon2" />
          <div className="w-2/3 space-y-4">
            <h2 className=" text-2xl font-semibold">UI/UX Design</h2>
            <p className="text-white/70 text-xl  ">
              We provide UI/UX Design services, and of course with the best
              quality and prices.
            </p>
          </div>
        </div>
        <div
          id="container3"
          className="text-center flex flex-col  items-center gap-5 "
        >
          <Image src={icon3} alt="icon3" />
          <div className="w-2/3 space-y-4">
            <h2 className=" text-2xl font-semibold">Marketing Plan</h2>
            <p className="text-white/70 text-xl ">
              We provide Graphic Design services, with the best designers
            </p>
          </div>
        </div>
      </div>
      <Button
        id="button"
        className="bg-secondaryColor mt-5 text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor w-fit mx-auto "
      >
        Check Plans
      </Button>
    </div>
  );
};

export default Features;
