import type { Metadata } from "next";
import { Noto_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Wedding Week",
  description: "Luxury Fashion & Jewellery Exhibitions",
  icons: {
    icon: "/src/app/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        headingFont.variable,
        notoSans.variable,
        "font-sans",
        "h-full",
        "antialiased",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
