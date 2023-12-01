import stars from "@/assets/stars.webp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "@/lib/Providers";
import { cn } from "@nextui-org/react";
import type { Metadata } from "next";
import { Exo } from "next/font/google";
import Image from "next/image";
import { PropsWithChildren } from "react";
import "./globals.css";

const font = Exo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Exoplanets",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="bg-black dark">
      <body className={cn(font.className, "")}>
        <Providers>
          <div className="flex min-h-[100svh] flex-col">
            <div className="fixed inset-0 -z-10 h-screen">
              <Image
                src={stars}
                fill
                alt="stars"
                sizes="100vw"
                className="z-10 select-none object-cover"
              />
              <div className="absolute inset-0 z-20 bg-black/40" />
            </div>
            <Header />
            <main className="container mx-auto mb-32 mt-16 max-w-screen-xl p-8 text-white">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
