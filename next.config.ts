import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  outputFileTracingRoot: path.resolve(__dirname, "../../"),

  typescript: {
    ignoreBuildErrors: true,
  },

  // ❗ Removed eslint section (unsupported in Next v16)
  // ❗ Removed Turbopack loader rule (was causing panic)
  
  experimental: {
    turbo: false,              // ⛔ Disable Turbopack completely
    webpackBuildWorker: false  // Prevents crash during build
  },
};

export default nextConfig;
