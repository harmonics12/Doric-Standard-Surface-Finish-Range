import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Doric Standard Surface Finish Range",
  description: "Premium architectural finishes engineered for superior durability and exceptional aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @media print {
            @font-face {
              font-family: 'Geist';
              font-style: normal;
              font-display: swap;
              src: local('Geist');
            }
            @font-face {
              font-family: 'Geist Mono';
              font-style: normal;
              font-display: swap;
              src: local('Geist Mono');
            }
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
