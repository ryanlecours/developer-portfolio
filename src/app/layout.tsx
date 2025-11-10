import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ryan LeCours – Software Engineer',
  description:
    'Frontend-leaning full-stack engineer specializing in React, TypeScript, and GraphQL.',
    openGraph: {
    title: "Ryan LeCours — Frontend & Full-Stack Engineer",
    description:
      "Building performant, accessible web experiences with React, TypeScript, GraphQL, and modern tooling.",
    url: "https://ryanlecours.dev",
    siteName: "Ryan LeCours Portfolio",
    images: [
      {
        url: "https://ryanlecours.dev/me.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan LeCours — Frontend Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan LeCours — Frontend & Full-Stack Engineer",
    description:
      "Frontend-leaning full-stack engineer building fast, accessible UI platforms that help teams ship with confidence.",
    images: ["https://ryanlecours.dev/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
