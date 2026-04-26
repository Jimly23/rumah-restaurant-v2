import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

// Cinzel (Heading)
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
});

// Playfair Display (Body text)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
});

// Default fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rumah Restaurant",
  description: "Authentic Malay & Singaporean Cuisine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${cinzel.variable} 
        ${playfair.variable} 
        ${geistSans.variable} 
        ${geistMono.variable} 
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}