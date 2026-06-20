import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Jobs, Internships & Freelance Work in Africa | Ogera",
  description:
    "Browse verified student jobs, internships, freelance and remote opportunities across Africa. Find real work and build experience with Ogera.",

  alternates: {
    canonical: "https://ogera.sybellasystems.co.rw/jobs",
  },

  openGraph: {
    title: "Student Jobs in Africa | Ogera",
    description:
      "Find internships, freelance and remote jobs for students across Africa.",
    url: "https://ogera.sybellasystems.co.rw/jobs",
    type: "website",
    images: [
      {
        url: "https://ogera.sybellasystems.co.rw/images/jobs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Ogera Jobs Board",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}