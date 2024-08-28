import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const lora = Lora({ subsets: ["latin"], weight: ['400','500','600','700'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Kriti-Healthcare",
  description: "A healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', lora.variable)}>{children}</body>
    </html>
  );
}
