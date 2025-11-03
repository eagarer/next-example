import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactStrictMode: false,
  basePath: '/next-example',
  assetPrefix: '/next-example/',
};

export default nextConfig;
