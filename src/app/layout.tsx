import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Archivo with its width axis: condensed headings and figures, normal-width text
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.javirivash.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Javier Rivas — Frontend & Full-Stack Engineer",
  description:
    "Frontend & Full-Stack Engineer with 4+ years of experience building scalable, accessible user interfaces with React, TypeScript and Next.js. Remote from Mexico.",
  keywords: [
    "Frontend Engineer",
    "Full-Stack Engineer",
    "Next.js",
    "React Developer",
    "TypeScript",
    "UI Engineer",
    "Web Developer",
    "Javier Rivas",
  ],
  authors: [{ name: "Javier Rivas" }],
  creator: "Javier Rivas",
  openGraph: {
    title: "Javier Rivas — Frontend & Full-Stack Engineer",
    description:
      "Frontend & Full-Stack Engineer with 4+ years of experience building scalable, accessible user interfaces. Remote from Mexico.",
    url: siteUrl,
    siteName: "Javier Rivas",
    locale: "en_US",
    type: "website",
    // TODO: Add social sharing image (recommended: 1200x630px)
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Javier Rivas — Frontend & Full-Stack Engineer",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
