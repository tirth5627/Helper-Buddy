"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Apple, Eye, EyeOff, ToggleLeft as Google } from "lucide-react";
import { redirect } from 'next/navigation';
// import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  const [rememberMe, setRememberMe] = useState(false);


  const handleLogin = async (e:any) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, rememberMe }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
    } else {
      alert("Login successful!");
      redirect("/");
    }
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-white mb-2">Welcome back</h1>
      <p className="text-zinc-400 mb-8">
        New to Helper Buddy?{" "}
        <Link href="/auth/register" className="text-purple-400 hover:text-purple-300 underline underline-offset-3">
          Create an account
        </Link>
      </p>

      <form className="space-y-4" >
        <Input
          type="email"
          placeholder="Email"
          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
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

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className="border-zinc-700 data-[state=checked]:bg-purple-600" 
            checked={rememberMe}
            onChange={(e) => setRememberMe(!rememberMe)}
            />
            <label
              htmlFor="remember"
              className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            Forgot password?
          </Link>
        </div>

        <Button type ="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white">
          Sign in
        </Button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-950 px-2 text-zinc-400">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white">
          <Image src="/images/google-icon-updated.svg" alt="Google Icon" width={20} height={20} className="mr-2" />
            Google
          </Button>
          <Button variant="outline" className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white">
          <Image src="/images/apple-icon.svg" alt="Google Icon" width={20} height={20} className="mr-2" />
            Apple
          </Button>
        </div>
      </form>
    </>
  );
}

function setError(error: any) {
  throw new Error("Function not implemented.");
}
