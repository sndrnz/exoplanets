import stars from "@/assets/stars.webp";
import { Providers } from "@/lib/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { PropsWithChildren } from "react";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exoplanets",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="bg-black dark">
      <body className={font.className}>
        <Providers>
          <div className="fixed inset-0 -z-10">
            <Image
              src={stars}
              fill
              alt="stars"
              className="z-10 select-none object-cover"
            />
            <div className="absolute inset-0 z-20" />
          </div>
          <main className="container mx-auto max-w-4xl p-8 text-white">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
