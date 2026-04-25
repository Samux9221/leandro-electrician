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
  // Título que aparece na aba do navegador e no Google
  title: {
    default: "Leandro | Intelligent Low Voltage & Master Electrical NYC",
    template: "%s | Leandro Electrical"
  },
  description: "High-performance networking, smart automation, and fully licensed electrical infrastructure for NYC's premier properties. Fast execution, zero permit delays.",
  
  // Open Graph: É isso que o WhatsApp, Facebook e LinkedIn leem
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.leandro-electrician.com", // Substitua pelo domínio real depois
    siteName: "Leandro Electrical",
    title: "Leandro | Intelligent Low Voltage & Master Electrical NYC",
    description: "Bypass DOB red tape. Deploy enterprise networking and smart home automation with zero permit delays in NYC.",
    images: [
      {
        url: "/og-image.jpg", // Caminho da imagem que criaremos
        width: 1200,
        height: 630,
        alt: "Leandro Electrical - NYC Premier Properties",
      },
    ],
  },
  
  // Twitter Card: Para links no Twitter/X e iMessage em alguns casos
  twitter: {
    card: "summary_large_image",
    title: "Leandro | Master Electrical NYC",
    description: "Intelligent low voltage and electrical infrastructure for NYC's premier properties.",
    images: ["/og-image.jpg"],
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