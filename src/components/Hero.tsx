export default function Hero() {
  return (
    <section className="relative w-full h-[848px] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/5411brique-hero.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
        {/* Overlay opcional para mejorar legibilidad si el video es muy claro */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>
      </div>

      {/* Content Container (1440px) */}
      <div className="relative z-20 w-full max-w-[1440px] h-[848px] mx-auto">

        {/* Texto-hero */}
        <div className="absolute left-[2px] top-[192px] flex flex-col justify-center items-start pl-[125px] pr-[198px] gap-[30px] w-full max-w-[1576px] h-[470px]">
          <h1
            className="font-normal text-[96px] leading-[110px] text-white"
            style={{ fontFamily: 'var(--font-bellefair)' }}
          >
            CONSTRUIMOS TUS<br />SUEÑOS
          </h1>

          <button
            className="flex flex-row justify-center items-center bg-[#0F0F0F] text-[#F5F5F5] font-light text-[16px] leading-[20px] tracking-[-0.005em] hover:bg-black transition-colors"
            style={{
              padding: '12px 16px',
              gap: '10px',
              width: '247px',
              height: '44px',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            Conocé nuestros proyectos
          </button>
        </div>

      </div>
    </section>
  );
}
