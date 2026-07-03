import Hero from '@/components/Hero'
import NosotrosCollage from '@/components/home/NosotrosCollage'
import ProyectosPreview from '@/components/home/ProyectosPreview'
import ProyectosShowcase from '@/components/home/ProyectosShowcase'
import NuestraPropuesta from '@/components/home/NuestraPropuesta'
import Stats from '@/components/home/Stats'

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FAFAFA]">
            <Hero />
            <NosotrosCollage />
            <ProyectosPreview />
            <ProyectosShowcase />
            <NuestraPropuesta />
            <Stats />
        </div>
    )
}
