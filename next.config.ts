import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/matrix-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
