import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustScore — Verified Student Profiles for Employers | Ogera",
  description:
    "Ogera TrustScore is the transparent rating system that helps African students stand out to employers. Built from Intelligence (40%), Experience (35%), and Interaction (25%), it lets recruiters hire with confidence on Africa's leading students job platform.",
  keywords: [
    "Ogera TrustScore",
    "TrustScore",
    "student TrustScore",
    "verified student profiles",
    "student ranking",
    "student credibility score",
    "hire verified students",
    "student job platform Africa",
    "student reputation score",
    "Ogera students job platform",
    "Intelligence Experience Interaction",
    "student skill verification",
    "Rwanda student jobs",
    "East Africa student recruitment",
  ],
  alternates: {
    canonical: "https://ogera.sybellasystems.co.rw/trustscore",
  },
  openGraph: {
    type: "website",
    url: "https://ogera.sybellasystems.co.rw/trustscore",
    siteName: "Ogera",
    title: "Ogera TrustScore — How African Students Prove Their Potential",
    description:
      "Discover how Ogera TrustScore measures student potential across Intelligence, Experience, and Interaction — giving employers a trusted, transparent way to hire top student talent across Africa.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ogera TrustScore — verified student profiles on Africa's students job platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ogera",
    creator: "@ogera",
    title: "Ogera TrustScore — Verified Student Profiles",
    description:
      "The transparent rating system that helps African students get hired. Intelligence + Experience + Interaction = TrustScore.",
    images: ["/images/twitter-image.jpg"],
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
};

export default function TrustScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
