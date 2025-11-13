import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

// ✅ Strong SEO Metadata for Ogera
export const metadata: Metadata = {
  title: "Ogera — Empowering Businesses with Smart Digital Solutions",
  description:
    "Ogera helps organizations streamline operations, enhance productivity, and drive growth through intelligent, easy-to-use digital tools.",
  keywords: [
    "Ogera",
    "business management",
    "productivity software",
    "workflow automation",
    "organization software",
    "digital transformation",
    "Ogera platform",
  ],
  authors: [{ name: "Ogera" }],
  creator: "Ogera",
  publisher: "Ogera",
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
    url: "https://ogera.com",
    siteName: "Ogera",
    title: "Ogera — Empowering Businesses with Smart Digital Solutions",
    description:
      "Simplify your operations and scale your organization with Ogera’s modern, data-driven business management platform.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogera - Empowering Businesses with Smart Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ogera",
    creator: "@ogera",
    title: "Ogera — Empowering Businesses with Smart Digital Solutions",
    description:
      "Ogera provides modern digital solutions to help businesses work smarter and achieve more.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://ogera.com",
    languages: {
      "en-US": "https://ogera.com",
      "fr-FR": "https://ogera.com/fr",
      "sw-KE": "https://ogera.com/sw",
      "rw-RW": "https://ogera.com/rw",
    },
  },
  verification: {
    google: "YOUR-GOOGLE-VERIFICATION-CODE",
    yandex: "YOUR-YANDEX-VERIFICATION-CODE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ogera",
            url: "https://ogera.com",
            logo: "https://ogera.com/images/ogera.png",
            sameAs: [
              "https://twitter.com/ogera",
              "https://www.linkedin.com/company/ogera",
              "https://www.facebook.com/ogera",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+250700000000",
              contactType: "Customer Support",
              areaServed: "Worldwide",
              availableLanguage: ["English", "French", "Swahili", "Kinyarwanda"],
            },
          })}
        </Script>

        {/* ✅ Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased bg-white text-gray-900">
        {children}

        {/* ✅ Google Analytics (replace ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  );
}
