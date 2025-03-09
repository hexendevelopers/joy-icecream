import Image from "next/image";
import Hero from "../pages/Home/Hero";
import SecondSection from "../pages/Home/SecondSection";
import SectionThree from "../pages/Home/SectionThree";
import SectionFour from "../pages/Home/SectionFour"; 
import SectionFive from "../pages/Home/SectionFive";
import Footer from "../pages/Home/Footer";

export default function Home() {
  return (
    <div className="  flex flex-col">
      <Hero />
      {/* <SecondSection /> */}
      <SectionThree />
      <SectionFour/>
      <SectionFive />
      <Footer/>
    </div>
  );
}
