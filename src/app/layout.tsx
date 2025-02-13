import { poppins } from "@/styles/fonts"; // Importa una fuente personalizada
import type { Metadata } from "next"; // Tipado para metadatos en Next.js
import "../styles/globals.css"; // Importa estilos globales
import LenisScrollProvider from "./providers/lenis"; // Proveedor para el smooth scrolling

// Definición de metadatos (Título y descripción de la página)
export const metadata: Metadata = {
  title: "Next INIT",
  description: "Start Project",
};

// Layout principal que envuelve la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
