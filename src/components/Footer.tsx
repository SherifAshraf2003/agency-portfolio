import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="px-20 py-6 bg-black flex justify-between items-center  ">
      <div>
        <h1 className="text-secondaryColor font-bold text-5xl ">
          <p className={rokkitt.className}>Soar</p>
        </h1>
      </div>
      <div className="flex gap-5 justify-center items-center text-white/70 pl-20 ">
        <p className="cursor-pointer">Support</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Terms and Conditions</p>
      </div>
      <div className="text-white/70">
        <p>© 2024 Soar, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
