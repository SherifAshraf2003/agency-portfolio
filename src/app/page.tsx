import Features from "@/components/Features";
import Main from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Main />
      <Features />
      <Portfolio />
    </div>
  );
}
