"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Apple, Eye, EyeOff, ToggleLeft as Google } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className="text-4xl font-semibold text-white mb-2">Create an account</h1>
      <p className="text-zinc-400 mb-8">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 underline underline-offset-3">
          Log in
        </Link>
      </p>

      <form className="space-y-4">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="First name"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
          />
          <Input
            type="text"
            placeholder="Last name"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
          />
        </div>
        
        <Input
          type="email"
          placeholder="Email"
          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
        />
         <Input
          type="phonenumber"
          placeholder="Phone Number"
          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
          
        </div>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
          
        </div>

        <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white">
          Create account
        </Button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-950 px-2 text-zinc-400">Or register with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white">
            <Image src="/images/google-icon-updated.svg" alt="Google Icon" width={20} height={20} className="mr-2" />Google
          </Button>
          <Button variant="outline" className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white">
          <Image src="/images/apple-icon.svg" alt="Google Icon" width={20} height={20} className="mr-2" />Apple
          </Button>
        </div>
      </form>
    </>
  );
}