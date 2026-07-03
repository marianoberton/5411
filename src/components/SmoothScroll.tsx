'use client'
import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from 'framer-motion'

// Smooth scroll global (Lenis). Interpola el scroll para que los efectos
// "scrub" (secciones pineadas de la home) siempre completen su recorrido,
// incluso con flicks rápidos de rueda/trackpad. Se desactiva si el usuario
// pidió menos movimiento.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const reduce = useReducedMotion()

    if (reduce) return <>{children}</>

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.1,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.4,
            }}
        >
            {children}
        </ReactLenis>
    )
}
