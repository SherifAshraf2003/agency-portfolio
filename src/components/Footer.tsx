import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="md:px-20 md:py-6 px-4 py-3 bg-black flex flex-col md:flex-row justify-between items-center gap-3 ">
      <div>
        <h1 className="text-secondaryColor font-bold text-3xl md:text-5xl ">
          <p className={rokkitt.className}>Soar</p>
        </h1>
      </div>
      <div className="flex gap-2 md:gap-5 justify-center items-center text-white/70  md:pl-20 ">
        <p className=" text-[10px] md:text-base cursor-pointer">Support</p>
        <p className=" text-[10px] md:text-base cursor-pointer">
          Privacy Policy
        </p>
        <p className="  text-[10px] md:text-base cursor-pointer">
          Terms and Conditions
        </p>
      </div>
      <div className="text-white/70 text-wrap text-[7px] md:text-base">
        <p className="text-wrap">© 2024 Soar, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
