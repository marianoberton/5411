import { Proyecto } from '@/data/proyectos'

export default function ProyectoGaleriaPanoramica({ proyecto: _ }: { proyecto: Proyecto }) {
    return (
        <section className="w-full bg-[#ECEAE3] py-[48px]">
            <div className="max-w-[1440px] mx-auto px-[80px] flex flex-row gap-3 justify-center">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="w-[380px] h-[260px] bg-[#D9D9D9] flex-shrink-0" />
                ))}
            </div>
        </section>
    )
}
