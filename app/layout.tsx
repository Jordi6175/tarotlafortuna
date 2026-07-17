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
  metadataBase: new URL("https://tarotlafortuna.com"),

  title: {
    default: "Tarot La Fortuna | Tarotista en Girona y Consultas Online",
    template: "%s | Tarot La Fortuna",
  },

  description:
    "Tarotista en Girona. Consultas de tarot por WhatsApp, teléfono, online y presenciales. Lecturas de amor, trabajo, dinero y futuro con atención personalizada.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Tarot La Fortuna",
    description:
      "Consultas de tarot en Girona y online. Lecturas de amor, trabajo, dinero y futuro.",
    url: "https://tarotlafortuna.com",
    siteName: "Tarot La Fortuna",
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarot La Fortuna",
    description:
      "Consultas de tarot en Girona y online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "transparent" }}
      >
        {children}
      </body>
    </html>
  );
}