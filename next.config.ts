import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The resume section and PDF were removed; keep old links working.
    return [
      { source: "/resume.pdf", destination: "/#experience", permanent: false },
    ];
  },
};

export default nextConfig;
