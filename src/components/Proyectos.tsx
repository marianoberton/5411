export default function Proyectos() {
    return (
        <section id="proyecto" className="relative w-full h-[916px] flex justify-center overflow-hidden bg-[#FAFAFA]">
            <div className="relative w-full max-w-[1440px] h-full mx-auto">

                {/* Título: PROYECTO -> PROYECTOS */}
                {/* En el figma dice "PROYECTO" is the container, "PROYECTOS" is the text */}
                <div className="absolute left-[220px] top-[101px] w-[196.57px] h-[40.8px]">
                    <h2
                        className="absolute left-0 top-0 text-black"
                        style={{
                            fontFamily: 'var(--font-bellefair)',
                            fontWeight: 400,
                            fontSize: '33.38px',
                            lineHeight: '38px',
                            width: '189px',
                            height: '38px'
                        }}
                    >
                        PROYECTOS
                    </h2>
                </div>

                {/* Texto descriptivo y decorador */}
                {/* top ~ 434px en base a bottom: 333.65 de 916. Usaremos bottom 333.65px como manda el CSS */}
                <div className="absolute left-[186px] bottom-[333.65px] w-[514.6px] h-[148.35px]">
                    <p
                        className="absolute left-[175.24px] top-0 text-black"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '22.25px',
                            lineHeight: '28px',
                            width: '339.36px',
                            height: '112px'
                        }}
                    >
                        Elegimos los mejores barrios para cada uno de nuestros proyectos, para acercarte lo mejor de la ciudad.
                    </p>
                    <div
                        className="absolute left-[123px] top-[12px] bg-[#0434B2]"
                        style={{ width: '5.56px', height: '37.09px' }}
                    ></div>
                </div>

                {/* Botón Ver proyectos */}
                {/* Frame 32 */}
                <button
                    className="absolute left-[355px] top-[563px] flex flex-row justify-center items-center bg-[#F8F5EC] text-black hover:bg-[#eae8e0] transition-colors"
                    style={{
                        padding: '9.27px',
                        gap: '9.27px',
                        width: '163px',
                        height: '38.54px',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '20px'
                    }}
                >
                    Ver proyectos
                </button>

                {/* Contenedor Imágenes Derecha */}
                <div
                    className="absolute top-[194px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center"
                    style={{
                        width: '677.79px',
                        height: '627.72px',
                        left: 'calc(50% - 338.895px + 287.39px)' /* 50% - ancho/2 + offset del figma */
                    }}
                >
                    <span className="text-gray-500 font-sans text-sm">Imagen Provisoria Proyecto (678x628)</span>
                </div>

            </div>
        </section>
    );
}
