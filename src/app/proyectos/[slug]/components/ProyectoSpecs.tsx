import { Proyecto } from '@/data/proyectos'

export default function ProyectoSpecs({ proyecto }: { proyecto: Proyecto }) {
    return (
        <section className="w-full bg-[#ECEAE3] py-[80px]">
            <div className="max-w-[1240px] mx-auto px-[80px] flex flex-row gap-[60px] items-start">

                {/* Columna izquierda — specs texto */}
                <div className="flex flex-col gap-[32px]" style={{ width: '40%' }}>

                    <div className="flex flex-col gap-[8px]">
                        <h3
                            className="text-[#0F0F0F] uppercase m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '18px',
                            }}
                        >
                            EL EDIFICIO
                        </h3>
                        <p
                            className="text-[#0F0F0F] m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 300,
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
                            {/* TODO: completar con datos reales del edificio */}
                            {proyecto.descripcion}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <h3
                            className="text-[#0F0F0F] uppercase m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '18px',
                            }}
                        >
                            UNIDADES
                        </h3>
                        <p
                            className="text-[#0F0F0F] m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 300,
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
                            {/* TODO: completar con datos reales de unidades */}
                            {proyecto.descripcion}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <h3
                            className="text-[#0F0F0F] uppercase m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '18px',
                            }}
                        >
                            AMENITIES
                        </h3>
                        <p
                            className="text-[#0F0F0F] m-0"
                            style={{
                                fontFamily: 'var(--font-space-grotesk)',
                                fontWeight: 300,
                                fontSize: '14px',
                                lineHeight: '20px',
                            }}
                        >
                            {/* TODO: completar con datos reales de amenities */}
                            {proyecto.descripcion}
                        </p>
                    </div>

                </div>

                {/* Columna derecha — grid 2×3 de imágenes */}
                <div className="grid grid-cols-2 gap-2" style={{ width: '60%' }}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="w-full h-[180px] bg-[#D9D9D9]" />
                    ))}
                </div>

            </div>
        </section>
    )
}
