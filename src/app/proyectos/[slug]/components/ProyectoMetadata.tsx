import { Proyecto } from '@/data/proyectos'

export default function ProyectoMetadata({ proyecto }: { proyecto: Proyecto }) {
    return (
        <section className="w-full bg-white py-[48px]">
            <div className="max-w-[1240px] mx-auto px-[80px] flex flex-row items-start gap-[80px]">
                {/* Año */}
                <p
                    className="text-[#0F0F0F] m-0"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '22px',
                    }}
                >
                    2022
                </p>

                {/* Locación */}
                <div className="flex flex-col gap-[4px]">
                    <span
                        className="text-[#0F0F0F] tracking-widest uppercase"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 500,
                            fontSize: '11px',
                            lineHeight: '16px',
                        }}
                    >
                        LOCACIÓN
                    </span>
                    <p
                        className="text-[#0F0F0F] m-0"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '22px',
                        }}
                    >
                        {proyecto.ubicacion}
                    </p>
                </div>
            </div>
        </section>
    )
}
