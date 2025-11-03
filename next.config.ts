import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: false,
  images: { unoptimized: true },
  basePath: '/next-example',
  assetPrefix: '/next-example/',
  trailingSlash: true
};

export default nextConfig;
