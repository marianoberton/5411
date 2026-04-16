export default function ProyectoMaterDei() {
    return (
        <section className="relative w-full h-[780px] overflow-hidden bg-white mt-[34px]">
            {/* 2226px total absolute top - (860+135+1011+50+34 margins) = 2176 height aproximada anterior.
          Conviene usar section estáticas relativas en lugar de absolute gigantes para mejor flujo en mobile futuro, preservando las posiciones internas de las imágenes absolutas. */}

            {/* Título MATER DEI */}
            <div className="absolute left-[345px] top-[670px] flex flex-row items-center gap-[15px]">
                <h2
                    className="text-black inline-block whitespace-nowrap"
                    style={{
                        fontFamily: 'var(--font-bellefair)',
                        fontWeight: 400,
                        fontSize: '32px',
                        lineHeight: '37px',
                        height: '37px'
                    }}
                >
                    MATER DEI
                </h2>
                <div className="border-t border-black w-[30px] border-[1px]"></div>
            </div>

            {/* Calle, altura y barrio */}
            <div
                className="absolute left-[955px] top-[679px] text-black"
                style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 300,
                    fontSize: '16px',
                    lineHeight: '20px',
                }}
            >
                Calle, altura y barrio
            </div>

            {/* Contenedor Imagen Mater Dei (Frame 101/OficinasSucre reuse layout) */}
            {/* top: 0, left: 345, width: 762, height: 658 */}
            <div className="absolute left-[345px] top-[0px] w-[762px] h-[658px] bg-white overflow-hidden flex items-center justify-center">
                {/* Según figma: left: -12, top: -16, width: 774, height: 690. "descarga (4) 1" */}
                <div
                    className="absolute left-[-12px] top-[-16px] w-[774px] h-[690px] bg-[#D9D9D9] flex items-center justify-center"
                >
                    <span className="text-gray-500 font-sans text-xl">Imagen Proyecto Mater Dei (774x690)</span>
                </div>
            </div>

        </section>
    );
}
