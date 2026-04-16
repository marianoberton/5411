export default function NosotrosHero() {
    return (
        <section className="relative w-full h-[843px] flex justify-center items-center overflow-hidden bg-white">
            {/* Imagen de fondo / Placeholder: "4 1" */}
            <div
                className="absolute left-[-49px] top-[0px] w-[1499px] h-[843px] bg-[#D9D9D9]"
            >
                <div className="w-full h-full flex justify-center items-center bg-black/20">
                    <span className="text-white font-sans text-xl">Imagen Hero Nosotros (1499x843)</span>
                </div>
            </div>

            {/* Título Central */}
            <h1
                className="absolute top-[378px] text-center text-[#FAFAFA]"
                style={{
                    fontFamily: 'var(--font-bellefair)',
                    fontWeight: 400,
                    fontSize: '96px',
                    lineHeight: '110px',
                    width: '717px',
                    height: '88px',
                    left: 'calc(50% - 717px/2 - 19.5px)' /* Replicando calculo del Figma */
                }}
            >
                NOSOTROS
            </h1>
        </section>
    );
}
