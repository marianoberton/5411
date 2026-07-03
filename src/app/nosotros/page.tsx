import NosotrosHero from './components/NosotrosHero'
import NosotrosVision from './components/NosotrosVision'
import NosotrosEquipo from './components/NosotrosEquipo'
import NosotrosNumeros from './components/NosotrosNumeros'
import NosotrosImagenFinal from './components/NosotrosImagenFinal'

export default function NosotrosPage() {
    return (
        <div className="w-full flex flex-col bg-white">
            <NosotrosHero />
            <div className="w-full flex flex-col items-center bg-white">
                <main className="w-full max-w-[1440px] 2xl:max-w-[1660px] 3xl:max-w-[1880px] relative flex flex-col bg-white">
                    <NosotrosVision />
                    <NosotrosEquipo />
                    <NosotrosNumeros />
                    <NosotrosImagenFinal />
                </main>
            </div>
        </div>
    )
}
