'use client'
import { motion, useInView, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FadeUp } from '@/components/ui/Motion'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const stats = [
    { valor: '+100', label: 'Unidades entregadas', lado: 'izquierda' },
    { valor: '+4.000', label: 'm2 en oficinas', lado: 'derecha' },
    { valor: '+8.000', label: 'm2 en edificios', lado: 'izquierda' },
    { valor: '+4.000', label: 'm2 construidos', lado: 'derecha' },
] as const

function parseValor(valor: string): { prefix: string; num: number } {
    const hasPlus = valor.startsWith('+')
    const raw = hasPlus ? valor.slice(1) : valor
    const num = parseInt(raw.replace(/\./g, ''), 10)
    return { prefix: hasPlus ? '+' : '', num }
}

function StatRow({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px 0px' })
    const isRight = stat.lado === 'derecha'

    const { prefix, num } = parseValor(stat.valor)
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!inView) return
        const controls = animate(0, num, {
            duration: 2,
            ease: expo,
            onUpdate: (v) => setDisplay(Math.round(v)),
        })
        return () => controls.stop()
    }, [inView, num])

    const formatted = prefix + display.toLocaleString('es-AR')

    return (
        <motion.div
            ref={ref}
            className={`flex py-[48px] border-b border-[#D0D0D0] ${isRight ? 'justify-end' : 'justify-start'}`}
            variants={{
                hidden: { opacity: 0, x: isRight ? 40 : -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: expo, delay: index * 0.05 } },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <div className={`flex flex-col ${isRight ? 'items-end' : 'items-start'}`} style={{ width: '420px' }}>
                <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '64px', lineHeight: '1' }}>
                    {formatted}
                </p>
                <p className="text-[#0F0F0F] m-0 mt-[8px]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 300, fontSize: '36px', lineHeight: '1.2' }}>
                    {stat.label}
                </p>
            </div>
        </motion.div>
    )
}

export default function NosotrosNumeros() {
    return (
        <section className="w-full bg-white pt-[60px] pb-[80px]">
            <div className="max-w-[1440px] mx-auto px-[80px]">

                <FadeUp className="flex flex-row items-center justify-end gap-[12px] mb-[80px]">
                    <span className="text-[#0F0F0F]" style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '22px' }}>—</span>
                    <p className="text-[#0F0F0F] m-0" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, fontSize: '36px', lineHeight: '1.2' }}>
                        Lo que hicimos hasta ahora
                    </p>
                </FadeUp>

                <div className="flex flex-col gap-0">
                    {stats.map((stat, i) => (
                        <StatRow key={stat.label} stat={stat} index={i} />
                    ))}
                </div>

            </div>
        </section>
    )
}
