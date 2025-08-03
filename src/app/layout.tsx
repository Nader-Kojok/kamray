import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KAMRAY Coaching & Consulting | Dr. Abdelmonem Kaaniche",
    template: "%s | KAMRAY Coaching & Consulting"
  },
  description: "Expert tuniso-africain en coaching et consulting. Transformation personnelle et professionnelle avec Dr. Abdelmonem Kaaniche, fondateur de KAMRAY. Spécialiste du leadership et du développement stratégique en Afrique.",
  keywords: "coaching, consulting, leadership, développement personnel, Afrique, Tunisie, transformation, Dr Abdelmonem Kaaniche, KAMRAY, coaching stratégique, développement professionnel, coaching exécutif, formation leadership",
  authors: [{ name: "Dr. Abdelmonem Kaaniche", url: "https://kamray.com" }],
  creator: "Dr. Abdelmonem Kaaniche",
  publisher: "KAMRAY Coaching & Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/kamray_logo.svg", type: "image/svg+xml" },
      { url: "/kamray_logo.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/kamray_logo.svg", sizes: "192x192", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/kamray_logo.svg", sizes: "180x180", type: "image/svg+xml" }
    ],
    shortcut: "/kamray_logo.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "KAMRAY Coaching & Consulting | Dr. Abdelmonem Kaaniche",
    description: "Expert tuniso-africain en coaching et consulting pour votre transformation personnelle et professionnelle. Spécialiste du leadership et du développement stratégique en Afrique.",
    type: "website",
    locale: "fr_FR",
    url: "https://kamray.com",
    siteName: "KAMRAY Coaching & Consulting",
    images: [
      {
        url: "/og-image-with-photo.svg",
        width: 1200,
        height: 630,
        alt: "Dr. Abdelmonem Kaaniche - Expert en coaching et consulting KAMRAY",
        type: "image/svg+xml",
      },
      {
        url: "/abdelmonem.webp",
        width: 800,
        height: 600,
        alt: "Dr. Abdelmonem Kaaniche - Fondateur KAMRAY",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KAMRAY Coaching & Consulting | Dr. Abdelmonem Kaaniche",
    description: "Expert tuniso-africain en coaching et consulting pour votre transformation personnelle et professionnelle.",
    images: ["/og-image-with-photo.svg"],
    creator: "@kamray_coaching",
    site: "@kamray_coaching",
  },
  alternates: {
    canonical: "https://kamray.com",
    languages: {
      "fr-FR": "https://kamray.com",
      "en-US": "https://kamray.com/en",
      "ar-TN": "https://kamray.com/ar",
    },
  },
  category: "Business",
  classification: "Coaching and Consulting Services",
  other: {
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "KAMRAY",
    "application-name": "KAMRAY Coaching",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <StructuredData />
        <Header />
        <SmoothScroll />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
