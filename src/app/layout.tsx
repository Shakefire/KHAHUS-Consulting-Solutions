import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://khahusconsulting.com.ng'),
  title: "KHAHUS Consulting Solutions | Professional Consulting & Business Solutions",
  description: "KHAHUS Consulting Solutions provides professional consulting, training and business solutions supporting organizational planning, capacity development and sustainable business performance.",
  keywords: ["consulting services", "management consulting", "professional training", "capacity building", "budgeting and forecasting", "business advisory", "organizational development", "planning consultancy", "consulting services in Nigeria"],
  authors: [{ name: "KHAHUS Consulting Solutions" }],
  openGraph: {
    title: "KHAHUS Consulting Solutions | Professional Consulting & Business Solutions",
    description: "Professional consulting, training and business solutions designed to strengthen planning, capacity and organizational performance.",
    url: "https://khahusconsulting.com.ng",
    siteName: "KHAHUS Consulting Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHAHUS Consulting Solutions | Professional Consulting & Business Solutions",
    description: "Professional consulting, training and business solutions supporting organizational planning and performance.",
    images: ["/logo.png"],
  },
  icons: {
    icon: { url: "/icon.png?v=3", type: "image/png" },
    shortcut: "/icon.png?v=3",
    apple: "/apple-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-khahusCharcoal bg-khahusMist`}>
        {children}
      </body>
    </html>
  );
}
