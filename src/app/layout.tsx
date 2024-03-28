import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ReactQueryWrapper from "@/components/wrappers/react-query";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clepher X Alphavantage",
  description: "Portfolio of stocks with Alphavantage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-gray-50   font-sans antialiased", inter.className)}>
        <ReactQueryWrapper>
          <Header />
          <main className="min-h-[calc(100vh-120px)]">
            <div className="container">
              {children}
            </div>
          </main>
          <Footer />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
