import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/PageTransition/PageTransition";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calvin Gomes",
  description: "Portfolio",

  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: '#e1dfdd',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <PageTransition />
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
