import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  PHONE,
  EMAIL,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armapokras.vercel.app"),
  title: {
    default: `${SITE_NAME} — Автомалярка в Пятигорске | Покраска авто, полировка`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "автомалярка Пятигорск",
    "покраска авто Пятигорск",
    "покраска Лада Hyundai Kia Пятигорск",
    "полировка авто Пятигорск",
    "покраска автомобиля КМВ",
    "автомаляр Пятигорск",
    "антикор автомобиля Пятигорск",
    "локальная покраска авто",
    "полная покраска автомобиля",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Профессиональная покраска автомобилей в Пятигорске`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Покраска авто в Пятигорске`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://armapokras.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Московская улица, 31",
    addressLocality: "Пятигорск",
    addressRegion: "Ставропольский край",
    postalCode: "357500",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.048374,
    longitude: 43.058821,
  },
  url: "https://armapokras.vercel.app",
  image: "/logo.png",
  priceRange: "₽₽",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Пятигорск",
  },
  serviceType: [
    "Покраска автомобилей",
    "Полировка",
    "Антикоррозийная обработка",
    "Покраска дисков",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
