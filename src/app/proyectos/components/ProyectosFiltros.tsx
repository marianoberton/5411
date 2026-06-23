'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const FILTROS = ['Barrio', 'Etapa de obra', 'Tipología']

export default function ProyectosFiltros() {
    const ref = useRef(null)
    const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px 0px' })
    const anim = inView ? 'visible' : 'hidden'

    return (
        <section ref={ref} className="relative w-full h-[135px] mt-[186px] flex items-center bg-transparent">

            <motion.h2
                className="absolute left-[80px]"
                style={{ fontFamily: 'var(--font-bellefair)', fontWeight: 400, fontSize: '36px', lineHeight: '41px', color: '#000000' }}
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

            <div className="absolute right-[115px] flex flex-row items-center justify-end px-[42px] py-[3px]">
                {FILTROS.map((label, i) => (
                    <motion.div
                        key={label}
                        className="flex flex-row justify-center items-center px-[10px] pr-[45px] gap-[39px] h-[46px] cursor-pointer"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={anim}
                        transition={{ duration: 0.6, ease: expo, delay: 0.1 + i * 0.1 }}
                    >
                        <span className="text-black whitespace-nowrap" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '20px', lineHeight: '26px' }}>
                            {label}
                        </span>
                        <div className="w-[15.83px] h-[8.5px] border-b-2 border-r-2 border-black transform rotate-45 -translate-y-1" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
