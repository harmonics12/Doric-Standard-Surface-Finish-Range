import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable server-side features since we're deploying to Cloudflare Pages
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
