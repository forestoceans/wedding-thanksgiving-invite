import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NEXT_EXPORT=true 时输出静态文件，用于腾讯云 CloudBase 静态托管
  ...(process.env.NEXT_EXPORT === "true" && { output: "export" }),

  // Turbopack 空配置，消除 Next.js 16 警告
  turbopack: {},

  // CloudBase JS SDK 包含 Node.js 适配器的动态 import，
  // 需要在客户端打包时忽略这些模块（用于 build 时的 webpack）
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        jsonwebtoken: false,
        '@cloudbase/signature-nodejs': false,
      };
    }
    return config;
  },
};

export default nextConfig;
