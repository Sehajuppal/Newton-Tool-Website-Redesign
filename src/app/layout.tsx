import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Newton Tool Repair Ltd. | Authorized Tool Service & Precision Sharpening in Surrey, BC",
  description: "Surrey's premier factory-authorized warranty repair and precision blade sharpening facility for DeWalt, Metabo, Rolair, Paslode, and Porter-Cable tools. Rapid contractor turnaround at #114 - 7533 135th St.",
  keywords: [
    "tool repair Surrey BC",
    "power tool repair Vancouver",
    "DeWalt authorized service center Surrey",
    "saw blade sharpening Surrey",
    "pneumatic nailer repair",
    "Paslode repair Vancouver",
    "Metabo tool service BC",
    "contractor tool repair",
  ],
  authors: [{ name: "Newton Tool Repair Ltd." }],
  creator: "Newton Tool Repair Ltd.",
  publisher: "Newton Tool Repair Ltd.",
  metadataBase: new URL("https://www.newtontool.ca"),
  alternates: {
    canonical: "https://www.newtontool.ca",
  },
  openGraph: {
    title: "Newton Tool Repair Ltd. | Authorized Tool Service & Precision Sharpening",
    description: "Zero downtime for Surrey trades. Factory-authorized repair for DeWalt, Metabo, Paslode, Rolair & precision carbide blade sharpening.",
    url: "https://www.newtontool.ca",
    siteName: "Newton Tool Repair Ltd.",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Newton Tool Repair Ltd.",
  "image": "https://www.newtontool.ca/images/logo.svg",
  "telephone": "+1-604-503-3632",
  "email": "gagan@newtontool.ca",
  "url": "https://www.newtontool.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#114 - 7533 135th Street",
    "addressLocality": "Surrey",
    "addressRegion": "BC",
    "postalCode": "V3W 0N6",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "49.1396",
    "longitude": "-122.8488"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:00",
      "closes": "15:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": "Tool Repair & Sharpening Services",
  "areaServed": ["Surrey", "Delta", "Langley", "Burnaby", "Richmond", "Vancouver", "Coquitlam"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ground text-ink antialiased selection:bg-accent selection:text-accent-ink">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
