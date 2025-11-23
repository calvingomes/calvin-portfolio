import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/PageTransition/PageTransition";
import Navbar from "@/components/Navbar/Navbar";

import styles from './layout.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calvin Gomes",
  description: "Portfolio",

  themeColor: "#e1dfdd",

  appleWebApp: {
    statusBarStyle: "black-translucent",
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
        <PageTransition />
        <Navbar />
        <div className={styles.pageContainer}>
          {children}
        </div>
      </body>
    </html>
  );
}
