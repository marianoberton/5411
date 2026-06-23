import { Proyecto } from '@/data/proyectos'

export default function ProyectoHero({ proyecto }: { proyecto: Proyecto }) {
    return (
        <section className="relative w-full h-[500px] bg-[#2A2A2A] overflow-hidden flex items-end justify-center pb-[60px]">
            {/* Placeholder imagen de fondo */}
            <div className="absolute inset-0 bg-[#2A2A2A]" />

            {/* Título */}
            <h1
                className="relative z-10 text-white text-center"
                style={{
                    fontFamily: 'var(--font-bellefair)',
                    fontWeight: 400,
                    fontSize: '80px',
                    lineHeight: '86px',
                }}
            >
                {proyecto.nombre.toUpperCase()}
            </h1>
        </section>
    )
}
