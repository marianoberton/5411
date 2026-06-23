import { Proyecto } from '@/data/proyectos'

export default function ProyectoGaleria({ proyecto }: { proyecto: Proyecto }) {
    return (
        <section className="w-full bg-white py-[48px]">
            <div className="max-w-[1240px] mx-auto px-[80px] flex flex-row gap-[40px] items-start">

                {/* Columna izquierda — imagen grande + descripción */}
                <div className="flex flex-col gap-[24px]">
                    <div className="w-[380px] h-[420px] bg-[#D9D9D9] flex-shrink-0" />
                    <p
                        className="text-[#0F0F0F] m-0"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '15px',
                            lineHeight: '22px',
                            maxWidth: '340px',
                        }}
                    >
                        {proyecto.descripcion}
                    </p>
                </div>

                {/* Columna derecha — imagen pequeña + nombre */}
                <div className="flex flex-col gap-[24px] pt-[40px]">
                    <div className="w-[280px] h-[200px] bg-[#D9D9D9]" />
                    <h2
                        className="text-[#0F0F0F] m-0"
                        style={{
                            fontFamily: 'var(--font-bellefair)',
                            fontWeight: 400,
                            fontSize: '72px',
                            lineHeight: '72px',
                        }}
                    >
                        {proyecto.nombre.split(' ').map((word, i) => (
                            <span key={i} className="block">{word.toUpperCase()}</span>
                        ))}
                    </h2>
                </div>

            </div>
        </section>
    )
}
