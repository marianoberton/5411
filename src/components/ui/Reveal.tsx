'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ElementType, useEffect, useRef, useState } from 'react'
import { isIntroDone, onIntroDone } from '@/lib/introGate'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

/** true cuando el intro del logo ya terminó (o no corre en este montaje). */
export function useIntroReady() {
    const [ready, setReady] = useState(false)
    useEffect(() => {
        let raf = 0
        if (isIntroDone()) {
            raf = requestAnimationFrame(() => setReady(true))
            return () => cancelAnimationFrame(raf)
        }
        return onIntroDone(() => setReady(true))
    }, [])
    return ready
}

type MaskLinesProps = {
    lines: string[]
    as?: ElementType
    className?: string
    lineClassName?: string
    /** Si se omite, dispara con scroll (useInView). Si se pasa, controla el play externamente. */
    play?: boolean
    delay?: number
    stagger?: number
    duration?: number
}

/**
 * Reveal de líneas enmascaradas (estilo SplitText): cada línea sube desde
 * abajo detrás de una máscara overflow-hidden. Sutil y editorial.
 */
export function MaskLines({
    lines,
    as,
    className,
    lineClassName,
    play,
    delay = 0,
    stagger = 0.1,
    duration = 0.9,
}: MaskLinesProps) {
    const Tag = (as || 'div') as ElementType
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-12% 0px' })
    const go = play !== undefined ? play : inView

    return (
        <Tag ref={ref} className={className}>
            {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden" style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
                    <motion.span
                        className={`block will-change-transform ${lineClassName || ''}`}
                        initial={{ y: '118%' }}
                        animate={go ? { y: '0%' } : { y: '118%' }}
                        transition={{ duration, ease: expo, delay: delay + i * stagger }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </Tag>
    )
}

type SplitTextProps = {
    /** Cada string es una línea explícita (controla los saltos). */
    lines: string[]
    as?: ElementType
    className?: string
    lineClassName?: string
    /** Si se omite, dispara con scroll (useInView). Si se pasa, controla el play. */
    play?: boolean
    delay?: number
    /** Stagger por carácter. */
    stagger?: number
    duration?: number
    /** Desplazamiento inicial vertical (en %). */
    from?: number
}

/**
 * SplitText carácter por carácter (estilo SplitType), SSR-safe y sin dependencias.
 * Divide en palabras (que nunca se parten) y dentro anima cada glifo subiendo
 * desde abajo detrás de una máscara, con un stagger fino. El índice de carácter
 * es continuo entre líneas para que la ola recorra todo el título.
 */
export function SplitText({
    lines,
    as,
    className,
    lineClassName,
    play,
    delay = 0,
    stagger = 0.026,
    duration = 0.95,
    from = 118,
}: SplitTextProps) {
    const Tag = (as || 'div') as ElementType
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-12% 0px' })
    const reduce = useReducedMotion()
    const go = play !== undefined ? play : inView
    let ci = 0

    // Sin movimiento: render plano, accesible, sin máscaras.
    if (reduce) {
        return (
            <Tag ref={ref} className={className}>
                {lines.map((line, li) => (
                    <span key={li} className={`block ${lineClassName || ''}`}>{line}</span>
                ))}
            </Tag>
        )
    }

    return (
        <Tag ref={ref} className={className} aria-label={lines.join(' ')}>
            {lines.map((line, li) => {
                const words = line.split(' ')
                return (
                    <span key={li} className={`block ${lineClassName || ''}`} aria-hidden="true">
                        {words.map((word, wi) => (
                            <span key={wi} className="inline-block whitespace-nowrap">
                                {Array.from(word).map((ch) => {
                                    const idx = ci++
                                    return (
                                        <span
                                            key={idx}
                                            className="inline-block overflow-hidden align-bottom"
                                            style={{ paddingBottom: '0.16em', marginBottom: '-0.16em' }}
                                        >
                                            <motion.span
                                                className="inline-block will-change-transform"
                                                initial={{ y: `${from}%` }}
                                                animate={go ? { y: '0%' } : { y: `${from}%` }}
                                                transition={{ duration, ease: expo, delay: delay + idx * stagger }}
                                            >
                                                {ch}
                                            </motion.span>
                                        </span>
                                    )
                                })}
                                {wi < words.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
                            </span>
                        ))}
                    </span>
                )
            })}
        </Tag>
    )
}

type MaskWordsProps = {
    text: string
    as?: ElementType
    className?: string
    play?: boolean
    delay?: number
    stagger?: number
    duration?: number
}

/** Reveal palabra por palabra enmascarado. Para subtítulos / frases cortas. */
export function MaskWords({
    text,
    as,
    className,
    play,
    delay = 0,
    stagger = 0.05,
    duration = 0.75,
}: MaskWordsProps) {
    const Tag = (as || 'p') as ElementType
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-10% 0px' })
    const go = play !== undefined ? play : inView
    const words = text.split(' ')

    return (
        <Tag ref={ref} className={className}>
            {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}>
                    <motion.span
                        className="inline-block will-change-transform"
                        initial={{ y: '116%' }}
                        animate={go ? { y: '0%' } : { y: '116%' }}
                        transition={{ duration, ease: expo, delay: delay + i * stagger }}
                    >
                        {w}
                        {i < words.length - 1 ? ' ' : ''}
                    </motion.span>
                </span>
            ))}
        </Tag>
    )
}
