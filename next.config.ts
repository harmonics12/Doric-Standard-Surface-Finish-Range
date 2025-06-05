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
  // Disable problematic CSS optimizations
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
  // Disable webpack optimizations that might affect CSS
  webpack: (config) => {
    config.optimization.splitChunks = false;
    return config;
  },
};

export default nextConfig;
