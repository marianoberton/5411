export default function ProyectosHero() {
    return (
        <section className="relative w-full h-[860px] flex justify-center items-center overflow-hidden bg-white">
            {/* Imagen de fondo / Placeholder: TORRE RESIDENCIAL INCAS 16 */}
            <div
                className="absolute left-0 top-[-160px] w-full h-[998px] bg-[#D9D9D9]"
            /* top -160px y height 998px vienen del Figma para el "Render 11-v1 6" dentro del frame de 860px */
            >
                <div className="w-full h-full flex justify-center items-center bg-black/20">
                    <span className="text-white font-sans text-xl">Imagen de fondo (Render 11-v1)</span>
                </div>
            </div>

            {/* Título Central */}
            <div className="absolute top-[327px] w-full flex justify-center">
                <h1
                    className="text-center text-[#FAFAFA]"
                    style={{
                        fontFamily: 'var(--font-bellefair)',
                        fontWeight: 400,
                        fontSize: '96px',
                        lineHeight: '110px',
                        width: '717px',
                        height: '206px'
                    }}
                >
                    NUESTROS PROYECTOS
                </h1>
            </div>
        </section>
    );
}
