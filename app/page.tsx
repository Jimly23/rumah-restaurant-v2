import Navbar from "@/src/components/Navbar";
import AboutSection from "@/src/sections/About"
import Contact from "@/src/sections/Contact";
import Delivery from "@/src/sections/Delivery";
import Events from "@/src/sections/Events";
import FoodGallery from "@/src/sections/FoodGalery";
import Footer from "@/src/sections/Footer";
import Hero from "@/src/sections/Hero";
import Menu from "@/src/sections/Menu";
import Testimonials from "@/src/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about" className="scroll-mt-24"><AboutSection /></div>
      <div id="food-gallery" className="scroll-mt-24"><FoodGallery /></div>
      <div id="events" className="scroll-mt-24"><Events /></div>
      <div id="menu" className="scroll-mt-24"><Menu /></div>
      <div id="delivery" className="scroll-mt-24"><Delivery /></div>
      <div id="testimonials" className="scroll-mt-24"><Testimonials /></div>
      <div id="contact" className="scroll-mt-24"><Contact /></div>
      <Footer />
    </>
  );
}
