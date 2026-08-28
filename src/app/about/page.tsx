import { Metadata } from "next";
import AboutAnimations from "@/src/components/AboutAnimations";

export const metadata: Metadata = {
  title: "About Us – Helper Buddy",
  description:
    "Learn about Helper Buddy — a technology platform transforming the way you experience home services. Quality assured, convenient, and partner-empowered.",
};

export default function AboutUsPage() {
  return <AboutAnimations />;
}
