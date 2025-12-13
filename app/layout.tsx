import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"; // Footer'ı içeri aktardık

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site başlığı ve açıklamasını güncelledik
export const metadata: Metadata = {
  title: "Erol Perde - Elazığ",
  description: "Elazığ'ın öncü perde ve ev dekorasyon mağazası. 2007'den beri hizmetinizde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr"> {/* Dili Türkçe yaptık */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer /> {/* Footer'ı sayfanın en altına ekledik */}
      </body>
    </html>
  );
}