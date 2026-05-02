import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.realcoresolutions.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;