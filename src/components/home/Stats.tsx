'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const expo: [number, number, number, number] = [0.16, 1, 0.3, 1]

const containerV = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: expo } },
}
const lineV = {
    hidden: { width: 0 },
    visible: { width: 345, transition: { duration: 1.4, ease: expo, delay: 0.3 } },
}

export default function Stats() {
    const ref = useRef(null)
    const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px 0px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        const controls = animate(0, 3000, {
            duration: 2.5,
            ease: expo,
            onUpdate: (v) => setCount(Math.round(v)),
        })
        return controls.stop
    }, [inView])

    return (
        <section className="w-full bg-[#fafafa] py-[60px] flex flex-col items-center" ref={ref}>
            <motion.div
                className="flex flex-col items-center"
                variants={containerV}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <p
                    className="font-sans font-light text-[#0F0F0F] text-center m-0"
                    style={{ fontSize: 'clamp(56px, 6.5vw, 93px)', lineHeight: '1' }}
                >
                    +{count.toLocaleString('es-AR')}
                </p>
                <p
                    className="font-sans font-light text-[#0F0F0F] text-center m-0 mt-[8px]"
                    style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', lineHeight: '1.2' }}
                >
                    construidos
                </p>
                <motion.div
                    className="mt-[40px] border-t border-[#0F0F0F]"
                    variants={lineV}
                />
            </motion.div>
        </section>
    )
}
