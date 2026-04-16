export default function NosotrosNumeros() {
    return (
        <section className="relative w-full flex flex-col items-center bg-white mb-[148px]">

            {/* Sección Números (Fondo blanco, Flex Column con gap 77px) */}
            <div
                className="w-full flex flex-col"
                style={{
                    paddingTop: '119px',
                    paddingBottom: '34px',
                    gap: '77px'
                }}
            >

                {/* Título: Lo que hicimos hasta ahora */}
                <div className="relative w-full h-[46px]">
                    <h2
                        className="absolute left-[44px] top-[0px] m-0 text-black"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '36px', lineHeight: '46px' }}
                    >
                        Lo que hicimos hasta ahora
                    </h2>
                    <div className="absolute left-[0px] top-[23px] w-[30px] border-t border-black"></div>
                </div>

                {/* Fila 1: +100 Unidades */}
                <div className="relative w-full h-[177px]">
                    <div className="absolute left-[168px] top-[0px] w-[481px] h-[177px]">
                        <div className="absolute left-[0px] top-[0px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '64px', lineHeight: '82px' }}>+100</div>
                        <div className="absolute left-[0px] top-[77px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '36px', lineHeight: '46px' }}>Unidades entregadas</div>
                        <div className="absolute left-[0px] top-[177px] w-[345px] border-t border-black"></div>
                    </div>
                </div>

                {/* Fila 2: +4.000 Oficinas */}
                <div className="relative w-full h-[178px]">
                    <div className="absolute left-[887px] top-[0px] w-[400px] h-[178px]">
                        <div className="absolute left-[96px] top-[0px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '64px', lineHeight: '82px' }}>+4.000</div>
                        <div className="absolute left-[96px] top-[82px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '36px', lineHeight: '46px' }}>m2 en oficinas</div>
                        <div className="absolute left-[0px] top-[177px] w-[345px] border-t border-black"></div>
                    </div>
                </div>

                {/* Fila 3: +8.000 Edificios */}
                <div className="relative w-full h-[177px]">
                    {/* Fila 3 tiene un detalle: todo el contenido absoluto comparte X pero el Line y Texto estan relativos a left 168 en el parent pero el offset local en el componente Figma indica absolute referenciando la pagina, asumo top 0 left 168 para el frame contenedor para consistencia */}
                    <div className="absolute left-[168px] top-[0px] w-[400px] h-[177px]">
                        <div className="absolute left-[0px] top-[0px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '64px', lineHeight: '82px' }}>+8.000</div>
                        <div className="absolute left-[0px] top-[77px] text-black" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '36px', lineHeight: '46px' }}>m2 en edificios</div>
                        <div className="absolute left-[0px] top-[176px] w-[345px] border-t border-black"></div>
                    </div>
                </div>

                {/* Fila 4: +4.000 Construidos */}
                <div className="relative w-full h-[178px]">
                    {/* Contenedor relativo a 887 del diseño original (donde arranca la linea, el texto está un poco más a la derecha) */}
                    <div className="absolute left-[887px] top-[0px] w-[400px] h-[178px]">
                        {/* offset respecto a 887: +4000 left 1019 -> 1019-887 = 132 */}
                        <div className="absolute left-[132px] top-[0px] text-black whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '64px', lineHeight: '82px' }}>+4.000</div>
                        {/* m2 construidos left 960 -> 960-887 = 73 */}
                        <div className="absolute left-[73px] top-[74px] text-black whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '36px', lineHeight: '46px' }}>m2 construidos</div>
                        <div className="absolute left-[0px] top-[177px] w-[345px] border-t border-black"></div>
                    </div>
                </div>

            </div>

            {/* Pie Nosotros (Contenedor-pienosotros) solapado al final / offset top manual */}
            <div
                className="w-[1280px] h-[403px] bg-white mt-[100px] mb-[0px] overflow-hidden relative shadow-sm"
                style={{ left: '0px' /* Para auto-centrado si flex column o absolute left 80px */ }}
            >
                <div className="absolute left-[0px] top-[-157px] w-[1282px] h-[721px] bg-[#D9D9D9] flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-xl">Imagen Pie Nosotros (1282x721)</span>
                </div>
            </div>

        </section>
    );
}
