import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop"; // ← Novo componente

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata = {
  title: "My Homepage",
  description: "Site pessoal criado com Next.js e Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}>
        <ScrollToTop /> {/* Componente client para scroll */}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-16">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}