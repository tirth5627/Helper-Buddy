"use client";

import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#1a0833] flex items-center justify-center p-8">
      {/* Main Container */}
      <div className="w-full max-w-[90rem] bg-zinc-900 rounded-2xl shadow-[0_4px_80px_0_rgba(0,0,0,0.9)] overflow-hidden flex min-h-[40rem]">
        {/* Left side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative p-6">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <img
              src="https://data.mactechnews.de/534230.jpg"
              alt="Desert at night"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-xl" />
          </div>
          {/* Logo and Back button */}
          <div className="absolute top-12 left-12 right-12 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
              Helper <span className="text-black">Buddy</span>
            </div>
            <Button
              variant="secondary"
              className="bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
            >
              <Link href="/" className="text-black font-semibold">Back to website</Link>
              <ArrowRight className="ml-2 h-4 w-4 text-black font-semibold" />
            </Button>
          </div>
          <div className="absolute bottom-24 left-12 right-12">
            <h2 className="text-white text-4xl font-semibold leading-tight">
              Reliable, Fast & Affordable Services <br /> Your Helper Buddy is Just
              a Click Away
            </h2>
          </div>
        </div>
        {/* Right side - Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 xl:p-16 flex flex-col justify-center bg-zinc-950">
          <div className="max-w-[420px] mx-auto w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}