import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/Analytics";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { CookieConsent } from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paintinga2.com'),
  title: {
    default: "PaintingA2 - Ann Arbor's Premier Painting Directory",
    template: "%s | PaintingA2"
  },
  description: "Find trusted, professional painting contractors in Ann Arbor, MI. Browse verified painters for residential, commercial, interior, and exterior projects.",
  keywords: ['painting contractors Ann Arbor', 'Ann Arbor painters', 'residential painting', 'commercial painting', 'interior painting', 'exterior painting', 'house painters Ann Arbor MI'],
  authors: [{ name: 'PaintingA2' }],
  creator: 'PaintingA2',
  publisher: 'PaintingA2',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paintinga2.com',
    siteName: 'PaintingA2',
    title: "PaintingA2 - Ann Arbor's Premier Painting Directory",
    description: "Find trusted, professional painting contractors in Ann Arbor, MI. Browse verified painters for residential, commercial, interior, and exterior projects.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PaintingA2 - Ann Arbor Painting Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PaintingA2 - Ann Arbor's Premier Painting Directory",
    description: "Find trusted, professional painting contractors in Ann Arbor, MI.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// REPLACE WITH YOUR GOOGLE ANALYTICS ID
// Get it from: https://analytics.google.com
// Looks like: G-XXXXXXXXXX
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
