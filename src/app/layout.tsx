import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Soar",
  description:
    "Discover Soar, your trusted partner in crafting stunning online identities for local businesses. We specialize in designing unique, visually captivating websites that showcase your brand, attract customers, and elevate your digital presence. Whether you're starting fresh or looking to revamp, Soar delivers customized solutions tailored to your needs. Let us help your business stand out online with websites that combine beauty, functionality, and innovation.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "300", "500", "900", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth px-4 md:px-10 " lang="en">
      <body
        className={`${roboto.className} bg-mainColor container mx-auto scroll-smooth `}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
