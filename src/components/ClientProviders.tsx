"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import ProgressProvider from "@/src/components/ProgressSidebar";
import { CartProvider } from "@/src/context/CartContext";
import Providers from "@/src/components/other/queryprovider";
import NavbarWrapper from "@/src/components/NavbarWrapper";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/src/components/other/footer";
import { usePathname } from "next/navigation";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <ClerkProvider>
      <Providers>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <CartProvider>
          <ProgressProvider />
          <div className="flex-1 flex flex-col">
            <NavbarWrapper />
            <main className="flex-1">
              {children}
              <Analytics />
            </main>
          </div>
          {!isAdminRoute && <Footer />}
        </CartProvider>
      </Providers>
    </ClerkProvider>
  );
}
