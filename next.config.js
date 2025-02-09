/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    appDir: true, // Ensure this is enabled for Next.js App Router
  },
};

module.exports = nextConfig;
