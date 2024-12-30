"use client";
import Image from "next/image";
import icon1 from "../../../public/Icon1.png";
import icon2 from "../../../public/Icon2.png";
import icon3 from "../../../public/Icon3.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import MeetingButton from "../MeetingButton";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top 60%",
      },
    });

    tl.from("#container1", {
      x: -50,
      opacity: 0,
      duration: 0.4,
    })
      .from("#container2", {
        x: -50,
        opacity: 0,
        duration: 0.4,
      })
      .from("#container3", {
        x: -50,
        opacity: 0,
        duration: 0.4,
      })
      .from("#button", {
        opacity: 0,
        duration: 0.4,
      });
  });

  return (
    <section id="#services" className=" flex flex-col py-20 md:py-72">
      <h1 className="text-white text-3xl md:text-5xl font-semibold text-center mb-14 md:mb-20">
        Our <span className="italic text-secondaryColor"> Services</span>
      </h1>
      <div
        id="container"
        className="flex flex-col md:flex-row justify-between items-start  gap-9 md:gap-0 text-white pb-16  "
      >
        <div
          id="container1"
          className="text-center flex flex-1 flex-col  items-center gap-2  md:gap-5 "
        >
          <Image height={64} width={64} src={icon1} alt="icon1" />
          <div className="w-2/3 space-y-1 md:space-y-3">
            <h2 className=" text-xl md:text-2xl font-semibold">
              Web Development
            </h2>
            <p className="text-white/70 text-lg md:text-xl ">
              We will create you a fully responsive website with custom designs
              tailored for your business.
            </p>
          </div>
        </div>
        <div
          id="container2"
          className="text-center flex flex-1 flex-col  items-center gap-2  md:gap-5 "
        >
          <Image height={64} width={64} src={icon2} alt="icon2" />
          <div className="w-2/3 space-y-1 md:space-y-3">
            <h2 className=" text-xl md:text-2xl font-semibold">
              AI integration
            </h2>
            <p className="text-white/70 text-lg md:text-xl ">
              We will integrate the latest and best AI technology for your needs
            </p>
          </div>
        </div>
        <div
          id="container3"
          className="text-center flex flex-1 flex-col  items-center gap-2  md:gap-5 "
        >
          <Image height={64} width={64} src={icon3} alt="icon3" />
          <div className="w-2/3 space-y-1 md:space-y-3">
            <h2 className=" text-xl md:text-2xl font-semibold">Hosting</h2>
            <p className="text-white/70 text-lg md:text-xl ">
              We will take care of all the hosting needs for your platform.
            </p>
          </div>
        </div>
      </div>
      <MeetingButton
        id="button"
        className="bg-secondaryColor mt-2  md:mt-5 text-xl md:text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor w-fit mx-auto "
      >
        Get Started
      </MeetingButton>
    </section>
  );
};

export default Features;
