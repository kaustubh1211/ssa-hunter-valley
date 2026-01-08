import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/section/Aboutus";
import AdoptNurture from "@/components/section/AdouptNatureHeading";
import FeaturesSection from "@/components/section/Feature";
import Hero from "@/components/section/Hero";
import Programs from "@/components/section/Program";
import Quote from "@/components/section/Quote";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Hero/>
    <AboutUs/>
    <Quote/>
    <FeaturesSection/>
    <Programs/>
    <AdoptNurture/>
   </main>
  );
}
