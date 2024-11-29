import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Features />
      <Portfolio />
    </div>
  );
}
