export default function NosotrosEquipo() {
    return (
        <section className="relative w-full h-[773px] bg-white mb-[29px]">
            {/* Esta seccion "Conocé nuestro equipo" iba top 1690. Visión era h 658 + top 1003 = 1661. Margen superior = 29px (usado como marginBottom en Vision). */}

            {/* Título: conocé nuestro equipo */}
            <div className="absolute left-[25px] top-[67px] w-[512px] h-[53px]">
                <h2
                    className="absolute left-[60px] top-[4px] text-black m-0"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 400,
                        fontSize: '36px',
                        lineHeight: '46px',
                        textTransform: 'capitalize'
                    }}
                >
                    conocé nuestro equipo
                </h2>
                {/* Líneas adornando el título */}
                <div className="absolute left-[485px] top-[32px] w-[30px] border-t border-black"></div>
                <div className="absolute left-[492px] top-[27px] w-[30px] border-t border-black"></div>
            </div>

            {/* Team 2 (Alejandro) - Image Container */}
            <div className="absolute left-[342px] top-[199px] w-[360px] h-[436px] bg-white overflow-hidden shadow-sm">
                <div className="absolute left-[0px] top-[0px] w-[375px] h-[562px] bg-[#D9D9D9] flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-base">Imagen Alejandro (375x562)</span>
                </div>
            </div>

            {/* Team 2 (Alejandro) - Label Box */}
            <div className="absolute left-[422px] top-[647px] w-[200px] h-[55px] bg-white drop-shadow-md">
                <h3
                    className="absolute left-[30px] top-[8px] text-black text-center w-[138px]"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '16px', lineHeight: '20px' }}
                >
                    Alejandro Saldivar
                </h3>
                <p
                    className="absolute left-[36px] top-[28px] text-black text-center w-[126px]"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}
                >
                    Asesor Real Estate
                </p>
            </div>

            {/* Team 3 (Carolina) - Image Container */}
            <div className="absolute left-[756px] top-[199px] w-[360px] h-[436px] bg-white overflow-hidden shadow-sm">
                <div className="absolute left-[0px] top-[-50px] w-[360px] h-[540px] bg-[#D9D9D9] flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-base">Imagen Carolina (360x540)</span>
                </div>
            </div>

            {/* Team 3 (Carolina) - Label Box */}
            <div className="absolute left-[836px] top-[651px] w-[200px] h-[55px] bg-white drop-shadow-md">
                <h3
                    className="absolute left-[38px] top-[8px] text-black text-center w-[123px]"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '16px', lineHeight: '20px' }}
                >
                    Carolina Bianchi
                </h3>
                <p
                    className="absolute left-[57px] top-[28px] text-black text-center w-[85px]"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px', lineHeight: '18px' }}
                >
                    Operaciones
                </p>
            </div>

        </section>
    );
}
