import { notFound } from 'next/navigation'
import { proyectos } from '@/data/proyectos'
import ProyectoContent from './ProyectoContent'

export function generateStaticParams() {
    return proyectos.map((p) => ({ slug: p.slug }))
}

export default async function ProyectoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const proyecto = proyectos.find((p) => p.slug === slug)
    if (!proyecto) notFound()

    const otrosProyectos = proyectos.filter((p) => p.slug !== slug)

    return <ProyectoContent proyecto={proyecto} otrosProyectos={otrosProyectos} />
}
