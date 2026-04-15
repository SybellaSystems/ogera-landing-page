import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Strong SEO Metadata for Ogera
export const metadata: Metadata = {
  metadataBase: new URL("https://ogera.sybellasystems.co.rw"),

  title:
    "Ogera – Student Jobs, Internships & Remote Work Platform in Africa",

  description:
    "Ogera by Sybella Systems is Africa’s leading student-first job platform. Find remote jobs, internships, and earn online while building your career using TrustScore™.",

  keywords: [
    "student jobs Africa",
    "online jobs for students",
    "remote jobs Africa",
    "internships Africa",
    "earn money online students",
    "freelance platform Africa",
    "job platform Rwanda",
    "student work platform",
    "youth employment Africa",
    "Ogera jobs",
    "TrustScore system",
    "Sybella Systems Ogera",
  ],

  authors: [{ name: "Ogera by Sybella Systems" }],
  creator: "Ogera",
  publisher: "Sybella Systems",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ogera.sybellasystems.co.rw",
    siteName: "Ogera",

    title:
      "Ogera – Africa’s Student Job & Earning Platform",

    description:
      "Find student jobs, internships, and remote work across Africa. Ogera connects talent with real opportunities using TrustScore™ for skill-based hiring.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogera - Student Job Platform in Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ogera",
    creator: "@ogera",

    title:
      "Ogera – Build now. Graduate proud.",

    description:
      "Join Ogera to access student jobs, remote work, and real earning opportunities. Build your TrustScore™ and get hired based on skills.",

    images: ["/images/twitter-image.jpg"],
  },

  alternates: {
    canonical: "https://ogera.sybellasystems.co.rw",
    languages: {
      "en-US": "https://ogera.sybellasystems.co.rw",
      "fr-FR": "https://ogera.sybellasystems.co.rw/fr",
      "sw-KE": "https://ogera.sybellasystems.co.rw/sw",
      "rw-RW": "https://ogera.sybellasystems.co.rw/rw",
    },
  },

  verification: {
    google: "YOUR-GOOGLE-VERIFICATION-CODE",
    yandex: "YOUR-YANDEX-VERIFICATION-CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6D28D9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Structured Data (Organization Schema) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ogera",
            url: "https://ogera.sybellasystems.co.rw",
            logo: "https://ogera.sybellasystems.co.rw/images/ogera.png",
            sameAs: [
              "https://twitter.com/ogera",
              "https://www.linkedin.com/company/ogera",
              "https://www.facebook.com/ogera",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+250723776020",
              contactType: "Customer Support",
              areaServed: "Africa",
              availableLanguage: [
                "English",
                "French",
                "Swahili",
                "Kinyarwanda",
              ],
            },
          })}
        </Script>
{/* ✅ Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>

      <body className={`${nunito.className} antialiased bg-white text-gray-900`}>
        {children}
       
      </body>
    </html>
  );
}
