export default function Nosotros() {
    return (
        <section id="nosotros" className="relative w-full h-[835px] flex justify-center overflow-hidden bg-[#FAFAFA]">
            <div className="relative w-full max-w-[1440px] h-full mx-auto">

                {/* Texto central */}
                <div className="absolute w-[900px] h-[202px] left-1/2 -translate-x-1/2 top-[321px] flex justify-center items-center">
                    <h2
                        className="text-center text-black"
                        style={{
                            fontFamily: 'var(--font-bellefair)',
                            width: '662px',
                            height: '146px',
                            fontWeight: 400,
                            fontSize: '64px',
                            lineHeight: '73px'
                        }}
                    >
                        TU ESTILO DE VIDA,<br />NUESTRA PRIORIDAD
                    </h2>
                </div>

                {/* Frame 74 */}
                <div className="absolute w-[257px] h-[310px] left-[79px] top-[69px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-sm">Imagen Provisoria (257x310)</span>
                </div>

                {/* Frame 76 */}
                <div className="absolute w-[143px] h-[184px] left-[908px] top-[94.5px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-[10px] text-center">Imagen Provisoria<br />(143x184)</span>
                </div>

                {/* Frame 73 */}
                <div className="absolute w-[273px] h-[356.9px] left-[1082px] top-[421.5px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-sm">Imagen Provisoria (273x357)</span>
                </div>

                {/* Frame 75 */}
                <div className="absolute w-[194px] h-[246px] left-[239px] top-[538px] bg-[#D9D9D9] overflow-hidden flex items-center justify-center">
                    <span className="text-gray-500 font-sans text-sm text-center">Imagen Provisoria<br />(194x246)</span>
                </div>

            </div>
        </section>
    );
}
