import Link from 'next/link'
import { Proyecto } from '@/data/proyectos'

export default function MasProyectos({ proyectos }: { proyectos: Proyecto[] }) {
    return (
        <section className="w-full bg-white py-[80px]">
            <div className="max-w-[1240px] mx-auto px-[80px]">

                {/* Título */}
                <p
                    className="text-[#0F0F0F] uppercase tracking-widest mb-[32px]"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '18px',
                    }}
                >
                    MÁS PROYECTOS
                </p>

                {/* Carrusel visual */}
                <div className="flex flex-row items-center gap-[8px]">

                    {/* Flecha izquierda */}
                    <button
                        className="flex-shrink-0 text-[#0F0F0F] text-[24px] px-[8px] opacity-60 hover:opacity-100 transition-opacity"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        aria-label="Anterior"
                    >
                        ‹
                    </button>

                    {/* Cards */}
                    <div className="flex flex-row gap-[24px] overflow-hidden flex-1">
                        {proyectos.map((p) => (
                            <Link
                                key={p.slug}
                                href={`/proyectos/${p.slug}`}
                                className="flex flex-col gap-[12px] flex-shrink-0 group"
                            >
                                <div className="w-[280px] h-[200px] bg-[#D9D9D9] group-hover:opacity-90 transition-opacity" />
                                <p
                                    className="text-[#0F0F0F] m-0"
                                    style={{
                                        fontFamily: 'var(--font-space-grotesk)',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                    }}
                                >
                                    {p.nombre}
                                </p>
                            </Link>
                        ))}
                    </div>

                    {/* Flecha derecha */}
                    <button
                        className="flex-shrink-0 text-[#0F0F0F] text-[24px] px-[8px] opacity-60 hover:opacity-100 transition-opacity"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        aria-label="Siguiente"
                    >
                        ›
                    </button>

                </div>
            </div>
        </section>
    )
}
