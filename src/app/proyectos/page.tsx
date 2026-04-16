import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProyectosHero from "./components/ProyectosHero";
import ProyectosFiltros from "./components/ProyectosFiltros";
import ProyectoLosIncas from "./components/ProyectoLosIncas";
import ProyectoMaterDei from "./components/ProyectoMaterDei";
import ProyectosArias from "./components/ProyectosArias";
import ProyectoOficinasSucre from "./components/ProyectoOficinasSucre";

export default function ProyectosPage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FAFAFA]">
            <Header />

            {/* Contenedor principal de la página con el max-width del Figma */}
            <main className="w-full max-w-[1440px] relative flex flex-col pb-[120px] bg-white">
                <ProyectosHero />
                <ProyectosFiltros />

                <ProyectoLosIncas />
                <ProyectoMaterDei />
                <ProyectosArias />
                <ProyectoOficinasSucre />
            </main>

            <Footer />
        </div>
    );
}
