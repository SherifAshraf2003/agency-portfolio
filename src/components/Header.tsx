"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Rokkitt } from "next/font/google";
import Features from "./Features";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        <Button
          className="bg-secondaryColor md:flex hidden text-md px-5 hover:bg-white hover:text-secondaryColor "
          size="lg"
        >
          Get Started
        </Button>
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
