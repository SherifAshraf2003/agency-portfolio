import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PaymentPlans from "@/components/PaymentPlans";
import Portfolio from "@/components/Portfolio";

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
