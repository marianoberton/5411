export default function ProyectoOficinasSucre() {
    return (
        <section className="relative w-full h-[959px] overflow-hidden bg-white mt-[84px] mb-[100px]">

            {/* Contenedor Imagen Oficinas Sucre (Frame 80) */}
            <div className="absolute left-[352px] top-[106px] w-[762px] h-[658px] bg-white overflow-hidden">
                {/* Usamos el layout exacto: wg: 1169.77px ht: 657.89 left: -273.35 */}
                <div
                    className="absolute left-[-273.35px] top-[0px] w-[1169.77px] h-[657.89px] bg-[#D9D9D9] flex items-center justify-center"
                >
                    <span className="text-gray-500 font-sans text-xl">Imagen Proyecto Oficinas Sucre (1170x658)</span>
                </div>
            </div>

            {/* Título OFICINAS SUCRE */}
            <div className="absolute left-[352px] top-[784px] flex flex-row items-center gap-[16.5px]">
                <h2
                    className="text-black inline-block whitespace-nowrap"
                    style={{
                        fontFamily: 'var(--font-bellefair)',
                        fontWeight: 400,
                        fontSize: '35.19px',
                        lineHeight: '40px',
                        height: '40px'
                    }}
                >
                    OFICINAS SUCRE
                </h2>
                <div
                    className="border-t border-black w-[32.99px]"
                    style={{ borderWidth: '1.099px' }}
                ></div>
            </div>

            {/* Calle, altura y barrio */}
            <div
                className="absolute left-[947px] top-[793px] text-black"
                style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 300,
                    fontSize: '17.59px',
                    lineHeight: '22px',
                }}
            >
                Calle, altura y barrio
            </div>

        </section>
    );
}
