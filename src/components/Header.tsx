import { Button } from "./ui/button";
import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="text-white  ">
      <div className="border-b-[1px] border-white/40 flex justify-between items-center mx-20 py-6">
        <h1 className="text-secondaryColor font-bold text-4xl ">
          <p className={rokkitt.className}>Soar</p>
        </h1>
        <nav className="flex justify-between gap-10 font-thin text-selectionOff  tracking-wider ">
          <div className="hover:text-white transition duration-75 cursor-pointer">
            Services
          </div>
          <div className="hover:text-white transition duration-75 cursor-pointer">
            Portfolio
          </div>
          <div className="hover:text-white transition duration-75 cursor-pointer">
            Plans
          </div>
          <div className="hover:text-white transition duration-75 cursor-pointer">
            FAQ
          </div>
        </nav>
        <Button
          className="bg-secondaryColor text-md px-5 hover:bg-white hover:text-secondaryColor "
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
