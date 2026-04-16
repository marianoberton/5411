import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NosotrosHero from "./components/NosotrosHero";
import NosotrosVision from "./components/NosotrosVision";
import NosotrosEquipo from "./components/NosotrosEquipo";
import NosotrosNumeros from "./components/NosotrosNumeros";

export default function NosotrosPage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FAFAFA]">
            <Header />

            {/* Contenedor principal de la página con el max-width del Figma */}
            <main className="w-full max-w-[1440px] relative flex flex-col bg-white">
                <NosotrosHero />
                <NosotrosVision />
                <NosotrosEquipo />
                <NosotrosNumeros />
            </main>

            <Footer />
        </div>
    );
}
