import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/section/Aboutus";
import AdoptNurture from "@/components/section/AdouptNatureHeading";
import CoachesEvents from "@/components/section/Cochesevent";
import Facilities from "@/components/section/Facilities";
import FeaturesSection from "@/components/section/Feature";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import Location from "@/components/section/Location";
import Professionals from "@/components/section/Professionals";
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
    <Location/>
    <Professionals/>
    <Facilities/>
    <CoachesEvents/>
    <Footer/>
   </main>
  );
}
