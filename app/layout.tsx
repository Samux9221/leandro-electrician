import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // CORREÇÃO CRÍTICA: Necessário para o Next.js resolver imagens do Open Graph
  metadataBase: new URL("https://www.leandro-electrician.com"), 
  
  title: {
    default: "Leandro | Intelligent Low Voltage & Master Electrical NYC",
    template: "%s | Leandro Electrical"
  },
  description: "High-performance networking, smart automation, and fully licensed electrical infrastructure for NYC's premier properties. Fast execution, zero permit delays.",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.leandro-electrician.com",
    siteName: "Leandro Electrical",
    title: "Leandro | Intelligent Low Voltage & Master Electrical NYC",
    description: "Bypass DOB red tape. Deploy enterprise networking and smart home automation with zero permit delays in NYC.",
    images: [
      {
        // Imagem Premium de NYC à noite, com proporção exata de OG (1200x630)
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&h=630&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Leandro Electrical - NYC Premier Properties & Infrastructure",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Leandro | Master Electrical NYC",
    description: "Intelligent low voltage and electrical infrastructure for NYC's premier properties.",
    images: ["https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}