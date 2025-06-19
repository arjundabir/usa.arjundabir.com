import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "States I've Visited",
  description:
    "Track and explore the US states I've visited with interactive maps, travel memories, and personal experiences across America.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/light-mode-favicon.png",
        href: "/favicons/light-mode-favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/dark-mode-favicon.png",
        href: "/favicons/dark-mode-favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
