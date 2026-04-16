import type { Metadata } from "next";
import { Space_Grotesk, Bellefair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "5411 Brique",
  description: "Web oficial de 5411 Brique",
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
        <Header />
        <main className="flex-grow w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
