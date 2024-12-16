import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0mlmrgwbziwquaq.public.blob.vercel-storage.com"
      },
      {
        protocol: "https",
        hostname: "9cbtne3np5te3qdl.public.blob.vercel-storage.com", // Added the new hostname
      },
    ]
  }
};

export default nextConfig;
