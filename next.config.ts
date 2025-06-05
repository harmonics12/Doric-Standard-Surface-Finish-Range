import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    esmExternals: 'loose'
  },
  // Disable problematic CSS optimizations
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable webpack optimizations that might affect CSS
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      sideEffects: false,
    };
    return config;
  },
};

export default nextConfig;
