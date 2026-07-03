'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const FILTROS = ['Barrio', 'Etapa de obra', 'Tipología']

export default function ProyectosFiltros() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px 0px' })
    const anim = inView ? 'visible' : 'hidden'

    return (
        <section
            ref={ref}
            className="relative w-full mt-[120px] lg:mt-[186px] mb-[40px] lg:mb-[20px] px-6 sm:px-10 lg:px-[80px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0"
        >
            <motion.h2
                className="text-[clamp(28px,5vw,36px)] leading-[1.05] text-[#0F0F0F]"
                style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400 }}
                variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={anim}
                transition={{ duration: 0.6, ease: expo, delay: 0 }}
            >
                PROYECTOS
            </motion.h2>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:gap-x-[45px] lg:justify-end">
                {FILTROS.map((label, i) => (
                    <motion.button
                        key={label}
                        type="button"
                        className="group flex flex-row items-center gap-[14px] h-[46px] cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={anim}
                        transition={{ duration: 0.6, ease: expo, delay: 0.1 + i * 0.1 }}
                    >
                        <span
                            className="text-[#0F0F0F] whitespace-nowrap transition-opacity group-hover:opacity-60"
                            style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '20px', lineHeight: '26px' }}
                        >
                            {label}
                        </span>
                        <span className="w-[14px] h-[8px] border-b-2 border-r-2 border-[#0F0F0F] rotate-45 -translate-y-1 transition-transform group-hover:translate-y-0" />
                    </motion.button>
                ))}
            </div>
        </section>
    )
}
