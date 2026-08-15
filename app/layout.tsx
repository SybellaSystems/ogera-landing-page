import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// ==========================
// SEO METADATA (OPTIMIZED)
// ==========================
export const metadata: Metadata = {
  metadataBase: new URL("https://ogera.sybellasystems.co.rw"),

  title: {
    default: "Ogera | Student Jobs, Internships & Career Development Platform in Africa",
    template: "%s | Ogera",
  },

  description:
    "Find student jobs, internships, and career development resources in Africa. Ogera connects students with real opportunities, freelance work, and mentorship across Africa.",

  keywords: [
    "student jobs Africa",
    "internships for African students",
    "career development platform students Africa",
    "online jobs for students Africa",
    "freelance jobs Africa",
    "remote jobs for students",
    "entry level jobs Africa",
    "graduate jobs Africa",
    "youth employment Africa",
    "part time jobs students Africa",
    "student job platform Africa",
    "internship platform Africa",
    "earn money online students Africa",
  ],

  authors: [{ name: "Ogera by Sybella Systems" }],
  creator: "Ogera",
  publisher: "Sybella Systems",

  alternates: {
    canonical: "https://ogera.sybellasystems.co.rw",
    languages: {
      "en-US": "https://ogera.sybellasystems.co.rw",
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },

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
    title: "Student Jobs, Internships & Career Development Platform in Africa",
    description:
      "Find verified student jobs, internships, and career development resources across Africa. Build experience and grow your career with Ogera.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogera - Student Job & Career Development Platform in Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ogera",
    creator: "@sybellasystems",
    title: "Student Jobs, Internships & Career Development | Ogera",
    description:
      "Join Ogera to find internships, student jobs, and career development resources across Africa. Build your professional future today.",
    images: ["/images/twitter-image.jpg"],
  },

  verification: {
    google: "YOUR-ACTUAL-GOOGLE-VERIFICATION-CODE", // Replace with your real code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${nunito.className} antialiased bg-white text-gray-900`}
      >
        {/* ===================== */}
        {/* GOOGLE ANALYTICS */}
        {/* ===================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MYPLT8Q17H"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-MYPLT8Q17H', {
              send_page_view: true
            });
          `}
        </Script>

        {/* ===================== */}
        {/* SEO SCHEMA - ORGANIZATION & WEBSITE */}
        {/* ===================== */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Ogera",
                  alternateName: "Ogera Africa",
                  url: "https://ogera.sybellasystems.co.rw",
                  logo: "https://ogera.sybellasystems.co.rw/images/logo.png",
                  sameAs: [
                    "https://twitter.com/ogera",
                    "https://linkedin.com/company/sybella-systems",
                  ],
                  description:
                    "Student jobs, internships, and career development platform connecting African students with real opportunities.",
                  areaServed: {
                    "@type": "Continent",
                    name: "Africa",
                  },
                },
                {
                  "@type": "WebSite",
                  url: "https://ogera.sybellasystems.co.rw",
                  name: "Ogera",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://ogera.sybellasystems.co.rw/jobs?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />

        {/* ===================== */}
        {/* SEO SCHEMA - FAQ */}
        {/* ===================== */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Ogera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ogera is a student jobs, internships, and career development platform in Africa connecting students with professional opportunities and guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Ogera free for students?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Ogera is completely free for students to find jobs, internships, and career growth resources.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What can I find on Ogera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Students can find internships, remote freelance jobs, entry-level opportunities, and career development advice across Africa.",
                  },
                },
              ],
            }),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}