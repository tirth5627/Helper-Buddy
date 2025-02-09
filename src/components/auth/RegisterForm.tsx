"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("first_name"),
      lastName: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Signup failed");
      }

router.push("/login");
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-white mb-2">Create an account</h1>
      <p className="text-zinc-400 mb-8">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 underline underline-offset-3">
          Log in
        </Link>
      </p>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <Input
            type="text"
            name="first_name"
            placeholder="First name"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
            required
          />
          <Input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
            required
          />
        </div>

        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
          required
        />

        {/* <Input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400"
        /> */}

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
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
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 pr-10"
            required
          />
        </div>

        <Button
          className="w-full bg-purple-600 hover:bg-purple-500 text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </>
  );
}
