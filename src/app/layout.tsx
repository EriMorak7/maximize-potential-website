import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maximize Potential Group | Professional Consulting & Advisory",
  description: "High-performance consulting, accounting, and tax advisory services for businesses and individuals seeking strategic excellence.",
  openGraph: {
    title: "Maximize Potential Group | Strategic Consulting & Advisory",
    description: "Empowering visionary businesses through exceptional financial clarity and strategic excellence.",
    url: "https://maximizepotential.com",
    siteName: "Maximize Potential Group LLC",
    images: [
      {
        url: "/img/business-consultants-is-checking-and-analysis-sales-figures-to-plan-business-strategies-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Maximize Potential Group LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximize Potential Group LLC",
    description: "Professional Consulting, Accounting, and Tax Advisory Services.",
    images: ["/img/business-consultants-is-checking-and-analysis-sales-figures-to-plan-business-strategies-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maximize Potential Group LLC",
    "url": "https://maximizepotential.com",
    "logo": "https://maximizepotential.com/img/logo.png",
    "description": "High-performance consulting, accounting, and tax advisory services for visionary businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "PA, NJ, DE, MD, TX, FL",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+10000000000",
      "contactType": "customer service"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
