/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Increase limit (adjust as needed)
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "scrubnbubbles.com",
      },
    ],
  },
};

module.exports = nextConfig;
