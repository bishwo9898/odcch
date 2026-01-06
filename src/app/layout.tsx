import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Disabled Child Care Home — Inclusive Care & Support",
  description:
    "A professional NGO focused on supporting children with diverse disabilities in Nepal. Learn, donate, volunteer, and connect.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Om Disabled Child Care Home (ODCCH)",
    description:
      "Support children with disabilities in Nepal. Donate, volunteer, and learn about our mission.",
    url: "https://odcch.org",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ODCCH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Disabled Child Care Home",
    description:
      "Support children with disabilities in Nepal. Donate, volunteer, and learn about our mission.",
    images: ["/og-image.png"],
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
        <a href="#main" className="sr-only focus:not-sr-only focus:block p-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
