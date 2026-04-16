export default function Stats() {
    return (
        <section className="relative w-full h-[259px] flex justify-center bg-[#FAFAFA]">
            <div className="relative w-full max-w-[1440px] h-full mx-auto flex flex-col items-center">

                {/* Usamos flexbox acá porque permite escalarlo mejor, pero conservando los line-heights y spacing exactos */}
                <div className="absolute top-[70px] flex flex-col items-center">
                    <span
                        className="text-black text-center"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '93.12px',
                            lineHeight: '119px',
                            height: '119px',
                            marginLeft: '-71.66px' // Simular el offset del Figma: calc(50% - 442.34px/2 - 35.83px)
                        }}
                    >
                        +3.000
                    </span>
                    <span
                        className="text-black text-center mt-[2px]"
                        style={{
                            fontFamily: 'var(--font-space-grotesk)',
                            fontWeight: 300,
                            fontSize: '40.65px',
                            lineHeight: '52px',
                            height: '52px',
                            marginLeft: '-25px' // Simular el offset del Figma
                        }}
                    >
                        construidos
                    </span>
                </div>

                {/* Línea Divisoria Inferior */}
                <div
                    className="absolute top-[259px] border-t border-black"
                    style={{ width: '345px', marginLeft: '-1px' }}
                ></div>

            </div>
        </section>
    );
}
