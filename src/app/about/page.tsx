"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/src/components//ui/Navbar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-white to-gray-500 text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-800">Cleaner Spaces, Happier Places</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mt-4">
              Eco-Friendly Solutions, Expertly Delivered
            </h2>
            <p className="text-gray-600 mt-6 text-lg">
              HelperBuddy offers professional house, office, and AC cleaning services across India. Our team ensures your spaces are spotless, fresh, and well-maintained.
            </p>
            <Link
              href="/"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg inline-block mt-6 hover:bg-gray-700 transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {["/img1.jpg", "/img2.jpg"].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Office Meeting"
                width={400}
                height={300}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          {[["Facebook", "https://www.facebook.com"], ["Instagram", "https://www.instagram.com"], ["LinkedIn", "https://www.linkedin.com"], ["Twitter", "https://x.com"]].map(([name, url], index) => {
            const Icon = name === "Facebook" ? Facebook : name === "Instagram" ? Instagram : name === "LinkedIn" ? Linkedin : Twitter;
            return (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <Icon className="text-gray-800 hover:text-gray-600 transition-colors duration-300" size={40} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
