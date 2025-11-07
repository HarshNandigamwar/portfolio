import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Shriharsh Nandigamwar",
  description: "Built with Love by Shriharsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
