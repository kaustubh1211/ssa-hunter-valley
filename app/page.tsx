import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/section/Aboutus";
import Hero from "@/components/section/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AboutUs/>
   </main>
  );
}
