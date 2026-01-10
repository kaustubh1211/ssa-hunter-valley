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

export const metadata = {
  title: "Home - SSA Hunter Valley Tennis Academy",
  description: "Train with world-class professionals at SSA Hunter Valley. 60 multi-surface courts, expert coaching, and complete tennis facilities in NSW, Australia.",
};

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">SSA Hunter Valley - Premier Tennis Academy with 60 Multi-Surface Courts</h1>
      <Navbar/>
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