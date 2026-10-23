import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: `${process.env.SERV_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;