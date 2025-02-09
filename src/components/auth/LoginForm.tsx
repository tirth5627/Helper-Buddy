"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setEmailError(null);
    setPasswordError(null);

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email || !password) {
      if (!email) setEmailError("Email is required.");
      if (!password) setPasswordError("Password is required.");
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result || result.error) {
      console.error("Sign-in error:", result?.error);
    
      if (result?.error?.includes("User does not exist")) {
        setEmailError("User not found. Please check your email.");
      } else if (result?.error?.includes("Incorrect password")) {
        setPasswordError("Invalid password. Please try again.");
      } else {
        setEmailError("User not found. Please check your email.");
      }
    } else {
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    const result = await signIn("google", { redirect: false, callbackUrl: "/" });

    if (result?.error) {
      setError("Google authentication failed. Try again.");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="max-w-md w-full">
      <h1 className="text-4xl font-semibold text-white mb-2">Welcome back</h1>
      <p className="text-zinc-400 mb-6">
        New to Helper Buddy?{" "}
        <Link href="/auth/register" className="text-purple-400 hover:text-purple-300 underline">
          Create an account
        </Link>
      </p>

      {error && <p className="text-red-500 text-sm bg-red-100 p-2 rounded mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
            required
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" name="remember" className="border-zinc-700 data-[state=checked]:bg-purple-600" />
            <label htmlFor="remember" className="text-sm text-zinc-400">Remember me</label>
          </div>
          <Link href="/auth/forgot-password" className="text-sm text-purple-400 hover:text-purple-300">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white">
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

        <div className="grid grid-cols-1 gap-4">
          <Button
            type="button"
            variant="outline"
            className="border-zinc-700 text-black hover:bg-zinc-800 hover:text-white flex items-center justify-center"
            onClick={handleGoogleSignIn}
          >
            <Image src="/images/google-icon-updated.svg" alt="Google Icon" width={20} height={20} className="mr-2" />
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
