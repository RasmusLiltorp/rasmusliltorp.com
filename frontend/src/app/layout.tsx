import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rasmus Liltorp",
  description: "Software engineering student from Odense, Denmark. Building clean, minimal applications with .NET, TypeScript, and modern web technologies.",
  keywords: ["Rasmus Liltorp", "Software Engineer", "Developer", "Denmark", ".NET", "TypeScript", "Next.js"],
  authors: [{ name: "Rasmus Liltorp" }],
  creator: "Rasmus Liltorp",
  openGraph: {
    title: "Rasmus Liltorp",
    description: "Software engineering student from Odense, Denmark. Building clean, minimal applications with .NET, TypeScript, and modern web technologies.",
    url: "https://rasmusliltorp.com",
    siteName: "Rasmus Liltorp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-satoshi ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}