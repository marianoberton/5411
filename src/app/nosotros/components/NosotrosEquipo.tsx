'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const equipo = [
    {
        nombre: 'Alejandro Saldívar',
        cargo: 'Asesor Real Estate',
        foto: '/images/equipo/alejandro-saldivar.jpeg',
        objectPosition: 'top center',
    },
    {
        nombre: 'Carolina Bianchi',
        cargo: 'Operaciones',
        foto: '/images/equipo/carolina-bianchi.jpg',
        objectPosition: 'top center',
    },
]

const cardDelays = [0.2, 0.35]

export default function NosotrosEquipo() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })
    const anim = inView ? 'visible' : 'hidden'

    return (
        <section className="w-full bg-white pt-[40px] pb-[64px] lg:pb-[80px]">
            <div ref={ref} className="max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-[80px]">

                <motion.div
                    className="flex flex-row items-center gap-[16px] mb-[48px]"
                    variants={{
                        hidden: { opacity: 0, y: 28 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: expo, delay: 0 } },
                    }}
                    initial="hidden"
                    animate={anim}
                >
                    <h2
                        className="text-[#0F0F0F] m-0 text-[clamp(26px,5vw,36px)]"
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, lineHeight: '1.2' }}
                    >
                        Conocé nuestro equipo
                    </h2>
                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '24px' }}>—</span>
                </motion.div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:flex sm:flex-row sm:gap-[80px]">
                    {equipo.map((persona, i) => (
                        <motion.div
                            key={persona.nombre}
                            className="group flex flex-col gap-[12px]"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: expo, delay: cardDelays[i] } },
                            }}
                            initial="hidden"
                            animate={anim}
                            whileHover={{ y: -6 }}
                        >
                            <div className="relative w-full aspect-[360/436] sm:w-[300px] sm:h-[363px] lg:w-[360px] lg:h-[436px] overflow-hidden bg-[#D9D9D9]">
                                <Image
                                    src={persona.foto}
                                    alt={persona.nombre}
                                    fill
                                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 300px, 360px"
                                    className="object-cover grayscale transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                    style={{ objectPosition: persona.objectPosition }}
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '16px', lineHeight: '22px' }}>
                                    {persona.nombre}
                                </p>
                                <p className="text-[#0F0F0F] m-0 mt-[2px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '14px', lineHeight: '20px' }}>
                                    {persona.cargo}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
