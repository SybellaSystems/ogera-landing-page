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
    default: "Ogera | Student Jobs, Internships & Freelance Platform in Africa",
    template: "%s | Ogera",
  },

  description:
    "Find student jobs, internships, and freelance work in Africa. Ogera connects students with real opportunities, remote jobs, and entry-level careers across Africa.",

  keywords: [
    "student jobs Africa",
    "internships for African students",
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
    title: "Student Jobs, Internships & Freelance Platform in Africa",
    description:
      "Find verified student jobs, internships, and freelance opportunities across Africa. Build experience and earn online with Ogera.",
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
    creator: "@sybellasystems",
    title: "Student Jobs & Internships in Africa | Ogera",
    description:
      "Join Ogera to find internships, freelance work, and student jobs across Africa. Build your career while earning online.",
    images: ["/images/twitter-image.jpg"],
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
        {/* SEO SCHEMA - ORGANIZATION */}
        {/* ===================== */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
                "Student jobs, internships, and freelance platform connecting African students with real opportunities.",
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
                    text: "Ogera is a student jobs platform in Africa connecting students with internships, freelance jobs, and entry-level opportunities.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Ogera free for students?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Ogera is completely free for students to find jobs and internships.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What jobs can I find on Ogera?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Students can find internships, freelance jobs, remote work, and entry-level jobs across Africa.",
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