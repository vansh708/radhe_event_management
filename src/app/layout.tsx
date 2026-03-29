import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radhey Events Management | Premium Event Planning in Amravati",
  description: "Experience the magic of traditional and modern Indian events with Radhey Events Management. Owned by Pithe Brothers, based in Porgavhan, Amravati.",
  verification: {
    google: "GoQKh811uJ7-1k6SowRLwX7q7Je-9XUCW2FKuy6Qp3Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-inter bg-background text-foreground min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
