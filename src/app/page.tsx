import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Proyectos from "@/components/Proyectos";
import NuestraPropuesta from "@/components/NuestraPropuesta";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#FAFAFA]">
      <Hero />
      <Nosotros />
      <Proyectos />
      <NuestraPropuesta />
      <Stats />
    </div>
  );
}
