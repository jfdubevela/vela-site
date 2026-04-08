import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [75, 80, 90],
  },
  typescript: {
    // Type checking runs locally and in CI — skipped during Docker build to reduce memory usage on VPS
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
