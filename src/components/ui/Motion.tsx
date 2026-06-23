'use client'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ElementType } from 'react'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const variants = {
    fadeUp: {
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: expo } },
    } satisfies Variants,
    fadeIn: {
        hidden:  { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
    } satisfies Variants,
    scaleIn: {
        hidden:  { opacity: 0, scale: 1.04 },
        visible: { opacity: 1, scale: 1,   transition: { duration: 0.85, ease: expo } },
    } satisfies Variants,
    slideLeft: {
        hidden:  { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0,   transition: { duration: 0.65, ease: expo } },
    } satisfies Variants,
    slideRight: {
        hidden:  { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0,  transition: { duration: 0.65, ease: expo } },
    } satisfies Variants,
    stagger: {
        hidden:  {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
    } satisfies Variants,
}

type MotionDivProps = {
    variant?:   keyof typeof variants
    delay?:     number
    once?:      boolean
    margin?:    string
    className?: string
    style?:     React.CSSProperties
    children?:  React.ReactNode
    as?:        ElementType
    direction?: 'left' | 'right'
}

const DEFAULT_MARGIN = '-50px 0px'

export function FadeUp({ children, delay = 0, once = true, margin = DEFAULT_MARGIN, className, style }: MotionDivProps) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inView = useInView(ref, { once, margin: margin as any })
    return (
        <motion.div
            ref={ref}
            variants={variants.fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function FadeIn({ children, delay = 0, once = true, margin = DEFAULT_MARGIN, className, style }: MotionDivProps) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inView = useInView(ref, { once, margin: margin as any })
    return (
        <motion.div
            ref={ref}
            variants={variants.fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function ScaleIn({ children, delay = 0, once = true, margin = DEFAULT_MARGIN, className, style }: MotionDivProps) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inView = useInView(ref, { once, margin: margin as any })
    return (
        <motion.div
            ref={ref}
            variants={variants.scaleIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function SlideIn({ children, delay = 0, once = true, margin = DEFAULT_MARGIN, className, style, direction = 'left' }: MotionDivProps) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inView = useInView(ref, { once, margin: margin as any })
    const v = direction === 'left' ? variants.slideLeft : variants.slideRight
    return (
        <motion.div
            ref={ref}
            variants={v}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function Stagger({ children, once = true, margin = DEFAULT_MARGIN, className, style, delay = 0 }: MotionDivProps) {
    const ref = useRef(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inView = useInView(ref, { once, margin: margin as any })
    return (
        <motion.div
            ref={ref}
            variants={variants.stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className, style, variant = 'fadeUp' }: MotionDivProps) {
    return (
        <motion.div variants={variants[variant]} className={className} style={style}>
            {children}
        </motion.div>
    )
}

export { motion }
