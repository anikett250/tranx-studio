import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smoothscroll";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Tranx Studio",
  description: "Premium Web Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${geist.className} min-h-full flex flex-col`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
