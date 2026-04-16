export default function ProyectosFiltros() {
    return (
        <section className="relative w-full h-[135px] mt-[186px] flex items-center bg-transparent">
            {/* 1046px del top - 860px del hero = 186px de margen o de posicionamiento relativo */}

            {/* PROYECTOS Título */}
            <h2
                className="absolute left-[80px]"
                style={{
                    fontFamily: 'var(--font-bellefair)',
                    fontWeight: 400,
                    fontSize: '36px',
                    lineHeight: '41px',
                    color: '#000000'
                }}
            >
                PROYECTOS
            </h2>

            {/* Contenedor de Filtros */}
            <div className="absolute right-[115px] flex flex-row items-center justify-end px-[42px] py-[3px]">

                {/* Barrio */}
                <div className="flex flex-row justify-center items-center px-[10px] pr-[45px] gap-[39px] h-[46px] cursor-pointer">
                    <span
                        className="text-black"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '26px'
                        }}
                    >
                        Barrio
                    </span>
                    {/* Flecha hacia abajo */}
                    <div className="w-[15.83px] h-[8.5px] border-b-2 border-r-2 border-black transform rotate-45 -translate-y-1"></div>
                </div>

                {/* Etapa de obra */}
                <div className="flex flex-row justify-center items-center px-[10px] pr-[45px] gap-[39px] h-[46px] cursor-pointer">
                    <span
                        className="text-black whitespace-nowrap"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '26px'
                        }}
                    >
                        Etapa de obra
                    </span>
                    <div className="w-[15.83px] h-[8.5px] border-b-2 border-r-2 border-black transform rotate-45 -translate-y-1"></div>
                </div>

                {/* Tipología */}
                <div className="flex flex-row justify-center items-center px-[10px] pr-[45px] gap-[39px] h-[46px] cursor-pointer">
                    <span
                        className="text-black"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '26px'
                        }}
                    >
                        Tipología
                    </span>
                    <div className="w-[15.83px] h-[8.5px] border-b-2 border-r-2 border-black transform rotate-45 -translate-y-1"></div>
                </div>

            </div>
        </section>
    );
}
