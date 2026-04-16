export default function NosotrosVision() {
    return (
        <section className="relative w-full h-[658px] bg-white mb-[29px] mt-[160px]">
            {/* Margen top de 160px respecto al hero (1003 - 843 = 160) */}

            {/* Texto-proyectos Contenedor */}
            <div className="absolute left-[244px] top-[231px] w-[411.49px] h-[184px]">
                {/* Línea Azul */}
                <div
                    className="absolute left-[0px] top-[10px] bg-[#0434B2]"
                    style={{ width: '4.57px', height: '30.49px' }}
                ></div>

                {/* Párrafo */}
                <p
                    className="absolute left-[44.49px] top-[0px] text-black m-0"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 300,
                        fontSize: '18.29px',
                        lineHeight: '23px',
                        width: '367px',
                        height: '184px'
                    }}
                >
                    Nos especializamos en brindar soluciones integrales, asegurando calidad, eficiencia y compromiso en cada proyecto. Construimos más que obras: forjamos relaciones de confianza con nuestros clientes, acompañándolos en cada etapa y resolviendo cada detalle con precisión y transparencia.
                </p>
            </div>

            {/* Team 1 (Mauro) Image - Top 1074 absolute -> 1074 - 1003 = 71px relativos a la seccion */}
            <div className="absolute left-[790px] top-[71px] w-[414px] h-[504px] bg-white overflow-hidden shadow-sm">
                <div className="absolute left-[-7px] top-[-48px] w-[421px] h-[632px] bg-[#D9D9D9] flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-lg">Imagen Mauro Carlos Bianchi (421x632)</span>
                </div>
            </div>

            {/* Etiqueta Mauro Carlos Bianchi */}
            <div className="absolute left-[902px] top-[589px] flex items-center gap-[49px]">
                <h3
                    className="text-black inline-block whitespace-nowrap m-0"
                    style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20px'
                    }}
                >
                    Mauro Carlos Bianchi
                </h3>
                {/* En Figma hay un Frame 7 con gap 49px pero sin mas contenido obvio mas que el texto, o quiza el cargo. 
            Aca lo dejamos tal cual o añadimos linea si la hay. Figma no indica cargo especifico aca como los otros. */}
            </div>

        </section>
    );
}
