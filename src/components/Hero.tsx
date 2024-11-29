import Image from "next/image";
import heroImage from "../../public/Desktop.svg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="text-white flex gap-20 pt-[150px] px-[130px]  ">
      <div className=" w-full pt-[50px] ">
        <h1 className=" w-[450px] text-7xl leading-tight tracking-tight  font-semibold text-pretty">
          Elevate Your Business,{" "}
          <span className="text-secondaryColor font-extrabold italic  ">
            Soar
          </span>{" "}
          Higher
        </h1>
        <p className=" text-xl leading-relaxed text-white/70  mt-4 ">
          Unlock your business potential with our innovative solutions. We help
          you reach new heights through strategic growth, digital
          transformation, and data-driven insights.
        </p>
        <Button className="bg-secondaryColor mt-5 text-2xl py-7 px-9 rounded-xl hover:bg-white hover:text-secondaryColor ">
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
