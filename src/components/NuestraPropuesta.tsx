export default function NuestraPropuesta() {
    return (
        <section id="propuesta" className="relative w-full h-[916px] flex justify-center overflow-hidden bg-[#FAFAFA]">
            <div className="relative w-full max-w-[1440px] h-full mx-auto">

                {/* Título: NUESTRA PROPUESTA */}
                <div className="absolute left-[1009px] top-[159px] w-[338px] h-[38px]">
                    <h2
                        className="absolute left-0 top-0 text-black"
                        style={{
                            fontFamily: 'var(--font-bellefair)',
                            fontWeight: 400,
                            fontSize: '33.18px',
                            lineHeight: '38px',
                            width: '338px',
                            height: '38px'
                        }}
                    >
                        NUESTRA PROPUESTA
                    </h2>
                </div>

                {/* Texto descriptivo y decorador */}
                <div className="absolute left-[885px] top-[511px] w-[293.45px] h-[128px]">
                    <p
                        className="absolute left-[46.45px] top-0 text-black"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '22.12px',
                            lineHeight: '145%',
                            letterSpacing: '-0.005em',
                            width: '247px',
                            height: '128px'
                        }}
                    >
                        Estamos con vos en cada paso del proceso de inversión en bienes raíces.
                    </p>
                    <div
                        className="absolute left-[0px] top-[15px] bg-[#0434B2]"
                        style={{ width: '5.53px', height: '36.87px' }}
                    ></div>
                </div>

                {/* Botón Nuestra propuesta */}
                <button
                    className="absolute left-[931px] top-[651px] flex flex-row justify-center items-center bg-[#F8F5EC] text-black hover:bg-[#eae8e0] transition-colors"
                    style={{
                        padding: '9.27px',
                        gap: '9.27px',
                        width: '174px',
                        height: '38.54px',
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 300,
                        fontSize: '16px',
                        lineHeight: '20px'
                    }}
                >
                    Nuestra propuesta
                </button>

                {/* Contenedor Imagen Izquierda Principal */}
                <div
                    className="absolute left-[165px] top-[269px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center"
                    style={{ width: '673.71px', height: '623.94px' }}
                >
                    <span className="text-gray-500 font-sans text-sm">Imagen Provisoria Operario (674x624)</span>
                </div>

                {/* Imagen Inferior superpuesta */}
                <div
                    className="absolute left-[132px] bottom-[51.2px] bg-[#C4C4C4] border border-white opacity-90 overflow-hidden flex items-center justify-center"
                    style={{ width: '678.51px', height: '452.39px', zIndex: 10 }}
                >
                    <span className="text-gray-500 font-sans text-sm">Imagen Secundaria HDR (679x452)</span>
                </div>

            </div>
        </section>
    );
}
