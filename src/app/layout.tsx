import type { Metadata } from "next";
import { Space_Grotesk, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LogoIntro from "@/components/LogoIntro";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://5411briquedes.com"),
  title: {
    default: "5411 Brique — Desarrollos inmobiliarios",
    template: "%s · 5411 Brique",
  },
  description:
    "5411 Brique — desarrollo inmobiliario integral en Buenos Aires. Diseño contemporáneo, financiación propia y obras entregadas con calidad.",
  keywords: ["5411 Brique", "desarrollo inmobiliario", "Belgrano", "Buenos Aires", "departamentos", "obra en pozo"],
  openGraph: {
    title: "5411 Brique — Desarrollos inmobiliarios",
    description:
      "Desarrollo inmobiliario integral en Buenos Aires. Diseño contemporáneo y obras entregadas con calidad.",
    type: "website",
    locale: "es_AR",
    siteName: "5411 Brique",
  },
  twitter: {
    card: "summary_large_image",
    title: "5411 Brique — Desarrollos inmobiliarios",
    description: "Desarrollo inmobiliario integral en Buenos Aires.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${bellefair.variable} antialiased font-sans min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <LogoIntro />
          <Header />
          {/* overflow-x-clip (no hidden): clip no crea scroll container, así
              position:sticky de las secciones scrub sigue funcionando. */}
          <main className="flex-grow w-full relative overflow-x-clip">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
