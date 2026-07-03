'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { proyectos } from '@/data/proyectos'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Contador que anima al entrar en viewport.
function CountUp({ to, play, format }: { to: number; play: boolean; format?: (n: number) => string }) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (!play) return
        const controls = animate(0, to, {
            duration: 2.2,
            ease: expo,
            onUpdate: (v) => setValue(Math.round(v)),
        })
        return controls.stop
    }, [play, to])
    return <>{format ? format(value) : value.toLocaleString('es-AR')}</>
}

// Banda de métricas reales (derivadas del data layer de proyectos):
// m² construidos + cantidad de proyectos + obras en marcha.
export default function Stats() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px 0px' })

    const total = proyectos.length
    const enObra = proyectos.filter((p) => p.estado === 'en_construccion').length

    const metrics = [
        {
            value: 3000,
            format: (n: number) => `+${n.toLocaleString('es-AR')}`,
            unit: 'm²',
            label: 'construidos',
        },
        {
            value: total,
            format: (n: number) => String(n).padStart(2, '0'),
            unit: '',
            label: 'proyectos desarrollados',
        },
        {
            value: enObra,
            format: (n: number) => String(n).padStart(2, '0'),
            unit: '',
            label: 'obras en marcha',
        },
    ]

    return (
        <section ref={ref} className="w-full bg-[#fafafa] py-[80px] lg:py-[120px]">
            <div className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] mx-auto px-6 sm:px-10 lg:px-[120px] 3xl:px-[160px]">
                <div className="flex flex-col md:flex-row md:items-stretch">
                    {metrics.map((m, i) => (
                        <div key={m.label} className="relative flex-1 flex flex-col items-center text-center py-[36px] md:py-[12px]">
                            {/* Divisor: vertical en desktop, horizontal en mobile */}
                            {i > 0 && (
                                <>
                                    <motion.span
                                        className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-[#d0d0d0] origin-top"
                                        initial={{ scaleY: 0 }}
                                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                                        transition={{ duration: 1.0, ease: expo, delay: 0.2 + i * 0.15 }}
                                    />
                                    <motion.span
                                        className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[64px] h-[1px] bg-[#d0d0d0] origin-center"
                                        initial={{ scaleX: 0 }}
                                        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{ duration: 0.9, ease: expo, delay: 0.2 + i * 0.15 }}
                                    />
                                </>
                            )}
                            <motion.p
                                className="font-sans font-light text-[#0F0F0F] m-0 leading-none text-[clamp(52px,5.4vw,104px)]"
                                initial={{ opacity: 0, y: 26 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
                                transition={{ duration: 0.9, ease: expo, delay: 0.1 + i * 0.15 }}
                            >
                                <CountUp to={m.value} play={inView} format={m.format} />
                                {m.unit && <span className="text-[0.42em] align-baseline ml-[6px]">{m.unit}</span>}
                            </motion.p>
                            <motion.p
                                className="font-sans font-light text-[#888888] m-0 mt-[14px] text-[13px] lg:text-[15px] uppercase tracking-[2.5px]"
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 + i * 0.15 }}
                            >
                                {m.label}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
