"use client";
import Link from "next/link";
import { Rokkitt } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MeetingButton from "./MeetingButton";

const rokkitt = Rokkitt({
  subsets: ["latin"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white   ">
      <div className="border-b-[1px] border-white/40 flex justify-between items-center  px-2 py-6 flex-wrap">
        <h1 className="text-secondaryColor font-bold text-4xl ">
          <p className={rokkitt.className}>Soar</p>
        </h1>
        <nav className=" md:flex hidden justify-between gap-10 font-light text-selectionOff  tracking-wider ">
          <Link
            href="#services"
            className="hover:text-white transition duration-75 cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="#portfolioContainer1"
            className="hover:text-white transition duration-75 cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            href="#plans"
            className="hover:text-white transition duration-75 cursor-pointer"
          >
            Plans
          </Link>
        </nav>
        <MeetingButton
          className="bg-secondaryColor hidden md:flex justify-center items-center text-md px-5 hover:bg-white hover:text-secondaryColor"
          id="b"
        >
          Get Started
        </MeetingButton>
        <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="basis-full">
            <nav className="flex items-center justify-center flex-col gap-5 font-light text-selectionOff  tracking-wider">
              <Link
                href="#services"
                className="hover:text-white transition duration-75 cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="#portfolioContainer1"
                className="hover:text-white transition duration-75 cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                href="#plans"
                className="hover:text-white transition duration-75 cursor-pointer"
              >
                Plans
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
