import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Temukan rule bawaan yang menangani SVG
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule?.test instanceof RegExp && rule.test.test(".svg")
    );

    // Exclude .svg dari file-loader bawaan
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Tambahkan rule SVGR untuk memproses SVG sebagai React Component
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
