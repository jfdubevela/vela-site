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
  metadataBase: new URL("https://velavelavela.com"),
  title: {
    default: "VELA | Automatisation, Formation et Coaching I.A.",
    template: "%s | VELA",
  },
  description:
    "VELA accompagne les PME québécoises avec trois expertises en intelligence artificielle : automatisations sur mesure, formations et coaching individuel. Concrets, accessibles, orientés résultats.",
  openGraph: {
    title: "VELA | Automatisation, Formation et Coaching I.A.",
    description:
      "VELA accompagne les PME québécoises avec trois expertises en intelligence artificielle : automatisations sur mesure, formations et coaching individuel. Concrets, accessibles, orientés résultats.",
    url: "https://velavelavela.com",
    siteName: "VELA",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VELA | Automatisation, Formation et Coaching I.A.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELA | Automatisation, Formation et Coaching I.A.",
    description:
      "VELA accompagne les PME québécoises avec trois expertises en intelligence artificielle : automatisations sur mesure, formations et coaching individuel.",
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
