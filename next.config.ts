import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NEXT_EXPORT=true 时输出静态文件，用于腾讯云 CloudBase 静态托管
  ...(process.env.NEXT_EXPORT === "true" && { output: "export" }),
};

export default nextConfig;
