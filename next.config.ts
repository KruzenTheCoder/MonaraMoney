import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    viewTransition: true,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
