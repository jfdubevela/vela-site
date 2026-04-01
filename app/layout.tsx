import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-845HP8M6TR";

const neueMontreal = localFont({
  src: [
    { path: "../public/fonts/PPNeueMontreal-Thin.otf",       weight: "100", style: "normal" },
    { path: "../public/fonts/PPNeueMontreal-Book.otf",       weight: "400", style: "normal" },
    { path: "../public/fonts/PPNeueMontreal-Italic.otf",     weight: "400", style: "italic" },
    { path: "../public/fonts/PPNeueMontreal-Medium.otf",     weight: "500", style: "normal" },
    { path: "../public/fonts/PPNeueMontreal-Bold.otf",       weight: "700", style: "normal" },
    { path: "../public/fonts/PPNeueMontreal-SemiBolditalic.otf", weight: "600", style: "italic" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELA | Solutions I.A. pour PME",
  description:
    "Vela est une micro-agence d'automatisation I.A. à Montréal dédiée aux PME québécoises. Gagnez en rentabilité et libérez votre temps grâce à nos workflows simples et fiables.",
  openGraph: {
    title: "VELA | Solutions I.A. pour PME",
    description:
      "Vela est une micro-agence d'automatisation I.A. à Montréal dédiée aux PME québécoises. Gagnez en rentabilité et libérez votre temps grâce à nos workflows simples et fiables.",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VELA | Solutions I.A. pour PME",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELA | Solutions I.A. pour PME",
    description:
      "Vela est une micro-agence d'automatisation I.A. à Montréal dédiée aux PME québécoises. Gagnez en rentabilité et libérez votre temps grâce à nos workflows simples et fiables.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${neueMontreal.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
