import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import PaymentPlans from "@/components/sections/PaymentPlans";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Features />
      <Portfolio />
      <PaymentPlans />
    </div>
  );
}
