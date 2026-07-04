import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/seo/web-design",
        destination: "/web-design",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/web-design",
        destination: "/seo/web-design",
      },
    ];
  },
};

export default nextConfig;
