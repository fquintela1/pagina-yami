import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dra. Yamila Daud | Especialista en Ginecología — Bahía Blanca",
  description:
    "Especialista Jerarquizada en Ginecología General, Funcional, Estética y Reparadora. Menopausia, Terapia Hormonal, Cirugía Genital y Patología Mamaria. Bahía Blanca.",
  keywords:
    "ginecología, Bahía Blanca, menopausia, cirugía ginecológica, terapia hormonal, pellet, Yamila Daud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-neutral-900">{children}</body>
    </html>
  );
}
