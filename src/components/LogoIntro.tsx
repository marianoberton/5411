'use client'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { MARK_PARTS, MARK_VIEWBOX, MARK_TRANSFORM } from './brand/briqueMark'
import { startIntro, finishIntro } from '@/lib/introGate'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]
const INK_ON_DARK = '#FAFAFA'

function readBrand() {
    if (typeof window === 'undefined') return { blue: '#1f4cff', yellow: '#f5b301' }
    const root = getComputedStyle(document.documentElement)
    return {
        blue: root.getPropertyValue('--brand-blue').trim() || '#1f4cff',
        yellow: root.getPropertyValue('--brand-yellow').trim() || '#f5b301',
    }
}

type Phase = 'hidden' | 'built' | 'wave' | 'settled'

export default function LogoIntro() {
    const [show, setShow] = useState(true)
    const [phase, setPhase] = useState<Phase>('hidden')
    const reduce = useReducedMotion()
    const [brand] = useState(readBrand)
    // Marca el intro como "corriendo" antes de que el hero lea el gate (mismo render top-down).
    useState(() => { if (typeof window !== 'undefined') startIntro(); return null })

    // Órdenes de animación: construcción (abajo→arriba) y ola de color (arriba→abajo).
    const { buildOrder, waveOrder } = useMemo(() => {
        const bo = MARK_PARTS.map((p, i) => ({ i, build: p.build }))
            .sort((a, b) => a.build - b.build)
            .reduce<Record<number, number>>((acc, { i }, order) => ((acc[i] = order), acc), {})
        const wo = MARK_PARTS.map((p, i) => ({ i, y: p.y }))
            .sort((a, b) => a.y - b.y)
            .reduce<Record<number, number>>((acc, { i }, order) => ((acc[i] = order), acc), {})
        return { buildOrder: bo, waveOrder: wo }
    }, [])

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
            return () => { document.body.style.overflow = '' }
        }
    }, [show])

    useEffect(() => {
        const seen = typeof window !== 'undefined' && sessionStorage.getItem('introSeen')
        if (typeof window !== 'undefined') sessionStorage.setItem('introSeen', '1')

        const timers: ReturnType<typeof setTimeout>[] = []
        const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms))
        const close = () => { finishIntro(); setShow(false) }

        if (reduce) {
            at(40, () => setPhase('built'))
            at(760, close)
        } else {
            const k = seen ? 0.55 : 1 // los que ya lo vieron reciben una versión exprés
            at(60, () => setPhase('built'))
            at(60 + 1080 * k, () => setPhase('wave'))
            at(60 + (1080 + 1060) * k, () => setPhase('settled'))
            at(60 + (1080 + 1060 + 340) * k, close)
        }
        // Salvaguarda
        at(5000, close)
        return () => timers.forEach(clearTimeout)
    }, [reduce])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0F0F0F]"
                    initial={{ opacity: 1 }}
                    exit={{ scaleX: 0, transition: { duration: 1.0, ease: expo, delay: 0.04 } }}
                    style={{ transformOrigin: 'right' }}
                >
                    {/* Halos de marca apenas perceptibles detrás del logo. */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.12]"
                        style={{ background: 'radial-gradient(55% 45% at 32% 42%, var(--brand-blue), transparent 70%), radial-gradient(52% 42% at 70% 62%, var(--brand-yellow), transparent 70%)' }}
                    />
                    <motion.svg
                        viewBox={MARK_VIEWBOX}
                        className="relative w-[clamp(132px,26vw,260px)] h-auto overflow-visible"
                        initial={{ opacity: 0, scale: 0.94, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.3, ease: 'easeIn' } }}
                        transition={{ duration: 0.7, ease: expo }}
                    >
                        <g transform={MARK_TRANSFORM} stroke="none">
                            {MARK_PARTS.map((part, i) => {
                                const color = waveOrder[i] % 2 === 0 ? brand.blue : brand.yellow
                                const built = phase !== 'hidden'
                                const isWave = phase === 'wave'
                                return (
                                    <motion.path
                                        key={i}
                                        d={part.d}
                                        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                                        initial={{ opacity: 0, scale: 0.9, fill: INK_ON_DARK }}
                                        animate={
                                            isWave
                                                ? { opacity: 1, scale: 1, fill: [INK_ON_DARK, color, INK_ON_DARK] }
                                                : { opacity: built ? 1 : 0, scale: built ? 1 : 0.9, fill: INK_ON_DARK }
                                        }
                                        transition={
                                            isWave
                                                ? { duration: 0.62, ease: 'easeInOut', delay: waveOrder[i] * 0.07, times: [0, 0.5, 1] }
                                                : { duration: 0.6, ease: expo, delay: built ? buildOrder[i] * 0.08 : 0 }
                                        }
                                    />
                                )
                            })}
                        </g>
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
