import Link from 'next/link'

export default function ProyectoCTA() {
    return (
        <section className="w-full bg-[#ECEAE3] py-[80px]">
            <div className="max-w-[1240px] mx-auto px-[80px] flex flex-col gap-[32px]">

                {/* Fila: dash azul + título */}
                <div className="flex flex-row items-center gap-[16px]">
                    <span
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 400,
                            fontSize: '40px',
                            color: '#0434B2',
                            lineHeight: '1',
                        }}
                    >
                        —
                    </span>
                    <h2
                        className="text-[#0F0F0F] m-0"
                        style={{
                            fontFamily: 'var(--font-bellefair)',
                            fontWeight: 400,
                            fontSize: '40px',
                            lineHeight: '46px',
                        }}
                    >
                        Construimos tus sueños
                    </h2>
                </div>

                {/* Botón */}
                <div>
                    <Link
                        href="/contacto"
                        className="inline-block bg-[#0F0F0F] text-white px-[24px] py-[12px] hover:bg-[#2a2a2a] transition-colors"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 400,
                            fontSize: '14px',
                            borderRadius: '2px',
                        }}
                    >
                        Hablá con nosotros
                    </Link>
                </div>

            </div>
        </section>
    )
}
