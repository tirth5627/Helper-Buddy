import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/src/context/CartContext";
import Navbar from "@/src/components/ui/Navbar";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Helper Buddy",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <CartProvider>
          <div className="flex-1">
            <Navbar />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
