import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   metadataBase: new URL('https://ssa-hunter-valley.vercel.app'),
  title: "SSA Hunter Valley - Premier Tennis Academy | Multi-Surface Courts",
  description: "First one-stop tennis academy in Asia Pacific with 60 multi-surface courts. World-class coaching, WTA & ATP facilities in Hunter Valley, NSW. Train with professionals.",
  keywords: "tennis academy, Hunter Valley, SSA, tennis coaching, multi-surface courts, WTA, ATP, tennis training, Australia tennis, professional tennis academy",
  authors: [{ name: "SSA Hunter Valley" }],
  openGraph: {
    title: "SSA Hunter Valley - Premier Tennis Academy",
    description: "First venue in the world with 60 multi-surface courts. Professional tennis training in Hunter Valley, NSW.",
    url: "https://ssa-hunter-valley.vercel.app",
    siteName: "SSA Hunter Valley",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSA Hunter Valley Tennis Academy",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSA Hunter Valley - Premier Tennis Academy",
    description: "First one-stop tennis academy in Asia Pacific with 60 multi-surface courts.",
    images: ["/twitter-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "SSA Hunter Valley",
    "description": "Premier tennis academy with 60 multi-surface courts",
    "url": "https://ssa-hunter-valley.vercel.app",
    "telephone": "+61-5642589752",
    "email": "info@ssagroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 Wills Hill Road",
      "addressLocality": "Lovedale",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-32.7569",
      "longitude": "151.3295"
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ssa-hunter-valley.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-matter">{children}</body>
    </html>
  );
}