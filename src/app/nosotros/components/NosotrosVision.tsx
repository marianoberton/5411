'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function NosotrosVision() {
    const ref = useRef(null)
    const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px 0px' })
    const anim = inView ? 'visible' : 'hidden'

    return (
        <section className="w-full bg-white py-[80px] overflow-hidden">
            <div ref={ref} className="max-w-[1440px] mx-auto px-[80px] flex flex-row gap-[60px] items-start justify-between">

                {/* Izquierda — texto */}
                <motion.div
                    className="flex flex-row items-start gap-[16px] max-w-[420px] pt-[40px]"
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: expo, delay: 0.1 } },
                    }}
                    initial="hidden"
                    animate={anim}
                >
                    <div className="flex-shrink-0 mt-[4px]">
                        <svg width="5" height="30" viewBox="0 0 5 30" fill="none">
                            <rect width="5" height="30" fill="#0F0F0F" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <p
                            className="text-[#0F0F0F] m-0"
                            style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '18px', lineHeight: '28px' }}
                        >
                            Nos especializamos en brindar soluciones integrales, asegurando calidad, eficiencia y compromiso en cada proyecto.
                        </p>
                        <p
                            className="text-[#0F0F0F] m-0"
                            style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '18px', lineHeight: '28px' }}
                        >
                            Construimos más que obras: forjamos relaciones de confianza con nuestros clientes, acompañándolos en cada etapa y resolviendo cada detalle con precisión y transparencia.
                        </p>
                    </div>
                </motion.div>

                {/* Derecha — foto + nombre */}
                <motion.div
                    className="flex flex-col items-center gap-[16px]"
                    style={{ flexShrink: 0 }}
                    variants={{
                        hidden: { opacity: 0, x: 40, scale: 1.06 },
                        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.1, ease: expo, delay: 0.25 } },
                    }}
                    initial="hidden"
                    animate={anim}
                >
                    <div className="relative w-[414px] h-[504px] overflow-hidden">
                        <Image
                            src="/images/otros/pexels-lubomir-satko.jpg"
                            alt="Mauro Carlos Bianchi"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    <p
                        className="text-[#0F0F0F] text-center m-0"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '16px', lineHeight: '22px' }}
                    >
                        Mauro Carlos Bianchi
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
