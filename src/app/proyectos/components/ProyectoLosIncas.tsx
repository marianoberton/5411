export default function ProyectoLosIncas() {
    return (
        <section className="relative w-full h-[1011px] overflow-hidden bg-white mt-[50px]">

            {/* Título LOS INCAS */}
            <div className="absolute left-[140px] top-[936px] flex flex-row items-center gap-[13.59px]">
                <h2
                    className="text-black inline-block whitespace-nowrap"
                    style={{
                        fontFamily: 'var(--font-bellefair)',
                        fontWeight: 400,
                        fontSize: '29px',
                        lineHeight: '33px',
                        height: '33px'
                    }}
                >
                    LOS INCAS
                </h2>
                <div
                    className="border-t border-black w-[27.19px]"
                    style={{ borderWidth: '0.906px' }}
                ></div>
            </div>

            {/* Calle, altura y barrio */}
            <div
                className="absolute left-[1162.29px] top-[939.19px] text-black"
                style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 300,
                    fontSize: '14.5px',
                    lineHeight: '19px',
                }}
            >
                Calle, altura y barrio
            </div>

            {/* Contenedor Imagen Los Incas */}
            <div className="absolute left-[140px] top-[35px] w-[1160px] h-[886px] bg-white overflow-hidden flex items-center justify-center">
                {/* Usamos top 35px en el div relativo superior en vez de 1216 absoluto desde arriba del header para mantenerlo en su seccion */}
                <div
                    className="absolute left-[-90px] top-[0px] w-[1250px] h-[886px] bg-[#D9D9D9] flex items-center justify-center"
                >
                    <span className="text-gray-500 font-sans text-xl">Imagen Proyecto Los Incas (1250x886)</span>
                </div>
            </div>

        </section>
    );
}
