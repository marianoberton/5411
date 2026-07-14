import { proyectos } from '@/data/proyectos'
import ProyectosHero from './components/ProyectosHero'
import ProyectosExplorer from './components/ProyectosExplorer'

export default function ProyectosPage() {
    return (
        <div className="w-full flex flex-col bg-[#FAFAFA]">
            <ProyectosHero />
            <div className="w-full flex flex-col items-center">
                <main className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] relative flex flex-col pb-[120px] bg-white">
                    <ProyectosExplorer proyectos={proyectos} />
                </main>
            </div>
        </div>
    )
}
