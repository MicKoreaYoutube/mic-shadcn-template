import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  eslint: {
    // 개발 중에도 ESLint 경고를 띄우도록 설정
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
