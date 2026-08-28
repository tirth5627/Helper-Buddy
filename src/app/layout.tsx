import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProviders from "@/src/components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helper Buddy – Reliable Home Services at Your Doorstep",
  description:
    "Book trusted home services like cleaning, plumbing, appliance repair, and more. Expert help delivered at your preferred time and location.",
  openGraph: {
    title: "Helper Buddy – Reliable Home Services at Your Doorstep",
    description:
      "Book trusted home services like cleaning, plumbing, appliance repair, and more.",
    type: "website",
  },
};

import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col`}>
          <ClientProviders>{children}</ClientProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
