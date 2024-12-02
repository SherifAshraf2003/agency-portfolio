import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
    <html lang="en">
      <body className={`${roboto.className} bg-mainColor container mx-auto `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
