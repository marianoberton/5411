'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ProyectosHero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])

    return (
        <section ref={ref} className="relative w-full h-[860px] flex justify-center items-center overflow-hidden bg-white">
            <div className="absolute left-0 w-full overflow-hidden" style={{ top: '-160px', height: '998px' }}>
                <motion.div className="w-full h-full" style={{ y }}>
                    <Image
                        src="/images/proyectos/hero-bg.jpg"
                        alt="Nuestros Proyectos"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </motion.div>
            </div>

            <div className="absolute top-[327px] w-full flex justify-center">
                <motion.h1
                    className="text-center text-[#FAFAFA] font-serif font-normal m-0"
                    style={{ fontSize: '96px', lineHeight: '110px', width: '717px' }}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                    NUESTROS PROYECTOS
                </motion.h1>
            </div>
        </section>
    )
}
