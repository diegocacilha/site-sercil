import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductivityStory from "@/components/ProductivityStory";
import FutureStory from "@/components/FutureStory";
import Garantias from "@/components/Garantias";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductivityStory />
      <Services />   
      <Garantias />  
      <FutureStory />
    </>
  );
}