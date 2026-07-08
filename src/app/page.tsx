import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Exhibition from "@/sections/Exhibition";
import Brands from "@/sections/Brands";
import BecomeExhibitor from "@/sections/BecomeExhibitor";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#070707] text-white">
      <Hero />

      <About />

      <Exhibition />

      <Brands />

      <BecomeExhibitor />

      <Contact />

      <Footer />
    </main>
  );
}
