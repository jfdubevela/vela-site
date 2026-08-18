import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
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

// Texte courant : paragraphes, interfaces, formulaires, tableaux.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Étiquettes, chiffres, prix.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velavelavela.com"),
  title: {
    default: "VELA | Formation, coaching et automatisation I.A. pour PME du Québec",
    template: "%s | VELA",
  },
  description:
    "Coaching, formations et automatisations I.A. pour PME à Montréal. Gagnez du temps et passez à l'action. Réservez votre appel découverte gratuit.",
  openGraph: {
    title: "VELA | Formation, coaching et automatisation I.A. pour PME du Québec",
    description:
      "Coaching, formations et automatisations I.A. pour PME à Montréal. Gagnez du temps et passez à l'action. Réservez votre appel découverte gratuit.",
    url: "https://velavelavela.com",
    siteName: "VELA",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VELA | Coaching, Formation et Automatisation I.A.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELA | Formation, coaching et automatisation I.A. pour PME du Québec",
    description:
      "Coaching, formations et automatisations I.A. pour PME à Montréal. Gagnez du temps et passez à l'action. Réservez votre appel découverte gratuit.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${neueMontreal.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
    >
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
